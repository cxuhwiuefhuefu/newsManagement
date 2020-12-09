<template>
  <div class="manage_page fillcontain">
    <el-row style="height: 100%">
      <el-col :span="4" style="min-height: 100%; background-color: #324057">
        <!-- <el-menu
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
        </el-menu> -->

        <el-menu
          style="text-align: left"
          default-active="2"
          class="el-menu-vertical-demo"
          :collapse-transition="true"
          :collapse="isCollapse"
          background-color="#222D32"
          text-color="#fff"
          :unique-opened="true"
          router
          active-text-color="#ffd04b"
        >
          <NavMenu :navlist="navlist"></NavMenu>
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
import NavMenu from "@/components/navMenu";

export default {
  components: {
    NavMenu,
  },
  computed: {
    defaultActive: function () {
      console.log(11111);
      return this.$route.path.replace("/", "");
    },
  },
  data() {
    return {
      isCollapse: false,
      navlist: [
        {
          adminMenu: {
            id: 70,
            menuName: "客户管理",
            menuType: "page",
            // pid: "0",
            url: "/customer",
            icon: null, // 图标
            sort: 1,
            deep: 1,
            code: "customer.user.view",
            resource: "customer.user.view",
          },
          children: [],
        },
        {
          adminMenu: {
            id: 99,
            menuName: "统计报表",
            menuType: "list",
            pid: "0",
            url: "#",
            icon: null,
            sort: 7,
            deep: 1,
            code: "statistics",
            resource: "statistics",
          },
          children: [
            {
              adminMenu: {
                id: 109,
                menuName: "产品运营总览中心",
                menuType: "page",
                pid: "99",
                url: "/statistics/core",
                icon: null,
                sort: 1,
                deep: 2,
                code: "statistics.core",
                resource: "statistics.core",
              },
              children: [],
            },
            {
              adminMenu: {
                id: 123,
                menuName: "运营报表",
                menuType: "list",
                pid: "99",
                url: "#",
                icon: null,
                sort: 2,
                deep: 2,
                code: "statistics.yyyw",
                resource: "statistics.yyyw",
              },
              children: [
                {
                  adminMenu: {
                    id: 124,
                    menuName: "运营业务报表",
                    menuType: "page",
                    pid: "123",
                    url: "/tjbb/Operaional",
                    icon: null,
                    sort: 5,
                    deep: 3,
                    code: "statistics.yunying",
                    resource: "statistics.yunying",
                  },
                  children: [],
                },
              ],
            },
            {
              adminMenu: {
                id: 115,
                menuName: "贷后管理报表",
                menuType: "list",
                pid: "99",
                url: "#",
                icon: null,
                sort: 3,
                deep: 2,
                code: "poi",
                resource: "poi",
              },
              children: [
                {
                  adminMenu: {
                    id: 116,
                    menuName: "风险总览样表",
                    menuType: "page",
                    pid: "115",
                    url: "/tjbb/riskbb",
                    icon: null,
                    sort: 1,
                    deep: 3,
                    code: "statistics.risk",
                    resource: "statistics.risk",
                  },
                  children: [],
                },
                {
                  adminMenu: {
                    id: 117,
                    menuName: "催收报表",
                    menuType: "page",
                    pid: "115",
                    url: "/tjbb/csbb",
                    icon: null,
                    sort: 2,
                    deep: 3,
                    code: "statistics.dun",
                    resource: "statistics.dun",
                  },
                  children: [],
                },
                {
                  adminMenu: {
                    id: 118,
                    menuName: "首贷续贷入催率和回收率",
                    menuType: "page",
                    pid: "115",
                    url: "/tjbb/jinandchu",
                    icon: null,
                    sort: 4,
                    deep: 3,
                    code: "statistics.poi",
                    resource: "statistics.poi",
                  },
                  children: [],
                },
                {
                  adminMenu: {
                    id: 119,
                    menuName: "7日内提前还款报表",
                    menuType: "page",
                    pid: "115",
                    url: "/tjbb/day7",
                    icon: null,
                    sort: 5,
                    deep: 3,
                    code: "statistics.poi.seven",
                    resource: "statistics.poi.seven",
                  },
                  children: [],
                },
              ],
            },
            {
              adminMenu: {
                id: 110,
                menuName: "第三方统计",
                menuType: "list",
                pid: "99",
                url: "#",
                icon: null,
                sort: 4,
                deep: 2,
                code: "statistics.third",
                resource: "statistics.third",
              },
              children: [
                {
                  adminMenu: {
                    id: 111,
                    menuName: "Advance AI",
                    menuType: "page",
                    pid: "110",
                    url: "/statistics/third",
                    icon: null,
                    sort: 1,
                    deep: 3,
                    code: "statistics.third.advanceai",
                    resource: "statistics.third.advanceai",
                  },
                  children: [],
                },
              ],
            },
            {
              adminMenu: {
                id: 100,
                menuName: "渠道数据",
                menuType: "page",
                pid: "99",
                url: "/statistics/channel",
                icon: null,
                sort: 5,
                deep: 2,
                code: "statistics.channel",
                resource: "statistics.channel",
              },
              children: [],
            },
          ],
        },
      ],
    };
  },
};
</script>


<style lang="less" scoped>
@import "../style/mixin";
.manage_page {
}
</style>
