<template>
  <div id="tuancontent">
    <!-- 轮播图 -->
    <div class="tuancontent_banner">
      <a-carousel autoplay>
        <div v-for="(item,index) in pinimg" :key="index">
          <img class="tuancontent_img" :src="item" />
        </div>
      </a-carousel>
    </div>
    <!-- filterlist -->
    <div class="filterlist">
      <ul>
        <li
          v-for="(item,index) in filterlistli"
          :key="index"
          @click="filterlistclack(index)"
          :class="filterlistinfo===index ? 'filterlistactive' :''"
        >{{item}}</li>
      </ul>
    </div>
    <!-- tuanlistbox -->
    <div class="tuanlistbox">
      <ul class="tuanlist" v-show="tuanshow1" ref="t1">
        <!-- 默认 -->
        <li class="tuanlistli" v-for="(item,index) in reco_list" :key="index">
          <div class="tuanlistli_left">
            <a href="#">
              <img :src="item.image_url" />
            </a>
          </div>
          <div class="tuanlistli_right">
            <p class="tuanlistli_right_top">
              <span>当当自营</span>
              {{item.name}}
            </p>
            <div class="tuanlistli_right_bottom">
              <div class="tuanlistli_right_left">
                <p>
                  <span>2人团</span>已团151人
                </p>
                <p>
                  ￥{{item.ebook_price}}
                  <del>￥{{item.price}}</del>
                </p>
                <p>100%的好评（{{item.category_id}}人）</p>
              </div>
              <div class="tuanlistli_right_right">
                <a href="#">去拼团</a>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <!-- 热度 数据需要每天换接口ID才-->
      <ul class="tuanlist" v-show="tuanshow2" ref="t2">
        <li class="tuanlistli" v-for="(item0,index) in tuan1list" :key="index">
          <div class="tuanlistli_left">
            <a href="#">
              <img :src="item0.img_url" />
            </a>
          </div>
          <div class="tuanlistli_right">
            <p class="tuanlistli_right_top">
              <span>当当自营</span>
              {{item0.product_name}}
            </p>
            <div class="tuanlistli_right_bottom">
              <div class="tuanlistli_right_left">
                <p>
                  <span>2人团</span>已团151人
                </p>
                <p>
                  ￥{{item0.sale_price}}
                  <del>￥{{item0.original_price}}</del>
                </p>
                <p>100%的好评（{{item0.shopId}}人）</p>
              </div>
              <div class="tuanlistli_right_right">
                <a href="#">去拼团</a>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <!-- 价格 数据需要每天换接口ID才-->
      <ul class="tuanlist" v-show="tuanshow3" ref="t3">
        <li class="tuanlistli" v-for="(item,index) in tuan2list" :key="index">
          <div class="tuanlistli_left">
            <a href="#">
              <img :src="item.img_url" />
            </a>
          </div>
          <div class="tuanlistli_right">
            <p class="tuanlistli_right_top">
              <span>当当自营</span>
              {{item.product_name}}
            </p>
            <div class="tuanlistli_right_bottom">
              <div class="tuanlistli_right_left">
                <p>
                  <span>2人团</span>已团151人
                </p>
                <p>
                  ￥{{item.sale_price}}
                  <del>￥{{item.original_price}}</del>
                </p>
                <p>100%的好评（{{item.shopId}}人）</p>
              </div>
              <div class="tuanlistli_right_right">
                <a href="#">去拼团</a>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <!-- 好评 数据需要每天换接口ID才-->
      <ul class="tuanlist" v-show="tuanshow4" ref="t4">
        <li class="tuanlistli" v-for="(item,index) in tuan3list" :key="index">
          <div class="tuanlistli_left">
            <a href="#">
              <img :src="item.img_url" />
            </a>
          </div>
          <div class="tuanlistli_right">
            <p class="tuanlistli_right_top">
              <span>当当自营</span>
              {{item.product_name}}
            </p>
            <div class="tuanlistli_right_bottom">
              <div class="tuanlistli_right_left">
                <p>
                  <span>2人团</span>已团151人
                </p>
                <p>
                  ￥{{item.sale_price}}
                  <del>￥{{item.original_price}}</del>
                </p>
                <p>100%的好评（{{item.shopId}}人）</p>
              </div>
              <div class="tuanlistli_right_right">
                <a href="#">去拼团</a>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <!-- 最新 数据需要每天换接口ID才-->
      <ul class="tuanlist" v-show="tuanshow5" ref="t5">
        <li class="tuanlistli" v-for="(item,index) in tuan4list" :key="index">
          <div class="tuanlistli_left">
            <a href="#">
              <img :src="item.img_url" />
            </a>
          </div>
          <div class="tuanlistli_right">
            <p class="tuanlistli_right_top">
              <span>当当自营</span>
              {{item.product_name}}
            </p>
            <div class="tuanlistli_right_bottom">
              <div class="tuanlistli_right_left">
                <p>
                  <span>2人团</span>已团151人
                </p>
                <p>
                  ￥{{item.sale_price}}
                  <del>￥{{item.original_price}}</del>
                </p>
                <p>100%的好评（{{item.shopId}}人）</p>
              </div>
              <div class="tuanlistli_right_right">
                <a href="#">去拼团</a>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { home_list, pinmiao1, pinmiao2, pinmiao3, pinmiao4 } from "api/movie";
