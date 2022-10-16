/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import categories from '../../components/CategoryPage/categories'
import { Link } from 'react-router-dom'


const navType = {
    subMenu: "subMenu",
    item: "item",

}
export default function Navbar() {
    const [navItems, setNavItems] = useState([])

    useEffect(() => {
        let tempNavigation = [...navItems];
        const subCategoriesMenu = [];
        let tempList = [
            {
                name: "ALL",
                href: "/category/all",
                image: "https://www.themealdb.com/images/category/vegetarian.png"
            }
        ];
        for (let i = 0; i < categories.length; i++) {
            const ele = categories[i];
            tempList.push({
                name: ele.strCategory,
                href: `/category/${ele.strCategory}`,
                image: ele.strCategoryThumb
            });
            if (tempList.length >= 5) {
                subCategoriesMenu.push(tempList);
                tempList = [];
            }
        }
        // console.log(subCategoriesMenu);
        tempNavigation.push({
            type: navType.subMenu,
            name: "Categories",
            href: '#',
            current: false,
            subMenu: subCategoriesMenu,
        })

        tempNavigation.push({
            type: navType.item,
            name: "Random Recipe",
            href: '/recipe/random',
            current: false,

        })

        setNavItems(tempNavigation)

        // console.log({ nav: navItems })
        // We Will have 
    }, [])
    // useEffect(() => {
    //     console.log(navItems);
    // }, [navItems])

    return (
        <Fragment>
            
            <Fragment>
                <header className="relative flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-4 dark:bg-black">
                    <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
                        <div className="flex items-center justify-between">
                            <Link className="flex-none text-xl font-semibold dark:text-white" to="/">
                                <div className="flex items-center">
                                    <img src="/images/FoodWavesNavBar.png " 
                                        className="mr-3 lg:block h-8 w-auto " 
                                    alt="FoodWaves Logo" />
                                    
                                </div>
                            </Link>
                            <div className="sm:hidden">
                                <button type="button" className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" data-hs-collapse="#navbar-collapse-basic" aria-controls="navbar-collapse-basic" aria-label="Toggle navigation">
                                    <svg className="hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                                    </svg>
                                    <svg className="hs-collapse-open:block hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div id="navbar-collapse-basic" className="hidden basis-full grow sm:block">
                            <div className="flex flex-col gap-2  mt-5 sm:flex-row sm:items-center sm:justify-end ">
                                {navItems.length > 0 && navItems.map((navItem, index) => {
                                    if (navItem.type === navType.subMenu) {
                                        return <Fragment key={`navItem${index}`}>
                                            <div className="hs-dropdown [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] ">
                                                <button type="button" className="p-0 flex items-center w-full uppercase text-base
                                                font-robotocondensed
                                                font-bold
                                                text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                                    <img src={`https://www.themealdb.com/images/category/vegetarian.png`} className="w-4 h-4 mr-1" alt="" />
                                                    {navItem.name}
                                                    <ChevronDownIcon className='w-5 h-5 ml-1 text-green-600 font-bold' />


                                                </button>

                                                <div className="hs-dropdown-menu transition-[opacity,margin]  duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 w-full hidden z-10 sm:mt-3 top-full left-0 min-w-[15rem] bg-white sm:shadow-md p-2 dark:bg-black   dark:divide-gray-700 before:absolute before:-top-5 before:left-0 before:w-full before:h-5">
                                                    <div className="sm:grid sm:grid-cols-3">
                                                        {navItem.subMenu.map((Itemss, index2) => {
                                                            // console.log(Itemss);
                                                            return <div key={`subMenu${index2 + 20}`} className="flex flex-col">
                                                                {Itemss.map((item, index) => {
                                                                    // console.log(item)
                                                                    return <Link key={`subMenuItem${index2 + 1}${index}`} className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-base text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:hover:font-semibold" to={item.href}>
                                                                        <img src={item.image} className="w-auto h-12" alt="" />
                                                                        {item.name}
                                                                    </Link>
                                                                })}
                                                            </div>
                                                        })}
                                                    </div>
                                                </div>
                                            </div>
                                        </Fragment>
                                    }
                                    else {
                                        return <Fragment key={`navItem${index}`}>
                                            <Link className="block py-2 pr-4 pl-3  text-base uppercase
                                                font-robotocondensed
                                                font-bold
                                                text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" to={navItem.href}>{navItem.name}</Link>

                                        </Fragment>

                                    }
                                })}



                            </div>
                        </div>
                    </nav>
                </header>
            </Fragment >


        </Fragment >
    )
}
