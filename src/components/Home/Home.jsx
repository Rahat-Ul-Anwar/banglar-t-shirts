
import {useLoaderData} from 'react-router-dom'
import TShirt from '../TShirt/TShirt';
import './Home.css';
import Cart from '../Cart/Cart';
import { useState } from 'react';
import { toast } from 'react-hot-toast';

const Home = () => {
    const tshirts = useLoaderData();
    const [cart, setCart] = useState([]);



    const handleAddToCart = (tshirt) => {
        const exist = cart.find(ts => ts._id === tshirt._id);

        if (exist) {
            toast('You have already added T shirt')

        }
        else {
            
            const newCart = [...cart, tshirt];
            setCart(newCart);

        }
            
           
            
        
        
    };

    const handleRemoveItem = (id) => {
        const remaining = cart.filter(pd => pd._id !== id);
        setCart(remaining);
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
                };
            </div>

            <div className='cart-container'>

                <Cart cart={cart}
                    handleRemoveItem={handleRemoveItem}
                >

                </Cart>

            </div>
        </div>
    );
};

export default Home;