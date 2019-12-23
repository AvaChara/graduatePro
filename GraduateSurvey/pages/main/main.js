// pages/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '../../images/swiperImage/swiper-3.jpeg',
      '../../images/swiperImage/swiper-2.jpeg',
      '../../images/swiperImage/swiper-1.jpeg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 500,

    isShowConfirm: false,

    array: [
      {message: 'foo',}, 
      {message: 'bar'}],
  },

  showWindows: function() {
    this.setData({
      isShowConfirm: true
    })
  },
  /**
   * 在弹窗中填写问卷编号、并获取值
   */
  setValue: function(e) {
    this.setData({
      number: e.detail.value
    })
  },
  /**
   * 对话框取消按钮点击事件
   */
  onCancel: function() {
    var that = this
    that.setData({
      isShowConfirm: false,
    })
  },

  /**
   * 对话框确认按钮点击事件
   */
  onConfirm: function() {
    wx.showToast({
      title: '提交成功',
      icon: 'success',
      duration: 2000,
      success: function () {
        setTimeout(function () {
          wx.navigateTo({
            url: '/pages/questionnaire/questionnaire',
          })
        },500);
      }
    })
    var that = this
    that.setData({
      isShowConfirm: false,
    });
  },


})