import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../features/cartSlice';
import OrderedProductsCard from './OrderedProductsCard';
import { Button } from '@mui/joy';
import { Container } from '@mui/material';

const OrderPlaced = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const cartItems = useSelector(state => state.cart);

    // Function to redirect to home page and clear cart
    const handleBack = () => {
        const orderedItemIds = cartItems.map(item => item.id);
        dispatch(clearCart(orderedItemIds));
        navigate('/');
    };

    // Function to calculate the total amount to be paid
    const calculateTotalAmount = () => {
        const totalAmount = cartItems.reduce(
            (total, item) => total + item.quantity * item.price,
            0
        );
        return totalAmount;
    };

    // Returning dynamic html page to display
    return (
        <div>
            <h2>Order Placed!</h2>
            <Button
                variant="solid"
                size="md"
                color="primary"
                aria-label="Explore Bahamas Islands"
                sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
                onClick={handleBack}
            >
                Go Back to Home
            </Button>
            <h2>Order Summary:</h2>
            <p>Total Amount Paid: ${calculateTotalAmount()}.00</p>
            <p>Your order has been placed successfully! Below are all the items that will be included in your order. Your order will dispatch in the next 5 working days.</p>
            <h3>Ordered Items:</h3>
            <div>
                <Container sx={{ padding: 2, display: "flex", justifyContent: "center", flexWrap: "wrap", paddingTop: "80px" }}>
                    {
                        cartItems.map((product, indx) => (
                            <div key={indx}>
                                <OrderedProductsCard {...product} />
                            </div>
                        ))
                    }
                </Container>
            </div>
            <p>Total Amount Paid: ${calculateTotalAmount()}.00</p>
            <Button
                variant="solid"
                size="md"
                color="primary"
                aria-label="Explore Bahamas Islands"
                sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
                onClick={handleBack}
            >
                Thank You!!
            </Button>
        </div>
    );
};

export default OrderPlaced;
