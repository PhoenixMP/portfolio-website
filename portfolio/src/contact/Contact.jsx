
import React, { useState, useEffect, useContext } from "react";
import './Contact.css'
import PageContext from "../routes-nav/PageContext";




const Contact = () => {
    const { contactRef } = useContext(PageContext);



    return (
        <div className="contact-page" >

            <div id="contact" ref={contactRef}>
                <div id="contact-content">
                    contact
                </div>
            </div>

        </div>
    )

};
export default Contact;


