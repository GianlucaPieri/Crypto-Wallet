import { Link } from 'react-router-dom';
export default function IconButton({text , to = "#" , icon}){

   return(
    <Link to={to} className="w-32 block text-center">
        <button className="bg-accent shadow-2xl border-[3px] border-secondary rounded-3xl py-3 px-4 items-center justify-center">
            {icon}
        </button>
        <p className="font-bold text-xl mt-1">{text}</p>
    </Link>

   )


}