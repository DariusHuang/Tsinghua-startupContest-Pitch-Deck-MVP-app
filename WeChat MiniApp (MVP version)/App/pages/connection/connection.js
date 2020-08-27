// pages/connection/connection.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    connectionName:'',
    chatCount:0,
    chatContent:[{
      question:"王哥，我们看最近无人系统挺火的而且市场潜力巨大，我们准备创立无人直升机公司，您看资金那边怎么样？",
      answer:"无人系统可是个好方向啊，你和谁一起干？"
    },
  {
    question:"我在清华认识了两个博士后，一个学机械工程的，一个学人工智能的，都在Nature上发过一作",
    answer:"嗯，有意思。这样吧你开口，500万以下，我都可以直接给你转过去，但是项目要先给我看看。"
  },
  {
    question:"行，什么时候见面聊聊吧、你现在在哪做项目呢？",
    answer:"刚好在北京做一个无人驾驶公司的并购，我们今晚五道口老地方见"
  },
]
  },
  sendQuestion:function(){
    var that = this
    that.setData({
      chatCount:that.data.chatCount+1
    })
    console.log("chatCount: "+that.data.chatCount)
  },
  navigateBack_NameList:function(){

  },

  /**
   * 生命周期函数--监听页面加载
   */
  navigateTo_connectionList:function(){
    wx.navigateTo({
      url: '/pages/connectionList/connectionList',
})
  },
  onLoad: function (options) {
    const app = getApp()
    var that = this
    that.setData({
      playerLevel:app.globalData.playerLevel,
      // 联系人名单会有数据(connectionId)传过来，以确定点击的是第几个人
      connectionName: app.globalData.connectionNameList[options.connectionId]
      })

      if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true,
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})