import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './App.css';
import { getSwapiShips } from '../services/swapi';
import Starships from '../pages/Starships/Starships';

class App extends Component {
    state = {
        results: []
    }
    async componentDidMount() {
        const { results } = await getSwapiShips()
        this.setState({ results });
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">Hope E Wan Kenobi Starships</header>
                <div className="container">
                    <Switch>
                        <Route exact path="/" render={(props) => (
                            <div className="App-links justify-content-center">
                                {
                                    this.state.results.map((result, id) =>
                                        (
                                            <Link key={id} to={`/${result.name}`} >
                                                {result.name}
                                            </Link>
                                        )
                                    )
                                }
                            </div>
                        )} />

                    </Switch>
                </div>
            </div>
        );
    }
}
export default App;