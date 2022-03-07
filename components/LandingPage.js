import Image from "next/image";
import LandingStyles from "../styles/Landingpage.module.css";

const LandingPage = () => {
    return(

        <section>
            <div className="py-16">
  <div className="container m-auto">

   <div className="lg:flex justify-between items-center">
       <div className="lg:w-6/12 lg:p-0 p-7">
       <h1 className="text-5xl text-mycolor-900 font-bold leading-tight mb-5 capitalize"> Discover, collect, and sell </h1>
          <h1 className="text-5xl text-mycolor2-900 font-bold leading-tight mb-5 capitalize"> extraordinary NFTs </h1>
          <p className="text-xl text-mycolor4-900"> on the world's first & largest NFT marketplace </p>

          <div className="py-5 flex">
               <a href="/explore" className="text-white rounded-lg py-3 px-10 text-lg font-semibold bg-mycolor2-900 flex mr-3">Explore
               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-8 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
               </svg></a>
               <a href="#" className="text-black rounded-lg py-3 px-10 text-lg font-semibold bg-transparent inline-block border-2 border-mycolor2-900 hover:bg-mycolor2-900 hover:text-white">Create</a>
          </div>

        </div>
        <div className="lg:w-5/12 order-2">
          <Image src="/public/1.jpg" width='500' height='500' layout='fill'
          className={LandingStyles.rotate} alt="img"/>
        </div>
    </div>

  </div>
</div>
        </section>
    )
}

export default LandingPage