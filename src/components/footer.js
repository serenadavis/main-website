import React from "react"
import { Link } from "gatsby"

export default () => (
    <footer>
        <div className="container">
            <nav class="navbar navbar-default advo-navbar footer-navbar" role="navigation">
                <ul class="nav navbar-nav footer-navbar">
                    <li ><Link to="advertise">ADVERTISE</Link></li>
                    {/* <li ><Link to="alumni">ALUMNI</Link></li> */}
                    <li ><Link to="contact">CONTACT US</Link></li>
                    <li ><Link to="comp">COMP</Link></li>
                    <li ><Link to="submit">SUBMIT</Link></li>
                </ul>
            </nav>
            <div class="copyright">
                COPYRIGHT &#169; THE HARVARD ADVOCATE {new Date().getFullYear()}
            </div>
        </div>
    </footer>
)