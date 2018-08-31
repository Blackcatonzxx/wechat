var app = getApp();
// 引入文件，---当前日期，时间
var util = require('../../utils/util2.js');
Page({
  data:{
    animationData:{},
    animationPhone:{},
    /* 日期信息开始 */
    date:null,
    /* 日期信息结束 */
    /* 科室选择开始 */
    index:null,
    NodeIndex:0,
    array: ["内 科", "外 科", "妇 科", "男 科", "不孕不育", "乳腺科", "无痛人流", "胃肠科", "肛肠科", "腋臭科", "肝病科", "疼痛科"],
    onloadNode: ["请选择",""],
    /* 科室选择结束 */
    imgUrls: [
      'https://litapp.gyxhyy.com/wechatimages/3.jpg',
      'https://litapp.gyxhyy.com/wechatimages/2.jpg',
      'https://litapp.gyxhyy.com/wechatimages/1.jpg'
    ],
  },
  
  onLoad:function ()
  {
    var that = this;
    var animationPhone = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
      delay: 1000,
    })

    setInterval(function () {
      that.animationPhone = animationPhone
      animationPhone.scale(1.5).step()
      animationPhone.scale(1).step()

      that.setData({
        animationPhone: animationPhone.export()
      })
    }, 2000)

  },


  // 每次切换到该页面就监听新赋值并设置...
  onShow:function () {
    var that = this;
      that.setData({
        index:app.getFromData.id,
      })
      if (app.getFromData.id != null) {
        that.setData({
          NodeIndex: 1,
        })
      }
      if (app.getFromData.id == null) {
        that.setData({
          NodeIndex: 0,
        })
      }
    app.getFromData.id = null;

    // 在每次进入该页面时，显示当前日期时间

    // 调用函数时，传入new Date()参数，返回值是日期和时间
    var time = util.formatTime(new Date());
    // 再通过setData更改Page()里面的data，动态更新页面的数据
    that.setData({
      date:time,
    })

    //  Animate style start
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
    })
    that.animation = animation
    animation.translateX(90).step()
    animation.translateX(0).step()

    that.setData({
      animationData:animation.export()
    })
  },


  /* 日期选择器开始 */
  bindDateChange:function (e)
  {
    this.setData({
      date:e.detail.value
    })
  },
  /* 日期选择器结束 */
  /* 科室选择器开始 */
  bindPickerChange:function (e)
  {
    this.setData({
      index:e.detail.value
    })
    if (e.detail.value)
    {
      this.setData({
        NodeIndex:1,
      })
    }
  },
  /* 科室选择器结束 */
  /* 拨打电话开始 */
  bindPhonedata:function () {
    wx.makePhoneCall({
      // Call to Phone PhoneNumber...
      phoneNumber: '0839-5513669'
    })
  },
  /* 拨打电话结束 */

  /* 表单提交信息开始 */
  formSubmit:function (e) {
    var data = e.detail.value
    // console.log(data)
  },
  /* 表单提交信息结束 */

  // reset ...
  bindresetshowToast:function () {
    wx.showToast({
      title:'重置成功',
      icon:'success',
      duration:2000
    })
  },
  /* submit Tost stop */

  // 商务通
  bindnavigate:function ()
  {
    wx.navigateTo({
      url:'../navigateTo/navigateTo',
    })
  },
})
