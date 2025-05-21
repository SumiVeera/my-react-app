import React from 'react';
import { Button } from '@chakra-ui/react';

const CustomButton = ({ label, onClick, colorScheme = 'blue', size = 'md' }) => {
    return (
        <Button onClick={onClick} colorScheme={colorScheme} size={size}>
            {label}
        </Button>
    );
}
export default CustomButton;
    