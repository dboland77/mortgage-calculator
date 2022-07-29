import React, { ReactElement } from 'react';
import {payment_table, monthly_payment} from "../utilities/mortgage-calc"


export const App = ():ReactElement => {
    let monthlyPayment=monthly_payment(200000,0.03/12,240);
    console.log(monthlyPayment)
    let tableValues = payment_table(200000,0.03/12,240,monthlyPayment);
return(
    <table>
        <thead>

        <tr>
            <th>Month</th>
            <th>Amount</th>
            <th>Interest</th>
            <th>Capital</th>
            <th>Outstanding</th>
        </tr>
        </thead>
        <tbody>

{tableValues.map((row,ind)=>{
    return(
        <tr key={ind}>
<td >{row.month}</td> 
<td>{row.amount}</td> 
<td>{row.interest_repaid}</td> 
<td>{row.principal_repaid}</td> 
<td>{row.outstanding}</td> 
    </tr>)
})}
</tbody>
</table>
)}

