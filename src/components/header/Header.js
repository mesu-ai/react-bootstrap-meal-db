import Button from '@restart/ui/esm/Button';
import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <h1>Welcome to Morning News</h1>
            <>
                <InputGroup className="mb-3 w-50 mx-auto mt-4">
                    <FormControl
                    placeholder="Search News"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    />
                    <Button variant="outline-secondary" id="button-addon2" className="px-4">
                    Search
                    </Button>
                </InputGroup>
            
            </>

            
        </div>
    );
};

export default Header;