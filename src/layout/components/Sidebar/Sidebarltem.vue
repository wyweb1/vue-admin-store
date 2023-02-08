<template>
    <div >
        <el-submenu ref="subMenu" popper-append-to-body>
            <template slot="title">
                <span>{{item.meta.title}}</span>
            </template>
          
        </el-submenu>
    </div>
</template>
<script>
    export default{
        name:'SidebarItem',
        props:{
            item: Object,
        }
    }
</script>
<style lang="scss">

</style>