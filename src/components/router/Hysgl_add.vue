<template>
    <div class="add" @click="mbClick($event)">
        <div>
            <div class="from_box" @click="fromClick($event)">
                <div class="nav_top">
                    添加会议室
                </div>
                <div class="form">
                    <form action="" @submit="fromSubmit($event)">
                        <div class="quyu">
                            <span class="qy_title">所属于区域</span>
                            <span class="qy_red">*</span>
                            <select name="" id="" class="qy_input" :model="formData.quyu">
                                <option value="北京市海淀区-奥北科技园">北京市海淀区-奥北科技园</option>
                                <option value="上海市浦东新区-张江高科">上海市浦东新区-张江高科</option>
                                <option value="北京市海淀区-奥北科技园">北京市海淀区-奥北科技园</option>
                            </select>
                        </div>

                        <div class="quyu">
                            <span class="qy_title">楼号</span>
                            <span class="qy_red">*</span>
                            <select name="" id="" class="qy_input" :model="formData.louhao">
                                <option value="">8号-1</option>
                                <option value="">8号-2</option>
                                <option value="">8号-3</option>
                            </select>
                        </div>

                        <div class="quyu">
                            <span class="qy_title">楼层</span>
                            <span class="qy_red">*</span>
                            <input type="text" :model="formData.louceng" class="qy_input">
                        </div>

                        <div class="quyu">
                            <span class="qy_title">会议室编号</span>
                            <span class="qy_red">*</span>
                            <input type="text" :model="formData.hybh" class="qy_input">
                        </div>

                        <div class="quyu">
                            <span class="qy_title">会议室名称</span>
                            <span class="qy_red">*</span>
                            <input type="text" :model="formData.hymc" class="qy_input">
                        </div>

                        <div class="quyu">
                            <span class="qy_title">容量</span>
                            <span class="qy_red">*</span>
                            <div class="qy_input_number">
                                <el-input-number v-model="formData.num8" controls-position="right" :min="1" :max="10"></el-input-number>
                            </div>
                        </div>

                        <div class="quyu">
                            <span class="qy_title">有电视机</span>
                            <div class="qy_input_number">
                                <input type="radio" value="是" v-model="formData.dianshi">是
                                <input type="radio" value="否" v-model="formData.dianshi" checked>否
                            </div>
                        </div>

                        <div class="quyu">
                            <span class="qy_title">有投影仪</span>
                            <div class="qy_input_number">
                                <input type="radio" value="是" v-model="formData.touying" checked>是
                                <input type="radio" value="否" v-model="formData.touying">否
                            </div>
                        </div>

                        <div class="quyu">
                            <span class="qy_title">允许开放预订</span>
                            <div class="qy_input_number">
                                <input type="radio" value="是" v-model="formData.yxkfys" checked>是
                                <input type="radio" value="否" v-model="formData.yxkfys">否
                            </div>
                        </div>

                        <div class="quyu">
                            <span class="qy_title">图片资料</span>
                            <div class="qy_input_number file_box">
                                <div class="updow">上传照片，最多3张</div>
                                <input @change="fileChange($event)" class="input_file" type="file" accept="image/jpeg,img/png,image/gif">
                            </div>
                            <div class="file_right">
                            </div>
                        </div>

                        <div class="quyu">
                            <span class="qy_title">备注</span>
                            <div class="qy_input_number">
                                <textarea v-model="formData.beizhu"></textarea >
                            </div>
                        </div>

                        <div class="quyu">
                                <span class="qy_title">启用</span>
                                <div class="qy_input_number">
                                    <input type="radio" value="是" v-model="formData.qiyong" checked>是
                                    <input type="radio" value="否" v-model="formData.qiyong">否
                                </div>
                        </div>

                        <div class="but_box">
                            <div class="el-icon-circle-check but">
                                <input type="submit" value="确定">
                            </div>                                
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                formData: {
                    quyu: "",
                    louhao: "",
                    louceng: "",
                    hybh: "",
                    hymc: "",
                    num8: 1,
                    dianshi: "",
                    touying: "",
                    yxkfys: "",
                    tupian: "",
                    beizhu: "",
                    qiyong: ""
                }
            };
        },
        mounted() {
            $(".from_box").animate({ opacity: "1" }, 500);
        },
        methods: {
            fileChange(e) {
                var name = e.target.files[0].name.substring(0, 2);
                var name1 = e.target.files[0].name.split(".", "2")[1];
                var name2 = name + name1;
                if (e.target.files[0].name.length > 5) {
                    name2 = name + "..." + name1;
                }
                $(`<span>${name2}</span>`)
                    .appendTo($(".file_right"))
                    .css({
                        display: "inline - block",
                        width: " 27px",
                        height: "14px",
                        overflow: "hidden",
                        "background-color": "lightgrey",
                        margin: "0 2px"
                    });
            },
            mbClick(e) {
                var that = this;
                $(".from_box").animate({ opacity: "0" }, 500, function () {
                    that.$store.commit("addClick", false);
                });
            },
            fromClick(e) {
                e.stopPropagation()
            },
            fromSubmit(e) {
                e.preventDefault()
                this.$store.commit("addClick", false);
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

.add > div {
  width: 100%;
  height: 100%;
  position: relative;
}

.from_box {
  width: 508px;
  /* height: 538px; */
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

.form {
  width: 100%;
  height: calc(100% - 39px);
  padding: 10px 0;
  box-sizing: border-box;
}

.quyu {
  width: 464px;
  height: 36px;
  margin: 2px auto;
  display: flex;
  align-items: center;
  color: #333;
  font-size: 12px;
  padding: 0 20px;
  box-sizing: border-box;
  position: relative;
}

.qy_title {
  display: inline-block;
  width: 127px;
  height: 36px;
  text-align: right;
  line-height: 36px;
  padding-right: 10px;
  box-sizing: border-box;
}

.qy_input {
  width: 335px;
  height: 36px;
  line-height: 36px;
}

.qy_input_number {
  width: 335px;
  height: 36px;
  line-height: 36px;
  position: relative;
}
.updow {
  width: 150px;
  height: 24px;
  position: absolute;
  border: 1px solid #eee;
  background-color: #f6f6f6;
  color: #2b2b2b;
  text-align: center;
  line-height: 24px;
  margin-top: 5px;
}
.file_right {
  position: absolute;
  left: 300px;
}
/* .file_right>span{
        display: inline-block;
        width: 27px;
        height: 14px;
        overflow: hidden;
        background-color: lightgrey;
    } */
.input_file {
  position: absolute;
  opacity: 0;
}

.qy_red {
  color: red;
  font-size: 1.2rem;
}
textarea {
  width: 303px;
  height: 36px;
}
.but_box {
  height: 36px;
  width: 100%;

  border-top: 1px solid #eee;
  display: flex;
  justify-content: center;
  align-items: center;
}
.but {
  width: 58px;
  height: 28px;
  background-color: #eee;
  text-align: center;
  line-height: 28px;
  border-radius: 1px solid lightgray;
}
input[type="submit"] {
  background: #eee;
  border: none;
}
</style>

<style>
.quyu .el-input {
  width: 100px;
  height: 36px;
  line-height: 36px;
}
.quyu .el-input__inner {
  width: 180px;
  height: 36px;
  line-height: 36px;
}
.quyu .el-input__inner:focus {
  border-color: #dcdfe6;
}
</style>