<template>
  <div class="home-page" style="text-align: left;color:#D5D5D4;line-height: 30px;margin:0">
    <div  class="home-page-top" >
      <div><img src="../assets/images/home_bgi.jpg" width="100%;"/></div>
      <div style="margin:0 auto;padding:20px 20px 120px 30px;letter-spacing: 3px;position:absolute;top:0;left:0;">
        <span style="color:#709C37">广州指猴互联网科技有限公司</span>，深耕水果行业,致力于整合全球优质的水果资；
        构建高效水果供应服务链；使用移动互联网技术，为合作伙伴提供高质量、高价值、高效率的新零售服务。
        我们将兼具线上和线下的能力。线上，能研发、运营新零售供应链化为"学校"文化，成长为主线，强调开放、高效、沟通。
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home'
  }
</script>

<style scoped>
.home-page{
}
  .home-page-top{
  }
  .home-page-bottom{
    height: 100px;
    background-image: url("../assets/images/home-bgi2.jpg");
    background-size: auto;
    background-repeat: no-repeat;
    filter: url("../assets/images/home-bgi2.jpg"); /* FireFox, Chrome, Opera */
    -webkit-filter: blur(2px); /* Chrome, Opera */
    -moz-filter: blur(2px);
    -ms-filter: blur(2px);
    filter: blur(2px);
    filter: progid:DXImageTransform.Microsoft.Blur(PixelRadius=2, MakeShadow=false);
  }
</style>
