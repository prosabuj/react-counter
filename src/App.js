import React, { Component } from 'react';
import Navbar from './Components/navbar'
import Counter from './Components/counters';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <main className='container'>
                    <Counter />
                </main>
            </React.Fragment>
           
        );
    }
}

export default App;