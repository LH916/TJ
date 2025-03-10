<template>
  <div class="risk-area-chart">
    <div ref="chart" style="height: 400px"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
import { debounce } from 'lodash'

export default {
  name: 'RiskAreaChart',
  props: {
    data: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  data() {
    return {
      chartInstance: null,
      chartOptions: {
        title: {
          text: '区域风险等级分布',
          left: 'center'
        },
        tooltip: {
          trigger: 'axis',
          formatter: params => {
            return `${params[0].name}<br/>
              高风险: ${params[0].value[3]} 项<br/>
              中风险: ${params[0].value[2]} 项<br/>
              低风险: ${params[0].value[1]} 项`
          }
        },
        xAxis: {
          type: 'category',
          data: [],
          axisLabel: {
            rotate: 45
          }
        },
        yAxis: {
          type: 'value',
          name: '风险项数量'
        },
        legend: {
          data: ['高风险', '中风险', '低风险'],
          bottom: 10
        },
        series: [
          {
            name: '高风险',
            type: 'bar',
            stack: 'risk',
            itemStyle: { color: '#f56c6c' },
            data: []
          },
          {
            name: '中风险',
            type: 'bar',
            stack: 'risk',
            itemStyle: { color: '#e6a23c' },
            data: []
          },
          {
            name: '低风险',
            type: 'bar',
            stack: 'risk',
            itemStyle: { color: '#67c23a' },
            data: []
          }
        ]
      }
    }
  },
  watch: {
    data: {
      deep: true,
      handler(newVal) {
        this.updateChartData(newVal)
      }
    }
  },
  mounted() {
    this.initChart()
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
    if (this.chartInstance) {
      this.chartInstance.dispose()
    }
  },
  methods: {
    initChart() {
      this.chartInstance = echarts.init(this.$refs.chart)
      this.chartInstance.setOption(this.chartOptions)
    },
    updateChartData(data) {
      const xData = data.map(item => item.area)
      const highData = data.map(item => item.high)
      const mediumData = data.map(item => item.medium)
      const lowData = data.map(item => item.low)

      this.chartInstance.setOption({
        xAxis: { data: xData },
        series: [
          { data: highData },
          { data: mediumData },
          { data: lowData }
        ]
      })
    },
    handleResize: debounce(function() {
      this.chartInstance.resize()
    }, 300)
  }
}
</script>

<style scoped>
.risk-area-chart {
  padding: 20px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,0.1);
}
</style>