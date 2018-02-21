import React, { Component } from "react";
import { render } from "react-dom";
import { Match } from 'react-router';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { IndexRoute, browserHistory, Switch, Redirect } from 'react-router';

class App extends Component {
    render() {
        return (
            <Router>
                <Root>
                    <Switch>
                        <Route exact path='/' render={() => <Redirect to='/home' />} />
                        <Route path="/home" component={Home} />
                    </Switch>
                </Root>
            </Router>
        );
    }
}

render(<App />, window.document.getElementById("app"));