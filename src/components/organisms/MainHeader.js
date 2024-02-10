import ProfileImage from '@atoms/ProfileImage'

export default function MainHeader({title , subtitle , username }){
    function renderTitle(){

        if(title){
            return (

                <h1 className="text-[2.75rem] mt-5">

                    <span className="text-secondary">{title[0]}</span>{title.slice(1)}

                </h1>
            )
        }
         
    }
   
    return(

       

            <header className="flex items-center justify-between">
                <div>
                    
                  {renderTitle()} 
                  
                  <h2 className='text-semibold text-2xl'> {subtitle} {username} </h2>
                  
                  
                </div>
                 
                <ProfileImage/>
                
            </header>

      

    )


}