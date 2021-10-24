import "./Checkout.css";

const Checkout = (props) => {
  return (
    <form>
      <div className="control">
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name"></input>
      </div>
      <div className="control">
        <label htmlFor="street">Street</label>
        <input type="text" id="street"></input>
      </div>
      <div className="control">
        <label htmlFor="postal">Postal code</label>
        <input type="text" id="postal"></input>
      </div>
      <div className="control">
        <label htmlFor="city">City</label>
        <input type="text" id="city"></input>
      </div>
      <button onClick={props.onClose}>Cancel</button>
      <button>Confirm</button>
    </form>
  );
};
export default Checkout;
