import Banner from "../../components/Reusable/Banner";

const Products = () => {
  return (
    <>
      <Banner text={"Our Products"} />
      <main className="flex flex-col flex-1 items-center justify-center">
        <section className=" max-w-6xl flex flex-wrap gap-8 justify-center my-8">
          <div className="inline-block">
            {/* image will go here */}
            <div className="w-56 h-48 bg-slate-200"></div>
            <h3>Product Name</h3>
            <p>£00.00</p>
          </div>

          <div className="inline-block">
            {/* image will go here */}
            <div className="w-56 h-48 bg-slate-200"></div>
            <h3>Product Name</h3>
            <p>£00.00</p>
          </div>

          <div className="inline-block">
            {/* image will go here */}
            <div className="w-56 h-48 bg-slate-200"></div>
            <h3>Product Name</h3>
            <p>£00.00</p>
          </div>

          <div className="inline-block">
            {/* image will go here */}
            <div className="w-56 h-48 bg-slate-200"></div>
            <h3>Product Name</h3>
            <p>£00.00</p>
          </div>

          <div className="inline-block">
            {/* image will go here */}
            <div className="w-56 h-48 bg-slate-200"></div>
            <h3>Product Name</h3>
            <p>£00.00</p>
          </div>

          <div className="inline-block">
            {/* image will go here */}
            <div className="w-56 h-48 bg-slate-200"></div>
            <h3>Product Name</h3>
            <p>£00.00</p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Products;
