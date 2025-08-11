import CADT from '../assets/logo/CADT.png';
const Education = () => {
    return (
        <div id='education' style={{fontFamily:'Montserrat, sans-serif'}} className='px-20 space-y-12 py-16'>
            <h1 className='xl:text-6xl lg:text-5xl'>Education</h1>
            <div className='flex gap-12 items-start' data-aos="fade-right">
                <div>
                    <img src={CADT} alt="CADT" className='rounded-full w-38 h-38'/>
                </div>
                <div className='space-y-3'>
                    <h1 className='xl:text-4xl lg:text-2xl font-semibold lg:mb-2'>Cambodia Academy Of Digital Technology</h1>
                    <div>
                        <h3 className='xl:text-2xl lg:text-xl'>Bachelor In Computer Science Specialized In Software Engineering</h3>
                        <h3 className='xl:text-lg lg:text-md font-normal'>February 2024 - Now</h3>
                        <h3 className='xl:text-lg lg:text-md font-normal'>Third Year student</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Education;