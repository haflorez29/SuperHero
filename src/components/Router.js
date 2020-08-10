import React from "react"
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from "../pages/App"
import Description from "./Description"

const Router = () => {
  return (
    <BrowserRouter>
    <Switch>
    <Route exact path='/' component={App}></Route>
    <Route exact path='/description' component={Description}></Route>
    </Switch>
    </BrowserRouter>
  )
}

export default Router