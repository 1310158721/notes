<template>
	<div class="bg container rel">
		<el-card class="box-card abs card">
			<p class="title">我的笔记管理</p>
			<el-input class="space" v-model="username" placeholder="请输入用户名称">
				<i slot="prefix" class="el-input__icon iconfont">&#xe62f;</i>
			</el-input>
			<el-input class="space" type="password" v-model="password" placeholder="请输入用户名称">
				<i slot="prefix" class="el-input__icon iconfont">&#xe689;</i>
			</el-input>
			<el-button class="button space" type="success" @click="login">登 录</el-button>
		</el-card>
	</div>
</template>
<script>
export default {
	data () {
		return {
			username: '',
			password: ''
		}
	},
	methods: {
		login () {
			if (this.username !== '' && this.password !== '') {
				console.log('logining')
			} else {
				this.$message.error('登录信息不能为空')
			}
		}
	}
}
</script>
<style scoped lang="less">
	.card {
		width: 320px;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		.title {
			width: 100%;
			font-size: 14px;
			font-weight: bold;
			text-align: center;
			border-bottom: 1px solid #67c23a;
			padding-bottom: 10px;
			margin-bottom: 2em;
		}
		.space {
			margin-bottom: 22px;
		}
		.button {
			width: 100%;
		}
	}
</style>