import  React , {Component} from 'react';
import PageLayout from '../global-component/PageLayout';

export default class About extends Component{
    render(){
        return(
            <PageLayout>
                <div className='rows'>
                    <div className='column' style={{width:window.innerWidth /2}}>
                        <h5><b>Hello....!</b></h5>
                        <p>
                            My name 
                            <h3>Gerald Halomoan Samosir</h3>
                            I Lived in Jakarta , ... everyday i work as Backend developer
                            and i have 4 years experience in development for backend developer and a litle bit frontend developer.
                            I'm Realy interesting with new technology around web development stack.
                            if you need to have some website or some project about webdevelopment project you can share it with me
                            and we will solve that together :)
                        </p>
                    </div>
                    <div className='column' style={{width:window.innerWidth /2}}>
                        here my contact if you need to solve your project with me &nbsp;
                        <b><a href='https://www.linkedin.com/in/gerald-halomoan-samosir-34b11611b/' target='_blank'>MyLinkedin</a></b>
                    </div>
                </div>
            </PageLayout>
        )
    }
}