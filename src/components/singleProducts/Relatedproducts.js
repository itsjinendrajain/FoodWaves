import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';

const Relatedproducts = ({ deviceType, Category, idMeal }) => {
    const [loading, setLoading] = useState(true);
    const [categoryProducts, setCategoryProducts] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${Category}`;
            const res = await axios.get(url);
            const data = res.data.meals;

            const newData = data.filter((item) => item.idMeal != idMeal)
            setCategoryProducts(newData)

            setLoading(false)
        }
        fetchData();
    }, [idMeal, Category])

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    return (

        <Fragment>
            <Fragment>

            </Fragment>
            {/* Slider of Related Products */}
            <Carousel
                swipeable={true}
                draggable={true}
                showDots={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={deviceType !== "mobile" ? true : false}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerclassName="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                deviceType={deviceType}
                dotListclassName="custom-dot-list-style"
                itemclassName="carousel-item-padding-40-px "
            >

                {categoryProducts.map((meal, index) => {
                    return <Fragment key={index}>

                        <div>
                            <Link to={`/recipe/${meal.idMeal}`}>
                                <div className='w-full  pr-5'>

                                    <img alt="ecommerce" className=" w-full h-auto  object-cover object-center rounded" src={meal.strMealThumb} />

                                    <h3 className="text-white text-xs my-3 tracking-widest title-font mb-1">{meal.strMeal}</h3>

                                </div>
                            </Link>

                        </div>
                    </Fragment>
                })}
            </Carousel >
        </Fragment >
    )
}

export default Relatedproducts




    ;