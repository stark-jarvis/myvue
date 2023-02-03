module.exports = {
  'plugins': {
    'autoprefixer': {},
	'postcss-aspect-ratio-mini': {},
	'postcss-px-to-viewport': {
	  'viewportWidth': 750,		// (Number) 视窗的宽度，对应的是我们设计稿的宽度，一般是750 
	  'viewportHdieht': 1334,		// (Number) 视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置
	  'unitPrecision': 3,			// (Number) `px`转换为视窗单位值的小数位数（很多时候无法整除）
	  'vieportUnit': 'vw',		// (String) 指定需要转换成的视窗单位，建议使用 vw
	  'selectorBlackList': ['.ignore', '.hairlines', /data-dpr=/],	// 指定不转换为视窗单位的类，可以自定义，可以无限添加，建议一至两个通用的类名
	  'minPixelvalue': 1,			// (Number) 小于或等'1px'不转换为视窗单位，可以设置成想要的值
	  'mediaQuery': false			// (Boolean) 允许在媒体查询中转换'px'
	},
	'postcss-write-svg': {
	  'utf8': false
	}
  }
}
