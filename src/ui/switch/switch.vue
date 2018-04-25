<template>
    <div class="ui-switch" @click="change">
        <span switchBox :class="{'switch-inactive':active}">
            <span switchButton :class="{'inner-inactive':!active}"></span>
        </span>
    </div>
</template>

<script>
    export default {
        name: "uiSwitch",
        props:{
            value:{
                type:Boolean,
                default:true
            },
            disabled:{
                type:Boolean,
                default:false
            },
        },
        data(){
            return {
                active:this.value
            }
        },
        methods:{
            change(){
                this.active=!this.active;
                this.$emit('input',this.active);
                this.$emit('change',this.active)
            }
        }
    }
</script>

<style scoped lang="scss">
    $activeColor:rgb(19, 206, 102);
    $inactiveColor:rgb(255, 73, 73);
    .ui-switch{
        display: inline-block;
        cursor: pointer;
        span{
            display: inline-block;
        }
        [switchBox]{
            position: relative;
            height: 20px;
            width: 40px;
            border-radius: 10px;
            background-color: $activeColor;
            transition: background-color 300ms ease;
        }
        [switchButton]{
            position: absolute;
            border-radius: 50%;
            width: 16px;
            height: 16px;
            background-color: #ffffff;
            top:2px;
            left: 1px;
            z-index: 2;
            transition: all 300ms ease;
        }
        .switch-inactive{
            background-color:$inactiveColor ;
        }
        .inner-inactive{
            transform: translate3d(22px,0,0);
        }
    }
</style>