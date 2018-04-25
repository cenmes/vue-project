<template>
    <!--右键菜单和右侧滑出-->
    <div class="test adjust">
        <div class="nav ui-flex">
            <div class="item" :class="{'active':index<=length[0]}">一</div>
            <div class="item" :class="{'active':length[0]<index&&index<=length[1]}">二</div>
            <div class="item" :class="{'active':length[1]<index&&index<=length[2]}">三</div>
        </div>
        <div class="content">
            <template v-for="(item,i) in datas">
                <div class="item" v-show="i<index&&i>=(index-3)">{{item}}</div>
            </template>
        </div>
    </div>
</template>
<script>
    import moduleA from "./test";
    export default {
        data() {
            return {
                data:[
                    [11,12,13],
                    [21,22,23,24,25,26],
                    [31,32,33]
                ],
                datas:[],
                index:3,
                length:[],
            };
        },
        methods: {
        },
        created(){
            this.datas=[...this.data[0],...this.data[1],...this.data[2]];
            var l1=this.data[0].length;
            var l2=l1+this.data[1].length;
            var l3=l2+this.data[2].length
            this.length=[
               l1,l2,l3
            ]
            var length=this.datas.length;
            setInterval(()=>{
                if(this.index+3<=length){
                    this.index+=3;
                    console.log(new Date().getTime())
                }else {
                    this.index=3;
                }
            },1000)
        },
        computed:{
        },
        watch:{
        },
        mounted() {
        },
        components:{
        },

    }
</script>

<style lang="scss">
    @import "../static/css/ui";
    .test{
        overflow: hidden;
        padding: 20px;
        .nav{
            .item{
                width: 100px;
                text-align: center;
            }
            .active{
                color: red;
            }
        }
        .content{
            .item{
                line-height: 30px;
            }
            .item:nth-child(odd){
                background: #8ba4af;
            }
        }
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
