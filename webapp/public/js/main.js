function formInit(){function t(){var t=document.getElementById("text").value,e=document.getElementById("time").value,n=document.getElementById("pin").value;API.send(e,t,n,function(t){var e=location.protocol+"//"+location.host+"/show/"+t.key,n=document.createElement("a"),r=document.createTextNode(e);n.appendChild(r),n.title="Safe link to your secret info.",n.href=e,document.getElementById("result__link").appendChild(n)})}function e(){var t=document.getElementById("pin").value,e=location.pathname.replace("/show/","");API.get(e,t,function(t){var e=document.createTextNode(t.message),n=document.getElementById("result__tip");n.textContent="Here is your info:",document.getElementById("result__info").appendChild(e)},function(){var t=document.getElementById("result__tip");t.classList.add("result__tip_error"),t.textContent="Sorry, but your PIN is wrong."})}new FForm(document.getElementById("fs-form"),{onReview:location.pathname.indexOf("show")>0?e:t})}window.Modernizr=function(t,e,n){function r(t){g.cssText=t}function i(t,e){return typeof t===e}function o(t,e){return!!~(""+t).indexOf(e)}function s(t,e){for(var r in t){var i=t[r];if(!o(i,"-")&&g[i]!==n)return"pfx"!=e||i}return!1}function a(t,e,r){for(var o in t){var s=e[t[o]];if(s!==n)return r===!1?t[o]:i(s,"function")?s.bind(r||e):s}return!1}function c(t,e,n){var r=t.charAt(0).toUpperCase()+t.slice(1),o=(t+" "+E.join(r+" ")+r).split(" ");return i(e,"string")||i(e,"undefined")?s(o,e):(o=(t+" "+w.join(r+" ")+r).split(" "),a(o,e,n))}var l,u,d,f="2.8.3",h={},p=!0,m=e.documentElement,v="modernizr",y=e.createElement(v),g=y.style,_=({}.toString," -webkit- -moz- -o- -ms- ".split(" ")),N="Webkit Moz O ms",E=N.split(" "),w=N.toLowerCase().split(" "),S={},C=[],b=C.slice,L=function(t,n,r,i){var o,s,a,c,l=e.createElement("div"),u=e.body,d=u||e.createElement("body");if(parseInt(r,10))for(;r--;)a=e.createElement("div"),a.id=i?i[r]:v+(r+1),l.appendChild(a);return o=["&#173;",'<style id="s',v,'">',t,"</style>"].join(""),l.id=v,(u?l:d).innerHTML+=o,d.appendChild(l),u||(d.style.background="",d.style.overflow="hidden",c=m.style.overflow,m.style.overflow="hidden",m.appendChild(d)),s=n(l,t),u?l.parentNode.removeChild(l):(d.parentNode.removeChild(d),m.style.overflow=c),!!s},F={}.hasOwnProperty;d=i(F,"undefined")||i(F.call,"undefined")?function(t,e){return e in t&&i(t.constructor.prototype[e],"undefined")}:function(t,e){return F.call(t,e)},Function.prototype.bind||(Function.prototype.bind=function(t){var e=this;if("function"!=typeof e)throw new TypeError;var n=b.call(arguments,1),r=function(){if(this instanceof r){var i=function(){};i.prototype=e.prototype;var o=new i,s=e.apply(o,n.concat(b.call(arguments)));return Object(s)===s?s:o}return e.apply(t,n.concat(b.call(arguments)))};return r}),S.cssanimations=function(){return c("animationName")};for(var x in S)d(S,x)&&(u=x.toLowerCase(),h[u]=S[x](),C.push((h[u]?"":"no-")+u));return h.addTest=function(t,e){if("object"==typeof t)for(var r in t)d(t,r)&&h.addTest(r,t[r]);else{if(t=t.toLowerCase(),h[t]!==n)return h;e="function"==typeof e?e():e,"undefined"!=typeof p&&p&&(m.className+=" "+(e?"":"no-")+t),h[t]=e}return h},r(""),y=l=null,function(t,e){function n(t,e){var n=t.createElement("p"),r=t.getElementsByTagName("head")[0]||t.documentElement;return n.innerHTML="x<style>"+e+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var t=g.elements;return"string"==typeof t?t.split(" "):t}function i(t){var e=y[t[m]];return e||(e={},v++,t[m]=v,y[v]=e),e}function o(t,n,r){if(n||(n=e),u)return n.createElement(t);r||(r=i(n));var o;return o=r.cache[t]?r.cache[t].cloneNode():p.test(t)?(r.cache[t]=r.createElem(t)).cloneNode():r.createElem(t),!o.canHaveChildren||h.test(t)||o.tagUrn?o:r.frag.appendChild(o)}function s(t,n){if(t||(t=e),u)return t.createDocumentFragment();n=n||i(t);for(var o=n.frag.cloneNode(),s=0,a=r(),c=a.length;s<c;s++)o.createElement(a[s]);return o}function a(t,e){e.cache||(e.cache={},e.createElem=t.createElement,e.createFrag=t.createDocumentFragment,e.frag=e.createFrag()),t.createElement=function(n){return g.shivMethods?o(n,t,e):e.createElem(n)},t.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-]+/g,function(t){return e.createElem(t),e.frag.createElement(t),'c("'+t+'")'})+");return n}")(g,e.frag)}function c(t){t||(t=e);var r=i(t);return g.shivCSS&&!l&&!r.hasCSS&&(r.hasCSS=!!n(t,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),u||a(t,r),t}var l,u,d="3.7.0",f=t.html5||{},h=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,p=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,m="_html5shiv",v=0,y={};!function(){try{var t=e.createElement("a");t.innerHTML="<xyz></xyz>",l="hidden"in t,u=1==t.childNodes.length||function(){e.createElement("a");var t=e.createDocumentFragment();return"undefined"==typeof t.cloneNode||"undefined"==typeof t.createDocumentFragment||"undefined"==typeof t.createElement}()}catch(n){l=!0,u=!0}}();var g={elements:f.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:d,shivCSS:f.shivCSS!==!1,supportsUnknownElements:u,shivMethods:f.shivMethods!==!1,type:"default",shivDocument:c,createElement:o,createDocumentFragment:s};t.html5=g,c(e)}(this,e),h._version=f,h._prefixes=_,h._domPrefixes=w,h._cssomPrefixes=E,h.testProp=function(t){return s([t])},h.testAllProps=c,h.testStyles=L,h.prefixed=function(t,e,n){return e?c(t,e,n):c(t,"pfx")},m.className=m.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(p?" js "+C.join(" "):""),h}(this,this.document),function(t,e,n){function r(t){return"[object Function]"==v.call(t)}function i(t){return"string"==typeof t}function o(){}function s(t){return!t||"loaded"==t||"complete"==t||"uninitialized"==t}function a(){var t=y.shift();g=1,t?t.t?p(function(){("c"==t.t?f.injectCss:f.injectJs)(t.s,0,t.a,t.x,t.e,1)},0):(t(),a()):g=0}function c(t,n,r,i,o,c,l){function u(e){if(!h&&s(d.readyState)&&(_.r=h=1,!g&&a(),d.onload=d.onreadystatechange=null,e)){"img"!=t&&p(function(){E.removeChild(d)},50);for(var r in L[n])L[n].hasOwnProperty(r)&&L[n][r].onload()}}var l=l||f.errorTimeout,d=e.createElement(t),h=0,v=0,_={t:r,s:n,e:o,a:c,x:l};1===L[n]&&(v=1,L[n]=[]),"object"==t?d.data=n:(d.src=n,d.type=t),d.width=d.height="0",d.onerror=d.onload=d.onreadystatechange=function(){u.call(this,v)},y.splice(i,0,_),"img"!=t&&(v||2===L[n]?(E.insertBefore(d,N?null:m),p(u,l)):L[n].push(d))}function l(t,e,n,r,o){return g=0,e=e||"j",i(t)?c("c"==e?S:w,t,e,this.i++,n,r,o):(y.splice(this.i++,0,t),1==y.length&&a()),this}function u(){var t=f;return t.loader={load:l,i:0},t}var d,f,h=e.documentElement,p=t.setTimeout,m=e.getElementsByTagName("script")[0],v={}.toString,y=[],g=0,_="MozAppearance"in h.style,N=_&&!!e.createRange().compareNode,E=N?h:m.parentNode,h=t.opera&&"[object Opera]"==v.call(t.opera),h=!!e.attachEvent&&!h,w=_?"object":h?"script":"img",S=h?"script":w,C=Array.isArray||function(t){return"[object Array]"==v.call(t)},b=[],L={},F={timeout:function(t,e){return e.length&&(t.timeout=e[0]),t}};f=function(t){function e(t){var e,n,r,t=t.split("!"),i=b.length,o=t.pop(),s=t.length,o={url:o,origUrl:o,prefixes:t};for(n=0;n<s;n++)r=t[n].split("="),(e=F[r.shift()])&&(o=e(o,r));for(n=0;n<i;n++)o=b[n](o);return o}function s(t,i,o,s,a){var c=e(t),l=c.autoCallback;c.url.split(".").pop().split("?").shift(),c.bypass||(i&&(i=r(i)?i:i[t]||i[s]||i[t.split("/").pop().split("?")[0]]),c.instead?c.instead(t,i,o,s,a):(L[c.url]?c.noexec=!0:L[c.url]=1,o.load(c.url,c.forceCSS||!c.forceJS&&"css"==c.url.split(".").pop().split("?").shift()?"c":n,c.noexec,c.attrs,c.timeout),(r(i)||r(l))&&o.load(function(){u(),i&&i(c.origUrl,a,s),l&&l(c.origUrl,a,s),L[c.url]=2})))}function a(t,e){function n(t,n){if(t){if(i(t))n||(d=function(){var t=[].slice.call(arguments);f.apply(this,t),h()}),s(t,d,e,0,l);else if(Object(t)===t)for(c in a=function(){var e,n=0;for(e in t)t.hasOwnProperty(e)&&n++;return n}(),t)t.hasOwnProperty(c)&&(!n&&!--a&&(r(d)?d=function(){var t=[].slice.call(arguments);f.apply(this,t),h()}:d[c]=function(t){return function(){var e=[].slice.call(arguments);t&&t.apply(this,e),h()}}(f[c])),s(t[c],d,e,c,l))}else!n&&h()}var a,c,l=!!t.test,u=t.load||t.both,d=t.callback||o,f=d,h=t.complete||o;n(l?t.yep:t.nope,!!u),u&&n(u)}var c,l,d=this.yepnope.loader;if(i(t))s(t,0,d,0);else if(C(t))for(c=0;c<t.length;c++)l=t[c],i(l)?s(l,0,d,0):C(l)?f(l):Object(l)===l&&a(l,d);else Object(t)===t&&a(t,d)},f.addPrefix=function(t,e){F[t]=e},f.addFilter=function(t){b.push(t)},f.errorTimeout=1e4,null==e.readyState&&e.addEventListener&&(e.readyState="loading",e.addEventListener("DOMContentLoaded",d=function(){e.removeEventListener("DOMContentLoaded",d,0),e.readyState="complete"},0)),t.yepnope=u(),t.yepnope.executeStack=a,t.yepnope.injectJs=function(t,n,r,i,c,l){var u,d,h=e.createElement("script"),i=i||f.errorTimeout;h.src=t;for(d in r)h.setAttribute(d,r[d]);n=l?a:n||o,h.onreadystatechange=h.onload=function(){!u&&s(h.readyState)&&(u=1,n(),h.onload=h.onreadystatechange=null)},p(function(){u||(u=1,n(1))},i),c?h.onload():m.parentNode.insertBefore(h,m)},t.yepnope.injectCss=function(t,n,r,i,s,c){var l,i=e.createElement("link"),n=c?a:n||o;i.href=t,i.rel="stylesheet",i.type="text/css";for(l in r)i.setAttribute(l,r[l]);s||(m.parentNode.insertBefore(i,m),p(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},Modernizr.addTest("csscalc",function(){var t="width:",e="calc(10px);",n=document.createElement("div");return n.style.cssText=t+Modernizr._prefixes.join(e+t),!!n.style.length}),Modernizr.addTest("cssvhunit",function(){var t;return Modernizr.testStyles("#modernizr { height: 50vh; }",function(e,n){var r=parseInt(window.innerHeight/2,10),i=parseInt((window.getComputedStyle?getComputedStyle(e,null):e.currentStyle).height,10);t=i==r}),t});var API=function(){var t="https://safesecret.info/api/v1/message";return this.send=function(e,n,r,i){var o=new XMLHttpRequest,s=JSON.stringify({exp:60*new Number(e),message:new String(n),pin:new String(r)});o.open("POST",t,!0),o.onreadystatechange=function(){4==o.readyState&&"function"==typeof i&&201==o.status&&i(JSON.parse(o.responseText))},o.send(s)},this.get=function(e,n,r,i){var o=new XMLHttpRequest;o.open("GET",[t,e,n].join("/"),!0),o.onreadystatechange=function(){4==o.readyState&&"function"==typeof r&&(200==o.status?r(JSON.parse(o.responseText)):i())},o.send()},this}();!function(t){"use strict";function e(t){return new RegExp("(^|\\s+)"+t+"(\\s+|$)")}function n(t,e){var n=r(t,e)?o:i;n(t,e)}var r,i,o;"classList"in document.documentElement?(r=function(t,e){return t.classList.contains(e)},i=function(t,e){for(var n=[].concat(e.split(" ")),r=n.length-1;r>=0;r--)t.classList.add(n[r])},o=function(t,e){t.classList.remove(e)}):(r=function(t,n){return e(n).test(t.className)},i=function(t,e){r(t,e)||(t.className=t.className+" "+e)},o=function(t,n){t.className=t.className.replace(e(n)," ")});var s={hasClass:r,addClass:i,removeClass:o,toggleClass:n,has:r,add:i,remove:o,toggle:n};"function"==typeof define&&define.amd?define(s):t.classie=s}(window),function(t){"use strict";function e(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}function n(t,e){var n=document.createElement(t);return e&&(e.cName&&(n.className=e.cName),e.inner&&(n.innerHTML=e.inner),e.appendTo&&e.appendTo.appendChild(n)),n}function r(t,n){this.el=t,this.options=e({},this.options),e(this.options,n),this._init()}var i={animations:Modernizr.cssanimations},o={WebkitAnimation:"webkitAnimationEnd",OAnimation:"oAnimationEnd",msAnimation:"MSAnimationEnd",animation:"animationend"},s=o[Modernizr.prefixed("animation")];r.prototype.options={ctrlProgress:!0,ctrlNavDots:!0,ctrlNavPosition:!0,onReview:function(){return!1}},r.prototype._init=function(){this.formEl=this.el.querySelector(".fs-form__content"),this.fieldsList=this.formEl.querySelector("ol.fields"),this.current=0,this.fields=[].slice.call(this.fieldsList.children),this.fieldsCount=this.fields.length,classie.add(this.fields[this.current],"field field_current"),this._addControls(),this._addErrorMsg(),this._initEvents()},r.prototype._addControls=function(){if(this.ctrls=n("div",{cName:"controls",appendTo:this.el}),this.ctrlContinue=n("button",{cName:"continue",inner:"Continue",appendTo:this.ctrls}),this._showCtrl(this.ctrlContinue),this.options.ctrlNavDots){this.ctrlNav=n("nav",{cName:"nav-dots",appendTo:this.ctrls});for(var t="",e=0;e<this.fieldsCount;++e)t+=e===this.current?'<button class="nav-dots__item nav-dots__item_current"></button>':'<button class="nav-dots__item" disabled></button>';this.ctrlNav.innerHTML=t,this._showCtrl(this.ctrlNav),this.ctrlNavDots=[].slice.call(this.ctrlNav.children)}this.options.ctrlNavPosition&&(this.ctrlFldStatus=n("span",{cName:"numbers",appendTo:this.ctrls}),this.ctrlFldStatusCurr=n("span",{cName:"numbers__item numbers__item_current",inner:Number(this.current+1)}),this.ctrlFldStatus.appendChild(this.ctrlFldStatusCurr),this.ctrlFldStatusTotal=n("span",{cName:"numbers__item",inner:this.fieldsCount}),this.ctrlFldStatus.appendChild(this.ctrlFldStatusTotal),this._showCtrl(this.ctrlFldStatus)),this.options.ctrlProgress&&(this.ctrlProgress=n("div",{cName:"progress",appendTo:this.ctrls}),this._showCtrl(this.ctrlProgress))},r.prototype._addErrorMsg=function(){this.msgError=n("span",{cName:"error",appendTo:this.el})},r.prototype._initEvents=function(){var t=this;this.ctrlContinue.addEventListener("click",function(){t._nextField()}),this.options.ctrlNavDots&&this.ctrlNavDots.forEach(function(e,n){e.addEventListener("click",function(){t._showField(n)})}),document.addEventListener("keydown",function(e){if(!t.isLastStep&&"textarea"!==e.target.tagName.toLowerCase()){var n=e.keyCode||e.which;13===n&&(e.preventDefault(),t._nextField())}})},r.prototype._nextField=function(t){if(this.isLastStep||!this._validade()||this.isAnimating)return!1;this.isAnimating=!0,this.isLastStep=this.current===this.fieldsCount-1&&void 0===t,this._clearError();var e=this.fields[this.current];if(this.navdir=void 0!==t&&t<this.current?"prev":"next",this.current=void 0!==t?t:this.current+1,void 0===t&&(this._progress(),this.farthest=this.current),classie.add(this.fieldsList,"fields fields_"+this.navdir),classie.remove(e,"field_current"),classie.add(e,"field_hide"),!this.isLastStep){this._updateNav(),this._updateFieldNumber();var n=this.fields[this.current];classie.add(n,"field_current"),classie.add(n,"field_shown")}var r=this,o=function(t){i.animations&&this.removeEventListener(s,o),classie.remove(r.fieldsList,"fields_"+r.navdir),classie.remove(e,"field_hide"),r.isLastStep?(r._hideCtrl(r.ctrlNav),r._hideCtrl(r.ctrlProgress),r._hideCtrl(r.ctrlContinue),r._hideCtrl(r.ctrlFldStatus),classie.remove(r.formEl,"fs-form__content_full"),classie.add(r.formEl,"fs-form__content_overview"),classie.add(r.formEl,"form__content_shown"),r.options.onReview()):(classie.remove(n,"field_shown"),r.options.ctrlNavPosition&&(r.ctrlFldStatusCurr.innerHTML=r.ctrlFldStatusNew.innerHTML,r.ctrlFldStatus.removeChild(r.ctrlFldStatusNew),classie.remove(r.ctrlFldStatus,"numbers_shown-"+r.navdir))),r.isAnimating=!1};i.animations?"next"===this.navdir?this.isLastStep?e.querySelector(".animation__upper").addEventListener(s,o):n.querySelector(".animation__lower").addEventListener(s,o):n.querySelector(".animation__upper").addEventListener(s,o):o()},r.prototype._showField=function(t){return!(t===this.current||t<0||t>this.fieldsCount-1)&&void this._nextField(t)},r.prototype._updateFieldNumber=function(){if(this.options.ctrlNavPosition){this.ctrlFldStatusNew=document.createElement("span"),this.ctrlFldStatusNew.className="numbers__item numbers__item_new",this.ctrlFldStatusNew.innerHTML=Number(this.current+1),this.ctrlFldStatus.appendChild(this.ctrlFldStatusNew);var t=this;setTimeout(function(){classie.add(t.ctrlFldStatus,"next"===t.navdir?"numbers_shown-next":"numbers_shown-prev")},25)}},r.prototype._progress=function(){this.options.ctrlProgress&&(this.ctrlProgress.style.width=this.current*(100/this.fieldsCount)+"%")},r.prototype._updateNav=function(){this.options.ctrlNavDots&&(classie.remove(this.ctrlNav.querySelector("button.nav-dots__item_current"),"nav-dots__item_current"),classie.add(this.ctrlNavDots[this.current],"nav-dots__item_current"),this.ctrlNavDots[this.current].disabled=!1)},r.prototype._showCtrl=function(t){classie.add(t,"shown")},r.prototype._hideCtrl=function(t){classie.remove(t,"shown")},r.prototype._validade=function(){var t,e=this.fields[this.current],n=e.querySelector(".input[required]")||e.querySelector(".textarea[required]");if(!n)return!0;if(0==n.value.length)t="NOVAL";else if(n.classList.contains("input_type_number")){var r=new Number(n.value);"-"==n.value.substr(0,1)?t="NONEG":n.value!=r.toString()&&(t="WRONGVAL")}else n.classList.contains("input_type_pin")&&(n.value.match(/^[0-9]{5}$/)||(t="WRONGVAL"));return void 0==t||(this._showError(t),!1)},r.prototype._showError=function(t){var e="";switch(t){case"NOVAL":e="Please fill the field before continuing";break;case"NONEG":e="This value can't be negative";break;case"WRONGVAL":e="Please enter the valid value"}this.msgError.innerHTML=e,this._showCtrl(this.msgError)},r.prototype._clearError=function(){this._hideCtrl(this.msgError)},t.FForm=r}(window),"loading"!=document.readyState?formInit():document.addEventListener("DOMContentLoaded",formInit);