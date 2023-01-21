

const Footer = () => {
    return (
      <footer className=" bg-primary-100 py-10 bg-black">
        <div className="justify-content mx-auto w-2/6 gap-16 md:flex">
          <div className="mt-10 basis-1/2 md:mt-0">
           
           
            <div className="w-40">
            <img alt="logo" src="https://www.skygodz.com/wp-content/uploads/2023/01/enDAPP_logo.svg" />
            </div>
            
            <p className="text-white my-5 text-lg" >
              Web3 meets Entertainment.
            </p>
            <p className="text-gray-400"> &copy; {new Date().getFullYear()} Virtual Graphics. All rights reserved.</p>
          </div>
          
          <div className="mt-16 basis-1/4 md:mt-0">
            <h4 className=" text-white font-bold">Contact Us</h4>
            <p className="text-gray-400 my-5">info(at)skygodz.com</p>
            <p className="text-gray-400 ">Terms of Use/Privacy/Support</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;