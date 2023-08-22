import './Cart.css';

const Cart = ({cart}) => {
    return (
        <div className='cart'>
            <h3>Cart : {cart.length}</h3>
            <h2>Order Summery</h2>
        </div>
    );
};

export default Cart;