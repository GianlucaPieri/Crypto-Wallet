import DashboardCard from '@molecules/DashboardCard';
import { Link } from 'react-router-dom';
import Textlg from '@atoms/Textlg';
import SendIcon from '@icons/SendIcon';
import ReceiveIcon from '@icons/ReceiveIcon';
import Transaction from '@molecules/Transaction';
import IconButton from '@atoms/IconButton';
import MainLayout from '@layouts/MainLayout';
import MainHeader from '@organisms/MainHeader';



export default function Home(){
  
  const transaction =[
    {type : 'Receive', date : '29/01/2023',  amount : '2.356 271 ,64', conversion : '100747,26' },
    {type : 'Send', date : '15/03/2023',  amount : '543.267,82', conversion : '23228537,49' },
    {type : 'Receive', date : '27/04/2023',  amount : '3.316 291 ,26', conversion : '141768,12' },
    
  ]

  return(

       <MainLayout     
          header={<MainHeader  
          title="Wallet"   
          subtitle={<span className='font-inter'> Welcome <span className='font-bold'>Elon</span></span>}/>}>    
          
      <DashboardCard
        title={<span> 200.356 986 497,89 <span className="text-white text-2xl font-semibold">USD</span></span>}
        subtitle={<span> 4712329,191486299 <span className="text-white text-2xl font-semibold">BTC</span></span>}
      />
      <div className="mt-10">

        <div className="flex justify-between ">
          <Textlg className=" font-bold">Last Transaction</Textlg>
          <Link to="/wallet/movements"className="font-semibold text-[#008E31] hover:underline">View All</Link>
        </div>

        {
          transaction.map((transaction, index) => {
            return <Transaction key={index} type={transaction.type} date={transaction.date} amount={transaction.amount} conversion={transaction.conversion} />
          })
        }

      </div>

      {/*sezione SendIcon e ReceiveIcon*/}

      <div className=" mt-20 flex justify-center gap-14">
        <IconButton text='Send' icon={<SendIcon />} to="/wallet/send"></IconButton>
        <IconButton text='Receive' icon={<ReceiveIcon />} to="/wallet/receive"></IconButton>
      </div>

    </MainLayout>
  )

}