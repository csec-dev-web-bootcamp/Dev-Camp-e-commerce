
import Header from "../components/global/Header";
import Welcome from "../components/global/Welcome";
import Categories from "../components/global/Categories";




export default function Page() {
  return (

    <main className="w-full  mx-auto">
      <div className="w-full flex flex-col gap-4 ">
         <Welcome />
         <Categories />


      </div>
    </main>
  );
}
