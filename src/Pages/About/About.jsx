import Banner from "../../components/Reusable/Banner";

const About = () => {
  return (
    <>
      <Banner text={"About Us"} />
      <section className="flex justify-center mt-12">
        <div className="bg-slate-300 rounded-lg w-96 h-64"></div>
      </section>
    </>
  );
};

export default About;
