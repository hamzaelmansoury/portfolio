import self from '../assets/self.png'
import maroc from '../assets/maroc.png'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'

function Profile() {
    return (
        <>
            <section id='profile' className="h-[100vh] flex flex-wrap justify-center sm:gap-12 items-center">
                <div className="sircle w-[300px] mt-[10vh] sm:mt-0 lg:w-[350px] lg:h-[350px] border-purple-500 border-4 overflow-hidden h-[300px] flex justify-center items-center">
                    <img src={self} alt="self" />
                </div>
                <div className='flex flex-col'>
                    <h1 className='text-4xl lg:text-5xl font-bold cursor-default'>
                        {"Hi, I'm "}<span className='text-purple-500'>Hamza<span className='hand'>🖐</span></span>
                    </h1>
                    <h2 className='text-2xl font-bold text-gray-600 cursor-default'>
                        {"I'm a Full Stack Developer."}
                    </h2>
                    <ul className='text-[17px] text-gray-600 flex flex-col gap-2 mt-4'>
                        <li className='cursor-default font-semibold hover:-translate-y-1 transition'><span className='text-3xl'>☕</span> fueled by coffee</li>
                        <li className='cursor-default font-semibold hover:-translate-y-1 transition'><span className='text-3xl'><img src={maroc} className='inline w-[39px]' alt="maroc" /></span> based in MA</li>
                        <li className='cursor-default font-semibold hover:-translate-y-1 transition'><span className='text-3xl'>👨‍🎓</span> Student at ISTA HAY SALAM</li>
                        <li className='cursor-default font-semibold hover:-translate-y-1 transition'><span className='text-3xl'>📧</span> el.hamza.mansoury@gmail.com</li>
                    </ul>
                </div>
                <div className='bg-gray-400 text-5xl absolute  flex flex-col gap-3 left-0 top-[50%] translate-y-[-50%] text-white'>
                    <a target='_blanq' href='https://github.com/hamzaelmansoury'>
                        <AiFillGithub className='cursor-pointer' />
                    </a>
                    <a target='_blanq' href='https://www.instagram.com/hamzaelmansoury_8'>
                        <AiFillInstagram className='cursor-pointer' />
                    </a>
                    <a target='_blanq' href='https://www.linkedin.com/in/hamza-elmansoury-4a4ba3272'>
                        <AiFillLinkedin className='cursor-pointer' />
                    </a>
                </div>
            </section>
        </>
    )
}

export default Profile