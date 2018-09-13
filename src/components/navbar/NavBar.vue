<template>
    <div class="nav_bar">
        <div class="navb_left">
            <img src="../../assets/imgs/logo.png" alt="">
            <h3>会议预定系统</h3>
            <span>/</span>
            <div class="myshouye">首页</div>
        </div>
        <div class="navb_conte">
            <span class="el-icon-search"></span>
            查看当前页面对应的
            <span class="el-icon-edit"></span>
            工作台设置
        </div>
        <div class="navb_right">
            <div class="navbr_left">
                <span class="glyphicon glyphicon-user">admin</span>
                <span>管理员</span>
            </div>
            <div class="navbr_rig">
                <span class="glyphicon glyphicon-share"></span>
                <span>退出</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scope>
    .nav_bar {
        width: 100%;
        background-color: white;
        height: 60px;
        border-bottom: 2px solid #007aff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px 5px;
        box-sizing: border-box;
    }

    .navb_left {
        width: 370px;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .navb_left>img {
        height: 50px;
    }

    .navb_left>h3 {
        padding: 0;
        margin: 0;
        width: 131px;
        height: 100%;
        line-height: 40px;
        font-size: 18px;
        font-weight: bold;
        margin-left: 8px;
        color: #333;
    }

    .navb_left>div {
        /* width: 100%; */
        height: 24px;
        background-color: #007aff;
        color: white;
        line-height: 24px;
        font-size: 12px;
        text-align: center;
        padding: 0 3px;
    }

    .navb_left>span {        
        display: block;
        width: 4px;
        height: 20px;
        font-weight: 100;
        margin:0 10px;
        color: #333;
    }

    .navb_conte {
        width: 288px;
        height: 30px;
        font-size: 13px;
        border-radius: 3px;
        color: #454545;
        background-color: #f6f6f6;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .navb_conte:hover {
        background-color: #eeeeee;
        border: 1px solid lightgray;
    }

    .navb_right {
        width: 13%;
        height: 24px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 11px;
        font-weight: 400;
        color: #333;
    }

    .navbr_left {
        width: 125px;
        height: 100%;
        border: 1px solid #eee;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 3px;

    }

    .navbr_left>span {
        display: inline-block;
        width: 50%;
        line-height: 24px;
        text-align: center;
        padding: 0 1px;
        box-sizing: border-box;
    }

    .navbr_left>span:nth-child(1) {
        border-right: 1px solid #eee;
        background-color: #f6f6f6;
    }
    .navbr_rig{
        width: 36px;
        height: 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>