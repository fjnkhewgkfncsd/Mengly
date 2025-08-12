import CADT from '../assets/logo/CADT.png';
const Education = () => {
    return (
        <div id='education'  className='md:px-20 px-4 md:space-y-12 space-y-4 md:py-16 py-10 font-[Montserrat, sans-serif]'>
            <h1 className='xl:text-6xl lg:text-5xl text-2xl'>Education</h1>
            <div className='flex md:gap-12 gap-4 items-start' data-aos="fade-right">
                <div className='md:w-[15%] w-[40%]'>
                    <img src={CADT} alt="CADT" className='rounded-full md:w-[152px] w-20 md:h-38 h-20'/>
                </div>
                <div className='md:space-y-3'>
                    <h1 className='xl:text-4xl lg:text-2xl text-xl font-semibold lg:mb-2 mb-0'>Cambodia Academy Of Digital Technology</h1>
                    <div>
                        <h3 className='xl:text-2xl lg:text-xl text-md'>Bachelor In Computer Science Specialized In Software Engineering</h3>
                        <h3 className='xl:text-lg lg:text-md font-normal'>February 2024 - Now</h3>
                        <h3 className='xl:text-lg lg:text-md font-normal'>Third Year student</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Education;