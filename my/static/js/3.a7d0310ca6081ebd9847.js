webpackJsonp([3],{"0A7J":function(t,e,n){t.exports=n.p+"static/img/Myhouse.0403e10.png"},"26dS":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});n("dkCF"),n("xCzi"),n("NS4O");var o,i=n("WPoX"),s=n("7+uW"),a=n("o69Z"),c=n("CsZI"),l=n("SSsa"),r=Object(a.h)("dialog"),u=r[0],h=r[1],d=r[2],v=u({mixins:[c.a],props:{title:String,message:String,className:null,callback:Function,beforeClose:Function,messageAlign:String,cancelButtonText:String,cancelButtonColor:String,confirmButtonText:String,confirmButtonColor:String,showCancelButton:Boolean,showConfirmButton:{type:Boolean,default:!0},overlay:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!1}},data:function(){return{loading:{confirm:!1,cancel:!1}}},methods:{onClickOverlay:function(){this.handleAction("overlay")},handleAction:function(t){var e=this;this.$emit(t),this.beforeClose?(this.loading[t]=!0,this.beforeClose(t,function(n){!1!==n&&e.onClose(t),e.loading[t]=!1})):this.onClose(t)},onClose:function(t){this.close(),this.callback&&this.callback(t)}},render:function(t){var e,n=this;if(this.shouldRender){var o=this.title,i=this.message,s=this.messageAlign,a=this.slots(),c=o&&t("div",{class:h("header",{isolated:!i&&!a})},[o]),r=(a||i)&&t("div",{class:h("content")},[a||t("div",{domProps:{innerHTML:i},class:h("message",(e={"has-title":o},e[s]=s,e))})]),u=this.showCancelButton&&this.showConfirmButton,v=t("div",{class:["van-hairline--top",h("footer",{buttons:u})]},[this.showCancelButton&&t(l.a,{attrs:{size:"large",loading:this.loading.cancel,text:this.cancelButtonText||d("cancel")},class:h("cancel"),style:{color:this.cancelButtonColor},on:{click:function(){n.handleAction("cancel")}}}),this.showConfirmButton&&t(l.a,{attrs:{size:"large",loading:this.loading.confirm,text:this.confirmButtonText||d("confirm")},class:[h("confirm"),{"van-hairline--left":u}],style:{color:this.confirmButtonColor},on:{click:function(){n.handleAction("confirm")}}})]);return t("transition",{attrs:{name:"van-dialog-bounce"}},[t("div",{directives:[{name:"show",value:this.value}],class:[h(),this.className]},[c,r,v])])}}});function f(t){return a.f?Promise.resolve():new Promise(function(e,n){o&&Object(a.d)(o.$el)||(o&&o.$destroy(),(o=new(s.a.extend(v))({el:document.createElement("div"),propsData:{lazyRender:!1}})).$on("input",function(t){o.value=t})),Object(i.a)(o,f.currentOptions,t,{resolve:e,reject:n})})}f.defaultOptions={value:!0,title:"",message:"",overlay:!0,className:"",lockScroll:!0,beforeClose:null,messageAlign:"",getContainer:"body",cancelButtonText:"",cancelButtonColor:null,confirmButtonText:"",confirmButtonColor:null,showConfirmButton:!0,showCancelButton:!1,closeOnClickOverlay:!1,callback:function(t){o["confirm"===t?"resolve":"reject"](t)}},f.alert=f,f.confirm=function(t){return f(Object(i.a)({showCancelButton:!0},t))},f.close=function(){o&&(o.value=!1)},f.setDefaultOptions=function(t){Object(i.a)(f.currentOptions,t)},f.resetDefaultOptions=function(){f.currentOptions=Object(i.a)({},f.defaultOptions)},f.resetDefaultOptions(),f.install=function(){s.a.use(v)},s.a.prototype.$dialog=f;var m=f,p=n("Cz8s");s.a.use(m);var C={created:function(){m.alert({message:"非住户无法使用该功能，绑定房屋后即可使用，是否现在绑定？",showCancelButton:!0,confirmButtonText:"申请绑定",confirmButtonColor:"#455cc7",cancelButtonText:"暂不绑定",cancelButtonColor:"#B8B7B7"}).then(function(){})},components:{MHeader:p.a}},g={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("m-header",{attrs:{title:"家园管家"}}),this._v(" "),this._m(0)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"box"},[o("div",{staticClass:"inner-box"},[o("div",{staticClass:"content"},[o("img",{attrs:{src:n("hZhx")}}),t._v(" "),o("p",[t._v("物业缴费")])])]),t._v(" "),o("div",{staticClass:"inner-box"},[o("div",{staticClass:"content"},[o("img",{attrs:{src:n("sF+5")}}),t._v(" "),o("p",[t._v("物业通知")])])]),t._v(" "),o("div",{staticClass:"inner-box"},[o("div",{staticClass:"content"},[o("img",{attrs:{src:n("yNsK")}}),t._v(" "),o("p",[t._v("个人中心")])])]),t._v(" "),o("div",{staticClass:"inner-box"},[o("div",{staticClass:"content"},[o("img",{attrs:{src:n("0A7J")}}),t._v(" "),o("p",[t._v("我的房屋")])])])])}]};var y=n("VU/8")(C,g,!1,function(t){n("d9Oj")},"data-v-02f4961c",null);e.default=y.exports},CsZI:function(t,e,n){"use strict";var o={zIndex:2e3,lockCount:0,stack:[],get top(){return this.stack[this.stack.length-1]}},i=10;var s={data:function(){return{direction:""}},methods:{touchStart:function(t){this.resetTouchStatus(),this.startX=t.touches[0].clientX,this.startY=t.touches[0].clientY},touchMove:function(t){var e,n,o=t.touches[0];this.deltaX=o.clientX-this.startX,this.deltaY=o.clientY-this.startY,this.offsetX=Math.abs(this.deltaX),this.offsetY=Math.abs(this.deltaY),this.direction=this.direction||(e=this.offsetX,n=this.offsetY,e>n&&e>i?"horizontal":n>e&&n>i?"vertical":"")},resetTouchStatus:function(){this.direction="",this.deltaX=0,this.deltaY=0,this.offsetX=0,this.offsetY=0}}},a=n("sM86"),c=n("WPoX"),l=n("AA6R"),r=n.n(l),u=n("o69Z"),h=n("rhik"),d=Object(u.h)("overlay"),v=d[0],f=d[1];function m(t,e,n,o){var i=Object(c.a)({zIndex:e.zIndex},e.customStyle);return t("transition",{attrs:{name:"van-fade"}},[t("div",r()([{directives:[{name:"show",value:e.visible}],style:i,class:[f(),e.className],on:{touchmove:function(t){t.preventDefault(),t.stopPropagation()},click:function(t){Object(h.a)(o,"click",t)}}},Object(h.b)(o,!0)]))])}m.props={zIndex:Number,className:null,visible:Boolean,customStyle:Object};var p,C=v(m),g={className:"",customStyle:{}};function y(){if(o.top){var t=o.top.vm;t.$emit("click-overlay"),t.closeOnClickOverlay&&(t.onClickOverlay?t.onClickOverlay():t.close())}}function b(){if(p||(p=Object(h.c)(C,{on:{click:y}})),o.top){var t=o.top,e=t.vm,n=t.config,i=e.$el,s=i&&i.parentNode?i.parentNode:document.body;s&&s.appendChild(p.$el),Object(c.a)(p,g,n,{visible:!0})}else p.visible=!1}function O(t){var e=o.stack;e.length&&(o.top.vm===t?(e.pop(),b()):o.stack=e.filter(function(e){return e.vm!==t}))}var x=n("KwZk");n.d(e,"a",function(){return B});var B={mixins:[s],props:{value:Boolean,overlay:Boolean,overlayStyle:Object,overlayClass:String,closeOnClickOverlay:Boolean,zIndex:[String,Number],getContainer:[String,Function],lockScroll:{type:Boolean,default:!0},lazyRender:{type:Boolean,default:!0}},data:function(){return{inited:this.value}},computed:{shouldRender:function(){return this.inited||!this.lazyRender}},watch:{value:function(t){var e=t?"open":"close";this.inited=this.inited||this.value,this[e](),this.$emit(e)},getContainer:function(){this.move()},overlay:function(){this.renderOverlay()}},mounted:function(){this.getContainer&&this.move(),this.value&&this.open()},activated:function(){this.value&&this.open()},beforeDestroy:function(){this.close(),this.getContainer&&this.$parent&&this.$parent.$el&&this.$parent.$el.appendChild(this.$el)},deactivated:function(){this.close()},methods:{open:function(){this.$isServer||this.opened||(void 0!==this.zIndex&&(o.zIndex=this.zIndex),this.opened=!0,this.renderOverlay(),this.lockScroll&&(Object(a.b)(document,"touchstart",this.touchStart),Object(a.b)(document,"touchmove",this.onTouchMove),o.lockCount||document.body.classList.add("van-overflow-hidden"),o.lockCount++))},close:function(){this.opened&&(this.lockScroll&&(o.lockCount--,Object(a.a)(document,"touchstart",this.touchStart),Object(a.a)(document,"touchmove",this.onTouchMove),o.lockCount||document.body.classList.remove("van-overflow-hidden")),this.opened=!1,O(this),this.$emit("input",!1))},move:function(){var t,e=this.getContainer;e?t="string"==typeof e?document.querySelector(e):e():this.$parent&&(t=this.$parent.$el),t&&t!==this.$el.parentNode&&t.appendChild(this.$el),this.overlay&&b()},onTouchMove:function(t){this.touchMove(t);var e=this.deltaY>0?"10":"01",n=Object(x.b)(t.target,this.$el),o=n.scrollHeight,i=n.offsetHeight,s=n.scrollTop,a="11";0===s?a=i>=o?"00":"01":s+i>=o&&(a="10"),"11"===a||"vertical"!==this.direction||parseInt(a,2)&parseInt(e,2)||(t.preventDefault(),t.stopPropagation())},renderOverlay:function(){var t,e,n=this;!this.$isServer&&this.value&&(this.overlay?(t=this,e={zIndex:o.zIndex++,className:this.overlayClass,customStyle:this.overlayStyle},o.stack.some(function(e){return e.vm===t})||(o.stack.push({vm:t,config:e}),b())):O(this),this.$nextTick(function(){n.$el.style.zIndex=o.zIndex++}))}}}},NS4O:function(t,e){},d9Oj:function(t,e){},hZhx:function(t,e,n){t.exports=n.p+"static/img/Pay.c128bd1.png"},"sF+5":function(t,e,n){t.exports=n.p+"static/img/notice.7f33383.png"},xCzi:function(t,e){},yNsK:function(t,e,n){t.exports=n.p+"static/img/PersonalCenter.2524a8f.png"}});