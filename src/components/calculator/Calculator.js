import { Card, DatePicker, Input, Switch, Button  } from 'antd';
import Meta from 'antd/lib/card/Meta';
import './Calculator.css'

const Calculator = (params) => {
    return (
        <Card
         style={{ 
             boxShadow: '-1px -2px 17px 3px rgba(145,145,145,1)', 
            borderRadius: '5px', 
            minWidth: '300px' 
        }}
        >
            <h2 >Savings <br/> Calculator</h2>
            <Switch /> <span>Calculate by total amount</span>
            <p>Total amount</p>
            <Input addonBefore='$'  />
            <p>Reach goal by</p>
            <DatePicker/>

            <div className='result'>
                <div className='result-amount' >
                    <span>Monthly amount</span>
                </div>
                
                <div className='details'>
                    <span>'You are planning 26 monthly deposits <br/> to reach your $25000 goal by April 2022'</span>
                </div>
            </div>

            <Button 
                type='primary'
                style={{width : '100%', marginTop: '20px'}}>Finish</Button>
        </Card> 
    )
}

export default Calculator
