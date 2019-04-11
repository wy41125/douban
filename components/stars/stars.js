// components/stars/stars.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    rate:{
      type:Number,
      value:0
    },
    starsSize:{
      type:Number,
      value:30 //rpx
    },
    fontSize:{
      type: Number,
      value: 24 //rpx
    },
    fontColor:{
      type:String,
      value:"#ccc"
    },
    istext:{
      type:Boolean,
      value:true
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  /**
   * 组件的生命周期方法
  */
  lifetimes:{
    attached:function(){
      var that = this;
      var rate = that.properties.rate;
      var higt = parseInt(rate / 2);
      var left = parseInt(rate%2);
      var gray = 5 - higt - left;
      var ratetext = rate && rate > 0 ? rate.toFixed(1):"未评分";
      var higts = [], lefts = [], grays = [];
      for (var i = 1; i <= higt ;i++){
        higts.push(i);
      }
      for (var i = 1; i <= left ; i++) {
        lefts.push(i);
      }
      for (var i = 1; i <= gray; i++) {
        grays.push(i);
      }
      that.setData({
        ratetext: ratetext,
        higts: higts,
        lefts: lefts,
        grays: grays
      });
    }
  }
})
