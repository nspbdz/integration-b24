import { InputGroup,FormControl } from "react-bootstrap";
import React from 'react';
import "../styles/customBtn.css";

class TypeRent extends React.Component {
    constructor(){
        super();

        this.state = {
           day: false,
           month: false,
           year: false
        }
    }

    changeDay(){
       this.setState({day: !this.state.day})
    }
    changeMonth(){
        this.setState({month: !this.state.month})
     }
  
     changeYear(){
        this.setState({year: !this.state.year})
     }
  
    render(){
        let btn_day = this.state.day ? "blueButton" : "whiteButton";
        let btn_month = this.state.month ? "blueButton" : "whiteButton";
        let btn_year = this.state.year ? "blueButton" : "whiteButton";

        return (
            <>
        <p className="h3 text-left font-weight-bold">Type Of Rent</p>

             <button id="btnd" className={btn_day} onClick={this.changeDay.bind(this)}>
                  Day
             </button>
             
             <button id="btnd" className={btn_month} onClick={this.changeMonth.bind(this)}>
              Mont
             </button>
            <button id="btnd" className={btn_year} onClick={this.changeYear.bind(this)}>
                Year
            </button>
            </>

        )
    }
}
  
  export default TypeRent;
