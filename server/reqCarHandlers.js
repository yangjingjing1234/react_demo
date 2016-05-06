
function home(){
	return {
		"name":"车辆管理",
    "carlist":[
      {
        "num":1,
        "logo":"images/logo_car_1.jpg",
        "carname":"北汽E150",
        "carnum":"京A1111",
        "carid":"京A1111",
        "careng":"京A1111",
        "status":"未使用"
      },
      {
        "num":2,
        "logo":"images/logo_car_1.jpg",
        "carname":"北汽E150",
        "carnum":"京A2222",
        "carid":"京A2222",
        "careng":"京A2222",
        "status":"维修中"
      },
      {
        "num":3,
        "logo":"images/logo_car_1.jpg",
        "carname":"江淮IEV5",
        "carnum":"京A3333",
        "carid":"京A3333",
        "careng":"京A3333",
        "status":"未使用"
      }
    ]
	};
}
function about(){
	return {
		"name":"梦令布孑工作室",
		"address":"北京市海淀区中关村",
	};
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
	};
}
exports.home = home;
exports.about = about;
exports.join = join;