// import {pinmiao1,pinmiao2,pinmiao3,pinmiao4,pinmiao5,pinmiao6,
//         pinmiao7,pinmiao8,pinmiao9,pinmiao10,pinmiao11,pinmiao12
// } from "api/movie"
export default {
  name: "tuancontent",
  data() {
    return {
      filterlistli: ["默认", "热度", "价格", "好评", "最新"],
      filterlistinfo: 0,
      pinimg: [
        "http://img63.ddimg.cn/2019/8/5/2019080518033989076.jpg",
        "http://img62.ddimg.cn/auction/49085060-34de-416e-bdf6-c7ceda7c8500.jpg",
        "http://img63.ddimg.cn/2019/8/5/2019080518033989076.jpg"
      ],
      reco_list: [],
      tuan1list: [],
      tuan2list: [],
      tuan3list: [],
      tuan4list: [],
      tuanshow1: true,
      tuanshow2: false,
      tuanshow3: false,
      tuanshow4: false,
      tuanshow5: false
    };
  },
  async created() {
    let dafeult = await home_list();
    let tuan1 = await pinmiao1();
    let tuan2 = await pinmiao2();
    let tuan3 = await pinmiao3();
    let tuan4 = await pinmiao4();
    this.reco_list = dafeult.reco_list;
    this.tuan1list = tuan1.data.productsInfo;
    this.tuan2list = tuan2.data.productsInfo;
    this.tuan3list = tuan3.data.productsInfo;
    this.tuan4list = tuan4.data.productsInfo;
  },
  methods: {
    filterlistclack(index) {
      this.filterlistinfo = index;
      switch (index) {
        case 0:
          this.tuanshow1 = true;
          (this.tuanshow2 = false),
            (this.tuanshow3 = false),
            (this.tuanshow4 = false),
            (this.tuanshow5 = false);
          break;
        case 1:
          this.tuanshow1 = false;
          (this.tuanshow2 = true),
            (this.tuanshow3 = false),
            (this.tuanshow4 = false),
            (this.tuanshow5 = false);
          break;
        case 2:
          this.tuanshow1 = false;
          (this.tuanshow2 = false),
            (this.tuanshow3 = true),
            (this.tuanshow4 = false),
            (this.tuanshow5 = false);
          break;
        case 3:
          this.tuanshow1 = false;
          (this.tuanshow2 = false),
            (this.tuanshow3 = false),
            (this.tuanshow4 = true),
            (this.tuanshow5 = false);
          break;
        case 4:
          this.tuanshow1 = false;
          (this.tuanshow2 = false),
            (this.tuanshow3 = false),
            (this.tuanshow4 = false),
            (this.tuanshow5 = true);
          break;
      }
    }
  }
};
</script>

<style>
#tuancontent {
  position: absolute;
  width: 100%;
  top: 0.44rem;
  bottom: 0.45rem;
  overflow-y: auto;
  font-size: 0.14rem;
}
/* 轮播图 */
.tuancontent_banner,
.tuancontent_img {
  width: 100%;
  height: 1.1rem;
}
.ant-carousel,
.slick-slide {
  text-align: center;
  width: 100%;
  height: 1.1rem;
  background: #364d79;
  overflow: hidden;
}
.ant-carousel,
.slick-slide h3 {
  color: #fff;
}
/* filterlist */
.filterlist,
.filterlist > ul {
  width: 100%;
  height: 0.44rem;
}
.filterlist > ul > li {
  width: 0.75rem;
  height: 0.42rem;
  float: left;
  text-align: center;
  line-height: 0.42rem;
}
.filterlistactive {
  color: #f2303c;
}
/* tuanlistbox */
.tuanlistbox,
.tuanlist,
.tuanlistli_left > a,
.tuanlistli_left > a > img {
  width: 100%;
  height: 100%;
}
.tuanlistbox {
  border-top: 1px solid #ccc;
}
.tuanlistli {
  width: 100%;
  height: 1.3rem;
  padding: 0.1rem 0.15rem;
}
.tuanlistli_left {
  width: 1.1rem;
  height: 1.1rem;
  float: left;
}
.tuanlistli_right {
  width: 2.3rem;
  height: 1.04rem;

  float: right;
}
.tuanlistli_right_top {
  width: 2.3rem;
  height: 0.36rem;
  font-size: 0.14rem;
  overflow: hidden;
}
.tuanlistli_right_top > span,
.tuanlistli_right_left > p > span {
  width: 0.52rem;
  height: 0.14rem;
  border: 1px solid #f2303c;
  color: #f2303c;
  font-size: 0.12rem;
  border-radius: 0.04rem;
  margin-right: 0.05rem;
}
.tuanlistli_right_bottom {
  width: 2.3rem;
  height: 0.6rem;
  display: flex;
}
.tuanlistli_right_left {
  width: 2rem;
  height: 0.6rem;
}
.tuanlistli_right_left > p {
  margin: 0;
  color: #a6a6a6;
}
.tuanlistli_right_left > p:nth-child(2) {
  color: #f2303c;
}
.tuanlistli_right_left > p:nth-child(3),
.tuanlistli_right_left > p > del {
  font-size: 0.12rem;
  color: #a6a6a6;
}
.tuanlistli_right_right {
  width: 0.6rem;
  height: 0.3rem;
  margin-top: 0.2rem;
  text-align: center;
  line-height: 0.3rem;
  background: #ff463c;
  border-radius: 0.06rem;
}
.tuanlistli_right_right > a {
  width: 100%;
  height: 100%;
  color: #fff;
}
</style>