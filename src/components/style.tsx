import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle
`
*{
   margin: 0;
   padding: 0;
}
body{
   overflow: hidden;
}
`
export const Header = styled.header
`
.active{
   >p{
      color: indigo !important;
      font-size: 20px;
      font-weight: 900;
   }
}
.sidebar_close{
   height: 100%;
   position: fixed;
   left: 0;
   top: 0;
   animation: slide-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
   @keyframes slide-left {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-280px);
      }
   }
   ul{
      width: 300px;
      height: 100%;
      background: black;
      li{
         width: calc(100% - 20px);
         padding: 10px;
         a{
            text-decoration: none;
            p{
               color: white;
               padding: 20px 10px;
               text-align: center;
               font-family: apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
            }
         }
      }
   }
}
.sidebar_open{
   width: 100vw;
   height: 100%;
   position: fixed;
   left: 0;
   top: 0;
   background: rgb(0,0,0, 0.5);
   backdrop-filter: blur(5px);
   ul{
      max-width: 300px;
      height: 100%;
      background: black;
      animation: slide-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
      @keyframes slide-right {
         0% {
           transform: translateX(-300px);
         }
         100% {
           transform: translateX(0px);
         }
      }
      li{
         width: calc(100% - 20px);
         padding: 10px;
         a{
            text-decoration: none;
            p{
               color: white;
               padding: 20px 10px;
               text-align: center;
               font-family: apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
            }
         }
      }
   }
   @media screen and (max-width: 480px) {
      ul{
         max-width: 100%;
      }
   }
}
`
export const MainHome = styled.main
`
.open{
   z-index: -1;
   position: absolute;
   margin: 0 auto;
   top: 50px;
   left: 300px;
         animation: slide-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
      @keyframes slide-right {
         0% {
           transform: translateX(-300px);
         }
         100% {
           transform: translateX(0px);
         }
      }
}
.close{
   z-index: -1;
   position: absolute;
   margin: 0 auto;
   top: 50px;
   left: 300px;
      animation: slide-rights 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
      @keyframes slide-rights {
         0% {
           transform: translateX(0px);
         }
         100% {
           transform: translateX(-280px);
         }
      } 
}
>section{
   display: flex;
   align-items: flex-start;
   justify-content: flex-start;
   margin: 0 auto;
   max-width: 100%;
   text-align: center;
   overflow-x: hidden;
   ::-webkit-scrollbar{
      height: 10px;
   }
section{
   padding 10px;
   margin: 20px;
  a{
   text-decoration: none;
      p{
         color: white;
      }
   } 
}
@media screen and (min-width: 1024px) {
   img{
      max-height: 250px;
   }
}
@media screen and (min-width: 768px) and (max-width: 1024px) {
   img{
      max-height: 150px;
   }
}
@media screen and (max-width: 768px) {
   img{
      max-height: 100px;
   }
}
}
`