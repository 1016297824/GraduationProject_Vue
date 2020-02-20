import axios from "@/util/MyAxios";
import bus from "@/util/Bus";

// 获得所有订单信息
export function getReserve() {
  axios.get("/customer/reserve/getReserve").then(response => {
    setTimeout(() => {
      bus.$emit(bus.reserveList, response.data.reserveList);
      bus.$emit(bus.reserveLists, response.data.reserveLists);
    }, 200);
  });
}

export function deleteReserve(no) {
  axios.post(`/customer/reserve/deleteReserve/${no}`).then(response => {
    setTimeout(() => {
      bus.$emit(bus.reserveList, response.data.reserveList);
    }, 200);
  });
}

// 初始化桌位表
export function initDiningTable() {
  axios.get("/customer/reserveAdd/initDiningTable").then(response => {
    setTimeout(() => {
      bus.$emit(bus.diningTableList, response.data.diningTableList);
      bus.$emit(bus.pageBody, response.data.pageBody);
    }, 200);
  });
}

// 分页
export function doPage(pageBody) {
  axios.post("/customer/reserveAdd/doPage", pageBody).then(response => {
    setTimeout(() => {
      bus.$emit(bus.diningTableList, response.data.diningTableList);
      bus.$emit(bus.pageBody, response.data.pageBody);
    }, 200);
  });
}

// 添加订单
export function reserveAdd(diningTable, pageBody) {
  axios
    .post(`/customer/reserveAdd/${diningTable.id}`, pageBody)
    .then(response => {
      setTimeout(() => {
        alert(response.data.message);
        doPage(pageBody);
      }, 200);
    });
}
