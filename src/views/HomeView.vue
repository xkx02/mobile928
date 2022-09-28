<template>
  <div class="home">
    <!-- 主题内容 -->
    <div class="nav">
      <div class="pic">
        <img src="../../public/imgs/images/img_02.png" alt="" />
      </div>
    </div>
    <div class="module">
      <van-grid :border="false" :column-num="4" :gutter="15">
        <van-grid-item>
          <van-image
            width="42"
            height="42"
            src="../../public/imgs/images/img_05.png"
          />
          <div class="module_title">限时抢购</div>
        </van-grid-item>
        <van-grid-item>
          <van-image
            width="42"
            height="42"
            src="../../public/imgs/images/img_07.png"
          />
          <div class="module_title">登录福利</div>
        </van-grid-item>
        <van-grid-item>
          <van-image
            width="42"
            height="42"
            src="../../public/imgs/images/img_09.png"
          />
          <div class="module_title">优惠券包</div>
        </van-grid-item>
        <van-grid-item>
          <van-image
            width="42"
            height="42"
            src="../../public/imgs/images/img_11.png"
          />
          <div class="module_title">推荐新品</div>
        </van-grid-item>
      </van-grid>
    </div>
    <div class="banner">
      <van-row>
        <van-col span="12" class="banner_img">
          <van-image
            width="173"
            height="189"
            src="../../public/imgs/images/img_20.png"
          />
        </van-col>
        <van-col span="12" class="banner_img">
          <van-image
            width="178"
            height="95"
            src="../../public/imgs/images/img_18.png"
          />
          <van-image
            width="172"
            height="93.5"
            src="../../public/imgs/images/img_23.png"
          />
        </van-col>
      </van-row>
    </div>
    <div class="banner_logo">
      <img src="../../public/imgs/images/img_21.png" alt="" />
    </div>
    <div class="product">
      <van-image
        width="100%"
        height="411"
        src="../../public/imgs/images/img_27.png"
      />
      <div class="product_cont">
        <div class="product_text">
          <div class="product_activity">活动时间：2022.08.20-2020.09.01</div>
          <div class="product_price">
            秒杀价<span>￥9.9</span>每个ID限购一次
          </div>
        </div>
        <div class="product_btn">立即抢购</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import {home_http} from '@/api/httpHome';
  // home_http().then(res=>console.log(res));
  async function getHome() {
    let {data} =await home_http();
    console.log(data);
  }
  getHome();
</script>

<style lang="scss" scoped>
.home {
  .nav {
    margin-bottom: 14px;
    .pic {
      width: 375px;
      height: 296px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .module {
    .module_title {
      font-size: 14px;
    }
    .van-image {
      margin-bottom: 12px !important;
    }
  }
  .banner {
    .banner_img {
      text-align: center;
    }
  }
  .banner_logo {
    width: 355px;
    margin: 0 auto;
    img {
      width: 100%;
    }
  }
  .product {
    width: 355px;
    margin: 0 auto 20px;
    .product_cont {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .product_text {
        .product_activity {
          font-size: 17px;
        }
        .product_price {
          font-size: 12px;
          span{
            color: #c60505;
            font-size: 25px;
            margin-right: 5px;
          }
        }
      }
      .product_btn{
        width: 80px;
        height: 23.5px;
        line-height: 23.5px;
        font-size: 16px;
        text-align: center;
        color: #fff;
        background: #c60505;
        border-radius: 30px;
      }
    }
  }
}
</style>
