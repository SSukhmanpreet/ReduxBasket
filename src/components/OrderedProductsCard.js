import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { useSelector } from 'react-redux';

export default function OrderedProductsCard(props) {
    const cartItems = useSelector(state => state.cart);

    // Function to get the quantity of a product in the cart
    const getQuantityInCart = productId => {
        const cartItem = cartItems.find(item => item.id === productId);
        return cartItem ? cartItem.quantity : 0;
    };
    return (
        <Card variant="outlined" sx={{ maxWidth: 400, width: 320, height: 400, maxHeight: 420, margin: "15px" }}>
            <div>
                <Typography level="title-lg">{props.title}</Typography>
                <Typography level="body-sm">{props.brand}</Typography>
                <Typography level="body-sm">{props.description}</Typography>
            </div>
            <AspectRatio minHeight="120px" maxHeight="200px">
                <img
                    src={props.thumbnail}
                    srcSet={props.thumbnail}
                    loading="lazy"
                    alt=""
                />
            </AspectRatio>
            <CardContent orientation="horizontal">
                <div>
                    <Typography level="body-xs">Price per piece:</Typography>
                    <Typography fontSize="lg" fontWeight="lg">
                        ${props.price}
                    </Typography>
                </div>
                <div>
                    <Typography level="body-xs">Quantities ordered:</Typography>
                    <Typography fontSize="lg" fontWeight="lg">
                        {getQuantityInCart(props.id)}
                    </Typography>
                </div>
            </CardContent>
        </Card>
    );
}
