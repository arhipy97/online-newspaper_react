import React from 'react';
import Spinner from '../Spinner'

const withSpinner = (Wrapped) => {
    return ( { props: { loading, ...props}  }) => { 
        if( loading ) {
            return <Spinner/>
        }
        return (
            <Wrapped {...props}/>
        );
    }
};  

export default withSpinner;