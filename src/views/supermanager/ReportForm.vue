<template>
  <div>
    <input type="button" value="导出" @click="outExcel" />
  </div>
</template>

<script>
import { outExcel } from "@/api/supermanager.js";

export default {
  name: "ReportForm",
  methods: {
    outExcel() {
      outExcel();
    }
  }
};
</script>
