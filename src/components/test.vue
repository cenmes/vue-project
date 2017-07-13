<template>
    <div class="menu">
        <div @click="visible=!visible">toggle</div>
        <transition name="fade">
            <div v-if="visible" class="ani-t">动画测试</div>
        </transition>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                width:[200,50],
                state:true,
                visible:false
            };
        },
        methods: {

        },
        computed:{

        },
        mounted() {
        }
    }
</script>

<style lang="scss">
    @import "../static/css/ui";
    .menu{
        overflow-y: auto;
        position: relative;
        height: 300px;
        .ani-t{
            border: 1px solid #32c081;
            border-radius: 3px;
            line-height: 30px;
            padding: 0 10px;
            position: absolute;
            left: 0;
            top: 50px;
        }
        .fade-enter-active, .fade-leave-active {
            transition: all 5s
        }
        .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
            left:100px;
        }
    }
</style>
