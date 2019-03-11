import  React , {Component} from 'react';
import PageLayout from '../global-component/PageLayout';
import MediumAction from '../action/medium';
import Config from  '../config.json';
import {Link} from 'react-router-dom';
import {BlogStyle} from './Blog.style.js';
import Loading from '../global-component/Loading';
import { list } from 'postcss';

export default class Blog extends Component{
    constructor(props){
        super(props)
        this.state = {
            ListBlogs: []
        }
    }
    
    async componentWillMount(){
        const listMediumPost = await MediumAction.getAllData();
        if(listMediumPost.success === true){
            this.setState({
                ListBlogs: Object.values(listMediumPost.message)
            })
        }
    }
    render(){
        if(this.state.ListBlogs.length === 0){
            return(
                <PageLayout>
                    <center>
                        <Loading className='rows'/>
                    </center>
                </PageLayout>
            )
        } else{
            return(
                <PageLayout>
                    <div className={'row animated fadeInUp delay-1s'}>
                        {
                            this.state.ListBlogs.map((post,index)=>
                                <Link key={index} to={`/blog/${post.uniqueSlug}`} style={BlogStyle.contentLink}>
                                <div key={index} className='column'>
                                    <h3>
                                        {post.title}
                                    </h3>
                                    <p>
                                        {
                                            new Date(post.createdAt).toString()
                                        }
                                    </p>
                                    {post.previewContent.bodyModel.paragraphs.map((data,index)=>{
                                        if(data.metadata){
                                            return(
                                            <img 
                                                src={`${Config.MEDIUM_IMAGE_BANNER_URL}/${data.metadata.id}`} 
                                                style={{
                                                    width: window.innerHeight ,
                                                    height: window.innerHeight / 3 
                                                }}
                                            />)
                                        }
                                    })
                                    
                                    }

                                    <p>{post.content.subtitle}</p>
                                </div>
                                </Link>
                            )
                        }
                        <div className='column'>
                        <center>
                        <a className='button' href='https://medium.com/@geraldhalomoansamosir' target='_blank'>Postingan yang lama? Klik disini</a>
                        </center>
                        </div>
                    </div>
                </PageLayout>
            )
        }
    }
}