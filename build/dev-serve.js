/*!
 * MyVue Project Dev Serve - v1.0 (2019-08-02T15:15:09+0800)
 * Copyright 2005-2019 56.com
 */
const path = require('path');
const glob = require('glob');

console.log(`MyVue Project Dev Serve`);
console.log(process.argv);
console.log(`argv[2]: ${process.argv[2]}`);

/**
 * method[1]
 */
/**
function getEntry(globPath) {
	let entries = {};
	let basename, tmp, pathname, appname;

	glob.sync(globPath).forEach((entry) => {
		console.log(`entry: `${entry});
		basename = path.basename(entry, path.extname(entry));

		// 保留路径的后三项
		// 这样做会有问题，若 views
		// 目录的项目有建有子页面，下面根据后三项进行地址拼接就会有问题
		tmp = entry.split('/').splice(-3);

		console.log(`tmp: `${tmp});
		console.log(`basename: `${basename});

		pathname = basename; // 正确输出 JS 与 HTML 的路径

		entries[pathname] = {
			entry: `src/${tmp[0]}/${tmp[1]}/${tmp[1]}.js`,
			template: `src/${tmp[0]}/${tmp[1]}/${tmp[2]}`,
			title: `${tmp[2]}`,
			filename: `${tmp[2]}`
		};
	});
	return entries;
}
*/

//let pages = getEntry('./src/views/**?/*.html');

/**
 * method[2]
 */
function getEntry(globPath) {
	let entries = {};

	glob.sync(globPath).forEach((filePath) => {
		// dirname 返回路径的目录名
		const dirname = path.dirname(filePath);
		// basename 返回路径最后一部分
		const pageName = path.basename(dirname);

		console.log(`filePath: ${filePath}`);

		// 往 pages 里循环设置
		entries[pageName] = {
			entry: filePath,
			filename: `${pageName}.html`,
			template: `${dirname}/${pageName}.html`,
			chunks: ['chunk-vendors', 'chunk-common', pageName]
		};
	});

	return entries;
}

let customPath = process.argv[2] || 'sp/demo';
let pageEntry = path.resolve(`./src/views/${customPath}/**/main.js`);
let pages = getEntry(pageEntry);
console.log(pages);
