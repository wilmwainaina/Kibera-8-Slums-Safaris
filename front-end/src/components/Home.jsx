import React from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';

function Home() {

    const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
     

  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>DONATIONS</h3>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                <h1>$91100</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>ORGANIZATIONS</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1>301</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>DONORS</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1>3300</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>REQUESTS</h3>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <h1>37</h1>
            </div>
        </div>

        <div className='charts'>
        <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" stackId="a" fill="#027884" />
          <Bar dataKey="amt" stackId="a" fill="#000000" />
          <Bar dataKey="uv" fill="#840E02" />
        </BarChart>
      </ResponsiveContainer>
      

        </div>
    </main>
  )
}

export default Home