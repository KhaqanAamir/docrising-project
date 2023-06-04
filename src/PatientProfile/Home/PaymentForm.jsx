import React, {useState, useEffect} from 'react'
import cards from '../../utils/cards.jpg'
import '../../Styles/Pages/Home/PaymentForms.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import NavBar2 from '../../Components/NavBar2'
import SignUpAlert from './SignUpAlert'

const PaymentForm = () => {
    
    // const[fullname,setfullname]=useState()
    // const[email,setemail]=useState()
    // const[address,setaddress]=useState()
    // const[city,setcity]=useState()
    // const[state,setstate]=useState()
    // const[zipcode,setzipcode]=useState()
    // const[nameoncard,setnameoncard]=useState()
    // const[creditcardnumber,setcreditcardnumber]=useState()
    // const[expmonth,setexpmonth]=useState()
    // const[expyear,setexpyear]=useState()
    // const[cvv,setcvv]=useState()
    const [alert, setalert] = useState(false);
    const [alertstate,setalertstate]=useState(false)
    const erroemessage="Your payment has been successfull"

    const history=useNavigate();

    const showalert = (type, message) => {
        setalert({
          type: type,
          message: message,
        });
        setTimeout(() => {
          setalert(null);
        }, 2000);
      };

    const showcalendar=(e)=>{
        e.preventDefault();

        axios.post(`http://localhost:4000/user/paidpatient/${localStorage.getItem('formid')}`,{
            headers:{
                "Content-Type":"application/json"
            }
        })

        setalertstate(true)
        showalert("success", erroemessage);
        
    }

    useEffect(() => {
        let timeout;
    
        if (alertstate) {
          timeout = setTimeout(() => {
            history('/patient/Home');
          }, 3000);
        }
    
        return () => {
          clearTimeout(timeout);
        };
      }, [alertstate, history]);

    

    
  return (
    <>
    <NavBar2/>
    {alert && <SignUpAlert alert={alert} />}
    <div className="paymentform-container">
        <form action="">
            <div className="paymentform-row">
                <div className="paymentform-col">
                    <h3 className='paymentform-title'>Billing Address</h3>
                    <div className="paymentform-inputBox">
                        <span>full name:</span>
                        <input type="text" placeholder='Khaqan Aamir'  />
                    </div>
                    <div className="paymentform-inputBox">
                        <span>email:</span>
                        <input type="email" placeholder='example@example.com' />
                    </div>
                    <div className="paymentform-inputBox">
                        <span>address:</span>
                        <input type="text" placeholder='residential address'/>
                    </div>
                    <div className="paymentform-inputBox">
                        <span>city:</span>
                        <input type="text" placeholder='Islamabad'/>
                    </div>
                    <div className="paymentform-flex">
                        <div className="paymentform-inputBox">
                            <span>state:</span>
                            <input type="text" placeholder='Pakistan' />
                        </div>
                        <div className="paymentform-inputBox">
                            <span>zipcode:</span>
                            <input type="text" placeholder='123 456'/>
                        </div>
                    </div>
                </div>
                <div className="paymentform-col">
                    <h3 className='paymentform-title'>Payment</h3>
                    <div className="paymentform-inputBox">
                        <span>Cards accepted:</span>
                        <img src={cards} alt="Cards" />
                    </div>
                    <div className="paymentform-inputBox">
                        <span>Name on card:</span>
                        <input type="text" placeholder='Mr. Khaqan Aamir' />
                    </div>
                    <div className="paymentform-inputBox">
                        <span>credit card number:</span>
                        <input type="number" placeholder='1111-2222-3333-4444' />
                    </div>
                    <div className="paymentform-inputBox">
                        <span>exp month:</span>
                        <input type="text" placeholder='January' />
                    </div><br />
                    <div className="paymentform-flex">
                        <div className="paymentform-inputBox">
                            <span>exp year:</span>
                            <input type="number" placeholder='2023' />
                        </div>
                        <div className="paymentform-inputBox">
                            <span>CVV:</span>
                            <input type="text" placeholder='1234' />
                        </div>
                    </div>
                </div>
            </div>
            <input type="submit" value="Pay Now" className='paymentform-submit-btn' onClick={showcalendar}/>
        </form>
    </div>
    </>
  )
}

export default PaymentForm