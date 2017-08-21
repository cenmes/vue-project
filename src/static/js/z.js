/**
 * Created by zz on 2017/8/21.
 */
(function (global,factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['z'], factory);
    } else if (typeof module === "object" && typeof module.exports === "object") {
        // Node, CommonJS之类的
        module.exports = factory();
    } else {
        global.z=factory();
    }
}(window,function () {
    "use strict";
    var z=function () {};
    /*
     * 类型检测
     * */
    var types=["Array","Object","Function","Boolean","String","Number","Null","Undefined"];
    types.forEach(function (item) {
        z["is"+item]=function (param) {
            return Object.prototype.toString.call(param)==="[object "+item+"]"
        }
    });
    return z;
}));