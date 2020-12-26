import { Button } from 'antd';
import './HomePage.css'
import Calculator from '../../components/calculator/Calculator'

const HomePage = (params) => {
    return (
        <div className='container'>
           <p>Let's plan your saving goal</p>
           <Calculator/>
        </div>
    )
}

export default HomePage;