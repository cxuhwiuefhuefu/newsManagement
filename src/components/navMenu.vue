<template>
  <div>
    <!-- 根据实际情况做修改 -->
    <el-submenu
      v-for="(item, index) in navlist"
      :key="index"
      v-if="item.adminMenu.menuType == 'list'"
      :index="item.adminMenu.code"
    >
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>{{ item.adminMenu.code }}</span>
      </template>
      <NavMenu :navlist="item.children"></NavMenu>
    </el-submenu>

    <el-menu-item
      v-for="(item, index) in navlist"
      :key="index"
      v-if="item.adminMenu.menuType == 'page'"
      :index="item.adminMenu.url"
    >
      <i class="el-icon-location"></i>
      <span>{{ item.adminMenu.code }}</span></el-menu-item
    >
  </div>
</template>
 
<script>
export default {
  name: "NavMenu",
  props: ["navlist"],
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="less" scoped>
@import "../style/mixin";
//如果没有此样式的话  折叠有子级菜单的父菜单文字是不会隐藏的
.el-menu--collapse .el-menu-item span,
.el-menu--collapse .el-submenu .el-submenu__title span {
  height: 0;
  width: 0;
  overflow: hidden;
  visibility: hidden;
  display: inline-block;
}
// .el-menu{
//   width: 200px;
//    .el-submenu__icon-arrow{
//     opacity: 1;
//   }
// }
// .el-menu--collapse{
//   width: 60px!important;
//   .el-submenu__icon-arrow{
//     opacity: 0;
//   }
// }
</style>

