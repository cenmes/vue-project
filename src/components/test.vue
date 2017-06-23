<template>
    <div class="menu">
        <div @click="toggleWidth">toggle</div>
        <div class="menu-item">
            <div class="menu-item-top ui-flex">
                <div>icon</div>
                <div>一级菜单</div>
                <div>&gt;</div>
            </div>
            <div class="menu-item-list">
                <div>111</div>
                <div>222</div>
                <div>333</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                width:[200,50],
                state:true
            };
        },
        methods: {

        },
        computed:{
            getWidth:{

            }
        },
        mounted() {
            this.restaurants = this.data.map(function (item) {
                let obj={};
                obj.value=item.theName;
                obj.code=item.code;
                return obj;
            });
        }
    }
</script>

<style lang="scss">
    @import "../static/css/ui";
    .menu{
        overflow-y: auto;
    }
</style>
