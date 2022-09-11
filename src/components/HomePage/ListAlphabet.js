
import React, { Fragment } from 'react'
import { Link } from "react-router-dom";


const ListAlphabet = () => {


    const allAlphabatic = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    //Get Categories Descriptions 
    // const 




    return (
        <Fragment>
            <div className="container px-5 pt-10 mx-auto border-b-2 border-gray-800">
                <div className="flex flex-wrap w-full mb-2 flex-col  text-left">
                    <h4 className=" text-2xl font-bold title-font mb-2   text-white">Browse By Name</h4>
    
                </div>
            </div>
            <div className="container py-5 mx-auto">
                <div className="flex flex-wrap m-4 gap-2 justify-center">
                    {allAlphabatic.length > 0 && allAlphabatic.map((charater,index) => {
                     
                     
                        return <Link key={`${index}`} to={`/alphabet/${charater}`}>
                            <div className="uppercase">
                                <span className='hover:text-blue-600 hover:underline font-bold text-white '>
                                    {charater}
                                    </span> {'z' != charater && <Fragment >
                                    <span className='font-semibold'>/</span>
                                    
                                </Fragment>}
                            </div>
                            
                        </Link>
                    })}
                </div>
            </div>
        </Fragment>
    )
}

export default ListAlphabet