<template>
  <div class="as_box">
    <div class="aside">
      <div class="asColor asBgcolor" @click="asClick($event,'/')" @mouseenter="asEnter($event)" @mouseleave="asLeave($event)">
        <span class="fa fa-home selected"></span>
        首页
        <span class="el-icon-refresh"></span>
      </div>
      <div @click="asClick($event,'/yuding')" @mouseenter="asEnter($event)" @mouseleave="asLeave($event)">
        <span class="fa fa-calendar-o"></span>
        预定会议室
        <span class="el-icon-refresh"></span>
      </div>
      <div @click="asClick($event,'/wodeyuding')" @mouseenter="asEnter($event)" @mouseleave="asLeave($event)">
        <span class="fa fa-calendar-check-o"></span>
        我的预定
        <span class="el-icon-refresh"></span>
      </div>
      <div @click="asClick($event,'/yudingshenpi')" @mouseenter="asEnter($event)" @mouseleave="asLeave($event)">
        <span class="fa fa-check-square"></span>
        预定审批(管理员)
        <span class="el-icon-refresh"></span>
      </div>
      <div @click="asClick($event,'/hysYdgl')" @mouseenter="asEnter($event)" @mouseleave="asLeave($event)">
        <span class="fa fa-table"></span>
        会议室预定管理(管理员)
        <span class="el-icon-refresh"></span>
      </div>
      <div @click="asClick($event,'hysgl')" @mouseenter="asEnter($event)" @mouseleave="asLeave($event)">
        <span class="fa fa-laptop"></span>
        会议室管理(管理员)
        <span class="el-icon-refresh"></span>
      </div>
      <div @click="asClick($event)" @mouseenter="asEnter($event)" @mouseleave="asLeave($event)">
        <span class="fa fa-building"></span>
        区域建筑物管理(管理员)
        <span class="el-icon-refresh"></span>
      </div>
      <div @click="asClick($event)" @mouseenter="asEnter($event)" @mouseleave="asLeave($event)">
        <span class="fa fa-gears"></span>
        系统设置
        <span class="el-icon-refresh"></span>
      </div>
    </div>

    <div class="aside_as_box" @click="asideClick($event)">
      <div class="aside_as">
        <span class="fa fa-angle-double-up span"></span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        arr: [$(".asColor")],
        index: 0,
        routerUrl: ""
      };
    },
    beforeMount() {
     
    },
    methods: {
      asClick(e, parem) {
        $(".asColor").removeClass("asColor asBgcolor");
        $(e.target).toggleClass("asColor");
        this.arr = [];
        this.arr.push($(e.target));
        this.$router.push(parem);
      },
      asEnter(e) {
        if ($(e.target).hasClass("asBgcolor")) {
          $(e.target).removeClass("asBgcolor");
          $(e.target)
            .find(".el-icon-refresh")
            .css({ display: "inline-block" });
          this.arr = [];
          this.arr.push($(e.target));
        }
      },
      asLeave(e) {
        this.arr[0].addClass("asBgcolor");
        $(e.target)
          .find(".el-icon-refresh")
          .css({ display: "none" });
      },
      asideClick(e) {
        this.index++;
        if (this.index % 2 != 0) {
          $(".aside").animate(
            {
              width: "12px",
              height: "884px",
              opacity: "0"
            },
            500
          );

          $(e.currentTarget)
            .find(".aside_as")
            .css({
              transform: "rotate(90deg)",
              " borderBottom": "12px solid #e4e7e8"
            });
        } else {
          $(".aside").animate(
            {
              width: "220px",
              height: "884px",
              opacity: "1"
            },
            500
          );
          $(e.currentTarget)
            .find(".aside_as")
            .css({
              transform: "rotate(270deg)",
              " borderBottom": "12px solid #c1c1c1"
            });
        }
      }
    }
  };
</script>

<style scoped>
  .as_box {
    /* width: 220px;
    height: 884px; */
    position: relative;
    background-color: #e4e7e8;
  }

  .aside {
    width: 220px;
    height: 884px;
    color: #454545;
    background-color: #111;
  }

  .aside>div {
    width: 100%;
    height: 45px;
    font-size: 14px;
    padding-left: 17px;
    box-sizing: border-box;
    line-height: 45px;
    position: relative;
    cursor: pointer;
  }

  .aside>div>span {
    margin-right: 5px;
  }

  .asColor {
    color: white;
    border-right: 4px solid white;
    box-sizing: border-box;
  }

  .asBgcolor {
    background-color: #007aff;
  }

  .el-icon-refresh {
    position: absolute;
    right: 8px;
    top: 50%;
    margin-top: -7px;
    font-weight: 700;
    color: white;
    display: none;
  }

  .aside_as {
    border-bottom: 12px solid #c1c1c1;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    width: 120px;
    position: relative;
    transform: rotate(270deg);
    position: absolute;
    top: 55%;
    right: -54px;
  }

  .aside_as1 {
    transform: rotate(270deg);
  }

  .span {
    position: absolute;
    bottom: -30;
    left: 50%;
    margin-left: -7px;
    color: #454545;
  }

  .aside_as:hover {
    border-bottom: 18px solid white;
    border-left: 9px solid transparent;
    border-right: 9px solid transparent;
    right: -51px;
  }
</style>