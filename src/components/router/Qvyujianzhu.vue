<template>
    <div class="ydgl">
        <div class="ydgl_top">
            <div class="ydglt_left">
                <div class="ydgltl">
                    区域列表
                </div>

                <div class="ydgltl_table">
                    <div class="ydt_bottom">
                        <table border="1" cellspacing="0" cellpadding="10" bordercolor="#e4e7e8">
                            <tr class="tr_top">
                                <td width='28'>ID:</td>
                                <td width='146'>区域名称</td>
                                <td width='146'>省市区</td>
                                <td width='286'>地址</td>
                                <td width='191'>

                                </td>
                            </tr>
                            <tr v-for="(item,index) in tabldDate" :key="index" @click="tabClick($event,index)">
                                <td>{{item.id}}</td>
                                <td>{{item.name}}</td>
                                <td>{{item.sheng}}</td>
                                <td>{{item.address}}</td>
                                <td>

                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            <div class="ydglt_right">
                <div class="ydgltl">
                    <span class="keji">奥贝科技园</span>
                    建筑一览
                </div>

                <!-- <div class="ydgltl_table">
                    <div class="ydt_bottom">
                        <table border="1" cellspacing="0" cellpadding="10" bordercolor="#e4e7e8">
                            <tr class="tr_top">
                                <td width='28'>ID
                                    <span class="sanjiao" @click="sjClick($event)">
                                        <span class="dlColor">&#9650;</span>
                                        <span>&#9660;</span>
                                    </span>
                                </td>
                                <td width='146'>区域名称</td>
                                <td width='146'>省市区</td>
                                <td width='286'>地址</td>
                                <td width='191'></td>
                            </tr>
                            <tr v-for="(item,index) in tabldDate" :key="index" @click="tabClick($event,index)">
                                <td>{{item.lohao}}</td>
                                <td>{{item.louceng}}</td>
                                <td>{{item.bianh}}</td>
                                <td>{{item.name}}</td>
                                <td>{{item.rongl}}</td>

                            </tr>
                        </table>
                    </div>
                </div> -->
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
                    id: "5",
                    name: "奥北科技园",
                    sheng: "北京市海淀区",
                    address: "北京市海淀区芳清园小区南门",
                }, {
                    id: "5",
                    name: "奥北科技园",
                    sheng: "北京市海淀区",
                    address: "北京市海淀区芳清园小区南门",
                }, {
                    id: "5",
                    name: "奥北科技园",
                    sheng: "北京市海淀区",
                    address: "北京市海淀区芳清园小区南门",
                }, {
                    id: "5",
                    name: "奥北科技园",
                    sheng: "北京市海淀区",
                    address: "北京市海淀区芳清园小区南门",
                }, {
                    id: "5",
                    name: "奥北科技园",
                    sheng: "北京市海淀区",
                    address: "北京市海淀区芳清园小区南门",
                }, {
                    id: "5",
                    name: "奥北科技园",
                    sheng: "北京市海淀区",
                    address: "北京市海淀区芳清园小区南门",
                }, {
                    id: "5",
                    name: "奥北科技园",
                    sheng: "北京市海淀区",
                    address: "北京市海淀区芳清园小区南门",
                }, {
                    id: "5",
                    name: "奥北科技园",
                    sheng: "北京市海淀区",
                    address: "北京市海淀区芳清园小区南门",
                }, {
                    id: "5",
                    name: "奥北科技园",
                    sheng: "北京市海淀区",
                    address: "北京市海淀区芳清园小区南门",
                }, {
                    id: "5",
                    name: "奥北科技园",
                    sheng: "北京市海淀区",
                    address: "北京市海淀区芳清园小区南门",
                }]
            };
        },
        methods: {
            tabClick(e, index) {
                $('tr').css({ 'backgroundColor': "white" }).find('td').css({ "color": "#454545" })
                $(e.currentTarget).css({ 'backgroundColor': "orange" }).find('td').css({ "color": "white" })
                $('.ydgltl>span').html(this.tabldDate[index].bianh)
            },
        }
    };
</script>

<style scoped>
    .ydgl {
        width: 100%;
        height: 100%;
        padding: 10px;
        box-sizing: border-box;
    }

    .ydgl_top {
        width: 1163px;
        height: 460px;
        background-color: white;
        display: flex;
        justify-content: space-between;
    }

    .ydglt_left {
        width: 800px;
        height: 100%;
        box-sizing: border-box;
    }

    .ydgltl {
        width: 100%;
        height: 39px;
        background-color: #222;
        color: white;
        line-height: 39px;
        padding: 0 5px;
        box-sizing: border-box;
    }

    .ydglt_right {
        width: 360px;
        height: 100%;
        background-color: lightblue;
    }

    .keji {
        display: inline-block;
        width: 70px;
        height: 18px;
        background-color: #007aff;
        text-align: center;
        line-height: 18px;
        font-size: smaller;
    }

    /* 表格 */
    .ydgltl_table {
        width: 100%;
        height: calc(100% - 39px - 45px);
    }

    .ydt_bottom {
        width: 100%;
        max-height: 100%;
        /* overflow: auto; */
    }

    table {
        width: 100%;
        height: 100%;
        table-layout: fixed;
    }

    table>tr {
        height: 33px;
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
        /* position: fixed;
        width: 1232px; */
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

</style>