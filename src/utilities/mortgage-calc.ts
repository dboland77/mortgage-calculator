interface IpaymentTableRow{
    month: number,
    amount: number,
    interest_repaid: number,
    principal_repaid: number,
    outstanding: number
} 

export const monthly_payment = (P,r,n)=> P*(r*((1+r)**n)/((1+r)**n-1))

export const payment_table = (P:number, m_i:number, term:number, payment:number):[IpaymentTableRow]=>{
    let int_port:number;
    let result: [IpaymentTableRow] =  [{
        month: 1,
        amount: 1,
        interest_repaid: 1,
        principal_repaid: 1,
        outstanding: 1
    }]
    
    for (let i=0; i < term; i++){
        int_port = (m_i*P);
        let pri_port=payment-int_port;
        result[i] = {
            month:i+1,
            amount: P,
            interest_repaid: Number(int_port.toFixed(2)),
            principal_repaid: Number((payment-int_port).toFixed(2)),
            outstanding: Number((P - pri_port).toFixed(2))
        }
        P = result[i].outstanding;
    }
    return result;
}