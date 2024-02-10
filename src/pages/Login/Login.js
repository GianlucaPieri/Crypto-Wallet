import GuestLayout from '@layouts/GuestLayout'
import FormLogin from '@organisms/FormLogin'
import Lockid from '@icons/Lockid'
export default function Login(){

   return(
     
        <GuestLayout title="Login" img={<Lockid/>}> 
             
            <FormLogin/>

            

        </GuestLayout> 

   )


}