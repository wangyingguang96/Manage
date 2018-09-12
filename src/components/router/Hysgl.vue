<template>
    <div class="hysgl">
        <div class="hysgl_box">
            <div class="hysglt">
                <div class="wdydt_top">
                    会议室查询条件
                </div>
                <div class="cxtj_botom">
                    <div class="ydt_nav">
                        <div class="ydtn_l">
                            <i class="glyphicon">选择区域</i>
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
                            <i class="fa ">楼号</i>
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
                            <div class="ydtnceng_input1">
                                <input type="text">
                            </div>
                        </div>

                        <div class="addqyu">
                            <a href="#">
                                <span class="el-icon-circle-plus"></span> 添加区域建筑
                            </a>
                        </div>

                        <div class="addqyu">
                            Excel导入会议室
                        </div>

                        <div class="addqyu" @click="addClick()">
                            <span class="el-icon-circle-plus"></span> 添加会议室
                        </div>


                    </div>
                </div>
            </div>
            <div class="hysglt_bottom">
                <div class="wdydt_top">
                    查询结果
                </div>
                <div class="hysgl_bottom_bottom">
                    <div class="ydt_bottom">
                        <table border="1" cellspacing="0" cellpadding="10" bordercolor="#e4e7e8">
                            <tr class="tr_top">
                                <td width='169'>楼号
                                    <span class="sanjiao" @click="sjClick($event)">
                                        <span class="dlColor">&#9650;</span>
                                        <span>&#9660;</span>
                                    </span>
                                </td>
                                <td width='104'>楼层</td>
                                <td width='169'>会议室编号</td>
                                <td width='128'>名称</td>
                                <td width='87'>容量</td>
                                <td width='251'>描述</td>
                                <td width='136'>电视</td>
                                <td width='136'>投影</td>
                                <td width='136'>开放预定</td>
                                <td width='136'>是否可用</td>
                                <td width='210'></td>
                            </tr>
                            <tr v-for="(item,index) in tabldDate" :key="index" @click="tabClick($event,index)">
                                <td>{{item.lohao}}</td>
                                <td>{{item.louceng}}</td>
                                <td>{{item.bianh}}</td>
                                <td>{{item.name}}</td>
                                <td>{{item.rongl}}</td>
                                <td>
                                    {{item.miaos}}
                                </td>
                                <td>
                                    {{item.diansh}}
                                </td>
                                <td>
                                    {{item.touying}}
                                </td>
                                <td>{{item.kaifang}}</td>
                                <td>
                                    {{item.keyong}}
                                </td>
                                <td class="tab_buton">
                                    <span class="el-icon-delete"></span>
                                    <span class="el-icon-edit-outline"></span>
                                    <span class="el-icon-picture"></span>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            <HysglAdd v-if="addhy"></HysglAdd>
        </div>
    </div>
</template>

<script>
    import HysglAdd from './Hysgl_add'
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
                indexClick: 1, tabldDate: [{
                    lohao: "10-A座",
                    louceng: "1",
                    bianh: "1-101",
                    name: "大会堂",
                    rongl: "999",
                    miaos: "此会议预定需要经管理员审批",
                    diansh: '有',
                    touying: '有',
                    kaifang: "否",
                    keyong: "是"
                }, {
                    lohao: "10-A座",
                    louceng: "1",
                    bianh: "1-101",
                    name: "大会堂",
                    rongl: "999",
                    miaos: "此会议预定需要经管理员审批",
                    diansh: '有',
                    touying: '有',
                    kaifang: "否",
                    keyong: "是"
                }, {
                    lohao: "10-A座",
                    louceng: "1",
                    bianh: "1-101",
                    name: "大会堂",
                    rongl: "999",
                    miaos: "此会议预定需要经管理员审批",
                    diansh: '有',
                    touying: '有',
                    kaifang: "否",
                    keyong: "是"
                }, {
                    lohao: "10-A座",
                    louceng: "1",
                    bianh: "1-101",
                    name: "大会堂",
                    rongl: "999",
                    miaos: "此会议预定需要经管理员审批",
                    diansh: '有',
                    touying: '有',
                    kaifang: "否",
                    keyong: "是"
                }, {
                    lohao: "10-A座",
                    louceng: "1",
                    bianh: "1-101",
                    name: "大会堂",
                    rongl: "999",
                    miaos: "此会议预定需要经管理员审批",
                    diansh: '有',
                    touying: '有',
                    kaifang: "否",
                    keyong: "是"
                }]
            }
        },
        components: {
            HysglAdd
        },
        computed: {
            addhy() {
                return this.$store.state.addhy
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
            },
            //添加会议室
            addClick(){
                this.$store.commit('addClick',true)
            }
        }
    }
