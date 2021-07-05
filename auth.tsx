import React , {useEffect, useState} from 'react';
import {MainAuth} from './style';

const Auth:React.FC<any> = () => {
let [state,setState] = useState(false)
  return (<MainAuth>
      <section>
        <section>
          <section>
            <p onClick={()=> {setState(false)}} className={state ? 'deactive' : 'active'}>Вход</p>
            <p onClick={()=> {setState(true)}} className={state ? 'active' : 'deactive'}>Регистрация</p>
          </section>
          <form>
            <section>
              { state ? <input placeholder="login"></input> : null}
              { state ? <input placeholder="@mail"></input> : <input placeholder="login"></input>}
              { state ? <input placeholder="password"></input> : null}
              { state ? <input placeholder="password"></input> : <input placeholder="password"></input>}
            </section>
            <button type="submit">{state ? 'регистрация' : 'вход'}</button>
          </form>
        </section>
      </section>
    </MainAuth>)
}

export default Auth;