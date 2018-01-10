<template>
  <div style="background-color: #F4F4F4;margin-top:5px;padding-bottom: 60px;">
    <div  class="import-product">
      <div><img src="../assets/images/service_t1.png" width="50%"/></div>
      <div class="import-product-list" >
        <dl v-for="(ipro,index) in this.importProduct">
          <dt><img :src="ipro.img_path"/></dt>
          <dd>{{ipro.img_name}}</dd>
        </dl>
      </div>
    </div>

    <div class="inland-product">
      <div><img src="../assets/images/service_t1.png" width="50%"/></div>
      <div class="inland-product-list">
        <dl v-for="(dpro, index) in this.domesticProduct">
          <dt><img :src="dpro.img_path"/></dt>
          <dd>{{dpro.img_name}}</dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'service',
    data: function () {
      return {
        importProduct: [
          {
            img_path: require('../assets/images/import/印尼山竹.jpg'),
            img_name: '印尼山竹'
          },
          {
            img_path: require('../assets/images/import/哥伦比亚燕窝果.jpg'),
            img_name: '哥伦比亚燕窝果'
          },
          {
            img_path: require('../assets/images/import/草莓.jpg'),
            img_name: '草莓'
          },
          {
            img_path: require('../assets/images/import/智利车厘子.jpg'),
            img_name: '智利车厘子'
          }
        ],
        domesticProduct: [
          {
            img_path: require('../assets/images/domestic/冰糖木瓜.jpg'),
            img_name: '冰糖木瓜'
          },
          {
            img_path: require('../assets/images/domestic/不知火丑橘.jpg'),
            img_name: '不知火丑橘'
          },
          {
            img_path: require('../assets/images/domestic/齐峰翠香猕猴桃.jpg'),
            img_name: '齐峰翠香猕猴桃'
          },
          {
            img_path: require('../assets/images/domestic/百香果.jpg'),
            img_name: '百香果'
          }
        ]
      }
    }
  }
</script>

<style scoped>
.import-product{

}
  .import-product-list{
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 30px;
  }
  .import-product-list dl{
    width:35%;
  }
.import-product-list dd{
  width: 100%;
  text-align: center;
  margin:10px auto 0;
  letter-spacing: 1px;
  color:#1C1C1C;
  font-size:18px;
  font-weight: 500;
}
  .import-product-list dl img{
    width: 100%;
    height: 100%;
  }
  .inland-product{
    margin-top:50px;
  }
  .inland-product-list{
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top:30px;
  }
  .inland-product-list dl{
    width:35%;
  }
  .inland-product-list dt{
    background-color:white;
  }
  .inland-product-list dd{
    width: 100%;
    text-align: center;
    margin:10px auto 0;
    letter-spacing: 1px;
    color:#1C1C1C;
    font-size:18px;
    font-weight: 500;
  }
  .inland-product-list dl dt img{
    width:100%;
    height: 100%;
  }
</style>
