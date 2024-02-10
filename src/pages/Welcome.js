import Button from '@atoms/Button';
import { Link } from "react-router-dom";
function Welcome() {
  
   return (
    <div className="flex justify-center flex-col">
      
        <header className="text-center ">

         <img className="w-full max-w-xs mx-auto mt-0 pt-9" src="./media/Logocrypto.png" alt="" />
          
            <h1 className="text-4xl mt-20 text-white border border-yellow-500 bg-accent rounded-3xl mx-10 py-2">
              <span className="text-secondary">C</span>rypto
              <span className="text-secondary">W</span>allet
             </h1>
          

        </header>
        
        <div className="flex justify-center  flex-col items-center py-40">
          <Button to="/login" type="accent"> Log in</Button>
         
            <Link to="/register" className="text-xl uppercase underline py-7 text-white">
              sign up
            </Link>
        </div>

        <video 
          autoPlay 
          loop 
          muted 
          className="absolute w-full h-auto z-[-1]  "
          src="./media/videomd.mp4">
          <source src="./media/videomd.mp4" type="video/mp4" />
        </video>

    </div>
  );
}

export default Welcome;
