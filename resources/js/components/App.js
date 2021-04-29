import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'antd/dist/antd.css';
import Header from './Header';

function App() {
    
        return (
            <BrowserRouter>
                <div>
                 <Header />
                </div>
            </BrowserRouter>
        );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
