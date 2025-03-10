<template>
  <el-dialog
      :visible.sync="visible"
      :title="node.text"
      width="600px"
      @close="$emit('close')">
    <div v-if="node" class="detail-content">
      <el-descriptions :column="1" border>
        <el-descriptions-item label="响应时限">
          <el-tag type="warning">{{ node.details.responseTime }}</el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="责任部门">
          {{ node.details.responsible }}
        </el-descriptions-item>
        <el-descriptions-item label="联系方式">
          {{ node.details.contact }}
        </el-descriptions-item>
      </el-descriptions>

      <el-divider content-position="left">处置流程</el-divider>

      <ol class="process-steps">
        <li v-for="(step, index) in node.details.steps" :key="index">
          <span class="step-index">步骤{{ index + 1 }}</span>
          {{ step }}
        </li>
      </ol>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: 'NodeDetailDialog',
  props: {
    visible: Boolean,
    node: Object
  }
}
</script>

<style scoped>
.detail-content {
  padding: 10px 20px;
}

.process-steps {
  padding-left: 20px;
}

.process-steps li {
  margin: 10px 0;
  padding: 8px;
  background: #f8f9fa;
  border-radius: 4px;
}

.step-index {
  display: inline-block;
  margin-right: 10px;
  padding: 2px 8px;
  background: #409EFF;
  color: white;
  border-radius: 3px;
  font-size: 12px;
}
</style>