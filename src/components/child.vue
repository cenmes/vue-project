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
                this.input="";
            }
        },
        computed: {},
        created(){

        },
        mounted(){

        },
        watch: {}
    }
</script>

<style lang="scss">
    .child {

    }
</style>
