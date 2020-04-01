import axios from "@/util/MyAxios";
import bus from "@/util/Bus";
import { setTimeout } from "core-js";

// 获得员工信息
export function getStaff() {
  axios.get("/restaurantManager/getStaff").then(response => {
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
  axios.post("/restaurantManager/addStaff", staff).then(response => {
    setTimeout(() => {
      alert(response.data.message);
      window.location.href = "/restaurantManager/staffShow2";
    }, 200);
  });
}

// 解雇员工
export function deleteStaff(username) {
  axios.post(`restaurantManager/deleteStaff/${username}`).then(response => {
    setTimeout(() => {
      alert(response.data.message);
      getStaff();
    }, 200);
  });
}

// 任职员工
export function takeOffice(staff, id) {
  axios.post(`restaurantManager/takeOffice/${id}`, staff).then(response => {
    setTimeout(() => {
      alert(response.data.message);
      getStaff();
    }, 200);
  });
}

// 修改密码
export function changePassword(userBody1) {
  axios.post("restaurantManager/changePassword", userBody1).then(response => {
    setTimeout(() => {
      alert(response.data.message);
    }, 200);
  });
}

// 初始化考勤信息
export function initAttendance() {
  axios.get("restaurantManager/initAttendance").then(response => {
    setTimeout(() => {
      bus.$emit(bus.attendanceList, response.data.attendanceList);
      bus.$emit(bus.attendanceList1, response.data.attendanceList1);
      bus.$emit(bus.pageBody1, response.data.pageBody1);
    }, 200);
  });
}

// 选择日期，获得考勤信息
export function chooseDate(choosedDate) {
  axios.post("restaurantManager/chooseDate", choosedDate).then(response => {
    setTimeout(() => {
      bus.$emit(bus.attendanceList, response.data.attendanceList);
      bus.$emit(bus.attendanceList1, response.data.attendanceList1);
      bus.$emit(bus.pageBody1, response.data.pageBody1);
    }, 200);
  });
}

// 提交考勤信息
export function updateAttendance(attendanceList, choosedDate) {
  axios
    .post("restaurantManager/updateAttendance", attendanceList)
    .then(response => {
      setTimeout(() => {
        alert(response.data.message);
        chooseDate(choosedDate);
      }, 200);
    });
}
