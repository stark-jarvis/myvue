/*!
 * MyVue Project Dev Serve - v1.0 (2019-08-02T15:15:09+0800)
 * Copyright 2005-2019 56.com
 */
const path = require('path');
const glob = require('glob');

console.log(`MyVue Project Dev Serve`);
console.log(process.argv);
console.log(`argv[3]: ${process.argv[3]}`);

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
const PAGES_PATH = path.resolve('./src/views');

function getEntry(globPath) {
	let entries = {};

	glob.sync(globPath).forEach((filePath) => {
		// dirname 返回路径的目录名
		// basename 返回路径最后一部分
		const pageName = path.basename(path.dirname(filePath));

		let dirname = path.dirname(filePath);
		console.log(`filePath: ${filePath}`);
		//console.log(`dirname: ${path.dirname(filePath)}`);
		//console.log(`basename: ${path.basename(path.dirname(filePath))}`);

		// 往 pages 里循环设置
		entries[pageName] = {
			entry: filePath,
			filename: `${pageName}.html`,
			//template: `${PAGES_PATH}/${pageName}/${pageName}.html`,
			template: `${dirname}/${pageName}.html`,
			chunks: ['chunk-vendors', 'chunk-common', pageName]
		};
	});

	return entries;
}

let pages = getEntry(`${PAGES_PATH}/**/main.js`);
//console.log(pages);
