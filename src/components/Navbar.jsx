import { useState, useRef } from "react"
import emailjs from 'emailjs-com'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Navbar() {

    const form = useRef();
    const [show, setShow] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();

        setShow(false)

        emailjs.sendForm('service_kbbt6hn', 'template_c8tcb1m', form.current, 'aPK340khtHlzlef7Y')
            .then(() => {
                toast.success("message sent", { position: toast.POSITION.BOTTOM_RIGHT })
            }, () => {
                toast.error('message not sent', { position: toast.POSITION.BOTTOM_RIGHT })
            });
    };

    return (
        <>
            <nav className="flex fixed top-0 left-0 z-40 w-[100%] bg-white justify-between h-[10vh] items-center border px-4">
                <p className="text-4xl mb-3 cursor-default">🐐</p>
                <ul className="flex font-bold lg:gap-20 gap-8 text-gray-600">
                    <li>
                        <a href="/#profile" className="hover:text-purple-500">Profile</a>
                    </li>
                    <li>
                        <a href="/#about" className="hover:text-purple-500">About</a>
                    </li>
                    <li>
                        <a href="/#portfolio" className="hover:text-purple-500">Portfolio</a>
                    </li>
                </ul>
                <button onClick={() => setShow(true)} className="px-3 p-2 rounded text-white italic hover:bg-purple-400 bg-purple-500">Contact me</button>
            </nav>
            <ToastContainer theme="colored" />
            {
                show && <>
                    <div className="h-[100vh] w-[100%] bg-black opacity-70 fixed top-0 left-0 z-50"></div>
                    <div className="lg:w-[600px] w-[450px] p-8 h-[300px] flex justify-center items-center border-2 rounded-lg bg-white shadow-2xl fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-50">
                        <span onClick={() => setShow(false)} className="absolute top-0 right-2 text-gray-500 text-2xl font-bold cursor-pointer">x</span>
                        <form className="flex text-gray-500 flex-col gap-4 w-full" ref={form} onSubmit={sendEmail}>
                            <input className="p-3" type="text" required placeholder="Name..." name="user_name" />
                            <input className="p-3" type="email" required placeholder="Email..." name="user_email" />
                            <textarea className="p-3" name="message" required placeholder="Message..." />
                            <input className="px-3 p-2 cursor-pointer rounded text-white italic hover:bg-purple-400 bg-purple-500" type="submit" value="Send" />
                        </form>
                    </div>
                </>
            }
        </>
    )
}

export default Navbar