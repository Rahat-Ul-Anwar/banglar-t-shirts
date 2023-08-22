import "./Cart.css";

const Cart = ({ cart, handleRemoveItem }) => {


    let message;
    if (cart.length === 0) {
         message = <h4>Please add some product</h4>
    }

    else {
        message = <div>
            <h3>Borolox</h3>
            <p>Thanks for wasting some money</p>
        </div>
    }
  return (
    <div className="cart">
          <h3>Order Summery : {cart.length}</h3>
          {message}
          
          {
                cart.length > 2 ? <span className="orange"> aro kichu kino </span> : <span>Fokira</span>
          }
      {cart.map((pd) => (
        <div className="product" key={pd._id}>
          <h5>{pd.name}</h5>
          <button
            onClick={() => handleRemoveItem(pd._id)}
            className="remove-button"
          >
            X
          </button>
        </div>
      ))}
          
          {
              cart.length === 2 && <p>Double Bonanja!!</p>
          }

          {
              cart.length === 3 || <p>3 Ta hoilo na</p>
          }
    </div>
  );
};

export default Cart;
