import React from "react";
function Home (){
    return (
        <div className="home d-flex flex-column justify-content-center align-items-center">
            <div className="col-12 text-center">Welcome,I'm</div>
            <div className="carousel col-12 d-flex justify-content-center">
                <div className="change_outer">
                    <div className="change_inner">
                        <div className="element text-center">Abhishek Shah</div>
                        <div className="element text-center">A Developer</div>
                        <div className="element text-center">A Photographer</div>
                        <div className="element text-center">Abhishek Shah</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;