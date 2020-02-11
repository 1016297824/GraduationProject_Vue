// 添加订单
<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <div class="col-lg-12">
          <div class="col-lg-8 m-auto">
            <br />
            <br />
            <br />
            <br />
            <br />
            <form action="">
              <div class="form-group text-left">
                <div class="row">
                  <div class="col-lg-8">
                    <label for="" class="font-weight-bold">选择时间</label>
                    <input
                      type="button"
                      class="btn offset-lg-2"
                      style="float:right"
                      value="返回"
                      @click="back"
                    />
                  </div>
                </div>
                <br />
                <div>
                  <span>开始时间：</span>
                  <el-date-picker
                    v-model="pageBody.startTime"
                    type="datetime"
                    format="yyyy-MM-dd HH:00"
                    placeholder="选择日期时间"
                    @change="startTimeChange"
                  >
                  </el-date-picker>
                  <!-- {{ pageBody.startTime }} -->
                </div>
                <br />
                <span>结束时间：</span>
                <el-date-picker
                  v-model="pageBody.endTime"
                  type="datetime"
                  format="yyyy-MM-dd HH:00"
                  placeholder="选择日期时间"
                >
                </el-date-picker>
                <!-- {{ pageBody.endTime | formatDate }} -->
              </div>
              <table class="table table-borderless">
                <thead>
                  <tr>
                    <th>餐桌号</th>
                    <th>类型</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(dt, index) in diningTableList" :key="index">
                    <td>{{ dt.id }}</td>
                    <td>{{ dt.type }}</td>
                    <td>
                      <input
                        type="button"
                        value="预定"
                        class="btn btn-primary"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              <nav aria-label="Page navigation">
                <ul class="pagination">
                  <li class="page-item">
                    <a
                      class="page-link"
                      href="#"
                      aria-label="Previous"
                      @click="doPage(1)"
                    >
                      <span aria-hidden="true">&laquo;</span>
                      <span class="sr-only">Previous</span>
                    </a>
                  </li>
                  <li
                    v-for="(pl, index) in pageBody.pageList"
                    :key="index"
                    :class="
                      pageBody.page == pl ? 'page-item active' : 'page-item'
                    "
                  >
                    <a class="page-link" href="#" @click="doPage(pl)">{{
                      pl
                    }}</a>
                  </li>
                  <li class="page-item">
                    <a
                      class="page-link"
                      href="#"
                      aria-label="Next"
                      @click="doPage(pageBody.pages)"
                    >
                      <span aria-hidden="true">&raquo;</span>
                      <span class="sr-only">Next</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </form>
          </div>
        </div>
      </div>
    </div>
    <br />
    <br />
    <br />
  </div>
</template>

<script>
import bus from "@/util/Bus";
import { formatDate } from "@/assets/js/date";
import { initDiningTable, doPage } from "@/api/customer";

export default {
  name: "ReserveAdd",
  data: () => ({
    diningTableList: null,
    pageBody: {
      page: null,
      pages: null,
      pageList: null,
      startTime: null,
      endTime: null
    }
  }),
  methods: {
    doPage(page) {
      this.pageBody.page = page;
      doPage(this.pageBody);
    },
    back() {
      this.$router.push("reserve");
    },
    initTime() {
      let newTime1 = new Date();
      let newTime2 = new Date();
      newTime1.setMinutes(0);
      newTime1.setSeconds(0);
      this.pageBody.startTime = newTime1;
      newTime2.setMinutes(0);
      newTime2.setSeconds(0);
      newTime2.setHours(newTime1.getHours() + 2);
      this.pageBody.endTime = newTime2;
    },
    startTimeChange() {
      alert("schange");
    }
  },
  filters: {
    formatDate(time) {
      var date = new Date(time);
      return formatDate(date, "yyyy-MM-dd hh : mm : ss");
    }
  },
  created() {
    this.initTime();
    initDiningTable();
    bus.$on(bus.diningTableList, data => {
      this.diningTableList = data;
    });
    bus.$on(bus.pageBody, data => {
      this.pageBody = data;
    });
  },
  beforeDestroy() {
    bus.$off(bus.diningTableList);
    bus.$off(bus.pageBody);
  }
};
</script>
