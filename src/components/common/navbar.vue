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
	<!-- 每个 template 只能有一个根元素, 因此 router-view 放于 div.class 元素下面 -->
	<router-view/>
</div>
</template>
<script>
	
</script>
<style lang="scss">
#navList{ 
	overflow:hidden;
	height:40px; 
}
.nav-item{  
	float: left;
	width: auto;
	height: 50px;
	line-height:50px;
	margin-right:20px;
	cursor:pointer;
	@include px2rem(font-size, 16);
}
</style>
