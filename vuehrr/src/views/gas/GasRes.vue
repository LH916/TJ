<template>
  <div class="emergency-response">
    <!-- 应急预案流程 -->
    <el-card class="plan-flow">
      <flowchart
          :nodes="planNodes"
          :connections="planConnections"
          @node-click="handleNodeClick"
          class="flowchart-container">
      </flowchart>
    </el-card>

    <!-- 演练记录 -->
    <el-card class="drill-records">
      <el-timeline>
        <el-timeline-item
            v-for="(record, index) in drillRecords"
            :key="'record_' + index"
            :timestamp="record.time"
            placement="top">
          <div class="record-item">
            <span>{{ record.description }}</span>
            <el-tag
                size="mini"
                :type="tagType(record.type)"
                class="record-tag">
              {{ record.type }}
            </el-tag>
          </div>
        </el-timeline-item>
      </el-timeline>
    </el-card>

    <!-- 流程节点详情弹窗 -->
    <node-detail-dialog
        :visible.sync="detailVisible"
        :node="selectedNode"
        @close="handleDialogClose"/>
  </div>
</template>

<script>
import Flowchart from 'vue-flowchart'
import NodeDetailDialog from '../../components/NodeDetailDialog.vue'

export default {
  name: 'EmergencyResponse',
  components: {
    Flowchart,
    NodeDetailDialog
  },
  data() {
    return {
      planNodes: [],          // 流程图节点数据
      planConnections: [],    // 流程图连接线
      drillRecords: [],       // 演练记录数据
      selectedNode: null,     // 当前选中节点
      detailVisible: false,   // 详情弹窗可见性
      isLoading: false        // 加载状态
    }
  },
  mounted() {
    this.initData()
  },
  methods: {
    // 初始化数据
    async initData() {
      try {
        this.isLoading = true
        // 模拟API请求
        await this.loadPlanData()
        await this.loadDrillRecords()
      } catch (error) {
        this.$message.error('数据加载失败: ' + error.message)
      } finally {
        this.isLoading = false
      }
    },

    // 加载预案数据（模拟）
    loadPlanData() {
      return new Promise(resolve => {
        setTimeout(() => {
          this.planNodes = [
            {
              id: 1,
              text: '事件报告',
              top: 50,
              left: 100,
              details: {
                responseTime: '≤30分钟',
                responsible: '值班室',
                contact: '内线110',
                steps: ['接收报警信息', '确认事件详情', '记录事件日志']
              }
            },
            {
              id: 2,
              text: '预案启动',
              top: 150,
              left: 100,
              details: {
                responseTime: '≤15分钟',
                responsible: '应急指挥部',
                contact: '内线119',
                steps: ['评估事件级别', '启动对应预案', '通知相关人员']
              }
            }
          ]
          this.planConnections = [
            { from: 1, to: 2, label: '初步研判' }
          ]
          resolve()
        }, 500)
      })
    },

    // 加载演练记录（模拟）
    loadDrillRecords() {
      return new Promise(resolve => {
        setTimeout(() => {
          this.drillRecords = [
            {
              time: '2023-03-15 14:00',
              description: '消防应急疏散演练',
              type: '消防'
            },
            {
              time: '2023-06-01 09:30',
              description: '防汛抗台实战演练',
              type: '防汛'
            }
          ]
          resolve()
        }, 300)
      })
    },

    // 处理节点点击事件
    handleNodeClick(node) {
      this.selectedNode = node
      this.detailVisible = true
    },

    // 标签类型映射
    tagType(recordType) {
      const typeMap = {
        '消防': 'danger',
        '医疗': 'success',
        '防汛': 'warning',
        '常规': ''
      }
      return typeMap[recordType] || 'info'
    },

    // 处理弹窗关闭
    handleDialogClose() {
      this.detailVisible = false
      this.selectedNode = null
    }
  }
}
</script>

<style scoped>
.emergency-response {
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 20px;
  background: #f0f2f5;
}

.plan-flow {
  flex: 2;
  margin-bottom: 20px;
  min-height: 500px;
}

.drill-records {
  flex: 1;
  overflow: hidden;
}

.flowchart-container {
  height: 100%;
}

.record-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
}

.record-tag {
  margin-left: 10px;
}

::v-deep .flowchart-node {
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.15);
  }

  &.active {
    border: 2px solid #409EFF;
  }
}

.el-timeline {
  padding: 0 20px;
}
</style>