import { CardElement } from "@stripe/react-stripe-js";

import Button from "../button/button.component";
import { PaymentFormContainer, FormContainer } from "./payment-form.styles";


const PaymentForm= () => { 
    return (
        <PaymentFormContainer>
            <FormContainer>
                <h2>Credit Card Payment</h2>
            <CardElement />
            <Button>Pay now </Button>
            </FormContainer>
            
        </PaymentFormContainer>
    )

 }


 export default PaymentForm