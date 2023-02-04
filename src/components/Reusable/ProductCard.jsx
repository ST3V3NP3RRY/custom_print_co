import ProductPhoto from "../../assets/images/patterned_mug.jpeg";
import Button from "./Button";

const ProductCard = () => {
  return (
    // To do make product card responsive on smaller viewports

    <div className="flex  h-80">
      <img src={ProductPhoto} alt="patterend mug" className="rounded-l-3xl" />

      <div className="p-8 bg-slate-200 rounded-r-3xl max-w-sm min-w-sm flex flex-col justify-center">
        <h3 className="text-3xl mb-5 ">Product title</h3>

        <p className="text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div className="flex items-center justify-between gap-4 mt-8">
          <h4>Product Price</h4>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
