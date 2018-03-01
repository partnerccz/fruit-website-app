<template>
  <div style="margin: 0px;">
    <div class="home-container">
      <div class="home-btn" id="home-btn" @click.navite="toHomePage()" style="height: 30px;position:relative;">
        <img src="../assets/images/home_btn.png" width="52" height="30"/>
        <!--<div style="position: absolute;right:10px;top:18px;">
          <img id="test" src="../assets/images/home_menu.png" width="30" height="30" @click.stop="showMenuList"/>
          &lt;!&ndash;<mt-popup v-model="popupVisible" position="right" style="">&ndash;&gt;
          <div id="menu-list" class="menu-list" @click.stop="stopEvent">
            <ul>
              <li class="none-type" @click.stop="toHomePage">首页</li>
              <li class="none-type" @click.stop="toServicePage">产品服务</li>
              <li class="none-type" @click.stop="toAboutPage">关于我们</li>
            </ul>
          </div>
          &lt;!&ndash;</mt-popup>&ndash;&gt;
        </div>-->
      </div>
      <div class="common-top" id="home-content">
        <home></home>
      </div>
    </div>
    <div class="service-container">
      <div class="home-btn" id="service-btn" @click.navite="toServicePage()">产品服务</div>
      <div class="common-top" id="service-content">
        <service></service>
      </div>
    </div>
    <div class="about-container">
      <div class="home-btn" id="about-btn" @click.navite="toAboutPage">关于我们</div>
      <div class="common-top" id="about-content">
        <about></about>
      </div>
    </div>
    <div class="invite-container">
      <div class="home-btn" id="invite-btn" @click.navite="toInvitePage">招聘信息</div>
      <div class="common-top" id="invite-content">
        <invite></invite>
      </div>
    </div>
  </div>
</template>

<script>
  import Home from './Home'
  import Service from './Service'
  import About from './About'
  import Invite from './Invite'

  export default {
    name: 'index',
    data: function () {
      return {
        displayIndex: 0,
        idStr: '',
        idContentArr: [],
        idBtnArr: [],
        popupVisible: false,
        isShowMenuList: false
      }
    },
    components: {
      Home,
      Service,
      About,
      Invite
    },
    mounted () {
      this.showPage()
    },
    methods: {
      toHomePage: function () {
        this.displayIndex = 0
        this.showPage()
      },
      toServicePage: function () {
        this.displayIndex = 1
        this.showPage()
      },
      toAboutPage: function () {
        this.displayIndex = 2
        this.showPage()
      },
      toInvitePage: function () {
        this.displayIndex = 3
        this.showPage()
      },
      showPage: function () {
        if (this.displayIndex === 0) {
          this.idStr = 'home-content'
          this.idContentArr[0] = 'service-content'
          this.idContentArr[1] = 'about-content'
          this.idContentArr[2] = 'invite-content'
          document.getElementById('service-btn').className = 'service-fixed-bottom'
          document.getElementById('service-btn').style.borderBottom = '1px solid #D6D6D6'
          document.getElementById('about-btn').className = 'about-fixed-bottom'
          document.getElementById('invite-btn').className = 'invite-fixed-bottom'
        } else if (this.displayIndex === 1) {
          this.idStr = 'service-content'
          this.idContentArr[0] = 'about-content'
          this.idContentArr[1] = 'home-content'
          this.idContentArr[2] = 'invite-content'
          this.idBtnArr[0] = 'about-btn'
          document.getElementById('service-content').style.marginTop = '120px'
          document.getElementById('service-btn').className = 'service-fixed-bottom-up'
          document.getElementById('invite-btn').className = 'invite-fixed-bottom-up'
          document.getElementById('about-btn').className = 'about-fixed-bottom'
          document.getElementById('about-btn').style.borderTop = '1px solid #D6D6D6'
        } else if (this.displayIndex === 2) {
          this.idStr = 'about-content'
          this.idContentArr[0] = 'home-content'
          this.idContentArr[1] = 'service-content'
          this.idContentArr[2] = 'invite-content'
          this.idBtnArr = []
          document.getElementById('about-content').style.marginTop = '180px'
          document.getElementById('home-btn').className = 'home-btn'
          document.getElementById('service-btn').className = 'service-fixed-bottom-up'
          document.getElementById('invite-btn').className = 'invite-fixed-bottom-up'
          document.getElementById('about-btn').className = 'about-fixed-bottom-up'
          // document.getElementById('about-btn').className = 'home-btn'
          // document.getElementById('service-btn').className = 'home-btn'
          // document.getElementById('about-btn').style.borderTop = '0'
        } else {
          this.idStr = 'invite-content'
          this.idContentArr[0] = 'home-content'
          this.idContentArr[1] = 'service-content'
          this.idContentArr[2] = 'about-content'
          this.idBtnArr = []
          document.getElementById('invite-content').style.margin = '0 0 130px 0'
          document.getElementById('invite-btn').className = 'home-btn'
          document.getElementById('home-btn').className = 'home-btn'
          document.getElementById('service-btn').className = 'service-fixed-bottom'
          document.getElementById('about-btn').className = 'about-fixed-bottom'
        }
        document.getElementById(this.idStr).style.display = 'block'
        document.getElementById(this.idContentArr[0]).style.display = 'none'
        document.getElementById(this.idContentArr[1]).style.display = 'none'
        document.getElementById(this.idContentArr[2]).style.display = 'none'
      },
      showMenuList: function () {
        if (this.isShowMenuList) {
          document.getElementById('menu-list').style.display = 'block'
          this.isShowMenuList = false
        } else {
          document.getElementById('menu-list').style.display = 'none'
          this.isShowMenuList = true
        }
        this.popupVisible = true
      },
      stopEvent: function () {
      }
    }
  }
