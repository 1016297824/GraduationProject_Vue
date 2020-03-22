// 顾客预定
<template>
  <div class="container">
    <!-- 主体 -->
    <div class="row">
      <div class="col-lg-12">
        <div class="col-lg-8 m-auto">
          <br />
          <br />
          <br />
          <br />
          <br />
          <form action="">
            <div class="form-group text-left">
              <label for="" class="font-weight-bold">我的订单</label>
              <input
                type="button"
                class="btn btn-primary"
                style="float:right"
                value="添加"
                @click="addReserve"
              />
            </div>
            <hr />
            <br />
            <table class="table table-borderless">
              <thead>
                <tr>
                  <th class="text-truncate">
                    订单号
                  </th>
                  <th class="text-truncate">
                    桌位
                  </th>
                  <th>开始时间</th>
                  <th>结束时间</th>
                  <th>下单时间</th>
                  <!-- <th></th> -->
                </tr>
              </thead>
              <tbody>
                <tr v-for="(reserve, index) in reserveList" :key="index">
                  <td>
                    {{ reserve.no }}
                  </td>
                  <td>
                    {{ reserve.diningTable.id }}
                  </td>
                  <td class="text-truncate">
                    {{ reserve.startTime | formatDate }}
                  </td>
                  <td class="text-truncate">
                    {{ reserve.endTime | formatDate }}
                  </td>
                  <td class="text-truncate">
                    {{ reserve.insertTime | formatDate }}
                  </td>
                  <!-- <td>
                    <input
                      type="button"
                      value="取消订单"
                      class="btn"
                      @click="deleteReserve(reserve.no)"
                    />
                  </td> -->
                </tr>
              </tbody>
            </table>
          </form>
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
import { getReserve, deleteReserve } from "@/api/customer";

export default {
  name: "Reserve",
  data: () => ({
    reserveList: null
  }),
  methods: {
    addReserve: function() {
      this.$router.push("reserveAdd");
    },
    deleteReserve(no) {
      let con = confirm(`取消订单：\n订单号：${no}`);
      if (con == true) {
        deleteReserve(no);
      }
    }
  },
  filters: {
    formatDate(time) {
      var date = new Date(time);
      return formatDate(date, "yyyy-MM-dd hh : mm");
    }
  },
  created() {
    bus.$on(bus.reserveList, data => {
      this.reserveList = data;
    });
  },
  mounted() {
    getReserve();
  },
  beforeDestroy() {
    bus.$off(bus.reserveList);
  }
};
</script>
