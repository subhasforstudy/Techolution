import React,{Component} from 'react';
import axios from 'axios';
import './TabbleData.css'

class TabbleData extends Component{

    constructor(props){
        super(props);
        this.state = {
            studentDetail:[],
            totalArray:[]
        }
    }

        

    componentDidMount(){
        axios('https://demo9311144.mockable.io/studentDetail').then((res)=>{
            this.setState({studentDetail: res.data})
        }).catch((err)=>{
            if(err) throw err;
        })
          }

    render(){
        
       
        const {studentDetail,totalArray}=this.state;
        let arraylenght;
       
        studentDetail.sort((a, b) => {
            let fa = a.name;
            let  fb = b.name;
            if (fa < fb) {
                return -1;
            }
            if (fa > fb) {
                return 1;
            }
            return 0;
        });
       

            studentDetail.map(item =>{
                const total=item.marks.Maths+item.marks.English+item.marks.Science;
                totalArray.push(total); }) 




                totalArray.sort(function(a, b) {
                    return a - b;
                    });
            
                

            console.log(totalArray);
             arraylenght=totalArray.length;
            console.log(arraylenght);
            //console.log(totalArray[arraylenght-1]);

        return (
           
            <div>
                <table >
                    <tr className="head">Students Result Board</tr>
                    <tr>
                        <th>Student Name</th>
                        <th>Roll Number</th> 
                        <th>Total Marks</th>
                        <th>Status</th>
                    </tr>
                {
                   studentDetail.map(item =>{
                    const total=item.marks.Maths+item.marks.English+item.marks.Science;

                    return <tr>
                    <td className={item.marks.Maths<20||item.marks.English<20||item.marks.Science<20?"fail":(total==totalArray[arraylenght-1]?"heighest":"")}>{item.name}</td>
                    <td className={item.marks.Maths<20||item.marks.English<20||item.marks.Science<20?"fail":(total==totalArray[arraylenght-1]?"heighest":"")}>{item.rollNumber}</td>
                    <td className={item.marks.Maths<20||item.marks.English<20||item.marks.Science<20?"fail":(total==totalArray[arraylenght-1]?"heighest":"")}>{total}</td>
                   <td className={item.marks.Maths<20||item.marks.English<20||item.marks.Science<20?"fail":(total==totalArray[arraylenght-1]?"heighest":"")}>{item.marks.Maths<20||item.marks.English<20||item.marks.Science<20?"Fail":(total==totalArray[arraylenght-1]?"Topper":"Pass")}</td>
                   
                    </tr>
               
                   }) 
                }
                   
             </table>
            </div>
        )
    }
}
export default TabbleData;