<template>
    <div class="ui-input" :class="{'disabled':disabled}" :style="{width:width}">
        <input type="text"
               v-model="val"
               :placeholder="placeholder"
               :disabled="disabled"
               @blur="blur($event)"
               @keydown="keydown($event)"
               class="ui-input__input"/>
    </div>
</template>

<script>
    export default {
        name: "uiInput",
        data(){
            return {
                val:this.value
            }
        },
        props:{
            value:{},
            placeholder:{
                type:String,
                default:"请输入"
            },
            disabled:{
                type:Boolean,
                default:false
            },
            width:{
                type:String,
                default:"100%"
            }
        },
        methods:{
            keydown(e){
                this.$emit("keydown",e)
            },
            blur(e){
                this.$emit("blur",e)
            }
        },
        computed:{

        },
        created(){

        },
        watch:{
            val(val){
                this.$emit('input',val);
            },
            value(val){
                this.val=val;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .ui-input{
        position: relative;
        display: inline-block;
        .ui-input__input{
            line-height: 30px;
            height: 30px;
            padding: 0 15px;
            border: 1px solid #dcdfe6;
            border-radius: 4px;
            color: #606266;
            display: inline-block;
            width: 100%;
            background-color: #ffffff;
            box-sizing: border-box;
        }
    }
    .ui-input.disabled .ui-input__input{
        background-color: #f5f7fa;
        cursor: not-allowed;
        color: #c0c4cc;
    }
</style>