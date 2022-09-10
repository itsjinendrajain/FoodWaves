
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
                                    <a href="mailto:demo@gmail.com" className='flex flex-row gap-1 flex-nowrap justify-center'>
                                        <EnvelopeIcon className='w-6' />
                                        <span> demo@gmail.com </span>
                                    </a>

                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/4 w-full footer-col">
                            <div className="footer_detail">
                                <a href="" className="footer-logo">
                                    Feane
                                </a>
                                <p>
                                    Necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with
                                </p>
                                <div className="flex justify-between mt-4">

                                    <SocialIcon url="https://github.com/itsjinendrajain" network="twitter" />
                                    <SocialIcon url="https://github.com/itsjinendrajain" network="instagram" />
                                    <SocialIcon url="https://github.com/itsjinendrajain" network="facebook" />
                                    <SocialIcon url="https://github.com/itsjinendrajain" network="youtube" />
                                    <SocialIcon url="https://github.com/itsjinendrajain" network="linkedin" />
                                    {/* <SocialIcon url="https://facebook.com/jaketrent" network="pinterest" /> */}


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
                            <a href="https://github.com/itsjinendrajain">Mohit & Jinendra</a>
                            <br /><br />
                            &copy; <span id="displayYear"></span> Distributed By &nbsp;
                            <a href="https://github.com/itsjinendrajain" target="_blank">Jinendra Jain</a>
                        </p>

                    </div>
                </div>
            </footer>
        </Fragment>
    )
}

export default Index