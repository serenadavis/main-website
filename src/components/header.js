import React from "react"

export default () => (
<div>
    <header className="container">
        <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 f-t-links top-line"> <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/> 
                <a  className = "fa fa-facebook" href = "https://www.facebook.com/harvardadvocate" target="_blank"></a>
                <a className = "fa fa-twitter"  href="https://twitter.com/harvardadvocate" target="_blank"></a>
                <a className = "fa fa-instagram"  href="https://www.instagram.com/harvardadvocate/" target="_blank"></a>
                <a className = "fa fa-snapchat-ghost"  href="https://www.snapchat.com/add/harvardadvocate" target="_blank"></a>
                <a className = "fa fa-youtube-play"  href="https://www.youtube.com/channel/UCpdTHg2tuajHmO-ksJIIoEQ/feed?sub_confirmation=1" target="_blank"></a>
            </div>
        
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6" >
                <a className="no-decoration no-underline" href="{% url 'index' %}"> <h1 className="main-title">The Harvard Advocate</h1></a>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 top-line" style={{paddingLeft : '13px'}}>
                <div className="form-group search-group">
                    <form type="get" action="/search/" className="search-form" role="search">
                        <input type="text" name="q" className="typeahead tt-query" autoComplete="off" spellCheck="false" placeholder="Search"></input>
                        <div className="clearfix"></div>
                        <hr className="search-bottom-border"/>
                    </form>

                    <ul className="search-form-links list-unstyled">
                        <li>
                        <a className="no-decoration top-line" href="{% url 'submit' %}">Submit</a>
                        <a className="no-decoration top-line" href="{% url 'subscribe' %}">Subscribe</a>
                        <a className="no-decoration top-line" href="{% url 'shop' %}">Shop</a>
                        <a className="no-decoration top-line" href="{% url 'financial_aid' %}">Donate</a>
                        </li>
                    </ul>
                </div>
                </div>
            </div>
    </header>
    <div id="nav" className="container behind-search" data-spy="affix" data-offset-top="187" data-offset-bottom="0" >
        <nav className="navbar navbar-default  advo-navbar" role="navigation" >
        <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand mobile-only" href="/">The Harvard Advocate</a>
        </div>
        <div className="collapse navbar-collapse navbar-ex1-collapse ">
        <div className="nav-header"> </div>
            <ul className="nav navbar-nav">
                <li ><a href="{% url 'about'%}">ABOUT</a></li>
                <li ><a href="{% url 'issues'%}">ISSUES</a></li>
                <li ><a href="{% url 'art'%}">ART</a></li>
                <li ><a href="{% url 'fiction'%}">FICTION</a></li>
                <li ><a href="{% url 'features'%}">FEATURES</a></li>
                <li ><a href="{% url 'poetry'%}">POETRY</a></li>
                <li ><a href="{% url 'columns'%}">COLUMNS</a></li>
                <li> <a href="{% url 'blog_home'%}" >BLOG</a></li>
                <li> <a href="https://womens.theharvardadvocate.com" >WOMEN'S ISSUE</a></li>
            </ul>

        </div>
        </nav>
    </div>
</div>
)