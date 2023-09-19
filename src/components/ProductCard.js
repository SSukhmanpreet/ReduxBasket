import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../features/cartSlice';
import { removeFromCart } from '../features/cartSlice';

export default function ProductCard(props) {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart);

    // Function to get the quantity of a product in the cart
    const getQuantityInCart = productId => {
        const cartItem = cartItems.find(item => item.id === productId);
        return cartItem ? cartItem.quantity : 0;
    };
    return (
        <Card variant="outlined" sx={{ maxWidth: 400, width: 320, height: 500, maxHeight: 420, margin: "15px" }}>
            <div>
                <Typography level="title-lg">{props.title}</Typography>
                <Typography level="body-sm">{props.brand}</Typography>
                <Typography level="body-sm">{props.category}</Typography>
                <Typography level="body-sm">{props.description}</Typography>
                <IconButton
                    aria-label="bookmark Bahamas Islands"
                    variant="plain"
                    color="neutral"
                    size="sm"
                    sx={{ cursor: 'default', position: 'absolute', top: '0.875rem', right: '0.5rem' }}
                >
                    Rating: {props.rating}
                    {/* <BookmarkAdd /> */}
                </IconButton>
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
                    <Typography level="body-xs">Discounted price:</Typography>
                    <Typography fontSize="lg" fontWeight="lg">
                        ${props.price}
                    </Typography>
                </div>
                <div>
                    <Typography level="body-xs">Quantity in Cart:</Typography>
                    <Typography fontSize="lg" fontWeight="lg">
                        {getQuantityInCart(props.id)}
                    </Typography>
                </div>
                <Button
                    variant="solid"
                    size="md"
                    color="primary"
                    aria-label="Explore Bahamas Islands"
                    sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
                    onClick={() => dispatch(addToCart(
                        {
                            id: props.id,
                            title: props.title,
                            brand: props.brand,
                            category: props.category,
                            description: props.description,
                            discountPercentage: props.discountPercentage,
                            price: props.price,
                            rating: props.rating,
                            thumbnail: props.thumbnail,
                        }
                    ))}
                >
                    Add To Cart
                </Button>
                <Button
                    variant="solid"
                    size="md"
                    color="primary"
                    aria-label="Explore Bahamas Islands"
                    sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
                    onClick={() => dispatch(removeFromCart({ id: props.id }))}
                >
                    Remove From Cart
                </Button>
            </CardContent>
        </Card>
    );
}
