<template>
    <div class="yuding">
        <div class="yd">
            <div class="yd_top">
                <div class="ydt_top">
                    <p class="bgYeColor">操作提示</p>
                    ：筛选会议室之后，在日历中可直接框选时间段预定或提交申请。
                </div>
                <div class="ydt_nav">
                    <div class="ydtn_l">
                        <i class="glyphicon glyphicon-map-marker">区域</i>
                        <div class="ydtnl_input">
                            <el-form :inline="true" :model="formInline" class="demo-form-inline">
                                <el-form-item label="">
                                    <el-select v-model="formInline.region" placeholder="北京市海淀区-奥北科技园">
                                        <el-option label="北京市海淀区-奥北科技园" value="shanghai"></el-option>
                                        <el-option label="上海市浦东新区-张江高科" value="beijing"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-form>
                        </div>
                    </div>

                    <div class="ydth_lh">
                        <i class="fa fa-building">楼号</i>
                        <div class="ydtnlh_input">
                            <el-form :inline="true" :model="formInline" class="demo-form-inline">
                                <el-form-item label="">
                                    <el-select v-model="formInline.region1" placeholder="8号-1">
                                        <el-option label="8号-1" value="shanghai "></el-option>
                                        <el-option label="8号-2" value="beijing "></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-form>
                        </div>
                    </div>

                    <div class="ydthc_lh">
                        <i class="glyphicon">层</i>
                        <div class="ydtnceng_input">
                            <input type="text">
                        </div>
                    </div>
                    <div class="ydthc_lh">
                        <i class="glyphicon">会议室编号</i>
                        <div class="ydtnceng_input">
                            <input type="text">
                        </div>
                    </div>

                    <div class="ydthc_lh">
                        <i class="glyphicon glyphicon-globe"> 容量</i>
                        <div class="ydtncenrl_input">
                            <input type="text" :value="valu1"> ~
                            <input type="text" :value="valu2">
                        </div>
                    </div>

                    <div class="ydthct_lh">
                        <div>
                            <i class="fa fa-video-camera">有投影仪器</i>
                            <el-checkbox v-model="checked"></el-checkbox>
                        </div>
                        <div>
                            <i class="fa fa-desktop">有电视</i>
                            <el-checkbox v-model="checked1"></el-checkbox>
                        </div>
                    </div>

                </div>
                <div class="ydt_bottom">
                    <table border="1" cellspacing="0" cellpadding="10" bordercolor="#e4e7e8">
                        <tr class="tr_top">
                            <td width='181'>楼号
                                <span class="sanjiao" @click="sjClick($event)">
                                    <span class="dlColor">&#9650;</span>
                                    <span>&#9660;</span>
                                </span>
                            </td>
                            <td width='110'>楼层</td>
                            <td width='175'>会议层编号</td>
                            <td width='175'>名称</td>
                            <td width='87'>容量</td>
                            <td width='131'>电视</td>
                            <td width='131'>投影</td>
                            <td width='219'>开放预定</td>
                            <td width='351'>描述</td>
                            <td width='73'></td>
                        </tr>
                        <tr v-for="(item,index) in tabldDate" :key="index" @click="tabClick($event,index)">
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
                        </tr>
                    </table>
                </div>
            </div>
            <div class="yd_bottom">
                <div class="ydb_top">
                    <span class="table_bianhao"></span>
                    会议室预定一览
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
    </div>
</template>

