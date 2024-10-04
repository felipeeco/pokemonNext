import { CartCounter } from "../../shopping-cart/components";


export default function CounterPage() {

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <h1>Cart Products</h1>
      <CartCounter value={20} />
    </div>
  );
}