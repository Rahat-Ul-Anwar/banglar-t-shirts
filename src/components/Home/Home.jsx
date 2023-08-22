
import {useLoaderData} from 'react-router-dom'
import TShirt from '../TShirt/TShirt';
import './Home.css';
import Cart from '../Cart/Cart';
import { useState } from 'react';

const Home = () => {
    const tshirts = useLoaderData();
    const [cart, setCart] = useState([]);



    const handleAddToCart = (tshirt) => {
        if (tshirt) {
            
            const newCart = [...cart, tshirt];
            setCart(newCart);
            
        }
        
    }
    return (
        <div className='home-container'>

            <div className='t-shirt-container'>
                {
                    tshirts.map(tshirt => <TShirt
                        key={tshirt._id}
                        tshirt={tshirt}
                        handleAddToCart={handleAddToCart}
                    >
                  
                        
                        </TShirt>)
                }
            </div>

            <div className='cart-container'>

                <Cart cart={cart}></Cart>

            </div>
        </div>
    );
};

export default Home;