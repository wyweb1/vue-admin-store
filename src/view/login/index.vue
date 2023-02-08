<template>
    <div class="login-container">
        <div>hhh</div>
        <el-form class="login-form" ref="form"   size="mini"> 
            <div>
                <h2>登录</h2>
            </div>
            <el-form-item>
                <el-input placeholder="姓名" type="text" auto-complete="on" />
                
            </el-form-item>
            <el-dropdown>
  <span class="el-dropdown-link">
    下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>黄金糕</el-dropdown-item>
    <el-dropdown-item>狮子头</el-dropdown-item>
    <el-dropdown-item>螺蛳粉</el-dropdown-item>
    <el-dropdown-item disabled>双皮奶</el-dropdown-item>
    <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
        </el-form>
    </div>
</template>
<script>
    export default{
        name:'Login',
        data(){
            return {

            }
        },
        watch:{},
        methods:{}
    }
</script> 
<style lang="scss" >
$aaa:12;
.login-container{
    width: 100%;
   min-height: 100%;
   overflow: hidden;
    
    // background: #000000f0;
    h2{
        font-size: 30px;
        color: #000;
    }
    // .el-form-item{
    //     margin: 0 auto;
    // }
    .el-input{
        height: 50px;
        width:85%
    }


    .login-form{
        width: 520px;
        padding:170px 30px 0 ;
        margin: 0 auto;

    }
}
</style>