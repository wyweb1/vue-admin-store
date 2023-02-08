<template>
    <div class="siderbar">
        <el-scrollbar wrap-class="scrollbar-wrapper">
            <el-menu
            :unique-opened="false"
            :collapse-transition="false"
            mode="vertical"
            >
            <Sidebarltem v-for="route in routes" :key="route.path" :item="route"/>
            </el-menu>
        </el-scrollbar>
    </div>
</template>
<script>
import Sidebarltem from './Sidebarltem.vue';
    export default{
        components:{
            Sidebarltem,
        },
        computed:{
            routes(){
                return this.$routes.options.routes
            }
        }
    }
</script>
<style lang="scss">
.siderbar{
    width: 100px;
    background: #304156;
    height: 100vh;
}
</style>