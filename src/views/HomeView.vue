<script setup>
import navbar from "@/components/navbar.vue";
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
  <div
    id="about"
    class="w-4/5 h-[450px] mx-20 flex justify-center items-center my-12"
  >
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
      <img src="/about-image.jpg" alt="aboutImage" />
    </div>
  </div>
  <div id="shef" class="w-full h-auto my-10 bg-slate-50 shadow-sm">
    <h1 class="text-4xl font-bold text-center my-6 pt-20 text-gray-600">
      Meet our Chefs
    </h1>
    <h2 class="text- font-semibold uppercase text-center text-gray-400 pb-8">
      they are nice and friendly
    </h2>
    <div class="w-3/5 mx-auto flex justify-center items-center">
      <div class="w-1/3 mx-2 flex flex-col justify-center items-center">
        <img src="/team-image1.jpg" alt="" />
        <h2 class="font-bold text-center text-xl pt-4 text-gray-700">
          New Catherine
        </h2>
        <p class="font-bold text-center pt-1 pb-4 text-gray-700">
          KITCHEN OFFICER
        </p>
      </div>
      <div class="w-1/3 mx-2 flex flex-col justify-center items-center">
        <img src="/team-image2.jpg" alt="" />
        <h2 class="font-bold text-center text-xl pt-4 text-gray-700">
          Lindsay Perlen
        </h2>
        <p class="font-bold text-center pt-1 pb-4 text-gray-700">
          owner & manger
        </p>
      </div>
      <div class="w-1/3 mx-2 flex flex-col justify-center items-center">
        <img src="/team-image3.jpg" alt="" />
        <h2 class="font-bold text-center text-xl pt-4 text-gray-700">
          Isabella Grace
        </h2>
        <p class="font-bold text-center pt-1 pb-4 text-gray-700">
          Pizza specialist
        </p>
      </div>
    </div>
  </div>
  <div class="w-full h-auto my-20">
    <h1 class="text-center text-4xl font-bold text-gray-800 mb-4 mt-6">
      Our Menus
    </h1>
    <p class="text-center uppercase text-slate-400 font-bold mb-5">
      tea time & dining
    </p>
    <div class="w-[99%] flex flex-wrap mx-6 group">
      <div
        class="bg-gray-400 absolute my-72 w-[33%] h-28 opacity-0 z-50 group-hover:opacity-100 transition-all duration-700 ease-in-out"
      >
        <p class="text-xl font-bold px-2 py-4 text-slate-50">
          American breakfast <span class="pl-52">25$</span>
        </p>
        <h3 class="font-bold mx-2">Tomato / eggs / sausages</h3>
      </div>
      <div class="w-1/3">
        <img
          src="/menu-image1.jpg"
          alt="img"
          class=" w-full scale-100 hover:scale-110 transition-all duration-300 ease-linear object-cover z-0 hover:overflow-hidden"
        />
      </div>

      <img src="/menu-image2.jpg" alt="img" />
      <img src="/menu-image3.jpg" alt="img" />
      <img src="/menu-image4.jpg" alt="img" />
      <img src="/menu-image5.jpg" alt="img" />
      <img src="/menu-image6.jpg" alt="img" />
    </div>
  </div>
</template>
