import axios from "axios";
import {  findFlagUrlByNationality,  } from "country-flags-svg";

import React, { Fragment, useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import Loading from "../../layouts/Loader/Loader";


const ListCountry = () => {

    const [loading, setLoading] = useState(true);
    const [listOfCountries, setCategoryProducts] = useState([]);


    const alllCountry = [ { "strArea": "American" }, { "strArea": "British" }, { "strArea": "Canadian" }, { "strArea": "Chinese" }, { "strArea": "Croatian" }, { "strArea": "Dutch" }, { "strArea": "Egyptian" }, { "strArea": "French" }, { "strArea": "Greek" }, { "strArea": "Indian" }, { "strArea": "Irish" }, { "strArea": "Italian" }, { "strArea": "Jamaican" }, { "strArea": "Japanese" }, { "strArea": "Kenyan" }, { "strArea": "Malaysian" }, { "strArea": "Mexican" }, { "strArea": "Moroccan" }, { "strArea": "Polish" }, { "strArea": "Portuguese" }, { "strArea": "Russian" }, { "strArea": "Spanish" }, { "strArea": "Thai" }, { "strArea": "Tunisian" }, { "strArea": "Turkish" }, { "strArea": "Unknown" }, { "strArea": "Vietnamese" } ]
    //Get Categories Descriptions 
    // const 
    useEffect(() => {
        window.scrollTo(0, 0)
        async function fetchData() {
            // const url = `https://www.themealdb.com/api/json/v1/1/list.php?a=list`;
            // const res = await axios.get(url);
            // const data = res.data.meals;
            const data = alllCountry;
            console.log(data);
            const allCountriesName = []
            for (const ele of data) {
                allCountriesName.push(ele.strArea);
            }
            console.log(allCountriesName);
            setCategoryProducts(allCountriesName)
            setLoading(false)
        }
        fetchData();
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
                    <h1 className="sm:text-3xl text-2xl font-bold title-font mb-2   text-white">Food By Country</h1>
    
                </div>
            </div>
            <div className="container py-5 mx-auto">
                <div className="flex flex-wrap m-4 gap-6 justify-center">
                    {listOfCountries.length > 0 && listOfCountries.map((country,index) => {
                        if (country == "Unknown"){
                            return
                        }
                        const flagUrl = findFlagUrlByNationality(country);
                     
                        return <Link key={`${country}`} to={`/area/${country}`}>
                            <div title={country} >
                                <img src={flagUrl} alt={country} className=" h-20 w-32 object-cover object-center" />
                            </div>
                        </Link>
                    })}
                </div>
            </div>
        </Fragment>
    )
}

export default ListCountry