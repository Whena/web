import React , {Component} from 'react';
import {routers}  from '../router';
import {Link} from 'react-router-dom';
import {MainNavigationStyle} from './MainNavigation.style';

export default class MainNavigation extends Component{
    constructor(props){
        super(props) 
        this.state = {
            ListMenu : []
        }
    }
    componentWillMount(){
        this.mapRouterToMenu();
    }
    mapRouterToMenu(){
        this.setState({
            ListMenu : routers.filter((r)=> r.mainNavigation === true)
        });
    }
    render(){
        return(
            <div style={MainNavigation.mainNavigation}>
                <ul style={{display:'inline-flex',listStyle:'none'}}>
                {
                    this.state.ListMenu.map((r,index)=> 
                        <li  key={index}  style={{marginRight:window.innerWidth/20, fontFamily:'bold'}}>
                            <Link style={MainNavigationStyle.menuLink} to={r.path}>
                               
                                    {
                                        (index === 0)?
                                          <h5 style={{
                                              color:'black',
                                              fontSize: '15px',
                                              border: '1px solid gray',
                                              borderRadius: '5px 20px 5px', 
                                              padding: '10px'
                                            }}>{r.namePage}</h5>:
                                         <h5>{r.namePage}</h5>
                                        
                                    } 
                            </Link>
                        </li>
                    )
                }
                </ul>
            </div>
        )
    }
}