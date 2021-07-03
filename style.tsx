import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle
`
*{
   margin: 0;
   padding: 0;
}
body{
   background: rgb(10,10,10);
}
`
export const Header = styled.header
`
top: 0;
left: 0;
position: fixed;
width: 100%;
background: rgb(0,0,0,0.8);
backdrop-filter: blur(2px);
.active{
   font-size: 20px;
   color: #73007d !important;
   font-weight: 600 !important;
}
a{
   color: white;
   font-size: 16px;
   font-weight: 300;
   font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
}
.sidebar_close{
   width: 100vw;
   background: black;
   ul{
      display: none;
   }
   >div{
      padding: 5px;
         div{
            width: 30px;
            height: 5px;
            margin: 2px;
            background: white;
      }
   }
}
.sidebar_open{
   @media screen and (max-width: 420px) {
         width: 100vw;
   }
   width: 300px;
   height: 100vh;
   background: black;
   animation: slide-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
   @keyframes slide-right {
      0% {
        transform: translateX(-300px);
      }
      100% {
        transform: translateX(0);
      }
   }
   >div{
      float: right;
      padding: 5px;
      div{
         :nth-child(odd){
            display: none;
         }
         :hover{
            transition: .5s;
            transform: rotate(180deg);
         }
         width: 25px;
         margin: 2px;
         height: 25px;
         background: white;
         clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);
      }
   }
   ul{
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 100%;
      li{
         padding: 20px;
         a{
            text-decoration: none;

         }
      }
   }
}
`
export const MainHome = styled.main
`
.close{
   z-index: 0;
}
display: flex;
padding: 3em auto 1vw auto;
margin: 3em auto 1vw auto;
max-width: 900px;
height: 2000px;
background: rgb(5,5,5);
>section{
   padding: 2vw 0;
   overflow: hidden;
   >section{
      display: flex;
      overflow-x: scroll;
      align-items: stretch;
      justify-content: flex-start;
      ::-webkit-scrollbar{
         height: 0;
      }
      padding: 1vw 0;
      background: rgb(15,15,15);
      border: 10px solid rgb(5,5,5);
      text-align: center;
      a{
         font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
         color: white;
         text-decoration: none;
         :hover{
            color: red;
         }
      }
      >section{
         display: flex;
         align-items: center;
         flex-direction: column;
         min-width: 200px;
         min-height: 250px;
      }
   }
}
.active{
   cursor: grabbing;
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
   .active{
      font-size: 16px;
   }
   a{
      font-size: 14px;
   }
   p{
      max-width: 200px;
   }
   >section{
      >section{
         >section{
            min-width: 150px !important;
            min-height: 200px !important;
            p{
               max-width: 150px;
            }
         }
      }
   }
}
@media screen and (max-width: 768px) {
      img{
         max-height: 100px;
      }
      .active{
         font-size: 14px;
      }
      a{
         font-size: 12px;
      }
      >section{
         >section{
            >section{
               min-width: 100px !important;
               min-height: 150px !important;
               p{
                  max-width: 100px;
               }
            }
         }
      }
   }
}
`