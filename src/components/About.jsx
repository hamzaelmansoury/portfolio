const skills = [
    'Html5',
    'Css3',
    'Tailwind',
    'Bootstrap',
    'Javascript',
    'React',
    'Nodejs',
    'Expressjs',
    'MongoDB',
    'figma'
]

const hobbies = [
    {
        emoji: '⚽',
        body: 'Football'
    },
    {
        emoji: '🎥',
        body: 'Movies'
    },
    {
        emoji: '🎵',
        body: 'Music'
    }
]

function About() {
    return (
        <>
            <section id='about' className="flex gap-4 flex-col justify-center items-center">
                <div className="rounded-lg mt-[10vh] w-[90%] md:w-[800px] overflow-hidden shadow-2xl">
                    <div className="h-[40px] bg-[#8C8C8C] gap-2 flex items-center">
                        <div className="w-[15px] cursor-pointer ml-2 h-[15px] rounded-full bg-[#FF6057]"></div>
                        <div className="w-[15px] cursor-pointer h-[15px] rounded-full bg-[#FFBD2E]"></div>
                        <div className="w-[15px] cursor-pointer h-[15px] rounded-full bg-[#27C93F]"></div>
                    </div>
                    <div style={{ fontFamily: 'Courier New,Courier,monospace' }} className="bg-[#27242F] p-[2rem] text-[1.5rem] text-[#f8f8f8]">
                        <p className="mb-4 leading-7">
                            <span className="text-[#00FF91]">hamzaelmansoury $ </span>
                            cat abouthamza
                        </p>
                        <p className="leading-7">
                            <span className="text-[#00FF91]">abouthamza
                                <span className="text-[#27C93F]"> (main) </span>
                                $ </span>
                            Welcome! I am Hamza. I am Student at ISTA HAY SALAM , I enjoy creating websites,
                            and I believe that artificial intelligence will inevitably rule us one day.
                            You should hire me!
                        </p>
                    </div>
                </div>
                {/* ---------------------------------------------------------- */}
                <div className="rounded-lg w-[90%] md:w-[800px] overflow-hidden shadow-xxl">
                    <div className="h-[40px] bg-[#8C8C8C] gap-2 flex items-center">
                        <div className="w-[15px] cursor-pointer ml-2 h-[15px] rounded-full bg-[#FF6057]"></div>
                        <div className="w-[15px] cursor-pointer h-[15px] rounded-full bg-[#FFBD2E]"></div>
                        <div className="w-[15px] cursor-pointer h-[15px] rounded-full bg-[#27C93F]"></div>
                    </div>
                    <div style={{ fontFamily: 'Courier New,Courier,monospace' }} className="bg-[#27242F] p-[2rem] text-[1.5rem] text-[#f8f8f8]">
                        <p className="mb-4 leading-7">
                            <span className="text-[#00FF91]">hamzaelmansoury $ </span>
                            cd skills/tools
                        </p>
                        <p className="leading-7 mb-4">
                            <span className="text-[#00FF91]">skills/tools
                                <span className="text-[#27C93F]"> (main) </span>
                                $ </span>
                            ls
                        </p>
                        <ul>
                            {
                                skills.map((ele, key) => <li key={key}><span className="text-[#00FF91]">✔</span> {ele}</li>)
                            }
                        </ul>
                    </div>
                </div>
                {/* ---------------------------------------------------------- */}
                <div className="rounded-lg mb-[10vh] w-[90%] md:w-[800px] overflow-hidden shadow-xxl">
                    <div className="h-[40px] bg-[#8C8C8C] gap-2 flex items-center">
                        <div className="w-[15px] cursor-pointer ml-2 h-[15px] rounded-full bg-[#FF6057]"></div>
                        <div className="w-[15px] cursor-pointer h-[15px] rounded-full bg-[#FFBD2E]"></div>
                        <div className="w-[15px] cursor-pointer h-[15px] rounded-full bg-[#27C93F]"></div>
                    </div>
                    <div style={{ fontFamily: 'Courier New,Courier,monospace' }} className="bg-[#27242F] p-[2rem] text-[1.5rem] text-[#f8f8f8]">
                        <p className="mb-4 leading-7">
                            <span className="text-[#00FF91]">hamzaelmansoury $ </span>
                            cd hobbies/interests
                        </p>
                        <p className="leading-7 mb-4">
                            <span className="text-[#00FF91]">hobbies/interests
                                <span className="text-[#27C93F]"> (main) </span>
                                $ </span>
                            ls
                        </p>
                        <ul>
                            {
                                hobbies.map((ele, key) => <li key={key}>{ele.emoji} {ele.body}</li>)
                            }
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About