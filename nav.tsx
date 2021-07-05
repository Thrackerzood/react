import React, {useState} from 'react'
import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom'
import Home from './home'
import New from './new'
import Random from './random'
import Auth from './auth'
import {Header} from './style'

export const Nav:React.FC<any> = () =>{
   let [state, setState]:any = useState(false)
   return (<Router>
      <Header>
         <nav className={ state ? 'sidebar_open' : 'sidebar_close'}>
            <div onClick={() => setState(!state)}>
               <div></div>
               <div></div>
               <div></div>
            </div>
            <ul>
               <li><NavLink activeClassName="active" to="/" exact><p>Главная</p></NavLink></li>
               <li><NavLink activeClassName="active" to="/new" exact><p>Новинки</p></NavLink></li>
               <li><NavLink activeClassName="active" to="/random" exact><p>Случайное</p></NavLink></li>
               <li><NavLink activeClassName="active" to="/auth" exact><p>Вход</p></NavLink></li>
            </ul>   
         </nav>
         
         </Header>
         <Switch>
            <Route path="/auth"><Auth/></Route>
            <Route path="/new"><New/></Route>
            <Route path="/random"><Random/></Route>
            <Route path="/"><Home props={state}/></Route>
         </Switch>
</Router>)   
}