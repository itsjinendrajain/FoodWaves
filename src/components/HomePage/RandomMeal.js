import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useLocation, useParams } from 'react-router-dom'
import Loading from "../../layouts/Loader/Loader"
import { HeartIcon } from '@heroicons/react/24/solid'

const RandomMeal = () => {

    const [loading, setLoading] = useState(true);
    const [categoryProducts, setCategoryProducts] = useState([]);


    const hist = useLocation()

    //Get Categories Descriptions 
    
    useEffect(() => {
        window.scrollTo(0, 0)
        async function fetchData() {
            const url = `https://www.themealdb.com/api/json/v1/1/randomselection.php`;
            const res = await axios.get(url);
            const data = res.data.meals;
            console.log(data);
            setCategoryProducts(data)
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
            

                
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                    {categoryProducts && categoryProducts.length>0  && categoryProducts.map((product, index) => {
                            return <Fragment key={index}>
                                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                    <Link to={`/recipe/${product.idMeal}`}>
                                        <div className="block relative h-48 rounded overflow-hidden">
                                            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={product.strMealThumb} />
                                            <HeartIcon className='text-red-200 hover:h-12 hover:w-12 hover:text-red-600 absolute bottom-0 right-0 w-10 h-10' />
                                        </div>
                                        <div className="mt-4 flex">
                                            <h2 className="text-white hover:text-yellow-500 title-font text-lg font-medium">{product.strMeal} recipe</h2>
                                        </div>
                                    </Link>
                                </div>
                            </Fragment>
                        })}




                    </div>
                </div>
   
        </Fragment >
    )
}

export default RandomMeal