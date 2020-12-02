import React from 'react';
import { PlaceHolderServiceConsumer } from '../PlaceHolderServiceContext';

const withPlaceHolderService = () => (Wrapped) => {
    return (props) => {
        return (
            <PlaceHolderServiceConsumer>
                {
                    (placeHolderService) => {
                        return (<Wrapped {...props}
                            placeHolderService={placeHolderService} />);
                    }
                }
            </PlaceHolderServiceConsumer>
        );
    }
};

export default withPlaceHolderService;