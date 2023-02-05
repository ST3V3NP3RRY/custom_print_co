import Banner from "../../components/Reusable/Banner";

const About = () => {
  return (
    <>
      <Banner text={"About Us"} />
      <section className="flex justify-center mt-12">
        <div className="bg-slate-200 rounded-lg w-96 h-64 rounded-lg"></div>
        <p className="w-96 text-justify ml-8">
          We're a family run business specialising in custom made printed
          products. We love flexing our creative muscles to provide .
        </p>
      </section>
    </>
  );
};

export default About;
