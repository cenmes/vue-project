<template>
    <div class="code ui-flex adjust">
        <div class="aside">
            <el-collapse v-model="activeNames" @change="handleChange" accordion>
                <el-collapse-item title="javascript" name="1">
                    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                </el-collapse-item>
                <el-collapse-item title="css" name="2">
                    <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                    <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
                </el-collapse-item>
            </el-collapse>
        </div>
        <div class="content ui-flex-1"></div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                activeNames:"",
            }
        },
        methods:{
            handleChange(){}
        },
        computed:{

        },
        created(){

        },
        mounted(){

        },
        watch:{

        }
    }
</script>

<style lang="scss">
    .code{
        .aside{
            width: 200px;
            border-right: 1px solid #dfe6ec;
            overflow-y: auto;
        }
        .el-collapse{
            border: none;
        }
    }
</style>
