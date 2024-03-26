import Navbar from "../../Components/Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <main className="lg:mx-[9.28rem] mx-[2rem]">
        <section className="mt-[14.25rem] mb-[4.4rem] lg:flex hidden justify-between items-center">
          <div>
            <h1 className="text-[2.75rem] font-bold w-[31rem] mb-[2.37rem]">
              Hi, I am <span className="text-[#2978b5]">Kafilat Adewumi,</span>{" "}
              A Frontend Developer
            </h1>
            <p className="w-[50rem] mb-[2.37rem]">
              Highly motivated and results-driven Frontend Developer with 2
              years of experience in building and maintaining user-friendly and
              visually appealing websites. Proficient in HTML, CSS, JavaScript,
              Reactjs, TailwindCss and Typescript. I have a passion for creating
              intuitive and responsive web experiences that drive engagement and
              customer satisfaction. Committed to staying current with the
              latest industry trends and technologies, I am dedicated to
              delivering clean, efficient, and scalable code. Whether working
              independently or as part of a team, I always strive to produce
              high-quality work and exceed project expectations.
            </p>
            <a
              className="bg-[#2978b5] text-white px-[1.25rem] py-[0.5rem] rounded-[5px]"
              href="https://docs.google.com/document/d/1SIkcy3Aycq3LvX_Jo2vw5NBW3YaQgtmjcT0HSLQyMNQ/edit"
            >
              RESUME
            </a>
          </div>

          <img
            src="/public/passport.jpg"
            alt="passport"
            className="w-[25rem] h-[25rem] rounded-[50%]"
          />
        </section>
        <section className="mt-[14.25rem] mb-[4.4rem] lg:hidden flex flex-col items-center justify-center gap-[2rem]">
          <img
            src="/public/passport.jpg"
            alt="passport"
            className="rounded-[50%] w-[15rem] h-[15rem]"
          />
          <div>
            <h1 className="text-[1.9rem] font-bold mb-[2.37rem] text-center">
              Hi, I am <span className="text-[#2978b5]">Kafilat Adewumi,</span>{" "}
              A Frontend Developer.
            </h1>
            <p className="w-[20] mb-[2.37rem] text-center">
              Highly motivated and results-driven Frontend Developer with 2
              years of experience in building and maintaining user-friendly and
              visually appealing websites. Proficient in HTML, CSS, JavaScript,
              Reactjs, TailwindCss and Typescript. I have a passion for creating
              intuitive and responsive web experiences that drive engagement and
              customer satisfaction. Committed to staying current with the
              latest industry trends and technologies, I am dedicated to
              delivering clean, efficient, and scalable code. Whether working
              independently or as part of a team, I always strive to produce
              high-quality work and exceed project expectations.
            </p>
            <a
              className="bg-[#2978b5] text-white px-[1.25rem] py-[0.5rem] rounded-[5px] flex justify-center text-center"
              href="https://docs.google.com/document/d/1SIkcy3Aycq3LvX_Jo2vw5NBW3YaQgtmjcT0HSLQyMNQ/edit"
            >
              RESUME
            </a>
          </div>
        </section>
        <section>
          <h2 className="text-center font-bold text-[1.5rem]">PROJECTS</h2>
        </section>
      </main>
    </div>
  );
};

export default Home;
