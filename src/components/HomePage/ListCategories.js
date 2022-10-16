import axios from "axios";
import {  findFlagUrlByNationality,  } from "country-flags-svg";

import React, { Fragment, useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import Loading from "../../layouts/Loader/Loader";
import categories from "../CategoryPage/categories";


const ListCategories = () => {

    const [loading, setLoading] = useState(false);
    const [listOfCountries, setCategoryProducts] = useState([]);


    
    //Get Categories Descriptions 
    // const 
    useEffect(() => {
        window.scrollTo(0, 0)
        
        // console.log(hist)


    }, [])

    if (loading) {
        return <Fragment>
            <Loading />
        </Fragment>
    }


    return (
        <Fragment>
            <div className="container px-5 pt-10 mx-auto border-b-2 border-gray-800">
                <div className="flex flex-wrap w-full mb-2 flex-col  text-left">
                    <h1 className="sm:text-3xl text-2xl font-bold title-font mb-2   text-white">Food By Category</h1>
    
                </div>
            </div>
            <div className="container py-5 mx-auto">
                <div className="flex flex-wrap m-4 gap-6 justify-center">
                    {categories.length > 0 && categories.map((category,index) => {
                        
                     
                        return <Link key={`${category.idCategory}`} to={`/category/${category.strCategory}`}>
                            <div className="flex flex-col" title={category.strCategory} >
                                <img src={category.strCategoryThumb} alt={category.strCategory} className="lg:h-48 md:h-36 w-full object-cover object-center" />
                                <h1 className="title-font text-3xl font-medium text-white mt-3 text-center">{category.strCategory}</h1>
                            </div>
                        </Link>
                    })}
                </div>
            </div>
        </Fragment>
    )
}

export default ListCategories