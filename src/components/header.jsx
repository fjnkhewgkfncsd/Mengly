import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import useTheme from '../utils/useTheme.jsx';

const Header = () => {
    const { isDark, toggleTheme } = useTheme();
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isAtTop, setIsAtTop] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const scrollDifference = Math.abs(currentScrollY - lastScrollY);
            
            // Tolerance: only react to significant scroll changes
            if (scrollDifference < 5) return;
            
            // Offset: only start hiding after scrolling past 100px
            const offset = 0;
            setIsAtTop(currentScrollY < 1);
            
            if (currentScrollY < offset) {
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY && scrollDifference > 10) {
                // Scrolling down with enough movement
                setIsVisible(false);
            } else if (currentScrollY < lastScrollY) {
                // Scrolling up
                setIsVisible(true);
            }
            
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <header 
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isAtTop 
                    ? 'bg-transparent shadow-none' 
                    : 'bg-white dark:bg-[#171c27] shadow-md'
            } ${
                isVisible ? 'translate-y-0' : '-translate-y-full'
            }`}
        >
            <div className="flex items-center md:justify-between md:gap-0 gap-6 lg:px-8 px-2 dark:bg-[#171c27] xl:h-[100px] lg:h-[90px] h-[50px]">
                <Link to='home' smooth={true} duration={500} className="cursor-pointer font-semibold flex items-center justify-center">
                    <span className="text-blue-500 lg:text-3xl xs:text-lg">&lt;</span>
                    <span className='md:mx-2 dark:text-white xl:text-2xl lg:text-lg text-[12px]' style={{fontFamily: 'Agustina, sans-serif'}}>Heng Mengly</span>
                    <span className="text-blue-500 lg:text-3xl xs:text-lg">/&gt;</span>
                </Link> 
                <div className='flex xl:gap-16 dark:text-white lg:gap-8 gap-4'>
                    <Link to='skills' smooth={true} duration={500} className='cursor-pointer '>
                        <span className='xl:text-xl lg:text-md text-md' style={{ fontFamily: 'Montserrat, sans-serif' }}>Skills</span>
                    </Link>
                    <Link to='resume' smooth={true} duration={500} className='cursor-pointer hidden md:inline-block'>
                        <span className='xl:text-xl lg:text-md ' style={{ fontFamily: 'Montserrat, sans-serif' }}>Resume</span>
                    </Link>
                    <Link to='experiences' smooth={true} duration={500} className='cursor-pointer hidden md:inline-block'>
                        <span className='xl:text-xl lg:text-md' style={{ fontFamily: 'Montserrat, sans-serif' }}>Work Experiences</span>
                    </Link>
                    <Link to='education' smooth={true} duration={500} className='cursor-pointer '>
                        <span className='xl:text-xl lg:text-md text-md' style={{ fontFamily: 'Montserrat, sans-serif' }}>Education</span>
                    </Link>
                    <Link to='projects' smooth={true} duration={500} className='cursor-pointer '>
                        <span className='xl:text-xl lg:text-md text-md' style={{ fontFamily: 'Montserrat, sans-serif' }}>Projects</span>
                    </Link>
                    <Link to='contact' smooth={true} duration={500} className='cursor-pointer hidden md:inline-block'>
                        <span className='xl:text-xl lg:text-md' style={{ fontFamily: 'Montserrat, sans-serif' }}>Contact Me</span>
                    </Link>
                    <label className='relative xl:w-14 lg:w-12 lg:h-6 xl:h-8 w-8 h-8 rounded-full bg-gray-300 shadow-inner cursor-pointer transition-all duration-300' >
                        <input type="checkbox" className='sr-only peer' onChange={toggleTheme} checked={isDark}/>
                        <div className=' flex items-center justify-center absolute top-1 left-1 lg:w-4 lg:h-4 xl:w-6 xl:h-6 xl:text-base lg:text-xs bg-white rounded-full xl:peer-checked:translate-x-6 lg:peer-checked:translate-x-6 transition-all duration-300 shadow-[4px_4px_8px_#bebebe,_-4px_-4px_8px_#D6DCE3]'>
                            { isDark ? '🌙' : '🌞'}
                        </div>
                    </label>
                </div>
            </div>
        </header>
    )
}

export default Header;