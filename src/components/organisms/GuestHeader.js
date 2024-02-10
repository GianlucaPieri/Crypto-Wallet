export default function GuestHeader({title}){

    function renderTitle(){

        if(title){
            return (

                <h1 className="text-[2.75rem] mt-8 text-6xl  ">

                    <span className="text-secondary">{title[0]}</span>{title.slice(1)}

                </h1>
            )
        }
         
    }

    return(
  
         <header className="text-center ">
            
            {renderTitle()}
         </header>



    )



}