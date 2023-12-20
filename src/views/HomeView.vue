<script setup>
import navbar from "@/components/navbar.vue";
import slider from "@/components/slider.vue";
import Menu from "./Menu.vue";
import Chefs from "./Chefs.vue";
import About from "./AboutView.vue";
</script>

<template>
  <div
    class="bg-transparent absolute text-white w-full mx-10"
  >
    <navbar></navbar>
  </div>

  <div
    class="w-full h-[600px] bg-[url('slider-image3.jpg')] bg-cover flex justify-between bg-center"
  >
    <div
      class="w-2/5 text-left p-4 absolute top-32 ml-6 text-slate-100 font-bold"
    >
      <h2>EATERY CAFE & RESTORENT</h2>
      <p class="text-3xl my-4">
        Our mission is to provide an unforgettable experience
      </p>
      <button
        class="bg-transparent hover:bg-red-700 hover:border-none px-6 py-2 text-sm border border-gray-400 transition-all duration-500 ease-in"
      >
        Discover Menu
      </button>
    </div>
  </div>
  <about></about>
  <Chefs></Chefs>
  <Menu></Menu>
  <slider></slider>
</template>
