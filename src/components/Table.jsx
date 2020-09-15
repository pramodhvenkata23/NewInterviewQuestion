import React from 'react'
import '../App.css'

const Table = ( props) =>{

    const Tabledata = (props) => {
        return(
            <tr>
            <td>{props.profiles.firstName}</td>
            <td>{props.profiles.lastName}</td>
            </tr>
        )
    }
    return(
        <div>
            <table border="1" className="table">
                <th colSpan="2" className="header" style={{color:'red'}}>House Stark</th>
               {props.dataOne.map(item => 
               <Tabledata
               profiles={item}/>)}
               
               <th colSpan='2' className="header" style={{color:'yellow'}}>House Targaryen</th>
               {props.dataTwo.map(item => <Tabledata
               profiles={item}/>)}
            </table>
        </div>
    )
}
export default Table