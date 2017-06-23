<template>
    <div class="system-manage adjust ui-flex-column">
        <div class="operation">
            <template v-for="(item,index) in buttons">
                <el-button  :icon="item.icon" :disabled="btnDisabled[index]" @click="handler(item)">{{item.label}}</el-button>
            </template>
        </div>
        <div class="table ui-flex-1 ui-flex-column">
            <div class="filter-container">
                <el-input icon="search" placeholder="输入关键字搜索"></el-input>
            </div>
            <div class="table-container ui-flex-1">
                <el-table
                        @selection-change="tableSelectionChange"
                        border
                        :data="tableData">
                    <el-table-column
                            type="selection"
                            width="55">
                    </el-table-column>
                    <template v-for="item in tableColumn">
                        <el-table-column
                                :prop="item.prop"
                                :label="item.label">
                        </el-table-column>
                    </template>
                </el-table>
            </div>

        </div>
    </div>
</template>

<script>
    import {path} from "../config/config";
    import $ from "../static/js/common"
    let that;
    let buttons=[{
        label:"新增",
        icon:"plus",
    },{
        label:"编辑",
        icon:"edit",
    },{
        label:"删除",
        icon:"delete"
    }];
    let tableColumn=[{
        label:"系统编码",
        prop:"id"
    },{
        label:"系统名称",
        prop:"name"
    },{
        label:"服务器地址",
        prop:"host"
    },{
        label:"创建人",
        prop:"createPerson"
    },{
        label:"更新时间",
        prop:"updateTime"
    },];
    export default {
       data () {
            return {
                btnDisabled:[false,true,true],
                buttons:buttons,
                tableData:[],
                tableColumn:tableColumn,
                path:"",
            }
        },
        methods:{
            handler(item){
                this.path=item.path;
              console.log(item.path)
            },
            tableSelectionChange(data){

            },
            getData(){
                $.request(path.systemList,{
                    success(res){
                        if(res.success){
                            that.tableData=res.data;
                        }
                    }
                })
            }
        },
        created(){
           that=this;
           this.getData();
        }
    }
</script>

<style lang="scss">
    .system-manage{
        .operation{
            border-bottom: 1px solid #cccccc;
        }
    }
    .el-button{
        border: none;
        border-radius: unset;
    }
    .filter-container{
        padding: 10px;
        width: 180px;
    }
    .table-container{
        padding: 10px 10px;
    }
</style>
