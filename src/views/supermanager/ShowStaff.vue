// 显示所有员工
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
                  </div>
                </div>
              </div>
              <table class="table table-borderless">
                <thead>
                  <tr>
                    <th>工号</th>
                    <th>姓名</th>
                    <th>职务</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(staff, index) in staffList1" :key="index">
                    <td>{{ staff.username }}</td>
                    <td>{{ staff.name }}</td>
                    <td>
                      {{
                        staff.position == null ? "未分配" : staff.position.name
                      }}
                    </td>
                    <td>
                      <input
                        type="button"
                        :value="staff.position == null ? '任职' : '调任'"
                        class="btn btn-primary"
                      />{{ &nbsp; }}
                      <input type="button" value="解雇" class="btn" />
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
                    v-for="(page, index) in pageBody1.pageList"
                    :key="index"
                    :class="
                      pageBody1.page == page ? 'page-item active' : 'page-item'
                    "
                  >
                    <a class="page-link" href="#" @click="doPage(page)">
                      {{ page }}
                    </a>
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
import { getStaff } from "@/api/supermanager";

export default {
  name: "ShowStaff",
  data: () => ({
    staffList: [],
    staffList1: [],
    pageBody1: {
      page: null,
      pages: null,
      pageList: []
    }
  }),
  methods: {
    doPage(page) {
      this.staffList1 = [];
      if (this.pageBody1.pages <= 5) {
        if (this.pageBody1.pages == page) {
          for (let i = (page - 1) * 5; i < this.staffList.length; i++) {
            this.staffList1.push(this.staffList[i]);
          }
        } else {
          for (let i = (page - 1) * 5; i < page * 5; i++) {
            this.staffList1.push(this.staffList[i]);
          }
        }
      } else {
        this.pageBody1.pageList = [];
        if (page > this.pageBody1.pages - 2) {
          for (
            let i = this.pageBody1.pages - 5;
            i < this.pageBody1.pages;
            i++
          ) {
            this.pageBody1.pageList.push(i + 1);
          }
          if (this.pageBody1.pages == page) {
            for (let i = (page - 1) * 5; i < this.staffList.length; i++) {
              this.staffList1.push(this.staffList[i]);
            }
          } else {
            for (let i = (page - 1) * 5; i < page * 5; i++) {
              this.staffList1.push(this.staffList[i]);
            }
          }
        } else if (page <= 2) {
          for (let i = 0; i < 5; i++) {
            this.pageBody1.pageList.push(i + 1);
          }
          for (let i = (page - 1) * 5; i < page * 5; i++) {
            this.staffList1.push(this.staffList[i]);
          }
        } else {
          for (let i = page - 2; i <= page + 2; i++) {
            this.pageBody1.pageList.push(i);
          }
          for (let i = (page - 1) * 5; i < page * 5; i++) {
            this.staffList1.push(this.staffList[i]);
          }
        }
      }
      this.pageBody1.page = page;
    }
  },
  created() {
    getStaff();
    bus.$on(bus.staffList, data => {
      this.staffList = data;
    });
    bus.$on(bus.staffList1, data => {
      this.staffList1 = data;
    });
    bus.$on(bus.pageBody1, data => {
      this.pageBody1 = data;
    });
  },
  beforeDestroy() {
    bus.$off(bus.staffList);
    bus.$off(bus.staffList1);
    bus.$off(bus.pageBody1);
  }
};
</script>
