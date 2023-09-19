import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ProductCard from './ProductCard';
import { Button } from '@mui/joy';
import { Container } from '@mui/material';

const Cart = () => {
    const navigate = useNavigate();
    const cartItems = useSelector(state => state.cart);

    // Function to redirect to order-placed page
    const handlePlaceOrder = () => {
        navigate('/order-placed');
    };

    // Function to redirect to home page
    const handleBack = () => {
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
            <h2>Cart</h2>
            <Button
                variant="solid"
                size="md"
                color="primary"
                aria-label="Explore Bahamas Islands"
                sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
                onClick={handleBack}
            >
                Go Back to HomePage
            </Button>
            <div>
                <Container sx={{ padding: 2, display: "flex", justifyContent: "center", flexWrap: "wrap", paddingTop: "80px" }}>
                    {
                        cartItems.map((product, indx) => (
                            <div key={indx}>
                                <ProductCard {...product} />
                            </div>
                        ))
                    }
                </Container>
            </div>
            <h2>Total Amount Payable: ${calculateTotalAmount()}.00</h2>
            <Button
                variant="solid"
                size="md"
                color="primary"
                aria-label="Explore Bahamas Islands"
                sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
                onClick={handlePlaceOrder}
            >
                Place Order
            </Button>
        </div>
    );
};

export default Cart;
