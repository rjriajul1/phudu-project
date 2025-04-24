
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


// const addToLocalSTR = (id) =>{
//     const stordDoctor = getItemfromLocalSTR();

//     if(stordDoctor.includes(id)){
//         toast("Wow so easy!");
//     }else{
//         stordDoctor.push(id)
//         saveToLocalSTR(stordDoctor)
//     }
// };


const removeFromLocalSTR = (id)=>{
    const stordId = getItemfromLocalSTR()
    const convertedId = stordId.map((id) => parseInt(id));
    const remaningId = convertedId.filter(singelId=> singelId !== id);
    saveToLocalSTR(remaningId)
}

export {getItemfromLocalSTR,removeFromLocalSTR,saveToLocalSTR}