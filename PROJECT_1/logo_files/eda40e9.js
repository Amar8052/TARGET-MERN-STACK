(window.webpackJsonp=window.webpackJsonp||[]).push([[13,132],{1066:function(e,t,r){"use strict";var n=r(100);t.a={filters:{render:n.a},methods:{render:function(e){return this.$options.filters.render(e,this.ctx||this._self)}}}},1129:function(e,t,r){var content=r(1146);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(89).default)("ee989600",content,!0,{sourceMap:!1})},1145:function(e,t,r){"use strict";r(1129)},1146:function(e,t,r){var n=r(88)((function(i){return i[1]}));n.push([e.i,".pill.active[data-v-94be65be]{transform:translateX(calc(100% - .25rem))}",""]),n.locals={},e.exports=n},1153:function(e,t,r){"use strict";var n=r(188),o=r.n(n),l=r(153),c={components:{InformationCircle:o.a,Tippy:l.a},props:{showLabels:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},layout:{type:String,default:"right"},description:{type:String,default:""},active:{type:Boolean,default:!1},tippy:{type:String,default:""},label:{type:String,default:""}}},d=(r(1145),r(11)),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"inline-flex items-center -mx-1.5",class:{"pointer-events-none opacity-50":e.disabled,"flex-row-reverse":"left"===e.layout,"w-full":e.tippy}},[r("button",{staticClass:"p-0.5 relative appearance-none inline-flex flex-shrink-0 mx-1.5 rounded-full border border-gray-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",class:[e.showLabels?"w-16":"w-10"],attrs:{type:"button","aria-pressed":"false","aria-labelledby":"toggleLabel",disabled:e.disabled},on:{click:function(t){return e.$emit("toggle")}}},[r("span",{staticClass:"sr-only"},[e._v("Toggle "+e._s(e.label))]),e._v(" "),r("span",{staticClass:"pill rounded-full shadow ring-0 transition ease-in-out duration-200",class:[{active:e.active},"bg-enterprise-primary",e.showLabels?"h-8 w-8":"h-5 w-5"],attrs:{"aria-hidden":"true"}}),e._v(" "),e.showLabels?r("div",{staticClass:"absolute z-1 p-0.5 inset-0 grid grid-cols-2 items-center text-center leading-none text-xs text-white"},[r("span",{staticClass:"pt-px",class:e.active?"text-gray-300":"text-white"},[e._v("\n        Off\n      ")]),e._v(" "),r("span",{staticClass:"pt-px",class:e.active?"text-white":"text-gray-300"},[e._v("\n        On\n      ")])]):e._e()]),e._v(" "),e.label||e.description?r("label",{staticClass:"relative label w-full mb-0 mx-1.5",class:{"pr-5":e.tippy},attrs:{id:"toggleLabel"}},[e.label?r("span",{staticClass:"text-sm font-medium"},[e._v("\n      "+e._s(e.label)+"\n    ")]):e._e(),e._v(" "),e.description?r("span",{staticClass:"text-sm text-gray-500"},[e._v("\n      "+e._s(e.description)+"\n    ")]):e._e(),e._v(" "),r("Tippy",{staticClass:"absolute right-0 top-0 bottom-0 h-full flex items-center leading-none",attrs:{content:e.tippy}},[r("InformationCircle",{staticClass:"inline-block w-4 h-4"})],1)],1):e._e()])}),[],!1,null,"94be65be",null);t.a=component.exports},1201:function(e,t,r){"use strict";r(16),r(15),r(17),r(18);var n=r(1),o=r(21),l=r(4),c=(r(19),r(187),r(33),r(293),r(35),r(25),r(34),r(46),r(295),r(13),r(55),r(123)),d=r.n(c),f=r(14),content=r(152),h=r(27);function y(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var m={components:{ArrowRight:d.a},mixins:[Object(content.d)(["data/call-to-actions"],!0)],props:{keywordedPhrases:{type:Array,default:function(){return[]}},search:{type:String,default:null},disabled:{type:Boolean,default:!1},showWordark:{type:Boolean,default:!0},showSlogan:{type:Boolean,default:!0},pagination:{type:Number,default:8}},data:function(){return{phrases:[],limit:8}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(t){Object(l.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({flattenedKeywords:function(){var e=(this.phrases||[]).map((function(e){return e.words.map((function(e){return e.synonyms}))})),t=[].concat(Object(o.a)(this.wordmark),Object(o.a)(this.slogan),Object(o.a)(e)).flat(2);return Object(o.a)(new Set(t))},displayKeywords:function(){return this.flattenedKeywords.slice(0,this.limit)},wordmark:function(){return this.showWordark?this.convertInputToArray(this.session.wordmark):[]},slogan:function(){return this.showSlogan?this.convertInputToArray(this.session.slogan):[]}},Object(h.e)(["session"])),watch:{keywordedPhrases:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this.phrases=e||[]}},created:function(){this.limit=this.pagination},mounted:function(){this.search?this.fetchKeywords(this.search):this.phrases=this.keywordedPhrases||[],f.a.$on(f.b.AppWordCloudUpdated,this.fetchKeywords)},beforeDestroy:function(){f.a.$off(f.b.AppWordCloudUpdated,this.fetchKeywords)},methods:{fetchKeywords:function(){var e=arguments,t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o,data;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(n=e.length>0&&void 0!==e[0]?e[0]:""){r.next=3;break}return r.abrupt("return");case 3:return r.prev=3,r.next=6,t.$api.get("https://kwd.logo.com",{params:{phrases:n.trim()}});case 6:o=r.sent,data=o.data,t.phrases=data.phrases,r.next=14;break;case 11:r.prev=11,r.t0=r.catch(3),t.$rollbar.error("Error loading keywords for WordCloud");case 14:case"end":return r.stop()}}),r,null,[[3,11]])})))()},convertInputToArray:function(input){return input?input.toLowerCase().split(" ").filter(Boolean):[]}}},w=m,O=r(11),component=Object(O.a)(w,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex flex-wrap -mx-2",class:{"opacity-50 cursor-not-allowed":e.disabled}},[e._l(e.displayKeywords,(function(t){return r("span",{key:t,staticClass:"btn cursor-pointer btn-naked mx-1 mb-2 text-sm rounded-full",class:{"pointer-events-none opacity-50":e.disabled},attrs:{type:"button"},on:{click:function(r){return e.$emit("select",t)}}},[e._v("\n    "+e._s(t)+"\n  ")])})),e._v(" "),e.limit<e.flattenedKeywords.length?r("span",{staticClass:"btn cursor-pointer mx-0.5 mb-1 text-xs font-bold text-green-500",class:{"pointer-events-none opacity-50":e.disabled},attrs:{type:"button"},on:{click:function(t){e.limit=e.limit+e.pagination}}},[e._v("\n    "+e._s(e.page.view_more)+"\n\n    "),r("ArrowRight",{staticClass:"w-3.5 h-3.5 ml-1 mb-px"})],1):e._e()],2)}),[],!1,null,null,null);t.a=component.exports},1247:function(e,t,r){"use strict";r(16),r(15),r(13),r(17),r(18);var n=r(4),o=r(14),l=r(27);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}t.a={computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({value:{get:function(){return this.get},set:function(e){e!==this.value&&(this.set(e),o.a.$emit(o.b.EditorFetchIdeas),o.a.$emit(o.b.AnalyticsButtonClick,{label:"Ideas Filter ".concat(this.type," Preference")}))}}},Object(l.e)(["editor"])),methods:Object(l.b)({refreshLogos:"app/refreshLogos"})}},1311:function(e,t,r){var content=r(1381);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(89).default)("c0ad28aa",content,!0,{sourceMap:!1})},1353:function(e,t,r){"use strict";r(16),r(15),r(13),r(17),r(18);var n=r(1),o=r(4),l=(r(19),r(1066)),c=r(27),d=r(1153),f=r(303),h=r(1247),y=r(14);function m(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var w={components:{Lightswitch:d.a,FieldLabel:f.a},mixins:[h.a],data:function(){return{type:"Icon"}},computed:{enabled:function(){return"force-invisible"!==this.value},get:function(){return this.editor.icon_visibility}},methods:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({toggle:function(){this.value=this.enabled?"force-invisible":"force-visible",y.a.$emit(y.b.IdeasIconToggled)}},Object(c.d)({set:"editor/SET_ICON_VISIBILITY"}))},O=w,v=r(11),_=Object(v.a)(O,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("FieldLabel",{staticClass:"pl-2.5",attrs:{label:"Icons"}}),e._v(" "),r("Lightswitch",{attrs:{layout:"top","show-labels":!0,disabled:!1,active:e.enabled},on:{toggle:e.toggle}})],1)}),[],!1,null,null,null).exports,content=r(152),j=r(21),k=(r(33),r(46),r(312)),x=r(1201);function S(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function T(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?S(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):S(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var D={components:{FieldMessage:k.a,FieldLabel:f.a,WordCloud:x.a},mixins:[Object(content.d)(["editor/controls/ideas"],!0),l.a,content.b,content.c],data:function(){return{showWordcloud:!1,maxKeywords:3,timeout:null,input:""}},created:function(){this.initKeywords()},mounted:function(){y.a.$on(y.b.IdeasIconToggled,this.onIconToggle)},beforeDestroy:function(){y.a.$off(y.b.IdeasIconToggled,this.onIconToggle)},computed:T(T({iconVisibilty:function(){return this.editor.icon_visibility},keywords:{get:function(){return this.editor.custom_keywords.map((function(text){return{text:text}}))},set:function(e){this.SET_CUSTOM_KEYWORDS(e.map((function(e){return e.text}))),this.iconsEnabled&&this.$emit("generate")}},tagsOptions:function(){return{maxTags:this.maxKeywords,addOnKey:[13,188],tags:this.keywords,placeholder:"",lastKeyword:null}},reachedMaxKeywords:function(){return this.keywords.length===this.maxKeywords},iconsEnabled:function(){return"force-invisible"!==this.iconVisibilty}},Object(c.c)({getKeywords:"session/getKeywords"})),Object(c.e)(["session","editor"])),methods:T({onIconToggle:function(){0===this.keywords.length&&"force-visible"===this.iconVisibilty&&this.lastKeyword&&(this.keywords=[this.lastKeyword])},onTagsChanged:function(e){0===e.length&&1===this.keywords.length&&(this.lastKeyword=this.keywords[0]),e.length>this.keywords.length&&"force-invisible"===this.iconVisibilty&&this.$store.commit("editor/SET_ICON_VISIBILITY","force-visible"),this.keywords=e,this.keywords&&0===this.keywords.length&&this.$store.commit("editor/SET_ICON_VISIBILITY","force-invisible")},initKeywords:function(){this.keywords.length||(this.keywords=Object(j.a)(this.getKeywords).slice(0,3).map((function(text){return{text:text}})))},addKeyword:function(text){this.keywords=[].concat(Object(j.a)(this.keywords),[{text:text}]),this.focusInput()},focusInput:function(){try{document.getElementsByClassName("ti-new-tag-input")[0].focus()}catch(e){console.error(e)}},openWordcloud:function(){clearTimeout(this.timeout),this.showWordcloud=!0},closeWordcloud:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$nextTick();case 2:e.timeout=setTimeout((function(){return e.showWordcloud=!1}),500);case 3:case"end":return t.stop()}}),t)})))()}},Object(c.d)({SET_CUSTOM_KEYWORDS:"editor/SET_CUSTOM_KEYWORDS"}))},E=(r(1380),Object(v.a)(D,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"w-full sm:max-w-md"},[r("FieldLabel",{staticClass:"pl-0.5",attrs:{label:e.fields.keywords?e.render(e.fields.keywords.label):"",tippy:e.fields.keywords?e.render(e.fields.keywords.tippy):""}}),e._v(" "),r("div",{staticClass:"relative"},[r("vue-tags-input",e._b({ref:"input",on:{"tags-changed":e.onTagsChanged,focus:e.openWordcloud,blur:e.closeWordcloud},model:{value:e.input,callback:function(t){e.input=t},expression:"input"}},"vue-tags-input",e.tagsOptions,!1)),e._v(" "),e.showWordcloud&&e.reachedMaxKeywords?r("FieldMessage",{attrs:{"status-message":"You've reached the maximum keywords.","is-success":!0,"is-error":!1}}):e._e(),e._v(" "),r("transition",{attrs:{name:"dropdown"}},[e.showWordcloud?r("aside",{staticClass:"absolute my-2 w-full max-w-full rounded-md border bg-white border-gray-100 shadow-lg z-10 p-2 pb-0 overflow-hidden",attrs:{tabindex:"0"},on:{focus:e.focusInput}},[r("WordCloud",{attrs:{"keyworded-phrases":e.session.keywordedPhrases,disabled:e.reachedMaxKeywords,pagination:6},on:{select:e.addKeyword}})],1):e._e()])],1)],1)])}),[],!1,null,"dde7788a",null).exports),I=r(854),P=r.n(I),K=r(298),C=r(285),A=r(73);function L(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function W(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?L(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):L(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var $={components:{ControlTitle:K.a,IconKeywords:E,RefreshIcon:P.a,FieldLabel:f.a,IconFilter:_,TextInput:C.a},mixins:[Object(content.d)(["editor/controls/ideas"],!0),l.a,content.b,content.c,content.e],props:{showFieldPrompts:{type:Boolean,default:!0}},validations:{wordmark:A.l,slogan:A.j},data:function(){return{disabled:!1}},computed:W(W({wordmark:{get:function(){return this.editor.unvalidated_wordmark},set:function(e){this.SET_UNVALIDATED_WORDMARK(e)}},slogan:{get:function(){return this.editor.unvalidated_slogan},set:function(e){this.SET_UNVALIDATED_SLOGAN(e)}}},Object(c.e)(["session","editor","enterprise"])),Object(c.c)({updating:"editor/loading_overlay_visible",getKeywords:"session/getKeywords"})),mounted:function(){this.initKeywords(),this.populateTextFields()},methods:W(W({invalidForm:function(){return this.$invalidInput()},generate:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.invalidForm()){t.next=2;break}return t.abrupt("return");case 2:return e.editor.custom_keywords.length&&(r=e.editor.custom_keywords.join(" "),e.SET_UNVALIDATED_KEYWORDS(r),e.setKeywords(r)),e.setWordmark(e.wordmark),e.setSlogan(e.slogan),t.next=7,e.sendSessionToKeyworder();case 7:y.a.$emit(y.b.EditorFetchIdeas),e.editor.current_logo&&e.fetchNewLogoFromState(),y.a.$emit(y.b.AnalyticsButtonClick,{label:"Generate New Logos Button"});case 10:case"end":return t.stop()}}),t)})))()},initKeywords:function(){var e=this.getKeywords.join(" ");this.SET_UNVALIDATED_KEYWORDS(e)},populateTextFields:function(){var e=this.session,t=e.wordmark,r=e.slogan;this.$store.commit("editor/SET_UNVALIDATED_WORDMARK",t),this.$store.commit("editor/SET_UNVALIDATED_SLOGAN",r),this.$store.commit("session/setWordmark",t),this.$store.commit("session/setSlogan",r)}},Object(c.b)({sendSessionToKeyworder:"session/sendSessionToKeyworder",fetchNewLogoFromState:"editor/fetchNewLogoFromState",refreshLogos:"app/refreshLogos"})),Object(c.d)({SET_UNVALIDATED_KEYWORDS:"editor/SET_UNVALIDATED_KEYWORDS",SET_UNVALIDATED_WORDMARK:"editor/SET_UNVALIDATED_WORDMARK",SET_UNVALIDATED_SLOGAN:"editor/SET_UNVALIDATED_SLOGAN",setKeywords:"session/setKeywords",setWordmark:"session/setWordmark",setSlogan:"session/setSlogan"}))},R=Object(v.a)($,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"lg:sticky top-0"},[e.session.wordmark?e._e():r("ControlTitle",{attrs:{title:e.page.empty_text||""}}),e._v(" "),r("TextInput",{attrs:{id:e.fields.wordmark?e.fields.wordmark.id:"",required:"",maxlength:"30",label:e.fields.wordmark?e.render(e.fields.wordmark.label):"",placeholder:e.fields.wordmark?e.render(e.fields.wordmark.placeholder):"",prompt:e.showFieldPrompts&&e.fields.wordmark?e.fields.wordmark.prompt:"",status:e.fields.wordmark?e.fields.wordmark.status:"","status-message":e.fields.wordmark?e.fields.wordmark.message:"",tippy:e.fields.wordmark?e.render(e.fields.wordmark.tippy):"","hard-disable":!e.editor.features.includes("wordmark")},on:{enter:e.generate},model:{value:e.wordmark,callback:function(t){e.wordmark=t},expression:"wordmark"}}),e._v(" "),r("TextInput",{attrs:{id:e.fields.slogan?e.fields.slogan.id:"",maxlength:"40",label:e.fields.slogan?e.render(e.fields.slogan.label):"",placeholder:e.fields.slogan?e.render(e.fields.slogan.placeholder):"",prompt:e.showFieldPrompts&&e.fields.slogan?e.fields.slogan.prompt:"",status:e.fields.slogan?e.fields.slogan.status:"","status-message":e.fields.slogan?e.fields.slogan.message:"",tippy:e.fields.slogan?e.render(e.fields.slogan.tippy):"","hard-disable":!e.editor.features.includes("slogan")},on:{enter:e.generate},model:{value:e.slogan,callback:function(t){e.slogan=t},expression:"slogan"}}),e._v(" "),r("IconFilter"),e._v(" "),r("IconKeywords",{on:{generate:e.generate}}),e._v(" "),e._t("default"),e._v(" "),r("div",[r("FieldLabel",{staticClass:"pl-0.5",attrs:{label:"&nbsp;"}}),e._v(" "),e.contentReady?r("button",{staticClass:"generate-btn flex w-full px-4 pt-2.5 pb-1.5",class:e.buttons.generate.classes,attrs:{id:e.buttons.generate.id,type:"button",disabled:e.disabled,loading:e.disabled},on:{click:e.generate}},[r("RefreshIcon",{staticClass:"btn-icon-left"}),e._v("\n\n      "+e._s(e.buttons.generate.text)+"\n    ")],1):e._e()],1)],2)}),[],!1,null,null,null);t.a=R.exports},1380:function(e,t,r){"use strict";r(1311)},1381:function(e,t,r){var n=r(88)((function(i){return i[1]}));n.push([e.i,".vue-tags-input[data-v-dde7788a] .ti-new-tag-input{font-size:.875rem!important;line-height:1.25rem!important}.vue-tags-input[data-v-dde7788a] .ti-input{padding:0!important;min-height:40.5px}.vue-tags-input[data-v-dde7788a] .ti-tags{flex-wrap:nowrap!important}.vue-tags-input[data-v-dde7788a] .ti-tag{font-size:.875rem!important;line-height:1.25rem!important;padding:.125rem .5rem!important;margin:.25rem!important}",""]),n.locals={},e.exports=n},854:function(e,t,r){r(16),r(15),r(13),r(17),r(18);var n=r(38),o=r(39),l=["class","staticClass","style","staticStyle","attrs"];function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}e.exports={functional:!0,render:function(e,t){var r=t._c,data=(t._v,t.data),d=t.children,f=void 0===d?[]:d,h=data.class,y=data.staticClass,style=data.style,m=data.staticStyle,w=data.attrs,O=void 0===w?{}:w,v=o(data,l);return r("svg",function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){n(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({class:[h,y],style:[style,m],attrs:Object.assign({fill:"currentColor",viewBox:"0 0 20 20"},O)},v),f.concat([r("path",{attrs:{"fill-rule":"evenodd",d:"M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z","clip-rule":"evenodd"}})]))}}}}]);