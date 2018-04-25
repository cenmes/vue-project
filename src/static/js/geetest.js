// var $=require("./jquery");
var initGeetest=require('./gt.js');
export default function (cb) {
    let that=this;
    $.get('/v1/common/gt/Validate?t='+(new Date()).getTime() ,{
    },function (res) {
        let data=res.data;
        console.log(data);
        initGeetest({
            // 以下 4 个配置参数为必须，不能缺少
            gt: data.gt,
            challenge: data.challenge,
            offline: !data.success, // 表示用户后台检测极验服务器是否宕机
            new_captcha: data.new_captcha, // 用于宕机时表示是新验证码的宕机

            product: "bind", // 产品形式，包括：float，popup
            width: "300px"
            // 更多配置参数说明请参见：http://docs.geetest.com/install/client/web-front/
        }, function (captchaObj) {
            captchaObj.onReady(function () {
                console.log("验证加载完成");
                that.$captchaObj=captchaObj;
            }).onSuccess(function () {
                cb.call(that,captchaObj);
            })
        });
    });
}
// 在需要使用极验的组件create周期中调用 this.$initGeeTest()
//在需要验证的按钮事件调用 this.$captchaObj.verify();
// this.$captchaObj.onSuccess(cb)
//其它见极验api方法