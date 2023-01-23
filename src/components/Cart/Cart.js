import React from 'react';
import './Cart.css'

const Cart = (props) => {

    console.log(props);

    const {cart}= props;
    const {value}= props;

    let employees= 0;
    //let name= '';
    let name= ''; 
    let newName='';


    // let name2= '';
    // let name3= '';
   
 

    for(const company of cart) {

    // console.log(company.company.employees);

    name=company.company.name;
    newName= <li>
        {name} {newName}
    </li>
     
    // name2= name + company.company.name;
    // name3= <li>
    //  {name2} {name3}
    // </li>

    // employees= employees+ company.company.employees }
     employees= employees+ parseFloat(company.company.employees) 
     
    };

    let values=0 ;


    for (const company of value){

            values= values + parseFloat(company.company.value);

    }


    return (


<div className='total-details'>

<div className='total-detail'>

<h1> Summary </h1>

<p>  Total selected Values: {props.value.length}  </p>
<p>  Total selected Employees: {props.cart.length} </p>
<p> Total Employees: {employees}  </p>
<p> Total Market Values in Billion: ${values}</p>
<p> Comapany Added:  {newName}</p>
<p> Highest Value:  {} </p>
<p> Maximum Employed by:  {} </p>

</div>

</div>


    );
};

export default Cart;