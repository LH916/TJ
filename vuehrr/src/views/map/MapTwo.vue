<template>
  <div id="mapCon">
    <!-- 控制面板 -->
    <div class="control-panel">
      <button @click="startDrawing('point')">绘制点</button>
      <button @click="startMeasuring('distance')">距离测量</button>
      <button @click="startMeasuring('area')">面积测量</button>
      <button @click="clearAll">清除所有</button>
    </div>

    <!-- 坐标显示 -->
    <div class="coords-display">
      {{ coords.lng.toFixed(5) }},{{ coords.lat.toFixed(5) }}
    </div>

    <!-- 测量结果显示 -->
    <div class="info-display">
      <div v-if="currentMeasurement">
        {{ currentMeasurement }}
      </div>
    </div>

    <!-- 锚点管理面板 -->
    <div class="anchor-panel" :class="{ folded: isPanelFolded }">
      <div class="panel-header">
        <h3>锚点管理</h3>
        <div class="panel-controls">
          <button @click="togglePanel">{{ isPanelFolded ? '展开' : '折叠' }}</button>
          <button @click="startAddAnchorMode">+</button>
        </div>
      </div>
      <div v-if="!isPanelFolded" class="panel-content">
        <div v-for="anchor in anchors" :key="anchor.id" class="anchor-item">
          <span class="anchor-name" @click="flyToAnchor(anchor)">{{ anchor.name }}</span>
          <div class="item-actions">
            <button @click="deleteAnchor(anchor.id)">删除</button>
          </div>
        </div>
      </div>
    </div>

    <!-- 添加锚点弹窗 -->
    <div v-if="showAddForm" class="add-form-modal">
      <div class="add-form">
        <h3>新增锚点</h3>
        <div class="form-group">
          <label>名称：</label>
          <input v-model="newAnchor.name" placeholder="请输入锚点名称">
        </div>
        <div class="form-group">
          <label>描述：</label>
          <textarea v-model="newAnchor.description" rows="3"></textarea>
        </div>
        <div class="form-group">
          <label>坐标：</label>
          <span>{{ newAnchor.lng.toFixed(4) }}, {{ newAnchor.lat.toFixed(4) }}</span>
        </div>
        <div class="media-upload">
          <div class="upload-item">
            <label>图片：</label>
            <input type="file" accept="image/*" @change="handleFileUpload('image', $event)">
            <img v-if="newAnchor.image" :src="newAnchor.image" class="preview">
          </div>
          <div class="upload-item">
            <label>音频：</label>
            <input type="file" accept="audio/*" @change="handleFileUpload('audio', $event)">
            <audio v-if="newAnchor.audio" :src="newAnchor.audio" controls class="preview"></audio>
          </div>
          <div class="upload-item">
            <label>视频：</label>
            <input type="file" accept="video/*" @change="handleFileUpload('video', $event)">
            <video v-if="newAnchor.video" :src="newAnchor.video" controls class="preview"></video>
          </div>
        </div>
        <div class="form-buttons">
          <button class="save-btn" @click="saveAnchor">保存</button>
          <button class="cancel-btn" @click="cancelAdd">取消</button>
        </div>
      </div>
    </div>
    <!-- 添加媒体展示模态框 -->
    <div v-if="showMediaModal" class="media-modal">
      <div class="media-content">
        <button class="close-btn" @click="closeMediaModal">返回</button>
        <img v-if="currentMediaType === 'image'" :src="currentMedia" @click="closeMediaModal">
        <video v-if="currentMediaType === 'video'" :src="currentMedia" controls autoplay></video>
      </div>
    </div>
  </div>
</template>

<script>
import mapboxgl from 'mapbox-gl';
import turf from '@turf/turf';
import 'mapbox-gl/dist/mapbox-gl.css';

