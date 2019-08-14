/*!
 * Vue FrameWork - v1.0 (2019-08-01T16:03:13+0800)
 * Copyright 2005-2019 56.com
 * See: https://cli.vuejs.org/zh/config/
 * 此项目约定域名：
 * 页面主域名：qyy.56.com
 * 静态文件域名：s4.56img.com
 */
const fs = require('fs');
const path = require('path');
const glob = require('glob');
const utils = require('./build/utils');
const console = require('./build/console');
const PN = `[${process.env.VUE_APP_PN}] > `;
// 命令行参数
const BUILD_PATH = process.argv[3] ? process.argv[3].substring(2) : '';
			

console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
console.log(`Build Path: ${BUILD_PATH}`);

// 处理一下路径
function resolve(dir) {
	return path.resolve(__dirname, dir);
}

/**
 * views目录下页面模板命令与该目录命名一致。
 * 如：直播页 live 目录下的模板命名：live.html
 * 入口文件统一命名为：main.js
 */
function getEntry(globPath) {
	let entries = {};
	let pageName;

	glob.sync(globPath).forEach((entry) => {
		// dirname 返回路径的目录名
		const dirname = path.dirname(entry);
		// basename 返回路径最后一部分
		pageName = path.basename(dirname);

		// 往 pages 里循环设置
		entries[pageName] = {
			// page 的入口
			entry: entry,
			// 在 dist/index.html 的输出
			filename: `index.html`,
			//filename: `${pageName}.html`,
			//template: `${dirname}/${pageName}.html`,
			// 模块来源
			template: `${dirname}/index.html`,
			chunks: ['chunk-vendors', 'chunk-common', pageName]
		};
	});
	return {
		entries: entries,
		pageName: pageName
	};
}

// 自定义页面路径
let customPath = BUILD_PATH || 'sp/demo';
// 入口路径
let pageEntry = utils.checkPath(`./src/views/${customPath}/main.js`);


//let pages = getEntry(`${PAGES_PATH}/**/main.js`);
let customPages = getEntry(pageEntry);
let pageName = customPages.pageName;
console.dir(customPages.entries[pageName]);

/**
console.log('from: /dist/views/'+BUILD_PATH);
let relativePath = path.relative('/dist/views/'+BUILD_PATH, '/dist/static');
console.log(`relativePath: ${relativePath}`);
console.log(`assetsDir: ${relativePath}/${BUILD_PATH}`);
*/


