<template>
  <div class="monitoring-container">
    <el-row :gutter="20">
      <!-- 三维可视化区域 -->
      <el-col :span="16">
        <div class="unity-view">
          <iframe :src="unityUrl" frameborder="0"></iframe>
        </div>
      </el-col>

      <!-- 实时数据看板 -->
      <el-col :span="8">
        <el-card class="data-panel">
          <div slot="header">
            <span>实时监测数据</span>
            <el-button-group class="time-switch">
              <el-button size="mini" @click="changeTimeRange('realtime')">实时</el-button>
              <el-button size="mini" @click="changeTimeRange('day')">24小时</el-button>
            </el-button-group>
          </div>
          <div class="sensor-list">
            <div v-for="item in sensorData" :key="item.id" class="sensor-item">
              <div class="sensor-header">
                <i class="el-icon-monitor"></i>
                <span>{{ item.name }}</span>
                <el-tag :type="item.status | statusFilter" size="mini">{{ item.status }}</el-tag>
              </div>
              <div class="sensor-body">
                <el-progress
                    :percentage="item.value"
                    :color="item.value | valueColor"
                    :show-text="false"></el-progress>
                <span class="value">{{ item.value }}{{ item.unit }}</span>
              </div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <!-- 历史趋势图表 -->
    <el-card class="history-chart">
      <div slot="header">
        <span>压力变化趋势</span>
        <el-date-picker
            v-model="chartDate"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            size="mini"
            @change="loadHistoryData">
        </el-date-picker>
      </div>
      <div id="pressureChart" style="height:300px"></div>
    </el-card>
  </div>
</template>

<script>
import * as echarts from 'echarts'

export default {
  data() {
    return {
      unityUrl: '/static/unity/gas-monitor.html',
      sensorData: [],
      chartDate: '',
      chartInstance: null
    }
  },
  mounted() {
    this.initChart()
    this.loadRealTimeData()
  },
  methods: {
    initChart() {
      this.chartInstance = echarts.init(document.getElementById('pressureChart'))
      this.chartInstance.setOption({
        tooltip: { trigger: 'axis' },
        xAxis: { type: 'time' },
        yAxis: { name: '压力(MPa)' },
        series: [{ type: 'line', smooth: true }]
      })
    },
    async loadRealTimeData() {
      const res = await this.getRequest('/gas/monitoring/realtime')
      this.sensorData = res.data
    },
    async loadHistoryData() {
      const res = await this.postRequest('/gas/monitoring/history', {
        start: this.chartDate[0],
        end: this.chartDate[1]
      })
      this.chartInstance.setOption({
        series: [{ data: res.data }]
      })
    }
  },
  filters: {
    statusFilter(status) {
      return status === 'normal' ? 'success' : 'danger'
    },
    valueColor(value) {
      return value > 80 ? '#f56c6c' : value > 60 ? '#e6a23c' : '#67c23a'
    }
  },
  name:"GasMonitor"
}
</script>

<style scoped>
.unity-view {
  height: 600px;
  background: #1a1a1a;
  iframe {
    width: 100%;
    height: 100%;
  }
}
.sensor-item {
  margin-bottom: 15px;
  .sensor-header {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    i { margin-right: 5px; }
    span { flex: 1; }
  }
  .sensor-body {
    display: flex;
    align-items: center;
    .el-progress { flex: 1; margin-right: 10px; }
    .value { width: 60px; text-align: right; }
  }
}
.history-chart {
  margin-top: 20px;
}
</style>