import GuestLayout from '@layouts/GuestLayout'
import FormUserData from '@organisms/FormUserData'
import Registerimg from '@icons/Registerimg'
export default function userData(){

    return(

        <GuestLayout title="Register" img={<Registerimg/>}>

            <FormUserData/>
                 
        </GuestLayout>


    )
}