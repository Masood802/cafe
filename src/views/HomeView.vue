<script setup>
import navbar from "@/components/navbar.vue";
import Phone from "@/components/Phone.vue";
</script>

<template>
  <div
    class="w-full h-[450px] bg-[url('slider-image1.jpg')] bg-cover flex justify-between"
  >
    <div class="w-[20%] m-2">
      <h2 class="text-white p-4 font-bold text-xl">
        Eatery <strong class="text-red-800">.</strong> Cafe
      </h2>
    </div>
    <div class="w-[45%] text-white p-4 m-2">
      <navbar></navbar>
    </div>
    <div class="w-[30%] mt-2 text-white flex justify-start items-start">
      <span class="p-4 font-bold flex"
        >Call Now <phone class="p-1"></phone>0311 2133333</span
      >
      <button class="px-6 py-4 bg-red-700">Reserve a Table</button>
    </div>
    <div
      class="w-2/5 text-left p-4 absolute top-32 ml-6 text-slate-100 font-bold"
    >
      <h2>EATERY CAFE & RESTORENT</h2>
      <p class="text-3xl my-4">
        Our mission is to provide an unforgettable experience
      </p>
      <button class="bg-red-700 px-6 py-2 text-sm">Discover Menu</button>
    </div>
  </div>
  <div id="about" class="w-4/5 h-[450px] mx-20 flex justify-center items-center my-12">
    <div class="w-1/2">
      <p class="text-xs text-gray-400 my-12">READ OUR STORY</p>
      <h2 class="w-full text-4xl font-bold text-gray-800 leading-normal">
        We've been Making The<br />
        Delicious Foods Since 1999
      </h2>
      <p class="w-full py-3">
        Fusce hendrerit malesuada lacinia. Donec semper semper sem vitae
        malesuada. Proin scelerisque risus et ipsum semper molestie sed in nisi.
        Ut rhoncus congue lectus, rhoncus venenatis leo malesuada id. Sed
        elementum vel felis sed scelerisque. In arcu diam, sollicitudin eu nibh
        ac, posuere tristique magna. You can use this template for your cafe or
        restaurant website. Please tell your friends about templatemo. Thank
        you.
      </p>
    </div>
    <div class="w-2/3 m-2 p-2">
      <img src="/about-image.jpg" alt="aboutImage">
    </div>
  </div>
</template>
