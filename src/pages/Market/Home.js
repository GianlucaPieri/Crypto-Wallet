import DashboardCard from '@molecules/DashboardCard';
import SendIcon from '@icons/SendIcon';
import ReceiveIcon from '@icons/ReceiveIcon';
import IconButton from '@atoms/IconButton';
import MainLayout from '@layouts/MainLayout';
import MainHeader from '@organisms/MainHeader';




export default function Home(){
  
 

  return(

    <MainLayout header={<MainHeader title="Market"/>}>
      <DashboardCard
        title={<span> +34.983,00 <span className="text-white text-2xl font-semibold">USD</span></span>}
        subtitle={<span> 1,0002348 <span className="text-white text-2xl font-semibold">BTC</span></span>}
      />
      <div className='mt-16'>
         <img className='w-full' src="/media/ChartB.png" alt="market" />
     </div>
      

      {/*sezione SendIcon e ReceiveIcon*/}

      <div className=" mt-10 flex justify-center gap-14">
        <IconButton text='Sell' icon={<SendIcon />} to="/market/sell"></IconButton>
        <IconButton text='Buy' icon={<ReceiveIcon />} to="/market/buy"></IconButton>
      </div>

    </MainLayout>
  )

}