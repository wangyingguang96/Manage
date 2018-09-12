<template>
    <div class="home">
        <div class="homeb">
            <div class="hb_top">
                <h2>
                    <span class="fa fa-wpforms"></span>
                    会议室预定规则
                </h2>
                <p>1. 最多允许提前 3 周（21天）预定。 </p>
                <p>2. 每人在 3 周之内最多可预定 5 次，超过 5 次无法继续预定</p>
                <p> 3. 非开放预定会议室，需要先在【预定会议室】中提交预定申请，管理员在后台审批通过后，预定才能生效。</p>
                <p> 4. 单次预定超过 3 个小时，需要fab fa-wpforms先在【预定会议室】中提交预定申请，管理员在后台审批后，预定才能生效。</p>
                <p class="pbgcolor">5. 超过 15 分钟未按时间到达预定会议室，视为放弃使用，其他用户有权抢占。 预定会议室
                </p>
            </div>
            <div class="hb_bottom">

                <div class="hbb_cont" @mouseenter="jiaEnter($event)" @mouseleave="jiaLeave($event)">
                    <span class="glyphicon glyphicon-folder-close"></span>
                    <span class="glyphicon glyphicon-plus span_1"></span>
                    <p>
                        <a href="#/yuding">预定会议室</a>
                    </p>
                </div>

                <div class="hbb_cont" @mouseenter="duiEnter($event)">
                    <span class="glyphicon glyphicon-folder-close"></span>
                    <span class="span_1">
                        <span class="glyphicon glyphicon-ok"></span>
                    </span>

                    <p>
                        <a href="#/wodeyuding">查看我的预定</a>
                    </p>
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
        methods: {
            jiaEnter(e) {
                $(e.currentTarget)
                    .find(".span_1")
                    .css({ transform: "rotate(360deg)" });
            },
            jiaLeave(e) {
                $(e.currentTarget)
                    .find(".span_1")
                    .css({ transform: "rotate(0deg)" });
            },

            duiEnter(e) {
                $(e.currentTarget).find(".span_1>span").stop().animate({ 'top': "50px" }, 150, function () {
                    $(this).css({ 'top': "0px" })
                })
            }
        }
    };
</script>

<style scoped>
    .home {
        width: 100%;
        height: 100%;
        background-color: #e4e7e8;
    }

    .homeb {
        width: 880px;
        height: 500px;
        margin: 0 auto;
        padding: 15px 10px;
        box-sizing: border-box;
    }

    .hb_top * {
        padding: 0;
        margin: 0;
    }

    .hb_top h2 {
        font-size: 22px;
        font-weight: bold;
        line-height: 32px;
        color: #333;
        font-family: "PingFang SC";
        margin: 18px 0;
    }

    .hb_top p {
        font-size: 13px;
        font-weight: 100;
        line-height: 30px;
        height: 30px;
        font-family: "微软雅黑";
        padding: 0 4px;
        box-sizing: border-box;
        margin-top: 5px;
    }

    .pbgcolor {
        background-color: #ffc200;
        color: white;
        width: 535px;
    }

    .hb_bottom {
        font-size: 128px;
        width: 100%;
        display: flex;
        justify-content: space-around;
    }
    .hb_bottom a{
        color: #333;
    }

    .hbb_cont {
        width: 40%;
        height: 220px;
        text-align: center;
        position: relative;
        margin-top: 20px;
    }

    .span_1 {
        display: inline-block;
        font-size: 55px;
        color: white;
        position: absolute;
        top: 65px;
        left: 145px;
        transition: all 0.5s linear;
        transform: rotate(0deg);
    }

    .span_1>span {
        position: relative;
        /* transition: all 0.1s linear; */
    }

    .hbb_cont p {
        font-weight: 100;
        font-size: 32px;
        margin-top: -20px;
    }
</style>