import React from 'react';
import { Route, Link } from 'react-router-dom';


function Sidebar () {
    return (
        <div className="sidebar">
              <h1 className="App-title">Lambda transactions</h1>
              <div className="button-col">
                <Link exact className='button' to={`/`}>View your transactions</Link>
                <Link className='button' to={`/Createtransaction`}>+ Create New transaction</Link>
              </div>   
        </div>
        
        )

}
export default Sidebar;         