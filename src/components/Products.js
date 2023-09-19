import { useSelector, useDispatch } from 'react-redux';
import { setMinPriceFilter, setMaxPriceFilter } from '../features/priceFilterSlice';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ProductCard from './ProductCard';
import { Button } from '@mui/joy';
import { Container, TextField } from '@mui/material';

const Products = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const products = useSelector(state => state.products);
    const cartItems = useSelector(state => state.cart);
    const minPrice = useSelector(state => state.priceFilter.minPrice);
    const maxPrice = useSelector(state => state.priceFilter.maxPrice);

    const [filteredProducts, setFilteredProducts] = useState(products);
    const [searchInput, setSearchInput] = useState('');



    // Function to apply the price range filters on button click
    const handleApplyFilter = () => {
        console.log("in apply filter")
        // dispatch(setMinPriceFilter({ minPrice: minPrice }));
        const filtered = filteredProducts.filter((product) => {
            return (product.price >= minPrice && product.price <= maxPrice)
        });
        setFilteredProducts(filtered);
    };

    // Function to reset filters and show all products
    const handleResetFilter = () => {
        setFilteredProducts(products);
        dispatch(setMinPriceFilter({ minPrice: 0 }))
        dispatch(setMaxPriceFilter({ maxPrice: 10000 }))
        setSearchInput('');
    };

    // Function to redirect to cart page
    const handleViewCart = () => {
        navigate('/cart', { cartItems });
    };

    // Function to change minimum price with change in input field
    const handleMinPriceChange = (e) => {
        console.log("min price changed")
        dispatch(setMinPriceFilter({ minPrice: Number(e.target.value) }))
    };

    // Function to change maximum price with change in input field
    const handleMaxPriceChange = (e) => {
        console.log("max price changed")
        dispatch(setMaxPriceFilter({ maxPrice: Number(e.target.value) }))
    };

    // Function to handle search input and filter products
    const handleSearchChange = (e) => {
        console.log("search input chagned");
        const query = e.target.value;
        setSearchInput(query);
        if (query === '') {
            setFilteredProducts(products);
        } else {
            const filtered = filteredProducts.filter((product) => {
                return (product.title.toLowerCase().includes(query.toLowerCase()))
            });
            setFilteredProducts(filtered);
        }
    };

    // Returning dynamic html page to display
    return (
        <div className='homepage-container'>
            <h2>ReduxBasket</h2>
            <div className='search-container'>
                <TextField id="standard-basic" label="Search products here…" placeholder="Search products here…" variant="standard"
                    value={searchInput} onChange={(e) => { handleSearchChange(e) }} sx={{ margin: "20px" }}
                />
                <TextField id="standard-basic" label="Minimum Price" type="number" InputLabelProps={{ shrink: true, }} helperText="Price Range" variant="standard"
                    value={minPrice} onChange={(e) => { handleMinPriceChange(e) }} sx={{ margin: "20px" }}
                />
                <TextField id="standard-basic" label="Maximum Price" type="number" InputLabelProps={{ shrink: true, }} variant="standard"
                    value={maxPrice} onChange={(e) => { handleMaxPriceChange(e) }} sx={{ margin: "20px" }}
                />
                <Button variant="solid" size="md" color="primary" aria-label="Explore Bahamas Islands"
                    onClick={handleApplyFilter} sx={{ padding: "20px", margin: "20px", alignSelf: 'center', fontWeight: 600 }}
                >
                    Apply Filter
                </Button>
                <Button variant="solid" size="md" color="primary" aria-label="Explore Bahamas Islands"
                    onClick={handleResetFilter} sx={{ padding: "20px", margin: "30px", alignSelf: 'center', fontWeight: 600 }}
                >
                    Reset Filters
                </Button>
            </div>
            <div className='filters-container'>
                <Button variant="solid" size="md" color="primary" aria-label="Explore Bahamas Islands"
                    onClick={handleResetFilter} sx={{ padding: "20px", margin: "30px", alignSelf: 'center', fontWeight: 600 }}
                >
                    Show All Products
                </Button>
                <Button variant="solid" size="md" color="primary" aria-label="Explore Bahamas Islands"
                    onClick={handleViewCart} sx={{ padding: "20px", margin: "30px", alignSelf: 'center', fontWeight: 600 }}
                >
                    View Cart
                </Button>
            </div>
            <div className='products-container'>
                <Container sx={{ padding: 2, display: "flex", justifyContent: "center", flexWrap: "wrap", paddingTop: "80px" }}>
                    {
                        filteredProducts.map((product, indx) => (
                            <div key={indx}>
                                <ProductCard {...product} />
                            </div>
                        ))
                    }
                </Container>
            </div>
        </div>
    );
};

export default Products;
