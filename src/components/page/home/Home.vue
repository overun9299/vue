<template>
  <el-container>
    <el-aside width="200px">Aside</el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>Main</el-main>
    </el-container>
  </el-container>



</template>

<script>
  // 导入左侧菜单
  import Menu from "../menu/Menu.vue";

    export default {
        comments: {
          Menu: Menu
        },

        data() {
          return {

            token: window.sessionStorage.getItem("token"),
            fits: ["fill", "contain", "cover", "none", "scale-down"]
          }
        },
        methods: {

        }
    }
</script>

<style lang="less" scoped>

  .span_class {
    margin-top: 8px;
  }

  .el-container {
    margin-bottom: 40px;
  }

  .container {
    height: 600px;
  }

  .el-header {
    text-align: left;
    background-color: white;
    .logout {
      text-align: right;
      .navOperater {
        width: 80px;
        height: 80px;
        float: right;
        line-height: 50px;
        .avatar {
          margin-top: 8px;
        }
      }
    }
  }
  .el-main {
    background-color: #e9eef3;
    text-align: center;
  }
</style>
