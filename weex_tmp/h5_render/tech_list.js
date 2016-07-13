define('@weex-component/foo', function (require, exports, module) {

;
  module.exports = {
    data: function () {return {
      title: null,
      image: null,
      ehtid:"789"
    }}
  }


;module.exports.style = {}

;module.exports.template = {
  "type": "container",
  "style": {
    "flexDirection": "row"
  },
  "children": [
    {
      "type": "text",
      "attr": {
        "value": function () {return this.ehtid}
      }
    },
    {
      "type": "image",
      "attr": {
        "src": function () {return this.image}
      },
      "style": {
        "width": 50,
        "height": 50
      }
    },
    {
      "type": "text",
      "attr": {
        "value": function () {return this.title}
      }
    }
  ]
}

;})

// module

define('@weex-component/foo-list', function (require, exports, module) {

;
  module.exports = {
    data: function () {return {
      description: '',
      list: []
    }}
  }


;module.exports.style = {}

;module.exports.template = {
  "type": "container",
  "children": [
    {
      "type": "text",
      "attr": {
        "value": function () {return this.description}
      }
    },
    {
      "type": "foo",
      "repeat": function () {return this.list},
      "attr": {
        "title": function () {return this.text},
        "image": function () {return this.img}
      }
    }
  ]
}

;})

// module

define('@weex-component/tech_list', function (require, exports, module) {

;
  module.exports = {
    data: function () {return {
      firstName: 'John',
      lastName: 'Smith',
      tag:true,
      imgsrc:"http://business.cdn.qianqian.com/qianqian/pic/bos_client_abf5b611e9b66a24887942babb050afc.jpg",
      group:"group",
      list:[
        {gender:"male", nickname:"Li leilei", avatar:"http://business.cdn.qianqian.com/qianqian/pic/bos_client_abf5b611e9b66a24887942babb050afc.jpg"},
        {gender:"female", nickname:"Han meimei", avatar:"https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png"},
        {gender:"male", nickname:"Close Tome", avatar:"https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png"}
      ],
      foolist: [
        {text: "tome1", img:"https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png"},
        {text: "tome2", img:"https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png"},
        {text: "tome3", img:"https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png"},
        {text: "tome4", img:"https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png"}
      ],
      images:[
        {imgId: 1, imgUrl: "https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png"},
        {imgId: 2, imgUrl: "https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png"},
        {imgId: 3, imgUrl: "https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png"}
      ],
      title:null,
      myid:45
    }},
    computed: {
      fullName: {
        get: function() {
          return this.firstName + ' ' + this.lastName
        },

        set: function(v) {
          var s = v.split(' ')
          this.firstName = s[0]
          this.lastName = s[1]
        }
      }
    },
    methods: {
      changeName: function() {
        if(this.tag){
          this.fullName = 'Terry King';
          this.imgsrc = "http://business.cdn.qianqian.com/qianqian/pic/bos_client_abf5b611e9b66a24887942babb050afc.jpg";
        }else{
          this.imgsrc = "https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png";
          this.fullName = 'John Smith';
        }
        this.tag = !this.tag;
      },
      getImageId: function(e) {
        // get e.target.id
        this.myid = e.target.id;
      }
    }
  }


;module.exports.style = {
  "div-box": {
    "padding": 8,
    "backgroundColor": "#ffffff",
    "marginBottom": 10
  },
  "title": {
    "fontSize": 16,
    "color": "#ff0000",
    "padding": 8,
    "fontWeight": "bold"
  },
  "buttonclick": {
    "backgroundColor": "#666666",
    "color": "#ffffff",
    "padding": 8
  },
  "male": {
    "color": "#FF0000"
  },
  "female": {
    "color": "#0000FF"
  }
}

;module.exports.template = {
  "type": "container",
  "style": {
    "backgroundColor": "#e6e7e8"
  },
  "children": [
    {
      "type": "container",
      "classList": [
        "div-box"
      ],
      "children": [
        {
          "type": "text",
          "classList": [
            "title"
          ],
          "attr": {
            "value": "这里有以下接口：if, onclick, get, set, img src"
          }
        },
        {
          "type": "image",
          "style": {
            "width": 150,
            "height": 80
          },
          "attr": {
            "src": function () {return this.imgsrc}
          },
          "shown": function () {return this.tag}
        },
        {
          "type": "text",
          "attr": {
            "value": function () {return this.fullName}
          }
        },
        {
          "type": "text",
          "shown": function () {return this.tag},
          "attr": {
            "value": "Hello tag"
          }
        },
        {
          "type": "text",
          "shown": function () {return this.tag},
          "attr": {
            "value": "Hello {{}} tag"
          }
        },
        {
          "type": "text",
          "classList": [
            "buttonclick"
          ],
          "events": {
            "click": "changeName"
          },
          "attr": {
            "value": "改名字"
          }
        }
      ]
    },
    {
      "type": "container",
      "classList": [
        "div-box"
      ],
      "children": [
        {
          "type": "container",
          "repeat": function () {return this.list},
          "classList": function () {return [this.gender]},
          "children": [
            {
              "type": "image",
              "attr": {
                "src": function () {return this.avatar}
              },
              "style": {
                "width": 50,
                "height": 50
              }
            },
            {
              "type": "text",
              "attr": {
                "value": function () {return 'No.' + (this.$index+1) + ' : ' + (this.nickname) + ' - ' + (this.group)}
              }
            },
            {
              "type": "text",
              "attr": {
                "value": function () {return this.title}
              }
            }
          ]
        }
      ]
    },
    {
      "type": "container",
      "classList": [
        "div-box"
      ],
      "children": [
        {
          "type": "foo-list",
          "attr": {
            "list": function () {return this.foolist}
          }
        }
      ]
    },
    {
      "type": "container",
      "children": [
        {
          "type": "image",
          "id": function () {return this.imgId},
          "attr": {
            "src": function () {return this.imgUrl}
          },
          "events": {
            "click": "getImageId"
          },
          "repeat": function () {return this.images},
          "style": {
            "width": 50,
            "height": 50
          }
        },
        {
          "type": "text",
          "attr": {
            "value": function () {return this.myid}
          }
        }
      ]
    }
  ]
}

;})

// require module
bootstrap('@weex-component/tech_list', {"transformerVersion":"0.3.1"})