export default {
  name: 'MapTwo',
  data() {
    return {
      map: null,
      coords: { lng: 0, lat: 0 },
      currentMode: null,
      drawPoints: [],
      tempLayers: [],
      currentMeasurement: null,
      measurePoints: [],
      drawnLayers: [],
      markers: [],
      isPanelFolded: false,
      showAddForm: false,
      newAnchor: {
        id: null,
        name: '',
        description: '',
        lng: 0,
        lat: 0,
        image: null,
        audio: null,
        video: null
      },
      // 示例数据
      anchors: [
        {
          id: 1,
          name: '北京故宫',
          lng: 116.39413,
          lat: 39.91884,
          description: '明清两代皇家宫殿',
          image: 'https://video.cgtn.com/news/2020-09-10/China-s-Forbidden-City-celebrates-six-centuries-of-history-TG2vpK4nlK/video/e83439df8f984b249d56901e67f89d72/e83439df8f984b249d56901e67f89d72-1920.jpg',
          audio: 'https://lv-sycdn.kuwo.cn/a4a2041b99eb0b0dc958a909ca50372a/67c7fd75/resource/30106/trackmedia/M500003VQ8ji23dMmt.mp3',
          video: 'https://obs.nasuyun.com/videos/cherry/a68193deb063ceea3f4a853cd19c8a83/vecteezy_china-time-lapse-4k-of-the-people-wander-in-the-temple-of_24572093_500_282.mp4'
        },
        {
          id: 2,
          name: '上海东方明珠',
          lng: 121.4997,
          lat: 31.2397,
          description: '上海标志性建筑',
          image: 'https://example.com/oriental-pearl.jpg',
          audio: 'https://example.com/oriental-pearl.mp3',
          video: 'https://example.com/oriental-pearl.mp4'
        }
      ],
      showMediaModal: false,
      currentMedia: null,
      currentMediaType: null
    };
  },
  mounted() {
    this.initializeMap();
    this.addExistingMarkers();
  },
  methods: {
    initializeMap() {
      this.map = new mapboxgl.Map({
        container: 'mapCon',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [114.417036, 23.107509],
        zoom: 12
      });

      this.map.on('mousemove', (e) => {
        this.coords = e.lngLat;
      });

      this.map.on('click', (e)=>{
        this.handleLeftClick(e);

      });
      this.map.on('contextmenu', this.handleRightClick);
    },

    startDrawing(mode) {
      this.clearTempLayers();
      this.currentMode = mode;
      this.measurePoints = [];
    },

    startMeasuring(type) {
      this.clearTempLayers();
      this.currentMode = type;
      this.measurePoints = [];
      this.currentMeasurement = null;
    },

    handleLeftClick(e) {
      if (this.showAddForm) {
        this.newAnchor.lng = e.lngLat.lng;
        this.newAnchor.lat = e.lngLat.lat;
        return;
      }

      if (!this.currentMode) return;

      const coord = [e.lngLat.lng, e.lngLat.lat];

      switch(this.currentMode) {
        case 'point':
          this.drawPoint(coord);
          break;
        case 'distance':
          this.measureDistanceStep(coord);
          break;
        case 'area':
          this.measureAreaStep(coord);
          break;
      }
    },

    handleRightClick(e) {
      if (this.currentMode === 'area' && this.measurePoints.length >= 3) {
        e.preventDefault();
        this.completeAreaMeasurement();
      }
    },

    drawPoint(coord) {
      const layerId = `point-${Date.now()}`;

      this.map.addLayer({
        id: layerId,
        type: 'circle',
        source: {
          type: 'geojson',
          data: {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: coord
            }
          }
        },
        paint: {
          'circle-radius': 6,
          'circle-color': '#ff0000'
        }
      });

      this.drawnLayers.push(layerId);
      this.currentMeasurement = `点坐标: ${coord[0].toFixed(5)}, ${coord[1].toFixed(5)}`;
    },

    measureDistanceStep(coord) {
      this.measurePoints.push(coord);

      if (this.measurePoints.length === 1) {
        this.addTempMarker(coord);
      } else if (this.measurePoints.length === 2) {
        const distance = turf.distance(
            turf.point(this.measurePoints[0]),
            turf.point(coord),
            { units: 'kilometers' }
        );

        this.addLineLayer(this.measurePoints, '#3b82f6');
        this.currentMeasurement = `距离: ${(distance * 1000).toFixed(2)} 米`;
        this.clearTempLayers();
        this.measurePoints = [];
      }
    },

    measureAreaStep(coord) {
      this.measurePoints.push(coord);
      this.addTempMarker(coord);

      if (this.measurePoints.length > 1) {
        this.updateTempLine();
      }
    },

    completeAreaMeasurement() {
      const polygonCoords = [...this.measurePoints, this.measurePoints[0]];
      this.addLineLayer(polygonCoords, '#3b82f6');
      this.addPolygonLayer(polygonCoords);

      const polygon = turf.polygon([polygonCoords]);
      const area = turf.area(polygon);
      this.currentMeasurement = `面积: ${area.toFixed(2)} 平方米`;

      this.clearTempLayers();
      this.measurePoints = [];
    },

    addTempMarker(coord) {
      const marker = new mapboxgl.Marker({ color: '#ff0000' })
          .setLngLat(coord)
          .addTo(this.map);
      this.tempLayers.push(marker);
    },

    updateTempLine() {
      if (this.map.getLayer('temp-line')) {
        this.map.removeLayer('temp-line');
        this.map.removeSource('temp-line');
      }

      const line = {
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: this.measurePoints
        }
      };

      this.map.addLayer({
        id: 'temp-line',
        type: 'line',
        source: {
          type: 'geojson',
          data: line
        },
        paint: {
          'line-color': '#ff0000',
          'line-width': 2
        }
      });

      this.tempLayers.push('temp-line');
    },

    addLineLayer(coords, color) {
      const layerId = `line-${Date.now()}`;
      const line = {
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: coords
        }
      };

      this.map.addLayer({
        id: layerId,
        type: 'line',
        source: {
          type: 'geojson',
          data: line
        },
        paint: {
          'line-color': color,
          'line-width': 3
        }
      });

      this.drawnLayers.push(layerId);
    },

    addPolygonLayer(coords) {
      const layerId = `polygon-${Date.now()}`;
      const polygon = {
        type: 'Feature',
        geometry: {
          type: 'Polygon',
          coordinates: [coords]
        }
      };

      this.map.addLayer({
        id: layerId,
        type: 'fill',
        source: {
          type: 'geojson',
          data: polygon
        },
        paint: {
          'fill-color': '#3b82f6',
          'fill-opacity': 0.5
        }
      });

      this.drawnLayers.push(layerId);
    },

    clearTempLayers() {
      this.tempLayers.forEach(layer => {
        if (typeof layer === 'string') {
          if (this.map.getLayer(layer)) this.map.removeLayer(layer);
          if (this.map.getSource(layer)) this.map.removeSource(layer);
        } else {
          layer.remove();
        }
      });
      this.tempLayers = [];
    },

    clearAll() {
      this.clearTempLayers();
      this.drawnLayers.forEach(layerId => {
        if (this.map.getLayer(layerId)) this.map.removeLayer(layerId);
        if (this.map.getSource(layerId)) this.map.removeSource(layerId);
      });
      this.drawnLayers = [];
      this.currentMode = null;
      this.currentMeasurement = null;
      this.measurePoints = [];
    },

    addExistingMarkers() {
      this.anchors.forEach(anchor => {
        this.addMarker(anchor);
      });
    },

    generatePopupContent(anchor) {
      return `
    <div class="popup-content">
      <h4>${anchor.name}</h4>
      <p>坐标: ${anchor.lng.toFixed(5)}, ${anchor.lat.toFixed(5)}</p>
      <div class="media-controls">
        ${anchor.image ? `
          <button class="media-btn" data-type="image" data-url="${anchor.image}">
            显示图片
          </button>` : ''}
        ${anchor.video ? `
          <button class="media-btn" data-type="video" data-url="${anchor.video}">
            播放视频
          </button>` : ''}
      </div>
      ${anchor.audio ? `
        <audio controls class="audio-player">
          <source src="${anchor.audio}" type="audio/mpeg">
        </audio>` : ''}
      <p class="description">${anchor.description}</p>
    </div>
  `;
    },

    triggerMedia(type, url) {
      this.currentMedia = url;
      this.currentMediaType = type;
      this.showMediaModal = true;
    },

    closeMediaModal() {
      this.showMediaModal = false;
      this.currentMedia = null;
      this.currentMediaType = null;
    },

    // 修改addMarker方法绑定组件实例
    addMarker(anchor) {
      const el = document.createElement('div');
      el.className = 'marker';
      el.innerHTML = '📍';

      // 创建封闭的作用域处理函数
      const handleMediaButton = (type, url) => {
        this.triggerMedia(type, url);
      };

      const popupContent = this.generatePopupContent(anchor);
      const popup = new mapboxgl.Popup({ offset: 25 })
          .setHTML(popupContent)
          .on('open', () => {
            // 绑定事件监听器到实际DOM元素
            const popupDOM = popup.getElement();
            popupDOM.querySelectorAll('.media-btn').forEach(btn => {
              btn.onclick = (e) => {
                const type = e.currentTarget.dataset.type;
                const url = e.currentTarget.dataset.url;
                handleMediaButton(type, url);
              };
            });
          });

      const marker = new mapboxgl.Marker(el)
          .setLngLat([anchor.lng, anchor.lat])
          .setPopup(popup)
          .addTo(this.map);

      this.markers.push({
        id: anchor.id,
        marker
      });
    },

    startAddAnchorMode() {
      this.showAddForm = true;
      this.newAnchor = {
        id: Date.now(),
        name: '',
        description: '',
        lng: this.map.getCenter().lng,
        lat: this.map.getCenter().lat,
        image: null,
        audio: null,
        video: null
      };
    },

    handleFileUpload(type, event) {
      const file = event.target.files[0];
      if (file) {
        this.newAnchor[type] = URL.createObjectURL(file);
      }
    },

    saveAnchor() {
      this.anchors.push({ ...this.newAnchor });
      this.addMarker(this.newAnchor);
      this.showAddForm = false;
    },

    cancelAdd() {
      this.showAddForm = false;
      // 清理临时URL
      ['image', 'audio', 'video'].forEach(type => {
        if (this.newAnchor[type]) URL.revokeObjectURL(this.newAnchor[type]);
      });
    },

    deleteAnchor(id) {
      const index = this.anchors.findIndex(a => a.id === id);
      if (index !== -1) {
        // 删除地图标记
        const markerIndex = this.markers.findIndex(m => m.id === id);
        this.markers[markerIndex].marker.remove();
        this.markers.splice(markerIndex, 1);
        // 删除数据
        this.anchors.splice(index, 1);
      }
    },

    flyToAnchor(anchor) {
      this.map.flyTo({
        center: [anchor.lng, anchor.lat],
        zoom: 15,
        essential: true
      });
    },

    togglePanel() {
      this.isPanelFolded = !this.isPanelFolded;
    }
  },
  beforeDestroy() {
    if (this.map) this.map.remove();
  }

};
</script>

