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
z-index: 100;
position: fixed;
width: 100%;
background: rgb(0,0,0,0.8);
backdrop-filter: blur(2px);
.active{
   font-size: 20px;
   color: #4B0082 !important;
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
         width: 100%;
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
.load{
   background: rgb(20,20,20);
   img{
      position: sticky;
      z-index: -100;
   }
}
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
   width: 100%;
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
   .load{
      width: 150px;
      height: 250px;
   }
   img{
      max-height: 250px;
   }
   .slider{
      min-height: 250px;
   }
}
@media screen and (min-width: 768px) and (max-width: 1024px) {
   .load{
      width: 100px;
      height: 200px;
   }
   img{
      max-height: 150px;
   }
   .slider{
      min-height: 200px;
   }
   .active{
      font-size: 16px;
   }
   a{
      font-size: 14px;
   }
   p{
      max-width: 200px !important;
   }
   >section{
      >section{
         >section{
            min-height: 200px !important;
            p{
               max-width: 150px !important;
            }
         }
      }
   }
}
@media screen and (max-width: 768px) {
   .load{
      width: 75px;
      height: 100px;
   }
      img{
         max-height: 100px;
      }
      .slider{
         min-height: 150px;
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
               min-height: 150px !important;
            }
         }
      }
   }
}
@media screen and (max-width: 420px) {
   .slider{
         overflow-y: scroll;
         overflow-x: hidden;
         margin: 0 auto;
         max-width: 200px;
         max-height: 200px;
         padding: 1em;
         flex-direction: column !important;
      >section{
         justify-content: center;
         align-items: stretch;
         margin: 0 auto;
      }
   }
}
`

export const MainAuth = styled.main
`
display: flex;
align-items: center;
justify-content: center;
min-width: 100%;
min-height: 100vh;
>section{
   width: 100%;
   height: 100%;
   display: flex;
   >section{
      margin: 2.2rem auto;
      display: flex;
      flex-direction: column;
      padding: .5rem;
      max-width: 500px;
      min-height: 500px;
      background: rgb(5,5,5);
      >section{
         margin: 1em;
         display: flex;
         flex-direction: row;
         justify-content: space-around;
         >p{
            font-size: 1.3rem;
            max-width: 100px;
            .active{
               font-size: 2rem;
            }
         }
      }
      form{
         justify-content: space-between;
         min-height: calc(400px - 4em);
         padding: 1em;
         display: flex;
         align-items: center;
         flex-direction: column;
         section{
            display: flex;
            margin: 1em;
            justify-content: flex-start;
            flex-direction: column;
         }
         input{
            background: rgb(40,40,40);
            width: 240px;
            padding: 10px;
            margin: .5rem;
            border: none;
            outline: none;
            ::placeholder {
               text-align: center;
            }
            :hover{
               background: rgb(50,50,50);
            }
         }
         button{
            border-radius: 5px;
            margin: 1em;
            font-weight: 600;
            font-size: 18px;
            border: none;
            outline: none;
            color: #4B0082;
            padding: 5px 0;
            min-width: 200px;
            background: black;
            :hover{
               background: rgb(5,5,5);
            }
         }
      }
      .active{
         font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
         font-weight: 600;
         color: #4B0082;
      }
      .deactive{
         font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
         font-weight: 300;
         color: white;
      }
   }
}
`