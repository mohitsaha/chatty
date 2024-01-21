import React, { useState } from  'react';

const DropDown = () => {

    const [stateName,setStateName] = useState("");
    const [reset,setReset] = useState();
    const [cityName,setCityName] = useState("");

    let obj = {
         "punjab" : ["amritsar","patiala","moga"],
         "himachal Pradesh" : ["shimla","hamirpur","manali"],
         "haryana" : ["panchkula","sonipat","panipat"]
    }

    let res = Object.keys(obj).map(key => {
       return <option key={key} value={key}>{key}</option>
    }
    );

    let defaultOption = reset && <option value="none" className="hidden" >Select an State</option>;

    const city = stateName && obj[stateName];

    let cityOptions = stateName && city?.map( (item,id)=>{

        return <option value = {item} key={item}>{item}</option>
    });

    const selectChange = (event) => {
        const val = event.target.value;
        setStateName(val);
        setCityName("");
    }

    const selectCity = (event) => {
        const city = event.target.value;
        setCityName(city);
    }

    const clearOptions = () => {
        setStateName("");
        setCityName("");
    }

    
    return(
        <div>
            <select name="state" id="state" onChange={selectChange} >
                {res}
            </select>

            {stateName && <select name="city" id="city" onChange={selectCity} >
            <option value="none" className="hidden" >Select an city</option> 
                {cityOptions}
            </select>
            }

            {cityName && <p>you have selected {cityName} from {stateName}</p>}

            {stateName && <button onClick={clearOptions}>clear options</button>}
        </div>
    );
}

export default DropDown;
