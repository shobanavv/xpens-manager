import React from 'react';
import '../styles/App.css';
import { Route, Link } from 'react-router-dom';


function EditView() {
    return (
        <div className="create-transaction">
             Edit transaction : 
           <div className="create-title"> transaction Title </div>
            <textarea className="create-content"> transaction content </textarea>
            <div className="save">
            <Link exact className='button' to={`/`}>Save</Link> 
            </div>
        </div>
        )
  }          
export default EditView;