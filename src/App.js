 
import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";
import './App.css';

 import React, { Component } from 'react'
 import Navbar from './components/Navbar1';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

 
 
 export default class App extends Component {
  pagesize = 9;
    apiKey=process.env.REACT_APP_NEWS_API
  state={
    progress:0
  }
   setProgress=(progress)=>{
    this.setState({progress: progress})
   }
   render() {
     return (
        <>
        <BrowserRouter> 
        <Navbar  />
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
        
      />
        <Routes>
        <Route exact path="/home"  element = { <News setProgress={this.setProgress} key="general" apiKey={this.apiKey} pageitem = {this.pagesize} country="in" category="general" />}/>
        <Route exact path="/business"  element = { <News setProgress={this.setProgress} key="business"   apiKey={this.apiKey} pageitem = {this.pagesize} country="in" category="business" />}/>
        <Route exact path="/entertainment"  element = { <News setProgress={this.setProgress} key="entertainment"   apiKey={this.apiKey} pageitem = {this.pagesize} country="in" category="entertainment" />}/>
        <Route exact path="/general"  element = { <News setProgress={this.setProgress} key="general"   apiKey={this.apiKey} pageitem = {this.pagesize} country="in" category="general" />}/>
        <Route exact path="/health"  element = { <News setProgress={this.setProgress} key="health"   apiKey={this.apiKey} pageitem = {this.pagesize} country="in" category="health" />}/>
        <Route exact path="/science"  element = { <News setProgress={this.setProgress} key="science"   apiKey={this.apiKey} pageitem = {this.pagesize} country="in" category="science" />}/>
        <Route exact path="/sports"  element = { <News setProgress={this.setProgress} key="sports"  apiKey={this.apiKey} pageitem = {this.pagesize} country="in" category="sports" />}/>
        <Route exact path="/technology"  element = { <News setProgress={this.setProgress} key="technology"   apiKey={this.apiKey} pageitem = {this.pagesize} country="in" category="technology" />}/>
        </Routes>
        </BrowserRouter>
        </>
     )
   }
 }

 
 