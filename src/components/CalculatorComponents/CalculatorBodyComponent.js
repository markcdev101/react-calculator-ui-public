import React from 'react';
import { Card, Space, Divider } from '@mantine/core';
import CalculatorButtonComponent from './CalculatorButtonComponent';
import CalculatorDisplayComponent from './CalculatorDisplayComponent';

const CalculatorBodyComponent = ({ displayFieldFirstValue, displayFieldSecondValue, displayFieldResultValue, buttonNumberClick, buttonOperationClick, buttonUtilityClick, operationIcon }) => {

    return (
        <div>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section>
                    <CalculatorDisplayComponent
                        value={displayFieldFirstValue}
                        readOnly={true}>
                    </CalculatorDisplayComponent>
                    <CalculatorDisplayComponent
                        value={displayFieldSecondValue}
                        operationIcon={operationIcon}
                        readOnly={true}>
                    </CalculatorDisplayComponent>
                    <Divider my="md" variaton="filled" />
                    <CalculatorDisplayComponent
                        value={displayFieldResultValue}
                        readOnly={true}>
                    </CalculatorDisplayComponent>
                </Card.Section>
                <Space h="xl" />

                <CalculatorButtonComponent
                    buttonNumberClick={buttonNumberClick}
                    buttonOperationClick={buttonOperationClick}
                    buttonUtilityClick={buttonUtilityClick}>
                </CalculatorButtonComponent>
            </Card>
        </div>
    )
};

export default CalculatorBodyComponent;