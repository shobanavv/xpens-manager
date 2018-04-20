import React from 'react';
import '../styles/App.css';
import { Route, Link } from 'react-router-dom';


function ViewSingletransaction(props) {
    
        return (
            <div className='view-singletransaction'>
                <div className="nav"> 
                <Link className='edit' to={`/EditView`}> edit </Link>
                <Link className='delete' to={`/Deletemodal`}> delete </Link>
                </div>
                <div className="singletransaction-title"> {props.location.singletransaction.title}</div>
                <div className="singletransaction-content"> {props.location.singletransaction.paragraph}</div>
                
            </div>
            )
  }          
        export default ViewSingletransaction;

