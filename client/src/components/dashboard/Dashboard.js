import React from 'react';
import Cookies from 'universal-cookie';


export const Dashboard = () => {
    const cookies = new Cookies();
  return (
    <div>
        <h3>Id Usuario: {cookies.get('user_id')}</h3>
    </div>
  )
}

export default Dashboard;