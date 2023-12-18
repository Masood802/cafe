<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="w-full font-bold">
    <router-link to="/" class="px-3">HOME </router-link>
    <router-link to="#about" class="px-3">ABOUT </router-link>
    <router-link to="/" class="px-3">CHEF </router-link>
    <router-link to="/" class="px-3">MENU </router-link>
    <router-link to="/" class="px-3">CONTACT </router-link>
  </div>
</template>
