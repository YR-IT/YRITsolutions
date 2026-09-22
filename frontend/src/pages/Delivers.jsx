import React from 'react'
import IMG from '../assets/Rectangle3846.png'
import IMG2 from '../assets/Rectangle 3848.png'
import { Link, useNavigate } from 'react-router-dom'

const Delivers = () => {
    const navigate = useNavigate()

    const data = [
        {
            heading: "Web Development Service",
            img: IMG,
            desc:'We offer top-notch web development services tailored to your business needs. Our expertise includes custom web development, responsive design, and e-commerce solutions to enhance your online presence.Let us help you create a stunning and functional website that stands out.',
            link: "#"
        },
        {
            heading: "App Development Service",
            img: IMG2,
            desc:'Transform your ideas into reality with our expert app development services. We specialize in creating intuitive, high-performance mobile apps tailored to your business needs. Elevate your digital presence with custom solutions designed to engage and inspire.',
            link: "#"
        },
        {
            heading: "Ui/Ux Development Service",
            img: IMG,
            desc:'We offer top-notch web development services tailored to your business needs. Our expertise includes custom web development, responsive design, and e-commerce solutions to enhance your online presence.Let us help you create a stunning and functional website that stands out.',
            link: "#"
        },
        {
            heading: "Digital Marketing Service",
            img: IMG2,
            desc:'Transform your ideas into reality with our expert app development services. We specialize in creating intuitive, high-performance mobile apps tailored to your business needs. Elevate your digital presence with custom solutions designed to engage and inspire.',
            link: "#"
        },

    ]
    return (
        <>
            <div className='w-full'>
                <div className='heading w-full text-center flex justify-center p-10'>
                    <div className=' w-[655px] text-center '>
                        We Strive To Deliver Development Services
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className='w-[80%]'>
                        {data.map((item, index) => {
                            return (<>
                                <div className={`flex ${index % 2 == 1 ? 'flex-row-reverse' : ''} gap-12 w-full mb-[10rem]`}>
                                    <div className='h-[475px] w-[492px]'>
                                        <img src={item.img} className='h-[475px] w-[492px]' />
                                    </div>
                                    <div className='flex flex-col w-[601px]'>
                                        <div className=' text-left text-[44px] font-semibold flex float-left justify-start items-start'>
                                            <p>
                                                {item.heading}
                                            </p>
                                        </div>
                                        <div className=' text-justify pt-6 ' style={{
                                            fontSize: "30px",
                                            fontWeight: "400",
                                            lineHeight: "31.2px",
                                            textAlign: "justified",
                                            color: "#6A6A6A",
                                        }}>
                                            {item.desc}
                                        </div>
                                        <div className='btn mt-14 h-[73px] w-[219px] text-[20px] px-[16px]'>
                                            <a href=""
                                            >
                                                <div className='' onClick={() => { navigate('/ourservices') }}
                                                >Learn More</div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </>)
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Delivers