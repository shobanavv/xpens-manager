import React from 'react';
import '../styles/index.css';
import { Route, Link } from 'react-router-dom';

export const TransactionList = (props) => {
    return(
        <div className="TransactionList">
          <div className="TransactionList_header">
            Transaction Details:
          </div>
            <div className="Single_transaction-container">
              {
                props.notes.map((item) => {
                  return(
                    <Link key={item.id} className="Single_transaction" to={`/note/${note.id}`}>
                    <div className="Single_transaction-header">
                    {item.title}
                    </div>
                    <div className="Single_transaction-content">
                      <div>{item.description}</div>
                      <div>{item.count}</div>
                      <div>{item.amount}</div>
                    </div>
                    </Link>
                  );
                })
              }
            </div>
          </div>

    );
}