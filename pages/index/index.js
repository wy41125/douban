import {network} from "../../utils/network.js";
import {globalUrls} from "../../utils/urls.js"
const app = getApp()

Page({
  data: {
    
  },
  onLoad: function () {
    var that = this;
    network.getdata({//电影
      success:function(datas){
        that.setData({
          movies: datas
        });
      },
      ajaxUrl: globalUrls.movieList,
      countNum:10
    });
    network.getdata({//电视剧
      success: function (datas) {
        that.setData({
          tvs: datas
        });
      },
      ajaxUrl: globalUrls.tvList,
      countNum: 10
    });
    network.getdata({//综艺
      success: function (datas) {
        that.setData({
          tv_varietys: datas
        });
      },
      ajaxUrl: globalUrls.tv_varietyList,
      countNum: 10
    });
  },
})
