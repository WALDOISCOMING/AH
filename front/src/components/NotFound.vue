
<template>
<div>
<img src="https://static.rocketpunch.com/img/astronaut-gray%402x.png">

  <li>페이지를 찾을 수 없습니다.</li>
  <li>이 페이지를 보려면 로그인이 필요할 수 있습니다.</li>
  <li>도움말</li>
  <li>문의하기</li>

</div>
</template>

<script>
export default {
  name: 'NotFound',
  props: {
    msg: String
  }
}
</script>
<style>
  .spacing {
    Margin-right: 10px;
  }
</style>
