<template>
    <div class="manage_page fillcontain">
        <el-row style="height: 100%">
            <el-col :span="6" style="min-height: 100%; background-color: #324057;">
                
                <el-menu style="min-height: 100%;" theme="dark" router>
					<el-menu-item index="manage"><i class="el-icon-menu"></i>首页</el-menu-item>
                    <el-menu-item index="manage"><i class="el-icon-menu"></i>会员卡信息</el-menu-item>
                    <el-menu-item index="manage"><i class="el-icon-menu"></i>优惠信息</el-menu-item>
                    <el-menu-item index="manage"><i class="el-icon-menu"></i>供需列表</el-menu-item>
                    <el-menu-item index="manage"><i class="el-icon-menu"></i>主题管理</el-menu-item>
                    <el-menu-item index="manage"><i class="el-icon-menu"></i>新闻列表</el-menu-item>
                    <el-menu-item index="manage"><i class="el-icon-menu"></i>通知列表</el-menu-item>
                    <el-menu-item index="manage"><i class="el-icon-menu"></i>勇士榜</el-menu-item>
                    <el-menu-item index="manage"><i class="el-icon-menu"></i>场地列表</el-menu-item>
                    <el-menu-item index="manage"><i class="el-icon-menu"></i>活动报名</el-menu-item>

                    <el-submenu index="2">
						<template slot="title"><i class="el-icon-document"></i>穿越报备</template>
						<el-menu-item index="userList">路线列表</el-menu-item>
						<el-menu-item index="shopList">报备列表</el-menu-item>
						<el-menu-item index="foodList">巡检人员</el-menu-item>
						<el-menu-item index="orderList">穿越积分实时排名</el-menu-item>
						<el-menu-item index="adminList">配置/特殊时期</el-menu-item>
                        <el-menu-item index="adminList">黑名单</el-menu-item>
					</el-submenu>
                    <el-submenu index="2">
						<template slot="title"><i class="el-icon-document"></i>投票征集&投票</template>
						<el-menu-item index="userList">征集列表</el-menu-item>
						<el-menu-item index="shopList">投票列表</el-menu-item>
					</el-submenu>

                    <el-menu-item index="manage"><i class="el-icon-menu"></i>微信自动回复</el-menu-item>
                    <el-submenu index="2">
						<template slot="title"><i class="el-icon-document"></i>全域旅游</template>
						<el-menu-item index="userList">首页管理</el-menu-item>
						<el-menu-item index="shopList">区域树</el-menu-item>
                        <el-menu-item index="shopList">二维码映射</el-menu-item>
					</el-submenu>
                    <el-submenu index="2">
						<template slot="title"><i class="el-icon-document"></i>元素</template>
						<el-menu-item index="userList">所有元素</el-menu-item>
					</el-submenu>
                    
				
				</el-menu>

            </el-col>
            <el-col :span="16" style="height: 100%; overflow: auto;"></el-col>
        </el-row>
    </div>
</template>