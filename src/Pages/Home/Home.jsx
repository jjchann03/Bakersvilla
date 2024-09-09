import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header';
import CircleCarousel from '../../Components/Slider/CircleSlider'

export default function Home(){
    const data = {
        heading:'',
        parah:"Welcome to Bakersvilla, where flour flies and creativity rises! We're not just about baking; we're about making magic in the kitchen. Whether you're a cookie rookie or a cake boss, our fun, hands-on classes will have you mixing, whisking, and decorating like a pro. Join our baking adventure and let's create sweet memories together!",
        button:'Explore courses',
        img:`${process.env.PUBLIC_URL}/images/Header/homeHeader.png`
    }

    const carousel1 = [
        {img:`${process.env.PUBLIC_URL}/images/Home/item1.png`},
        {img:`${process.env.PUBLIC_URL}/images/Home/item1.png`},
        {img:`${process.env.PUBLIC_URL}/images/Home/item2.png`},
        {img:`${process.env.PUBLIC_URL}/images/Home/item3.png`},
        {img:`${process.env.PUBLIC_URL}/images/Home/item3.png`},
        {img:`${process.env.PUBLIC_URL}/images/Home/item3.png`},
        {img:`${process.env.PUBLIC_URL}/images/Home/item3.png`},
        {img:`${process.env.PUBLIC_URL}/images/Home/item3.png`}
    ]

    const carousel2 = [
        {img:`${process.env.PUBLIC_URL}/images/Home/c2i1.png`},
        {img:`${process.env.PUBLIC_URL}/images/Home/c2i2.png`},
        {img:`${process.env.PUBLIC_URL}/images/Home/c2i3.png`}
    ]

    return(
        <div className='home-body'>
            <Header data={data}/>

            {/* <section id='home-learnwithus' className='flex flex-col justify-center items-center my-8 w-full'>
                <h1 className='text-[1.5rem] ph:text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] xl:text-[4rem] font-bold text-[#843F20] mb-2 sm:mb-4'>Learn <span className='text-[#ECBFAB]'>With Us</span></h1>
                <p className='text-[#757575] w-11/12 ph:w-10/12 sm:w-8/12 text-[0.6rem] ph:text-xs md:text-sm lg:text-base text-center mb-4'>Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum r</p>
                <CircleCarousel data={carousel1}/>
            </section> */}

            <section id='home-aboutus' className='flex flex-col justify-center items-center my-8'>
                <h1 className='text-[4rem] font-bold text-[#843F20] mb-4'>About Us</h1>
                <p className='text-[#757575] w-8/12 text-center mb-4'>We are dedicated to teaching and perfecting the art of baking. Our hands-on workshops and expert instructors help aspiring bakers create sweet and savory masterpieces. Join us and turn your baking dreams into reality!</p>
                <div id='aboutus-vid-container' className='w-5/12 bg-red-200'>
.
                </div>
                <Link><button className='text-sm border-[1px] rounded-3xl px-8 py-2 mt-8 mb-12 hover:border-[#843F20] hover:bg-[#843F20] transition ease-in-out duration-[0.8s] border-black hover:text-white'>Take a tour</button></Link>
            </section>

            <section id='home-students' className='flex flex-col justify-center items-center mb-20'>
                <h1 className='text-[4rem] w-10/12 px-8 text-center my-8'>The Sweetest Haven For Freshly <span className='text-[#ECBFAB]'>Baked Creations</span> by Students <img src={`${process.env.PUBLIC_URL}/images/Home/homeStudentsHeading.png`} alt='cookies' className='inline w-[5rem]'></img></h1>
                <h4 className='text-xl font-bold my-2 text-center'>Where our Students’ Baking Skills Blossom into Delicious Creations!</h4>
                <p className='w-5/12 text-[#757575] text-center mb-4'>At Bakersvilla, we’re proud to showcase the delightful results of our students' baking adventures. Throughout their courses, they create a variety of freshly baked masterpieces that embody their skills and creativity. Enjoy the sweet success of their hard work in every bite!</p>
                <CircleCarousel data={carousel2} />
            </section>

            <Footer />
        </div>
    );
}