<script setup>
import { onMounted, ref } from "vue";
let images = ref([
  "slider-image1.jpg",
  "slider-image2.jpg",
  "slider-image3.jpg",
]);
let i = ref(0);
onMounted(() => {
  setInterval(() => {
    i.value = i.value + 1;
    if (i.value == 3) {
      i.value = 0;
    }
  }, 10 * 1000);
});
</script>
<template>
  <div
    class="w-full h-[700px]  overflow-auto"
  >
      <img :src="images[i]" alt="" class="w-full object-cover" />
  </div>
</template>
