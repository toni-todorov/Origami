import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom'
import Publications from "./components/pages/publications"
import ShareThoughtsPage from './components/pages/share-thoughts'
import RegisterPage from './components/pages/register'
import LoginPage from './components/pages/login'
import ProfilePage from './components/pages/profile'
import ErrorPage from './components/pages/error'


const Navigation = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Publications} />
                <Route path="/share" component={ShareThoughtsPage} />
                <Route path="/register" component={RegisterPage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/profile/:userid" component={ProfilePage} />
                <Route component={ErrorPage} />
            </Switch>
        </BrowserRouter>
    )

}

export default Navigation