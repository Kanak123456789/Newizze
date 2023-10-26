import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    let {title,description,imageurl, newsurl,author,date,source} = this.props;
    return (
      <div  >
        <div className="card" >  
        <img src={!imageurl?"https://images.assetsdelivery.com/compings_v2/newdesignillustrations/newdesignillustrations1902/newdesignillustrations190211443.jpg":imageurl}   className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}... </h5>
    <span className="badge rounded-pill bg-success">{source}</span>  
    
    
   
    <p className="card-text">{description}...</p>
    <p className="card-text"><small className="text-danger">By - {!author?"Unknown":author} , on - {new Date(date).toGMTString()}</small></p> 
    <a rel=" noreferrer" href={newsurl} target='blank' className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default Newsitem