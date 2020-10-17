!function(e,t){for(var n in t)e[n]=t[n]}(exports,function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=13)}([function(e,t){e.exports=require("underscore")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("sequelize")},function(e,t){e.exports=require("http-errors")},function(e,t){e.exports=require("express-session")},function(e,t){e.exports=require("cookie-parser")},function(e,t){e.exports=require("morgan")},function(e,t){e.exports=require("compression")},function(e,t){e.exports=require("http")},function(e,t){e.exports=require("socket.io")},function(e,t){e.exports=require("redis")},function(e,t){e.exports=require("connect-redis")},function(e,t){e.exports=require("crypto")},function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.r(t),n.d(t,"App",(function(){return et})),n.d(t,"Repository",(function(){return tt})),n.d(t,"acl",(function(){return nt})),n.d(t,"aclManager",(function(){return rt})),n.d(t,"cache",(function(){return ot})),n.d(t,"crypter",(function(){return it})),n.d(t,"database",(function(){return at})),n.d(t,"Module",(function(){return ut})),n.d(t,"createError",(function(){return ct})),n.d(t,"express",(function(){return st})),n.d(t,"Router",(function(){return lt}));var o,i,a=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.req=t,this.Model=n,this.data=r}var t,n,o;return t=e,(n=[{key:"prepareOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return void 0===e.row&&(e.row=!0),e}},{key:"create",value:function(){for(var e=this,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return new Promise((function(t,r){var o;(o=e.Model).create.apply(o,n).then((function(e){return t(e)})).catch((function(e){return r(e)}))}))}},{key:"createBulk",value:function(){}},{key:"paginate",value:function(e){return this.findAll()}},{key:"findAll",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(n,r){e.Model.findAll(e.prepareOptions(t)).then((function(e){return n(e)})).catch((function(e){return r(e)}))}))}},{key:"findById",value:function(e){var t=this;return new Promise((function(n,r){t.Model.findOne(t.prepareOptions({where:e})).then((function(e){return n(e)})).catch((function(e){return r(e)}))}))}},{key:"findOne",value:function(){var e=this;return new Promise((function(t,n){e.Model.findOne(e.prepareOptions(args)).then((function(e){return t(e)})).catch((function(e){return n(e)}))}))}},{key:"updateById",value:function(e,t){}},{key:"deleteById",value:function(e){}},{key:"deleteAll",value:function(e){}}])&&r(t.prototype,n),o&&r(t,o),e}(),u=n(1),c=n.n(u),s=n(5),l=n.n(s),f=n(6),p=n.n(f),h=n(0),y=n.n(h),d=n(7),b=n.n(d),v=n(8),g=n(9),m=n.n(g),w=function(){if(i=function(e){var t=parseInt(e,10);if(isNaN(t))return e;if(t>=0)return t;return!1}(process.env.PORT||this.config.port),this.app.set("port",i),o=v.createServer(this.app),!0===this.config.useSocket){var e=m()(o);this.initSocket(e)}o.listen(i),o.on("error",j),o.on("listening",O)};function O(){var e=o.address(),t="string"==typeof e?"pipe "+e:"port "+e.port;console.log("Listening on "+t)}function j(e){if("listen"!==e.syscall)throw e;var t="string"==typeof i?"Pipe "+i:"Port "+i;switch(e.code){case"EACCES":console.error(t+" requires elevated privileges"),process.exit(1);break;case"EADDRINUSE":console.error(t+" is already in use"),process.exit(1);break;default:throw e}}var k={setPort:function(e){return this.config.port=e,this},use:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.uses.push(t),this},get:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.routers.push(["get"].concat(t)),this},post:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.routers.push(["post"].concat(t)),this},put:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.routers.push(["put"].concat(t)),this},delete:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.routers.push(["delete"].concat(t)),this},addRouter:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.routers.push(["router"].concat(t)),this},addPublic:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.publicFolders.push(t),this}},S=n(4),P=n.n(S),A=n(10),E=n.n(A),R=n(11),M=n.n(R);function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var C=n(12),T=new WeakMap,I=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),T.set(this,{writable:!0,value:null})}var t,n,r;return t=e,(n=[{key:"setSecret",value:function(e){!function(e,t,n){var r=t.get(e);if(!r)throw new TypeError("attempted to set private field on non-instance");if(r.set)r.set.call(e,n);else{if(!r.writable)throw new TypeError("attempted to set read only private field");r.value=n}}(this,T,e)}},{key:"encrypt",value:function(e){return C.createHmac("sha256",function(e,t){var n=t.get(e);if(!n)throw new TypeError("attempted to get private field on non-instance");return n.get?n.get.call(e):n.value}(this,T)).update(e).digest("hex")}}])&&x(t.prototype,n),r&&x(t,r),e}());function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function D(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var U={useSession:function(e){return"string"==typeof e?(this.config.useSession=!0,this.config.session.config.secret=e,I.setSecret(e)):this.config.useSession=e,this},setSessionConfig:function(e,t,n){void 0===t?this.config.session.config=e:this.config.session=void 0!==n?{type:e,config:t,redisConfig:n}:{type:e};var r=this.config.session.config.secret;return void 0!==r&&I.setSecret(r),this},init:function(){if(!0===this.config.useSession){var e=this.config.session.config;if("redis"===this.config.session)e=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){D(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({store:new(M()(P.a))({client:E.a.createClient(this.config.session.redisConfig)})},this.config.session.config);this.app.use(P()(e))}}},q=n(2),N=n.n(q);function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function F(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function H(e){return(H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function z(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function W(e,t){return(W=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function B(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Y(e);if(t){var o=Y(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return $(this,n)}}function $(e,t){return!t||"object"!==H(t)&&"function"!=typeof t?G(e):t}function G(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Y(e){return(Y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function J(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var K=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&W(e,t)}(n,e);var t=B(n);function n(){var e;z(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return J(G(e=t.call.apply(t,[this].concat(o))),"name","user"),J(G(e),"url","users"),J(G(e),"fields",{username:{type:"text",uniq:!0,length:250},password:{type:"text",length:500},token:{type:"text",length:500},tokenExpiresAt:{type:"datetime",length:500},refreshToken:{type:"text",length:500},registrationToken:{type:"text",length:500},registrationTokenExpiresAt:{type:"datetime",length:500},registered:{type:"boolean"},active:{type:"boolean"}}),e}return n}(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),F(this,"name",void 0),F(this,"url",null),F(this,"fields",{}),F(this,"translatedFields",[]),F(this,"createForm",null),F(this,"editForm",null),F(this,"softDeletable",!1),F(this,"virtualFields",{}),F(this,"links",{}),F(this,"hooks",{})}var t,n,r;return t=e,(n=[{key:"getFields",value:function(){var e=this,t={};return y.a.each(Object.keys(this.fields),(function(n){t[n]={type:e.fieldMapping(n),uniq:n.uniq}})),t}},{key:"build",value:function(e){return e.define(this.name,this.getFields(),{tableName:this.name})}},{key:"fieldMapping",value:function(e){switch(e.type){case"text":return N.a.STRING(void 0!==e.length?e.length:250);case"boolean":return N.a.BOOLEAN;default:return N.a.STRING(void 0!==e.length?e.length:250)}}}])&&L(t.prototype,n),r&&L(t,r),e}());function Q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function V(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var X=function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"main",o=e.databases[r];if(void 0===o)throw new Error("Database '".concat(r,"' is not registered"));var i=o.models[n];if(void 0===i)throw new Error("Model '".concat(n,"' is not registered in database '").concat(r,"'"));var u=e.models[n],c=e.repositories[n],s=void 0!==c?c:a;return new s(t,i,u)};X.hasUrlModel=function(e){return void 0!==X.modelsUrl[e]},X.getUrlRepository=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"main";return X(e,X.modelsUrl[t],n)},X.databases={main:{database:null,models:{}}},X.modelsUrl={},X.models={user:K},X.repositories={},X.addRepository=function(e,t){X.repositories[e]=t},X.getModel=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"main";return X.databases[t].models[e]},X.init=function(e){X.databases.main.database=new N.a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(n),!0).forEach((function(t){V(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Q(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({dialect:"postgres"},e.config.database)),X.processModels("main"),X.databases.main.database.sync()},X.processModels=function(e){var t=X.databases[e].database;y.a.each(Object.keys(X.models),(function(n){var r=new X.models[n];X.modelsUrl[null!==r.url?r.url:n]=n,X.databases[e].models[n]=r.build(t)}))};var Z=X;function ee(e){return(ee="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function te(e){return function(e){if(Array.isArray(e))return ne(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return ne(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ne(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ne(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var re={setDatabaseConfig:function(e){return this.config.database=e,this},addModel:function(e){return this.models.push(e),this},addModels:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.models=[].concat(te(this.models),t),this},init:function(){"object"===ee(this.config.database)&&Z.init(this)}},oe=function(e){return new Error("Parameter '".concat(e,"' is required"))};function ie(e){return function(e){if(Array.isArray(e))return ae(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return ae(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ae(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ae(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ue(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ce(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var se=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),ce(this,"pool",{ROLE_SUPER_ADMIN:{ROLE_ADMIN:{ROLE_USER:{ROLE_ANONYMOUS:{}}}}}),ce(this,"flatPool",{}),this.prepareHierarchy()}var t,n,r;return t=e,(n=[{key:"setHierarchy",value:function(e){this.pool=e,this.prepareHierarchy()}},{key:"getPool",value:function(){return this.pool}},{key:"addRole",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe("roleName"),t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(null===t)this.pool[e.toUpperCase()]={};else{if(void 0===this.pool[t.toUpperCase()])throw new Error("Role ".concat(t," was not found in hierarchy"));this.pool.ROLE_SUPER_ADMIN[e.toUpperCase()]={},console.log("add "+e.toUpperCase())}this.prepareHierarchy()}},{key:"prepareHierarchy",value:function(){var e=this;this.flatPool={},y.a.each(Object.keys(this.pool),(function(t){e.flatPool[t]=function t(n,r){var o=Object.keys(r),i=[n];return y.a.each(o,(function(n){var o=t(n,r[n]);e.flatPool[n]=o,i=[].concat(ie(i),ie(o))})),i}(t,e.pool[t])}))}},{key:"isGranted",value:function(e,t){if("ROLE_ANONYMOUS"===t)return!0;var n=function(e){return-1===[null,void 0].indexOf(e)};return!0===n(e)&&!0===n(e.session)&&!0===n(e.session.user)&&void 0!==this.flatPool[e.session.user.acl]&&-1!==this.flatPool[e.session.user.acl].indexOf(t)}}])&&ue(t.prototype,n),r&&ue(t,r),e}());function le(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}(e,t)||pe(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function fe(e){return function(e){if(Array.isArray(e))return he(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||pe(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function pe(e,t){if(e){if("string"==typeof e)return he(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?he(e,t):void 0}}function he(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ye(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function de(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var be=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),de(this,"rooms",{}),de(this,"actions",{}),de(this,"roomAcls",{}),de(this,"sockets",[])}var t,n,r;return t=e,(n=[{key:"addSockets",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this.sockets=[].concat(fe(this.sockets),t)}},{key:"addActions",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];y.a.each(t,(function(e){var t=le(e,2),n=t[0],r=t[1];void 0===actions[n]&&(actions[n]={},y.a.each(Object.keys(r),(function(e){actions[n].message=r[e]})))}))}},{key:"getRoomType",value:function(e){if("string"==typeof e)return e;if(-1===[null,void 0].indexOf(e)&&"array"===e.constructor.name.toLowerCase()){var t=le(e,2),n=t[0],r=t[1];return this.roomAcls[n]=r.toUpperCase(),n}return null}},{key:"init",value:function(e){var t=this;y.a.each(this.sockets,(function(n){var r=t.getRoomType(n);null!==r&&(t.rooms[r]=e.of("/socket_".concat(r.toLowerCase())),t.rooms[r].on("connection",(function(e){void 0!==t.roomAcls[r]||y.a.each(t.actions[r],(function(t){var n=le(t,2),r=n[0],o=n[1];e.on(r,o)}))})))}))}}])&&ye(t.prototype,n),r&&ye(t,r),e}()),ve={setSocketConfig:function(e){return this.config.socket=void 0===e?{}:e,this},useSocket:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this.config.useSocket=e,this.config.useSessionSocket=t,this},addRooms:function(){return be.addSockets.apply(be,arguments),this},includeSockets:function(){return be.addActions.apply(be,arguments),this},initSocket:function(e){return be.init(e),this}};function ge(e){return function(e){if(Array.isArray(e))return me(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return me(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return me(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function me(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function we(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Oe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var je=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),Oe(this,"name",null),Oe(this,"initializers",{}),Oe(this,"routers",[]),Oe(this,"publicPaths",[]),Oe(this,"models",[]),Oe(this,"socketRooms",[]),Oe(this,"sockets",[]),Oe(this,"acls",[])};function ke(e){return(ke="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Se(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Pe(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ae(e,t){return(Ae=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Ee(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=xe(e);if(t){var o=xe(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Re(this,n)}}function Re(e,t){return!t||"object"!==ke(t)&&"function"!=typeof t?Me(e):t}function Me(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function xe(e){return(xe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Ce(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Te=new(function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ae(e,t)}(i,e);var t,n,r,o=Ee(i);function i(){var e;Se(this,i);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return Ce(Me(e=o.call.apply(o,[this].concat(n))),"modules",{}),e}return t=i,(n=[{key:"hasModule",value:function(e){return void 0!==this.modules[e]}},{key:"getModule",value:function(e){return this.modules[e]}},{key:"addModule",value:function(e,t){if(t.prototype instanceof je==0)throw new Error("Parameter must be a Module instance");var n=new t;this.modules[n.name]=n,this.merge(e,n)}}])&&Pe(t.prototype,n),r&&Pe(t,r),i}(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,r;return t=e,(n=[{key:"merge",value:function(e,t){this.mergeInitializers(e,t).mergeModels(e,t).mergeRouters(e,t).mergePublic(e,t).mergeSocketRooms(e,t).mergeSockets(e,t).mergeAcls(e,t)}},{key:"mergeInitializers",value:function(e,t){var n=["constructor"];return y.a.each(Object.keys(t.initializers),(function(r){var o=t.initializers[r];"init"===r?e.inits.push(o):-1===n.indexOf(r)&&(e[r]=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return o.call.apply(o,[e].concat(n))})})),this}},{key:"mergeRouters",value:function(e,t){return y.a.each(t.routers,(function(t){"array"===t.constructor.name.toLowerCase()?e.addRouter.apply(e,ge(t)):e.addRouter(t)})),this}},{key:"mergePublic",value:function(e,t){return y.a.each(t.publicPaths,(function(t){e.addPublic.apply(e,ge(t))})),this}},{key:"mergeModels",value:function(e,t){return e.addModels.apply(e,ge(t.models)),this}},{key:"mergeSocketRooms",value:function(e,t){return e.addRooms.apply(e,ge(t.socketRooms)),this}},{key:"mergeSockets",value:function(e,t){return this}},{key:"mergeAcls",value:function(e,t){return y.a.each(t.acls,(function(t){e.addAcl(t)})),this}}])&&we(t.prototype,n),r&&we(t,r),e}()));function Ie(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var _e=new(function(){function e(){var t,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r={},(n="website")in(t=this)?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r}var t,n,r;return t=e,(n=[{key:"addWebsite",value:function(e){}}])&&Ie(t.prototype,n),r&&Ie(t,r),e}()),De={addWebsite:function(e){return _e.addWebsite(e),this},addWebsites:function(){for(var e=this,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return y.a.each(n,(function(t){return e.addWebsite(t)})),this},addModule:function(e){return Te.addModule(this,e),this},addModules:function(){for(var e=this,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return y.a.each(n,(function(t){return e.addModule(t)})),this},getModule:function(e){return Te.getModule(e)},init:function(){}},Ue={setAclHierarchy:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe("hierarchy");return se.setHierarchy(e),this},addAclRole:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe("roleName"),t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return se.addRole(e,t),this},init:function(){se.prepareHierarchy()}};function qe(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}new(function(){function e(){var t,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=null,(n="loginMethod")in(t=this)?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r}var t,n,r;return t=e,(n=[{key:"setLoginMethod",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(null!==e&&"function"!=typeof e)throw new Error("Custom login method must be a function");this.loginMethod=e}},{key:"login",value:function(e,t){return new Promise((function(t,n){var r=e.username,o=e.password,i=function(e){return-1!==[null,void 0].indexOf(e)};if(!0===i(r)||!0===i(o))return n(new Error("Invalid login parameters"));var a=I(o);Z.getRepository(e,"user").findOne({where:{username:r,password:a,active:!0}}).then((function(e){if(null===e)return n(new Error("User was not found"));t(e)})).catch((function(e){return n(e)}))}))}}])&&qe(t.prototype,n),r&&qe(t,r),e}());function Ne(e){return function(e){if(Array.isArray(e))return e}(e)||He(e)||Fe(e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Le(e){return function(e){if(Array.isArray(e))return ze(e)}(e)||He(e)||Fe(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Fe(e,t){if(e){if("string"==typeof e)return ze(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ze(e,t):void 0}}function He(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function ze(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function We(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Be(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?We(Object(n),!0).forEach((function(t){Ge(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):We(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function $e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ge(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Ye=[k,U,re,ve,De,Ue];function Je(){for(var e=this,t=["build"],n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];y.a.each(r,(function(n){y.a.each(Object.keys(n),(function(r){"init"===r?e.inits.push(n[r]):-1===t.indexOf(r)&&(e[r]=function(){for(var t,o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return(t=n[r]).call.apply(t,[e].concat(i))})}))}))}var Ke=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),Ge(this,"app",c()()),Ge(this,"uses",[]),Ge(this,"routers",[]),Ge(this,"publicFolders",[]),Ge(this,"models",[]),Ge(this,"io",null),Ge(this,"config",{customError:null,port:3e3,session:{type:null,config:{},redisConfig:void 0},socket:{}}),Ge(this,"defaultConfig",{useCors:!1,statics:{},useSession:!1,useCompression:!0,useSocket:!1,useSessionSocket:!1}),Ge(this,"inits",[]),Je.call.apply(Je,[this].concat(Ye))}var t,n,r;return t=e,(n=[{key:"run",value:function(){var e=this;this.config=Be(Be({},this.defaultConfig),this.config),this.app.set("trust proxy",1),y.a.each(this.inits,(function(t){t.call(e)})),this.app.use(p()("dev")),this.app.use(c.a.json()),this.use(c.a.urlencoded({extended:!1})),this.use(l()()),this.use(b()()),y.a.each(this.publicFolders,(function(t){1===t.length?e.app.use(c.a.static.apply(c.a,Le(t))):2===t.length&&e.app.use(t[0],c.a.static(t[1]))})),y.a.each(this.uses,(function(t){var n;(n=e.app).use.apply(n,Le(t))})),y.a.each(this.routers,(function(t){var n,r=Ne(t),o=r[0],i=r.slice(1);(n=e.app)["router"===o?"use":o].apply(n,Le(i))})),null===this.config.customError&&this.app.use((function(e,t,n,r){n.status(e.status||500).json({valid:!1,error:e.message})})),w.call(this)}}])&&$e(t.prototype,n),r&&$e(t,r),e}());function Qe(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var Ve=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,r;return t=e,(n=[{key:"get",value:function(e){return new Promise((function(e,t){return null}))}},{key:"set",value:function(e,t,n){}}])&&Qe(t.prototype,n),r&&Qe(t,r),e}()),Xe=n(3),Ze=n.n(Xe),et=Ke,tt=a,nt=function(e){return function(t,n,r){return!0===se.isGranted(t,e)?r():r(Ze()(401,"You are not allowed to access this area"))}},rt=se,ot=Ve,it=I,at=Z,ut=je,ct=Ze.a,st=c.a,lt=st.Router}]));