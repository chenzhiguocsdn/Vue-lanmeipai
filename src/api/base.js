/***
 * 接口配置
 */

// export const host='http://localhost:8888';

const base = {
  host: "http://iwenwiki.com", //基础地址
  bannerUrl: "/api/blueberrypai/getIndexBanner.php", //轮播接口
  login: "http://localhost:8888/login", //登录接口
  lanmei: "/api/blueberrypai/getBlueBerryJamInfo.php", //蓝莓酱 blueBerryjam_id
  getuser: "http://localhost:8888/getuser", //个人信息获取 发送token
  news: "/foo/touch/reconstruct/article/list/", //+type/0-10.html
  //穷游接口
  search: "/boo/qcross/home/ajax?action=hotelsearch&type=1", //搜索接口 keyword=xx
  tuijian:
    "/boo/qcross/home/index.php?action=recommend&timer=1638347951752&ajaxID=59b0b70acebeb65c1882399e", //今日推荐
};

export default base;
