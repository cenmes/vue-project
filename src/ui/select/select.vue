<template>
    <div class="ui-select" @click="toggleDropDown" v-clickoutside="hide" :style="{width:width}">
        <!--<input class="ui-select-input" type="text" v-model="inputVal" placeholder="请选择" @click="toggleDropDown"/>-->
        <div class="ui-select-input" >{{label}}</div>
        <span class="ui-select-icon" :class="{'rotate-180':isDown}">
            <i class="iconfont icon-xia"></i>
        </span>
        <div class="ui-select-dropdown" v-if="isDown">
            <div class="dropdown-content">
                <template v-for="item in options">
                    <div
                            class="ui-select-dropdown__item"
                            :class="{'dropdown__selected':item.value===val}"
                            @click.stop="itemSelected(item)">{{item.label}}</div>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
    import uiInput from "../input";
    export default {
        name: "uiSelect",
        data(){
            return {
                isDown:false,
                val:this.value,
            }
        },
        props:{
            value:{},
            filterable:{
                type:Boolean,
                default:false
            },
            options:{
                type:Array,
                default:[]
            },
            simple:{
                type:Boolean,
                default:false
            },
            width:{
                type:String,
                default:'200px'
            }
        },
        methods:{
            itemSelected(item){
                if(!this.simple){
                    this.$emit('change',item);
                    this.$emit('input',item.value);
                    this.val =item.value;
                }else {
                    this.$emit('change',item);
                    this.$emit('input',item);
                    this.val =item;
                }
                this.isDown=false;
            },
            toggleDropDown(){
                this.isDown=!this.isDown;
            },
            hide(){
                this.isDown=false;
            }
        },
        computed:{
            dropDownOptions(){
                let arr=[];
                if(this.filterable&&this.inputVal){
                  this.options.forEach((item)=> {
                        if (item.label.indexOf(this.inputVal)>=0){
                            arr.push(item);
                        }
                    });
                  return arr;
                }
                return this.options;
            },
            label(){
                let label="";
                if(!this.val){
                    return "";
                }
                this.options.some( (item)=> {
                    if(item.value===this.val){
                        label=item.label;
                        return true;
                    }
                })
                return label;
            }
        },
        created(){
        },
        watch:{

        },
        components:{
            uiInput,
        }

    }
</script>

<style lang="scss" scoped>
    .ui-select{
        position: relative;
        cursor: pointer;
        *{
            user-select: none;
        }
        .ui-select-input{
            line-height: 28px;
            height: 30px;
            padding: 0 15px;
            border: 1px solid #dcdfe6;
            border-radius: 4px;
            color: #606266;
            display: inline-block;
            width: 100%;
            background-color: #ffffff;
            box-sizing: border-box;
            cursor: pointer;
        }
        .ui-select-icon{
            position: absolute;
            right: 0;
            top: 0;
            display: inline-block;
            line-height: 30px;
            padding: 0 5px;
            color:#606266 ;
            transition: transform 300ms ease;
            transform: rotate(0);
        }
        .rotate-180{
            transform: rotate(180deg);
        }
        .ui-select-dropdown{
            position: absolute;
            top: 35px;
            left: 0;
            right: 0;
            transition:all 300ms ease;
            .dropdown-content{
                width: 100%;
                height: 100%;
                border: 1px solid #dcdfe6;
                box-sizing: border-box;
                padding: 8px 0;
                border-radius: 5px;
                max-height: 200px;
                overflow-y: auto;
            }
            .ui-select-dropdown__item{
                line-height: 30px;
                padding: 0 8px;
                cursor: pointer;
            }
            .ui-select-dropdown__item:hover{
                background-color: #dcdfe6;
            }
            .dropdown__selected{
                color: #409eff;
            }
        }
    }
</style>