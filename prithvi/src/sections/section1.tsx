import React from "react";
import styled from '@emotion/styled';


const Section1Container = styled.div`
    height: 100vh;
    background-image:url("https://images.unsplash.com/photo-1536088728536-533c2f3d4bbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=80") ;
    //position: absolute;
    //top: 0;
.nav-item {
&:hover {
        color: #36cc05;
    }
}
`;

const Section1 = () => {
    return (

        <Section1Container className="flex flex-col justify-items-center">
            <div className="flex justify-between  items-center ml-96 pl-96 pt-3 text-white">
                <a className="mr-3 hover:text-white nav-item" href="src/header#">Home</a>
                <a className="mr-3 hover:text-white nav-item" href="src/header#">About</a>
                <a className="mr-3 hover:text-white nav-item" href="src/header#">Services</a>
                <a className="mr-3 hover:text-white nav-item" href="src/header#">Contact</a>
            </div>
        </Section1Container>

    )
}

export default Section1