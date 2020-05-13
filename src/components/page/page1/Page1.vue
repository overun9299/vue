<template>
    <h1>{{token}}</h1>
</template>

<script>
    export default {
        name: "Page1",

      data() {
          return {
            token: window.sessionStorage.getItem("token"),
          }
      },
      methods: {

      }

    }
</script>

<style scoped>

</style>