<script>
    export default {
        data() {
            return {
                formInline: {
                    region: '',
                    region1: ''
                },
                checked: true,
                checked1: false,
                valu1: "0",
                valu2: "9999",
                indexClick: 1,
                tabldDate: [{
                    lohao: "10-A座",
                    louceng: "1",
                    bianh: "1-101",
                    name: "大会堂",
                    rongl: "999",
                    diansh: true,
                    touying: true,
                    kaifang: "否",
                    miaos: "此会议预定需要经管理员审批"
                }, {
                    lohao: "10-A座",
                    louceng: "1",
                    bianh: "1-102",
                    name: "大会堂",
                    rongl: "999",
                    diansh: true,
                    touying: true,
                    kaifang: "是",
                    miaos: "此会议预定需要经管理员审批"
                }, {
                    lohao: "10-A座",
                    louceng: "1",
                    bianh: "1-101",
                    name: "大会堂",
                    rongl: "999",
                    diansh: false,
                    touying: true,
                    kaifang: "是",
                    miaos: "此会议预定需要经管理员审批"
                }, {
                    lohao: "10-A座",
                    louceng: "1",
                    bianh: "1-103",
                    name: "大会堂",
                    rongl: "999",
                    diansh: true,
                    touying: true,
                    kaifang: "是",
                    miaos: "此会议预定需要经管理员审批"
                }, {
                    lohao: "10-A座",
                    louceng: "1",
                    bianh: "1-104",
                    name: "大会堂",
                    rongl: "999",
                    diansh: true,
                    touying: false,
                    kaifang: "是",
                    miaos: "此会议预定需要经管理员审批"
                }]
            }
        },
        methods: {
            tabClick(e, index) {
                $('tr').css({ 'backgroundColor': "white" }).find('td').css({ "color": "#454545" })
                $(e.currentTarget).css({ 'backgroundColor': "orange" }).find('td').css({ "color": "white" })

                $('.table_bianhao').html(this.tabldDate[index].bianh)
            },
            sjClick(e) {
                var indexC = this.indexClick++ % 2
                console.log(indexC)
                $(e.currentTarget).find('span').removeClass('dlColor')
                $(e.currentTarget).find('span').eq(indexC).addClass('dlColor')
            }
        }
    }
</script>

<style scoped>
    .yuding {
        width: 100%;
        height: 100%;
        padding: 10px;
        box-sizing: border-box;
    }

    .yd {
        width: 100%;
        height: 100%;
        background-color: white;
        overflow: hidden;
        /* padding: 10px;
        box-sizing: border-box; */
    }

    .yd_top {
        width: 100%;
        height: 300px;
        /* overflow-y: scroll; */
    }

    .ydt_top {
        width: 100%;
        height: 39px;
        background-color: #222;
        color: white;
        font-size: 14px;
        line-height: 39px;
        padding: 0 3px;
        box-sizing: border-box;
    }

    .ydt_top>p {
        display: inline-block;
        width: 66px;
        height: 22px;
        text-align: center;
        line-height: 22px;
    }

    .bgYeColor {
        background-color: #ffc200;
    }

    .ydt_nav {
        width: 100%;
        height: 38px;
        background-color: white;
        padding: 0 8px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .ydtn_l {
        height: 38px;
        display: flex;
        align-items: center;
    }

    .ydtn_l>i {
        font-size: 14px;
        font-weight: 900;
        margin-right: 35px;
    }

    .ydtnl_input {
        width: 320px;
        height: 28px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .ydth_lh,
    .ydthc_lh,
    .ydthct_lh {
        height: 30px;
        display: flex;
        align-items: center;
    }

    .ydth_lh>i {
        margin-right: 35px;
    }

    .ydtnlh_input {
        width: 156px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .ydtnceng_input {
        width: 99px;
        height: 28px;
    }

    .ydthc_lh>i {
        margin-right: 5px;
    }

    .ydtnceng_input>input {
        width: 99px;
        height: 28px;
        border-radius: 3px;
        padding: 0 3px;
        box-sizing: border-box;
        border: 1px solid #c0c4cc;
    }

    .ydtncenrl_input>input {
        width: 54px;
        height: 28px;
        border-radius: 3px;
        padding: 0 3px;
        box-sizing: border-box;
        border: 1px solid #c0c4cc;
    }

    .ydthct_lh>div {
        height: 14px;

    }

    .ydthct_lh>div:nth-child(1) {
        margin-right: 50px;
    }
    /* 表格 */
    .ydt_bottom {
        width: 100%;
        max-height: calc(100% - 39px - 38px);
        overflow-y: scroll;
    }

    table {
        width: 100%;
        max-height: 100%;
        table-layout: fixed;
    }

    table>tr {
        height: 36px;
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

    .ydb_top {
        width: 100%;
        height: 33px;
        border-top: 1px solid #c0c4cc;
        border-bottom: 1px solid #c0c4cc;
        line-height: 33px;
        padding: 0 5px;
        box-sizing: border-box;
    }

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
    .yuding .ydtnl_input .el-input {
        width: 320px;
    }

    .yuding .ydtnl_input .el-input__inner {
        height: 28px;
    }

   .yuding .el-form-item {
        padding: 0;
        margin: 0;
    }

   .yuding .ydtnlh_input .el-input {
        width: 155px;
    }

    .yuding .ydtnlh_input .el-input__inner {
        height: 30px;
    }

    /* .ydthct_lh .el-checkbox__inner {
        width: 20px;
        height: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    } */
</style>