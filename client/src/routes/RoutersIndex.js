import React, {Suspense, useState} from "react";
import { BrowserRouter as Router,Switch, Route,Redirect} from "react-router-dom";
import ListPage from "../components/ListPage/ListPage";


const RoutersIndex = (props) =>{
    return(
        <Router>
            <Suspense fallback={<div>Loading..</div>}>
                            <Switch>
                                <Route exact path={"/list-page"}>
                                    <ListPage/>
                                </Route>
                                <Route path={"*"}>
                                    <Redirect to="/list-page" />
                                </Route>
                            </Switch>

            </Suspense>
        </Router>
    )
}

export default RoutersIndex