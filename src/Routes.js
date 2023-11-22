import { BroweserRouter as Router, Switch, Route} from 'react-router-dom';
import { VideoPage } from '.pages/VideoPage';
import { TestPage } from '.pages/TestPage';


export const Routes = () =>{
    return{
        <Router>
            <Switch>
                <Route path="/VideoPage" exact>
                    <VideoPage />
                </Route>
                <Route path ="/TestPage" exact>
                    <TestPage />
                </Route>
            </Switch>
        </Router>
    }
}