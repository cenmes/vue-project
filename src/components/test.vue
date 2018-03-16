<template>
    <!--右键菜单和右侧滑出-->
    <div class="test adjust">
        <radio v-model="sex" :data="sexData" direction="hor"></radio>
        <child ref="child"></child>
        <input type="button" value="刷新子组件" @click="btnClick">
    </div>
</template>
<script>
    var event=require('events');
    var util=require('util');
    var fn=function(){

    };
    util.inherits(fn,event.EventEmitter);
    var page=new event.EventEmitter();
    import child from "./child.vue";
    import $ from '../static/js/jquery';
    import server from "server";
    import radio from "../ui/radio/radio.vue";
    export default {
        data() {
            return {
                sex:1,
                sexData:[{
                    label:"男",
                    value:1
                },{
                    label:"女",
                    value:2
                }]
            };
        },
        methods: {
            btnClick(){
               page.emit('refreshChild');
            }
        },
        created(){
            console.log(fn.prototype);
            page.on('refreshChild',function(){
                this.$refs.child.refresh();
            }.bind(this));
            $.post(server.test,function (res) {
                console.log(res);
            })
        },
        computed:{
        },
        watch:{
            radio(val){
                console.log(val);
            }
        },
        mounted() {
        },
        components:{
            child,
            radio
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
