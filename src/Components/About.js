import React from "react";

const About = () => {
  return (
    <div className="container mx-auto px-10">

      <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      
      <video
          class="object-center rounded object-cover h-full w-full m-0 p-0"
          loop
          muted
          autoPlay
          src="https://prod-streaming-video-msn-com.akamaized.net/394e73b6-e7ac-4b5d-8063-80d421afb446/0e09af42-f217-4deb-8580-fb0ab5420f6a.mp4"
          style={{}}
        ></video>
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">I am Mukarrom Hosain
        <br class="hidden lg:inline-block"/>React developer
      </h1>
      <p class="mb-8 leading-relaxed">Coding is my best hobit, I love coding. I always try to do different and better.</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
      </div>
    </div>
  </div>
</section>
    </div>
  );
};

export default About;
