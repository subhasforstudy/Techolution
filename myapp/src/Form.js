import React,{Component} from 'react';
import './Form.css'

class Form extends Component{

constructor(props){
    super(props);
    this.state = {
        firstname: '', 
        lastname: '', 
        clasS:'', 
        passYear:null, 
        percentage:null,
        errormessage:''

    }
}

    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        let err = '';
        var mxlen =20;
        if (nam === "firstname") {
            var letters = /^[a-zA-Z]*$/;
            if (!val.match(letters) || val.length>mxlen) 
            {
              err = "**First name must be Alphabate And not greater than 20";
            }
        }

        if (nam === "lastname") {
            var letters = /^[a-zA-Z]*$/;
            if (!val.match(letters) || val.length>mxlen) 
            {
              err = "**Last name must be Alphabate And not greater than 20";
            }
        }

        if (nam === "clasS") {
            var letters = /^[0-9A-Z]*$/;
            if (!val.match(letters) ) 
            {
              err = "**Class must be numeric alpha";
            }
        }

        if (nam === "passYear") {
            var letters = /^[0-9]*$/;
            var range=2017;
            if (!val.match(letters)||val>range ) 
            {
              err = " **year should be number and before 2017";
            }
        }

        if (nam === "percentage") {
           
            if (isNaN(val) ||val>100) 
                        {
                            err = "**percentage must be number and less than or equal to 100";
                        }
        }


        this.setState({errormessage: err});
        this.setState({[nam]: val});
      
    }


    render() {
        const {firstname}=this.state;

        console.log(firstname);
      
        return(
            <div>
                <div className="form-group"><label> First Name:</label>
                <input type='text' className="form-control" name='firstname' onChange={this.myChangeHandler}></input>
                </div>
               
                
                <div className="form-group"><label> Last Name:</label>
                <input type='text' name='lastname' className="form-control" onChange={this.myChangeHandler}></input>
                </div>

                <div className="form-group"><label>Class:</label>
                <input type='text' name='clasS'  className="form-control" onChange={this.myChangeHandler}></input>
                </div>

                <div className="form-group"><label> Year of Passing:</label>
                <input type='text' name='passYear'  className="form-control" onChange={this.myChangeHandler}></input>
                </div>

                <div className="form-group"><label> Percentage:</label>
                <input type='text' name='percentage'  className="form-control" onChange={this.myChangeHandler}></input>
                </div>
                <div className="errmassage">
                    {this.state.errormessage}

                </div>
               
                {
                  this.state.errormessage==''? <button type="submit" className="btn btn-primary btn-block">Submit</button>:<div></div>
                }
               
                
            </div>
        )
    }

}

export default Form;