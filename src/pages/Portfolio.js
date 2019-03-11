import  React , {Component} from 'react';
import PageLayout from '../global-component/PageLayout';
import BehanceAction from '../action/behance';
import  Loading from '../global-component/Loading';

export default class Portfolio extends Component{
    constructor(props){
        super(props);
        this.state = {
            ListPorfolio : []
        }
    }
    async componentWillMount(){
        let listBehancePortfolio = await BehanceAction.getAllData();
        if(listBehancePortfolio.success === true){
            listBehancePortfolio =  listBehancePortfolio.message.projects.filter((f)=> f.name !== 'Beauty Preview')
            this.setState({
                ListPorfolio: listBehancePortfolio
            })
        }
    }
    render(){
        if(this.state.ListPorfolio.length === 0){
            return(
                <PageLayout>
                    <Loading/>
                </PageLayout>
            )

        } else {
            return(
                <PageLayout>
                    <div className='rows animated fadeInUp delay-1s'>
                        {
                            this.state.ListPorfolio.map((p,index)=>
                                <div key={index} className='float-left' style={{padding:'1%'}}>
                                <img src={p.covers['404']}/>
                                 <center>
                                 <h5>{p.name}</h5>
                                 </center>
                                </div>
                            )
                        }
                    </div>
                </PageLayout>
            )
        }
    }
}