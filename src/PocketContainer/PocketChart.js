import React, {useContext} from "react";
import styled from "styled-components";
import Chart from "../Components/Chart/Chart";
import { FilterContext } from "./PocketContainer";

const PocketChart = (props) => {
    const { filteredExpense } = useContext(FilterContext);

    const monthlyExpenseData = [
        {label: '1', amount:0},
        {label: '2', amount:0},
        { label: "3", amount: 0 },
        { label: "4", amount: 0 },
        { label: "5", amount: 0 },
        { label: "6", amount: 0 },
        { label: "7", amount: 0 },
        { label: "8", amount: 0 },
        { label: "9", amount: 0 },
        { label: "10", amount: 0 },
        { label: "11", amount: 0 },
        { label: "12", amount: 0 },
    ];


    filteredExpense?.forEach((expense) => {
        const month = expense.date.getMonth();
        monthlyExpenseData[month].amount += +expense.amount;
     });
    
    

    return (
        <Wrapper>
            <Chart chartDates={monthlyExpenseData} /> 
        </Wrapper>
    )
}

const Wrapper = styled.div`
    border-radius: 20px;
    color: ${prop => prop.theme.textColor};
        background-color: ${prop => prop.theme.backColor};
`;
export default PocketChart;