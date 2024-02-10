import GuestLayout from '@layouts/GuestLayout'
import FormUploadDocuments from '@organisms/FormUploadDocuments'
import Registerimg from '@icons/Registerimg'
export default function UploadDocuments(){

    return(

        <GuestLayout title="Register" img={<Registerimg/>}>

            <FormUploadDocuments/>
                 
        </GuestLayout>


    )
}