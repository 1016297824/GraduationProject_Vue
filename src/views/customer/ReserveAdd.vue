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
import { initDiningTable } from "@/api/customer";

export default {
  name: "ReserveAdd",
  data: () => ({
    diningTableList: null
  }),
  created() {
    initDiningTable();
    bus.$on(bus.diningTableList, data => {
      this.diningTableList = data;
    });
  }
};
</script>
