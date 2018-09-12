<template>
    <div class="ydsp_box">
        <div class="ydsp_top">
            <div class="ydspt_top">
                特殊预定申请列表
            </div>
            <div class="ydt_bottom">
                <table border="1" cellspacing="0" cellpadding="10" bordercolor="#e4e7e8">
                    <tr class="tr_top">
                        <td width='62'>ID
                            <span class="sanjiao" @click="sjClick($event)">
                                <span class="dlColor">&#9650;</span>
                                <span>&#9660;</span>
                            </span>
                        </td>
                        <td width='246'>会议室</td>
                        <td width='62'>容量</td>
                        <td width='113'>申请人</td>
                        <td width='209'>申请时间</td>
                        <td width='224'>事由</td>
                        <td width='113'>状态</td>
                        <td width='224'>批复</td>
                        <td width='92'>审批人</td>
                        <td width='335'>操作</td>
                    </tr>
                    <!-- <tr v-for="(item,index) in tabldDate" :key="index" @click="tabClick($event,index)">
                        <td>{{item.lohao}}</td>
                        <td>{{item.louceng}}</td>
                        <td>{{item.bianh}}</td>
                        <td>{{item.name}}</td>
                        <td>{{item.rongl}}</td>
                        <td>
                            <i :class="item.diansh?'el-icon-check':'el-icon-close'"></i>
                        </td>
                        <td>
                            <i :class="item.touying?'el-icon-check':'el-icon-close'"></i>
                        </td>
                        <td>
                            <span :class="item.kaifang == '否'?'bgColor':''">{{item.kaifang}}</span>
                        </td>
                        <td>{{item.miaos}}</td>
                        <td>
                            <span class="el-icon-picture"></span>
                        </td>
                    </tr> -->
                </table>
            </div>
            <div class="ydspt_bot">
                <div class="ydsptb_left">
                    <span class="el-icon-search">搜索</span>
                    <span class="el-icon-refresh">刷新</span>
                </div>
                <div class="ydsptb_cont">
                    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage3" :page-size="5"
                        layout="prev, pager, next, jumper" :total="5">
                    </el-pagination>
                </div>
                <div class="ydsptb_right">无数据显示</div>
            </div>
        </div>
        <div class="ydsp_bot">
            <div class="ydspt_top ydsb_bot">
                预定及申请情况一览。图例：
                <span>当前申请</span>
                <span>已预定</span>
                <span class="bgColor">其他申请</span>
            </div>
            <div class="ydb_content">
                <div class="ybd_button_box">
                    <div class="ybd_button">
                        <el-button size="mini" plain icon="el-icon-caret-left"></el-button>
                        <el-button size="mini" plain icon="el-icon-caret-right"></el-button>
                    </div>
                    <span>今天</span>
                </div>
                <h4>2018年9月11 – 17日</h4>
                <div class="ybd_butt">
                    <el-button size="mini" plain>月</el-button>
                    <el-button size="mini" plain class="bgColorB">周</el-button>
                    <el-button size="mini" plain>日</el-button>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                currentPage3: 1,
            }
        },
        methods: {
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            }
        }
    }
</script>

<style scoped>
    .ydsp_box {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    .ydsp_top {
        width: 100%;
        height: 38%;
        background-color: #ffffff;
    }

    .ydspt_top {
        width: 100%;
        height: 38px;
        background-color: #222;
        color: white;
        line-height: 38px;
        padding: 0 5px;
        box-sizing: border-box;
    }

    .ydsp_bot {
        width: 100%;
        height: calc(100% - 38%);
        background-color: white;
    }

    /* 表格 */
    .ydt_bottom {
        width: 100%;
        height: 270px;
        background-color: white;
        /* overflow-y: scroll; */
    }

    .ydt_bottom1 {
        width: 100%;
        height: 202px;
        background-color: white;
    }

    table {
        width: 100%;
        max-height: 100%;
        table-layout: fixed;
    }

    table>tr {
        height: 32px;
    }

    table>tr:hover {
        background-color: #f6f6f6;
    }

    td {
        text-align: center;
        color: #454545;
        cursor: pointer;
    }

    .tr_top {
        background-color: #f6f6f6;
        line-height: 36px;
    }

    .sanjiao {
        display: inline-block;
        width: 16px;
        height: 25px;
        position: relative;
        left: -10px;
    }

    .sanjiao>span {
        display: inline-block;
        font-size: 8px;
        width: 16px;
        height: 12px;
        position: absolute;
        color: #b7b7b7;
    }

    .dlColor {
        color: #444444 !important;
    }

    .sanjiao>span:last-child {
        top: 7px;
    }

    .el-icon-check {
        color: green;
        font-weight: bold;
    }

    .el-icon-close {
        color: red;
        font-weight: bold;
    }

    .bgColor {
        background-color: orange;
    }

    /* 特殊底部 */
    .ydspt_bot {
        width: 100%;
        height: 34px;
        font-size: 12px;
        padding: 0 10px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .ydsptb_left {
        width: 92px;
        height: 100%;
        line-height: 34px;
    }

    .ydsptb_left>span {
        padding-right: 5px;
        cursor: pointer;
    }

    .ydsptb_left>span:hover {
        font-weight: bold;
    }

    /* 分页 */
    .ydsptb_cont {
        width: 200px;
        height: 100%;
        padding-bottom: 2px;
        box-sizing: border-box;
    }

    .ydsptb_right {
        font-weight: 400;
        color: #333;
    }

    .ydsb_bot>span {
        padding: 1px 2px;
    }

    .ydsb_bot>span:nth-child(1) {
        background-color: red;
    }

    .ydsb_bot>span:nth-child(2) {
        color: #454545;
        background-color: #f6f6f6;
    }

    /*  */
    .ydb_content {
        width: 100%;
        height: 42px;
        padding: 0 5px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #c0c4cc;
    }

    .ydb_content h4 {
        color: #333;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 700;
    }

    .ybd_button_box {
        width: 100px;
        height: 25px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .ybd_button {
        width: 63px;
        height: 100%;
        display: flex;
        border: 1px solid #c0c4cc;
        border-radius: 8px;
        box-sizing: border-box;
        overflow: hidden;
    }

    .ybd_butt {
        width: 83px;
        height: 25px;
        display: flex;
        border: 1px solid #c0c4cc;
        border-radius: 3px;
        box-sizing: border-box;
    }

    .ybd_button .el-button {
        padding: 0;
        width: 50%;
        height: 100%;
        margin: 0;
        border: none;
        border-radius: 0;
        background-color: #f6f6f6;
    }

    .ybd_butt .el-button {
        padding: 0;
        width: calc(100% / 3);
        height: 100%;
        margin: 0;
        border: none;
        border-radius: 0;
    }

    .ybd_butt .el-button:nth-child(2) {
        border-right: 1px solid #c0c4cc;
    }

    .el-button:nth-child(1) {
        border-right: 1px solid #c0c4cc;
    }

    .bgColorB {
        background-color: #007aff;
        color: white;
    }
</style>

<style>
    .el-pagination button,
    .el-pagination,
    .el-pagination__jump {
        min-width: 20px !important;
        height: 22px !important;
        line-height: 22px !important;
    }

    .el-pager li {
        min-width: 20px;
        height: 22px;
        line-height: 22px;
    }

    .el-pagination__editor.el-input .el-input__inner {
        height: 22px;
        line-height: 22px;
    }
</style>