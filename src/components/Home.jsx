import React from 'react'
import Table from './Table';
import '../App.css';

const SearchPanel = () => {
    return(
        <div>
            <input type="text"
            placeholder="Search" style={{height:'25px',width:'373px',marginLeft:'10px'}}/>
        </div>
    )
}

class Home extends  React.PureComponent{
    constructor(props){
        super(props);
        this.state = {
        firstData : [
            {firstName:"Rob Stark",lastName:"Winterfell"},
            {firstName:"Arya Stark",lastName:"Winterfell"},
            {firstName:"Sansa Stark",lastName:"Winterfell"},
        ],
        secondData : [ 
             {firstName:"John Snow",lastName:"Castle Black"},
            {firstName:"Daenerys Targaryen",lastName:"Dragon Stone"},
    ]       
}   
    }
    render(){
        return(
            <div className="container"  >
                <SearchPanel/>    
                <Table 
                dataOne={this.state.firstData}
                dataTwo={this.state.secondData}/>
            </div>
        )
    }
    
}
export default Home