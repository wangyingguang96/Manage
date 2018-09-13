<template>
    <div class="add" @click="mbClick($event)">
        <div>
            <div class="from_box" @click="fromClick($event)">
                <div class="nav_top">
                    {{delbiahao}}
                </div>
                <div class="nav_con">
                    <el-carousel height="322px" arrow="always">
                        <el-carousel-item v-for="item in 4" :key="item">
                            <h3>{{ item }}</h3>
                        </el-carousel-item>
                    </el-carousel>
                </div>
                <div class="nav_bottom">
                    <div class="gb_box" @click="guanbiClick($event)">
                        关闭
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            };
        },
        props:['delbiahao'],
        mounted() {
            $(".from_box").animate({ opacity: "1" }, 500);
        },
        methods: {

            mbClick(e) {
                var that = this;
                $(".from_box").animate({ opacity: "0" }, 500, function () {
                    that.$store.commit('hyimgClick', false)
                });
            },
            fromClick(e) {
                e.stopPropagation();
            },
            guanbiClick(e) {
                var that = this;
                $(".from_box").animate({ opacity: "0" }, 500, function () {
                    that.$store.commit('hyimgClick', false)
                });                
            }
        }
    };
</script>

<style scoped>
    .add {
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.1);
        position: absolute;
        top: 0;
        left: 0;
    }

    .add>div {
        width: 100%;
        height: 100%;
        position: relative;
    }

    .from_box {
        width: 600px;
        height: 400px;
        background-color: white;
        position: absolute;
        top: 30px;
        left: 320px;
        border: 1px solid white;
        box-sizing: border-box;
        opacity: 0;
    }

    .nav_top {
        width: 100%;
        height: 39px;
        background-color: #222;
        color: #eee;
        font-size: 14px;
        line-height: 39px;
        padding-left: 10px;
        box-sizing: border-box;
    }

    .nav_con {
        width: 100%;
        height: 322px;
    }

    .nav_bottom {
        width: 100%;
        height: calc(100% - 322px - 39px);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .gb_box {
        width: 46px;
        height: 28px;
        background-color: #f6f6f6;
        border: 1px solid #ccc;
        color: #2b2b2b;
        text-align: center;
        line-height: 28px;
    }
</style>

<style>
    .el-carousel__button {
        width: 14px;
        height: 14px;
        border-radius: 50%;
        background-color: #2b2b2b;
    }
</style>