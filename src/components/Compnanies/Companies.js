import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Company from '../Company/Company';
import './Companies.css'

const Companies = () => {

    const [companies, setCompanies]= useState([]);

    const [cart, setCart]=useState([]);
    const [value, setValue]= useState([]);
    

    useEffect (()=>{
        fetch('../../companies.json')
        .then (response=>response.json())
        .then(data=>setCompanies(data))


    },[])

    const handleEmployeeToCart=(company)=>{
        console.log('clicked', company.company.name);

        const newCart= [...cart, company]
        setCart(newCart);

        console.log(newCart);
    }


    const handleValueToCart=(company)=>{
        console.log('clicked', company.company.value)

        const newValue= [...value, company]
        setValue(newValue);

    }

    return (

        <div>
            <div className='search-field'> 
                <input id='search-input' type="text" placeholder='Search Company' /> 
                <button id='search-btn' > Search </button>
            </div>


        <div className='display' >
            <div className='companies-information'>
            {
                companies.map(company=> <Company
                    company={company}
                    key={company.key}
                    handleEmployeeToCart={handleEmployeeToCart}
                    handleValueToCart= {handleValueToCart}
                    
                    > </Company>)
            }


            </div>

            <div className='total-detail'>
                    <Cart cart={cart} value={value}>  </Cart>
            </div>

            {/* <div className='total-detail'>

                <h1> Summary </h1>

                <p>  Total Employees: </p>
                <p> Total Market Values:</p>
                <p> Comapany Names Added:</p>
                <p> Highest Value:  {} </p>
                <p> Maximum Employee: {} </p>

            </div> */}


          
        </div>

        <div className='footer'>
            <footer className='footer-text'>
                   <small> @2023 Tech-Companies Researcher All Right Reserved. </small> 
            </footer>
        </div>

     </div>

    );
};

export default Companies;