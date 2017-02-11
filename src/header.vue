<template>
  <div  id="app">
    <div>{{ msg }}</div>   
  </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                msg: 'this is a header'
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        background: rosybrown;
        margin: 0px;
        text-align: center;
        height: 30px;
        line-height: 30px;
    }
</style>