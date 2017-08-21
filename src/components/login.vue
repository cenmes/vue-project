<template>
    <div class="login-box adjust ui-flex-column">
        <div style="height: 100px;line-height: 100px;padding-left: 20px;">你娃还没有登录</div>
        <div class="left">
            <el-carousel>
                <el-carousel-item v-for="item in 3" :key="item">
                    <img :src="imgs[item-1]"/>
                </el-carousel-item>
            </el-carousel>
            <div class="login">
                <div class="login-mode ui-flex">
                    <div class="l-m-item ui-flex-1" :class="{'active':apLogin}" @click="changeLoginMode">普通登录</div>
                    <div class="l-m-item ui-flex-1" :class="{'active':!apLogin}" @click="changeLoginMode">账号密码登录</div>
                </div>
                <div class="ap content" v-if="apLogin">
                    <el-form :model="data" label-position="right" ref="form">
                        <el-form-item prop="userName">
                            <el-input v-model="data.userName" placeholder="用户名" size="large"></el-input>
                        </el-form-item>
                        <el-form-item prop="password">
                            <el-input v-model="data.password" type="password" placeholder="密码" size="large"></el-input>
                        </el-form-item>
                    </el-form>
                    <el-button size="large" :disabled="unAndPwd" @click="doLogin">登录</el-button>
                </div>
                <div class="qr content" v-else>
                    暂不支持二维码登录
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    const img1=require('../assets/1.jpg');
    const img2=require('../assets/2.jpg');
    const img3=require('../assets/3.jpg');
    let that;
    export default {
        data () {
            return {
                imgs:[img1,img2,img3],
                apLogin:true,
                btnDisabled:true,
                data:{
                    userName:"",
                    password:""
                }
            }
        },
        methods:{
            changeLoginMode(){
                this.apLogin=!this.apLogin;
            },
            doLogin(){
                this.$refs["form"].validate((valid) => {
                    if (valid) {
                        console.log(path.login);
                        $.request(path.login,{
                            data:that.data,
                            success(res){
                                if(res.success){
                                    $.setStorage("userInfo",res.data);
                                    that.$message("登录成功");
                                }else {
                                    that.$message(res.errorMsg);
                                }
                            },
                            error(){
                                alert("fuck");
                            }
                        })
                    } else {
                        that.$message("输入不符合要求");
                    }
                });
            }
        },
        created(){
            that=this;
        },
        computed:{
            unAndPwd(){
                return !(this.data.userName&&this.data.password);
            }
        },
        watch:{
            unAndPwd(val){
                this.btnDisabled=val;
            }
        }
    }
</script>
<style lang="scss">
    $bgColors:red,green,blue;
    .login-box{
        .left{
            width: 100%;
            position: relative;
        }
        .login{
            position: absolute;
            top: 50px;
            right: 200px;
            bottom: 50px;
            width: 350px;
            background-color: #ffffff;
            z-index: 99;
            .login-mode{
                line-height: 50px;
                .l-m-item{
                    text-align: center;
                    border-bottom: 1px solid #cccccc;
                    cursor: pointer;
                    background-color: #3AA7EC;
                    font-size: 20px;
                }
                .active{
                    border-bottom: none;
                    background-color: #ffffff;
                }
            }
            .content{
                padding: 20px;
            }
        }
        .el-carousel__item:nth-child(2n) {
            background-color: #99a9bf;
        }

        .el-carousel__item:nth-child(2n+1) {
            background-color: #d3dce6;
        }
        .el-carousel__container{
            height: 500px;
        }
        .el-carousel__item img{
            width: 100%;
        }
        .el-button{
            width: 100%;
        }
    }
</style>
