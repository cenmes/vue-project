<template>
    <div class="menu">
        <!--未折叠-->
        <template v-if="showName">
            <div class="ui-flex h1">
                <div class=" ui-flex-1">系统设置</div>
                <div @click="toggleShowName" class="toggle-btn" title="收起">←</div>
            </div>
                <template v-for="(item,index) in menu">
                    <!--有子集-->
                    <div v-if="item.children.length>0">
                        <div class="ui-row menu-level-1"
                             @click="toggleShowLevelByIndex(index)"
                             :class="{'menu-level-1-selected':item.code===selectedSupperItem}"
                        >
                            <div class="menu-icon ui-pull-left">
                                <i :class="icons[index]"></i>
                            </div>
                            <div class="menu-name ui-pull-left">{{item.nameCN}}</div>
                            <div class="menu-toggle-child ui-pull-right" :class="{'rotate-180':showLevel[index]}">&gt;</div>
                        </div>
                        <div v-for="item2 in item.children" v-show="showLevel[index]">
                            <div
                                    @click="toRouter(item2)"
                                    :data-router="item2.nameEN"
                                    class="h3"
                                    :class="{'item-active':item2.code===selectedSubItem}"
                            >
                                {{item2.nameCN}}</div>
                        </div>
                    </div>
                    <!--无子集-->
                    <div v-else
                         class="menu-level-1"
                         :class="{'menu-level-1-selected':item.code===selectedSupperItem}"
                    >
                        <div class="ui-flex"
                             :data-router="item.nameEN"
                             @click="toRouter(item)">
                            <div class="menu-icon">
                                <i :class="icons[index]"></i>
                            </div>
                            <div class="menu-name ui-flex-1">{{item.nameCN}}</div>
                        </div>
                    </div>
                </template>

        </template>
        <!--未折叠结束-->

        <!--折叠-->
        <template v-else>
            <div class="ui-flex">
                <div @click="toggleShowName" class="toggle-btn" title="展开">→</div>
            </div>
            <div v-for="(item,index) in menu"
                 class="level-one-box"
                 @mouseenter="levelOneMouseEnter(index)"
                 @mouseleave="levelOneMouseLeave(index)"
                 :class="{'menu-level-1-selected':item.code===selectedSupperItem}"
            >
                <!--有子集-->
                <template v-if="item.children.length>0">
                    <div class="ui-flex">
                        <div class="menu-icon">
                            <i :class="icons[index]"></i>
                        </div>
                    </div>
                    <div class="menu-level-2"  v-show="showLevel[index]">
                        <div class="triangle-left"></div>
                        <div class="menu-level-2-box">
                            <div class="title">{{item.nameCN}}</div>
                            <div class="item"
                                 v-for="item2 in item.children"
                                 :class="{'item-active':item2.code===selectedSubItem}"
                                 :data-router="item2.nameEN"
                                 @click="toRouter(item2)">{{item2.nameCN}}</div>
                        </div>
                    </div>
                </template>
                <!--无子集-->
                <template v-else>
                    <div class="ui-flex" @click="toRouter(item)"  :data-router="item.nameEN">
                        <div class="menu-icon">
                            <i :class="icons[index]"></i>
                        </div>
                    </div>
                    <div class="menu-level-2"  v-show="showLevel[index]">
                        <div class="triangle-left"></div>
                        <div class="menu-level-2-box">
                            <div class="title"  @click="toRouter(item)" :data-router="item.nameEN">{{item.nameCN}}</div>
                        </div>
                    </div>
                </template>
                <!--无子集-->
            </div>
        </template>
        <!--折叠结束-->
    </div>
</template>