<style scoped>
#mapCon {
  height: 100vh;
  width: 100%;
  position: relative;
}

.control-panel {
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 1;
  display: flex;
  gap: 8px;
  background: rgba(255, 255, 255, 0.9);
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

button {
  padding: 8px 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: #fff;
  cursor: pointer;
  transition: all 0.2s;
}

button:hover {
  background: #f0f0f0;
  transform: translateY(-1px);
}

.coords-display {
  position: absolute;
  bottom: 20px;
  left: 20px;
  background: rgba(255, 255, 255, 0.9);
  padding: 10px 20px;
  border-radius: 6px;
  font-family: monospace;
  font-size: 14px;
  z-index: 1;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.info-display {
  position: absolute;
  bottom: 20px;
  right: 20px;
  background: rgba(255, 255, 255, 0.9);
  padding: 10px 20px;
  border-radius: 6px;
  font-family: Arial, sans-serif;
  font-size: 14px;
  z-index: 1;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
.anchor-panel {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 300px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  z-index: 100;
  transition: 0.3s all;
}

.anchor-panel.folded {
  width: 100px;
}

.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  border-bottom: 1px solid #eee;
}

.panel-controls button {
  margin-left: 8px;
  padding: 4px 8px;
}

.panel-content {
  max-height: 60vh;
  overflow-y: auto;
}

.anchor-item {
  padding: 12px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.anchor-name {
  cursor: pointer;
  color: #1890ff;
}

.anchor-name:hover {
  text-decoration: underline;
}

.add-form-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.add-form {
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 500px;
  max-width: 90%;
}

.form-group {
  margin-bottom: 16px;
}

.form-group label {
  display: block;
  margin-bottom: 4px;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.media-upload {
  margin: 16px 0;
}

.upload-item {
  margin: 12px 0;
}

.preview {
  max-width: 100%;
  max-height: 100px;
  margin-top: 8px;
}

.form-buttons {
  text-align: right;
  margin-top: 16px;
}

.save-btn {
  background: #1890ff;
  color: white;
}

.cancel-btn {
  background: #f0f0f0;
}

.marker {
  font-size: 24px;
  cursor: pointer;
}

.popup-content {
  max-width: 300px;
}

.popup-img {
  max-width: 100%;
  height: auto;
  margin: 8px 0;
}

.media-container audio,
.media-container video {
  width: 100%;
  margin-top: 8px;
}
.media-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
}

.media-content {
  position: relative;
  max-width: 90%;
  max-height: 90vh;
}

.media-content img {
  max-height: 80vh;
  max-width: 100%;
  cursor: pointer;
}

.media-content video {
  max-width: 80vw;
  max-height: 80vh;
}

.close-btn {
  position: absolute;
  top: -40px;
  right: 0;
  padding: 8px 16px;
  background: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

/* 修改弹窗内按钮样式 */
.media-btn {
  margin: 4px;
  padding: 6px 12px;
  background: #1890ff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.audio-player {
  width: 100%;
  margin-top: 8px;
}
</style>

