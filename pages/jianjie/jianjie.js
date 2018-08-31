Page({
  data:{
    img1: [
      'https://litapp.gyxhyy.com/wechatimages/hos2.jpg'
    ],
    img2: [
      'https://litapp.gyxhyy.com/wechatimages/hos1.jpg',
    ],
  },
  // call start
  bindPhonedata: function () {
    wx.makePhoneCall({
      // phone number
      phoneNumber: '18284974948'
    })
  },
})
