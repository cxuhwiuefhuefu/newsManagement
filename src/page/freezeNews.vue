<template>
  <div class="fillcontain">
    <head-top></head-top>
    <div class="table_container">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="id" label="序号"> </el-table-column>
        <el-table-column prop="pic" label="图片">
          <template slot-scope="scope">
            <img
              :src="scope.row.pic"
              alt=""
              style="width: 36px; height: 36px"
            />
          </template>
        </el-table-column>
        <el-table-column prop="link tit" label="标题">
          <template slot-scope="scope">
            <a :href="scope.row.link" style="text-decoration: underline">{{scope.row.tit}}</a>
          </template>
        </el-table-column>
        <el-table-column prop="type" label="类型"></el-table-column>
        <el-table-column prop="time" label="添加时间"> </el-table-column>
        <el-table-column prop="" label="最后修改时间"> </el-table-column>
        <el-table-column label="操作" width="200">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >解冻</el-button
            >
          </template>
        </el-table-column>
      </el-table>

      <!-- 分页 -->
      <div class="Pagination" style="text-align: left; margin-top: 10px">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-size="20"
          layout="total, prev, pager, next"
          :total="count"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import headTop from "../components/headTop";
import { adminList, adminCount } from "@/api/getData";
export default {
  data() {
    return {
      tableData: [],
      currentRow: null,
      offset: 0,
      limit: 20,
      count: 0,
      currentPage: 1,
      value: "", // 按钮值
    };
  },
  components: {
    headTop,
  },
  created() {
    this.initData();
  },
  methods: {
    async initData() {
      // try{
      //     const countData = await adminCount();
      //     if (countData.status == 1) {
      //         this.count = countData.count;
      //     }else{
      //         throw new Error('获取数据失败');
      //     }
      //     this.getAdmin();
      // }catch(err){
      //     console.log('获取数据失败', err);
      // }

      // 表格数据
      this.tableData = [
        {
          id: 0,
          pic: "https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png",
          tit: "哈哈",
          link: 'https://www.baidu.com/',
          type: "代表风采",
          time: "2020-11-1",
        },
        {
          id: 1,
          pic: "https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png",
          tit: "哈哈22",
          link: 'https://www.baidu.com/',
          type: "代表履职",
          time: "2020-11-2",
        },
      ];
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.offset = (val - 1) * this.limit;
      
    },
    
    // 获取所在行的数据
    handleEdit(index, row) {
      console.log(index, row);
      this.$router.push({ name: "modifyNew", params: {index, row} });
    },
  },
};
</script>

<style lang="less">
@import "../style/mixin";
.table_container {
  padding: 20px;
}
</style>


