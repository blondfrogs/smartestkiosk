import React from 'react';
import Image from 'next/image';

function Contact() {
  return (
    <div className="bg-neutral-900 ">
      <div className="max-w-5xl min-h-[100vh] grid items-center my-auto px-4 xl:px-0 py-10 lg:py-20 mx-auto">
        {/* Title */}
        
        {/* End Title */}

        {/* Grid */}
        <div className=" mt-10 grid items-start justify-center grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16">
          <div className="md:order-2 border-b border-neutral-800 pb-10 mb-10 md:border-b-0 md:pb-0 md:mb-0">
            <form>
              <div className="space-y-4">
                {/* Input */}
                <div className="relative">
                  <input
                    type="text"
                    id="hs-tac-input-name"
                    className="peer p-4 block w-full bg-neutral-800 border-transparent rounded-lg text-sm text-white placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
                    focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
                    placeholder="Name"
                  />
                  <label
                    htmlFor="hs-tac-input-name"
                    className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-neutral-400 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-neutral-400"
                  >
                    Name
                  </label>
                </div>
                {/* End Input */}

                {/* Input */}
                <div className="relative">
                  <input
                    type="email"
                    id="hs-tac-input-email"
                    className="peer p-4 block w-full bg-neutral-800 border-transparent rounded-lg text-sm text-white placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
                    focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
                    placeholder="Email"
                  />
                  <label
                    htmlFor="hs-tac-input-email"
                    className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-neutral-400 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-neutral-400"
                  >
                    Email
                  </label>
                </div>
                {/* End Input */}

                
                {/* End Input */}

                {/* Input */}
                <div className="relative">
                  <input
                    type="text"
                    id="hs-tac-input-phone"
                    className="peer p-4 block w-full bg-neutral-800 border-transparent rounded-lg text-sm text-white placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
                    focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
                    placeholder="Phone"
                  />
                  <label
                    htmlFor="hs-tac-input-phone"
                    className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-neutral-400 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-neutral-400"
                  >
                    Phone
                  </label>
                </div>
                {/* End Input */}

                {/* Textarea */}
                <div className="relative">
                  <textarea
                    id="hs-tac-message"
                    rows={'4'}
                    className="peer p-4 block w-full bg-neutral-800 border-transparent rounded-lg text-sm text-white placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
                    focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
                    placeholder="This is a textarea placeholder"
                  ></textarea>
                  <label
                    htmlFor="hs-tac-message"
                    className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-neutral-400 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-neutral-400"
                  >
                    Tell us about your project
                  </label>
                </div>
                {/* End Textarea */}
              </div>

              <div className="mt-2">
                <p className="text-xs text-neutral-500">All fields are required</p>

                <p className="mt-5">
                  <a
                    className="group inline-flex items-center gap-x-2 py-2 px-3 bg-red-500 font-medium text-sm text-white rounded-full focus:outline-none"
                    href="#"
                  >
                    Submit
                    
                  </a>
                </p>
              </div>
            </form>
          </div>
          {/* End Col */}

          <div className="space-y-6">
            {/* Item */}
            <div className="max-w-3xl  lg:mb-14">
          <h2 className="text-white font-semibold text-2xl md:text-4xl md:leading-tight">Contact us</h2>
          <p className="mt-1 text-neutral-400">Whatever your goal - we will get you there.</p>
        </div>
            <div className="flex gap-x-5">
              
              <div>
                <h3 className="font-semibold text-base text-white">Sales</h3>
                <p className="mt-1 text-neutral-400">sales@site.com</p>
              </div>
            </div>
            {/* End Item */}
            <div className="flex gap-x-5">
              
              <div>
                <h3 className="font-semibold text-base text-white">Sales</h3>
                <p className="mt-1 text-neutral-400">sales@site.com</p>
              </div>
            </div>
            {/* Item */}
          
            
            <div className="flex gap-x-5">
              
              <div>
                <h3 className="font-semibold text-base text-white">Press</h3>
                <p className="mt-1 text-neutral-400">press@site.com</p>
              </div>
            </div>
            {/* End Item */}
          </div>
        </div>
        {/* End Grid */}
      </div>
    </div>
  );
}

export default Contact;
