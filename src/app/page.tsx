import CategoriesList from "@/components/CategoriesList";
import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";
import { Suspense } from "react";

const HomePage = () => {
  return (
    <div className=" ">
      <Slider />
      <div className="md:px-8 px-4 lg:px-16 xl-32 2xl:px-64 py-16 ">
        <h1 className="py-8 text-3xl">Featured Products</h1>
        <Suspense fallback={"Loading ..."}>
          <ProductList
            categoryId={process.env.NEXT_PUBLIC_CATIGORY_ID}
            limit={4}
          />
        </Suspense>
      </div>
      <div className=" ">
        <h1 className="md:px-8 px-4 lg:px-16 xl-32 2xl:px-64 py-16 text-3xl">
          Categories
        </h1>
        <CategoriesList />
      </div>
      <div className="md:px-8 px-4 lg:px-16 xl-32 2xl:px-64 py-16 ">
        <h1 className="py-8 text-3xl">New Products </h1>
        {/* <ProductList /> */}
      </div>
    </div>
  );
};

export default HomePage;
