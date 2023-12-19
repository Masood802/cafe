<script setup>
import { onMounted, ref } from "vue";
let images = ref([
  "slider-image1.jpg",
  "slider-image2.jpg",
  "slider-image3.jpg",
]);
let i = ref(0);
onMounted(() => {
  document.getElementById("div1").style.backgroundColor = "White";
  setInterval(() => {
    if (i.value == 0 || i.value <= 2) {
      if (i.value == 0) {
        document.getElementById("div1").style.backgroundColor = "White";
        document.getElementById("div2").style.backgroundColor = "Transparent";
        document.getElementById("div3").style.backgroundColor = "Transparent";
      }
      i.value = i.value + 1;
      if (i.value == 1) {
        document.getElementById("div2").style.backgroundColor = "White";
        document.getElementById("div1").style.backgroundColor = "Transparent";
        document.getElementById("div3").style.backgroundColor = "Transparent";
      }
      if (i.value == 2) {
        document.getElementById("div3").style.backgroundColor = "White";
        document.getElementById("div2").style.backgroundColor = "Transparent";
        document.getElementById("div1").style.backgroundColor = "Transparent";
      }
      if (i.value == 3) {
        i.value = 0;
        document.getElementById("div1").style.backgroundColor = "White";
        document.getElementById("div2").style.backgroundColor = "Transparent";
        document.getElementById("div3").style.backgroundColor = "Transparent";
      }
    }
  }, 10 * 1000);
});
</script>
<template>
  <div class="w-1/2 my-10 mx-auto relative">
    <img :src="images[i]" alt="" />
    <div
      class="w-3 h-3 rounded-full border border-gray-50 absolute bottom-5 left-[45%]"
      id="div1"
    ></div>
    <div
      class="w-3 h-3 rounded-full border border-gray-50 absolute bottom-5 left-[50%]"
      id="div2"
    ></div>
    <div
      class="w-3 h-3 rounded-full border border-gray-50 absolute bottom-5 left-[55%]"
      id="div3"
    ></div>
  </div>
</template>
