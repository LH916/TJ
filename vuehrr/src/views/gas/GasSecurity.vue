<template>
  <div class="safety-warning">
    <!-- 预警地图 -->
    <div class="warning-map">
      <unity-viewer :scenes="warningScenes"></unity-viewer>
      <div class="warning-legend">
        <div v-for="item in legendData" :key="item.level">
          <i :style="{backgroundColor: item.color}"></i>
          <span>{{ item.label }}</span>
        </div>
      </div>
    </div>

    <!-- 预警列表 -->
    <el-card class="warning-list">
      <el-table :data="warningData">
        <el-table-column prop="time" label="时间" width="180"></el-table-column>
        <el-table-column prop="type" label="预警类型"></el-table-column>
        <el-table-column prop="level" label="等级">
          <template #default="{row}">
            <el-tag :type="row.level | levelFilter">{{ row.level }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template #default="{row}">
            <el-button size="mini" @click="handleProcess(row)">处置</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      warningData: [],
      legendData: [
        { level: 'high', color: '#f56c6c', label: '高危' },
        { level: 'medium', color: '#e6a23c', label: '中危' },
        { level: 'low', color: '#67c23a', label: '低危' }
      ]
    }
  },
  filters: {
    levelFilter(level) {
      return { high: 'danger', medium: 'warning', low: 'success' }[level]
    }
  },
  methods: {
    handleProcess(row) {
      this.$confirm('确认完成处置?', '提示').then(() => {
        this.postRequest('/gas/warning/process', { id: row.id })
      })
    }
  },
  name: "GasSecurity"
}
</script>

<style scoped>
.safety-warning {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
}
.warning-map {
  position: relative;
  height: 700px;
  .warning-legend {
    position: absolute;
    right: 20px;
    bottom: 20px;
    background: rgba(255,255,255,0.9);
    padding: 10px;
    i {
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-right: 5px;
    }
  }
}
</style>