<template>
    <div class="layout">
        <!-- 侧边栏 -->
        <sidebar class="sidebar-container"/>
        <!-- 右边内容渲染框 -->
        <div class="main-container">
            <app-main />
        </div>
    </div>
</template>
<script>
import Sidebar from './components/Sidebar/index.vue'
import AppMain from './AppMain.vue';
    export default{
        name:'Layout',
        components:{
        AppMain,
        Sidebar,
               
       }
    }

</script>
<style lang="scss">
.layout{
    width: 100%;
    height: 100%;
    background: pink;
}
</style>





