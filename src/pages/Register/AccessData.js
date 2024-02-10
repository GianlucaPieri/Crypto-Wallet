import GuestLayout from '@layouts/GuestLayout'
import FormAccessData from '@organisms/FormAccessData'
import Registerimg from '@icons/Registerimg'
export default function AccessData(){

   return(
        <GuestLayout title="Register" img={<Registerimg/>}>

            <FormAccessData/>

        </GuestLayout>
            
     
      
   )


}