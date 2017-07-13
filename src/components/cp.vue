<template>
    <div style="position: absolute;left: 0;right: 0;bottom: 0;top: 0;padding: 10px;" class="ks">
        <div class="">
            <div class="title">选择号码查看购买支出收益</div>
            <el-select v-model="number" placeholder="请选择号码" @change="selectChange">
                <el-option
                        v-for="(item,index) in numbers"
                        :key="index"
                        :label="index+3"
                        :value="index+3">
                </el-option>
            </el-select>
        </div>
        <div class="title">购买支出收益</div>
        <div style="width: 200px;margin: 10px 0;">
            <el-input
                    placeholder="输入数字搜索"
                    icon="search"
                    v-model="numSearch">
            </el-input>
        </div>

        <el-table :data="data"
                  height="400"
                  border
                  stripe>
            <template v-for="item in column">
                <el-table-column
                        :prop="item.prop"
                        :label="item.label">
                </el-table-column>
            </template>
        </el-table>
    </div>
</template>

<script>
    let that;
    function getDataByNum(num,values) {
        let myCost=[2];
        let profit=[values[num-3]-2];
        let nums=[1];
        for(let i=1;i<40;i++){
            let totalNum=nums.reduce(function (prev,curr,index) {
                return prev+curr;
            });
            let total=totalNum*2;
            let n=Math.ceil(total/(values[num-3]-2));
            if(total%(values[num-3]-2)===0){
                n=n+1;
            }
            nums.push(n);
            myCost.push(total+(2*n));
            profit.push(n*values[num-3]-(total+(2*n)));
        }
        let data=[];
        nums.forEach(function (item,index) {
            data.push({
                index:index+1,
                num:item,
                cost:myCost[index],
                profit:profit[index]
            })
        });
        return data
    }
    export default {
        data () {
            return {
                numbers:new Array(16),
                number:"",
                numSearch:"",
                data:[],
                values:[240,80,40,25,16,12,10,9,9,10,12,16,25,40,80,240],
                dataOriginal:[],
                column:[{prop:"index",label:"轮次"},{prop:"num",label:"购买数量"},{prop:"cost",label:"总花费"},{prop:"profit",label:"盈利"}]
            }
        },
        methods:{
            filterRow(val){
                that.data=this.dataOriginal.filter(function (item) {
                    return item.index===val
                })
            },
            selectChange(){
                this.data=getDataByNum(parseInt(this.number),this.values);
                this.dataOriginal=getDataByNum(parseInt(this.number),this.values)
            }
        },
        computed:{
        },
        created(){
            that=this;
            this.data=getDataByNum(9,this.values);
            this.dataOriginal=getDataByNum(9,this.values)
        },
        watch:{
            numSearch(val){
                if(val===""){
                    this.data=this.dataOriginal;
                    return;
                }
                this.filterRow(parseInt(val));
            },
        },
    }
</script>

<style lang="scss">
    .ks{
        .title{
            line-height: 30px;
            font-weight: 600;
        }
        .numbers{
            >div{
                text-align: center;
                width: 30px;
                line-height: 30px;
                border: 1px solid #cccccc;
                border-right: none;
                margin: 10px 0;
                cursor: pointer;
            }
            >div:first-child{
                border-bottom-left-radius: 3px;
                border-top-left-radius: 3px;
            }
            >div:last-child{
                border-right:  1px solid #cccccc;
                border-bottom-right-radius: 3px;
                border-top-right-radius: 3px;
            }
        }
    }
</style>
