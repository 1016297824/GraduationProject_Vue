// 顾客预定
<template>
  <div class="container">
    <!-- 主体 -->
    <div class="row">
      <div class="col-lg-12">
        <div class="col-lg-8 m-auto">
          <form action="">
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
                    <input
                      type="button"
                      value="取消订单"
                      class="btn btn-primary"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </div>

    <!-- 弹出模块：桌位 -->
  </div>
</template>

<script>
export default {
  name: "Reserve",
  data: () => ({
    reserve: null
  })
};
</script>
