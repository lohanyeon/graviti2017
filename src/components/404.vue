<template>
  <div id="" class="error">
    <div>
      <img src="/static/v2017/images/error.png" alt="404 Page not found 페이지를 표시할 수 없습니다">
      <router-link v-bind:to="{ name: 'Main' }"><img src="/static/v2017/images/btn_home.gif" alt="Go Home"></router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'notFoundApp',
  data: () => ({

  })
}
</script>
<style>
  .error {position:relative; width:100%; height:100%; text-align:center; background-color:#00a1e9;}
  .error div {position:absolute; top:50%; left:0; width:100%; margin-top:-159px;}
  .error a {display:block; margin-top:40px;}
</style>
