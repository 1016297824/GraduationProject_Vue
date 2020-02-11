import axios from "@/util/MyAxios";
import bus from "@/util/Bus";

export function initDiningTable() {
  axios.get("/customer/reserveAdd/initDiningTable").then(response => {
    setTimeout(() => {
      bus.$emit(bus.diningTableList, response.data.diningTableList);
      bus.$emit(bus.pageBody, response.data.pageBody);
    }, 500);
  });
}

export function doPage(pageBody) {
  axios.post("/customer/reserveAdd/doPage", pageBody).then(response => {
    setTimeout(() => {
      bus.$emit(bus.diningTableList, response.data.diningTableList);
      bus.$emit(bus.pageBody, response.data.pageBody);
    }, 500);
  });
}
