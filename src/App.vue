<template>
  <div id="app" class="ui-flex-column">
    <div class="header"></div>
    <div class="ui-flex-1 ui-flex">
      <div class="left-menu">
        <div class="search-container">
          <el-input icon="search" v-model="leftMenuFilter" placeholder="输入关键字进行搜索"></el-input>
        </div>
        <div class="item"
             v-for="(item,index) in  getLeftMenu"
             :class="{'item-active':index===currentIndex}"
             @click="leftMenuClick(item,index)">{{item.table_name}}</div>
      </div>
      <div class="container ui-flex-1 ui-flex-column">
        <div class="btn-group">
          <el-button icon="plus" @click="createClick">新建</el-button>
          <el-button icon="search" @click="selectClick">查询</el-button>
          <el-button icon="edit" @click="editClick">编辑</el-button>
          <el-button icon="edit" @click="editClick">插入</el-button>
          <el-button icon="caret-right" @click="exportClick">导出</el-button>
          <el-button icon="delete" @click="deleteClick">删除</el-button>
        </div>
        <div class="ui-flex-1" style="margin:10px">
          <el-table
                  :data="tableData"
                  border
                  style="width: 100%"
                  max-height="400">
            <el-table-column
                    type="selection"
                    width="55">
            </el-table-column>
            <template v-for="item in tableColumn">
              <el-table-column
                      :prop="item"
                      :label="item">
              </el-table-column>
            </template>
          </el-table>
        </div>
      </div>
    </div>
    <el-dialog title="新建数据表" v-model="createDialogVisible"></el-dialog>
    <el-dialog title="查询" v-model="selectDialogVisible" size="full">
      <div class="btn-group" style="margin-bottom: 20px;">
        <el-button icon="caret-right" @click="createClick">运行</el-button>
      </div>
      <el-input
              type="textarea"
              :rows="10"
              v-model="selectSql">
      </el-input>
    </el-dialog>
  </div>
</template>

<script>
  import $ from "./static/js/common";
  import {path} from "./config/config"
  let that;
export default {
    data () {
    return {
        leftMenu:[],
        leftMenuFilter:"",
        currentIndex:-1,
        tableData:[],
        tableColumn:[],
        createDialogVisible:false,
        selectDialogVisible:false,
        selectSql:""
    }
  },
    computed:{
      getLeftMenu(){
          return this.leftMenu.filter(function (item) {
              return item.table_name.indexOf(that.leftMenuFilter) !==-1
          })
      }
    },
    methods:{
        leftMenuClick(item,index){
            that.currentIndex=index;
            that.getTableData(item.table_name)
        },
        createClick(){
            that.createDialogVisible=true;
        },
        selectClick(){
            that.selectDialogVisible=true;
        },
        editClick(){

        },
        exportClick(){

        },
        deleteClick(){

        },
        getTables:function () {
            $.request(path.getTables,{
                success(res){
                    that.leftMenu=res.data;
                    console.log(res.data)
                }
            })
        },
        getTableData(tableName){
            $.request(path.getTableData,{
                data:{
                    tableName:tableName
                },
                success(res){
                    that.tableColumn=res.data.columns;
                    that.tableData=res.data.rows;
                }
            })
        }
    },
    created(){
      that=this;
      that.getTables();
    },
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
  .header{
    height: 80px;
    border-bottom: 1px solid #cccccc;
    margin-bottom: 10px;
  }
  .left-menu{
    width: 200px;
    border: 1px solid #cccccc;
    height: 100%;
    overflow-y: auto;
    box-sizing: border-box;
    .search-container{
      margin: 10px;
    }
    .item{
      line-height: 32px;
      padding: 0 16px;
      cursor: default;
    }
    .item:hover{
      background-color: rgba(0,0,0,.1);
    }
    .item-active{
      background-color: rgba(0,0,0,.1);
    }
  }
  .container{
    overflow: auto;
  }
  .btn-group{
    padding: 0 10px;
  }
  .el-dialog__header{
    padding: 0 20px!important;
    line-height: 40px!important;
  }
  .el-dialog__body{
    padding: 10px!important;
  }
</style>
