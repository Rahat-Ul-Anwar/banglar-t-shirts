import './TShirt.css';

const TShirt = ({ tshirt , handleAddToCart}) => {
    const { _id, picture, name, price } = tshirt;
    return (
        <div className="tshirt">
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>Price: ${price}</p>
            <button onClick={() => handleAddToCart(tshirt)} className='add-cart-btn'>Add To Cart</button>
            
        </div>
    );
};

export default TShirt;