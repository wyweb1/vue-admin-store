<template>
    <div class="app-main">
        <transition name="fate-transform" mode="out-in">
        <router-view :key="key"/>
        </transition>
    </div>
</template>
<script>
    export default {
        name:'AppMain',
        computed:{
            key(){
                return this.$route.path
            }
        }
    }
</script>
<style lang="scss" scoped>
.app-main{
    width: 100%;
    background: #000;
}
</style>