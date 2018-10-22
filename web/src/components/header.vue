<template>
	<div class="hedaer">
		<el-menu
			:default-active="activeIndex"
			class="el-menu-demo"
			mode="horizontal"
			style="height: 80px;"
			background-color="rgb(50, 65, 87)"
			text-color="#fff"
			active-text-color="#ffd04b"
			@select="handleSelect"
		>
  			<el-menu-item v-for="(item, index) in navInfo" :key="index" :index="item.index">{{ item.label }}</el-menu-item>
		</el-menu>
	</div>
</template>
<script>
export default {
	data () {
		return {
			activeIndex: '1',
			navInfo: [
				{ index: '1', label: '处理中心1' },		
				{ index: '2', label: '处理中心2' },		
				{ index: '3', label: '处理中心3' },		
				{ index: '4', label: '处理中心4' }		
			]
		}
	},
	methods: {
		handleSelect (val) {
			this.activeIndex = val
		}
	},
	watch: {
		activeIndex (valNew, valOld) {
			if (valNew !== valOld) {
				console.log(valNew)
			}
		}
	}
}
</script>
<style scoped lang="less">
	.hedaer {
		height:100%;
		background: rgb(50, 65, 87);
		overflow: hidden;
	}
	.el-menu--horizontal>.el-menu-item {
		height: 80px;
		line-height: 80px;
	}
	.el-menu.el-menu--horizontal {
		border-bottom: 0;
	}
</style>