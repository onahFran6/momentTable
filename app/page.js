import BeamDetailsForm from "../components/BeamDetailsForm";

const Home = () => {
  return (
    <div className="flex-center flex-col flex h-screen py-4">
      {" "}
      <div className="flex flex-col  justify-center items-center   ">
        <h1 className="head_text text-center orange_gradient font-bold">
          MomentTable
          {/* <br className="max-md:hidden" /> */}
        </h1>

        <p className="desc text-center ">
          MomentTable is a powerful and intuitive web application designed
          specifically for structural engineers and students to quickly generate
          accurate moment distribution tables for simple supported beams.
        </p>
      </div>
      <div className="flex flex-col  justify-center items-center  ">
        <header className="bg-gray-200 py-4">{/* Header content */}</header>
        <main className="flex">
          <BeamDetailsForm />
        </main>
      </div>
    </div>
  );
};

export default Home;
