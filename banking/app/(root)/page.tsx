import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import RightSidebar from '@/components/RightSidebar'
import { getLoggedInUser } from '@/lib/actions/user.actions'
const Home= async ()=>{
  const LogIn = await getLoggedInUser();
  return (
    <>
      <section  className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={LogIn?.name|| 'Guest'}
            subtext="Access and manage your account and transactions efficiently."
          />

        <TotalBalanceBox 
        accounts={[]}
        totalBanks={1}
        totalCurrentBalance={1250.35}
        />
        </header>
        RECENT TRANSACTION
        
      </div>
      <RightSidebar 
      user={LogIn}
      transactions={[]}
      banks={[{currentBalance:123.50},{currentBalance:200.50}]}
      />
      
    </section>
    </>
  )
}

export default Home
