import React from "react"
import Layout from "../components/layout"

export default () => (
    <Layout>
        <div className="container">
            <div class="row">
            <h1 className="header">DONATE</h1>
            <p className="text text-center">
                Thank you for considering a donation to The Harvard Advocate!
            </p>
            <p></p>
            <p className="text text-center">
                All gifts to The Harvard Advocate are fully tax deductible according to 501(c)(3) non-profit donation guidelines.
                Donations can be made online using the form below. We also accept donations by check, which should be made out to "The Trustees of The Harvard Advocate" and sent to 21 South St., Cambridge, MA 02138.
                Thank you for your support!
            </p>
            </div>
            <div class="row">
                <div style={{margin: "40px auto 0px auto", background: "#ffffff", maxWidth: "400px", padding: "20px"}}>
                <script src="https://donorbox.org/widget.js" paypalexpress="false"></script>
                
                <iframe src="https://donorbox.org/embed/harvardadvocate?amount=30" 
                height="800" width="100%" style={{maxWidth:"500px", maxHeight:"none"}} seamless="seamless" 
                name="donorbox" frameBorder="0" scrolling="no" allowpaymentrequest="true" title="paypalIframe"></iframe>
                </div>
            </div>
        </div>
    </Layout>
)