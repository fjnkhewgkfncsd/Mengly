import Layard from './Lanyard/Lanyard.jsx';
import { Link } from 'react-scroll';
const Home = () => {
    return (
        <div className='px-24 py-30' id='home' >
            <div className='flex gap-4' id='resume'>
                <div data-aos="fade-up"  className='xl:w-[55%] lg:w-[45%] flex flex-col gap-8 items-center justify-center lg:pt-10' style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        <h1 className='xl:text-7xl lg:text-4xl font-semibold'>Hey there, I'm Heng Mengly
                            <span className="wave-emoji">👋</span>
                        </h1>
                    <p className='xl:text-3xl lg:text-xl'>A passionate Full Stack Software Developer having an experience of building Web applications with JavaScript / React.js / Nodejs / Html and some other cool libraries and frameworks.</p>
                </div>
                <div className='absolute top-[-100px] right-12 w-1/2 overflow-hidden'>
                    <Layard/>
                </div>
            </div>
            <div data-aos="fade-up"  className='xl:text-3xl lg:text-xl flex xl:gap-8 lg:gap-4 xl:py-8 lg:pt-12 lg:pb-0'>
                <a href="https://www.facebook.com/share/1WGDBES6e5/?mibextid=wwXIfr" target='_blank'><i className="fa-brands fa-facebook hover:text-blue-500 cursor-pointer"></i></a>
                <a href="https://www.tiktok.com/@bad_person_4_u_r?_t=ZS-8ynOHoYMlWL&_r=1" target='_blank'><i class="fa-brands fa-tiktok cursor-pointer"></i></a>
                <a href="https://t.me/Mengly_27" target='_blank'><i className="fa-brands fa-telegram cursor-pointer hover:text-blue-400"></i></a>
                <a href=""><i className="fa-brands fa-linkedin cursor-pointer hover:text-blue-900"></i></a>
                <a href="https://github.com/fjnkhewgkfncsd" target='_blank'><i className="fa-brands fa-github cursor-pointer hover:text-black"></i></a>
            </div>
            <div data-aos="fade-up" className='flex gap-8 xl:text-2xl lg:text-lg text-white cursor-pointer py-8' style={{fontFamily: 'Montserrat, sans-serif'}}>
                <Link to='contact' smooth={true} duration={500} className='xl:w-48 lg:w-32 rounded-lg xl:h-12 bg-[#55198b] flex items-center justify-center'>Contact Me</Link>
                <a href="../../public/resume.pdf"
                download="resume.pdf"
                >
                    <button className='px-8 h-12 bg-[#55198b] rounded-lg flex items-center justify-center cursor-pointer'>
                        Download My Resume
                    </button>
                </a>
            </div>
        </div>
    )
}

export default Home;