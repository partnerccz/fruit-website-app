<template>
    <div class="about-home">
      <div class="about-bgi"><img src="../assets/images/home_bgi.jpg"/></div>
      <div class="about-content">
        <ul>
          <li>企业口号</li>
          <li>科技牵手水果改变未来</li>
        </ul>
        <ul>
          <li>企业愿景</li>
          <li>成为客户最可靠的合作伙伴</li>
        </ul>
        <ul>
          <li>企业使命</li>
          <li>使用互联网技术改造我们的供应链服务，让水果经营更高效</li>
        </ul>
        <ul>
          <li>企业精神</li>
          <li>高效的运营，放心的服务</li>
        </ul>
        <ul>
          <li>核心价值观</li>
          <li>团结一致，奋发向上，礼节谦让，适应形势，感谢报恩</li>
        </ul>
        <ul>
          <li>服务理念</li>
          <li>诚信友善、务实高效</li>
        </ul>
        <ul>
          <li></li>
          <li>在没有标准产品和服务的水果行业里， 我们用心提供优质服务，运用互联网技术和行业知识，为提升用户竞争力做各种努力， 并坚信科技牵手果业一定可以改变未来。</li>
        </ul>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'about'
  }
</script>

<style scoped>
  .about-home{
    text-align: left;
  }
  .about-bgi{
    width:100%;
  }
  .about-bgi img{
    width:100%;
  }
  .about-content{
    margin:0px;
  }
  .about-content ul{
    padding-right:55px;
  }
  .about-content ul li{
    list-style-type: none;
    margin:0px;
  }
  .about-content ul li:nth-child(1){
    font-weight: 500;
    font-size:20px;
    margin-bottom:8px;
  }
  .about-content ul li:nth-child(2){
    margin-bottom:28px;
  }
</style>
