/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/db75673081739c624df603db254ceccc", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	var fog;
	__weex_module__.exports = {
		methods: {
			myUrl:function(){
				var URLHelper = __weex_require__('@weex-module/myURL');//same as you registered
				URLHelper.openURL("http://www.taobao.com",function(ts){
				    console.log("url is open at ----- >>>>>  "+ts);
				});
			}, 
			getSsid:function(){
				fog = __weex_require__('@weex-module/fog');//same as you registered
				fog.getSsid(function(ret){
					console.log(" js fog getssid----- ", ret.message);	
				});
			}, 
			startEasyLink:function(){
				fog = __weex_require__('@weex-module/fog');//same as you registered
				console.log("fog", "start eas")
				fog.startEasyLink({
				  ssid:"feeling",
				  password:"00000000",
				  worktime:60000,
				  sleeptime:100,
				  extradata:"wodo",
				  rc4key:""
				},function(ts){
					// 提取message
				    console.log(" ey fog startEasyLink----- ", JSON.stringify(ts.message));
					// 将message字符串转为json
				   	var message = JSON.parse(ts.message);
					// 提取message中的message
				    console.log(" ey fog parseJSON----- ", JSON.stringify(message.message));
				});
			},
			stopEasyLink:function(){
				fog = __weex_require__('@weex-module/fog');//same as you registered
				fog.stopEasyLink(function(ret){
				    console.log(" ey fog stopEasyLink----- ", JSON.stringify(ret));
				})
			},
			startSearchDevices:function(){
				fog = __weex_require__('@weex-module/fog');//same as you registered
				fog.startSearchDevices("",function(ret){
				    var message = JSON.parse(ret.message);
				    console.log(" mdns fog ----- ", JSON.stringify(message[0].IP));
				});
			},
			stopSearchDevices:function(){
				fog = __weex_require__('@weex-module/fog');//same as you registered
				fog.stopSearchDevices(function(ret){
				    console.log(" mdns fog ----- ", JSON.stringify(ret));
				});
			},		
			stremobj:function(){
		        var arg1 = 'I am alert!'
		        var arg2 = 'I am ok'
		        var arg3 = 'I am cancel'
		        var modal = __weex_require__('@weex-module/modal');
		        modal.confirm({
		          message: arg1,
		          okTitle: arg2,
		          cancelTitle: arg3
		        }, function(result) {
		          nativeLog(result)
		          // TODO after the confirm is complete.
		        });
			},
			fetchFunc:function(){
		        console.log("stream");
		        var stream = __weex_require__('@weex-module/stream');
		        stream.fetch({
		          method: 'POST',
		          // url: 'http://192.168.3.186:8000/enduser/getVerCode/',
		          url: 'https://v2.fogcloud.io/enduser/getVerCode/',
		          type:'json',
		          body: JSON.stringify({
		            loginname:"88635653@qq.com",
		            // appid:"a94def5e-41b2-11e6-a4ef-f8cab81d2727"
		            appid:"db456b4a-17fc-11e6-a739-00163e0204c0"
		          }),
		          //android端会默认多了一个Content-Type: application/x-www-form-urlencoded
		          //所以这里需要添加 "Content-Type": "application/json"，但是添加后HTML服务器端收到body为空
		          //发送的json变为JSONString，则可以解决这个问题
		          headers:{
		            "Content-Type":"application/json"
		          }
		        }, function(response) {
		          console.log("res 1:"+JSON.stringify(response));
		        },function(response){
		          console.log("bytes received:"+response.length);
		        });

		        // stream.fetch({
		        //   method: 'POST',
		        //   url: 'http://www.easylink.io/v1/user/login',
		        //   type:'json',
		        //   body: {
		        //     login_id:"13122112211",
		        //     password:"123456"
		        //   },
		        //   headers:{
		        //     "X-Application-Id":"7ffbec46-7ff9-46fc-bb55-ec1dda89f40c"
		        //   }
		        // }, function(response) {
		        //   console.log("res 1:"+JSON.stringify(response));
		        //   //process response
		        // },function(response){
		        //   console.log("bytes received:"+response.length);
		        // });

		        // stream.fetch({
		        //   method: 'POST',
		        //   url: "http://httpbin.org/post",
		        //   type:'json',
		        //   body: {
		        //     a:1
		        //   }
		        // }, function(response) {
		        //   console.log("res response", JSON.stringify(response));
		        // },function(json){
		        //   console.log("res json", JSON.stringify(json));
		        // });
	      	}
		}
	};

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "div-box"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "title"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "attr": {
	                "value": "EasyLink部分"
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "ey-stop-btn"
	              ],
	              "events": {
	                "click": "getSsid"
	              },
	              "attr": {
	                "value": "getSsid"
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "ey-start-btn"
	              ],
	              "events": {
	                "click": "startEasyLink"
	              },
	              "attr": {
	                "value": "开始配网"
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "ey-stop-btn"
	              ],
	              "events": {
	                "click": "stopEasyLink"
	              },
	              "attr": {
	                "value": "停止配网"
	              }
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "div-box"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "title"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "attr": {
	                "value": "mDNS部分"
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "ey-start-btn"
	              ],
	              "events": {
	                "click": "startSearchDevices"
	              },
	              "attr": {
	                "value": "开始搜索设备"
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "ey-stop-btn"
	              ],
	              "events": {
	                "click": "stopSearchDevices"
	              },
	              "attr": {
	                "value": "停止搜索设备"
	              }
	            }
	          ]
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "div-box": {
	    "backgroundColor": "#ffffff"
	  },
	  "title": {
	    "fontSize": 30,
	    "lineHeight": 60,
	    "color": "#FF0000",
	    "padding": 8,
	    "fontWeight": "bold"
	  },
	  "ey-start-btn": {
	    "lineHeight": 60,
	    "backgroundColor": "#54ca6d",
	    "color": "#ffffff"
	  },
	  "ey-stop-btn": {
	    "lineHeight": 60,
	    "backgroundColor": "#5473ca",
	    "color": "#ffffff"
	  }
	})
	})
	;__weex_bootstrap__("@weex-component/db75673081739c624df603db254ceccc", {
	  "transformerVersion": "0.3.1"
	},undefined)

/***/ }
/******/ ]);