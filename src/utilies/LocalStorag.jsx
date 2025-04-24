import {  toast } from 'react-toastify';
const getItemfromLocalSTR = () =>{

    const getItem = localStorage.getItem('appointment');

    if(getItem){
        const storedItem = JSON.parse(getItem);
        return storedItem;
    }else{
        return [];
    }
};

const saveToLocalSTR = (id) =>{
    const save = JSON.stringify(id);
    localStorage.setItem('appointment', save)
}


const addToLocalSTR = (id) =>{
    const stordDoctor = getItemfromLocalSTR();

    if(stordDoctor.includes(id)){
        toast("Wow so easy!");
    }else{
        stordDoctor.push(id)
        saveToLocalSTR(stordDoctor)
    }
}

export {addToLocalSTR,getItemfromLocalSTR}