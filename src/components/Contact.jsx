import contact from '../assets/lottie/contact.mp4';
const Contact = () => {
    return (
        <div style={{fontFamily:'Monserrat, sans-serif'}} className='px-20 space-y-12 pb-12' id='contact' data-aos="zoom-out">
            <h1 className='xl:text-6xl lg:text-5xl'>Contact</h1>
            <div className='flex'>
                <div className=''>
                    <video
                        src={contact}           // or "/project-demo.mp4" if in public
                        className='rounded-lg xl:w-[400px] xl:h-[400px] lg:w-[300px] lg:h-[300px]'
                        autoPlay
                        loop
                        muted
                        playsInline
                        poster={contact}          // fallback poster image while loading
                    />
                </div>
                <div className='space-y-4 pl-52 h-[130px] flex flex-col justify-center pt-24'>
                    <h2 className='xl:text-4xl lg:text-3xl pb-4'>Reach Me Out</h2>
                    <div className='flex flex-col gap-4'>
                        Email : Mengly.heng@student.cadt.edu.kh
                        <div data-aos="fade-up"  className='text-3xl flex gap-8'>
                            <a href="https://www.facebook.com/share/1WGDBES6e5/?mibextid=wwXIfr" target='_blank'><i className="fa-brands fa-facebook hover:text-blue-500 cursor-pointer"></i></a>
                            <a href="https://www.tiktok.com/@bad_person_4_u_r?_t=ZS-8ynOHoYMlWL&_r=1" target='_blank'><i class="fa-brands fa-tiktok cursor-pointer"></i></a>
                            <a href="https://t.me/Mengly_27" target='_blank'><i className="fa-brands fa-telegram cursor-pointer hover:text-blue-400"></i></a>
                            <a href=""><i className="fa-brands fa-linkedin cursor-pointer hover:text-blue-900"></i></a>
                            <a href="https://github.com/fjnkhewgkfncsd" target='_blank'><i className="fa-brands fa-github cursor-pointer hover:text-black"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;