<script>
    import $ from '../static/js/common';
    export default {
        data () {
            return {
                showName:true,
                showLevel:[],
                icons:['el-icon-edit','el-icon-edit','el-icon-menu','el-icon-edit','el-icon-edit','el-icon-setting'],
                selectedSupperItem:-1,
                selectedSubItem:-1,
                menu:[],
                defaultProps: {
                    children: 'child',
                    label: 'nameCN'
                }
            }
        },
        methods:{
            levelOneMouseEnter:function (index) {
                this.$set(this.showLevel,index,true);
            },
            levelOneMouseLeave:function (index) {
                this.$set(this.showLevel,index,false);
            },
            toggleShowLevelByIndex:function (index) {
                this.$set(this.showLevel,index,!this.showLevel[index]);
            },
            toggleShowName:function () {
                this.showName=!this.showName;
                this.$store.state.showSideMenu=!this.$store.state.showSideMenu;
                this.initShowLevel();
            },
            toRouter:function (item) {
                let name="";
                this.selectedSupperItem=parseInt(item.code.toString().substr(0,6));
                this.selectedSubItem=item.code;
                this.showName||this.initShowLevel();
                if(item.children&&item.children.length>0){
                    name=item.children[0].nameEN;
                }else {
                    name=item.nameEN;
                }
                this.$store.commit("setRouterThree",item.children||[]);
                this.$store.commit("setThreeIndex",0);
                this.$router.replace(name);
                event.stopPropagation();
            },
            initShowLevel:function () {
                let len=this.showLevel.length;
                while (len--){
                    this.$set(this.showLevel,len,false)
                }
            }
        },
        created:function () {
            let content=[
                {
                    "code": 101101,
                    "nameCN": "基础信息管理",
                    "nameEN": "basicInfoMg",
                    "children": [
                        {
                            "code": 101101101,
                            "nameCN": "科室管理",
                            "nameEN": "departMg",
                            "children": [],
                            "permissions": [
                                "departMg_departList"
                            ]
                        },
                        {
                            "code": 101101102,
                            "nameCN": "人员信息",
                            "nameEN": "userInfo",
                            "children": [],
                            "permissions": []
                        },
                        {
                            "code": 101101103,
                            "nameCN": "基础信息",
                            "nameEN": "basicInfo",
                            "children": [
                                {
                                    "code": 101101103102,
                                    "nameCN": "医疗服务信息",
                                    "nameEN": "medicalServiceInfo",
                                    "children": [],
                                    "permissions": []
                                },
                                {
                                    "code": 101101103103,
                                    "nameCN": "业务基础信息",
                                    "nameEN": "businessBasicInfo",
                                    "children": [],
                                    "permissions": []
                                }
                            ],
                            "permissions": []
                        },
                        {
                            "code": 101101104,
                            "nameCN": "目录管理",
                            "nameEN": "directoryMg",
                            "children": [
                                {
                                    "code": 101101104101,
                                    "nameCN": "费用目录",
                                    "nameEN": "costCatalogue",
                                    "children": [],
                                    "permissions": []
                                },
                                {
                                    "code": 101101104102,
                                    "nameCN": "诊疗目录",
                                    "nameEN": "diagnosticCatalogue",
                                    "children": [],
                                    "permissions": []
                                },
                                {
                                    "code": 101101104103,
                                    "nameCN": "药品目录",
                                    "nameEN": "drugCatalogue",
                                    "children": [],
                                    "permissions": []
                                },
                                {
                                    "code": 101101104104,
                                    "nameCN": "材料目录",
                                    "nameEN": "materialCatalogue",
                                    "children": [],
                                    "permissions": []
                                },
                                {
                                    "code": 101101104105,
                                    "nameCN": "物资目录",
                                    "nameEN": "goodsCatalogue",
                                    "children": [],
                                    "permissions": []
                                }
                            ],
                            "permissions": []
                        }
                    ],
                    "permissions": []
                },
                {
                    "code": 101102,
                    "nameCN": "权限管理",
                    "nameEN": "permissionMg",
                    "children": [
                        {
                            "code": 101102101,
                            "nameCN": "应用模块设置",
                            "nameEN": "applicationModuleConfig",
                            "children": [],
                            "permissions": []
                        },
                        {
                            "code": 101102102,
                            "nameCN": "科室权限",
                            "nameEN": "departPermission",
                            "children": [],
                            "permissions": []
                        },
                        {
                            "code": 101102103,
                            "nameCN": "人员权限",
                            "nameEN": "userPermission",
                            "children": [],
                            "permissions": []
                        },
                        {
                            "code": 101102104,
                            "nameCN": "权限查看",
                            "nameEN": "permissionLookUp",
                            "children": [],
                            "permissions": []
                        }
                    ],
                    "permissions": []
                },
                {
                    "code": 101103,
                    "nameCN": "参数管理",
                    "nameEN": "parameterMg",
                    "children": [
                        {
                            "code": 101103101,
                            "nameCN": "系统参数",
                            "nameEN": "parameterSystem",
                            "children": [],
                            "permissions": []
                        },
                        {
                            "code": 101103102,
                            "nameCN": "个人参数",
                            "nameEN": "parameterPersonal",
                            "children": [],
                            "permissions": []
                        }
                    ],
                    "permissions": []
                },
                {
                    "code": 101104,
                    "nameCN": "密码策略",
                    "nameEN": "passwordStrategy",
                    "children": [
                        {
                            "code": 101104101,
                            "nameCN": "密码修改",
                            "nameEN": "passwordModify",
                            "children": [],
                            "permissions": []
                        },
                        {
                            "code": 101104102,
                            "nameCN": "密码策略设置",
                            "nameEN": "passwordStrategyConfig",
                            "children": [],
                            "permissions": []
                        }
                    ],
                    "permissions": []
                },
                {
                    "code": 101105,
                    "nameCN": "系统日志",
                    "nameEN": "systemLog",
                    "children": [
                        {
                            "code": 101105101,
                            "nameCN": "用户日志",
                            "nameEN": "userLog",
                            "children": [],
                            "permissions": []
                        },
                        {
                            "code": 101105102,
                            "nameCN": "操作日志",
                            "nameEN": "operatorLog",
                            "children": [],
                            "permissions": []
                        },
                        {
                            "code": 101105103,
                            "nameCN": "错误日志",
                            "nameEN": "errorLog",
                            "children": [],
                            "permissions": []
                        }
                    ],
                    "permissions": []
                },
                {
                    "code": 101106,
                    "nameCN": "系统工具",
                    "nameEN": "systemTools",
                    "children": [
                        {
                            "code": 101106101,
                            "nameCN": "界面设计",
                            "nameEN": "pageDesign",
                            "children": [],
                            "permissions": []
                        },
                        {
                            "code": 101106102,
                            "nameCN": "报表设计",
                            "nameEN": "reportDesign",
                            "children": [],
                            "permissions": []
                        }
                    ],
                    "permissions": []
                }
            ];
            this.menu=content;
            for(let i=0;i<content.length;i++){
                this.showLevel.push(false);
            }
        },
        computed:{

        },
        mounted:function () {
//            let _this = this;
//            $.login("lihuanwen","123456",{
//                success:function () {
//                    $.request("sso-server/sso/getMenu",{
//                        data:{
//                            systemCode:"xtsz"
//                        },
//                        success:function (data) {
//                            _this.menu = data.content[0].child;
//                        }
//                    })
//                }
//            });
        }
    }
