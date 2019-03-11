import React , {Component} from 'react';
import LoadingIco from '../assets/loading.svg'

export default  class Loading extends Component{
    render(){
        return(
            <div style={{textAlign:'center',width: window.innerWidth /2 }}>
                <center>
                    <img src={LoadingIco}/>    
                </center>
            </div>
        )
    }
}