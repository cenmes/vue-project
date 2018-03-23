<template>
    <div class="child">
        <input type="text" v-model="input">
    </div>
</template>

<script>
    export default {
        data () {
            return {
                input:""
            }
        },
        methods: {
            refresh(){
                alert("刷新子组件")
            }
        },
        computed: {},
        created(){
            this.$on('test',function () {
                console.log("test",new Date().getTime());
            });
            this.$emit("test");
        },
        mounted(){

        },
        watch: {
            input(val){
                this.$parent.refresh(this.input);
            }
        }
    }
</script>

<style lang="scss">
    .child {

    }
</style>
