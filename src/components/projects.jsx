import animation from '../assets/lottie/animation.mp4';

const Project = () => {
    return (
        <div id="projects"  className='md:py-20 px-4 md:px-20 md:space-y-12 space-y-4 pb-12 md:pt-16 pt-8' data-aos="zoom-in-down">
            <h1 className='xl:text-6xl lg:text-5xl text-2xl'>Projects</h1>
            <div className='flex'>
                <div className='flex flex-col gap-4 flex-2'>
                    <div className='flex md:gap-8 gap-4 items-start xl:w-1/2 lg:w-8/12'>
                        <div className='md:space-y-2' style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            <a href="https://github.com/fjnkhewgkfncsd/Full-stack-project" target='_blank'>
                                <h1 className='xl:text-3xl lg:text-2xl text-lg font-semibold underline' >E-Commerce Jersey</h1>
                            </a>
                            <p className='text-md text-wrap'>A web application for buying football jerseys built with React Node.js Express PostgreSQL and TailwindCSS.</p>
                        </div>
                    </div>
                    <div className='flex md:gap-8 gap-4 items-start xl:w-1/2 lg:w-8/12'>
                        <div className='md:space-y-2' style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            <a href="https://github.com/fjnkhewgkfncsd/Hot_wheel.git" target='_blank'>
                            <h1 className='xl:text-3xl lg:text-2xl text-lg font-semibold underline'>Jersey Store</h1>    
                            </a>
                            <p className='text-md text-wrap'>A web application for selling jerseys built with React.js.</p>
                        </div>
                    </div>
                    <div className='flex md:gap-8 gap-4 items-start xl:w-1/2 lg:w-8/12'>
                        <div className='md:space-y-2' style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            <a href="https://github.com/fjnkhewgkfncsd/final-project-flutter.git" target='_blank'>
                            <h1 className='xl:text-3xl lg:text-2xl text-lg font-semibold underline'>Emergency Support Application</h1>    
                            </a>
                            <p className='text-md text-wrap'>An application designed to helps people in emergency situations such as fire, injury. Developed with flutter.</p>
                        </div>
                    </div>
                    <div className='flex md:gap-8 gap-4 items-start xl:w-1/2 lg:w-8/12'>
                        <div className='md:space-y-2' style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            <a href="https://github.com/fjnkhewgkfncsd/Project_java.git" target='_blank'>
                            <h1 className='xl:text-3xl lg:text-2xl text-lg font-semibold underline'>School Management System</h1>    
                            </a>
                            <p className='text-md text-wrap'>An application developed for helps school managing students, staffs and lecturers. Tracking user's attendent and recording students' score and users' profile using java with java swing library.</p>
                        </div>
                    </div>
                    <div className='flex md:gap-8 gap-4 items-start xl:w-1/2 lg:w-8/12'>
                        <div className='md:space-y-2' style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            <a href="https://github.com/Vichea-collab/SEVAKAM.git" target='_blank'>
                            <h1 className='xl:text-3xl lg:text-2xl text-lg font-semibold underline'>Service Finder Mobile Application</h1>    
                            </a>
                            <p className='text-md text-wrap'>A mobile application built to helps people who find reliable service provider more easily. Customers could chat with service provider after comform the price, they can book the service with a system tracking provider performance.</p>
                        </div>
                    </div>
                </div>
                <div className='hidden md:inline-flex md:flex-1 md:justify-end md:items-center'>
                    <video
                        src={animation}           // or "/project-demo.mp4" if in public
                        className='rounded-lg w-[350px] h-[350px]'
                        autoPlay
                        loop
                        muted
                        playsInline        // fallback poster image while loading
                    />
                </div>
            </div>
        </div>
    )
}

export default Project;