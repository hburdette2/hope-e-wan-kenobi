import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './App.css';
import getSwapiShips from '../services/swapi';
import Starships from '../pages/Starships/Starships';

class App extends Component {
    state = {
        results: []
    }
    async componentDidMount() {
        const ships = await getSwapiShips
        this.setState({ results: ships });
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">Hope E Wan Kenobi Starships</header>
                <div className="container">
                    <Switch>
                        <Route exact path="/" render={(props) => (
                            <div className="App-links justify-content-center">
                                {this.state.results.length > 0
                                    ?
                                    this.state.results.map((result, id) =>
                                        (
                                            <Link key={id} to={`/${result.name}`} >
                                                {result.name}
                                            </Link>
                                        )
                                    ) : 'Loading...'
                                }
                            </div>
                        )} />
                        {this.state.results.map((result, id) =>
                            <Route exact path={`/${result.name}`}
                                render={(props) =>
                                    <Starships {...props} key={id} result={result} />}
                            />)}
                    </Switch>
                </div>
            </div>
        );
    }
}
export default App;