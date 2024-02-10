import { Link } from "react-router-dom"
import ReceiveMoney from '@icons/ReceiveMoney'

export default function LinkCopied(){

    return(
        
     
        <div className="flex justify-center flex-col h-screen my-2">
            
            <div className="bg-accent border-secondary border-[5px] rounded-2xl flex flex-col items-center justify-center min-h-[80vh] gap-12 mx-6 ">
                
                <h1 className="text-4xl text-semibold text-secondary">Link Copied!</h1>
                <svg width="179" height="179" viewBox="0 0 179 179" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M89.5 0C40.0705 0 0 40.0705 0 89.5C0 138.93 40.0705 179 89.5 179C138.93 179 179 138.93 179 89.5C179 40.0705 138.93 0 89.5 0ZM127.902 41.9203L146.497 60.5151L88.4184 118.605L69.9328 137.08L51.3379 118.485L32.5027 99.6386L50.9774 81.1638L69.8127 100.01L127.902 41.9203Z" fill="#C69A01"/>
                </svg>
                        
                
                            
                <ReceiveMoney/>
         
                <div className="flex  border-secondary shadow shadow-secondary rounded-2xl p-2 border-[3px] ">
                    <Link to="/wallet"className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" height="50" width="50" viewBox="0 0 448 512"><path fill="#c69a01" d="M0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416zM128 256c0-6.7 2.8-13 7.7-17.6l112-104c7-6.5 17.2-8.2 25.9-4.4s14.4 12.5 14.4 22l0 208c0 9.5-5.7 18.2-14.4 22s-18.9 2.1-25.9-4.4l-112-104c-4.9-4.5-7.7-10.9-7.7-17.6z"/></svg>
                        <p className="text-white uppercase"> Back To Wallet</p>
                    </Link>
                </div>
            
              
            </div>
        </div>     


    )


}