</script>

<style scoped>
    .hysgl {
        width: 100%;
        height: 100%;
        padding: 10px;
        box-sizing: border-box;
        overflow: hidden;
    }

    .hysgl_box {
        width: 100%;
        height: 100%;
        position: relative;
        /* background-color: lightblue; */
    }

    .hysglt {
        width: 100%;
        height: 108px;
        background-color: white;
    }

    .wdydt_top {
        width: 100%;
        height: 39px;
        background-color: #222;
        line-height: 39px;
        padding: 0 15px;
        box-sizing: border-box;
        color: white;
    }

    .cxtj_botom {
        width: 100%;
        height: calc(100% - 39px);
        display: flex;
        align-items: center;
    }


    /* 表格上面输入框 */
    .ydt_nav {
        width: 1100px;
        height: 45px;
        background-color: white;
        padding-left: 5px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .ydtn_l {
        height: 32px;
        width: 300px;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    .ydtn_l>i {
        display: block;
        width: 62px;
        height: 16px;
        color: #333;
        font-size: 12px;
    }

    .ydtnl_input {
        width: 224px;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .ydth_lh,
    .ydthc_lh,
    .ydthct_lh {
        height: 32px;
        display: flex;
        align-items: center;
    }

    .ydth_lh>i {
        display: inline-block;
        width: 28px;
        height: 32px;
        line-height: 32px;
        color: #333;
        font-size: 12px;
        margin-right: 10px;
    }

    .ydtnlh_input {
        width: 85px;
        height: 38px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .ydtnceng_input {
        width: 54px;
        height: 30px;
    }

    .ydtnceng_input1 {
        width: 126px;
        height: 30px;
    }

    .ydthc_lh>i {
        margin-right: 5px;
    }

    .ydtnceng_input>input,
    .ydtnceng_input1>input {
        width: 100%;
        height: 100%;
        border-radius: 3px;
        padding: 0 3px;
        box-sizing: border-box;
        border: 1px solid #c0c4cc;
    }

    .ydtncenrl_input>input {
        width: 55px;
        height: 30px;
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

    .addqyu {
        border: 1px solid #eee;
        background: #f6f6f6;
        color: #454545;
        font-size: 14px;
        cursor: pointer;
        width: 110px;
        height: 34px;
        text-align: center;
        line-height: 34px;
        margin: 0 5px;
        font-weight: bold;
    }

    .addqyu:hover {
        background-color: #e4e7e8;
        text-decoration: none;
        border: 1px solid #b7b7b7;
    }

    .addqyu a {
        color: #454545;
    }

    .addqyu a:hover {
        text-decoration: none;
    }

    /* 下面表格 */
    .hysglt_bottom {
        width: 100%;
        height: calc(100% - 108px);
        background-color: white;
    }

    .hysgl_bottom_bottom {
        width: 100%;
        height: 100%;
    }

    /* 表格 */
    .ydt_bottom {
        width: 100%;
        max-height: calc(100% - 39px - 38px);
        /* overflow-y: scroll; */
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

    .tab_buton>span {
        display: inline-block;
        width: 22px;
        height: 22px;
        font-weight: 550;
        color: #454545;
        background-color: #f6f6f6;
        text-align: center;
        line-height: 22px;
    }
</style>


<style>
    .hysgl .ydtnl_input .el-input {
        width: 224px;
    }

    .hysgl .ydtnl_input .el-input__inner {
        height: 32px;
    }

    .hysgl .el-form-item {
        padding: 0;
        margin: 0;
    }

    .hysgl .ydtnlh_input .el-input {
        width: 85px;
    }

    .hysgl .ydtnlh_input .el-input__inner {
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