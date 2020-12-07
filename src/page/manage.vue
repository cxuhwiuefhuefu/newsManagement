<template>
  <div class="manage_page fillcontain">
    <el-row style="height: 100%">
      <el-col :span="4" style="min-height: 100%; background-color: #324057">
        <el-menu
          :default-active="defaultActive"
          style="min-height: 100%"
          background-color="#545c64"
          text-color="#bfcbd9"
          active-text-color="#2091e6"
          router
        >
          <el-submenu index="2">
            <template slot="title"
              ><i class="el-icon-document"></i>数据管理</template
            >
            <el-menu-item index="newList">新闻列表</el-menu-item>
            <el-menu-item index="addNew">添加新闻</el-menu-item>
            <el-menu-item index="freezeNews">解冻新闻</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"
              ><i class="el-icon-setting"></i>设置</template
            >
            <el-menu-item index="adminList">管理员列表</el-menu-item>
            <el-menu-item index="userList">用户列表</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title"
              ><i class="el-icon-warning"></i>说明</template
            >
            <el-menu-item index="explain">说明</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
      <el-col :span="20" style="height: 100%; overflow: auto">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  computed: {
    defaultActive: function () {
      console.log(11111);
      return this.$route.path.replace("/", "");
    },
  },
};
</script>


<style lang="less" scoped>
@import "../style/mixin";
.manage_page {
}
</style>
