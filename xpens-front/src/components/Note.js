import React from 'react';
import ReactDom from 'react-dom';
import {connect} from 'react-redux';
import {Link } from 'react-router-dom';
import {addTransaction} from '../actions';
import {deleteTransaction} from '../actions';
import '../styles/index.css';

class transactionView extends React.Component {
    render() {
        return(
            <div className="transaction">
                <div className="Topbar">
                    <Link to{`/transaction/edit/${this.props.transaction.id}`} className="Toolbar-Button">
                        Edit
                    </Link>
                    <Link to={'/'} className"Toolbar-Button" onClick={() => this.props.deleteTransaction(this.props.transaction.id)}>
                        Delete
                    </Link>
                </div>   
                <div className="transaction-title">
                    {this.props.transaction.title}
                </div>
                <div className="transaction-description">
                    <div>{this.props.transaction.description}</div>   
                    <div>{this.props.transaction.count}</div>
                    <div>{this.props.transaction.amount}</div>
                </div> 
            </div>
        );
    }
}

const mapStoretoProps = state => {
    return {
        props: state,
    }
}

export default connect(mapStoretoProps, {deleteTransaction})(Transaction);