<template>
  <div>
    <img
      class="image z-50"
      src="https://thantaitoi.vip/static/media/flag.fc2bd9290f8a3526f75d.png"
      alt=""
    />

    <div class="text-center mt-2 border border-[#00eaff] rounded-md overflow-hidden">
      <el-carousel :autoplay="false" height="114px">
        <el-carousel-item
          v-for="item in images"
          :key="item"
        >
          <div
            class="small justify-center h-fit"
            text="2xl"
          >
            <img
                class="w-full h-[114px] object-cover"
              :src="item"
              alt=""
              srcset=""
            />
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="flex items-center gap-2 leading-none py-2">
      <div class="block-text h-fit">
        <p class="font-bold">Không Giới Hạn</p>
        <p>Rút Tiền</p>
      </div>
      <div class="block-text h-fit">
        <p class="font-bold">Không Xác Minh</p>
        <p>Danh Tính</p>
      </div>
      <div class="block-text h-fit">
        <p class="font-bold">Hỗ Trợ Nhanh</p>
        <p>24/7</p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const images = [
  'https://thantaitoi.vip/static/media/bannerW06.4fc8f43470cdfddbfb7f.png',
  'https://thantaitoi.vip/static/media/bannerW06-2.ac275187fdb31d6d9e13.png',
  'https://thantaitoi.vip/static/media/bannerW06-3.f314b1d691ce800adaa1.png',
]
</script >
<style>
.image {
  position: absolute;
  width: 40%;
  object-fit: cover;
  top: -40px;
  left: -1px;
  rotate: -20deg;
  cursor: none;
}
.el-carousel__indicator {
  display: none !important;
}
.el-carousel__arrow{
    display: block !important;
    background-color: rgba(0, 0, 0, 0.6) !important;
}
.el-carousel__container{
    min-height: fit-content !important;
    max-height: fit-content !important;
}
.el-carousel__item{
    height: fit-content !important;
}
.block-text{
    flex: 1 1;
    padding: 10px 5px;
    background-color: rgb(205, 0, 0);
    color: #ffffff;
    border-radius: 10px;
    border: 1px solid #fff;
    text-align: center;
    font-weight: 500;
}
</style>
