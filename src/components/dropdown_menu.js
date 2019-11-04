import React from 'react';
import { Link } from "gatsby"

class DropdownMenu extends React.Component {
constructor(){
 super();

 this.state = {
       displayMenu: false,
     };

  this.showDropdownMenu = this.showDropdownMenu.bind(this);
  this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

};

showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
    document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });

  }

  render() {
    return (
            <div id="nav" className="container behind-search mobile-only" data-spy="affix" data-offset-top="187" data-offset-bottom="0" >
            <nav className="navbar navbar-default  advo-navbar" role="navigation" >
            <div className="navbar-header">
                <button onClick={this.showDropdownMenu} type="button" className="navbar-toggle button">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="/">The Harvard Advocate</a>
            </div>
            { this.state.displayMenu ? (
            <div> 
                <ul className="nav navbar-nav">
                    <li ><Link to="/about">ABOUT</Link></li>
                    <li ><Link to="/issues">ISSUES</Link></li>
                    <li ><Link to="/art">ART</Link></li>
                    <li ><Link to="/fiction">FICTION</Link></li>
                    <li ><Link to="/features">FEATURES</Link></li>
                    <li ><Link to="/poetry">POETRY</Link></li>
                    <li ><Link to="/columns">COLUMNS</Link></li>
                    <li> <a href="https://blog.theharvardadvocate.com" >BLOG</a></li>
                </ul>
                </div>
            )
            : ( null )
            }
            </nav>
        </div>
    )
  }
}

export default DropdownMenu;