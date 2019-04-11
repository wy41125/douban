const network = {
  //获取列表数据
  getdata: function (parmes) {
    wx.request({
      url: parmes.ajaxUrl,
      data: {
        count: parmes.countNum ? parmes.countNum : 7,
      },
      success: function (res) {
        var datas = res.data.subject_collection_items;
        if (datas.length%3 === 2){
          datas.push(null);
        }
        if (parmes && parmes.success) {
          parmes.success(datas);
          wx.hideLoading();
        }
      }
    })
  },
  //获取详情数据
  getItemDetail: function (parmes){
    wx.request({//电影数据请求
      url: parmes.ajaxUrl + parmes.id,
      success: function (res) {
        if (parmes && parmes.success){
          parmes.success(res.data)
        }
      }
    })
  },
  getComment:function(parmes){
    wx.request({
      url: parmes.ajaxUrl,
      data:{
        count: 4,
        start: 0,
        for_mobile: 1
      },
      success:function(res){
        if (parmes && parmes.success) {
          parmes.success(res.data)
        }
      }
    })
  }
}

export { network }