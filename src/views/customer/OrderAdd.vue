<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <div class="col-lg-8 m-auto">
          <br />
          <br />
          <br />
          <br />
          <br />
          <form>
            <div class="form-group text-left">
              <label for="" class="font-weight-bold">本桌菜单</label>
              <input
                type="button"
                value="添加"
                class="btn btn-primary"
                style="float:right"
                data-toggle="modal"
                data-target="#order"
              />
            </div>
            <hr />
            <br />
            <!-- <div
              class="row"
              v-for="(reserveList, index) in reserveLists"
              :key="index"
            >
              <div
                class="col-lg-4 text-center"
                v-for="(reserve, index) in reserveList"
                :key="index"
              >
                <img
                  style="cursor:pointer"
                  :alt="'订单号：' + reserve.no"
                  :title="'订单号：' + reserve.no"
                  src="@/assets/imgs/diningtable.jpg"
                  class="img-fluid"
                  @click="orderAdd(reserve.no)"
                />
                {{ reserve.diningTable.id + "号桌" }}
              </div>
            </div> -->
          </form>
        </div>
      </div>
    </div>

    <!-- model -->
    <div
      class="modal fade"
      id="order"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">菜单</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="panel panel-default">
              <div class="panel-body" id="pageProduct">
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th style="text-align: center;">選択</th>
                      <th style="text-align: center;">商品コード</th>
                      <th style="text-align: center;">商品名</th>
                      <th style="text-align: center;">単価</th>
                      <th style="text-align: center;">在庫数</th>
                    </tr>
                  </thead>
                  <tbody></tbody>
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
                      v-for="(page, index) in pageBody1.pageList"
                      :key="index"
                      :class="
                        pageBody1.page == page
                          ? 'page-item active'
                          : 'page-item'
                      "
                    >
                      <a class="page-link" href="#" @click="doPage(page)">{{
                        page
                      }}</a>
                    </li>
                    <li class="page-item">
                      <a
                        class="page-link"
                        href="#"
                        aria-label="Next"
                        @click="doPage(pageBody1.pages)"
                      >
                        <span aria-hidden="true">&raquo;</span>
                        <span class="sr-only">Next</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import bus from "@/util/Bus";
import { getOrdering } from "@/api/customer";

export default {
  name: "OrderAdd",
  data: () => ({
    no: null,
    pageBody1: {
      page: null,
      pages: null,
      pageList: null
    },
    isOrdered: null,
    menuList1: null,
    menuList: null,
    orderingList: null
  }),
  methods: {
    doPage() {}
  },
  created() {
    this.no = this.$route.query.no;
    getOrdering(this.no);
    bus.$on(bus.isOrdered, data => {
      this.isOrdered = data;
    });
    bus.$on(bus.pageBody1, data => {
      this.pageBody1 = data;
    });
    bus.$on(bus.orderingList, data => {
      this.orderingList = data;
    });
    bus.$on(bus.menuList1, data => {
      this.menuList1 = data;
    });
    bus.$on(bus.menuList, data => {
      this.menuList = data;
    });
  },
  beforeDestroy() {
    bus.$off(bus.isOrdered);
    bus.$off(bus.pageBody1);
    bus.$off(bus.orderingList);
    bus.$off(bus.menuList1);
    bus.$off(bus.menuList);
  }
};
</script>
