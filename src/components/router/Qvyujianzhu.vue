<template>
    <div class="ydgl">
        <div class="ydgl_top">
            <div class="ydglt_left">
                <div class="ydgltl">
                    区域列表
                </div>
                <div class="ydgltl_table">
                    <div class="ydt_bottom aaa">
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
                                    <span class="el-icon-delete">删除</span>
                                    <span class="el-icon-edit-outline">修改</span>
                                    <span class="el-icon-circle-plus">添加建筑</span>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div class="qvy_bottom">
                    <div class="fa fa-cubes" @click="glhysClick()">管理会议室</div>
                    <div class="glyphicon glyphicon-plus">添加区域</div>
                </div>
            </div>
            <div class="ydglt_right">
                <div class="ydgltl">
                    <span class="keji">奥贝科技园</span>
                    建筑一览
                </div>

                <div class="ydgltl_table">
                    <div class="ydt_bottom bbb">
                        <table border="1" cellspacing="0" cellpadding="10" bordercolor="#e4e7e8">
                            <tr class="tr_top">
                                <td width='128'>园区
                                    <span class="sanjiao" @click="sjClick($event)">
                                        <span class="dlColor">&#9650;</span>
                                        <span>&#9660;</span>
                                    </span>
                                </td>
                                <td width='87'>编号</td>
                                <td width='71'>会议室数量</td>
                                <td width='72'></td>

                            </tr>
                            <tr v-for="(item,index) in tabldDate1" :key="index" @click="tabClick1($event,index)">
                                <td>{{item.yuanqu}}</td>
                                <td>{{item.bianhao}}</td>
                                <td>{{item.hysl}}</td>
                                <td>
                                    <span class="el-icon-delete"></span>
                                    <span class="el-icon-edit-outline"></span>
                                </td>


                            </tr>
                        </table>
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
                }],
                tabldDate1: [{
                    yuanqu: "奥贝科技园",
                    bianhao: "10-A座",
                    hysl: 7,
                }, {
                    yuanqu: "奥贝科技园",
                    bianhao: "10-A座",
                    hysl: 7,
                }, {
                    yuanqu: "奥贝科技园",
                    bianhao: "10-A座",
                    hysl: 7,
                }, {
                    yuanqu: "奥贝科技园",
                    bianhao: "10-A座",
                    hysl: 7,
                }, {
                    yuanqu: "奥贝科技园",
                    bianhao: "10-A座",
                    hysl: 7,
                }, {
                    yuanqu: "奥贝科技园",
                    bianhao: "10-A座",
                    hysl: 7,
                }, {
                    yuanqu: "奥贝科技园",
                    bianhao: "10-A座",
                    hysl: 7,
                }, {
                    yuanqu: "奥贝科技园",
                    bianhao: "10-A座",
                    hysl: 7,
                }, {
                    yuanqu: "奥贝科技园",
                    bianhao: "10-A座",
                    hysl: 7,
                }, {
                    yuanqu: "奥贝科技园",
                    bianhao: "10-A座",
                    hysl: 7,
                },],
                indexClick: 1,
            };
        },
        methods: {
            tabClick(e, index) {
                $('.aaa tr').css({ 'backgroundColor': "white" }).find('td').css({ "color": "#454545" })
                $(e.currentTarget).css({ 'backgroundColor': "orange" }).find('td').css({ "color": "white" })

            },
            tabClick1(e, index) {
                $('.bbb tr').css({ 'backgroundColor': "white" }).find('td').css({ "color": "#454545" })
                $(e.currentTarget).css({ 'backgroundColor': "orange" }).find('td').css({ "color": "white" })

            },
            sjClick(e) {
                var indexC = this.indexClick++ % 2;
                console.log(indexC);
                $(e.currentTarget)
                    .find("span")
                    .removeClass("dlColor");
                $(e.currentTarget)
                    .find("span")
                    .eq(indexC)
                    .addClass("dlColor");
            },
            glhysClick(){ 
                this.$store.commit('asdiColor',"/hysgl")
                this.$router.push('/hysgl')               
            }
        }
    };
</script>

<style scoped>
    .ydgl {
        width: 100%;
        height: 100%;
        padding: 20px 15px;
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

    .qvy_bottom {
        width: 100%;
        height: 36px;
        margin-top: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .qvy_bottom>div {
        width: 94px;
        height: 28px;
        font-size: 12px;
        font-weight: normal;
        line-height: 28px;
        text-align: center;
        background: #fff;
        color: #333;
        cursor: pointer;
        border: 1px solid #eee;
        margin: 0 5px;
    }

    .qvy_bottom>div:hover {
        background: #eee;
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