import React from 'react'
import "../styles/BannerBottom.css"
const BannerBottom = () => {
    return (
        <>
            <div className='bannerb-main h-[438px]'>
                <div className='flex items-center h-full  px-[10rem] gap-10 '>
                    <div className='w-[70%]'>
                        <div className='bannerb-head text-white'>
                            Try YR IT SOLUTIONS  and see how smooth our operations can be...
                        </div>
                        <div className='bannerb-sub text-white'>
                            We believe that the success of our company is a result of our clients growth.<br /> Like what we do? Drop us a message or give us a call.
                        </div>
                    </div>
                    <div className=''>
                        <div className='flex flex-col justify-start items-center gap-6'>
                            <div className='bottomb-sub2 h-[54px] w-[172px] radius bg-white text-black text-center items-center flex justify-center'>
                                Check it out
                            </div>
                            <div className='bottom-sub3 text-white'>
                                our design & smooth functioning system
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BannerBottom