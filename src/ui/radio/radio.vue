<template>
    <div class="ui-radio-container">
        <template v-for="(item,index) in data">
            <label class="ui-radio" :for="'radio'+index" @click="check(item)" :style="{
            'display':direction==='hor'?'block':'inline-block'
            }">
                <input class="ui-radio-input" :id="'radio'+index" type="radio" name="radio" :checked="item.value===model">
                <div class="ui-radio-icon"></div>
                <div class="ui-radio-label">{{item.label}}</div>
            </label>
        </template>
    </div>
</template>

<script>
    export default {
        name: "radio",
        props:{
            data:{
                type:Array,
                default:function () {
                    return [{
                        label:"选项一",
                        value:1
                    },{
                        label:"选项二",
                        value:2
                    }]
                }
            },
            value:{},
            direction:{}
        },
        data(){
            return{
                model:this.value
            }
        },
        methods:{
            check(item){
                this.model=item.value;
                this.$emit('input',item.value);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .ui-radio{
        /*display: inline-block;*/
        overflow: hidden;
        padding: 5px;
    }
    .ui-radio>div{
        float: left;
    }
    .ui-radio-input{
        display: none;
    }
    .ui-radio-icon{
        border-radius: 50%;
        border: 1px solid #cccccc;
        width: 20px;
        height: 20px;
        position: relative;
    }
    .ui-radio-icon:after{
        position: absolute;
        border-radius: 50%;
        background-color: #4caf50;
        left: 50%;
        top: 50%;
        width: 10px;
        height: 10px;
        content: "";
        transform: translate(-50%,-50%) scale(0);
        transition: all .3s ease;
    }
    .ui-radio input:checked + .ui-radio-icon{
        border: 1px solid #4caf50;
    }
    .ui-radio:hover .ui-radio-icon{
        border-color: #4caf50;
    }
    .ui-radio input:checked + .ui-radio-icon:after{
        transform: translate(-50%,-50%) scale(1);
    }
    .ui-radio-label:before{
        margin-left: 3px;
        content: "";
    }
</style>