import React from 'react';
import './Profile.css';

export default function Profile() {
    return (
        <div className="profile_container">
            <div className="profile_parent">
                <div className="profile_details">
                    <div className="colz">
                        <div className="colz_icon">
                            <a href="/">
                                <i className="fa fa-facebook-square"></i>
                            </a> 
                            <a href="/">
                                <i className="fa fa-google-plus-square"></i>
                            </a> 
                            <a href="/">
                                <i className="fa fa-instagram-square"></i>
                            </a> 
                            <a href="/">
                                <i className="fa fa-youtube-square"></i>
                            </a> 
                            <a href="/">
                                <i className="fa fa-twitter"></i>
                            </a> 
                        </div>
                    </div>
                    <div className="profile_detail_name">
                        <span className="primary_text">
                            {" "}
                            Hello, I'm 
                            <span className="highlighted_text">John Doe</span>
                        </span>
                    </div>
                    <div className="profile_details_role">
                        <span className="secondary_text">{" "}
                            <h1>
                                {"Full Stack Developer"}
                                {/*<Typical 
                                    loop={Infinity}
                                    step={[
                                        "Enthusiastic Dev", 1000,
                                        "Full Stack Developer", 1000,
                                        "MERN Stack Dev", 1000,
                                        "Cross Platform Dev", 1000,
                                        "React/React Native Dev", 1000,
                                    ]}
                                /> */}
                            </h1>
                            <span className="profile_role_tagine">
                                Knack of building applications with front and back end opertaions.
                            </span>
                        </span>
                    </div>
                    <div className="profile_options">
                        <button className="btn primary_btn">
                            {" "}
                            Hire Me{" "}
                        </button>
                        <a href="/" download>
                            <button className="btn highlighted_btn">Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className="profile_picture">
                    <div className="profile_picture_background">

                    </div>
                </div>
            </div>
        </div>
    );
}

