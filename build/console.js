/*!
 * Command line tools (2017-11-07T15:59:29+0800)
 * Copyright 2005-2017 56.com
 */
'use strict';

const cliColor = require('cli-color');
const PN = `[${process.env.VUE_APP_PN}] > `;

// 替换 {{ 和 }} 之间的内容为特定颜色
function addColor(msg, color) {
	return msg.replace(/\{\{(.*?)\}\}/g, function(match, $1) {
		return cliColor[color]($1);
	});
}

module.exports = {
	// 普通日志，无颜色
	log: function(msg) { console.log(`${PN}${msg}`); },
	// 信息
	info: function(msg) { console.log( addColor(`${PN}${msg}`, 'green') ); },
	// 警告
	warn: function(msg) { console.warn( addColor(`${PN}${msg}`, 'yellow') ); },
	// 错误
	error: function(msg) { console.error( addColor(`${PN}${msg}`, 'red') ); },
	// 错误并退出
	errorExit: function(msg) {
		this.error(msg);
		process.exit(1);
	},
	// 打印对象，无颜色
	dir: function(obj) { console.dir(obj); }
};
