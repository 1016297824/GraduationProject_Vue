<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <div class="col-lg-12">
          <div class="col-lg-8 m-auto">
            <br />
            <br />
            <br />
            <form action="">
              <div class="form-group text-left">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="row">
                      <div class="col-lg-2">
                        <label for="" class="font-weight-bold">选择类型</label>
                      </div>
                      <div class="col-lg-3">
                        <select class="form-control" v-model="productType">
                          <option
                            v-for="(productType, index) in productTypeList"
                            :key="index"
                            :value="productType"
                          >
                            {{ productType }}
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <br />
              <table class="table table-borderless">
                <thead>
                  <tr>
                    <th style="text-align: center;" class="text-truncate">
                      {{
                        productType == "家禽"
                          ? "幼崽"
                          : productType == "鱼类"
                          ? "鱼苗"
                          : "植株/种子"
                      }}
                    </th>
                    <th style="text-align: center;" class="text-truncate">
                      库存
                    </th>
                    <th style="text-align: center;" class="text-truncate"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(product, index) in productList" :key="index">
                    <td style="text-align: center;" class="text-truncate">
                      {{ product.name }}
                    </td>
                    <td style="text-align: center;" class="text-truncate">
                      {{
                        productType == "鱼类"
                          ? product.amount
                          : product.baseAmount
                      }}{{ product.baseUnit }}
                    </td>
                    <td>
                      <!-- <input
                        type="button"
                        value="修改"
                        class="btn btn-primary"
                        data-toggle="modal"
                        data-target="#product"
                        @click="modifyProduct(product)"
                      /> -->
                      <input
                        type="button"
                        value="采购"
                        class="btn btn-primary"
                        data-toggle="modal"
                        data-target="#purchase"
                        @click="addPurchase(product)"
                      />
                      {{ &nbsp; }}
                      <input
                        type="button"
                        value="异常消耗"
                        class="btn btn-primary"
                        data-toggle="modal"
                        data-target="#consumption"
                        @click="abnormalConsumption1(product)"
                      />{{ &nbsp; }}
                      <input
                        type="button"
                        value="成熟"
                        class="btn btn-primary"
                        data-toggle="modal"
                        data-target="#produce1"
                        @click="produce1(product)"
                      />
                      <!-- <input
                        type="button"
                        value="删除"
                        class="btn"
                        @click="deleteProduct(product)"
                      />
                    </td> -->
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
export default {
  name: "Fertilizer"
};
</script>
