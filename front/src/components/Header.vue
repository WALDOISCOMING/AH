<template>
<div>
  <b-navbar class="b-navbar-red" toggleable="lg">
    <div class="container">
    <b-navbar-brand href="/" tag="h4" class="text-white font-weight-bold">
      <img src="../assets/images/pharmercy_img.png" class="w-25 h-25">  애완 동물 약국
    </b-navbar-brand>
      <div class="pull-right">
        <b-button class="text-white font-weight-bold" variant="outline-light" href="/login">로그인</b-button>
        <b-button class="text-white font-weight-bold"  variant="outline-light" href="/login">회원가입</b-button>
      </div>
      </div>
      <p></p>
  </b-navbar>
</div>
</template>

<script>
export default {
  name: 'Navigation',
  props: {
    msg: String
  },
  data() {
    return {
      links: [
        {
          id: 0,
          text: 'Hello World',
          page:'HelloWorld'
        },
          {
            id: 1,
            text: 'Home',
            page:'HelloWorld'
          }
      ]
    }
  }
}
</script>
<style>
  .b-navbar-red {
    background-color:#f5605c;
  }
</style>
