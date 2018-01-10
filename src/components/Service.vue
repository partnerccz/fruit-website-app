<template>
  <div style="background-color: #F4F4F4;">
    <div  class="import-product">
      <div><img src="../assets/images/service_t1.png" width="50%"/></div>
      <div class="import-product-list" >
        <dl>
          <dt><img src="../assets/images/product.png"/></dt>
          <dd>日本杨桃</dd>
        </dl>
        <dl>
          <dt><img src="../assets/images/product.png"/></dt>
          <dd>日本杨桃</dd>
        </dl>
        <dl>
          <dt><img src="../assets/images/product.png"/></dt>
          <dd>日本杨桃</dd>
        </dl>
        <dl>
          <dt><img src="../assets/images/product.png"/></dt>
          <dd>日本杨桃</dd>
        </dl>
      </div>
    </div>

    <div class="inland-product">
      <div><img src="../assets/images/service_t1.png" width="50%"/></div>
      <div class="inland-product-list">
        <dl >
          <dt><img src="../assets/images/product.png"/></dt>
          <dd>日本杨桃</dd>
        </dl>
        <dl >
          <dt><img src="../assets/images/product.png"/></dt>
          <dd>日本杨桃</dd>
        </dl>
        <dl >
          <dt><img src="../assets/images/product.png"/></dt>
          <dd>日本杨桃</dd>
        </dl>
        <dl>
          <dt><img src="../assets/images/product.png"/></dt>
          <dd>日本杨桃</dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'service'
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
