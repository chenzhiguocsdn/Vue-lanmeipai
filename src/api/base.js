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
};

export default base;
