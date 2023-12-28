/*! For license information please see main.db1cfd61ccb3e5479688.js.LICENSE.txt */
(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){e=function(){return i};var r,i={},n=Object.prototype,o=n.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},u="function"==typeof Symbol?Symbol:{},s=u.iterator||"@@iterator",l=u.asyncIterator||"@@asyncIterator",h=u.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(r){c=function(t,e,r){return t[e]=r}}function f(t,e,r,i){var n=e&&e.prototype instanceof m?e:m,o=Object.create(n.prototype),u=new j(i||[]);return a(o,"_invoke",{value:O(t,r,u)}),o}function y(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}i.wrap=f;var d="suspendedStart",_="suspendedYield",v="executing",g="completed",p={};function m(){}function w(){}function b(){}var x={};c(x,s,(function(){return this}));var k=Object.getPrototypeOf,S=k&&k(k(N([])));S&&S!==n&&o.call(S,s)&&(x=S);var L=b.prototype=m.prototype=Object.create(x);function E(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function F(e,r){function i(n,a,u,s){var l=y(e[n],e,a);if("throw"!==l.type){var h=l.arg,c=h.value;return c&&"object"==t(c)&&o.call(c,"__await")?r.resolve(c.__await).then((function(t){i("next",t,u,s)}),(function(t){i("throw",t,u,s)})):r.resolve(c).then((function(t){h.value=t,u(h)}),(function(t){return i("throw",t,u,s)}))}s(l.arg)}var n;a(this,"_invoke",{value:function(t,e){function o(){return new r((function(r,n){i(t,e,r,n)}))}return n=n?n.then(o,o):o()}})}function O(t,e,i){var n=d;return function(o,a){if(n===v)throw new Error("Generator is already running");if(n===g){if("throw"===o)throw a;return{value:r,done:!0}}for(i.method=o,i.arg=a;;){var u=i.delegate;if(u){var s=C(u,i);if(s){if(s===p)continue;return s}}if("next"===i.method)i.sent=i._sent=i.arg;else if("throw"===i.method){if(n===d)throw n=g,i.arg;i.dispatchException(i.arg)}else"return"===i.method&&i.abrupt("return",i.arg);n=v;var l=y(t,e,i);if("normal"===l.type){if(n=i.done?g:_,l.arg===p)continue;return{value:l.arg,done:i.done}}"throw"===l.type&&(n=g,i.method="throw",i.arg=l.arg)}}}function C(t,e){var i=e.method,n=t.iterator[i];if(n===r)return e.delegate=null,"throw"===i&&t.iterator.return&&(e.method="return",e.arg=r,C(t,e),"throw"===e.method)||"return"!==i&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+i+"' method")),p;var o=y(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,p;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,p):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function G(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(G,this),this.reset(!0)}function N(e){if(e||""===e){var i=e[s];if(i)return i.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(o.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=r,t.done=!0,t};return a.next=a}}throw new TypeError(t(e)+" is not iterable")}return w.prototype=b,a(L,"constructor",{value:b,configurable:!0}),a(b,"constructor",{value:w,configurable:!0}),w.displayName=c(b,h,"GeneratorFunction"),i.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},i.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,c(t,h,"GeneratorFunction")),t.prototype=Object.create(L),t},i.awrap=function(t){return{__await:t}},E(F.prototype),c(F.prototype,l,(function(){return this})),i.AsyncIterator=F,i.async=function(t,e,r,n,o){void 0===o&&(o=Promise);var a=new F(f(t,e,r,n),o);return i.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(L),c(L,h,"Generator"),c(L,s,(function(){return this})),c(L,"toString",(function(){return"[object Generator]"})),i.keys=function(t){var e=Object(t),r=[];for(var i in e)r.push(i);return r.reverse(),function t(){for(;r.length;){var i=r.pop();if(i in e)return t.value=i,t.done=!1,t}return t.done=!0,t}},i.values=N,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function i(i,n){return u.type="throw",u.arg=t,e.next=i,n&&(e.method="next",e.arg=r),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n],u=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var s=o.call(a,"catchLoc"),l=o.call(a,"finallyLoc");if(s&&l){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&o.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var n=i;break}}n&&("break"===t||"continue"===t)&&n.tryLoc<=e&&e<=n.finallyLoc&&(n=null);var a=n?n.completion:{};return a.type=t,a.arg=e,n?(this.method="next",this.next=n.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var i=r.completion;if("throw"===i.type){var n=i.arg;P(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,i){return this.delegate={iterator:N(t),resultName:e,nextLoc:i},"next"===this.method&&(this.arg=r),p}},i}function r(t,e,r,i,n,o,a){try{var u=t[o](a),s=u.value}catch(t){return void r(t)}u.done?e(s):Promise.resolve(s).then(i,n)}function i(t){return function(){var e=this,i=arguments;return new Promise((function(n,o){var a=t.apply(e,i);function u(t){r(a,n,o,u,s,"next",t)}function s(t){r(a,n,o,u,s,"throw",t)}u(void 0)}))}}function n(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,o(i.key),i)}}function o(e){var r=function(e,r){if("object"!=t(e)||!e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var n=i.call(e,"string");if("object"!=t(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==t(r)?r:String(r)}var a=new(function(){function t(e,r,i,n,o,a,u,s){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._playfield=[],this._rowsCount=20,this._columnsCount=10,this._canvas=document.querySelector(e),this._context=this._canvas.getContext("2d"),this._grid=32,this._figuresMatrix={line:[[0,0,0,0],[1,1,1,1],[0,0,0,0],[0,0,0,0]],square:[[1,1],[1,1]],L:[[0,0,1],[1,1,1],[0,0,0]],J:[[0,0,0],[1,1,1],[0,0,1]],S:[[0,1,1],[1,1,0],[0,0,0]],Z:[[1,1,0],[0,1,1],[0,0,0]],T:[[0,0,0],[1,1,1],[0,1,0]]},this._figuresColors={line:"violet",square:"yellow",T:"red",S:"green",Z:"lightblue",J:"hotpink",L:"blue"},this._endOfGame=!1,this._scoreElement=document.querySelector(r),this._score=0,this._delay=500,this._overlay=document.querySelector(i),this._overlayVisibleClass=n,this._newGameButton=document.querySelector(o),this._buttonUp=document.querySelector(a),this._buttonLeft=document.querySelector(u),this._buttonRight=document.querySelector(s),this._addDelay=function(t){return new Promise((function(e){return setTimeout(e,t)}))}}var r,o,a,u,s,l;return r=t,o=[{key:"_createPlayfield",value:function(){for(var t=-2;t<this._rowsCount;t++){this._playfield[t]=[];for(var e=0;e<this._columnsCount;e++)this._playfield[t][e]=0}}},{key:"_renderScore",value:function(){this._scoreElement.textContent="Счёт: ".concat(this._score)}},{key:"_getRandomFigure",value:function(){var t=["line","square","T","S","Z","J","L"],e=t.length-1;return t[Math.floor(Math.random()*(e-0+1))+0]}},{key:"_getNextFigure",value:function(){var t=this._getRandomFigure(),e=this._figuresMatrix[t],r=this._playfield[0].length/2-Math.floor(e[0].length/2),i=1-e.length;this._figure={name:t,matrix:e,rowStart:i,columnStart:r}}},{key:"_rotateMatrix",value:function(t){return t.map((function(e,r){return e.map((function(e,i){return t[t.length-1-i][r]}))}))}},{key:"_validateMove",value:function(t,e,r){for(var i=0;i<t.length;i++)for(var n=0;n<t[i].length;n++)if(t[i][n]){if(n+r>this._columnsCount-1||n+r<0)return!1;if(e+i>this._rowsCount-1)return!1;if(this._playfield[e+i][r+n])return!1}return!0}},{key:"_renderEndOfGame",value:function(){this._overlay.classList.add(this._overlayVisibleClass)}},{key:"_addFigureInPlayfield",value:function(){for(var t=0;t<this._figure.matrix.length;t++)for(var e=0;e<this._figure.matrix[t].length;e++)if(this._figure.matrix[t][e]){if(this._figure.rowStart+t<=0)return this._endOfGame=!0,void this._renderEndOfGame();this._playfield[this._figure.rowStart+t][this._figure.columnStart+e]=this._figure.name}}},{key:"_clearFullRows",value:(l=i(e().mark((function t(){var r,i,n,o,a;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=0;case 1:if(!(r<this._rowsCount)){t.next=13;break}if(!this._playfield[r].every((function(t){return 0!==t}))){t.next=10;break}for(i=0;i<this._playfield[r].length;i++)this._context.fillStyle="rgb(46 255 0)",this._renderCell(i*this._grid,r*this._grid);return t.next=6,this._addDelay(this._delay);case 6:for(n=0;n<this._playfield[r].length;n++)this._playfield[r][n]=0;for(o=r;o>0;o--)for(a=0;a<this._playfield[o].length;a++)this._playfield[o][a]=this._playfield[o-1][a];this._score+=100,this._renderScore();case 10:r++,t.next=1;break;case 13:case"end":return t.stop()}}),t,this)}))),function(){return l.apply(this,arguments)})},{key:"_renderCell",value:function(t,e){this._context.fillRect(t,e,this._grid-3,this._grid-3)}},{key:"_renderPlayfield",value:function(){for(var t=0;t<20;t++)for(var e=0;e<10;e++)if(this._playfield[t][e]){var r=this._playfield[t][e];this._context.fillStyle=this._figuresColors[r],this._renderCell(e*this._grid,t*this._grid)}}},{key:"_resetField",value:function(){this._context.clearRect(0,0,this._canvas.width,this._canvas.height)}},{key:"_renderFigure",value:function(){this._context.fillStyle=this._figuresColors[this._figure.name];for(var t=0;t<this._figure.matrix.length;t++)for(var e=0;e<this._figure.matrix[t].length;e++)this._figure.matrix[t][e]&&this._renderCell((this._figure.columnStart+e)*this._grid,(this._figure.rowStart+t)*this._grid)}},{key:"_game",value:(s=i(e().mark((function t(){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this._addDelay(this._delay);case 2:this._figure.rowStart++,this._resetField(),this._renderPlayfield(),this._context.fillStyle=this._figuresColors[this._figure.name],this._renderFigure();case 7:if(this._validateMove(this._figure.matrix,this._figure.rowStart+1,this._figure.columnStart)){t.next=0;break}case 8:if(this._addFigureInPlayfield(),!this._endOfGame){t.next=11;break}return t.abrupt("return");case 11:return t.next=13,this._clearFullRows();case 13:this._getNextFigure(),this._game();case 15:case"end":return t.stop()}}),t,this)}))),function(){return s.apply(this,arguments)})},{key:"startGame",value:(u=i(e().mark((function t(){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this._renderScore(),this._createPlayfield(),this._getNextFigure(),t.next=5,this._game();case 5:case"end":return t.stop()}}),t,this)}))),function(){return u.apply(this,arguments)})},{key:"_rotateFigure",value:function(){var t=this._rotateMatrix(this._figure.matrix);this._validateMove(t,this._figure.rowStart,this._figure.columnStart)&&(this._figure.matrix=t)}},{key:"_moveLeftFigure",value:function(){var t=this._figure.columnStart-1;this._validateMove(this._figure.matrix,this._figure.rowStart,t)&&(this._figure.columnStart=t)}},{key:"_moveRightFigure",value:function(){var t=this._figure.columnStart+1;this._validateMove(this._figure.matrix,this._figure.rowStart,t)&&(this._figure.columnStart=t)}},{key:"_handleKeydown",value:function(t){this._endOfGame||("ArrowUp"===t.key&&this._rotateFigure(),"ArrowLeft"===t.key&&this._moveLeftFigure(),"ArrowRight"===t.key&&this._moveRightFigure())}},{key:"_handleNewGame",value:(a=i(e().mark((function t(){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this._overlay.classList.remove(this._overlayVisibleClass),this._endOfGame=!1,this._createPlayfield(),this._getNextFigure(),this._score=0,this._renderScore(),t.next=8,this._game();case 8:case"end":return t.stop()}}),t,this)}))),function(){return a.apply(this,arguments)})},{key:"setEventListeners",value:function(){document.addEventListener("keydown",this._handleKeydown.bind(this)),this._newGameButton.addEventListener("click",this._handleNewGame.bind(this)),this._buttonUp.addEventListener("click",this._rotateFigure.bind(this)),this._buttonLeft.addEventListener("click",this._moveLeftFigure.bind(this)),this._buttonRight.addEventListener("click",this._moveRightFigure.bind(this))}}],o&&n(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),t}())("#tetris",".score",".overlay","overlay_visible",".new-game","#key-up","#key-left","#key-right");a.setEventListeners(),a.startGame()})();