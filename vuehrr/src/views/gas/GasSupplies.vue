<template>
  <div class="emergency-supplies">
    <el-row :gutter="20">
      <!-- 三维仓库视图 -->
      <el-col :span="16">
        <div class="warehouse-view">
          <div class="empty-viewer">
            <!-- 这里可以选择放置一张图片或者其他的占位内容 -->
            <p>应急物资展示区域（空白）</p>
          </div>
        </div>
      </el-col>

      <!-- 物资清单 -->
      <el-col :span="8">
        <el-card class="supply-list">
          <el-table
              :data="supplies"
              highlight-current-row
              @current-change="handleRowChange">
            <el-table-column prop="name" label="物资名称"></el-table-column>
            <el-table-column prop="quantity" label="数量" width="100">
              <template #default="{row}">
                <el-tag :type="row.quantity | quantityFilter">
                  {{ row.quantity }}
                </el-tag>
              </template>
            </el-table-column>
            <el-table-column label="操作" width="120">
              <template #default="{row}">
                <el-button
                    size="mini"
                    @click="handleReplenish(row)">
                  补货
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>

    <!-- 补货对话框 -->
    <el-dialog :visible.sync="replenishVisible">
      <el-form :model="replenishForm">
        <el-form-item label="补货数量">
          <el-input-number
              v-model="replenishForm.quantity"
              :min="1"
              :max="1000">
          </el-input-number>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="replenishVisible = false">取消</el-button>
        <el-button type="primary" @click="confirmReplenish">确认补货</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 初始化一些静态数据作为物资清单
      supplies: [
        { id: 1, name: '水', quantity: 30 },
        { id: 2, name: '食物', quantity: 50 },
        { id: 3, name: '药品', quantity: 10 },
        { id: 4, name: '急救包', quantity: 5 }
      ],
      replenishVisible: false, // 控制补货对话框的显示
      replenishForm: { id: null, quantity: 1 }, // 补货表单数据
      warehouseScene: 'warehouse'
    }
  },
  filters: {
    // 根据数量的不同，设置不同的标签颜色
    quantityFilter(qty) {
      return qty > 50 ? 'success' : qty > 20 ? 'warning' : 'danger'
    }
  },
  methods: {
    // 处理物资行选择
    handleObjectClick(objId) {
      this.$set(this, 'selectedObject', objId);
      this.supplies.find(s => s.objectId === objId);
    },
    // 行数据变化时的操作
    handleRowChange(row) {
      this.$unity.setHighlightObjects([row.objectId]);
    },
    // 补货按钮点击，显示补货对话框
    handleReplenish(row) {
      this.replenishForm = { id: row.id, quantity: 1 };
      this.replenishVisible = true;
    },
    // 确认补货
    confirmReplenish() {
      const supply = this.supplies.find(item => item.id === this.replenishForm.id);
      if (supply) {
        supply.quantity += this.replenishForm.quantity;
      }
      this.replenishVisible = false;
    }
  },
  name: "GasSupplies"
}
</script>

<style>
.warehouse-view {
  height: 700px;
  background: #f0f2f5;
}
.supply-list {
  height: 700px;
  overflow-y: auto;
}
</style>
