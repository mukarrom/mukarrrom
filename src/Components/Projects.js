import React from "react";

const Projects = () => {
  return (
    <div className="w-10/12 md:w-8/12 mx-auto">
      <h1 className="text-4xl text-center font-extrabold text-primary">
        PROJECTS
      </h1>
      <div className="">
        {" "}
        <h3 className="text-center text-2xl">
          <span className="font-bold text-orange-400">MMH Tools:</span> a
          manufacture website
        </h3>
        <p className="text-center">
          <a href="https://mmh-assignment-12.web.app" className="text-blue-500">
            Live Site
          </a>{" "}
          ||{" "}
          <a
            className="text-blue-500"
            href="https://github.com/mukarrom21/assignment-12-client"
          >
            Client-side Code
          </a>{" "}
          ||{" "}
          <a
            className="text-blue-500"
            href="https://github.com/mukarrom21/assignment-12-server"
          >
            Server-side Code
          </a>
        </p>
        <ul className="list-disc">
          <li>
            Designed and developed with react js, react router, react form
            hooks, firebase authentication, react firebase hooks, react query,
            tailwind CSS, express js, mongo DB etc.
          </li>
          <li>Login and registration with google firebase authentication.</li>
          <li>Auth required pages. Not allowed without login.</li>
          <li>Dashboard.</li>
        </ul>
      </div>
      <div className="">
        {" "}
        <h3 className="text-center text-2xl">
          <span className="font-bold text-orange-400">MMH Tools:</span> a
          manufacture website
        </h3>
        <p className="text-center">
          <a href="https://mmh-assignment-12.web.app" className="text-blue-500">
            Live Site
          </a>{" "}
          ||{" "}
          <a
            className="text-blue-500"
            href="https://github.com/mukarrom21/assignment-12-client"
          >
            Client-side Code
          </a>{" "}
          ||{" "}
          <a
            className="text-blue-500"
            href="https://github.com/mukarrom21/assignment-12-server"
          >
            Server-side Code
          </a>
        </p>
        <ul className="list-disc">
          <li>
            Designed and developed with react js, react router, react form
            hooks, firebase authentication, react firebase hooks, react query,
            tailwind CSS, express js, mongo DB etc.
          </li>
          <li>Login and registration with google firebase authentication.</li>
          <li>Auth required pages. Not allowed without login.</li>
          <li>Dashboard.</li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;
