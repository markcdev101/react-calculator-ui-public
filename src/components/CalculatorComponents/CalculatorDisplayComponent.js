import React from 'react';
import { NumberInput  } from '@mantine/core';

const CalculatorDisplayComponent = ({ value, operationIcon, readOnly }) => {

    return (
        <div>
            <NumberInput
                readOnly={readOnly}
                hideControls 
                size="xl"
                variant="filled"
                value={value}
                leftSection={operationIcon}
                styles={{ input: { textAlign: 'right' } }}
            />
        </div>
    )
};

export default CalculatorDisplayComponent;