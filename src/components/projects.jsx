import project from '../assets/project-picture/project-1.png';
import animation from '../assets/lottie/animation.mp4';
const Project = () => {
    return (
        <div id="projects" style={{ fontFamily: 'Montserrat, sans-serif' }} className='py-20 px-20 space-y-12 pb-12 pt-16' data-aos="zoom-in-down">
            <h1 className='xl:text-6xl lg:text-5xl'>Projects</h1>
            <div className='flex'>
                <div className='flex gap-8 items-start xl:w-1/2 lg:w-8/12'>
                    <div data-aos="flip-left">
                        <a href="https://github.com/fjnkhewgkfncsd/Full-stack-project" target='_blank'>
                            <img src={project} alt="project" className='rounded-lg w-96 h-32'/>
                        </a>
                    </div>
                    <div className='space-y-2'>
                        <h1 className='xl:text-3xl lg:text-2xl'>E-Commerce Jersey</h1>
                        <p className='text-md text-wrap'>A web application for buying football jerseys built with React Node.js Express PostgreSQL and TailwindCSS.</p>
                    </div>
                </div>
                <div className='xl:pl-56 lg:pl-12'>
                    <video
                        src={animation}           // or "/project-demo.mp4" if in public
                        className='rounded-lg w-[300px] h-[300px]'
                        autoPlay
                        loop
                        muted
                        playsInline
                        poster={project}          // fallback poster image while loading
                    />
                </div>
            </div>
        </div>
    )
}

export default Project;