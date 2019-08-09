/*!
 * Command line tools (2019-08-09T14:56:18+0800)
 * Copyright 2005-2019 56.com
 */
'use strict';

const fs = require('fs');
const path = require('path');
const console = require('./console');

// 检查路径是否存在
exports.checkPath = function(p, pathEmptyCallback) {
	p = (p || '').trim();
	if (p) {
		p = path.resolve(p);
		if ( fs.existsSync(p) ) {
			return p;
		} else {
			console.errorExit('{{' + p + '}} does not exist');
		}
	} else {
		return pathEmptyCallback();
	}
};

