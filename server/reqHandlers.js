
function home(){
	return {
		"name":"商城首页",
		"info":{
			"hot":["数码产品","图书"],
			"active":["双十一","圣诞节"],
			"cate":["图书","数码","生鲜"]
		}
	}
}
function book(){
	return {
		"name":"图书",
		"info":{
			"hot":["天空之城","双城"],
			"cate":["科普","传记","小说"],
		}
	}
}

function pc(){
	return {
		"name":"数码",
		"info":{
			"hot":["金士顿","Apple"],
			"cate":["相机","超极本","手机"]
		}
	}
}

function car(){
	return {
		"name":"汽车",
		"info":{
			"hot":["行车记录仪","导航"],
			"cate":["清扫","内饰","喷漆"]
		}
	}
}

function about(){
	return {
		"name":"梦令布孑工作室",
		"address":"北京市海淀区中关村",
	}
}
function join(){
	return {
		"name":"欢迎加入梦令布孑工作室",
		"email":"hr@bigworld.com",
		"jobs":[
			{
			"name":"技术部门",
			"joblist":[
			{
				"title":"javascript",
				"content":"Dom, render"	
			},
			{
				"title":"C++",
				"content":"Vector,Map"	
			}
			]
			},
			{
			"name":"职能部门",
			"joblist":[
			{
				"title":"HR",
				"content":"交流, 阅读"	
			},
			{
				"title":"前台",
				"content":"Beauty,girl"	
			}
			]
			}
		],
	}
}

exports.home = home;
exports.book = book;
exports.pc = pc;
exports.car = car;
exports.about = about;
exports.join = join;
