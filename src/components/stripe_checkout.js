import React from "react"
const buttonStyles = {
  fontSize: "13px",
  textAlign: "center",
  color: "#ffffff",
  outline: "none",
  padding: "12px 60px",
  backgroundColor: "rgb(0, 0, 0)",
  borderRadius: "6px",
  letterSpacing: "1.5px",
}
const Subscribe = class extends React.Component {
  // Initialise Stripe.js with your publishable key.
  // You can find your key in the Dashboard:
  // https://dashboard.stripe.com/account/apikeys
  componentDidMount() {
    this.stripe = window.Stripe("pk_live_pcZQaJSwFuM95rhW1jbTOTvK00L3wARazT")
  }
  async redirectToCheckout(event) {
    event.preventDefault()
    const { error } = await this.stripe.redirectToCheckout({
        items: [{plan: 'plan_FvvSOJ2cv5Fvs5', quantity: 1}],

        successUrl: 'https://www.theharvardadvocate.com/success',
        cancelUrl: 'https://www.theharvardadvocate.com/subscribe',
    })
    if (error) {
      console.warn("Error:", error)
    }
  }
  render() {
    return (
      <button
        style={buttonStyles}
        onClick={event => this.redirectToCheckout(event)}
      >
        CLICK HERE TO SUBSCRIBE
      </button>
    )
  }
}
export default Subscribe