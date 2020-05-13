<template>
  <div class="main_div">
    <div id="search_area" class="search_area_div">
      <el-input placeholder="请输入内容" v-model="keyword" clearable></el-input>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Person",

      data() {
          return {
            keyword : '',
          }
      },
      methods: {

      }

    }
</script>

<style scoped>
  .main_div {
    background-color: #55a532;
    width: 100%;
    height: 100%;
  }

  .search_area_div {
    width: 100%;
    height: 11%;
    background-color: #a71d5d;
  }
</style>
