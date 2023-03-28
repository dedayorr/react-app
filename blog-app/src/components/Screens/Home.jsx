import React, { useEffect, useState } from "react";
import { Addblog } from "../Addblog/Addblog";
import { Bloglist } from "../Bloglist/Bloglist";
import { Modal } from "../Modal/Modal";
import { UpdateBlog } from "../UpdateBlog/UpdateBlog";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import { Controls, Player } from "@lottiefiles/react-lottie-player";
import {AiOutlineArrowRight} from "react-icons/ai"
import ScrollToTop from "react-scroll-to-top";

export const Home = () => {
  const [blogOpen, setBlogOpen] = useState(false);
  const [updateOpen, setUpdateOpen] = useState(false);
  const [blogs, setBlogs] = useState([]);
  // console.log(blogs)
  useEffect(() => {
    getBlogs();
  }, []);

  function getBlogs() {
    const blogs = localStorage.getItem("blogs");
    const blogsJSON = JSON.parse(blogs);
    setBlogs(blogsJSON);
  }

  // collecting ID
  const [identity, setIdentity] = useState(null);
  function collectId(id) {
    setIdentity(id);
  }
  return (
    <>
      <div className={styles.background}>
        <div className="absolute w-[100%] h-[450px] top-[100px] right-0 left-0 bg-[#0000007b] md:h-[600px] md:top-[105px]"></div>
        {/* <img src="./nature.jpg" alt='img'/> */}
        <p className="text-3xl text-center absolute top-[25%] text-[#FFF2F2] w-[90%] mx-[5%] md:text-6xl ">
          THE ART CHALLENGES THE TECHNOLOGY{" "}
          <span className="text-[#7b93f6]">
            AND THE TECHNOLOGY INPIRES THE ART.
          </span>
        </p>
      </div>
      <div
        className="bg-[#1c2d628e] w-[85%] mx-auto p-[5%] text-lg mt-[-140px] mb-[25px] z-10 text-center font-bold text-[#FFF2F2]  md:w-[80%] md:h-[450px] md:flex md:gap-[0px] md:mt-[-240px] md:p-[3%] justify-center items-center
      "
      >
        <div>
          <a
            className="hover:underline"
            href="https://www.wired.com/story/i-saw-the-face-of-god-in-a-tsmc-factory/"
            target="_blank"
          >
            <h1 className="font-serif font-extrabold text-3xl md:text-5xl">
              I Saw the Face of God in a Semiconductor Factory
            </h1>
          </a>
          <p className="text-sm md:text-xl">
            As the US boosts production of silicon chips, an American journalist
            goes inside TSMC, the mysterious Taiwanese company at the center of
            the global industry.
          </p>
          <p className="text-[10px] text-[#4e66c3]">VIRGINIA HEFFERMAN</p>
        </div>
        <div className=" md:hidden">
          <Player
            src="https://assets9.lottiefiles.com/private_files/lf30_ssAghj.json"
            background="transparent"
            speed="1"
            style={{ width: "280px", height: "250px" }}
            loop
            autoplay
          >
            <Controls visible={false} />
          </Player>
        </div>
        <div className="hidden md:block">
          <Player
            src="https://assets9.lottiefiles.com/private_files/lf30_ssAghj.json"
            background="transparent"
            speed="1"
            style={{ width: "500px", height: "400px" }}
            loop
            autoplay
          >
            <Controls visible={false} />
          </Player>
        </div>
      </div>

      <hr
        className="hidden md:block"
        style={{
          width: "100%",
          borderWidth: "1px",
          borderBlockColor: "#000",
        }}
      ></hr>

      {/* SECTION TWO */}
      <div className="md:flex mb-[20px]">
        <div className="md:w-[30%]">
          <p className="bg-[#000] w-[85%] text-white mx-auto font-extrabold p-[1%] text-lg">
            Today's pick
          </p>

          <div className="mt-[20px] w-[85%] mx-auto flex flex-col gap-2">
            <img src="./tiktok.jpg" alt="img" />
            <a
              className="hover:underline"
              href="https://www.vox.com/technology/2023/3/21/23645362/tiktok-shou-zi-chew-congress-ban"
              target="_blank"
            >
              <p className="font-bold font-2xl">Is Tiktok Too Big To Ban?</p>
            </a>
            <p>
              TikTok CEO Shou Zi Chew will testify before Congress as the future
              of his app is in doubt. Or maybe it’s all just a lot of posturing.
            </p>
            <p className="font-serif text-[10px] text-[#4e66c3]">
              SARA MORRISON
            </p>
          </div>

          <div className="mt-[20px] w-[85%] mx-auto flex flex-col gap-2">
            <img src="./willAI.jpg" alt="img" />
            <a
              className="hover:underline"
              href="https://www.vox.com/technology/2023/3/16/23643806/ai-microsoft-word-powerpoint-office-google-artificial-intelligence-chatgpt-automation-jobs-work"
              target="_blank"
            >
              <p className="font-bold font-2xl">
                Will using AI make Microsoft Word better? We’re going to find
                out.
              </p>
            </a>
            <p>
              Microsoft and Google are rolling out AI features to write your
              memos and emails for you. But they’re far from perfect.
            </p>
            <p className="font-serif text-[10px] text-[#4e66c3]">
              Shirin Ghaffary and Rani Molla
            </p>
          </div>

          <div className="mt-[50px] w-[85%] mx-auto flex flex-col gap-3 mb-[20px]">
            <img src="./endsars.webp" alt="img" />
            <p className="font-serif text-sm">Youth wave</p>
            <a
              className="hover:underline font-bold"
              href="https://www.wired.com/story/four-people-tweeting-nigeria-politics-peter-obi/"
              target="_blank"
            >
              <p>'4 People Tweeting' Changed the Face of Nigerian Politics</p>
            </a>
            <p className="font-serif text-[10px] text-[#4e66c3]">
              OLATUNJI OLAIGBE
            </p>
          </div>
        </div>

        <div className="md:w-[70%] w-[85%] mx-auto">
          <p className="bg-[#000] p-[1%] text-white md:text-xl font-bold">
            NEUROSCIENCE
          </p>
          <p className="font-extrabold text-xl mt-[20px] md:text-4xl">
            4 brain technologies that will shape our future
          </p>
          <p className="text-blue-400 font-bold text-[13px] mt-[10px] mb-[10px] hover:underline">
            <a
              href="https://www.weforum.org/agenda/authors/murali-doraiswamy"
              target="_blank"
            >
              P. Murali Doraiswamy
            </a>{" "}
            <p className=" text-[#0008]">
              Professor of Psychiatry and Medicine, Duke University Medical
              Center
            </p>
          </p>
          <img className="md:hidden" src="./image4.jpeg" alt="img" />
          <div className="flex gap-3">
            <img
              className="hidden md:block"
              src="./image4.jpeg"
              width="700px"
              alt="img"
            />
            <p className=" hidden md:block">
              The race to decipher the workings of the human brain, and build
              new economies around it, is on. Today’s great entrepreneurs –
              people such as Paul Allen, Jeffrey Hawkins and Robin Li – believe
              that brain science can transform our lives. Li, the founder of
              Baidu, recently urged the Chinese government to launch a “China
              Brain” programme, which would apply neuroscience to a range of
              fields, from medical diagnostics to commercial robotics.While some
              of these applications seem far off, many are closer than you might
              realize. Here are five emerging technologies that offer a glimpse
              into the future promise of brain science.
            </p>
          </div>
          <div className="md:flex md:flex-wrap text-sm ">
            <div className="flex flex-col gap-2 mt-[20px] md:w-[50%]">
              <p className="font-bold">1. MIND MAPPING</p>
              <p>
                Scientists know that our neural circuits are intricately linked
                to normal behaviour – as well as to how that behaviour goes awry
                in cases of neurological diseases.{" "}
                <span className="text-blue-500">
                  An unprecedented global effort
                </span>{" "}
                has begun to map the brain’s functional and structural
                connections and understand how these maps change in diseases
                like Alzheimer’s and schizophrenia. Already, some brain scans
                can detect{" "}
                <span className="text-blue-500">
                  early signs of Alzheimer’s plaque
                </span>{" "}
                more than a decade before clinical symptoms appear, and others
                can reveal{" "}
                <span className="text-blue-500">consciousness patterns</span> in
                patients assumed to be brain dead.
              </p>
            </div>

            <div className="flex flex-col gap-2 mt-[20px] md:w-[50%]">
              <p className="font-bold">2. Brain-like Computer</p>
              <p>
                The next generation of computers, whose design has been informed
                by brain science, may reason, predict and react just like the
                human neocortex (an area of the brain known as the seat of
                intelligence). Cortical computing algorithms have already shown
                an ability to solve modern CAPTCHAs (widely used tests to
                distinguish humans from machines). Some algorithms, based on
                brain circuits,
                <span className="text-blue-500">
                  can recognize pictures
                </span>{" "}
                with the same success rate as macaque monkeys. Recently, an
                intelligent computer program in China{" "}
                <span className="text-blue-500">
                  scored better than many human adults on an IQ test
                </span>
                . And IBM’s Watson supercomputer, after sifting through millions
                of medical records and databases, has begun to help doctors
                choose treatment options for patients with complex needs. Next
                up: IBM is working on
                <span className="text-blue-500">
                  brain-inspired SyNAPSE chips
                </span>{" "}
                that use less energy but have a higher computing power than
                other chips. As these programs and chips get better at
                predicting behaviours, they will extend human cognitive
                abilities and blur the lines between man and machine.
              </p>
            </div>

            <div className="flex flex-col gap-2 mt-[20px] md:w-[50%]">
              <p className="font-bold">3. Brain prosthetics for patients</p>
              <p>
                As our understanding of the brain improves, so does our ability
                to control it and tap into its networks. Direct connections
                between the brain and machines – known as brain-computer
                interfaces (BCIs) – are already allowing paralysed patients to
                perform simple tasks such as turn thoughts into email or move
                their hand to hold a loved one. Other technologies send
                information from the outside world directly to the brain,
                allowing people with damaged ears and eyes to experience sights
                and sounds around them. And deep-brain stimulators can relieve
                the tremors of Parkinson’s disease and give cancer patients a
                break from intractable pain. Unlike purely mechanical
                prostheses, DARPA’s{" "}
                <span className="text-blue-500">
                  Revolutionizing Prosthetics
                </span>
                programme is working to develop neurally controlled robotic arms
                to give amputees near-natural motor and sensory capabilities. As
                these prosthetics get better, they’ll continue to{" "}
                <span className="text-blue-500">
                  improve the lives of people
                </span>{" "}
                with a variety of conditions.
              </p>
            </div>

            <div className="flex flex-col gap-2 mt-[20px] md:w-[50%]">
              <p className="font-bold">
                4. Brain interfaces for the rest of us
              </p>
              <p>
                Brain-connected devices aren’t just promising to change life for
                patients with physical or neurological conditions; they’re also
                finding applications in the automobile, education, gaming, and
                security industries. An{" "}
                <span className="text-blue-500">attention-powered car</span>,
                developed in Australia, uses real-time sensors to monitor the
                driver’s concentration and slow the car down if fatigue or
                distraction is detected. Brainpal, a{" "}
                <span className="text-blue-500">BCI racing game</span> developed
                in Singapore, uses neurological feedback (also known as
                electrical or EEG feedback) to help improve a player’s
                attention.{" "}
                <span className="text-blue-500">Mind-controlled drones</span>{" "}
                already exist. And brain-controlled exoskeletons that vastly
                improve the strength and performance of factory workers aren’t
                far off.
              </p>
            </div>
          </div>
        </div>
      </div>

      <hr
        className="hidden md:block"
        style={{
          width: "100%",
          borderWidth: "1px",
          borderBlockColor: "#000",
        }}
      ></hr>

      {/* SECTION THREE  */}
      <div className="cursor text-[#4e66c3] font-bold text-2xl text-center">
        LATEST BLOGS
      </div>
      <hr
        style={{
          width: "30%",
          borderWidth: "2px",
          borderBlockColor: "#1c2e62",
          margin: "0 auto",
        }}
      ></hr>

      {blogOpen && (
        <Modal>
          <Addblog setBlogOpen={setBlogOpen} getBlogs={getBlogs}/>
        </Modal>
      )}

      {updateOpen && (
        <Modal>
          <UpdateBlog setUpdateOpen={setUpdateOpen} id={identity} />
        </Modal>
      )}

      <Bloglist
        blogs={blogs}
        getBlogs={getBlogs}
        setUpdateOpen={setUpdateOpen}
        collectId={collectId}
      />
      <br></br>
      <div className=" flex flex-col justify-center items-center md:flex-row md:gap-10">
        <button
          className="w-[25%] text-[#faf7f7] bg-[#4e66c3] p-[2%] rounded-md hover:bg-[#91a4f1c6] md:p-[1%] md:w-[10%]"
          onClick={() => setBlogOpen(true)}
        >
          Add Blogs
        </button>
        <div className="flex items-center p-[2%] text-center text-xl md:p-0 md:float-right hover:text-[#4e66c3]">
          <Link to="/blogpage">CLICK HERE TO SEE MORE BLOGS...</Link>
        </div>
      </div>
      <br></br>

      <hr
        className=""
        style={{
          width: "100%",
          borderWidth: "1px",
          borderBlockColor: "#000",
        }}
      ></hr>

      {/* SECTION FOUR */}
      <div className="mt-[20px]">
        <div className="p-[1%] bg-[#0f0f7dc7] text-white font-extrabold text-2xl w-[40%] mb-[20px] md:w-[30%]">
          BOOKS
        </div>

        <div className="w-[90%] mx-auto md:flex md:gap-10 mb-[20px]">
          <img
            className=" mt-[20px]"
            src="./newBooks.jpeg"
            alt="img"
            width={400}
          />

          <div className="mb-[20px]">
            <p className="mt-[10px]">
              A book is a medium for recording information in the form of
              <a
                className="text-blue-500"
                href="https://en.wikipedia.org/wiki/Writing"
              >
                {" "}
                writing
              </a>{" "}
              or images, typically composed of many pages (made of papyrus,
              parchment, vellum, or paper) bound together and protected by a
              cover. The technical term for this physical arrangement is
              <a
                className="text-blue-500"
                href="https://en.wikipedia.org/wiki/Codex"
              >
                {" "}
                Codex
              </a>{" "}
              (plural, codices). In the history of hand-held physical supports
              for extended written compositions or records, the codex replaces
              its predecessor, the scroll. A single sheet in a codex is a leaf
              and each side of a leaf is a page. As an intellectual object, a
              book is prototypically a composition of such great length that it
              takes a considerable investment of time to compose and still
              considered as an investment of time to read. In a restricted
              sense, a book is a self-sufficient section or part of a longer
              composition, a usage reflecting that, in antiquity, long works had
              to be written on several scrolls and each{" "}
              <a
                className="text-blue-500"
                href="https://en.wikipedia.org/wiki/Scroll"
              >
                scroll
              </a>{" "}
              had to be identified by the book it contained. Each part of
              Aristotle's Physics is called a book. In an unrestricted sense, a
              book is the compositional whole of which such sections, whether
              called books or chapters or parts, are parts.
            </p>
            <p className="hidden md:block">
              The intellectual content in a physical book need not be a
              composition, nor even be called a book. Books can consist only of
              drawings, engravings or photographs, crossword puzzles or cut-out
              dolls. In a physical book, the pages can be left blank or can
              feature an abstract set of lines to support entries, such as in an
              account book, appointment book,{" "}
              <a
                className="text-blue-500"
                href="https://en.wikipedia.org/wiki/Autograph_book"
              >
                autograph book
              </a>
              , notebook, diary or
              <a
                className="text-blue-500"
                href="https://en.wikipedia.org/wiki/Sketchbook"
              >
                sketchbook
              </a>
              . Some physical books are made with pages thick and sturdy enough
              to support other physical objects, like a scrapbook or photograph
              album. Books may be distributed in electronic form as{" "}
              <a
                className="text-blue-500"
                href="https://en.wikipedia.org/wiki/Ebook"
              >
                ebooks
              </a>{" "}
              and other formats. Although in ordinary academic parlance a{" "}
              <a
                className="text-blue-500"
                href="https://en.wikipedia.org/wiki/Monograph"
              >
                monograph
              </a>{" "}
              is understood to be a specialist academic work, rather than a
              reference work on a scholarly subject, in
              <a
                className="text-blue-500"
                href="https://en.wikipedia.org/wiki/Library_and_information_science"
              >
                library and information science
              </a>{" "}
              monograph denotes more broadly any non-serial publication complete
              in one volume (book) or a finite number of volumes (even a novel
              like Proust's seven-volume In Search of Lost Time), in contrast to
              serial publications like a magazine, journal or newspaper. An avid
              reader or collector of books is a{" "}
              <a
                className="text-blue-500"
                href="https://en.wikipedia.org/wiki/Bibliophilia"
              >
                bibliophile
              </a>{" "}
              or, colloquially, "bookworm". Books are traded at both regular
              stores and specialized bookstores, and people can read borrowed
              books, often for free, at libraries. Google has estimated that by
              2010, approximately 130,000,000 titles had been published. In some
              wealthier nations, the sale of printed books has decreased because
              of the increased usage of ebooks. Although in most countries
              printed books continue to outsell their digital counterparts due
              to many people still preferring to read in a traditional way. The
              21st century has also seen a rapid rise in the popularity of{" "}
              <a
                className="text-blue-500"
                href="https://en.wikipedia.org/wiki/Audiobook"
              >
                audiobooks
              </a>
              , which are recordings of books being read aloud.
            </p>
          </div>
        </div>

        <div className="mb-[20px]">
          <div className="text-[#4e66c3] font-bold text-2xl text-center ">
            LATEST FEATURES
          </div>
          <hr
            style={{
              width: "30%",
              borderWidth: "2px",
              borderBlockColor: "#1c2e62",
              margin: "0 auto",
            }}
          ></hr>
        </div>

        <div className="flex flex-col gap-8 border border-black md:flex md:flex-row w-[90%] mx-auto p-[5%] md:gap-5 md:p-[2%]">
          <div className="">
            <img src="./fatimahbook.jpeg" alt="img" />
            <div>
              <p className="font-bold hover:underline text-xl">
                <a href="https://www.booktrust.org.uk/news-and-features/features/2023/march/ten-terrific-picture-books-with-hijabi-characters/">
                  Ten terrific picture books with hijabi characters
                </a>
              </p>

              <p>
                Not Now, Noor! author Farhana Islam shares her top ten picture
                books that celebrate girls and women who wear a hijab.
              </p>

              <p className="text-sm text-blue-500">Farhana Islam </p>
            </div>
          </div>

          <div className="">
            <img src="./queen.jpeg" alt="img" />
            <div>
              <p className="font-bold hover:underline text-xl">
                <a href="https://www.booktrust.org.uk/news-and-features/features/2023/march/childrens-laureate-joseph-coelho-talks-with-the-queen-consort-about-the-power-of-poetry/">
                Children's Laureate Joseph Coelho talks with the Queen Consort about the power of poetry
                </a>
              </p>

              <p>
              To celebrate World Poetry Day, we brought together The Queen Consort, a BookTrust supporter, and Children’s Laureate Joseph Coelho to talk about their mutual love of poetry, the joy of reading poems out loud and Joseph’s aim to get all children reading and writing poetry through his Poetry Prompts weekly videos.
              </p>

              <p className="text-sm text-blue-500">Farhana Islam </p>
            </div>
          </div>

          <div className="">
            <img src="./childrenread.jpeg" alt="img" />
            <div>
              <p className="font-bold hover:underline text-xl">
                <a href="https://www.booktrust.org.uk/news-and-features/features/2023/march/if-you-want-children-to-read-let-them-read-what-they-love/">
                If you want children to read, let them read what they love!
                </a>
              </p>

              <p>
              Our Writer-in-Residence, SF Said, is passionate about allowing children to choose what they read, in order to keep the love of reading alive.
              </p>

              <p className="text-sm text-blue-500">Farhana Islam </p>
            </div>
          </div>

        </div>

        <div style={{boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px"}} className="bg-[#000] text-white p-[1%] w-[90%] mx-auto font-bold flex mt-[20px] md:w-[30%]">
          <p>
            BOOK SALES!!!
          </p>
          <p className="text-5xl">
            30% OFF
          </p>
        </div>

        <Link className="hover:text-blue-500 text-2xl flex justify-center items-center gap-3 mb-[20px]" to="/storepage">CLICK HERE TO BUY BOOKS <AiOutlineArrowRight/></Link>
       <div className="flex mx-auto justify-center items-center bg-blue-600" > <ScrollToTop smooth/></div>
      </div>
    </>
  );
};
