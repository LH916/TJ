<template>
  <div class="gas-module">
    <h3>日常巡检模块</h3>
    <!-- 三维模型展示区 -->
    <div class="unity-container" ref="unityContainer"></div>
    <!-- 巡检任务列表 -->
    <el-table :data="tasks">
      <el-table-column prop="time" label="时间"></el-table-column>
      <el-table-column prop="location" label="位置"></el-table-column>
      <el-table-column label="状态">
        <template #default="{row}">
          <el-tag :type="row.status | statusFilter">{{row.status}}</el-tag>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasks: [
        { time: '08:00', location: '压缩机房', status: '已完成' },
        { time: '12:00', location: '储气罐区', status: '进行中' }
      ]
    }
  },
  filters: {
    statusFilter(status) {
      const map = { '已完成': 'success', '进行中': 'warning' }
      return map[status]
    }
  },
  name: "GasIns"
}
</script>