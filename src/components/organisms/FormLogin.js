import Button from '@atoms/Button'
import { Link } from "react-router-dom"
import Forminput from '@molecules/Forminput'
import Forminputpassword from '@molecules/Forminputpassword'
import LockIconId from '@icons/LockIconId'



export default function FormLogin(){
   
   
    return(

        <form className="flex flex-1 flex-col justify-between items-center gap-5 mt-20 ">
            <div className="flex flex-col  justify-center gap-5 mt-6">
                
                <Forminput 
                    id="email" 
                    text="Email" 
                    placeholder="Insert your Email" 
                    type="email" 
                    required={true} 
                />
              
                <Forminputpassword
                 id='password'
                 text='Password'
                 placeholder='Insert your password'
                />
                <LockIconId/> 
            </div>

             

            <div  className="text-center flex flex-col items-center mb-6 gap-2 ">
                
                <Button to="/login/otp" type="accent">Next</Button>
                <Link to="/register" className="text-xl font-bold uppercase underline py-7 text-black">sign up</Link>
            </div>
            
        </form>
    )


}