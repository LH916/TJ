<template>
  <div id="mapCon">
    <!-- 视角切换控件 -->
    <div class="map-control top-left">
      <button @click="switchView('default')">默认视角</button>
      <button @click="switchView('top')">俯视视角</button>
      <button @click="switchView('north')">正北视角</button>
    </div>
    <!-- 光照控制 -->
    <div class="map-control top-right">
      <div class="light-control">
        <label>光照角度：</label>
        <input type="range" v-model="lightAngle" min="0" max="360" step="1">
        <span>{{ lightAngle }}°</span>
      </div>
      <div class="light-control">
        <label>光照强度：</label>
        <input type="range" v-model="lightIntensity" min="0" max="1" step="0.1">
        <span>{{ lightIntensity }}</span>
      </div>
    </div>
    <!-- 坐标显示 -->
    <div class="map-control bottom-right coordinate-display">
      经度: {{ lng }}<br>
      纬度: {{ lat }}<br>
      海拔: {{ elevation }}m
    </div>
    <!-- 地标控制 -->
    <div class="map-control bottom-left">
      <button @click="enableAddMarker">添加地标</button>
      <div v-if="markers.length > 0">
        <h4>已有地标:</h4>
        <ul>
          <li v-for="marker in markers" :key="marker.id">
            {{ marker.name }}
            <button @click="goToMarker(marker)">跳转</button>
            <button @click="removeMarker(marker.id)">删除</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import mapboxgl from '../../utils/mapbox';

