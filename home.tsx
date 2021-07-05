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

let isDown:boolean = false
let startX:number
let scrollLeft:number
let slider:any = document.querySelector('.slider')

function mouseDown(event:any){
   isDown = true
   slider.classList.add('active')
   startX = event.pageX - slider.offsetLeft
   scrollLeft = slider.scrollLeft
}
function mouseLeave(){
   isDown = false
   slider.classList.remove('active')
}
function mouseUp(){
   isDown = false
   slider.classList.remove('active')
}
function mouseMove(event:any){
   if (!isDown) return;
   event.preventDefault()
   const x = event.pageX - slider.offsetLeft
   const walk = (x - startX)
   slider.scrollLeft = scrollLeft - walk
}
//lazy load

useEffect(() => {
   let images:any = document.querySelectorAll('.img')
   images.forEach((img:any) => {
         img.parentElement.classList.add('load')
   });
   images.forEach((img:any)=>{
      img.addEventListener('load', ()=>{
         img.parentElement.classList.remove('load')
      })
   })
   const options:any = {
      rootMargin: '0px -10% 0px 0px',
      threshold: 0.1
   }
   function handleImg(myImg:any, observer:any){
      myImg.forEach((myImgSingle:any) => {
         if(myImgSingle.intersectionRatio > 0){
            loadImage(myImgSingle.target)
         }
      })
   }
   function loadImage(image:any){
      image.src = image.getAttribute('data-src')
   }
   const observer = new IntersectionObserver(handleImg, options)
   images.forEach((img:any) =>{
      observer.observe(img)
   })
})
  const content = state.data.map((video:any, index:number) => { return <section key={index}>
     <picture>
        <source media="(max-width: 1024px) and (min-width: 768px)" srcSet={video.show_picture_1024}/>
        <source media="(max-width: 768px)" srcSet={video.show_picture_768}/>
        <img data-src={video.show_picture_1980} src="" alt={video.show_name_eng} className="img"/>
     </picture>
  <a href={video.show_name_eng}>
     <p>{video.show_name_ru}</p>
  </a>
</section>})
  return (<MainHome>
            <section  className={props.props ? 'open' : 'close'}>
               <section className="slider" onMouseDown={mouseDown} onMouseLeave={mouseLeave} onMouseUp={mouseUp} onMouseMove={mouseMove}>
                      {content}
                  </section>
               </section>
        </MainHome>)
}

export default Nav;