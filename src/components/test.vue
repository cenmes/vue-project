<template>
    <!--右键菜单和右侧滑出-->
    <div class="test adjust">
        <div class="adjust ui-flex ui-flex-center">
            <div class="button" v-right-click="fn">rihgt key</div>
            <div style="padding: 10px;border: 1px solid #32c081;" @click="clickHandler">{{label}}</div>
        </div>
        <transition name="slide-fade">
            <div class="right-side" v-if="show">
                <div style="height: 1000em; background-color: red;"></div>
            </div>
        </transition>

    </div>
</template>
<script>
    export default {
        data() {
            return {
                label:"显示",
                show:false,
            };
        },
        methods: {
            clickHandler(){
                if(this.show){
                    this.show=false;
                    this.label="显示"
                }else {
                    this.show=true;
                    this.label="隐藏"
                }
            },
            fn(){
              alert(this.label)
            },
            look(){
                let arr=[];
                for(let key in this.value){
                    let obj={};
                    obj.payType=key;
                    obj.payMoney=parseFloat(this.value[key])||0;
                    arr.push(obj)
                }
                console.log(JSON.stringify(arr));
            },
            rightKey(e){
                if(e.button===2){
                    alert("你龟儿子点了右键")
                }
            }
        },
        computed:{
            getTotal(){
                let total=0,curr;
                for(let key in this.value){
                    curr=parseFloat(this.value[key])||0;
                    total+=curr;
                }
                return total;
            }
        },
        watch:{
            getTotal(val){
                this.total=val;
            }
        },
        mounted() {
            console.log(Vue);
            document.oncontextmenu=function () {
                return false;
            }
        }
    }
</script>

<style lang="scss">
    @import "../static/css/ui";
    .test{
        overflow: hidden;
        .button{
            padding: 10px;border: 1px solid #32c081;
        }
        .right-side{
            position: absolute;
            width: 200px;
            top: 0;
            bottom: 0;
            box-sizing: border-box;
            padding: 10px;
            right: 0;
            overflow-y: auto;
            background-color: black;
        }
        .slide-fade-enter-active,.slide-fade-leave-active {
            transition: all .3s ease-out;
        }
        .slide-fade-enter, .slide-fade-leave-to
            /* .slide-fade-leave-active for below version 2.1.8 */ {
            transform: translateX(200px);
            opacity: 0;
        }
    }
</style>
