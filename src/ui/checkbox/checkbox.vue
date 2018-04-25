<template>
    <div class="ui-checkbox" :class="{'ui-checkbox-disabled':disabled}">
        <div class="ui-checkbox" for="checkbox"  @click="check">
            <input class="ui-checkbox-input" id="checkbox" type="checkbox" name="checkbox" :checked="model">
            <div class="ui-checkbox-icon"></div>
            <div class="ui-checkbox-label">
                <slot>{{label}}</slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "UiCheckbox",
        props:{
            label:{
                type:String,
                default:""
            },
            value:{},
            disabled:{
                type:Boolean,
                default:false
            }
        },
        data(){
            return{
                model:this.value
            }
        },
        methods:{
            check(){
                if(!this.disabled){
                    this.model=!this.model;
                    console.log(this.model);
                    this.$emit('input',this.model);
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .ui-checkbox{
        display: inline-block;
        overflow: hidden;
        padding: 5px;
        cursor: pointer;
        color: #606266;
    }
    .ui-checkbox-disabled{
        color: #c0c4cc;
        cursor: not-allowed;
        *{
            cursor: not-allowed;
        }
        .ui-checkbox-icon{
            background-color: #dcdfe6;
        }
    }
    .ui-checkbox>div{
        float: left;
    }
    .ui-checkbox-input{
        display: none;
    }
    .ui-checkbox-icon{
        border-radius: 3px;
        border: 1px solid #cccccc;
        width: 18px;
        height: 18px;
        position: relative;
        margin-right: 5px;
        transition: all 300ms linear;
        background:  center no-repeat;
    }
    .ui-checkbox-label{
        line-height: 20px;
    }
    .ui-checkbox-icon:hover{
        border: 1px solid #3071f5;
    }
    .ui-checkbox-input:checked +.ui-checkbox-icon{
        background-color: #3071f5;
        background-image:url("checkbox_path.png");
        border: 1px solid #3071f5;
    }
</style>