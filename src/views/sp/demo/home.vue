<template>
  <div id="wrapper" class="wrapper">
	<img src="./images/m.jpg" alt="" />
	<img src="./images/icon.png" alt="" />
    <h3 class="app_title">This is MyVue Demo Page!</h3>
	<div class="banner">This is A Banner</div>
	<!-- navbar 组件 -->
	<navbar/>
  </div>
</template>

<script>
// @c is an alias to /src/components
import navbar from '@c/common/navbar'
export default {
	name: 'DemoDefault',
    data() {
		return {
			msg: 'init msg!'
		}
    },
	components: {
		navbar
	},
	beforeCreate() {
		console.log('实例创建前');
	},
	create() {
		console.log('实例已创建');
	},
	beforeMount() {
		console.log('实例编译前');
	},
	mounted() {
		console.log('实例已编译');
	},
	beforeUpdate() {
		console.log('实例更新前');
	},
	updated() {
		console.log('实例已更新');
	},
	beforeDestroy() {
		console.log('实例销毁前');
	},
	destroyed() {
		console.log('实例已销毁');
	},
	methods: {
		setData() {
			this.msg = 'changed msg data.'
		}
	}
}
</script>

<style lang="scss">
*{padding:0; margin:0;}
.wrapper{ text-align:center; }
.app_title{
  font-size: 14px;
  color: green;
}
.sub-page-item{ height:20px; color:red; }
</style>
