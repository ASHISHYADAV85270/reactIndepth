import { useDispatch, useSelector } from "react-redux";
import { CategoryCard } from "./RestaurantCategory";
import { clearCart } from "../utils/cartSlice";
const CartPage = () => {
  const cartItems = useSelector((appStore) => appStore.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div
      className={
        " min-h-[calc(100vh-96px)]  flex flex-col justify-start items-center gap-2"
      }
    >
      <h3 className="text-3xl text-red-700 font-extrabold font-serif mt-2">
        Cart Items
      </h3>

      <div className="w-1/2 ">
        {cartItems.map((item, index) => {
          return (
            <CategoryCard
              curr_ele={item}
              type="remove"
              key={item?.card?.info?.id}
            />
          );
        })}
      </div>
      {cartItems.length ? (
        <button
          onClick={handleClearCart}
          type="button"
          className="box-border bg-red-500 hover:bg-transparent hover:border-2  hover:text-red-500 text-white font-bold py-2 px-4  border-2 border-red-500 rounded"
        >
          Clear Cart
        </button>
      ) : (
        <h3 className="text-3xl text-red-400 font-extrabold font-serif">
          No Item Added To Cart
        </h3>
      )}
    </div>
  );
};

export default CartPage;
