import { Link } from "react-router-dom"

export default function Button({children, to = '#', type = 'accent'}){
   
    const styles = {
        primary : 'bg-primary',
        secondary : 'bg-secondary',
        accent : 'bg-accent',
    }

    return(
        
        <button className="w-48 ">
            <Link to={to} className={" w-full shadow shadow-yellow-500 bg-accent flex justify-center items-center py-3 rounded-3xl text-secondary uppercase font-semibold text-2xl " + styles[type]}>
              {children}
            </Link>
       </button>
    )

}