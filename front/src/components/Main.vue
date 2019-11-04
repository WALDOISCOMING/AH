<template>
<div class="conainter-fluid">
  <div class="jumbotron center">
    <h1 class="text-center text-white font-weight-bold">"반려동물에게 필요한 약을 찾아드립니다."</h1>
    <h5 class="text-center text-white font-weight-bold">거주하시는 동 이름으로 검색해주세요</h5>
    <div class="input-group center mt-4 w-25">
      <i class="fas fa-location"></i>
      <input class="form-control" type="text" placeholder="건물명, 도로명, 지번으로 검색하세요." >
      <button type="button" class="btn btn-search ">검색</button>
    </div>
    <button type="button" class="btn btn-primary btn-lg" data-target="#mymodal" data-toggle="modal">바로 신청하기</button>
  </div>
<div class="container">
<div class="row">

  <div class="col-xs-6 col-sm-4 col-md-3 col-lg-3 category-img-thumbnail">
    <a href="" class="" ng-click="select_home_category('all')">
      <div class="category-title">전체보기</div>
      <img src="../assets/images/m_thb_all_img.png">
    </a>
  </div>

  <div class="col-xs-6 col-sm-4 col-md-3 col-lg-3 img-thumbnail ">
    <a href="" class="" ng-click="select_home_category('all')">
      <div class="category-title ">감기</div>
      <img src="../assets/images/m_thb_all_img.png">
    </a>
  </div>

  <div class="col-xs-6 col-sm-4 col-md-3 col-lg-3 img-thumbnail ">
    <a href="" class="" ng-click="select_home_category('all')">
      <div class="category-title">피부 문제</div>
      <img src="../assets/images/m_thb_all_img.png">
    </a>
  </div>

  <div class="col-xs-6 col-sm-4 col-md-3 col-lg-3 img-thumbnail ">
    <a href="" class="" ng-click="select_home_category('all')">
      <div class="category-title">알러지</div>
      <img src="../assets/images/m_thb_all_img.png">
    </a>
  </div>

  <div class="col-xs-6 col-sm-4 col-md-3 col-lg-3">
    <a href="" class="thumbnail" ng-click="select_home_category('all')">
      <div class="category-title"></div>
      <img src="../assets/images/m_thb_all_img.png">
    </a>
  </div>

  <div class="col-xs-6 col-sm-4 col-md-3 col-lg-3">
    <a href="" class="thumbnail" ng-click="select_home_category('all')">
      <div class="category-title">전체보기</div>
      <img src="image/category-01.png">
    </a>
  </div>
</div>  
</div>
</div>
</template>

<script>
export default {
  name: 'Main',
  props: {
    msg: String
  }
}
</script>
<style>
  .spacing {
    Margin-right: 10px;
  }
  @import '../assets/styles/jumbotron.css';
  @import '../assets/styles/main_text_style.css';
</style>
