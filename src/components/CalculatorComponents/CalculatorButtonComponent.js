import React from 'react';
import { Button, SimpleGrid, Tooltip } from '@mantine/core';
import {
    IconNumber1, IconNumber2, IconNumber3, IconNumber4,
    IconNumber5, IconNumber6, IconNumber7, IconNumber8,
    IconNumber9, IconPlus, IconMinus, IconX, IconDivide,
    IconNumber0, IconPointFilled, IconEqual, IconBackspace,
    IconPercentage,
} from '@tabler/icons-react';

const CalculatorButtonComponent = ({ buttonNumberClick, buttonOperationClick, buttonUtilityClick }) => {

    return (
        <div>
            <SimpleGrid cols={4}>
                <Button onClick={() => buttonUtilityClick('ce')} color="#4a4a4a" variant="filled" size="md" radius="md">
                    CE
                </Button>
                <Tooltip label="Not Supported in V1">
                    <Button onClick={() => buttonUtilityClick('clear')} disabled color="#4a4a4a" variant="filled" size="md" radius="md">
                        C
                    </Button>
                </Tooltip>
                <Tooltip label="Not Supported in V1">
                    <Button onClick={() => buttonUtilityClick('backspace')} disabled color="#4a4a4a" variant="filled" size="md" radius="md">
                        <IconBackspace size={20} stroke={3} />
                    </Button>
                </Tooltip>
                <Tooltip label="Not Supported in V1">
                    <Button onClick={() => buttonNumberClick('7')} disabled color="#7ed321" variant="filled" size="md" radius="md">
                        <IconPercentage size={20} stroke={3}/>
                    </Button>
                </Tooltip>




                <Button onClick={() => buttonNumberClick('7')} color="#f2f2f2" variant="filled" size="md" radius="md">
                    <IconNumber7 size={20} stroke={3} color={"black"} />
                </Button>
                <Button onClick={() => buttonNumberClick('8')} color="#f2f2f2" variant="filled" size="md" radius="md">
                    <IconNumber8 size={20} stroke={3} color={"black"} />
                </Button>
                <Button onClick={() => buttonNumberClick('9')} color="#f2f2f2" variant="filled" size="md" radius="md">
                    <IconNumber9 size={20} stroke={3} color={"black"} />
                </Button>
                <Button onClick={() => buttonOperationClick('/')} color="#4a90e2" variant="filled" size="md" radius="md">
                    <IconDivide size={20} stroke={3} color={"white"} />
                </Button>




                <Button onClick={() => buttonNumberClick('4')} color="#f2f2f2" variant="filled" size="md" radius="md">
                    <IconNumber4 size={20} stroke={3} color={"black"} />
                </Button>
                <Button onClick={() => buttonNumberClick('5')} color="#f2f2f2" variant="filled" size="md" radius="md">
                    <IconNumber5 size={20} stroke={3} color={"black"} />
                </Button>
                <Button onClick={() => buttonNumberClick('6')} color="#f2f2f2" variant="filled" size="md" radius="md">
                    <IconNumber6 size={20} stroke={3} color={"black"} />
                </Button>
                <Button onClick={() => buttonOperationClick('x')} color="#4a90e2" variant="filled" size="md" radius="md">
                    <IconX size={20} stroke={3} color={"white"} />
                </Button>




                <Button onClick={() => buttonNumberClick('1')} color="#f2f2f2" variant="filled" size="md" radius="md">
                    <IconNumber1 size={20} stroke={3} color={"black"} />
                </Button>
                <Button onClick={() => buttonNumberClick('2')} color="#f2f2f2" variant="filled" size="md" radius="md">
                    <IconNumber2 size={20} stroke={3} color={"black"} />
                </Button>
                <Button onClick={() => buttonNumberClick('3')} color="#f2f2f2" variant="filled" size="md" radius="md">
                    <IconNumber3 size={20} stroke={3} color={"black"} />
                </Button>
                <Button onClick={() => buttonOperationClick('-')} color="#4a90e2" variant="filled" size="md" radius="md">
                    <IconMinus size={20} stroke={3} color={"white"} />
                </Button>



                <Button onClick={() => buttonNumberClick('0')} color="#f2f2f2" variant="filled" size="md" radius="md">
                    <IconNumber0 size={20} stroke={3} color={"black"} />
                </Button>
                <Button onClick={() => buttonNumberClick('.')} variant="filled" size="md" radius="md">
                    <IconPointFilled size={20} stroke={3} />
                </Button>
                <Button onClick={() => buttonOperationClick('=')} color="#4a90e2" variant="filled" size="md" radius="md">
                    <IconEqual size={20} stroke={3} color={"white"} />
                </Button>
                <Button onClick={() => buttonOperationClick('+')} color="#4a90e2" variant="filled" size="md" radius="md">
                    <IconPlus size={20} stroke={3} color={"white"} />
                </Button>
            </SimpleGrid>
        </div >
    )
};

export default CalculatorButtonComponent;