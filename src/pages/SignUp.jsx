import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { IoArrowForward } from "react-icons/io5";
import Button from '../components/Button';

const SignUp = () => {
    const [hidePassword, setHidePassword] = useState(true);
    const images = [
        './images/landscape-mountain-with-trees.jpg',
        './images/vertical-shot-starry-night-sky-with-milky-way-giant-mountains.jpg',
        './images/vertical-shot-milky-way-sky-forest.jpg'
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    const togglePassword = () => {
        setHidePassword(!hidePassword);
    };

    // Auto-move images and lines together with a transition
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); 

        return () => clearInterval(interval); 
    }, []);

    // Function to change the image and line manually based on click
    const changeImage = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="p-5 flex flex-col lg:flex-row items-center justify-center gap-10 container mx-auto min-h-screen"> 
            {/* Image Section */}
            <div className="w-full lg:w-[890px] h-[690px] rounded-xl lg:mr-0 hidden sm:flex relative">
                <h1 className='absolute text-white text-3xl top-3 left-3'>NBN</h1>
                <img className="w-full h-full object-cover rounded-xl select-none" src={images[currentIndex]} alt="Image" />
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-white text-3xl w-96 text-center">
                    <p>Capturing Moments, Creating Memories</p>
                    <div className='flex gap-2 justify-center my-5 cursor-pointer'>
                        {images.map((_, index) => (
                            <div
                                key={index}
                                className={`w-12 h-1 ${currentIndex === index ? 'bg-white' : 'bg-gray-500 opacity-60'} rounded-full`}
                                onClick={() => changeImage(index)}
                            ></div>
                        ))}
                    </div>
                </div>

                {/* Button */}
                <Link to='/' className='absolute top-3 right-3 py-1 px-2 rounded-full text-sm bg-gray-600 text-white flex items-center gap-1 select-none hover:bg-gray-500 transition-colors duration-200'>
                    Back to website
                    <IoArrowForward />
                </Link>
            </div>

            {/* Button */}
            <Link to='/' className='absolute top-5 left-5 text-sm flex sm:hidden items-center gap-1 select-none hover:text-gray-500 transition-colors duration-200'>
                Back to website
                <IoArrowForward/>
            </Link>

            {/* Form Section */}
            <form action="" className="w-full max-w-[550px] flex flex-col lg:ml-0">
                <h1 className="mb-5 text-4xl sm:text-5xl w-full">Create an account</h1>
                <p className='mb-10 text-sm sm:text-base'>
                    Already have an account? 
                    <Link to="/signin" className="text-blue-500 hover:underline underline-offset-2"> Sign in</Link>
                </p>
                <div className="flex gap-4 mb-4">
                    <input type="text" placeholder="First Name" className="w-full p-2 border rounded-md outline-none focus:ring-1 focus:ring-sky-800 transition-all duration-300" />
                    <input type="text" placeholder="Last Name" className="w-full p-2 border rounded-md outline-none focus:ring-1 focus:ring-sky-800 transition-all duration-300" />
                </div>
                <input type="email" placeholder="Email" className="w-full p-2 border mb-4 rounded-md outline-none focus:ring-1 focus:ring-sky-800 transition-all duration-300" />

                {/* Password Input with Toggle */}
                <div className='flex justify-between items-center gap-2 w-full border rounded-md mb-4'>
                    <input 
                        type={hidePassword ? "password" : "text"} 
                        placeholder="Password" 
                        className="w-full outline-none p-2 rounded-md focus:ring-1 focus:ring-sky-800 transition-all duration-300" 
                    />
                    <div onClick={togglePassword} className="cursor-pointer pr-2 select-none">
                        {hidePassword ? <FaRegEyeSlash size={20}/> : <FaRegEye size={20}/>} 
                    </div>
                </div>

                <label className='text-slate-500 mb-4'>
                    <input type="checkbox" name="agree"/> I agree to the <Link className='text-sky-800 hover:underline underline-offset-2' to="/">Terms and Conditions</Link>
                </label>

                {/* Button */}
                <Button>
                    Create Account
                </Button>

                {/* Or Register With */}
                <div className="flex items-center my-5">
                    <hr className="flex-grow border-gray-300" />
                    <span className="px-4 text-sm text-gray-400">Or register with</span>
                    <hr className="flex-grow border-gray-300" />
                </div>

                {/* Social Login Buttons */}
                <div className="flex justify-between gap-4 select-none">
                    <Button type='secondary'>
                        <FcGoogle size={24}/> Google
                    </Button>
                    <Button type='secondary'>
                        <BsApple size={24}/> Apple
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default SignUp;
