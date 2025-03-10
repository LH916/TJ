<template>
  <div class="risk-analysis">
    <el-row :gutter="20">
      <!-- 风险矩阵图 -->
      <el-col :span="12">
        <el-card class="matrix-card">
          <div id="riskMatrix" style="height:400px"></div>
        </el-card>
      </el-col>

      <!-- 热力图 -->
      <el-col :span="12">
        <el-card class="heatmap-card">
          <div id="heatmap" style="height:400px"></div>
        </el-card>
      </el-col>
    </el-row>

    <!-- 分析报告 -->
    <el-card class="report-card">
      <el-tabs v-model="activeTab">
        <el-tab-pane label="区域分析" name="area">
          <risk-area-chart :data="areaData"></risk-area-chart>
        </el-tab-pane>
        <el-tab-pane label="类型分析" name="type">
          <risk-type-chart :data="typeData"></risk-type-chart>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
import * as echarts from 'echarts'
import RiskAreaChart from '../../components/RiskAreaChart.vue'
import RiskTypeChart from '../../components/RiskTypeChart.vue'

export default {
  components: { RiskAreaChart, RiskTypeChart },
  data() {
    return {
      activeTab: 'area',
      areaData: [],
      typeData: []
    }
  },
  mounted() {
    this.initCharts()
    this.loadRiskData()
  },
  methods: {
    initCharts() {
      // 风险矩阵图
      const matrixChart = echarts.init(document.getElementById('riskMatrix'))
      matrixChart.setOption({
        tooltip: { formatter: params => `${params.data[2]}项` },
        xAxis: { name: '可能性', type: 'category', data: ['低', '中', '高'] },
        yAxis: { name: '严重性', type: 'category', data: ['低', '中', '高'] },
        visualMap: { min: 0, max: 20, calculable: true },
        series: [{
          type: 'heatmap',
          data: [],
          itemStyle: { borderWidth: 2 }
        }]
      })

      // 热力图
      const heatmapChart = echarts.init(document.getElementById('heatmap'))
      heatmapChart.setOption({
        tooltip: { position: 'top' },
        calendar: { top: 'middle', left: 'center', cellSize: ['auto', 20] },
        visualMap: { min: 0, max: 100 },
        series: [{
          type: 'heatmap',
          coordinateSystem: 'calendar',
          data: []
        }]
      })
    },
    async loadRiskData() {
      const res = await this.getRequest('/gas/risk/analysis')
      this.areaData = res.area
      this.typeData = res.type
    }
  },
  name: "GasRisk"
}
</script>

<style>
.matrix-card, .heatmap-card {
  margin-bottom: 20px;
}
.report-card {
  margin-top: 20px;
}
</style>
