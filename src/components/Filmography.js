import React from "react";
import "../App.css";

class Filmography extends React.Component {
    render() { 
        return (
            <div className="filmography-wrapper">
                <h1>Filmography</h1>
                <div className="year-films">
                    <div>
                        <p className="bold-span">2014</p>
                    </div>

                    <div >
                        <p>Men, Women and Children</p>
                        <p>Interstellar</p>
                        <p>Worst Friends</p>
                    </div>
                </div>
                
                <div className="year-films">
                    <div>
                        <p className="bold-span">2014</p>
                    </div>

                    <div >
                        <p>Men, Women and Children</p>
                        <p>Interstellar</p>
                        <p>Worst Friends</p>
                    </div>
                </div>
            </div>
        )

    }
}
 
export default Filmography;