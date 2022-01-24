import React from 'react';

const Form = () => {
    return (
        <div>
            <form>
                <input placeholder='Name' type="text"/>
                <br/>
                <input placeholder='Email' type="email"/>
                <br/>

                <input type="submit"/>
            </form>
        </div>
    );
}

export default Form;
