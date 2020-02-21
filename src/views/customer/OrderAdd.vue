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
            <a href="#">
              <span class="iconfont icon-xuanzhongduigou"></span>
            </a>
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
export default {
  name: "OrderAdd",
  data: () => ({
    no: null
  }),
  created() {
    this.no = this.$route.query.no;
  }
};
</script>
