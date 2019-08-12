import React from "react"
import Layout from "../components/layout"

export default () => (
    <Layout>
        <div className="container">
            <h1 className="header">DONATE</h1>
            <p className="text">
                Thank you for considering a donation to The Harvard Advocate. All donors at Muse and above will, pending permission, have their names featured in an original artwork done by an Advocate alum to be displayed in 21 South Street. All Midas donors will additionally receive a lifetime subscription to The Advocate.
            </p>
            <p className="centertext">Herodotus $50+</p>
            <p className="centertext">Odysseus $100+</p>
            <p className="centertext">Phaedrus $500+</p>
            <p className="centertext">Penelope $1000+</p>
            <p className="centertext">Muse $5,000+</p>
            <p className="centertext">Midas $10,000+</p>
            <p></p>
            <p className="text">
                All gifts to The Harvard Advocate can be made through The Trustees of The Harvard Advocate, and are fully tax deductible according to 501(c)(3) non-profit donation guidelines. Checks should be made out to "The Trustees of The Harvard Advocate" and sent to 21 South St., Cambridge, MA 02138.
                We also offer subscriptions, which we encourage as an alternative to small donations. To arrange a subscription, visit the <u><a href="/subscribe">Subscribe</a></u> page or email us at <a href = "mailto:president@theharvardadvocate.com">president@theharvardadvocate.com</a>.
                Thank you for your support!
            </p>
            
            <div style={{margin: "40px auto 0px auto", background: "#ffffff", maxWidth: "400px", padding: "20px"}}>
            <script src="https://donorbox.org/widget.js" paypalexpress="false"></script>
            
            <iframe src="https://donorbox.org/embed/harvardadvocate?amount=30" 
            height="685px" width="100%" style={{maxWidth:"500px", minWidth:"310px", maxHeight:"none"}} seamless="seamless" 
            name="donorbox" frameBorder="0" scrolling="no" allowpaymentrequest="true" title="paypalIframe"></iframe>
            </div>
        </div>
    </Layout>
)