import gsap from "gsap";
import React, { useEffect, useRef } from "react";

export default function Modal({visibility, onSignIn}) {
    const madalWrapperEl = useRef();

   useEffect(() => {
    const q = gsap.utils.selector(madalWrapperEl);
    const timeline = gsap.timeline({
        defaults: { ease: "easeInOut", duration: 0.5 }
    }); 
     if(visibility){
        timeline
        .set(madalWrapperEl.current,{ y:0 })
        .to(madalWrapperEl.current, { clipPath: "circle(150% at 100% 0)" })
        .to(q('#modal'), { y:0, opacity:1 })
     }
   }, [visibility])

   const handleSignIn = () => {
        const q = gsap.utils.selector(madalWrapperEl);
        const timeline = gsap.timeline({
            defaults: { ease: "easeInOut", duration: 0.5 }
        }); 
            timeline
            .to(q('#modal'), { y:'20%', opacity:0 })
            .to(madalWrapperEl.current, { clipPath: "circle(0% at 100% 0)" })
            .set(madalWrapperEl.current,{ y:'100%' })
        setTimeout(() => {
            onSignIn()
        }, 600);
   }
   

  return (
    <div
      id="modal-wrapper"
      ref={madalWrapperEl}
      style={{ clipPath:'circle(0% at 100% 0)' }}
      className="translate-y-[100%] fixed top-0 left-0 h-[100%] w-[100%] bg-blue-200 flex justify-center items-center"
    >
      <div
        id="modal"
        className="translate-y-20 opacity-0 relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
      >
        <div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div class="w-full max-w-md space-y-8">
            <div>
              <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                Sign in to your account
              </h2>
            </div>
            <form class="mt-8 space-y-6" action="#" method="POST">
              <input type="hidden" name="remember" value="true" />
              <div class="-space-y-px rounded-md shadow-sm">
                <div>
                  <label for="email-address" class="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autocomplete="email"
                    required
                    class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                    placeholder="Email address"
                  />
                </div>
                <div>
                  <label for="password" class="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autocomplete="current-password"
                    required
                    class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                    placeholder="Password"
                  />
                </div>
              </div>

              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    class="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label
                    for="remember-me"
                    class="ml-2 block text-sm text-gray-900"
                  >
                    Remember me
                  </label>
                </div>

                <div class="text-sm">
                  <a
                    href="/"
                    class="font-medium text-blue-600 hover:text-blue-500"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div>
                <button
                  onClick={handleSignIn}
                  type="submit"
                  class="group relative flex w-full justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg
                      class="h-5 w-5 text-blue-500 group-hover:text-blue-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
