<template>
 
  <div class="w-4/5 h-auto mt-16 mx-auto flex justify-center items-center mb-40">
    <div class="w-1/2 h-[550px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13987.542336008242!2d70.37942689134829!3d28.782672216090635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3930aa29f5de2651%3A0x69e575de73d5d25f!2sRukanpur%2C%20Rahim%20Yar%20Khan%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1701161348544!5m2!1sen!2s"
        class="w-full h-full"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    <div
      
      class="w-1/2 h-full flex flex-col justify-center items-center mx-20 box-border"
    >
     <h1 class="text-4xl font-bold text-gray-950 text-center ">Contact us</h1>
      
        <input
          type="text"
          name="name"
          placeholder="Full name"
          class="w-full border-b-2 border-gray-300 outline-none h-12 mb-6 mt-12 px-6"
        />
        <input
          type="email"
          name="email"
          placeholder="Email address"
          class="border-b-2 border-gray-300 outline-none h-12 mb-6 w-full px-6   "
        />
     
      <input type="text" name="subject" placeholder="Subject" 
      class="w-full border-b-2 px-6 border-gray-300 h-12 outline-none mb-6" />
      <textarea
        name="message"
        id="msg"
        cols="30"
        rows="10"
        placeholder="Tell about your project"
        class="w-full border-b-2 px-6 border-gray-300 outline-none mb-6 h-40"
      ></textarea>
      <button href="#menu" class="bg-red-700 w-full h-10  my-6 text-slate-50 font-bold hover:opacity-90 transiton-all duration-500 ease-linear"> Send Message</button>
    </div>
  </div>
</template>

<script setup></script>
