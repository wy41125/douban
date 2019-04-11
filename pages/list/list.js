import { network } from "../../utils/network.js";
import { globalUrls } from "../../utils/urls.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中...',
    })
    var dataUrl = "",that = this,pageTitle ="",type="";
    switch (options.type){
      case 'movie':
        dataUrl = globalUrls.movieList;
        pageTitle = "电影";
        type = "movie";
        break;
      case 'tv':
        dataUrl = globalUrls.tvList;
        pageTitle = "电视剧";
        type = "tv";
        break;
      case 'tv_variety':
        dataUrl = globalUrls.tv_varietyList;
        pageTitle = "综艺";
        type = "show";
        break;
    }
    wx.setNavigationBarTitle({
      title: pageTitle,
    });
    network.getdata({//电影
      success: function (datas) {
        that.setData({
          items: datas,
          type: type
        });
      },
      ajaxUrl: dataUrl,
      countNum: 1000
    });
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