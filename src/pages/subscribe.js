import React from "react"
import Layout from "../components/layout"
import Subscribe from "../components/stripe_checkout"

export default () => (
    <Layout>
        <div className="container">
            <div class="row">
            <h1 className="header">SUBSCRIBE</h1>
            <p className="text text-center">
                Thank you for considering subscribing to The Harvard Advocate!
            </p>
            <p></p>
            </div>
            <div class="row center">
              <Subscribe/>
            </div>
        </div>
    </Layout>
)