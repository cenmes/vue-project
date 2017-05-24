<template>
  <div id="app">
    <div class="container">
      <div class="content ui-flex-column">
        <div class="ui-flex-1">
          <el-form :model="dialogConfig" label-position="right" label-width="90px" ref="form">
            <el-form-item
                    class="w1"
                    prop="code"
                    v-show="dialogContent.code"
                    label="编码">
              <el-input v-model="dialogConfig.code"  placeholder="新增自动生成编码" diaabled></el-input>
            </el-form-item>
            <el-form-item
                    class="w1"
                    prop="theName"
                    v-show="dialogContent.theName"
                    :rules="rules.theName"
                    label="名称">
              <el-input v-model="dialogConfig.theName"></el-input>
            </el-form-item>
            <el-form-item
                    class="w1"
                    prop="nameShort"
                    v-show="dialogContent.nameShort"
                    :rules="rules.nameShort"
                    label="简码">
              <el-input v-model="dialogConfig.nameShort"></el-input>
            </el-form-item>
            <el-form-item
                    class="w1"
                    prop="theSort"
                    v-show="dialogContent.theSort"
                    :rules="rules.theSort"
                    label="排序">
              <el-input v-model="dialogConfig.theSort"></el-input>
            </el-form-item>
            <el-form-item
                    class="w1"
                    prop="theType"
                    v-show="dialogContent.theType"
                    :rules="rules.theType"
                    label="类型">
              <el-input v-model="dialogConfig.theType"></el-input>
            </el-form-item>
            <el-form-item
                    class="w1"
                    prop="statisticsScope"
                    v-show="dialogContent.statisticsScope"
                    label="统计范围">
              <el-input v-model="dialogConfig.statisticsScope"></el-input>
            </el-form-item>
            <el-form-item
                    class="w1"
                    prop="accountLv1Code"
                    v-show="dialogContent.accountLv1Code"
                    label="一级科目代码">
              <el-input v-model="dialogConfig.accountLv1Code"></el-input>
            </el-form-item>
            <el-form-item
                    class="w1"
                    prop="lottingPattern"
                    v-show="dialogContent.lottingPattern"
                    label="分票方式">
              <el-input v-model="dialogConfig.lottingPattern"></el-input>
            </el-form-item>
            <el-form-item
                    class="w1"
                    prop="adjustDepartCode"
                    v-show="dialogContent.adjustDepartCode"
                    label="核算科室">
              <el-input v-model="dialogConfig.adjustDepartCode"></el-input>
            </el-form-item>
            <el-form-item
                    class="w1"
                    prop="lottingDepartCode"
                    v-show="dialogContent.lottingDepartCode"
                    label="分票科室">
              <el-input v-model="dialogConfig.lottingDepartCode"></el-input>
            </el-form-item>
            <el-form-item
                    class="w1"
                    prop="preferentialRatio"
                    v-show="dialogContent.preferentialRatio"
                    label="优惠比例">
              <el-input v-model="dialogConfig.preferentialRatio"></el-input>
            </el-form-item>
            <el-form-item
                    class="w1"
                    prop="accountLv2Code"
                    v-show="dialogContent.accountLv2Code"
                    label="二级科目">
              <el-input v-model="dialogConfig.accountLv2Code"></el-input>
            </el-form-item>
            <el-form-item
                    class="w1"
                    prop="primaryCategoryCode"
                    v-show="dialogContent.primaryCategoryCode"
                    label="费用大类">
              <el-input v-model="dialogConfig.primaryCategoryCode"></el-input>
            </el-form-item>
            <el-form-item
                    class="w2"
                    prop="status"
                    v-show="dialogContent.status"
                    label="状态">
              <el-switch
                      v-model="dialogConfig.status"
                      on-color="#32c081"
                      on-text="启用"
                      off-text="停用"
                      off-color="#ff4949">
              </el-switch>
            </el-form-item>
          </el-form>
        </div>
        <div class="ui-flex">
          <div class="ui-flex-1">
          </div>
          <div>
            <el-button @click="check('form')">检验</el-button>
            <el-button @click="resetForm('form')">重置</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  let rules={
      //名称
      theName:[{
          required:true,
          message:"名称不能为空",
          trigger:"blur"
      }],
      //简码
      nameShort:[{
          required:true,
          message:"简码不能为空",
          trigger:"blur"
      }],
      //排序
      theSort:[{
          type:"number",
          message:"排序必须是数字",
          trigger:"blur"
      }],
      //类型
      theType:[{
          required:true,
          message:"类型不能为空",
          trigger:"blur"
      }]
  };
export default {
  name: 'app',
  data () {
    return {
        dialogConfig:{
            //编码
            code:"",
            // 名称
            theName:"",
            //简码
            nameShort:"",
            //排序
            theSort:"",
            //状态
            status:true,
            //类型
            theType:"",
            //统计范围
            statisticsScope:"",
            //一级科目代码
            accountLv1Code:"",
            //分票方式
            "lottingPattern":"",
            //核算科室
            "adjustDepartCode":"",
            // 分票科室
            "lottingDepartCode":"",
            //优惠比列
            "preferentialRatio":"",
            //二级科目
            "accountLv2Code":"",
            //费用大类
            "primaryCategoryCode":"",
        },
        rules:rules,
        dialogContent:{
                    "code":true,
                    "theName":true,
                    "nameShort":true,
                    "theType":true,
                    "theSort":true
        },
    }
  },
    methods:{
      check(formName){
          this.$refs[formName].validate((valid) => {
              if (valid) {
                  alert('验证通过');
              } else {
                  alert("验证失败");
                  return false;
              }
          });
      },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
}
</script>

<style lang="scss">
  @import "static/css/ui";
  *{
    padding: 0;
    margin: 0;
  }
  html,body{
    height: 100%;
  }
  .container{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0,0,0,.3);
  }
  .content{
    position: absolute;
    left: 50%;
    top: 50%;
    transform:translate(-50%,-50%);
    width: 666px;
    height: 500px;
    background-color: #ffffff;
    border-radius: 3px;
    box-sizing: border-box;
    padding: 10px;
  }
  .el-form-item{
    float: left;
  }
  .w1{
    width: 50%;
  }
  .w2{
    width: 100%;
  }
</style>
