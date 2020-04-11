import axios from "@/util/MyAxios";
import bus from "@/util/Bus";

// 根据所选类型初始化产品信息
export function initProduct(productType) {
  axios.post("farmStaff/initProduct", productType).then(response => {
    setTimeout(() => {
      bus.$emit(bus.productList, response.data.productList);
      bus.$emit(bus.pageBody1, response.data.pageBody1);
    }, 200);
  });
}

// 农产品分页
export function doPage(pageBody1, productType) {
  axios.post(`/farmStaff/doPage/${productType}`, pageBody1).then(response => {
    setTimeout(() => {
      bus.$emit(bus.productList, response.data.productList);
      bus.$emit(bus.pageBody1, response.data.pageBody1);
    }, 200);
  });
}

// 修改密码
export function changePassword(userBody1) {
  axios.post("farmStaff/changePassword", userBody1).then(response => {
    setTimeout(() => {
      alert(response.data.message);
    }, 200);
  });
}

// 添加农产品
export function addProduct(product) {
  axios.post("farmStaff/addProduct", product).then(response => {
    setTimeout(() => {
      alert(response.data.message);
    }, 200);
    initProduct(product.productType);
  });
}

// 删除农产品
export function deleteProduct(product) {
  axios.post("farmStaff/deleteProduct", product).then(response => {
    setTimeout(() => {
      alert(response.data.message);
    }, 200);
    initProduct(product.productType);
  });
}

// 修改农产品信息
export function modifyProduct(product) {
  axios.post("farmStaff/modifyProduct", product).then(response => {
    setTimeout(() => {
      alert(response.data.message);
    }, 200);
    initProduct(product.productType);
  });
}
