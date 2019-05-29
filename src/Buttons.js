import React, {useState} from 'react';



const Buttons = (props)=> {
    const [click, setClick] = useState("");

    const handleClick = (value) => {
        setClick(value);
        console.log(click)
       // props.handleCategory(click)
    }

        return (
            <div>
                <div>
                    <button>All</button>
                    <button value="travel" onClick={(e)=>handleClick(e.target.value)}>
                        Travel
                    </button>
                    <button>Lifestyle</button>
                    <button>Business</button>
                    <button>Food</button>
                    <button>Work</button>
                </div>
            </div>
        );
}

export default Buttons;