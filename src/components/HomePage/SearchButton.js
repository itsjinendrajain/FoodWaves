import React, { Fragment } from 'react'

import Typed from 'react-typed';
import SearchForm from '../../layouts/SearchForm';
const SearchButton = () => {
  return (
    <Fragment>
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <SearchForm />
          <Typed
            strings={['Welcome To FoodWaves',"Find Your Favourite Recipe Here"]}
            typeSpeed={100}
            backSpeed={50}
            loop = {false}
            className={`md:text-6xl text-5xl  font-oswald  font-medium text-center title-font text-white mb-10`}
          />
          
           
          {/* <h1 className="sm:text-4xl text-4xl font-medium text-center title-font text-white mb-4">{gretting}</h1> */}
          <p className="text-2xl leading-relaxed font-robotocondensed  xl:w-2/4 lg:w-3/4 mx-auto">Recipe has no soul.</p>
          <p className="text-2xl leading-relaxed font-robotocondensed xl:w-2/4 lg:w-3/4 mx-auto">You, as the cook, must <span className='font-semibold text-green-500'>bring soul</span> to the recipe.</p>
        </div>
      </div>

    </Fragment>
  )
}

export default SearchButton