<template>
  <div class="document-management">
    <el-row :gutter="20">
      <!-- 文档分类树 -->
      <el-col :span="6">
        <el-card class="category-tree">
          <el-tree
              :data="categories"
              node-key="id"
              default-expand-all
              @node-click="handleCategoryClick">
            <template #default="{ node }">
              <span>{{ node.label }}</span>
            </template>
          </el-tree>
        </el-card>
      </el-col>

      <!-- 文档列表 -->
      <el-col :span="18">
        <el-card class="document-list">
          <div class="toolbar">
            <el-upload
                action="/api/upload"
                :show-file-list="false"
                :on-success="handleUploadSuccess">
              <el-button type="primary">上传文档</el-button>
            </el-upload>
          </div>

          <el-table :data="documents" style="width: 100%">
            <el-table-column prop="name" label="文件名" width="300"></el-table-column>
            <el-table-column prop="type" label="类型" width="120"></el-table-column>
            <el-table-column prop="date" label="上传日期" width="180"></el-table-column>
            <el-table-column label="操作" width="180">
              <template #default="{row}">
                <el-button size="mini" @click="handlePreview(row)">预览</el-button>
                <el-button size="mini" @click="handleDownload(row)">下载</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>

    <!-- 文档预览 -->
    <document-preview :visible.sync="previewVisible" :file="currentFile"></document-preview>
  </div>
</template>

<script>
import DocumentPreview from '../../components/DocumentPreview.vue'

export default {
  components: { DocumentPreview },
  data() {
    return {
      categories: [
        {
          id: 1,
          label: '技术文档',
          children: [
            { id: 11, label: '设计规范' },
            { id: 12, label: '施工标准' }
          ]
        },
        {
          id: 2,
          label: '运维资料',
          children: [
            { id: 21, label: '巡检记录' },
            { id: 22, label: '维护手册' }
          ]
        }
      ],
      documents: [
        { id: 1, name: '燃气管道设计规范.pdf', type: 'PDF', date: '2024-03-15' },
        { id: 2, name: '安全施工指南.docx', type: 'DOCX', date: '2024-03-14' },
        { id: 3, name: '设备维护记录表.xlsx', type: 'EXCEL', date: '2024-03-13' },
        { id: 4, name: '应急处理流程图.png', type: '图片', date: '2024-03-12' }
      ],
      currentFile: null,
      previewVisible: false
    }
  },
  methods: {
    handleCategoryClick(node) {
      console.log('Selected category:', node.label)
      // 实际项目中这里调用接口加载文档
      this.loadSampleDocuments(node.id)
    },
    loadSampleDocuments(categoryId) {
      // 示例数据筛选逻辑
      this.documents = [
        { id: categoryId * 10 + 1, name: `${this.getCategoryName(categoryId)}文档示例.pdf`, type: 'PDF', date: '2024-03-15' },
        { id: categoryId * 10 + 2, name: `${this.getCategoryName(categoryId)}参考手册.docx`, type: 'DOCX', date: '2024-03-14' }
      ]
    },
    getCategoryName(id) {
      const categories = this.categories.flatMap(cat => [cat, ...cat.children])
      return categories.find(c => c.id === id)?.label || '未知分类'
    },
    handlePreview(file) {
      this.currentFile = file
      this.previewVisible = true
    },
    handleDownload(file) {
      window.open(`#/preview/${file.id}`, '_blank')
      this.$message.success('下载请求已发送')
    },
    handleUploadSuccess(res) {
      this.documents.unshift({
        id: Date.now(),
        name: `新文件_${new Date().toLocaleDateString()}.pdf`,
        type: 'PDF',
        date: new Date().toISOString().split('T')[0]
      })
    }
  },
  name: "GasData"
}
</script>

<style scoped>
.category-tree {
  height: calc(100vh - 200px);
  overflow-y: auto;
}
.document-list {
  height: calc(100vh - 200px);
}
.toolbar {
  margin-bottom: 15px;
  text-align: right;
}

/* 为演示更清晰的树形结构 */
.el-tree {
  font-size: 16px;
}
.el-tree-node__content {
  height: 40px;
}
</style>