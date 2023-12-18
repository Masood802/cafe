<script setup>
import navbar from "@/components/navbar.vue";
import Phone from "@/components/Phone.vue";
</script>

<template>
  <div class="bg-transparent absolute text-white w-full mx-10">
    <navbar></navbar>
  </div>

  <div
    class="w-full h-[550px] bg-[url('slider-image1.jpg')] bg-cover flex justify-between"
  >
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
</template>
