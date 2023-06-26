import React from 'react';

function FlexContainer(props){
    const {title, children}=props;
    //
    return(
        <div style={{display:flex, flexDirection: 'columnReverse'}}>
            <h1>{title}</h1>
            <div>{children}</div>
        </div>
    );
}

export default FlexContainer;