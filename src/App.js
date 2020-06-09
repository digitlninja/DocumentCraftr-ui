import React from 'react';
import './index.css';
import Navigation from './components/Navigation';
import Routes from './components/Routes';
import {Provider} from 'react-redux';
import store from './redux/store';

function App() {
    return (
        <Provider store={store}>
            <div className="flexible-content">
                <Navigation/>
                <main id="content" className="mt-5 p-5">
                    <Routes/>
                </main>
            </div>
        </Provider>
    );
}

export default App;
