import React from "react";
import mainPhoto from "../images/tim-main-photo.jpg";
import "../App.css";

class About extends React.Component {
    render() { 
        return (
            <div className="about-wrapper">
                <div className="main-photo">
                    <img className="main-photo" src={mainPhoto} alt="Timothy"></img>
                </div>

                <div className="about-text">
                    <h1>Timothée Hal Chalamet</h1>
                    <p><span className="bold-span">Born:</span> December 27, 1995 </p>
                    <p><span className="bold-span">City:</span> Manhattan, New York, United States</p>
                    <p>An American actor. He has received several accolades throughout his career, including nominations for an Academy Award, three BAFTA Film Awards, two Golden Globe Awards, four Screen Actors Guild Awards, and four Critics' Choice Movie Awards. Chalamet began his acting career in short films and commercials, before appearing in the television drama series Homeland in 2012. Two years later, he made his feature film debut in the comedy-drama Men, Women and Children and subsequently appeared in the science-fiction film Interstellar.</p>

                </div>
            </div>
        )
    }
}
 
export default About;