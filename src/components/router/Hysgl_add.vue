<template>
    <div class="add">
        <div>
            <div class="from_box">
                <div class="nav_top">
                    添加会议室
                </div>
                <div class="from">
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
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
    .add>div{
        width: 100%;
        height: 100%;
        position: relative;
    }

    .from_box {
        width: 508px;
        height: 538px;
        background-color: white;
        position: absolute;
        top: 30px;
        left: 320px;
        border: 1px solid white;
        box-sizing: border-box;
    }
    .nav_top{
        width: 100%;
        height: 39px;
        background-color: #222;
        color: #eee;
        font-size: 14px;
        line-height: 39px;
        padding-left: 10px;
        box-sizing: border-box;
    }
</style>