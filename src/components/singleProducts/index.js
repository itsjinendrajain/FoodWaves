import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Loading from '../../layouts/Loader/Loader';
import Relatedproducts from './Relatedproducts';

const Index = (props) => {
    const { id } = useParams()
    const [meal, setMeal] = useState({});
    const [instructions, setInstructions] = useState([])
    const [ingredients, setIngredients] = useState([])
    const [tags, setTags] = useState([])
    const [youTube, setYoutube] = useState("")
    const [activeState, setActiveState] = useState(0);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        window.scrollTo(0, 0);
        async function fetchData() {
            let url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
            if (id == "random") {
                url = `https://www.themealdb.com/api/json/v1/1/random.php`
            }
            // const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
            console.log(url);
            const res = await axios.get(url);
            const data = res.data.meals[0];

            let InstructionString = data.strInstructions.split('\r\n');



            if (InstructionString.length < 2) {
                InstructionString = data.strInstructions.split('.');
            }
            const YTube = data.strYoutube.replace("watch?v=", "embed/");
            let Ingredient = [];
            let i = 1;
            while (true && i <= 20) {
                let ing = data[`strIngredient${i}`];
                if (typeof ing == "string" && ing.length > 0) {
                    const tempIng = [];
                    tempIng.push(data[`strMeasure${i}`])
                    tempIng.push(data[`strIngredient${i}`])
                    Ingredient.push(tempIng)
                }
                i++;

            }
            if (typeof data.strTags == 'string') {
                let tTags = data.strTags;
                const ListTags = tTags.split(",")
                setTags([...tags, ...ListTags]);
                // console.log("tags",tags)
            }
            setIngredients(Ingredient)
            setYoutube(YTube)
            setInstructions(InstructionString);
            setMeal(data)
            setLoading(false)
        }
        fetchData();


    }, [id])

    if (loading) {
        return <Fragment>
            <div>
                <Loading />
            </div>
        </Fragment>
    }

    return (

        <Fragment>

            <section className="text-gray-400 bg-black body-font max-w-5xl  mx-auto min-h-screen">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <img alt="ecommerce" className=" w-full lg:h-auto h-64 object-cover object-center rounded" src={meal.strMealThumb} />
                        <div className="w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <Link to={`/category/${meal.strCategory}`}>

                                <h2 className="text-sm title-font text-gray-500 tracking-widest">{meal.strCategory}</h2>
                            </Link>
                            <h1 className="text-white text-3xl title-font font-medium mb-1">{meal.strMeal}</h1>
                            <div className="flex mb-4">
                                <span className="flex items-center ">
                                    <Link to={`/area/${meal.strArea}`}>
                                        <span className="text-white font-normal">{meal.strArea}</span>
                                    </Link>
                                </span>
                                <span className="flex items-center ml-3 pl-3 py-2 border-l-2 border-gray-800 text-gray-500 space-x-2">
                                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-green-400" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-green-400" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-green-400" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-green-400" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-green-400" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <span className="ml-3">4 Reviews</span>
                                </span>
                                <span className="md:flex ml-3 pl-3 py-2 border-l-2 border-gray-800 text-gray-500 space-x-2 hidden ">
                                    <a>
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                        </svg>
                                    </a>
                                    <a>
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                        </svg>
                                    </a>
                                    <a>
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                        </svg>
                                    </a>
                                </span>
                            </div>
                            {
                                tags.length > 0 && <Fragment>
                                    <div className="flex flex-wrap  my-4 gap-2">
                                        {/* <span className='font-bold text-pink-500 text-base mr-4' >Tag  </span> */}
                                        {tags.map((tag, index) => {
                                            return <Fragment key={`tag${index}`}>
                                                <div className='ml-4  text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-full bg-white text-gray-700 border'>{tag}</div>
                                            </Fragment>
                                        })}
                                    </div>
                                </Fragment>
                            }


                            <div className="flex mb-4">
                                <a onClick={() => setActiveState(0)} className={`${(activeState === 0) ? "text-green-400 border-b-2 border-green-500" : "border-b-2 border-gray-800"} flex-grow py-2 text-lg px-1 cursor-pointer `}>Instruction</a>
                                <a onClick={() => setActiveState(1)} className={`${(activeState === 1) ? "text-green-400 border-b-2 border-green-500" : "border-b-2 border-gray-800"} flex-grow py-2 text-lg px-1 cursor-pointer `}>Ingredients</a>
                                <a onClick={() => setActiveState(2)} className={`${(activeState === 2) ? "text-green-400 border-b-2 border-green-500" : "border-b-2 border-gray-800"} flex-grow py-2 text-lg px-1 cursor-pointer `}>Video</a>
                            </div>
                            <Fragment>
                                <div className=" mb-20 ">
                                    {/*  instructions Section */}
                                    {
                                        activeState === 0 && <Fragment>


                                            <ul className=" stretchAnimation text-left space-y-4 text-gray-500 dark:text-gray-400">
                                                {instructions.map((step, index) => {
                                                    if (step.length < 5) {
                                                        return <Fragment key={`instruct${index}`}></Fragment>;
                                                    }

                                                    return <Fragment key={index}>
                                                        <li className="flex items-center space-x-3">

                                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                                            <span>{step}</span>
                                                        </li>
                                                    </Fragment>
                                                }
                                                )}
                                            </ul>

                                        </Fragment>
                                    }
                                    {/* Ingredients Section  */}
                                    {
                                        activeState === 1 && <Fragment>

                                            <div className='stretchAnimation'>
                                                <div className="flex flex-row m-4 flex-wrap">
                                                    {ingredients.map((ingredient, index) => {
                                                        const imgName = ingredient[1].replace(' ', "%20")
                                                        const imgURL = `https://www.themealdb.com/images/ingredients/${imgName}.png`
                                                        return <Fragment key={`ing${index}`}>
                                                            
                                                            <div className="lg:w-1/3  p-4 ">
                                                                <div className='w-full'>
                                                                    <Link to={`/ingredient/${ingredient[1]}`}>
                                                                    
                                                                    <a className="block relative h-48 rounded overflow-hidden">
                                                                        <img alt={ingredient[1]} className=" w-full h-auto  object-cover object-center rounded" src={imgURL} />
                                                                    </a>
                                                                    </Link>
                                                                    <div className="my-3">
                                                                        <h3 className="text-white text-xs tracking-widest title-font mb-1">{ingredient[0]} {ingredient[1]}</h3>
                                                                        {/* <h2 className="text-gray-900 title-font text-lg font-medium">{ingredient[1]}</h2> */}

                                                                    </div>
                                                                </div>
                                                            </div>


                                                        </Fragment>
                                                    })}
                                                </div>




                                            </div>
                                        </Fragment>
                                    }

                                    {/* Video Section  */}
                                    {
                                        activeState === 2 && <Fragment>
                                            <div className='stretchAnimation  mb-8 space-y-4'>
                                                <div className="flex flex-col items-center justify-center my-10">

                                                    <iframe width="560" className='max-w-full' height="315" src={youTube} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
                                                </div>
                                            </div>
                                        </Fragment>
                                    }


                                </div>



                            </Fragment>

                            {/* Read More */}
                            <div className="flex justify-end pb-5 my-20 border-b-2 border-gray-800 mb-5 ">
                                {/* <span className="title-font font-medium text-2xl text-white">$58.00</span> */}
                                <a href={meal.strSource} target="_blank" rel="noopener noreferrer">
                                    <button className="flex ml-auto text-white bg-green-800 border-0 py-2 px-6 focus:outline-none hover:bg-green-500 rounded transition ease-in-out delay-150 hover:-translate-x-1 hover:scale-110 duration-300">Read More ...</button>
                                </a>


                            </div>



                            {/* Related Products  */}
                            <div className="border-b-2 pb-5 border-gray-800">
                                <h3 className="my-5 text-3xl text-left border-b-2 pb-5 border-gray-800"> Releated Products</h3>
                            <Relatedproducts Category={meal.strCategory} deviceType={props.deviceType} idMeal={meal.idMeal} />
                            </div>


                            
                          
                        </div>
                    </div>
                </div>
            </section >
        </Fragment >
    )
}

export default Index