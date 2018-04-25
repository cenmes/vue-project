<template>
    <div class="code ui-flex-column adjust">
        <div class="ui-flex">
            <div>用户名:</div>
            <div>
                <input type="text" id="username"/>
            </div>
        </div>
        <div class="ui-flex">
            <div>密码:</div>
            <div>
                <input type="text" id="password"/>
            </div>
        </div>
        <div class="ui-flex">
            <div>完成验证：</div>
            <div id="captcha">
                <p id="wait" class="show">正在加载验证码......</p>
            </div>
        </div>
        <input type="button" value="提交" @click="sumbit" id="btn"/>
    </div>
</template>

<script>
    var initGeetest=require('../static/js/gt.js');
    // import "../static/js/gt.js";
    import $ from "../static/js/jquery";
    let that;
    export default {
        data () {
            return {
                captchaObj:null
            }
        },
        methods:{
            sumbit(){
                // this.captchaObj.verify();
                let result=this.captchaObj.getValidate();
                if(!result){
                    alert("请完成验证");
                }else {
                    console.log({
                        geetest_challenge: result.geetest_challenge,
                        geetest_validate: result.geetest_validate,
                        geetest_seccode: result.geetest_seccode
                    })
                }
            }
        },
        computed:{

        },
        created(){
            that=this;
          $.get('/v1/common/gt/Validate?t='+(new Date()).getTime() ,{
          },function (res) {
              console.log(data);
              let data=res.data;
              // let data=res.data;
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
                  captchaObj.appendTo('#captcha');
                  captchaObj.onReady(function () {
                      $("#wait").hide();
                  });
                  that.captchaObj=captchaObj;
                  // window.gt = captchaObj;
              });
          });
          $.post('/test',{},function (res) {
              console.log(res);
          })
        },
        mounted(){

        },
        watch:{

        }
    }
</script>

<style lang="scss">
    .code{
    }
</style>
