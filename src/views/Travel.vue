<template>
  <div>
    <div class="container">
      <img
        src="../assets/images/banner.jpg"
        alt="背景图"
        width="100%"
        height="500px"
      />
      <div class="inp">
        <!-- 输入框 -->
        <el-input
          placeholder="请输入内容"
          v-model="input"
          clearable
          class="input"
        >
        </el-input>
        <!-- 定位展示内容搜索区域 -->
        <div class="show-data" v-show="isShow">
          <ul>
            <li class="city">城市</li>
            <li v-for="item in list" :key="item.cn_name" class="cities">
              <a :href="item.url">
                {{ item.cn_name }} <span>{{ item.en_name }}</span>
                <span class="right" v-if="item.count > 0">
                  {{ item.count }} 家酒店
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="backgroundpicture">
        <div class="bgp-container">
          <img
            src="../assets/images/left.jpg"
            alt="左背景图"
            width="740px"
            height="110px"
          />
          <img
            src="../assets/images/right.jpg"
            alt="有背景图"
            width="400px"
            height="110px"
          />
        </div>
      </div>
    </div>
    <div class="today">
      <div class="container">
        <ul>
          <li v-for="item in listJin" :key="item.desc">
            <img :src="item.data.pic" alt="" width="275px" height="180px" />
            <div>
              <a :href="item.data.href"
                ><span>{{ item.data.subject }}</span></a
              >
            </div>
            <div class="read-right">
              <span v-if="item.data.views">{{ item.data.views }}预览过</span>
              <span v-else-if="item.data.tag">{{ item.data.tag }}</span>
              <span v-else v-html="item.data.price"></span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
      input: "",
      list: [], //搜索的列表数据
      listJin: [], // 今日推荐数据
    };
  },
  created() {
    // 3. 今日推荐数据
    this.$api.getTuijian().then((res) => {
      console.log("今日推荐", res.data);
      this.listJin = res.data.data;
      console.log("今日推荐", this.listJin);
    });
  },
  watch: {
    input(val) {
      console.log("val", val);
      this.$api.getSearch({ keyword: val }).then((res) => {
        console.log("res-------", res.data);
        if (!res.data || res.data.data.list.length == 0) {
          this.isShow = false;
          this.list = [];
          return;
        }
        this.isShow = true;
        this.list = res.data.data.list;
      });
    },
  },
};
</script>

<style lang="less" scoped>
.container {
  position: relative;
}
.inp {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -300px;
  width: 650px;
  height: 60px;
  background-color: #6386f6;
  opacity: 0.9;
  border-radius: 10px;
}
.input {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 600px;
  margin-left: -300px;
  margin-top: -20px;
  opacity: 0.7;
}
.show-data {
  position: absolute;
  top: 58px;
  left: 24px;
  width: 600px;
  background-color: #fff;
  border-radius: 10px;
  .city {
    margin: 10px 10px;
  }
  span {
    color: #999999;
  }
  .cities {
    margin: 10px;
    .right {
      float: right;
    }
  }
}
a:link {
  text-decoration: none;
  color: #404040;
}
a:active {
  text-decoration: none;
}

a:visited {
  text-decoration: none;
  color: #404040;
}

.backgroundpicture {
  .bgp-container {
    width: 1200px;
    margin: 0 auto;
    img {
      margin-left: 20px;
    }
  }
}
.today {
  .container {
    width: 1200px;
    margin: 10px auto;
    li {
      position: relative;
      float: left;
      width: 275px;
      height: 280px;
      margin-left: 20px;
      margin-bottom: 10px;
      border: 1px solid #ccc;
      .read-right {
        span {
          position: absolute;
          right: 0;
          bottom: 0;
        }
      }
    }
  }
}
</style>
