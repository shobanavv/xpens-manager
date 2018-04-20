import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';
import './styles/index.css';
import App from './App';
/*import Createnote from './components/Createnote';
import NoteView from './components/NoteView';
import Sidebar from './components/Sidebar';
import EditView from './components/EditView';
import Deletemodal from './components/Deletemodal';
import ViewSingleNote from './components/ViewSingleNote';
*/
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
     document.getElementById('root')
);

