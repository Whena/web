import React, { Component } from 'react';
import PageLayout from '../global-component/PageLayout'
import Config from '../config.json';
import 'animate.css';
import ReactImg from '../assets/react.svg';
import KubeImg  from '../assets/kube.png';
import DockerImg from '../assets/docker.png';
import NodeImg from  '../assets/nodejs.png';
import GoImg from '../assets/go.svg';


export default class Home extends Component {

    render(){
        return(
            <PageLayout>
                <div className="rows">
                <div className={'column animated fadeInUp delay-3#s'} 
                    style={{
                        // width: window.innerWidth /2 ,
                        textAlign: 'center',
                        padding: '5%'
                    }}>
                    <h1 style={{background:'#0000ff1c'}}>
                        Welcome to  <br/> Gerald Halomoan Samosir website
                    </h1>
                </div>
                <div className={'column animated fadeInUp delay-3#s'} 
                    style={{
                        //width: window.innerWidth /2 ,
                        textAlign: '',
                        float:'left',
                        height: window.innerHeight  -  window.innerHeight / 4,
                        padding: '5%'
                    }}>
                    <div className="rows">
                        <img className='imageDev animated tada' src={DockerImg}/>
                        <img className='imageDev animated rotateInUpRight' src={KubeImg} />
                        <img className='imageDev animated swing' src={NodeImg}/> 
                        <img className='imageDev animated wobble' src={GoImg} />
                        <img className='imageDev animated rotateIn' src={ReactImg} />

                    </div>
                </div>
                </div>
            </PageLayout>
        )
    }

}
