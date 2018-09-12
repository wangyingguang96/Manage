<template>
    <div class="wdyd_box">
        <div class="wdyd">
            <div class="wdyd_t">
                <div class="wdydt_top">
                    <span class="el-icon-circle-check-outline">&nbsp;我的预定</span>
                </div>
                <div class="ydt_bottom">
                    <table border="1" cellspacing="0" cellpadding="10" bordercolor="#e4e7e8">
                        <tr class="tr_top">
                            <td width='70'>ID
                                <span class="sanjiao" @click="sjClick($event)">
                                    <span class="dlColor">&#9650;</span>
                                    <span>&#9660;</span>
                                </span>
                            </td>
                            <td width='200'>预定时间</td>
                            <td width='232'>事由</td>
                            <td width='135'>楼号</td>
                            <td width='57'>层</td>
                            <td width='151'>会议室名</td>
                            <td width='70'>容量</td>
                            <td width='200'>开始时间</td>
                            <td width='200'>结束时间</td>
                            <td width='83'>电视</td>
                            <td width='83'>投影仪</td>
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
            </div>
            <div class="wdyd_b">
                <div class="wdydt_top">
                    <span>我的申请</span>
                </div>
                <div class="ydt_bottom1">
                    <table border="1" cellspacing="0" cellpadding="10" bordercolor="#e4e7e8">
                        <tr class="tr_top">
                            <td width='70'>ID
                                <span class="sanjiao" @click="sjClick($event)">
                                    <span class="dlColor">&#9650;</span>
                                    <span>&#9660;</span>
                                </span>
                            </td>
                            <td width='200'>申请时间</td>
                            <td width='232'>事由</td>
                            <td width='135'>楼号</td>
                            <td width='57'>层</td>
                            <td width='151'>会议室名</td>
                            <td width='70'>容量</td>
                            <td width='200'>开始时间</td>
                            <td width='200'>结束时间</td>
                            <td width='83'>状态</td>
                            <td width='83'>批复</td>
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

                <div class="wdyd_jxsq">
                    <a href="#/yuding">继续申请预定会议室</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
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
    .wdyd_box {
        width: 100%;
        height: 100%;
        padding: 10px;
        box-sizing: border-box;
    }

    .wdyd {
        width: 1615px;
        margin: 30px auto;
    }

    .wdyd_t {
        width: 100%;
        height: 240px;
        background-color: white;
    }

    .wdydt_top {
        width: 100%;
        height: 39px;
        background-color: #222;
        line-height: 39px;
        padding: 0 15px;
        box-sizing: border-box;
    }

    .wdydt_top>span {
        color: white;
    }

    .wdyd_b {
        width: 100%;
        height: 280px;
    }


    .ydt_bottom {
        width: 100%;
        height: 270px;
        background-color: white;
        /* overflow-y: scroll; */
    }
    .ydt_bottom1{
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

    .wdyd_jxsq{
        width: 100%;
        height: 36px;
        background-color: white;
        border-top: 1px solid #e4e7e8;
        border-bottom: 1px solid #e4e7e8;
        text-align: center;
        line-height: 36px;
    }
    .wdyd_jxsq>a{
        display: inline-block;
        width: 130px;
        height: 26px;
        border: 1px solid #e4e7e8;
        font-size: 12px;
        text-align: center;
        line-height: 26px;
        color: #454545;
        background-color: #f6f6f6;
    }
    .wdyd_jxsq>a:hover{
        background-color: #e4e7e8;
        text-decoration: none;
        border: 1px solid #b7b7b7;
    }
</style>