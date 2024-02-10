export default function DashboardCard({title , subtitle}){
 
    return(

        <div className='relative'>
                    
            <div className="bg-accent p-6 rounded-3xl border-[3px] border-secondary relative">
            <h2 className="text-2xl  text-secondary">{title}</h2>
            <h3 className="text-xl  text-secondary  mt-3">{subtitle}</h3>
            <img className="absolute right-[-25px] top-14" src="/media/Bitcoin.png" alt="Bitcoin illustration" />
            </div>

        </div>

    ) 


}

