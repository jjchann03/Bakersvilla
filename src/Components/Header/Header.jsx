import './header.css'
import Navbar from '../../Navbar/Navbar'
  
export default function Header(props){
    const {data} = props;
    return(
        <div id='header-body' className='w-full h-auto box-border p-4 text-white rounded-b-[6rem] phone:rounded-b-[8rem] md:rounded-b-[10rem]' style={{backgroundImage:`url(${data.img})`}}>
            <Navbar />
            <div id='header-container' className='w-full flex-col flex justify-center items-center my-2 ph:my-4 sm:my-8 md:my-12 lg:my-16 xl:my-20 box-border'>
                <h1 className='text-[2rem] md:text-[3rem] xl:text-[4rem] 2xl:text-[5rem] font-bold my-4 w-10/12 sm:w-7/12 sm:w-6/12 text-center'>
                    {(data.heading)?
                        (data.heading):
                        (<>
                            Welcome to <span>the </span><span>Bakers</span> villa
                        </>)
                    }
                </h1>
                <p className='w-11/12 sm:w-9/12 lg:w-7/12 text-center text-[0.6rem] ph:text-xs md:text-sm lg:text-base mb-4'>{data.parah}</p>
                <button className='text-xs sm:text-sm lg:text-base border-[1px] rounded-3xl px-4 sm:px-8 py-[0.3rem] sm:py-2 mt-2 phone:mt-4 md:mt-8 mb-4 sm:mb-8 lg:mb-12 hover:border-[#843F20] hover:bg-[#843F20] transition ease-in-out duration-[0.8s]'>{data.button}</button>
            </div>
        </div>
    )
}