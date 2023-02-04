import Banner from "../../components/Reusable/Banner";

const About = () => {
  return (
    <>
      <Banner text={"About Us"} />
      <section className="flex justify-center mt-12">
        <div className="bg-slate-200 rounded-lg w-96 h-64 rounded-lg"></div>
      </section>
    </>
  );
};

export default About;
