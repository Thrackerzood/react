import React,{useState,useEffect} from 'react';
import { fetchAjax } from '../middlewares/ajax';
import {MainHome} from './style'

const Nav:React.FC<any> = (props:any) => {
  const [state = {data: []}, setState] = useState({data: []})
  const result:any = async () => {
    let response:any = await fetchAjax('http://127.0.0.1:5500/api/home', 'POST')
    setState({data: response})
  }
  useEffect(()=>{ result() }, [])
  const content = state.data.map((video:any, index:number) => { return <section key={index}>
     <picture>
        <source media="(max-width: 1024px) and (min-width: 768px)" srcSet={video.show_picture_1024}/>
        <source media="(max-width: 768px)" srcSet={video.show_picture_768}/>
        <img src={video.show_picture_1980} alt={video.show_name_eng}/>
     </picture>
  <a href={video.show_name_eng}>
     <p>{video.show_name_ru}</p>
  </a>
</section>})
  return (<MainHome>
            <section  className={props.props ? 'open' : 'close'}>
                {content}
            </section>
        </MainHome>)
}

export default Nav;