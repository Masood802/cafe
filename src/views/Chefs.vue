<template>
  <div id="shef" class="w-full h-auto my-10 bg-slate-50 shadow-sm">
    <h1 class="text-4xl font-bold text-center my-6 pt-20 text-gray-600">
      Meet our Chefs
    </h1>
    <h2 class="text- font-semibold uppercase text-center text-gray-400 pb-8">
      they are nice and friendly
    </h2>
    <div class="w-3/5 mx-auto flex justify-center items-center h-screen">
      <div
        class="w-1/3 mx-2 flex flex-col justify-center items-center group relative"
      >
        <div class="overflow-hidden">
          <img
            src="/team-image1.jpg"
            alt=""
            class="w-full scale-100 group-hover:scale-110 transition-all duration-300 ease-linear"
          />
        </div>
        <h2 class="font-bold text-center text-xl pt-4 text-gray-700">
          New Catherine
        </h2>
        <p class="font-bold text-center pt-1 pb-4 text-gray-700 text-sm">
          KITCHEN OFFICER
        </p>
        <div
          class="absolute w-full bg-black h-1 my-auto bottom-[5.3em] opacity-0 group-hover:h-[550px] group-hover:opacity-80 transition-all duration-300 ease-linear"
        >
          <h2
            class="text-lg font-bold absolute top-[50%] text-center mx-4 text-slate-50"
          >
            Etiam auctor enim tristique faucibus
          </h2>
          <div
            class="flex justify-center items-center absolute top-[55%] left-[30%]"
          >
            <Github
              class="text-slate-50 bg-gray-500 w-12 h-12 rounded-full mx-4 my-4 flex items-center justify-center hover:bg-red-600"
            ></Github>
            <instagram
              class="text-slate-50 bg-gray-500 w-12 h-12 rounded-full flex items-center justify-center hover:bg-red-600"
            ></instagram>
          </div>
        </div>
      </div>
      <div
        class="w-1/3 mx-2 flex flex-col justify-center items-center relative group"
      >
        <div class="overflow-hidden">
          <img
            src="/team-image2.jpg"
            alt=""
            class="w-full scale-100 group-hover:scale-110 transition-all duration-500 ease-linear"
          />
        </div>

        <h2 class="font-bold text-center text-xl pt-4 text-gray-700">
          Lindsay Perlen
        </h2>
        <p class="font-bold text-center pt-1 pb-4 text-gray-700 uppercase text-sm">
          owner & manger
        </p>
        <div
          class="absolute w-full bg-black h-1 my-auto bottom-[5.3em] opacity-0 group-hover:h-[550px] group-hover:opacity-80 transition-all duration-300 ease-linear"
        >
          <h2
            class="text-lg font-bold absolute top-[50%] text-center mx-4 text-slate-50"
          >
            Etiam auctor enim tristique faucibus
          </h2>
          <div
            class="flex justify-center items-center absolute top-[55%] left-[30%]"
          >
            <Github
              class="text-slate-50 bg-gray-500 w-12 h-12 rounded-full mx-4 my-4 flex items-center justify-center hover:bg-red-600"
            ></Github>
            <google-plus
              class="text-slate-50 bg-gray-500 w-12 h-12 rounded-full flex items-center justify-center hover:bg-red-600"
            ></google-plus>
          </div>
        </div>
      </div>
      <div
        class="w-1/3 mx-2 flex flex-col justify-center items-center relative group"
      >
        <div class="overflow-hidden">
          <img
            src="/team-image3.jpg"
            alt=""
            class="w-full scale-100 group-hover:scale-110 transition-all duration-500 ease-linear"
          />
        </div>

        <h2 class="font-bold text-center text-xl pt-4 text-gray-700">
          Isabella Grace
        </h2>
        <p
          class="font-bold text-center pt-1 pb-4 text-gray-700 uppercase text-sm"
        >
          Pizza specialist
        </p>
        <div
          class="absolute w-full bg-black h-1 my-auto bottom-[5.3em] opacity-0 group-hover:h-[550px] group-hover:opacity-80 transition-all duration-300 ease-linear"
        >
          <h2
            class="text-lg font-bold absolute top-[50%] text-center mx-4 text-slate-50"
          >
            Etiam auctor enim tristique faucibus
          </h2>
          <div
            class="flex justify-center items-center absolute top-[55%] left-[30%]"
          >
            <Linkedin
              class="text-slate-50 bg-gray-700 w-12 h-12 rounded-full mx-4 my-4 flex items-center justify-center hover:bg-red-600"
            ></Linkedin>
            <email-outline
              class="text-slate-50 bg-gray-700 w-12 h-12 rounded-full flex items-center justify-center hover:bg-red-600"
            ></email-outline>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Github from "@/components/Github.vue";
import GooglePlus from "@/components/GooglePlus.vue";
import Linkedin from "@/components/Linkedin.vue";
import EmailOutline from "@/components/EmailOutline.vue";
import instagram from "@/components/Instagram.vue";
</script>
