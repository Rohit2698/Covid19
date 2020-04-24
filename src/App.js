import React from 'react';
import Cards from './Component/Card/Cards';
import {fetchData} from './Component/api';
class App extends React.Component{
  
  state={
    data:{}
  }
  async componentDidMount(){
    const fetchdata=await fetchData();
    this.setState({data:fetchdata});
  }
  render(){
    const {data}= this.state;
    return(
      <div className="container-flex">
        <div className="row justify-content-md-center"> 
          <div style={{position:"absolute"}}>
            <span style={{fontSize:"30px"}}><u>Covid World Data</u></span>
          </div><br/><br/>
          <h1><Cards title="rohit" data={data}/></h1>
        </div>
        
      </div>
    )
  }
}

export default App;
