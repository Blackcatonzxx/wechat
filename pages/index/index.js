//index.js
//获取应用实例
const app = getApp();

Page({
  data:{
    TopTitleImage: ['https://litapp.gyxhyy.com/nk/up.jpg'],
    imgUrls: [
      'https://litapp.gyxhyy.com/3.jpg',
      'https://litapp.gyxhyy.com/4.jpg',
      'https://litapp.gyxhyy.com/2.jpg'
      /*

        autohr: kexin 2018/7/25 更改周年庆，中心医院内容
        version: 1.1 
        old image
        'https://litapp.gyxhyy.com/wechat_fkimages/top3.jpg',
        'https://litapp.gyxhyy.com/wechat_fkimages/top2.jpg',
        'https://litapp.gyxhyy.com/wechatimages/4.png',
        'https://litapp.gyxhyy.com/1.jpg',

      */
    ],
    /*
    autohr: kexin 2018/7/25 更改周年庆，中心医院内容
        version: 1.1
        old image
    imgPage1: ['https://litapp.gyxhyy.com/nk/yygh.png'],
    imgPage2: ['https://litapp.gyxhyy.com/nk/kswz.png'],
    imgPage3: ['https://litapp.gyxhyy.com/nk/yypp.png'],
    imgPage4: ['https://litapp.gyxhyy.com/nk/lylx.png'],
    
    */


    imgPage1: ['../../images/tabbar_three_ccc.png'],
    imgPage2: ['../../images/tabbar_two_ccc.png'],
    imgPage3: ['../../images/tabbar_one_ccc.jpg'],
    imgPage4: ['../../images/tabbar_four_ccc.png'],

    imgUrls2:[
      'https://litapp.gyxhyy.com/wechat_fkimages/fkzj6.jpg',
      'https://litapp.gyxhyy.com/wechat_fkimages/fkzj2.jpg',
      
    ],
    imgUrls3:[
      'https://litapp.gyxhyy.com/szxdoctor/pl.jpg',
      'https://litapp.gyxhyy.com/szxdoctor/wz.jpg',
      'https://litapp.gyxhyy.com/szxdoctor/xxm.jpg',
      'https://litapp.gyxhyy.com/szxdoctor/zhj.jpg',
      'https://litapp.gyxhyy.com/szxdoctor/zj.jpg',
      'https://litapp.gyxhyy.com/szxdoctor/zwx.jpg',
    ],

    imgUrls4:[
      'https://litapp.gyxhyy.com/szxdoctor/rongyao.jpg',
      'https://litapp.gyxhyy.com/szxdoctor/rongyao2.jpg',
    ],
    jdsb1:['https://litapp.gyxhyy.com/wechat_fkimages/sb1.jpg'],
    jdsb2:['https://litapp.gyxhyy.com/wechat_fkimages/sb2.jpg'],
    jdsb3:['https://litapp.gyxhyy.com/wechat_fkimages/sb3.png'],
    jdsb4:['https://litapp.gyxhyy.com/wechat_fkimages/sb4.jpg'],
    jdsb5:['https://litapp.gyxhyy.com/wechat_fkimages/sb5.jpg'],
    jdsb6:['https://litapp.gyxhyy.com/wechat_fkimages/sb6.png'],
    ry: ['https://litapp.gyxhyy.com/wechat_fkimages/ry.jpg'],

    bottom: [
      'https://litapp.gyxhyy.com/wechat_fkimages/bottom1.jpg',
      'https://litapp.gyxhyy.com/wechat_fkimages/bottom2.jpg',
      'https://litapp.gyxhyy.com/wechat_fkimages/bottom3.jpg',
      'https://litapp.gyxhyy.com/wechat_fkimages/bottom4.jpg',
      'https://litapp.gyxhyy.com/wechat_fkimages/bottom5.jpg'
    ],
    titleimage: ['https://litapp.gyxhyy.com/wechat_fkimages/page3.png'],
    bottom_doctor: ['https://litapp.gyxhyy.com/wechat_fkimages/bottom_doctor.png'],
  },

  // On Show
  onLoad:function ()
  {
    var nav = function ()
    {
      wx.navigateTo({
        url:'../navigateTo/navigateTo',
      })
    }
    setTimeout(nav,12000);
  },
  // Call Phone
  bindPhone:function ()
  {
    wx.makePhoneCall({
      phoneNumber:'0839-5513669',
    })
  },

  // 商务通跳转
  bindnavigate:function ()
  {
    wx.navigateTo({
      url:'../navigateTo/navigateTo',
    })
  },
  // 医院品牌
  bindIntroduction:function ()
  {
    wx.navigateTo({
      url:'../jianjie/jianjie'
    })
  },
  // 预约挂号
  bindFrom:function ()
  {
    wx.switchTab({
      url:'../from/from',
    })
  },
  // 来院路线
  bindMap:function ()
  {
    wx.switchTab({
      url:'../map/map',
    })
  },

  // 小程序分享功能添加

  onShareAppMessage:function ()
  {
    return {
      title:'广元协和医院13周年庆',
      desc: '广元协和医院13周年庆',
      path: '/pages/index/index'
    }
  },

})
