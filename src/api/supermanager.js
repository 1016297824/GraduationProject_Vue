import axios from "@/util/MyAxios";
import bus from "@/util/Bus";

// 获得员工信息
export function getStaff() {
  axios.get("/superManager/getStaff").then(response => {
    setTimeout(() => {
      bus.$emit(bus.staffList, response.data.staffList);
      bus.$emit(bus.staffList1, response.data.staffList1);
      bus.$emit(bus.pageBody1, response.data.pageBody1);
    }, 200);
  });
}
