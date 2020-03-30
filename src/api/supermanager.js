import axios from "@/util/MyAxios";
import bus from "@/util/Bus";
import { setTimeout } from "core-js";

// 获得员工信息
export function getStaff() {
  axios.get("/superManager/getStaff").then(response => {
    setTimeout(() => {
      bus.$emit(bus.staffList, response.data.staffList);
      bus.$emit(bus.staffList1, response.data.staffList1);
      bus.$emit(bus.pageBody1, response.data.pageBody1);
      bus.$emit(bus.positionList, response.data.positionList);
    }, 200);
  });
}

// 添加员工
export function addStaff(staff) {
  axios.post("/superManager/addStaff", staff).then(response => {
    setTimeout(() => {
      alert(response.data.message);
      window.location.href = "/supermanager/staffShow";
    }, 200);
  });
}

// 解雇员工
export function deleteStaff(username) {
  axios.post(`superManager/deleteStaff/${username}`).then(response => {
    setTimeout(() => {
      alert(response.data.message);
      getStaff();
    }, 200);
  });
}

// 任职员工
export function takeOffice(staff, id) {
  axios.post(`superManager/takeOffice/${id}`, staff).then(response => {
    setTimeout(() => {
      alert(response.data.message);
      getStaff();
    }, 200);
  });
}

// 修改密码
export function changePassword(userBody1) {
  axios.post("superManager/changePassword", userBody1).then(response => {
    setTimeout(() => {
      alert(response.data.message);
    }, 200);
  });
}
