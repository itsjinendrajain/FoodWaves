import React, { Fragment, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import categories from './categories'
const CategoryPage = () => {
    console.log(categories)
    const navigate = useNavigate();
    const [category, setCategory] = useState(categories)
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    function _navigateToPage(path, sendState) {
        console.log(sendState, path);
        navigate(path, {
            state: sendState
        })
    }
    return (
        <Fragment>
            <section className="text-gray-400 bg-black body-font max-w-5xl  mx-auto min-h-screen">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {category.map((data, index) => {
                            let strData = data.strCategoryDescription.substring(0, 60);
                            return <Fragment key={data.idCategory}>
                                <div className="p-4 md:w-1/3">
                                    <div className="h-full  rounded-lg overflow-hidden">
                                        <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={data.strCategoryThumb} alt="blog" />
                                        <div className="p-6">
                                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">CATEGORY</h2>
                                            <h1 className="title-font text-lg font-medium text-white mb-3">{data.strCategory}</h1>
                                            <p className="leading-relaxed mb-3 text-ellipsis ">{strData}....</p>

                                            <div className="flex items-center flex-wrap justify-end">
                                                <Link
                                                    // to={`/category/${data.strCategory}`}
                                                    // state={{
                                                    //     desc: data.strCategoryDescription
                                                    // }}
                                                    // to={{
                                                    //     pathname: `/category/${data.strCategory}`,
                                                    //     state: { infoId: 1, desc: data.strCategoryDescription },
                                                    // }}
                                                    to={`/category/${data.strCategory}`}
                                                    state={{ desc: data.strCategoryDescription }}

                                                    className="text-green-400 inline-flex   items-center md:mb-2 lg:mb-0" >
                                                    <span>More Details</span>
                                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M5 12h14"></path>
                                                        <path d="M12 5l7 7-7 7"></path>
                                                    </svg>
                                                </Link>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Fragment>
                        }
                        )}




                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default CategoryPage