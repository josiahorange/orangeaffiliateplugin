/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);


var pluginUrl = pluginsUrl.url;
var registerBlockType = window.wp.blocks.registerBlockType;
var InspectorControls = wp.blockEditor.InspectorControls;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    Button = _wp$components.Button,
    ResponsiveWrapper = _wp$components.ResponsiveWrapper;
var Fragment = wp.element.Fragment;
var withSelect = wp.data.withSelect;
var __ = wp.i18n.__;
var _wp$blockEditor = wp.blockEditor,
    MediaUpload = _wp$blockEditor.MediaUpload,
    MediaUploadCheck = _wp$blockEditor.MediaUploadCheck;
var TextControl = wp.components.TextControl;
var TextareaControl = wp.components.TextareaControl;

var BlockEdit = function BlockEdit(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes;

  function updateUrl(event) {
    setAttributes({
      oafurl: document.getElementById("inputfieldurl").value
    });
    setAttributes({
      oafname: document.getElementById("inputfieldname").value
    });
    setAttributes({
      oafdescription: document.getElementById("inputfielddescription").value
    });
    updatedb(document.getElementById("inputfieldurl").value);
  }

  function updatedb(oafurlajax) {
    alert(pluginUrl + '/formprocess/dbsubmit.php');
    jQuery(function ($) {
      $.ajax({
        type: 'post',
        url: pluginUrl + '/formprocess/dbsubmit.php',
        datatype: "text",
        data: {
          user_oaflink: oafurlajax
        },
        success: function success() {
          alert("ajax complete");
        },
        error: function error() {
          alert("ajax failed");
        }
      });
    });
  }

  var updateattributes = function updateattributes() {
    props.setAttributes({
      oafurl: document.getElementById("inputfieldurl").value,
      oafname: document.getElementById("inputfieldname").value,
      oafdescription: document.getElementById("inputfielddescription").value,
      oafsubtext: document.getElementById("inputfieldsubtext").value,
      oafbuttontext: document.getElementById("inputfieldbuttontext").value
    }); //updatedb(document.getElementById("inputfieldurl").value); 
  };

  function onTodoChange(value) {
    this.setState({
      name: value
    });
  }

  var removeMedia = function removeMedia() {
    props.setAttributes({
      mediaId: 0,
      mediaUrl: ''
    });
  };

  var onSelectMedia = function onSelectMedia(media) {
    props.setAttributes({
      mediaId: media.id,
      mediaUrl: media.url
    }); //updatedb(document.getElementById("inputfieldurl").value); 
  };

  var blockStyle = {
    backgroundImage: attributes.mediaUrl != '' ? 'url("' + attributes.mediaUrl + '")' : 'none'
  };
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
    title: __('Select Product Image', 'awp'),
    initialOpen: true
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "editor-post-featured-image"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(MediaUploadCheck, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(MediaUpload, {
    onSelect: onSelectMedia,
    value: attributes.mediaId,
    allowedTypes: ['image'],
    render: function render(_ref) {
      var open = _ref.open;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
        className: attributes.mediaId == 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview',
        onClick: open
      }, attributes.mediaId == 0 && __('Choose an image', 'awp'), props.media != undefined && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ResponsiveWrapper, {
        naturalWidth: props.media.media_details.width,
        naturalHeight: props.media.media_details.height
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
        src: props.media.source_url
      })));
    }
  })), attributes.mediaId != 0 && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(MediaUploadCheck, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(MediaUpload, {
    title: __('Replace image', 'awp'),
    value: attributes.mediaId,
    onSelect: onSelectMedia,
    allowedTypes: ['image'],
    render: function render(_ref2) {
      var open = _ref2.open;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
        onClick: open,
        isDefault: true,
        isLarge: true
      }, __('Replace image', 'awp'));
    }
  })), attributes.mediaId != 0 && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(MediaUploadCheck, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
    onClick: removeMedia,
    isLink: true,
    isDestructive: true
  }, __('Remove image', 'awp'))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TextControl, {
    label: "Affiliate URL",
    value: attributes.oafurl,
    class: "oafinputfield",
    id: "inputfieldurl",
    onChange: updateattributes,
    type: "text"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TextControl, {
    label: "Product Name",
    value: attributes.oafname,
    class: "oafinputfield",
    id: "inputfieldname",
    onChange: updateattributes,
    type: "text"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TextareaControl, {
    label: "Product Description",
    value: attributes.oafdescription,
    class: "oafinputfield",
    id: "inputfielddescription",
    onChange: updateattributes,
    type: "text"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TextareaControl, {
    label: "Subtext",
    value: attributes.oafsubtext,
    class: "oafinputfield",
    id: "inputfieldsubtext",
    onChange: updateattributes,
    type: "text"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TextareaControl, {
    label: "Button Text",
    value: attributes.oafbuttontext,
    class: "oafinputfield",
    id: "inputfieldbuttontext",
    onChange: updateattributes,
    type: "text"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("b", null, "URL: "), attributes.oafurl), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    class: "oafcontainer"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    class: "oafleft"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
    src: attributes.mediaUrl
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    class: "oafright"
    /*style={blockStyle}*/

  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("h2", null, attributes.oafname), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, attributes.oafdescription), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("button", null, attributes.oafbuttontext), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    class: "oafnot"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, attributes.oafsubtext)))));
};

