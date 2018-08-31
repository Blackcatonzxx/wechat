Page({
  data: {
    imgUrls: [
      'https://litapp.gyxhyy.com/wechatimages/3.jpg',
      'https://litapp.gyxhyy.com/wechatimages/2.jpg',
      'https://litapp.gyxhyy.com/wechatimages/1.jpg'
    ],
    doctor1: [
      'https://litapp.gyxhyy.com/wechatimages/doctor1.jpg',
    ],
    doctor2: [
      'https://litapp.gyxhyy.com/wechatimages/doctor2.jpg',
    ],
    doctor4: [
      'https://litapp.gyxhyy.com/wechatimages/doctor4.jpg',
    ],
    doctor5: [
      'https://litapp.gyxhyy.com/wechatimages/doctor5.jpg',
    ],
    doctor6: [
      'https://litapp.gyxhyy.com/wechatimages/doctor6.jpg',
    ],
    doctor7: [
      'https://litapp.gyxhyy.com/wechatimages/doctor7.jpg',
    ],
    doctor8: [
      'https://litapp.gyxhyy.com/wechatimages/doctor8.jpg',
    ],
    doctor9: [
      'https://litapp.gyxhyy.com/wechatimages/doctor9.jpg',
    ],
    doctor10: [
      'https://litapp.gyxhyy.com/wechatimages/doctor10.jpg',
    ],
    doctor12: [
      'https://litapp.gyxhyy.com/wechatimages/doctor12.jpg',
    ],
    doctor13: [
      'https://litapp.gyxhyy.com/wechatimages/doctor13.jpg',
    ],
    doctor14: [
      'https://litapp.gyxhyy.com/wechatimages/doctor14.jpg',
    ],
  },
  bindfrom:function () {
    wx.switchTab ({
      url:'../from/from',
    })
  },
  bindnavigate: function () {
    wx.navigateTo({
      url: '../navigateTo/navigateTo',
    })
  }
})