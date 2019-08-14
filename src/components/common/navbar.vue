<template>
<div class="page">
	<div class="navbar">
		<ul id="navList">
			<li class="nav-item"><router-link to="/">Home</router-link></li>
			<li class="nav-item"><router-link to="/seller">Seller</router-link></li>
			<li class="nav-item"><router-link to="/rating">Rating</router-link></li>
		</ul>
	</div>
	<!-- 路由匹配到的组件将显示在这里 -->
	<!-- 每个 template 只能有一个根元素 -->
	<router-view/>
</div>
</template>
<script>
	
</script>
<style lang="scss">
#navList{ height:25px; }
.nav-item{  
	float:left;
	width: 80px;
	height: 25px;
	cursor:pointer;
}
</style>
