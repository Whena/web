import  React , {Component} from 'react';
import PageLayout from '../global-component/PageLayout';
import MediumAction from '../action/medium';
import Config from  '../config.json';
import {BlogStyle} from './Blog.style.js'
import Loading from '../global-component/Loading';


export default class BlogDetail extends Component{
    constructor(props){
        super(props)
        this.state = {
            detailPost: {},
            paragraph: []
        }
    }
    async componentWillMount(){
        const detailPost =  await MediumAction.getDetail(this.props.match.params.id)
        if(detailPost.success === true){
            this.setState({
                detailPost: detailPost.message,
                paragraph: detailPost.message.content.bodyModel.paragraphs
            })
        }
    }
    
    render(){
        if(this.state.paragraph.length === 0 ){
            return(
                <PageLayout>
                    <Loading/>
                </PageLayout>
            )
        } else {
            return(
                <PageLayout>
                    <div className={'animated zoomIn '}> 
                        <center>
                            <h3>{this.state.detailPost.title}</h3>
                        </center>
                        <div>
                        {
                            this.state.paragraph.map((post,index)=>{
                                if(post.text){
                                    if(post.text === this.state.detailPost.title){
                                        return (<p key={index} ></p>)
                                    } else {
                                        return (<p key={index}>{post.text}</p>)
                                    }
                                } 
                                else if (post.metadata !== undefined){
                                    return (<p key={index} >
                                                <center>
                                                <img src={`${Config.MEDIUM_IMAGE_BANNER_URL}/${post.metadata.id}`}
                                                style={{
                                                    width: window.innerWidth / 2,
                                                    height: 'auto'
                                                }}/>
                                                </center>
                                            </p>)
                                }
                                else if(post.iframe){
                                    return <p key={index}>
                                        <center>
                                            <iframe src={`${Config.API_HANDLE_CROSREQUEST}/?${Config.MEDIUM_MEDIA_URL}/${post.iframe.mediaResourceId}?postId=${this.state.detailPost.id}`}
                                                className="rows"
                                                style={{
                                                    width: window.innerWidth / 2 ,
                                                    height: window.innerHeight /3
                                            }}/>
                                        </center>
                                    </p>
                                }
                            })
                        }
                        </div>
                    </div>
                </PageLayout>
            )
        }
    }
}