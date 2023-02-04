import Banner from "../../components/Reusable/Banner";

import { AiOutlineHeart } from "react-icons/ai";

const Products = () => {
  return (
    <>
      <Banner text={"Our Products"} />
      <main className="flex flex-col flex-1 items-center justify-center">
        <section className=" max-w-6xl flex flex-wrap gap-8 justify-center my-8">
          <div className="inline-block">
            {/* image will go here */}
            <div className="w-56 h-48 bg-slate-200 rounded-lg mb-2"></div>
            <div className="flex gap-3 justify-between items-center">
              <div className="text-left">
                <h3>Product Name</h3>
                <p>£00.00</p>
              </div>
              <AiOutlineHeart size="1.75rem" />
            </div>
          </div>

          <div className="inline-block">
            {/* image will go here */}
            <div className="w-56 h-48 bg-slate-200 rounded-lg mb-2"></div>
            <div className="flex gap-3 justify-between items-center">
              <div className="text-left">
                <h3>Product Name</h3>
                <p>£00.00</p>
              </div>
              <AiOutlineHeart size="1.75rem" />
            </div>
          </div>
          <div className="inline-block">
            {/* image will go here */}
            <div className="w-56 h-48 bg-slate-200 rounded-lg mb-2"></div>
            <div className="flex gap-3 justify-between items-center">
              <div className="text-left">
                <h3>Product Name</h3>
                <p>£00.00</p>
              </div>
              <AiOutlineHeart size="1.75rem" />
            </div>
          </div>
          <div className="inline-block">
            {/* image will go here */}
            <div className="w-56 h-48 bg-slate-200 rounded-lg mb-2"></div>
            <div className="flex gap-3 justify-between items-center">
              <div className="text-left">
                <h3>Product Name</h3>
                <p>£00.00</p>
              </div>
              <AiOutlineHeart size="1.75rem" />
            </div>
          </div>

          <div className="inline-block">
            {/* image will go here */}
            <div className="w-56 h-48 bg-slate-200 rounded-lg mb-2"></div>
            <div className="flex gap-3 justify-between items-center">
              <div className="text-left">
                <h3>Product Name</h3>
                <p>£00.00</p>
              </div>
              <AiOutlineHeart
                size="1.75rem"
                className="hover:bg-slate-300  rounded-full"
              />
            </div>
          </div>

          <div className="inline-block">
            {/* image will go here */}
            <div className="w-56 h-48 bg-slate-200 rounded-lg mb-2"></div>
            <div className="flex gap-3 justify-between items-center">
              <div className="text-left">
                <h3>Product Name</h3>
                <p>£00.00</p>
              </div>
              <AiOutlineHeart size="1.75rem" />
            </div>
          </div>

          <div className="inline-block">
            {/* image will go here */}
            <div className="w-56 h-48 bg-slate-200 rounded-lg mb-2"></div>
            <div className="flex gap-3 justify-between items-center">
              <div className="text-left">
                <h3>Product Name</h3>
                <p>£00.00</p>
              </div>
              <AiOutlineHeart size="1.75rem" />
            </div>
          </div>

          <div className="inline-block">
            {/* image will go here */}
            <div className="w-56 h-48 bg-slate-200 rounded-lg mb-2"></div>
            <div className="flex gap-3 justify-between items-center">
              <div className="text-left">
                <h3>Product Name</h3>
                <p>£00.00</p>
              </div>
              <AiOutlineHeart size="1.75rem" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Products;
