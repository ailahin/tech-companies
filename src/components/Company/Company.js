import React from 'react';
import './Company.css'

const Company = (props) => {

   const  {img, name,  value, employees } = props.company
  
    return (

         <div>
            <div className='company-details'>

            <div className='companies'>
                 <div>  <img src={img} alt="" />  </div> 

                 <div className='details'>

                <h1> Name: {name}</h1>
                <p> Market Value: {value}</p>
                <p> Company Employees: {employees}</p>
               <div>

               <button
                    onClick={()=>props.handleEmployeeToCart(props)}
                className='button'> Add Employees To Cart</button>

                <button
                onClick={()=>props.handleValueToCart(props)}
                 className='button'> Add Values To Cart</button>
               </div>

                 </div>
                
                
            </div>
           
        </div> 
         </div>
    );
};

export default Company;