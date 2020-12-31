// pages/movie/movie.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      currentIndex:0,//当前选中的 tab 下标
      bannerImgs:[
        "/images/banners/haibao1.png",
        "/images/banners/banner2.png",
        "/images/banners/banner3.png",
        "/images/banners/banner4.png",
        "/images/banners/banner5.png"
      ],
      windowWidth:0,//当前窗口宽
      windowHeight:0,//当前窗口高
      isShowBannerIndicator:true,
      isBannerAutoPlay:true,
      bannerShowDuration:1000,// banner item 显示持续时间
      swipeIntervel:5000 //滑动时间
  },

  /**
   * 点击 顶部的 tab事件
   * @param  e 
   */
  clickTab:function(e){
    //获取触发事件 标签的属性集合对象
    var attrsMap = e.currentTarget
    this.setData({
      currentIndex:attrsMap.id
    });

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     var curPage = this;
      wx.getSystemInfo({
        success: (result) => {
          curPage.setData({
            windowWidth:result.windowWidth,
            windowHeight:result.windowHeight
          })
        },
      })

      curPage.loadMoviesData();
  },

  loadMoviesData:function(e){
    var page = this;
    wx.request({
      url: 'http://m.maoyan.com/ajax/movieOnInfoList',
      method:"GET",
      data:{},//携带数据
      header:{//头部信息
          "Content-Type":"json"
      },
      dataType:"json",

      success:function(res){
          var dataObj = res.data
          console.log("dataObj= "+dataObj)
      }
    })
  }
 
})