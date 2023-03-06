import React from 'react';
import {useState} from 'react';
// import {Link}from 'react-router-dom';

const Navbar=()=>{
    const [showElement,setShowElement]=useState('hidden');

    const showMenu=()=>{
        if(showElement==='hidden'){
            setShowElement('flex');
        }else{
            setShowElement('hidden')
        }
    }

    //OTHER VARIABLES
    const navClasses=`${showElement} flex-col lg:flex`;
    return(
        <section className='sticky top-1 bg-red-200'>
            <section>
                <button className='lg:hidden p-2 hover:bg-blue-500'
                    onClick={showMenu}>
                        Menu
                </button>
            </section>
            <section className={navClasses}>
                <section className='flex flex-col lg:flex-row'>
                    <a className='p-2 hover:bg-blue-500'href=''>Home</a>
                    <a className='p-2 hover:bg-blue-500'href=''>Settings</a>
                    <a className='p-2 hover:bg-blue-500' href=''>About</a>
                    <a className='p-2 hover:bg-blue-500'href=''>Careers</a>
                </section>
            </section> 
        </section>
        
    )
}
export default Navbar;