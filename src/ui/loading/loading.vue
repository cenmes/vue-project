
<template>
    <div class="loading">
        <div class="loading-box">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "UiLoading"
    }
</script>

<style lang="scss" scoped>
    .loading{
        width: 100%;
        height: 100%;
        background-color:transparent ;
        position: relative;
        .loading-box{
            width: 80px;
            height: 80px;
            position: absolute;
            left: 50%;
            margin-left: -20px;
            top:10px;
            -webkit-transform: scale(.5);
            transform: scale(.6);
            span {
                -webkit-animation: circle-round-fade 1s ease infinite;
                animation: circle-round-fade 1s ease infinite;
            }

            span {
                position: absolute;
                width: .8rem;
                height: .8rem;
                display: inline-block;
                border-radius: 50%;
                background: #1ABC9C;
            }

           span:nth-child(1) {
                top: 50%;
                left: 0;
                margin-top: -.4rem;
                -webkit-animation-delay: -1.04s;
                animation-delay: -1.04s;
            }

            span:nth-child(2) {
                top: .7rem;
                left: .7rem;
                -webkit-animation-delay: -.91s;
                animation-delay: -.91s;
            }

            span:nth-child(3) {
                top: 0;
                left: 50%;
                margin-left: -.4rem;
                -webkit-animation-delay: -.78s;
                animation-delay: -.78s;
            }

            span:nth-child(4) {
                right: .7rem;
                top: .7rem;
                -webkit-animation-delay: -.65s;
                animation-delay: -.65s;
            }

            span:nth-child(5) {
                right: 0;
                top: 50%;
                margin-top: -.4rem;
                -webkit-animation-delay: -.52s;
                animation-delay: -.52s;
            }

           span:nth-child(6) {
                bottom: .7rem;
                right: .7rem;
                -webkit-animation-delay: -.39s;
                animation-delay: -.39s;
            }

            span:nth-child(7) {
                bottom: 0;
                left: 50%;
                margin-left: -.4rem;
                -webkit-animation-delay: -.26s;
                animation-delay: -.26s;
            }

            span:nth-child(8) {
                left: .7rem;
                bottom: .7rem;
                -webkit-animation-delay: -.13s;
                animation-delay: -.13s;
            }
            @keyframes circle-round-fade {
                0% {
                    opacity: .25;
                    transform: scale(.2);
                }
                100% {
                    opacity: 1;
                    transform: scale(1);
                }
            }

            @-webkit-keyframes circle-round-fade {
                0% {
                    opacity: .25;
                    transform: scale(.2);
                }
                100% {
                    opacity: 1;
                    transform: scale(1);
                }
            }
        }
    }
</style>