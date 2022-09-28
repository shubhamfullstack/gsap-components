import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react'

export default function Header() {
  const [open, setopen] = useState(false);
  const navEl = useRef();

  
  const toggleMenu = (e) => {
    e.preventDefault();
    if(open){
        const q = gsap.utils.selector(navEl);
    const timeline = gsap.timeline({
        defaults: { ease: "easeInOut", duration: 0.3 }
    }); 
        timeline
        .to(q(".menu__item"), { opacity: 0, x: 100, stagger: 0.1, reversed: true })
        .to(navEl.current, { opacity: 0 });
        setTimeout(() => {
            setopen(!open);
        }, 500);
    }else{
        setopen(!open)
    }
  }

  useEffect(() => {
    const q = gsap.utils.selector(navEl);
    const timeline = gsap.timeline({
        defaults: { ease: "easeInOut", duration: 0.3 }
    });      
    if(open){
        timeline
            .to(navEl.current, { opacity: 1 })
            .to(q(".menu__item"), { opacity: 1, x: 0, stagger: 0.1 });
    }
  }, [open]);


  return (
    <header className="shadow-sm">
  <div className="max-w-screen-xl p-4 mx-auto">
    <div className="flex items-center justify-between gap-4 lg:gap-10">
      <div className="flex lg:w-0 lg:flex-1">
        <span className="w-20 h-10 bg-gray-200 rounded-lg"></span>
      </div>

      <nav className="hidden gap-8 text-sm font-medium md:flex">
        <a className="text-gray-500" href="/">About</a>
        <a className="text-gray-500" href="/">Blog</a>
        <a className="text-gray-500" href="/">Projects</a>
        <a className="text-gray-500" href="/">Contact</a>
      </nav>

      <div className="items-center justify-end flex-1 hidden gap-4 sm:flex">
        <a
          className="px-5 py-2 text-sm font-medium text-gray-500 bg-gray-100 rounded-lg"
          href="/"
        >
          Log in
        </a>

        <a
          className="px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg"
          href="/"
        >
          Sign up
        </a>
      </div>

      <div className="lg:hidden">
        <button onClick={toggleMenu} className="p-2 text-gray-600 bg-gray-100 rounded-lg" type="button">
          <span className="sr-only">Open menu</span>
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewbox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6h16M4 12h16M4 18h16"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            />
          </svg>
        </button>
      </div>
      {open && <div className='lg:hidden absolute h-screen w-screen top-0 left-0 bg-white p-4'>
        <div className='flex items-center flex-nowrap justify-between gap-4'>
            <span className="">App.</span>
            <span onClick={toggleMenu} className='cursor-pointer'>
                <svg className='w-5 h-5 opacity-75' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"/></svg>
            </span>
        </div>
        <nav ref={navEl} className="opacity-0 my-8 gap-2 text-sm font-medium flex flex-col">
            <a className="text-gray-500 menu__item opacity-0 -translate-x-28" href="/">About</a>
            <a className="text-gray-500 menu__item opacity-0 -translate-x-28" href="/">Blog</a>
            <a className="text-gray-500 menu__item opacity-0 -translate-x-28" href="/">Projects</a>
            <a className="text-gray-500 menu__item opacity-0 -translate-x-28" href="/">Contact</a>
        </nav>
      </div>}
    </div>
  </div>
</header>

  )
}

