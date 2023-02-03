<template>
<div class="page-content">
	<h2 class="sub-page-item">{{msg}}</h2>
	<div aspectratio w-16-9>
		<div id="videoConent" aspectratio-content></div>
	</div>
	<p class="txt" @click="getData()">[data-dpr] fontSize:20px;当计算边界矩形时，会考虑视口区域（或其他可滚动元素）内的滚动操作，</p>
	<div class="line-1px-bck"></div>
	<p class="txt txt-vw">vw计算：fontSize:32px也就是说，当滚动位置发生了改变，top和left属性值就会随之立即发生变化（因此，它们的值是相对于视口的，而不是绝对的）。</p>
	<div class="line-1px-bod-top"></div>
	<div class="line-1px-bod-right bod-right"></div>
	<p class="txt px16 ignore">fontSize:16px;如果你需要获得相对于整个网页左上角定位的属性值，那么只要给top、left属性值加上当前的滚动位置（通过window.scrollX和window.scrollY），这样就可以获取与当前的滚动位置无关的值。</p>
</div>
</template>

<style type="scss">
	@import "./index.scss";
</style>

<script>
import axios from 'axios';

export default {
    data() {
		return {
			msg: 'this is Index!'
		}
	},
	mounted() {
		//this.initVideo();

	},
	methods: {
		initVideo() {
			let video = document.createElement('video');
			video.src = 'https://s4.56img.com/myv/static/oO27fSx.mp4';
			video.autoplay = true;
			video.controls = true;
			video.style.width = '100%';
			video.style.height = '100%';

			document.querySelector('#videoConent').appendChild(video);
		},

		getData() {
			axios('https://api.coindesk.com/v1/bpi/currentprice.json')
				.then((res) => {
					let data = res.data;
					Object.keys(res.data).forEach((d) => {
						console.log(data[d]);
					})
				})
				.catch((err) => {
					console.log(err);
				})
				.finally(() => {
					console.log(`finally`);
				})
		},

		getUA() {
			return navigator.userAgent;
		},

		setData() {
			this.msg = getUA();
		}
	}
}
</script>
