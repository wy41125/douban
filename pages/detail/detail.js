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
    var url ="",that = this;
    network.getItemDetail({
      ajaxUrl: globalUrls.movieDetail,
      id: options.id,
      success:function(data){
        var tags =[];
        for(var i = 0 ; i < data.tags.length ;i++){
          tags.push(data.tags[i].name);
        }
        that.setData({
          item:data,
          tags:tags,
          value: data.extra.rating_group.rating.value,
          count: data.extra.rating_group.rating.count
        });
      }
    })
    if (options.type === 'show'){
      options.type = "tv"
    }
    network.getComment({
      ajaxUrl: globalUrls.movieComment + options.type +"/"+ options.id + "/interests",
      success:function(data){
        that.setData({
          comments: data,
        });
      }
    })
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