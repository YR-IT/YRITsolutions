import React from 'react'

const CopyrightBanner = () => {
    const year = new Date().getFullYear();
    return (
        <>
            <div className='h-[93px] max-[500px]:mt-[6rem]'>
                <hr className='border-[73779C] border-[1px]' />
                <br />
                <div className='text-center'>
                    @{year} All Rights Reserved
                </div>
            </div>
        </>
    )
}

export default CopyrightBanner