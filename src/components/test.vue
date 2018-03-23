<template>
    <!--右键菜单和右侧滑出-->
    <div class="test adjust">
        <child></child>
        <ui-radio v-model="sex" :data="sexData" direction="hor"></ui-radio>
        <child ref="child"></child>
        <input type="button" value="刷新子组件" @click="btnClick">
        <div style="height: 100px;">
            <loading></loading>
        </div>
        <pagination  :layout="paginationLayout" :total="2000" background></pagination>
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
    import loading from "../ui/loading/loading.vue";
    import pagination from "../ui/pagination/paganation.vue";
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
                }],
                paginationLayout:{
                    prev:true,
                    next:true,
                    jump:true,
                    total:true,
                    pager:[5,10],
                }
            };
        },
        methods: {
            btnClick(){
              this.$refs.child.refresh()
            },
            refresh(msg){
                alert(msg)
            }
        },
        created(){
            console.log(fn.prototype);
            page.on('refreshChild',function(){
                this.$refs.child.refresh();
            }.bind(this));
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
            loading,
            pagination
        },

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
