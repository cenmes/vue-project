<template>
    <div class="geetest">
        <div>验证：</div>
        <div class="geetest-content">
            <div id="geetest_wait" v-if="!ready">正在加载验证码......</div>
        </div>
    </div>
</template>

<script>
    var initGeetest=require('../static/js/gt.js');
    import $ from "../static/js/jquery";
    let that;
    export default {
        name: "geetest",
        data(){
            return {
                ready:false,
                captchaObj:null
            }
        },
        methods:{

        },
        watch:{
            captchaObj(val){
                this.$emit('input',val);
            }
        },
        created(){
            that=this;
            $.get('/v1/common/gt/Validate?t='+(new Date()).getTime() ,{
            },function (res) {
                let data=res.data;
                initGeetest({
                    // 以下 4 个配置参数为必须，不能缺少
                    gt: data.gt,
                    challenge: data.challenge,
                    offline: !data.success, // 表示用户后台检测极验服务器是否宕机
                    new_captcha: data.new_captcha, // 用于宕机时表示是新验证码的宕机

                    product: "float", // 产品形式，包括：float，popup
                    width: "300px"
                    // 更多配置参数说明请参见：http://docs.geetest.com/install/client/web-front/
                }, function (captchaObj) {
                    captchaObj.appendTo('.geetest-content');
                    captchaObj.onReady(function () {
                        that.ready=true;
                    });
                    that.captchaObj=captchaObj;
                    // window.gt = captchaObj;
                });
            });
        }
    }
</script>

<style lang="scss" scoped>
    .geetest{
        height: 44px;
        line-height: 44px;
        >div{
            float: left;
        }
        >div:last-child{
            margin-left: 10px;
            box-sizing: border-box;
            border-radius: 4px;
            /*width: 300px;*/
        }
        .has-border{
            border: 1px solid #c8cdd0;
        }
    }
</style>