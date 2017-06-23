<template>
  <div class="menu" :style="getStyle">
    <div @click="toggleWidth">toggle</div>
    <div class="menu-item">
      <div class="menu-item-top ui-flex">
        <div>icon</div>
        <div class="ui-flex-1" v-if="state">一级菜单</div>
        <div v-if="state">&gt;</div>
      </div>
      <div class="menu-item-list" :class="{'pos-right':!state}">
        <div>111</div>
        <div>222</div>
        <div>333</div>
      </div>
    </div>
    <div class="menu-item">
      <div class="menu-item-top ui-flex">
        <div>icon</div>
        <div class="ui-flex-1" v-if="state">一级菜单</div>
        <div v-if="state">&gt;</div>
      </div>
      <div class="menu-item-list" :class="{'pos-right':!state}">
        <div>111</div>
        <div>222</div>
        <div>333</div>
      </div>
    </div>
    <div class="menu-item">
      <div class="menu-item-top ui-flex">
        <div>icon</div>
        <div class="ui-flex-1" v-if="state">一级菜单</div>
        <div v-if="state">&gt;</div>
      </div>
      <div class="menu-item-list" :class="{'pos-right':!state}">
        <div>111</div>
        <div>222</div>
        <div>333</div>
      </div>
    </div>
    <div class="menu-item">
      <div class="menu-item-top ui-flex">
        <div>icon</div>
        <div class="ui-flex-1" v-if="state">一级菜单</div>
        <div v-if="state">&gt;</div>
      </div>
      <div class="menu-item-list" :class="{'pos-right':!state}">
        <div>111</div>
        <div>222</div>
        <div>333</div>
      </div>
    </div><div class="menu-item">
    <div class="menu-item-top ui-flex">
      <div>icon</div>
      <div class="ui-flex-1" v-if="state">一级菜单</div>
      <div v-if="state">&gt;</div>
    </div>
    <div class="menu-item-list" :class="{'pos-right':!state}">
      <div>111</div>
      <div>222</div>
      <div>333</div>
    </div>
  </div>
    <div class="menu-item">
      <div class="menu-item-top ui-flex">
        <div>icon</div>
        <div class="ui-flex-1" v-if="state">一级菜单</div>
        <div v-if="state">&gt;</div>
      </div>
      <div class="menu-item-list" :class="{'pos-right':!state}">
        <div>111</div>
        <div>222</div>
        <div>333</div>
      </div>
    </div>
    <div class="menu-item">
      <div class="menu-item-top ui-flex">
        <div>icon</div>
        <div class="ui-flex-1" v-if="state">一级菜单</div>
        <div v-if="state">&gt;</div>
      </div>
      <div class="menu-item-list" :class="{'pos-right':!state}">
        <div>111</div>
        <div>222</div>
        <div>333</div>
      </div>
    </div>
    <div class="menu-item">
      <div class="menu-item-top ui-flex">
        <div>icon</div>
        <div class="ui-flex-1" v-if="state">一级菜单</div>
        <div v-if="state">&gt;</div>
      </div>
      <div class="menu-item-list" :class="{'pos-right':!state}">
        <div>111</div>
        <div>222</div>
        <div>333</div>
      </div>
    </div>
    <div class="menu-item">
      <div class="menu-item-top ui-flex">
        <div>icon</div>
        <div class="ui-flex-1" v-if="state">一级菜单</div>
        <div v-if="state">&gt;</div>
      </div>
      <div class="menu-item-list" :class="{'pos-right':!state}">
        <div>111</div>
        <div>222</div>
        <div>333</div>
      </div>
    </div>
    <div class="menu-item">
      <div class="menu-item-top ui-flex">
        <div>icon</div>
        <div class="ui-flex-1" v-if="state">一级菜单</div>
        <div v-if="state">&gt;</div>
      </div>
      <div class="menu-item-list" :class="{'pos-right':!state}">
        <div>111</div>
        <div>222</div>
        <div>333</div>
      </div>
    </div>

  </div>
</template>

<script>
    export default {
        data() {
            return {
                width:["200px","50px"],
                state:true
            };
        },
        methods: {
            toggleWidth(){
                this.state=!this.state;
            }
        },
        computed:{
            getStyle:function () {
                return {
                    "width":this.state?(this.width[0]):(this.width[1])
                }
            }
        },
        mounted() {
            this.restaurants = this.data.map(function (item) {
                let obj={};
                obj.value=item.theName;
                obj.code=item.code;
                return obj;
            });
        }
    }
</script>

<style lang="scss">
  @import "./static/css/ui";
  *{
    padding: 0;
    margin: 0;
  }
  html,body{
    height: 100%;
  }
  .menu{
    height: 100%;
    background-color: rgba(0,0,0,.3);
    overflow-y: auto;
  }
  .menu-item{
    position: relative;
  }
  .pos-right{
    position: absolute;
    width: 200px;
    left: 200px;
    top: 0;
  }
</style>
