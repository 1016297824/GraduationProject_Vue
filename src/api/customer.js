import axios from "@/util/MyAxios";
import bus from "@/util/Bus";

export function initDiningTable() {
  axios.get("/customer/reserveAdd/initDiningTable").then(response => {
    setTimeout(() => {
      bus.$emit(bus.diningTableList, response.data.diningTableList);
    }, 1000);
  });
}
