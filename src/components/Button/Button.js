import React from 'react';
import './Button.css';

export default function Button({label}) {
  return (
    <button
          className="app-button relative px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg 
          before:absolute before:top-0 before:left-0 before:bg-white before:content-[''] before:h-[100%] before:w-[100%]
          before:opacity-10
          "
        >
          {label}
    </button>
  )
}