export default {
  name: '3DMap',
  data() {
    return {
      map: null,
      lng: '-74.0066',
      lat: '40.7135',
      elevation: 'N/A',
      lightAngle: 135,
      lightIntensity: 0.7,
      markers: [],
      addingMarker: false,
      nextMarkerId: 1 // 用于生成唯一ID
    }
  },
  watch: {
    lightAngle() {
      this.updateLighting();
    },
    lightIntensity() {
      this.updateLighting();
    }
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      this.map = new mapboxgl.Map({
        container: 'mapCon',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-74.0066, 40.7135],
        zoom: 16,
        pitch: 60,
        bearing: -17.6,
        antialias: true,
        terrain: {
          source: 'mapbox-dem',
          exaggeration: 1.5
        }
      });
      this.map.on('load', () => {
        this.map.addSource('mapbox-dem', {
          type: 'raster-dem',
          url: 'mapbox://mapbox.mapbox-terrain-dem-v1',
          tileSize: 512,
          maxzoom: 14
        });
        setTimeout(() => {
          this.add3DBuildings();
          this.updateLighting();
          this.setupCoordinateDisplay();
        }, 1000);
      });
      this.map.on('click', this.handleMapClick);
    },
    handleMapClick(e) {
      if (this.addingMarker) {
        const markerId = this.nextMarkerId++;
        const marker = {
          id: markerId,
          name: `地标 ${markerId}`,
          lng: e.lngLat.lng,
          lat: e.lngLat.lat
        };
        this.addMarker(marker);
        this.addingMarker = false; // 添加完地标后关闭添加模式
      }
    },
    add3DBuildings() {
      const layers = this.map.getStyle().layers;
      const labelLayer = layers.find(layer => layer.type === 'symbol' && layer.layout['text-field']);
      this.map.addLayer({
        id: '3d-buildings',
        source: 'composite',
        'source-layer': 'building',
        filter: ['all', ['==', 'extrude', 'true'], ['>=', 'height', 5]],
        type: 'fill-extrusion',
        minzoom: 15,
        paint: {
          'fill-extrusion-color': [
            'case',
            ['>=', ['get', 'height'], 50], '#ff6666',
            ['>=', ['get', 'height'], 20], '#ff9999',
            '#cccccc'
          ],
          'fill-extrusion-height': ['get', 'height'],
          'fill-extrusion-base': ['get', 'min_height'],
          'fill-extrusion-opacity': 0.9,
          'fill-extrusion-vertical-gradient': true
        }
      }, labelLayer ? labelLayer.id : undefined);
    },
    switchView(type) {
      const options = {
        default: { pitch: 60, bearing: -17.6, zoom: 16 },
        top: { pitch: 0, bearing: 0, zoom: 17 },
        north: { pitch: 45, bearing: 0, zoom: 16 }
      }[type];
      this.map.flyTo({
        ...options,
        center: [-74.0066, 40.7135],
        duration: 2000,
        essential: true
      });
    },
    setupCoordinateDisplay() {
      let lastUpdate = 0;
      const updateInterval = 50;
      const updateCoord = (lngLat) => {
        if (Date.now() - lastUpdate < updateInterval) return;
        this.lng = lngLat.lng.toFixed(4);
        this.lat = lngLat.lat.toFixed(4);
        try {
          const elev = this.map.queryTerrainElevation(lngLat);
          this.elevation = elev ? elev.toFixed(1) : 'N/A';
        } catch {
          this.elevation = 'N/A';
        }
        lastUpdate = Date.now();
      };
      this.map.on('mousemove', e => updateCoord(e.lngLat));
      this.map.on('touchmove', e => {
        if (e.points[0]) updateCoord(this.map.unproject(e.points[0]));
      });
    },
    updateLighting() {
      if (!this.map.getLayer('3d-buildings')) return;
      this.map.setPaintProperty('3d-buildings', 'fill-extrusion-light-azimuth', Number(this.lightAngle));
      this.map.setPaintProperty('3d-buildings', 'fill-extrusion-ambient', ['interpolate', ['linear'], ['zoom'], 15, 0, 16, this.lightIntensity]);
    },
    enableAddMarker() {
      this.addingMarker = true; // 启用添加地标模式
    },
    addMarker(marker) {
      // 创建自定义标记元素
      const el = document.createElement('div');
      el.className = 'marker'; // 添加类名以便于样式
      el.style.width = '40px'; // 设置宽度
      el.style.height = '40px'; // 设置高度
      el.style.backgroundImage = 'url("https://img.icons8.com/ios-filled/50/000000/marker.png")'; // 使用自定义图标
      el.style.backgroundSize = 'contain'; // 确保图标适应容器
      el.style.backgroundRepeat = 'no-repeat'; // 不重复背景
      el.style.cursor = 'pointer'; // 设置鼠标指针样式

      const mapMarker = new mapboxgl.Marker(el)
          .setLngLat([marker.lng, marker.lat])
          .setPopup(new mapboxgl.Popup().setText(marker.name)) // 添加弹出框
          .addTo(this.map);
      this.markers.push(marker);
    },
    goToMarker(marker) {
      this.map.flyTo({
        center: [marker.lng, marker.lat],
        zoom: 18, // 放大到更高的缩放级别
        pitch: 60,
        bearing: -17.6,
        duration: 2000,
        essential: true
      });
    },
    removeMarker(markerId) {
      this.markers = this.markers.filter(marker => marker.id !== markerId);
      this.updateMarkersOnMap();
    },
    updateMarkersOnMap() {
      // 清除现有标记
      this.map.eachLayer(layer => {
        if (layer instanceof mapboxgl.Marker) {
          layer.remove();
        }
      });
      // 重新添加标记
      this.markers.forEach(marker => {
        const el = document.createElement('div');
        el.className = 'marker';
        el.style.width = '40px';
        el.style.height = '40px';
        el.style.backgroundImage = 'url("https://img.icons8.com/ios-filled/50/000000/marker.png")'; // 使用自定义图标
        el.style.backgroundSize = 'contain';
        el.style.backgroundRepeat = 'no-repeat';
        el.style.cursor = 'pointer';

        new mapboxgl.Marker(el)
            .setLngLat([marker.lng, marker.lat])
            .setPopup(new mapboxgl.Popup().setText(marker.name))
            .addTo(this.map);
      });
    }
  }
}
</script>

<style scoped>
#mapCon {
  height: calc(100vh - 85px);
  width: 100%;
  position: relative;
}
.map-control {
  position: absolute;
  background: rgba(255, 255, 255, 0.95);
  padding: 12px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  z-index: 1;
  backdrop-filter: blur(2px);
}
.top-left {
  top: 20px;
  left: 20px;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}
.top-right {
  top: 20px;
  right: 20px;
}
.bottom-right {
  bottom: 20px;
  right: 20px;
}
.bottom-left {
  bottom: 20px;
  left: 20px;
}

button {
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 14px;
}

button:hover {
  transform: translateY(-1px);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

button.active {
  background: #3bb2d0;
  color: white;
}

button.danger {
  background: #ff4d4f;
  color: white;
}

button.secondary {
  background: #f0f0f0;
  color: #333;
}

.coordinate-display {
  min-width: 160px;
  font-family: 'Courier New', monospace;
  font-size: 14px;
  line-height: 1.4;
  pointer-events: none;
  background: rgba(255,255,255,0.9);
}
.light-control {
  margin: 8px 0;
  display: flex;
  align-items: center;
  gap: 8px;
}
.marker {
  cursor: pointer;
}
</style>
