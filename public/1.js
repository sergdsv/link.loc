(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/comments/Comment.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/comments/Comment.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Comment_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Comment.vue */ "./resources/js/components/comments/Comment.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Comment: _Comment_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: ['comment', 'depth'],
  data: function data() {
    return {
      show: false,
      newComment: '',
      commentList: []
    };
  },
  name: 'Comment',
  watch: {
    msg: function msg() {// this.commentList.push(this.comment);
    }
  },
  mounted: function mounted() {
    var app = this;
    axios.get('http://link.test/api/docs/comments').then(function (response) {
      app.comments = response.data.comments;
    });
  },
  computed: {
    indent: function indent() {
      return {
        transform: "translate(".concat(this.depth * 30, "px)")
      };
    }
  },
  methods: {
    addItem: function addItem(id, newComment) {
      this.$emit('addItem', id, newComment); // console.log(newComment)
    },
    additemPush: function additemPush(id, newComment) {
      this.comment.push({
        name: 'efds',
        id: 1
      });
      console.log(this.comment.id);
      console.log(newComment);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/comments/CommentsIndex.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/comments/CommentsIndex.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Comment_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Comment.vue */ "./resources/js/components/comments/Comment.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Comment: _Comment_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  // props: ['comment'],
  data: function data() {
    return {
      show: false,
      comments: [{
        id: 0,
        text: 'Comment 1 test',
        parent_id: 0
      }, {
        id: 1,
        text: 'Comment 2 test',
        parent_id: 0
      }, {
        id: 2,
        text: 'Comment 3 test',
        parent_id: 0
      }, {
        id: 3,
        text: 'Comment 4 test',
        parent_id: 0
      }],
      newComment: '',
      commentList: [],
      depth: 0
    };
  },
  name: 'Comment',
  watch: {
    msg: function msg() {// this.commentList.push(this.comment);
    }
  },
  // mounted(){
  //     var app = this;
  //     axios.get('http://link.test/api/docs/comments')
  //         .then(function (response) {
  //         app.comments = response.data.comments
  //         })
  // },
  computed: {
    indent: function indent() {
      return {
        transform: "translate(".concat(this.depth * 30, "px)")
      };
    }
  },
  methods: {
    addItem: function addItem() {
      if (!this.comments[0].replies) {
        this.comments[0].replies = [];
        console.log('if');
      }

      this.comments[0].replies.push({
        id: 0,
        text: 'Comment 1 test',
        parent_id: 0
      });
      console.log(this.comments[0]);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/comments/Comment.vue?vue&type=template&id=62ce996f&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/comments/Comment.vue?vue&type=template&id=62ce996f& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c(
      "div",
      { staticClass: "row" },
      _vm._l(_vm.comments, function(comment, index) {
        return _c(
          "div",
          { key: index },
          [
            _c("Comment", { attrs: { comment: comment, depth: 0 } }),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "col-8 shadow-sm p-3 mb-5 bg-white rounded",
                style: _vm.indent
              },
              [
                _vm._v(
                  "\r\n                    " +
                    _vm._s(comment.id) +
                    "  =====  " +
                    _vm._s(comment.text) +
                    "\r\n            "
                ),
                _c("form", [
                  _c("div", { staticClass: "float-right" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("textarea", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.newComment,
                            expression: "newComment"
                          },
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.show,
                            expression: "show"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { id: "exampleFormControlTextarea1", rows: "3" },
                        domProps: { value: _vm.newComment },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.newComment = $event.target.value
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.show == false,
                            expression: "show == false"
                          }
                        ],
                        staticClass: "btn-sm btn-primary",
                        on: {
                          click: function($event) {
                            _vm.show = !_vm.show
                          }
                        }
                      },
                      [_vm._v("Ответить")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.show == true,
                            expression: "show == true"
                          }
                        ],
                        staticClass: "btn-sm btn-primary",
                        on: {
                          click: function($event) {
                            _vm.addItem(comment.id, _vm.newComment)
                            _vm.show = !_vm.show
                          }
                        }
                      },
                      [_vm._v("Отправить")]
                    )
                  ])
                ])
              ]
            ),
            _vm._v(" "),
            _vm._l(comment.replies, function(comment, index) {
              return _c("Comment", {
                key: index,
                attrs: { comment: comment, depth: _vm.depth + 1 },
                on: { addItem: _vm.additemPush }
              })
            })
          ],
          2
        )
      }),
      0
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/comments/CommentsIndex.vue?vue&type=template&id=ef678664&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/comments/CommentsIndex.vue?vue&type=template&id=ef678664& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c(
      "div",
      { staticClass: "row" },
      [
        _vm._l(_vm.comments, function(comment, index) {
          return _c("div", { key: index }, [
            _c(
              "div",
              {
                staticClass: "col-8 shadow-sm p-3 mb-5 bg-white rounded",
                style: _vm.indent
              },
              [
                _vm._v(
                  "\r\n                    " +
                    _vm._s(comment.id) +
                    "  =====  " +
                    _vm._s(comment.text) +
                    "\r\n              "
                )
              ]
            )
          ])
        }),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("textarea", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.newComment,
                expression: "newComment"
              }
            ],
            staticClass: "form-control",
            attrs: { id: "exampleFormControlTextarea1", rows: "3" },
            domProps: { value: _vm.newComment },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.newComment = $event.target.value
              }
            }
          }),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn-sm btn-primary",
              on: {
                click: function($event) {
                  return _vm.addItem()
                }
              }
            },
            [_vm._v("Отправить")]
          )
        ])
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/comments/Comment.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/comments/Comment.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Comment_vue_vue_type_template_id_62ce996f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Comment.vue?vue&type=template&id=62ce996f& */ "./resources/js/components/comments/Comment.vue?vue&type=template&id=62ce996f&");
/* harmony import */ var _Comment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Comment.vue?vue&type=script&lang=js& */ "./resources/js/components/comments/Comment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Comment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Comment_vue_vue_type_template_id_62ce996f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Comment_vue_vue_type_template_id_62ce996f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/comments/Comment.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/comments/Comment.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/comments/Comment.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Comment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Comment.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/comments/Comment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Comment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/comments/Comment.vue?vue&type=template&id=62ce996f&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/comments/Comment.vue?vue&type=template&id=62ce996f& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Comment_vue_vue_type_template_id_62ce996f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Comment.vue?vue&type=template&id=62ce996f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/comments/Comment.vue?vue&type=template&id=62ce996f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Comment_vue_vue_type_template_id_62ce996f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Comment_vue_vue_type_template_id_62ce996f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/comments/CommentsIndex.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/comments/CommentsIndex.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CommentsIndex_vue_vue_type_template_id_ef678664___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CommentsIndex.vue?vue&type=template&id=ef678664& */ "./resources/js/components/comments/CommentsIndex.vue?vue&type=template&id=ef678664&");
/* harmony import */ var _CommentsIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CommentsIndex.vue?vue&type=script&lang=js& */ "./resources/js/components/comments/CommentsIndex.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CommentsIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CommentsIndex_vue_vue_type_template_id_ef678664___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CommentsIndex_vue_vue_type_template_id_ef678664___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/comments/CommentsIndex.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/comments/CommentsIndex.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/comments/CommentsIndex.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentsIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CommentsIndex.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/comments/CommentsIndex.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentsIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/comments/CommentsIndex.vue?vue&type=template&id=ef678664&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/comments/CommentsIndex.vue?vue&type=template&id=ef678664& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentsIndex_vue_vue_type_template_id_ef678664___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CommentsIndex.vue?vue&type=template&id=ef678664& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/comments/CommentsIndex.vue?vue&type=template&id=ef678664&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentsIndex_vue_vue_type_template_id_ef678664___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentsIndex_vue_vue_type_template_id_ef678664___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);