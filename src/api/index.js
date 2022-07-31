/**
 * 公共请求方
 */
// 导入 base.js
import base from "./base";
import axios from "axios";
const api = {
  /**
   * 轮播图接口
   */
  getBanner() {
    return axios.get(base.host + base.bannerUrl);
  },
  /**
   * 登录接口
   */
  getLogin(params) {
    return axios.get(base.login, { params });
  },
  /**
   * 获取蓝莓酱 blueBerryjam_id
   */
  getLanmei(params) {
    return axios.get(base.host + base.lanmei, { params });
  },
  /**
   * 查看个人信息
   */
  getUser() {
    //这里没有看懂
    //获取token
    // let token = store.state.LoginModule.userinfo.token;
    //全局的 axios 默认值
    // axios.defaults.headers.authorization = token;
    // return axios.post(base.getuser);
  },
  getNews(type, num) {
    return axios
      .get(base.news + type + "/" + (num - 1) * 10 + "-10.html")
      .then((res) => {
        let data = JSON.parse(res.data.slice(9, -1));
        return data[type];
      });
  },
  /**
   * 穷游搜索接口
   */
  getSearch(params) {
    //{keyword:xx}
    return axios.get(base.search, {
      params,
    });
  },
  /**
   * 今日推荐 tuijian
   */
  getTuijian() {
    return axios.get(base.tuijian);
  },
};
export default api;
