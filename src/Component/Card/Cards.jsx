import React from 'react';
import CountUp from 'react-countup';



const Cards= ( {data:{confirmed,recovered,deaths,lastUpdate}} )=>{
    if(!confirmed){
        return 'Loading...';
    }
    return(

          <div className="container" style={{paddingTop:"60px"}}>
               <div className="row">
                    <div className="col-md-4">
                         <div className="card" style={{width:"18rem",borderBottom:"5px solid red"}} >
                              <span style={{fontSize:"20px",marginLeft:"20px"}}>Confirmed</span>
                              <div className="card-body">
                                   <h4>
                                        <CountUp
                                             start={0}
                                             end={confirmed.value}
                                             duration={2.5}
                                             separator=","
                                        />

                                   </h4>
                                   <span style={{fontSize:"20px"}}>{new Date(lastUpdate).toDateString()}</span>
                              </div>   
                         </div>
                    </div>
                    <div className="col-md-4">
                         <div className="card" style={{width:"18rem",borderBottom:"5px solid green"}}>
                              <span className="card-text" style={{fontSize:"20px",marginLeft:"20px"}}>Recovered</span>
                                   <div className="card-body">
                                        <h4>
                                             <CountUp
                                             start={0}
                                             end={recovered.value}
                                             duration={2.5}
                                             separator=","
                                             /></h4>
                                             <span style={{fontSize:"20px"}}>{new Date(lastUpdate).toDateString()}</span>
                                   </div>   
                         </div>
                    </div>
                    <div className="col-md-4">
                              <div className="card" style={{width:"18rem",borderBottom:"5px solid black"}}>
                                   <span className="class-title" style={{fontSize:"20px",marginLeft:"20px"}}>Deaths</span>     
                                        <div className="card-body">
                                                  <h4>
                                                       <CountUp
                                                       start={0}
                                                       end={deaths.value}
                                                       duration={2.5}
                                                       separator=","
                                                       />
                                                  </h4>
                                                  <span style={{fontSize:"20px"}}>{new Date(lastUpdate).toDateString()}</span>
                                        </div>   
                              </div>
                    </div>
               </div>     
          </div>
    )
}

export default Cards;