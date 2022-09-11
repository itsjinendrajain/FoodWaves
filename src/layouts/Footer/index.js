
import { ClockIcon, EnvelopeIcon, MapIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid';
import React, { Fragment } from 'react'
import { SocialIcon } from 'react-social-icons';

const Index = () => {
    return (
        <Fragment>
            <footer className="footer_section">
                <div className="">
                    <div className="flex justify-evenly lg:flex-row flex-col">
                        <div className="lg:w-1/4 w-full footer-col">
                            <div className="footer_contact">
                                <h4>
                                    Contact Us
                                </h4>
                                <div className="contact_link_box">
                                    <a href="" className='flex flex-row gap-1 flex-nowrap justify-center'>
                                        <MapPinIcon className='w-6' />
                                        <span> Location </span>
                                    </a>

                                    <a href="tel:+11234567890" className='flex flex-row gap-1 flex-nowrap justify-center'>
                                        <PhoneIcon className='w-6'></PhoneIcon>
                                        <span> +1 1234567890 </span>
                                    </a>
                                    <a href="mailto:jinendrajain6810@gmail.com" className='flex flex-row gap-1 flex-nowrap justify-center'>
                                        <EnvelopeIcon className='w-6' />
                                        <span> jinendrajain6810@gmail.com </span>
                                    </a>

                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/4 w-full footer-col">
                            <div className="footer_detail">
                                <a href="" className="footer-logo">
                                    FoodWaves
                                </a>
                                <p>
                                    Recipe has no soul.<br /> You, as the cook, must bring soul to the recipe.
                                </p>
                                <div className="flex justify-center gap-1 mt-4">

                                    <SocialIcon className='hover:opacity-70' url="https://github.com/itsjinendrajain" network="twitter" />
                                    <SocialIcon className='hover:opacity-70' url="https://github.com/itsjinendrajain" network="instagram" />
                                    <SocialIcon className='hover:opacity-70' url="https://github.com/itsjinendrajain" network="facebook" />
                                    <SocialIcon className='hover:opacity-70' url="https://github.com/itsjinendrajain" network="youtube" />
                                    <SocialIcon className='hover:opacity-70' url="https://www.linkedin.com/in/itsjinendrajain/" network="linkedin" />
                                 


                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/4 w-full footer-col">
                            <h4> Opening Hours </h4>
                            <p> Everyday </p>
                            <p>
                                <ClockIcon className='w-6 ml-4 inline-block' /> 
                                <span>10.00 Am -10.00 Pm</span>
                            </p>
                        </div>
                    </div>
                    <div className="footer-info">
                        <p>
                            &copy;
                            <span id="displayYear"></span> All Rights Reserved By &nbsp;
                            <a href="https://github.com/itsjinendrajain" className='!text-yellow-600 font-medium text-lg hover:!text-yellow-300'>Jinendra Jain</a>
                            <br /><br />
                            &copy; <span id="displayYear"></span> Distributed By &nbsp;
                            
                            <a 
                            href="https://github.com/itsjinendrajain"
                                className='!text-yellow-600 font-medium text-lg hover:!text-yellow-300' 
                            target="_blank">Jinendra Jain</a>
                        </p>

                    </div>
                </div>
            </footer>
        </Fragment>
    )
}

export default Index