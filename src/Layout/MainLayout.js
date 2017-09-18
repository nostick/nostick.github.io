import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Images from '../Images/Images';
import Results from '../Results/Results';


const MainLayout = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/images' component={Images}/>
      <Route path='/results' component={Results}/>
    </Switch>
  </main>
)

export default MainLayout;
