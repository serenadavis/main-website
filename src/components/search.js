const SearchBar = class extends React.Component {
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