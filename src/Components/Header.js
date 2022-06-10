import React from "react";

const Header = () => {
  return (
    <section class="text-gray-600 body-font container mx-auto px-4 md:px-20">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Hi, I'm
            <br />
            <span className="text-primary">Mukarrom Hosain</span>
          </h1>
          <h4 class="title-font sm:text-2xl text-xl mb-4 font-medium text-gray-900">
            Frontend Web Developer
          </h4>
          <div class="flex justify-center">
            <a
              href="https://www.linkedin.com/in/mukarrom/"
              target={"_blank"}
              rel="noreferrer"
              className="btn rounded-full bg-primary px-10 "
            >
              Hire Me
            </a>
          </div>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            class="object-cover object-center rounded"
            alt="hero"
            src="https://i.ibb.co/hKb6943/react-mmh.gif"
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
