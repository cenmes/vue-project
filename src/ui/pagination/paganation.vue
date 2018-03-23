<template>
    <div class="pagination">
        <div class="pagination-total" v-if="layout.total&&total">共&nbsp;{{total}}&nbsp;条</div>
        <div class="pagination-pager" v-if="pager">
            <select>
                <template v-for="item in pager">
                    <option>{{item}}</option>
                </template>
            </select>
        </div>
        <div class="pagination-main">
            <!--上一页-->
            <div
                    class="pagination-main__prev pagination-main__btn"
                    v-if="layout.prev"
                    @click="prev"
                    :class="{'bg':background,'disable':current===1}">{{prevText}}</div>
            <!--页码部分-->
            <template v-for="item in pageArr">
                <template v-if="item==='prev'">
                    <div class="pagination-main__item" @click="prevStep" :class="{'bg':background}">{{"<<"}}</div>
                </template>
                <template v-else-if="item==='next'">
                    <div class="pagination-main__item" @click="nextStep" :class="{'bg':background}">{{">>"}}</div>
                </template>
                <template v-else>
                    <div
                            class="pagination-main__page"
                            :class="{'bg':background,'active':item===current}"
                            @click="setCurrentPage(item)"
                    >{{item}}</div>
                </template>
            </template>
            <!--下一页-->
            <div
                    class="pagination-main__next pagination-main__btn"
                    v-if="layout.next"
                    @click="next"
                    :class="{'bg':background,'disable':current===count}">{{nextText}}</div>
        </div>
        <div class="pagination-jump" v-if="layout.jump">
            <span>前往</span>
            <input type="text" style="width: 50px;" v-model="input" @keydown="inputPage" @blur="jump"/>
            <span>页</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "paganation",
        props:{
            pageSize:{
                type:Number,
                default:10
            },//每页条目
            total:Number,//总条数
            pageCount:Number,//总页数
            background:{
                type:Boolean,
                default:false
            },
            step:{
                type:Number,
                default:5
            },
            currentPage:{
              type:Number,
              default:1
            },
            prevText:{
                default:"<"
            },
            nextText:{
                default:">"
            },
            layout:{
               type:Object,
                default(){
                   return {
                       prev:true,
                       next:true,
                       jump:false,
                       total:false,
                       pager:false,
                   }
                }
            }
        },
        data(){
            return{
                current:this.currentPage,
                size:this.pageSize,
                input:this.current
            }
        },
        methods:{
            setCurrentPage(num){
                this.current=num;
            },
            prev(){
                if (this.current>1){
                    this.current--;
                }
            },
            next(){
                if(this.current<this.count){
                    this.current++;
                }
            },
            prevStep(){
                if(this.current>5){
                    this.current-=5;
                }else {
                    this.current=1;
                }
            },
            nextStep(){
                if(this.current+5<this.count){
                    this.current+=5;
                }else {
                    this.current=this.count;
                }
            },
            jump(){
                let input=parseInt(this.input)
                if(input&&input<=this.count&&input>=1){
                    this.input=input;
                    this.current=input;
                }
            },
            inputPage(e){
                let keyCode=e.keyCode;
                //48-57
                //98-105
                if(keyCode<48||keyCode>105||(keyCode>57&&keyCode<98)){
                    return false;
                }
            }
        },
        computed:{
            pager(){
                if(!this.layout.pager) return false;
                if(this.layout.pager instanceof Array){
                    return this.layout.pager;
                }else {
                    return [10,20,30,40]
                }
            },
            count(){
                let count=0;
                if(!this.pageCount&&!this.total){
                    throw new Error("pageCount or total must provide one");
                    return count;
                }
                if(this.pageCount){
                    count=this.pageCount;
                }else {
                    count=Math.ceil(this.total/this.pageSize);
                }
                return count;
            },
            pageArr(){
                let count=this.count,arr=[];
                if(count>7){
                    if (this.current>=5){
                        let num=count-this.current;
                        if(num>3){
                            arr=[1,'prev',this.current-2,this.current-1,this.current,this.current+1,this.current+2,'next',count]
                        }else {
                            arr=[1,"prev"];
                            for(let m=5-num;m>=0;m--){
                                arr.push(this.current-m)
                            }
                            for(let j=1;j<=num;j++){
                                arr.push(this.current+j);
                            }
                        }
                    }else {
                        for(let i=1;i<=this.current;i++){
                            arr.push(i)
                        }
                        for (let m=1,n=6-this.current;m<=n;m++){
                            arr.push(this.current+m);
                        }
                        arr=arr.concat(['next',count]);
                    }
                }else {
                    arr=[1,2,3,4,5,6,7]
                }
                return arr;
            }
        },
        created(){
        },
        watch:{
            current(val){
                this.input=val;
                this.$emit('change',{
                    currentPage:this.current,
                    pageSize:this.size
                })
            },
            size(val,oldVal){
                // size 更新时跳转到未更新时当前页第一条
                let num=Math.ceil(oldVal*(this.current-1)/val);
                this.$emit('change',{
                    currentPage:num,
                    pageSize:this.size
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .pagination{
        float: right;
        height: 30px;
        padding: 5px 0;
        line-height: 30px;
        min-width: 750px;
        font-size: 14px;
        *{
            user-select: none;
        }
        >div{
            float: left;
        }
        .pagination-total{
            margin-right: 5px;
            color: #606266;
        }
        .pagination-main{
            padding: 0 10px;
            height: 30px;
            >div{
                margin:0 5px;
                float: left;
                text-align: center;
                min-width: 20px;
                padding: 0 5px;
                cursor: pointer;
                border-radius: 3px;
            }
            .pagination-main__btn.disable{
                color:#c0c4cc;
                cursor:not-allowed;
                background-color: #f4f4f5;
            }
            >div:hover{
                color: #606266;
            }
            >div.bg{
                background-color: #f4f4f5;
                color: #606266;
            }
            .pagination-main__page.active,.pagination-main__page:hover{
                color: #409eff;
            }
            .pagination-main__page.bg.active{
                background-color: #409eff;
                color: #ffffff;
            }
        }
    }
</style>