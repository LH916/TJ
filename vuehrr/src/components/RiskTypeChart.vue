<template>
  <div class="risk-type-chart">
    <div ref="chart" style="height: 400px"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
import { debounce } from 'lodash'

export default {
  name: 'RiskTypeChart',
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
          text: '风险类型分布',
          left: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          top: 'middle'
        },
        series: [
          {
            name: '风险类型',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 2
            },
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '20',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
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
      const formattedData = data.map(item => ({
        name: item.type,
        value: item.count
      }))

      this.chartInstance.setOption({
        series: [{
          data: formattedData
        }]
      })
    },
    handleResize: debounce(function() {
      this.chartInstance.resize()
    }, 300)
  }
}
</script>

<style scoped>
.risk-type-chart {
  padding: 20px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,0.1);
}
</style>