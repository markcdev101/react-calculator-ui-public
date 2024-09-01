import React, { useState } from 'react';
import CalculatorBodyComponent from '../components/CalculatorComponents/CalculatorBodyComponent';
import { Center } from '@mantine/core';
import { IconPlus, IconMinus, IconX, IconDivide } from '@tabler/icons-react';

const CalculatorPage = () => {

    const [firstValue, setFirstValue] = useState('');
    const [secondValue, setSecondValue] = useState('');
    const [selectedOperation, setSelectedOperation] = useState();
    const [result, setResult] = useState('');



    const handleNumberClick = (buttonValue) => {
        /**
         * If there is a result already from previous calculation
         * Then entering a number should resets all states
         * and then the new number being entered should be 
         * set to the firstValue
         * 
         * Decimal point in calculators can only be used once. 
         * Check if there is already a decimal in the current value
         */
        if (result && secondValue) {
            reset()
            if (!firstValue.toString().includes(".") || buttonValue !== ".") {
                setFirstValue((prevValue) => prevValue + buttonValue)
            }
        }
        else if (result && !secondValue) {
            if (!secondValue.toString().includes(".") || buttonValue !== ".") {
                setSecondValue((prevValue) => prevValue + buttonValue)
            }
        }
        /**
         * If there is no result, and no operation is currently selected
         * then assign it to the firstValue state
         */
        else if (selectedOperation == null) {
            if (!firstValue.toString().includes(".") || buttonValue !== ".") {
                setFirstValue((prevValue) => prevValue + buttonValue)
            }
        }
        /**
         * Else if there is an operation already selected, store
         * the numbers into the secondValue.
         */
        else {
            if (!secondValue.toString().includes(".") || buttonValue !== ".") {
                setSecondValue((prevValue) => prevValue + buttonValue)
            }
        }
    }

    const handleOperationClick = (operationValue) => {
        setSelectedOperation(operationValue)
        if (operationValue === "+") {
            setOperationIcon(<IconPlus style={{ width: '16px', height: '16px', color: 'black' }} />)
            setSelectedOperation("ADDITION")
        }
        else if (operationValue === "-") {
            setOperationIcon(<IconMinus style={{ width: '16px', height: '16px', color: 'black' }} />)
            setSelectedOperation("SUBTRACTION")
        }
        else if (operationValue === "x") {
            setOperationIcon(<IconX style={{ width: '16px', height: '16px', color: 'black' }} />)
            setSelectedOperation("MULTIPLICATION")
        }
        else if (operationValue === "/") {
            setOperationIcon(<IconDivide style={{ width: '16px', height: '16px', color: 'black' }} />)
            setSelectedOperation("DIVISION")
        }

        //An operation is already selected
        if (selectedOperation != null && operationValue !== "=" && secondValue) {
            handleEqualsClick(true);
        }
        if (result) {
            setFirstValue(result)
            setSecondValue('')
            setResult('')
        }
        else if (operationValue === "=") {
            console.log("=")
            handleEqualsClick(false);
        }
    }

    const handleUtilityClick = (utilityFunction) => {
        if (utilityFunction === "ce") {
            console.log("Clear Entry")
            reset()
        }
        else if (utilityFunction === "clear") {
            console.log("Clear")
        }
        else if (utilityFunction === "backspace") {
            console.log("Backspace")
        }
    }

    const handleEqualsClick = async (chaining) => {
        const request = {
            firstValue: parseFloat(firstValue),
            secondValue: parseFloat(secondValue),
            operation: selectedOperation
        }

        try {
            const response = await fetch(`${process.env.REACT_APP_CALCULATOR_API_HOST}/calculator/api/v1/arithmetic`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(request)
            });

            const result = await response.json();
            setResult(result.result)
            if (chaining) {
                setFirstValue(result.result)
                setSecondValue('')
            }
            else {
                setResult(result.result)
                setSelectedOperation()
            }
        } catch (error) {
            console.log("Error")
        }
    }

    //Reset all states
    const reset = () => {
        setResult('')
        setFirstValue('')
        setSecondValue('')
        setSelectedOperation()
        setOperationIcon('')
    }


    const [operationIcon, setOperationIcon] = useState();
    return (
        <div>
            <Center maw={400} h={100} bg="var(--mantine-color-gray-light)">
                <CalculatorBodyComponent
                    displayFieldFirstValue={firstValue}
                    displayFieldSecondValue={secondValue}
                    displayFieldResultValue={result}
                    buttonNumberClick={handleNumberClick}
                    buttonOperationClick={handleOperationClick}
                    buttonUtilityClick={handleUtilityClick}
                    operationIcon={operationIcon}>
                </CalculatorBodyComponent>
            </Center>
        </div>
    )
};

export default CalculatorPage;