</script>

<style lang="scss">
    @import "../static/css/ui";
    *{
        box-sizing: border-box;
    }
.h1{
   padding-left:16px;
}
.h3{
    padding-left: 56px;
    cursor: default;
}
.h3:hover{
    background-color: #275572;
}
.menu{
    color: rgba(255, 255, 255, 0.6);
    line-height: 36px;
    position: absolute;
    top: 48px;
    width: 100%;
    bottom: 36px;
    overflow-y: auto;
}
.toggle-btn{
    width: 48px;
    text-align: center;
    cursor: pointer;
}
.menu-icon{
    width: 48px;
    text-align: center;
}
.menu .level-one-active{
    background-color: #275572;
   color: #32c081;
    border-left:2px solid #32c081 ;
}
.menu-level-1 {
    position: relative;
    cursor: default;
    padding-left: 2px;
    overflow: hidden;
}
.level-one-box{
    position: relative;
}
.menu-level-1-selected{
    border-left: 2px solid #32c081;
    color: #32c081;
    padding-left: 0;
    background-color: #275572;
}
.menu-level-1:hover{
    background-color: #275572;
}
.menu-toggle-child{
    width: 48px;
    text-align: center;
    -webkit-transition: all 200ms linear;
}
.menu-level-2{
    position: absolute;
    width: 156px;
    padding-left: 10px;
    top: 5px;
    right:-166px;
    background-color: transparent!important;
    z-index: 100;
    line-height: 30px;
}
.menu-level-2-box{
    background-color: rgba(53, 73, 93, 0.85);
    color: rgba(255, 255, 255, 0.6);
    border-radius: 3px;
}
.menu-level-2-box .title{
    color: #ffffff;
    font-size: 13px;
    padding-left: 8px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}
.menu-level-2-box .item{
    padding-left: 28px;
    cursor: pointer;
}
.menu-level-2-box .item:hover{
    color: #ffffff;
}
.menu .item-active{
    color: #32c081;
}
.triangle-left {
    width: 0;
    height: 0;
    border-top: 5px solid transparent;
    border-right: 5px solid rgba(53, 73, 93, 0.85);
    border-bottom: 5px solid transparent;
    position: absolute;
    left: 5px;
    top:10px;
    z-index: 101;
}
.rotate-180{
    -webkit-transform: rotate(180deg);
}
</style>
