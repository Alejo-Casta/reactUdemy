import React from 'react';
import styled from 'styled-components';
// import './Person.css';

const StyledDiv = styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #eee;
    padding: 16px;
    text-align: center;

    @media (min-width: 500px) {
        width: 450px;
    }

    button {
        background-color: white;
        font: inherit;
        border: 1px solid blue;
        padding: 8px;
        cursor: pointer;
    }
`;

const Person = (props) => {
    return (
        <StyledDiv>
            {/* <div className='Person'> */}
            <p>Hello i am {props.name}, I am {props.age} years old</p>
            <input type="text" onChange={props.change} value={props.name} /><br />
            <button onClick={props.click}>Delete</button>
            {/* </div> */}
        </StyledDiv>
    )
}

export default Person;