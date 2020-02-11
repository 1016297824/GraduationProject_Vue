import axios from "@/util/MyAxios";
import bus from "@/util/Bus";

export function initDiningTable() {
  axios.get("/customer/reserveAdd/initDiningTable").then(response => {
    setTimeout(() => {
      bus.$emit(bus.diningTableList, response.data.diningTableList);
      bus.$emit(bus.page, response.data.page);
      bus.$emit(bus.pageList, response.data.pageList);
    }, 500);
  });
}
