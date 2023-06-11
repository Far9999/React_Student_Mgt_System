import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer(){
    return(
        <footer class="footer py-3 pb-0 mt-auto">
            <div class="container">
                <div class="row">
                <div class="col-md-4">
                    <h4>About</h4>
                    <p>You can donate to support this site. Feel free to reach out to me through any of the contact mediums.</p>
                </div>
                <div class="col-md-4">
                    <h4>Contact Us</h4>
                    <p>Email: sadikalhanssah@gmail.com</p>
                    <p>Phone: +233 59 632 1362</p>
                </div>
                <div class="col-md-4">
                    <h4>Follow Me</h4>
                    <ul >
                    <li><a href="www.linkedin.com/in/farouk-sedick">LinkedIn</a></li>
                    <li><a href='https://github.com/far9999'>Github</a></li>
                    </ul>
                </div>
                </div>
            </div>
        </footer>
    )
}