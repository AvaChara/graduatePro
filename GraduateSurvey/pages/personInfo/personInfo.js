// pages/personInfo/personInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menuitems: [{
        text: '姓名',
        icon: '/images/gr1.png',
        tips: '',
        arrows: '/images/center/you.png'
      },
      {
        text: '电话号码',
        icon: '/images/gr1.png',
        tips: '',
        arrows: '/images/center/you.png'
      },
      {
        text: '微信号',
        icon: '/images/gr1.png',
        tips: '',
        arrows: '/images/center/you.png'
      },
      {
        text: 'qq号',
        icon: '/images/gr1.png',
        tips: '',
        arrows: '/images/center/you.png'
      },
      {
        text: '电子邮箱',
        icon: '/images/gr1.png',
        tips: '',
        arrows: '/images/center/you.png'
      },
    ]
  },

  commit:function(){
    wx.showToast({
      title: '提交成功',
      icon: 'success',
      duration: 2000
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})