</script>

<style scoped>
.home-btn{
  width:100%;
  padding:16px 0;
  background-color: #FCFCFC;
  border-bottom:1px solid #D6D6D6;
  text-align: center;
  font-size:20px;
  color:#4E4E4E;
}
#home-btn{
}
  .common-top{
  }
  #home-content{
    display: none;
  }
  #service-content{
    display: none;
  }
  #about-content{
    display: none;
  }
  #invite-content{
    display: none;
  }
  .menu-list{
    height: 320px;
    width:120px;
    position:absolute;
    right:-18px;
    top:32px;
    background-color: #F2F2F2;
    z-index: 300000;
    display: none;
    font-size:16px;
  }
  .none-type{
    list-style-type: none;
    text-align: left;
    line-height: 40px;
    border-bottom: 1px solid #e3e3e3;
   margin-left: -39px;
    text-indent: 16px;
  }
  .menu-list ui li{
    list-style-type: none;
  }
/* js引用到的样式 不可以删除*/
.about-fixed-bottom{
  position: fixed;
  left: 0;
  bottom:0;
  width:100%;
  padding:16px 0;
  background-color: #FCFCFC;
  border-bottom: 2px solid #D6D6D6;
  text-align: center;
  font-size:20px;
  color:#4E4E4E;
}
/* js引用到的样式 不可以删除*/
.service-fixed-bottom{
  position: fixed;
  left: 0;
  bottom: 60px;
  width:100%;
  padding:16px 0;
  background-color: #FCFCFC;
  border-bottom: 1px solid #D6D6D6;
  border-top: 1px solid #D6D6D6;
  text-align: center;
  font-size:20px;
  color:#4E4E4E;
}
.invite-fixed-bottom{
  position: fixed;
  left: 0;
  bottom: 120px;
  width:100%;
  padding:16px 0;
  background-color: #FCFCFC;
  border-bottom: 1px solid #D6D6D6;
  border-top: 1px solid #D6D6D6;
  text-align: center;
  font-size:20px;
  color:#4E4E4E;
}
.about-fixed-bottom-up{
  position: absolute;
  left: 0;
  top:180px;
  width:100%;
  padding:16px 0;
  background-color: #FCFCFC;
  border-bottom: 1px solid #D6D6D6;
  text-align: center;
  font-size:20px;
  color:#4E4E4E;
}
.service-fixed-bottom-up{
  position: absolute;
  left: 0;
  top:120px;
  width:100%;
  padding:16px 0;
  background-color: #FCFCFC;
  border-bottom: 1px solid #D6D6D6;
  text-align: center;
  font-size:20px;
  color:#4E4E4E;
}
  .invite-fixed-bottom-up{
    position: absolute;
    left: 0;
    top:60px;
    width:100%;
    padding:16px 0;
    background-color: #FCFCFC;
    border-bottom: 1px solid #D6D6D6;
    border-top: 1px solid #D6D6D6;
    text-align: center;
    font-size:20px;
    color:#4E4E4E;
  }
</style>
