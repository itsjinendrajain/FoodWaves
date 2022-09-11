import React, { Fragment, useEffect, useState } from 'react'
import { TypeAnimation } from 'react-type-animation'
import Typed from 'react-typed';
const SearchButton = () => {
  const [gretting , setGretting] = useState("")
  useEffect(()=>{
    const text = "Welcome To FoodWaves"
    let i = 0;



    const interval = setInterval(() => {
      if (i >= text.length) clearInterval(interval);
      setGretting((prevGreting) => prevGreting +text[i])
      i++;
    }, 300);

    return () => clearInterval(interval);
  },[])
  return (
    <Fragment>
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <form className='mb-10'>
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
            <div className="relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </div>
              <input type="search" id="default-search" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for a Meal..." required />
                <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
            </div>
          </form>
          <Typed
            strings={['Welcome To FoodWaves',"Find Your Favourite Recipe Here"]}
            typeSpeed={100}
            backSpeed={50}
            loop 
            className={`md:text-6xl text-5xl h-40  font-medium text-center title-font text-white mb-10`}
          />
          
           
          {/* <h1 className="sm:text-4xl text-4xl font-medium text-center title-font text-white mb-4">{gretting}</h1> */}
          <p className="text-base leading-relaxed  xl:w-2/4 lg:w-3/4 mx-auto">Recipe has no soul.</p>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">You, as the cook, must <span className='font-semibold'>bring soul</span> to the recipe.</p>
        </div>
      </div>

    </Fragment>
  )
}

export default SearchButton