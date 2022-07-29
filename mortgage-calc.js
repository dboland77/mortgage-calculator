const PRINCIPAL = 200000//208868.04 // 272346.62 //
const INTEREST_RATE = 0.03//0.0274
const MONTHLY_TERM= 20*12//(19*12)+6//(26*12)+7//26 years 8 months 01/05/2015

// console.log(PRINCIPAL*INTEREST_RATE)

// const convert_monthly = (i) => Math.pow(1+i,1/12)-1
const convert_monthly = i => i/12

const m_i = convert_monthly(INTEREST_RATE)

const monthly_payment = (P,r,n)=> P*(r*((1+r)**n)/((1+r)**n-1))

const payment_table = (P, m_i, MONTHLY_TERM, payment)=>{
    let int_port;
    console.log('month', 'Principal', 'interest', 'capital', 'remaining')
    for (let i=1; i <= MONTHLY_TERM; i++){
        int_port = (m_i*P).toFixed(2)
        pri_port=payment-int_port;
        console.log(i, P, int_port, (payment-int_port).toFixed(2), (P - pri_port).toFixed(2))
        P = (P - pri_port).toFixed(2);
    }
    return true
}

const MP= monthly_payment(PRINCIPAL,m_i, MONTHLY_TERM)
console.log(payment_table(PRINCIPAL,m_i,MONTHLY_TERM, MP))