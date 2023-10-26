import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinners from './Spinners';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps={
    country: 'in',
    pageitem: 8,  
    category: 'general'
  }
   
  static propTypes={

    country : PropTypes.string,
    pageitem: PropTypes.number,
    category: PropTypes.string
  }
  captilizedfunction = (string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props){
    super(props);
    console.log("Hello i'm a constructor please welcome me here");
    this.state={
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0
    }
      document.title = `${this.captilizedfunction(this.props.category)} - Newizze`;
    

  }
  async componentDidMount(){
    this.props.setProgress(20);
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageitem}`;
    this.setState({loading: true});
    let data = await fetch(url);
    this.props.setProgress(50);
    let pastdata = await data.json()
    this.props.setProgress(70);
    this.setState({articles: pastdata.articles,
      totalResults: pastdata.totalResults,
      loading: false
    })
    this.props.setProgress(100);
  }
    handlenext = async ()=>{
      if(this.state.page+1 > Math.ceil(this.state.totalResults/12)){

      }
      else{
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page +1}&pageSize=${this.props.pageitem}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let pastdata = await data.json()
        this.setState({loading: false});
    this.setState({
    page: this.state.page +1,
    articles: pastdata.articles
   })
      }
       
  }
    handleprev = async()=>{
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page -1}&pageSize=${this.props.pageitem}`;
     
      this.setState({loading: true});
       let data = await fetch(url);
      let pastdata = await data.json()
  this.setState({
  page: this.state.page -1,
  articles: pastdata.articles,
  loading: false
 })
 
  }
    fetchMoreData = async () => {
    
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pageitem}`;
    this.setState({
      page: this.state.page +1,
  
    })
    let data =   await fetch(url);
    let pastdata =  await data.json()
    this.setState({articles: this.state.articles.concat(pastdata.articles),
      totalResults:  pastdata.totalResults ,
       
    })
  };  
  render() {
    return (
      <> 
       
        <h2 className="text-center" style={{margin: '35px 0px' , marginTop: '80px' }}>Newizze - Top  {this.captilizedfunction(this.props.category)} Headlines   </h2>
         {this.state.loading && <Spinners/>} 
         <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!== this.state.totalResults}
          loader={<Spinners/>}
        > 
        <div className="container"> 
        <div className="row  "> 
        { this.state.articles.map((element)=>{
          return  <div className="col-md-4" key={element.url}> 
          <Newsitem key={element.url} title={element.title?element.title.slice(0,40):""} description={element.description?element.description.slice(0,80):""}  imageurl={ element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
          </div>
           
        })}
        
         
        
      </div>
      </div>
      </InfiniteScroll>
       
      
      </>
    )
  }
}

export default News