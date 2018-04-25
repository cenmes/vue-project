/**
 * Created by zz on 2017/6/5.
 */
var a=1;
var getA=function () {
    return a;
};
var setA=function (val) {
    a=val;
}
setA(2);
export default {
    getA,
    setA
}