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

	;__weex_define__("@weex-component/aeb9e9c6fd776e6dce3ca0d602a21dc2", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	__weex_module__.exports = {
		methods: {
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
	  "classList": [
	    "body-container"
	  ],
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "header-container"
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "login-box"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "ey-start-btn"
	              ]
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "children": [
	            {
	              "type": "input",
	              "classList": [
	                "ey-stop-btn"
	              ],
	              "attr": {
	                "placeholder": "用户名"
	              }
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "row"
	      ],
	      "style": {
	        "alignItems": "flex-start"
	      },
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "item",
	            "txt"
	          ],
	          "attr": {
	            "value": "开始配网"
	          },
	          "style": {
	            "marginRight": 0,
	            "backgroundColor": "#BEAD92"
	          }
	        },
	        {
	          "type": "input",
	          "classList": [
	            "username"
	          ],
	          "attr": {
	            "placeholder": "用户名"
	          }
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "body-container": {
	    "backgroundColor": "#f6f7f8"
	  },
	  "header-container": {
	    "paddingTop": 66
	  },
	  "login-box": {
	    "flexDirection": "row"
	  },
	  "row": {
	    "flexDirection": "row"
	  },
	  "item": {
	    "marginRight": 10,
	    "width": 160,
	    "height": 75,
	    "paddingLeft": 8,
	    "paddingRight": 8,
	    "paddingTop": 8,
	    "paddingBottom": 8
	  },
	  "txt": {
	    "color": "#eeeeee"
	  },
	  "username": {
	    "marginRight": 0,
	    "flex": 1,
	    "height": 70,
	    "fontSize": 20
	  }
	})
	})
	;__weex_bootstrap__("@weex-component/aeb9e9c6fd776e6dce3ca0d602a21dc2", {
	  "transformerVersion": "0.3.1"
	},undefined)

/***/ }
/******/ ]);