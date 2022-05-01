<template>
  <div class="wrap">
    <el-card>
      <el-button type="primary" style="float:right" @click="handleAdd">添加</el-button>
      <el-table
        :data="tableData"
        :default-sort="{ prop: 'id', order: 'descending' }"
        border
        stripe
      >
        <template slot-scope="scope">
          <el-table-column
            prop="id"
            label="序号"
            width="180"
            sortable
          ></el-table-column>
          <el-table-column
            prop="date"
            label="时间"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="title"
            label="标题"
            width="380"
            @click="handleEdit(scope)"
          >
          </el-table-column>
          <el-table-column
            prop="author"
            label="作者"
            width="180"
          ></el-table-column>
          <el-table-column label="操作" >
            <template slot-scope="scope">
              <el-button type="primary" @click="handleEdit(scope)"
                >编辑</el-button
              >
              <el-button
                type="danger"
                @click="handleDelete(scope.$index, scope.row)"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </template>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="query.pageNum"
        :page-sizes="[2, 3, 4, 5]"
        :page-size="query.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="query.total"
      ></el-pagination>
    </el-card>
    <EditItem :dialogVisible="dialogVisible"></EditItem>
  </div>
</template>
<script>
import EditItem from "./EditItem.vue";
export default {
  components: { EditItem },
  name: "List",
  data() {
    return {
      //table 表数据
      tableData: [],
      //分页数据
      query: {
        pageNum: 1,
        pageSize: 3,
        total: 0,
      },
      //修改表格
      dialogVisible: false,
    };
  },
  mounted() {
    this.getData();
    //关闭编辑dialog
    this.$bus.$on("closeDialog", () => {
      this.dialogVisible = false;
    });
    //刷新表格
    this.$bus.$on('renewTable',()=>{
        this.getData();
    })
  },
  beforeDestroy() {
    this.$bus.$off("closeDialog");
  },
  methods: {
    getData() {
      //table总数据
      let DataAll = this.$store.state.bookTable.tableList;
      if (DataAll.length > 0) {
        //每次执行方法，将展示的数据清空
        this.tableData = [];
        //第一步：当前页的第一条数据在总数据中的位置
        let strlength = (this.query.pageNum - 1) * this.query.pageSize + 1;
        //第二步：当前页的最后一条数据在总数据中的位置
        let endlength = this.query.pageNum * this.query.pageSize;
        //第三步：此判断很重要，执行时机：当分页的页数在最后一页时，进行重新筛选获取数据时
        //获取本次表格最后一页第一条数据所在的位置的长度
        let resStrLength = 0;
        if (DataAll.length % this.query.pageSize == 0) {
          resStrLength =
            (parseInt(DataAll.length / this.query.pageSize) - 1) *
              this.query.pageSize +
            1;
        } else {
          resStrLength =
            parseInt(DataAll.length / this.query.pageSize) *
              this.query.pageSize +
            1;
        }
        //如果上一次表格的最后一页第一条数据所在的位置的长度 大于 本次表格最后一页第一条数据所在的位置的长度，则将本次表格的最后一页第一条数据所在的位置的长度 为最后长度
        if (strlength > resStrLength) {
          strlength = resStrLength;
        }
        //第四步：此判断很重要，当分页的页数切换至最后一页，如果最后一页获取到的数据长度不足最后一页设置的长度，则将设置的长度 以 获取到的数据长度 为最后长度
        if (endlength > DataAll.length) {
          endlength = DataAll.length;
        }
        //第五步：循环获取当前页数的数据，放入展示的数组中
        for (let i = strlength - 1; i < endlength; i++) {
          this.tableData.push(DataAll[i]);
        }
        //数据的总条数
        this.query.total = DataAll.length;
      }
    },
    //切换当前页显示的数据条数，执行方法
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.query.pageSize = val;
      this.getData();
    },
    //切换页数，执行方法
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.query.pageNum = val;
      this.getData();
    },
    //添加
    handleAdd(scope) {
      this.dialogVisible = true;
      //异步解决第一次点击时，编辑组件尚未创建无法监听第一次事件
      setTimeout(() => {
        this.$bus.$emit("addTable");
      }, 0);
    },
    //编辑按钮
    handleEdit(scope) {
      this.dialogVisible = true;
      //异步解决第一次点击时，编辑组件尚未创建无法监听第一次事件
      setTimeout(() => {
        this.$bus.$emit("editTable", scope.row);
      }, 0);
    },
    handleDelete(index, row) {
      this.$store.commit("bookTable/DeleteElement", row);
      this.getData();
    },
  },
};
</script>
<style scoped>
.wrap {
  width: 100%;
}
.el-pagination {
  margin-top: 15px;
}


</style>
