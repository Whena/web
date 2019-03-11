/**
 * this layout using to create blank page
 * with navigation you can use it for Homepage, about page and etc
 * this is realy simple page
 */

import React, {Component}  from 'react';
import MainNavigation from './MainNavigation';
import {PageLayoutStyle} from './PageLayout.style'

export default class PageLayout extends Component{
    render(){
        return(
            <div className="container">
                <MainNavigation/>
                <div className="row" style={{
                    height: window.innerHeight /1.5,
                    overflow: 'scroll'
                }}>
                    {React.cloneElement(this.props.children)}
                </div>
                <footer className="row">
                    <b>Develop with &nbsp; <span style={{color:'red'}}>❤</span>  &nbsp;by &copy; Gerald Halomoan Samosir</b>
                </footer>
            </div>
        )  
    }
}