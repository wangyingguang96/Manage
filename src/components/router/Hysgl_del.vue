<template>
    <div class="add" @click="mbClick($event)">
        <div>
            <div class="from_box" @click="fromClick($event)">
                <div class="nav_top">
                    <span>消息</span>
                    <span class="el-icon-close" @click="fbbfouClick('cha')"></span>
                </div>
                <div class="fb_cont">
                    确定要删除 <span class="bgco">{{delbiahao}}</span> 吗?
                </div>
                <div class="fb_bot">
                    <div @click="fbbfouClick('fou')">否</div>
                    <div @click="fbbfouClick('shi')">是</div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {};
        },
        mounted() {
            $(".from_box").animate({ opacity: "1" }, 500);
           
        },
        props:['delbiahao'],
      
        methods: {
            mbClick() {
                var that = this;
                this.$store.commit("delClick", false);
                $(".from_box").animate({ opacity: "0" }, 500, function () {
                    that.$store.commit("addClick", false);
                });
            },
            fromClick(e) {
                e.stopPropagation()
            },
            fbbfouClick(parem) {
                if (parem == "shi") {
                }
                this.$store.commit("delClick", false);
                $(".from_box").animate({ opacity: "0" }, 500);
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
        width: 175px;
        height: 130px;
        background-color: white;
        position: absolute;
        top: 0px;
        left: 0px;
        bottom: 0;
        right: 0;
        margin: auto;
        border: 1px solid white;
        box-sizing: border-box;
        opacity: 0;
    }

    .nav_top {
        width: 100%;
        height: 30px;
        color: #333;
        font-size: 14px;
        padding: 0 10px;
        border: 1px solid #eee;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .fb_cont {
        width: 100%;
        height: 56px;
        border-bottom: 1px solid #eee;
        text-align: center;
        padding: 10px;
        box-sizing: border-box;
    }

    .bgco {
        display: inline-block;
        width: 42px;
        height: 20px;
        background-color: #007aff;
        text-align: center;
        line-height: 20px;
        color: white;
    }

    .fb_bot {
        width: 100%;
        height: 41px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    /*#ededed*/
    .fb_bot>div {
        width: 38px;
        height: 28px;
        background-color: #f6f6f6;
        border: 1px solid #ccc;
        color: #2b2b2b;
        text-align: center;
        line-height: 28px;
        margin: 0 5px;
        cursor: pointer;
    }
</style>