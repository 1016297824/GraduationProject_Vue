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
                class="btn btn-primary "
                style="float:right"
                value="添加"
                @click="addReserve"
              />
            </div>
            <hr />
            <table class="table table-borderless">
              <thead>
                <tr>
                  <th>订单号</th>
                  <th>桌位</th>
                  <th>开始时间</th>
                  <th>结束时间</th>
                  <th>下单时间</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(re, index) in reserve" :key="index">
                  <td>{{ re.no }}</td>
                  <td>{{ re.diningTable.id }}</td>
                  <td>{{ re.startTime }}</td>
                  <td>{{ re.endTime }}</td>
                  <td>{{ re.insertTime }}</td>
                  <td>
                    <input type="button" value="取消订单" class="btn" />
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Reserve",
  data: () => ({
    reserve: null
  }),
  methods: {
    addReserve: function() {
      this.$router.push("reserveAdd");
    }
  }
};
</script>
