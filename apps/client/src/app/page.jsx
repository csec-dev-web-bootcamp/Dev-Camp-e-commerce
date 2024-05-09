// import Welcome from "../components/ui/welcome";
import Cart from "../components/global/cart";
import { SheetDemo } from "./sheet";
import Shop from "../components/global/shop";


export default function Page() {
  return (
    <main className="w-full max-w-7xl mx-auto">
      <div className="w-full flex-column gap-4 ">
          <Cart/>
          <SheetDemo/>
      </div>
    </main>
  );
}
