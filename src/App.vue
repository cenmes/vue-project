<template>
  <div id="app" class="ui-flex-column">
    <div class="top-box" v-if="isLogin">

    </div>
    <div class="content-box adjust ui-flex">
      <div class="left-box" v-if="isLogin">
        登陆了才会显示啊
      </div>
      <div class="right-box ui-flex-1">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
    import $ from "./static/js/common";
    import {path} from "./config/config";
    import test from "./components/test.vue";
    let that;
    export default {
        data () {
            return {
                isLogin:"",
                leftMenu:[{
                    name:"系统管理",
                    router:"systemManage"
                },{
                    name:"接口管理",
                    router:"interfaceManage"
                }],
                currentIndex:-1,
            }
        },
        computed:{
        },
        methods:{
            leftMenuClick(item,index){
                this.currentIndex=index;
                this.$router.push(item.router);
            },
        },
        created(){
            that=this;
            Vue.userInfo?(this.isLogin=true):(this.isLogin=false)
        },
        components:{
        }
    }
</script>

<style lang="scss">
  @import "static/css/ui";
  *{
    padding: 0;
    margin: 0;
  }
  html,body{
    height: 100%;
  }
  #app{
    height: 100%;
  }
  .right-box{
    position: relative;
  }
  .adjust{
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
  }
</style>
