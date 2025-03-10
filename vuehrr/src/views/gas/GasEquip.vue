<template>
  <div class="equipment-manage">
    <!-- 设备三维展示（现在为空白区域）-->
    <div class="equipment-viewer">
      <!-- 用一个 div 来占位，模拟 Unity 相关的显示区域 -->
      <div class="empty-viewer">
        <!-- 这里可以选择放置一张图片或者其他的占位内容 -->
        <p>设备三维展示区域（空白）</p>
      </div>
      <div class="equipment-tree">
        <el-tree
            :data="deviceTree"
            :props="treeProps"
            @node-click="handleNodeClick">
        </el-tree>
      </div>
    </div>

    <!-- 设备详情 -->
    <el-dialog :visible.sync="detailVisible">
      <el-descriptions :column="2" border>
        <el-descriptions-item label="设备编号">{{ currentDevice.id }}</el-descriptions-item>
        <el-descriptions-item label="设备类型">{{ currentDevice.type }}</el-descriptions-item>
        <el-descriptions-item label="安装位置">{{ currentDevice.location }}</el-descriptions-item>
        <el-descriptions-item label="维护周期">{{ currentDevice.maintenance }}</el-descriptions-item>
        <el-descriptions-item label="当前状态">
          <el-tag :type="currentDevice.status | statusFilter">
            {{ currentDevice.status }}
          </el-tag>
        </el-descriptions-item>
      </el-descriptions>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 静态数据，模拟设备树
      deviceTree: [
        {
          id: 1,
          name: '设备A',
          children: [
            {
              id: 2,
              name: '设备A-1',
              status: '运行中',
              type: '传感器',
              location: '位置A-1',
              maintenance: '每月'
            },
            {
              id: 3,
              name: '设备A-2',
              status: '停止',
              type: '阀门',
              location: '位置A-2',
              maintenance: '每季度'
            }
          ]
        },
        {
          id: 4,
          name: '设备B',
          children: [
            {
              id: 5,
              name: '设备B-1',
              status: '维护中',
              type: '泵',
              location: '位置B-1',
              maintenance: '每周'
            }
          ]
        }
      ],
      currentDevice: {},
      detailVisible: false,
      treeProps: {
        label: 'name',
        children: 'children'
      }
    }
  },
  methods: {
    // 设备树节点点击事件
    handleNodeClick(data) {
      if (!data.children) {
        this.currentDevice = data;
        this.detailVisible = true;
      }
    }
  },
  name: "GasEquip"
}
</script>

<style scoped>
.equipment-viewer {
  position: relative;
  height: 700px;
  .equipment-tree {
    position: absolute;
    left: 20px;
    top: 20px;
    width: 300px;
    background: rgba(255,255,255,0.8);
    padding: 10px;
    border-radius: 4px;
  }
}

.empty-viewer {
  width: 100%;
  height: 100%;
  background-color: #f0f0f0; /* 可以设置空白区域的背景色 */
  display: flex;
  justify-content: center;
  align-items: center;
  color: #888;
  font-size: 16px;
}
</style>
