import React, { useEffect, useState } from "react";
import { Terminal } from "./Terminal";
function Home (){
    let flag = true;
    const [introPage,setIntroPage] = useState(false);
    const [loadTerminal,setLoadTerminal] = useState(false);

    useEffect(()=>{
        console.log(flag);
        if(flag) window.addEventListener("click",()=>{setLoadTerminal(true)})
    },[])

    const handleTerminalClose = () =>{
        setLoadTerminal(false);
        setIntroPage(true);
    }
    return (
        <div className="home d-flex flex-column justify-content-center align-items-center">
            {loadTerminal && <Terminal handleClose = {handleTerminalClose}/>}
            {introPage && <>
                <div className="col-12 text-center outer-text">Welcome, I'm</div>
                <div className="carousel col-12 d-flex justify-content-center">
                    <div className="change_outer">
                        <div className="change_inner">
                            <div className="element">Abhishek Shah</div>
                            <div className="element">A Developer</div>
                            <div className="element">A Photographer</div>
                            <div className="element">Abhishek Shah</div>
                        </div>
                    </div>
                </div>
            </>}
        </div>
    )
}
export default Home;