registerBlockType('orangeaffiliate/o-affiliateblock', {
  // built in attributes
  title: 'Orange Affiliate 1',
  description: 'Affiliate Block to Display affiliate Products.',
  icon: 'cart',
  category: 'common',
  // custom attributes
  attributes: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
    oafurl: {
      type: 'string'
    },
    oafname: {
      type: 'string'
    },
    oafdescription: {
      type: 'string'
    },
    mediaId: {
      type: 'number',
      default: 0
    },
    mediaUrl: {
      type: 'string',
      default: ''
    },
    oafsubtext: {
      type: 'string',
      default: 'This is an affiliate Link'
    },
    oafbuttontext: {
      type: 'string',
      default: 'See the Product'
    }
  }, "oafbuttontext", {
    type: 'boolean',
    default: 'See the Product'
  }),
  // built in functions

  /*edit({ setAttributes, attributes}){
        //custom functions
        function updateUrl(event) {
          setAttributes( { oafurl:document.getElementById("inputfield").value } );
          updatedb(document.getElementById("inputfield").value); 
      }
      function updatedb(oafurlajax){
          alert(pluginUrl + '/formprocess/dbsubmit.php');
          jQuery(function($) {
                  $.ajax
                  ({
                      type:'post',
                      url:pluginUrl + '/formprocess/dbsubmit.php',
                      datatype:"text",
                      data:
                      {
                          user_oaflink: oafurlajax,
                      },
                      success: function(){ alert("ajax complete")},
                      error:function(){ alert("ajax failed")},
                      
                      
                  });
              
      });
        
       
        }
  
      
  
      return([
          <input id="inputfield" value={ attributes.oafurl } type="text" />,
          <input onClick={ updateUrl } type="button"  value="Submiting"/>,
           
      ]); 
        
          
      
       
  
          
  
      
    },*/
  edit: withSelect(function (select, props) {
    return {
      media: props.attributes.mediaId ? select('core').getMedia(props.attributes.mediaId) : undefined
    };
  })(BlockEdit),

  /*save({ attributes }){
       
          
      
      return <p>Author Name: { attributes.oafurl }</p>;
    }*/
  save: function save(props) {
    var attributes = props.attributes;
    var blockStyle = {
      backgroundImage: attributes.mediaUrl != '' ? 'url("' + attributes.mediaUrl + '")' : 'none'
    };
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "oafwrapper"
      /*style={blockStyle}*/

    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("a", {
      class: "oafcontainer",
      href: attributes.oafurl
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "oafleft"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
      src: attributes.mediaUrl
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "oafright"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("h3", null, attributes.oafname), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, attributes.oafdescription), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("button", null, attributes.oafbuttontext), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "oafnot"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, attributes.oafsubtext)))));
  }
});

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map