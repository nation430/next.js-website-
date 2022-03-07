import footerStyles from "../styles/Footer.module.css";

const Footer = () => {
    return(
 <div className="bg-purple-900">

  <footer className="text-gray-600 body-font bg-purple-900">
    <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
      <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white p-2 bg-red-700 rounded-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
          <span className="ml-3 text-2xl text-white">Logo</span>
        </a>
        <p className="mt-2 text-xl leading-2   text-white ">
        This website is made with Next.js, a unique and beautiful framwork that is flexible and modular. 
        A complete and customizable solution to building the website of your dreams.
        </p>
      </div>
      <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className=" font-bold text-white tracking-widest text-2xl mb-3">About</h2>
          <nav className="list-none mb-10 space-y-5">
            <li>
              <a className="text-white hover:text-red-300" href="/explore">Explore</a>
            </li>
            <li>
              <a className="text-white hover:text-red-300" href="#">Item</a>
            </li>
            <li>
              <a className="text-white  hover:text-red-300" href="#">Collection</a>
            </li>
            <li>
              <a className="text-white hover:text-red-300" href="#">Connect</a>
            </li>
          </nav>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="font-bold text-white tracking-widest text-2xl mb-3">Settings</h2>
          <nav className="list-none mb-10 space-y-5 ">
            <li>
              <a className="text-white hover:text-red-300" href="#">Settings</a>
            </li>
            <li>
              <a className="text-white hover:text-red-300" href="#">Application</a>
            </li>
            <li>
              <a className="text-white hover:text-red-300" href="#">Security</a>
            </li>
            <li>
              <a className="text-white hover:text-red-300" href="#">Activity</a>
            </li>
          </nav>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="font-bold text-white tracking-widest text-2xl mb-3">Profile</h2>
          <nav className="list-none mb-10 space-y-5">
            <li>
              <a className="text-white hover:text-red-300" href="#">Profile</a>
            </li>
            <li>
              <a className="text-white hover:text-red-300" href="#">Created</a>
            </li>
            <li>
              <a className="text-white hover:text-red-300" href="#">Collected</a>
            </li>
            <li>
              <a className="text-white hover:text-red-300" href="#">Activity</a>
            </li>
          </nav>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className=" font-bold text-white tracking-widest text-2xl mb-3">CATEGORIES</h2>
          <nav className="list-none mb-10 space-y-5">
            <li>
              <a className="text-white hover:text-red-300" href="#">On Sale</a>
            </li>
            <li>
              <a className="text-white hover:text-red-300" href="#">Liked</a>
            </li>
            <li>
              <a className="text-white hover:text-red-300" href="#">Follwing</a>
            </li>
            <li>
              <a className="text-white hover:text-red-300" href="#">Followers</a>
            </li>
          </nav>
        </div>
      </div>
    </div>
    <div className="bg-transparent border-t ">
      <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row pt-10">
        <p className="text-white text-sm text-center sm:text-left">© 2022 —
          <a href="#" rel="noopener noreferrer" className="text-gray-400 ml-1" target="_blank">@Me</a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
          <a className="text-gray-200">
            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-200">
            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-200">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-200">
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
              <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
      </div>
    </div>

    <div className="flex h-24 w-full items-center justify-center">
        <p
          className="flex items-center justify-center"
        >
          With &#128151; from{' '}
          T.Nation
        </p>
      </div>
  </footer>


     
        </div>
    )
}

export default Footer