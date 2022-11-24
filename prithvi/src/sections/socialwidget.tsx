import React from 'react';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';


import styled from "@emotion/styled";

const  WidgetContainer = styled.div`
  
  nav {
    position: fixed;
    width: 70px;
    display: block;
    //transition: all 0.3s linear;
    margin-top: 300px;
    //visibility: hidden;
  }
  

  nav li {
    position: relative;
  }

  nav li a {
    color: black;
    width: 100%;
    //height: 100%;
    line-height: 60px;
    padding-left: 25%;
    transition: all .3s linear;
  }

  nav li a img {
    position: absolute;
    top: 17px;
    left: 20px;
    height: 46px;
    width: 46px;
    transition: all 250ms linear;
  }
  

  nav li a img:hover {
    height: 60px;
    width: 60px;
  }
  
  nav li a:hover {
    line-height: 90px;
  }
  .arrow {
    position: absolute;
    margin-top: 350px;
    height: 40px;
    width: 40px;
    margin-left: 15px;
  }
`;

const SocialWidget = () => {

    return (
        <WidgetContainer>
            {/*<img className={"arrow"} src={"https://img.icons8.com/color/96/000000/chevron-right.png"} onClick={makingVisible}/>*/}
    <nav className={"navbar"}>
        <ul>


            <li><a href="#">
                {/*<SocialIcon url="https://twitter.com/jaketrent" />*/}
                <img src={"https://img.icons8.com/color/96/null/twitter--v1.png"} alt={"img"}/>
                </a>
            </li>

            <li><a href="#">
                <img src={"https://img.icons8.com/color/96/null/instagram.png"} alt={"img"}/>
                </a>
            </li>

            <li><a href="#">
                <img src={"https://img.icons8.com/color/96/null/linkedin-2--v1.png"} alt={"img"}/>
            </a>
            </li>


            <li><a href="#">
                <img src={"https://img.icons8.com/color/96/null/youtube-play.png"} alt={"img"}/>
            </a>
            </li>

        </ul>
    </nav>
        </WidgetContainer>
    );
}

// const makingVisible = () => {
//     const x = document.querySelectorAll <HTMLElement> ('.navbar') ;
//     // @ts-ignore
//     if (x.style.visibility === "visible") {
//         x.style.visibility = "hidden";
//     } else {
//         x.style.visibility = "visible";
//     }
// }

export default SocialWidget;