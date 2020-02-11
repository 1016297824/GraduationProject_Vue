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
              <nav aria-label="Page navigation example">
                <ul class="pagination">
                  <li class="page-item">
                    <a class="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                      <span class="sr-only">Previous</span>
                    </a>
                  </li>
                  <li
                    v-for="(p, index) in pageList"
                    :key="index"
                    :class="
                      page == index + 1 ? 'page-item active' : 'page-item'
                    "
                  >
                    <a class="page-link" href="#" @click="doPage(p)">{{ p }}</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next">
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
import { initDiningTable } from "@/api/customer";

export default {
  name: "ReserveAdd",
  data: () => ({
    diningTableList: null,
    page: null,
    pageList: null
  }),
  methods: {
    doPage: function() {}
  },
  created() {
    initDiningTable();
    bus.$on(bus.diningTableList, data => {
      this.diningTableList = data;
    });
    bus.$on(bus.page, data => {
      this.page = data;
    });
    bus.$on(bus.pageList, data => {
      this.pageList = data;
    });
  },
  beforeDestroy() {
    bus.$off(bus.diningTableList);
    bus.$off(bus.pageList);
  }
};
</script>
