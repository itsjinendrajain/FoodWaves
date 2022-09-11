import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useLocation, useParams } from 'react-router-dom'
import Loading from "../../layouts/Loader/Loader"
import { HeartIcon } from '@heroicons/react/24/solid'
const DisplayProductsByAlphabatic = () => {
    const { name } = useParams()
    const [loading, setLoading] = useState(false);
    const [noResultFound, setNoResultFound] = useState(false)
    const [categoryProducts, setCategoryProducts] = useState([]);
    

    //Get Categories Descriptions 
    // const getCategoriesDesp = (categories.find((category)=>{ return category.strCategory==name})).strCategoryDescription
    useEffect(() => {
        window.scrollTo(0, 0)
        console.log("I am In Alphabetic");
        async function fetchData() {
            const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${name}`;
            const res = await axios.get(url);
            const data = res.data.meals;
            if(data!=null){
                setCategoryProducts(data)

            }else{
                setNoResultFound(true)
            }
            setLoading(false)
        }
        fetchData();
        // console.log(hist)


    }, [name])

    if (loading) {
        return <Fragment>
            <Loading />
        </Fragment>
    }

    return (
        <Fragment>
            <section className="text-gray-400 bg-black body-font max-w-5xl  mx-auto min-h-screen">

                <div className="container px-5 pt-24 mx-auto">
                    <div className="flex flex-wrap w-full mb-2 flex-col items-center text-center">
                        <h1 className="sm:text-3xl text-2xl font-bold title-font mb-2 text-white">All <span className='text-green-600 uppercase'>{name}</span> Recipies</h1>
                        {/* <p className=" w-full leading-relaxed text-gray-500">{(getCategoriesDesp) ? getCategoriesDesp : "view our all premium recipies"}</p> */}
                    </div>
                </div>
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap m-4">

                        {categoryProducts && categoryProducts.length>0 && categoryProducts.map((product, index) => {
                            return <Fragment key={product.strMeal}>

                                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                    <Link to={`/recipe/${product.idMeal}`}>
                                        <div className="block relative h-48 rounded overflow-hidden">
                                            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={product.strMealThumb} />
                                            <HeartIcon className='text-red-200 hover:h-12 hover:w-12 hover:text-red-600 absolute bottom-0 right-0 w-10 h-10' />
                                        </div>
                                        <div className="mt-4 flex">
                                            {/* <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>  */}
                                            <h2 className="text-white hover:text-yellow-500 title-font text-lg font-medium">{product.strMeal} recipe</h2>

                                            {/* <p className="mt-1">$16.00</p> */}
                                        </div>
                                    </Link>
                                </div>
                            </Fragment>
                        })}

                        {/* when No Meal Found  */}
                        {noResultFound  && <Fragment>
                            <div className="container px-5 py-24 mx-auto">
                                <div className="flex flex-wrap w-full mb-2 flex-col items-center text-center">
                                    <p className="sm:text-3xl text-2xl font-bold title-font mb-2 text-white">No Recpie Found</p>
                                    <p className=" w-full leading-relaxed text-gray-500">We are adding More Recpie Soon</p>
                                </div>
                            </div>
                            
                            </Fragment>} 




                    </div>
                </div>
            </section>
        </Fragment >
    )
}

export default DisplayProductsByAlphabatic