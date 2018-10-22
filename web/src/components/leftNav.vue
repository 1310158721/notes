<template>
	<div class="left-nav">
		<el-menu
      		:default-active="activeIndex"
      		class="el-menu-vertical-demo"
      		@open="handleOpen"
      		@close="handleClose"
      		background-color="#e6e6e6"
      		text-color="#000"
      		active-text-color="#409eff">
      		<div v-for="(item, index) in navInfo" :key="index">
      			<!-- 没有子列表的 -->
      			<el-menu-item v-if="!item.children || item.children.length === 0" :index="item.id">
	      			<i :class="item.icon"></i>
	      			<template slot="title">{{ item.label }}</template>
	      		</el-menu-item>
				<!-- 有子列表的 -->
	      		<el-submenu v-else :index="item.id">
	      			<template slot="title">
	      				<i :class="item.icon" v-if="item.icon"></i>
	          			<span>{{ item.label }}</span>
	        		</template>
	          		<el-menu-item v-for="(_item, _index) in item.children" :index="_item.id">
	          			<i :class="_item.icon" v-if="_item.icon"></i>
	          			{{ _item.label }}
	          		</el-menu-item>
	      		</el-submenu>
      		</div>	
    	</el-menu>
	</div>
</template>
<script>
export default {
	data () {
		return {
			activeIndex: '0',
			navInfo: [
				{
					"id": "105",
					"label": "Fs系统",
					"icon": "el-icon-menu",
					"children": null,
					"url": "/nav/node/fs"
				},
				{
					"id": "106",
					"label": "常用模块",
					"icon": "el-icon-menu",
					"children": [
						{
							"id": "107",
							"label": "request",
							"icon": "el-icon-menu",
							"url": "/nav/node/request",
							"children": null
						},
						{
							"id": "108",
							"label": "request",
							"icon": "el-icon-menu",
							"url": "/nav/node/request",
							"children": null
						}
					]
				}
			]
		}
	},
	methods: {
		handleOpen () {
			console.log('open')
		},
		handleClose () {
			console.log('close')
		}
	}
}
</script>
<style scoped lang="less">
	.left-nav {
		width: 100%;
		height: 100%;
		background: #e6e6e6;
	}
	.el-submenu .el-menu-item {
		min-width: 0;
	}
	.el-menu {
		border-right: 0;
	}
</style>