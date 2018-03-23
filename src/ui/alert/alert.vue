<template>
    <div class="alert">
        <div class="alert__container">
            <div class="alert__header">
                <div class="alert__title">{{title}}</div>
                <div class="alert__close">&times;</div>
            </div>
            <div class="alert__content">{{msg}}</div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "UiAlert",
        props:{
            title:String,
            msg:String,
        },
    }
</script>

<style lang="scss" scoped>
    .alert{
        position: fixed;
        width: 100%;
        top: 0;
        bottom:0;
        background-color: rgba(0,0,0,.35);
        .alert__container{
            width: 200px;
            background-color: #ffffff;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
        }
        .alert__header{
            position: relative;
            line-height: 30px;
            padding: 0 16px;
            background-color: #8ba4af;
        }
        .alert__close{
            position: absolute;
            background-color: rgba(0,0,0,.35);
            right: 0;
            top: 0;
            padding: 0 16px;
            cursor: pointer;
        }
        .alert__close:hover{
            background-color: rgba(0,0,0,.5);
        }
        .alert__content{
            padding: 16px;
        }
    }
</style>