// vue.config.js
module.exports = {
	// 基本路径 (Vue CLI3.3 起已弃用baseUrl，请使用 publicPath)
	publicPath: process.env.NODE_ENV === 'production'
		? `//s4.56img.com/myv/views/${customPath}`
		: '/',

	// 输出文件目录, 按当前调试页面目录输出
	outputDir: `dist/views/${customPath}`,

	// 用于嵌套生成的静态资产(js, css, img, fonts)目录, 相对于 outputDir 目录
	//assetsDir: 'assets',
	//assetsDir: `${relativePath}/${BUILD_PATH}`,

	// 指定生成的 index.html 的输出路径(相对于 outputDir)。也可以是一个绝对路径
	//indexPath: `${pageName}.html`,		// Default: 'index.html'
	
	// 文件名 hash
	filenameHashing: true,

	// 多页面构建
	pages: customPages.entries,
	/**
	pages: { 
		index: {
			entry: 'src/views/index/index.js',
			template: 'src/views/index/index.html',
			filename: 'index.html',
			title: 'Index Page',
			chunks: ['chunk-vendors', 'chunk-common', 'index']
		},
		live: {
			entry: 'src/views/live/live.js',
			template: 'src/views/live/live.html',
			filename: 'live.html',
			title: 'Index Page',
			chunks: ['chunk-vendors', 'chunk-common', 'live']
		}
	},
	*/

	// EsLint-Loader 是否在保存时检查
	lintOnSave: false,
	
	// 是否使用包含运行时编译器的 Vue 核心构建 
	//runtimeCompiler: false,

	// 默认情况下 babel-loader 会忽略所有 node_modules 中的文件。
	// 如果你想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来
	//transpileDependencies: [],

	// 如果你不需要生产环境的 source map，可以将其设置为 false 以加速度生产环境构建。
	productionSourceMap: false,

	// 如果这个值是一个对象，则会通过 webpack-merge 合并到最终的配置中。
	// 如果这个值是一个函数，则会接收被解析的配置作为参数。
	// 该函数及可以修改配置并不返回任何东西，也可以返回一个被克隆或合并过的配置版本。
	/**
	*/
	configureWebpack: config => {
		if (process.env.NODE_ENV === 'production') {
			// 为生产环境修改配置...
			/** 图片压缩处理
			config.module
				.rule('images')
				.use('image-webpack-loader')
				.loader('image-webpack-loader')
			 */
			/**
			Object.assign(config.output, {
				// 资源文件输出到 dist/static 目录
				// 不配置的话，默认是在 publicPath 目录下
				//filename: '../../static/' + BUILD_PATH + '/js/[name].[chunkhash:8].js', // 没有指定输出名的文件输出的文件名
				filename: `${relativePath}/${BUILD_PATH}/js/[name].[chunkhash:8].js`,
				chunkFilename: `${relativePath}/${BUILD_PATH}/js/[id].[chunkhash:8].js`
			});

			Object.keys(config.output).forEach((k) => {
				console.log(k + ': ' + config.output[k]);
			});
			*/
			
		} else {
			// 为开发环境修改配置...
		}

		/**
		Object.assign(config, {
			resolve:{
				alias: {
					"@": path.resolve(__dirname, './src'),
					"@c": path.resolve(__dirname, './src/components')
				}
			}
		});
		*/
	},

	// 是一个函数，会接收一个基于 webpack-chain 的 ChainableConfig 实例。
	// 允许对内部的 webpack 配置进行更细粒度的修改。
	// see https://github.com/vuejs/vue-cli/blob/dev/docs/zh/guide/webpack.md
	// see https://github.com/neutrinojs/webpack-chain
	/**
	*/
	chainWebpack: (config) => {
		// some alias
		config.resolve.alias
			.set('api', resolve('./src/api'))
			.set('assets', resolve('./src/assets'))
			.set('@c', resolve('./src/components'))
			// @ is an alias to /src
			//.set('@', resolve('./src'))
		/**
		config.module
		.rule('images')
		.use('url-loader')
		.loader('url-loader')
		.tap(options => {
			// 修改它的选项...
			return options;
		}) 
		*/
	},

	// CSS 相关配置
	css: {
		// 启用 CSS modules
		modules: true,
		// 是否使用 css 分离插件，合并到html模板或单独 css 文件加载
		// Default: 生产环境 true, 开发环境 false
		extract: false,
		// 开启 CSS Source Maps
		sourceMap: false,
		// CSS 预设器配置项
		loaderOptions: {}
	},

	// webpack-dev-server 相关配置
	devServer: {
		port: 8080,
		host: 's4.56img.com',
		http2: true,
		https: {
			key: fs.readFileSync('./build/cakeys/www.56.com.key'),
			cert: fs.readFileSync('./build/cakeys/www.56.com.crt')
		},
		open: true,		// 自动打开浏览器
		//openPage: 'demo.html',
		openPage: `${pageName}.html`,
		//hot: true,
		//hotOnly: true,
		proxy: null,	// 设置代理
		before: app => {}
	},

	// 是否为 Babel 或 TypeSctipt 使用 thread-loader
	// 构建时开启多进程处理编译
	//parallel: require('os').cpus().length > 1,
	
	// PWA 插件相关配置
	pwa: {},

	// 第三方插件配置
	pluginOptions: {
		// ...
	}
};
