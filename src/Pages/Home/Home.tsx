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
            src="/passport.jpg"
            alt="passport"
            className="w-[25rem] h-[25rem] rounded-[50%]"
          />
        </section>
        <section className="mt-[14.25rem] mb-[4.4rem] lg:hidden flex flex-col items-center justify-center gap-[2rem]">
          <img
            src="/passport.jpg"
            alt="passport"
            className="rounded-[50%] w-[15rem] h-[15rem]"
          />
          <div>
            <h1 className="text-[1.9rem] font-bold mb-[2.37rem] text-center">
              Hi, I am <span className="text-[#2978b5]">Kafilat Adewumi,</span>
              <br /> A Frontend Developer.
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
        <section className="mb-[4.4rem]">
          <h2 className="text-center font-bold text-[2rem] mb-[2rem]">
            PROJECTS
          </h2>
          <div className="flex lg:flex-row flex-col flex-wrap items-center rounded-[5px] gap-[1.5rem]">
            <div className="lg:w-[25rem] max-w-max h-[20rem] border-2 px-[1rem] py-[1rem] flex items-center justify-center flex-col gap-[1rem]">
              <h2 className="font-bold text-[1.2rem]">Shoppia Project</h2>
              <p>
                Participated in building an e-commerce website tailored to
                campus needs and shopping experience while learning at ALX.
              </p>
              <p className="flex gap-[0.5rem] font-medium">
                <span>HTML</span>
                <span>CSS</span>
                <span>TailwindCSS</span>
                <span>Reactjs</span>
              </p>
              <div className="flex items-center gap-[1rem]">
                <a href="https://github.com/DevKaffy/Shoppia-project">
                  <img src="/github.svg" alt="" className="w-[2rem] h-[2rem]" />
                </a>
                <a href="https://shoppia-online.netlify.app/">
                  <img
                    src="/public/arrow-right-up-line.svg"
                    alt="arrow-up"
                    className="w-[2rem] h-[2rem]"
                  />
                </a>
              </div>
            </div>
            <div className="lg:w-[25rem] max-w-max h-[20rem] px-[1rem] py-[1rem] border-2 items-center flex flex-col gap-[1rem] justify-center rounded-[5px]">
              <h2 className="font-bold text-[1.2rem]">
                Loyal base landing page
              </h2>
              <p>An implementation of the Loyalbase landing page on figma.</p>
              <p className="flex gap-[0.5rem] font-medium">
                <span>HTML</span>
                <span>CSS</span>
                <span>TailwindCSS</span>
                <span>Reactjs</span>
              </p>
              <div className="flex items-center gap-[1rem]">
                <a href="https://github.com/DevKaffy/loyal-base">
                  <img src="/github.svg" alt="" className="w-[2rem] h-[2rem]" />
                </a>
                <a href=" https://loyal-baze.netlify.app/ ">
                  <img
                    src="/public/arrow-right-up-line.svg"
                    alt="arrow-up"
                    className="w-[2rem] h-[2rem]"
                  />
                </a>
              </div>
            </div>
            <div className="lg:w-[25rem] max-w-max h-[20rem] border-2 items-center flex flex-col gap-[1rem] justify-center px-[1rem] py-[1rem] rounded-[5px]">
              <h2 className="font-bold text-[1.2rem]">Development Company</h2>
              <p>An implementation of a Figma file for practice.</p>
              <p className="flex gap-[0.5rem] font-medium">
                <span>HTML</span>
                <span>CSS</span>
                <span>TailwindCSS</span>
                <span>Reactjs</span>
              </p>
              <div className="flex items-center gap-[1rem]">
                <a href="https://github.com/DevKaffy/ReactProject-Company-Website?tab=readme-ov-file">
                  <img src="/github.svg" alt="" className="w-[2rem] h-[2rem]" />
                </a>
                <a href=" https://development-company.netlify.app/">
                  <img
                    src="/public/arrow-right-up-line.svg"
                    alt="arrow-up"
                    className="w-[2rem] h-[2rem]"
                  />
                </a>
              </div>
            </div>
            <div className="lg:w-[25rem] max-w-max h-[20rem] border-2 items-center flex flex-col gap-[1rem] justify-center px-[1rem] py-[1rem] rounded-[5px]">
              <h2 className="font-bold text-[1.2rem]">Fake Store</h2>
              <p>
                Fetched an e-commerce API from Fake Store using Axios Library.
              </p>
              <p className="flex gap-[0.5rem] font-medium">
                <span>HTML</span>
                <span>CSS</span>
                <span>TailwindCSS</span>
                <span>Reactjs</span>
              </p>
              <div className="flex gap-[1rem] items-center">
                <a href="https://github.com/DevKaffy/products-api">
                  <img
                    src="/github.svg"
                    alt="products-api"
                    className="w-[2rem] h-[2rem]"
                  />
                </a>
                <a href="https://products-api-ui.netlify.app/">
                  <img
                    src="/public/arrow-right-up-line.svg"
                    alt="arrow-up"
                    className="w-[2rem] h-[2rem]"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
