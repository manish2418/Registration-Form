import React, { useState } from "react";

function Form() {
  const [data, setdata] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
  });
  const handlechange = (e) => {
    setdata({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  console.log(data);
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-12">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Register Your Data
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              Registration Form
            </p>
          </div>
          <div class="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
            <div class="relative flex-grow w-full">
              <label for="full-name" class="leading-7 text-sm text-gray-600">
                Full Name
              </label>
              <input
                type="text"
                id="full-name"
                name="name"
                onChange={handlechange}
                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <div class="relative flex-grow w-full">
              <label for="email" class="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={handlechange}
                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
        </div>
      </section>

      <div class="container px-5 py-24 mx-auto">
        <div class="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
          <div class="relative flex-grow w-full">
            <label for="full-name" class="leading-7 text-sm text-gray-600">
              Address
            </label>
            <input
              type="text"
              id="full-name"
              name="address"
              onChange={handlechange}
              class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          <div class="relative flex-grow w-full">
            <label for="contact" class="leading-7 text-sm text-gray-600">
              Contact Number
            </label>
            <input
              type="number"
              id="contact"
              name="contact"
              onChange={handlechange}
              class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
      </div>
      <div class="flex justify-center	">
        <button class="text-white bg-indigo-500 border-0 py-2 px-8  focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Button
        </button>
      </div>
    </>
  );
}

export default Form;
