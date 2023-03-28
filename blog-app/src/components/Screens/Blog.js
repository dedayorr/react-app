import React from "react";
import "./Blog.modules.css";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import ScrollToTop from "react-scroll-to-top";
import { BsArrowRight } from "react-icons/bs";

export const Blog = () => {
  function truncate(str, num) {
    if (str.length > num) {
      str = str.substring(0, num) + "...";
    }
    return str;
  }
  return (
    <>
      <div className=" ">
        {/* ====FIRST SECTION=== */}

        <div className="md:flex">
          <div className=" md:hidden">
            <Player
              src="https://assets3.lottiefiles.com/packages/lf20_eKikFJ.json"
              background="transparent"
              speed="1"
              style={{ width: "350px", height: "400px" }}
              loop
              autoplay
            >
              <Controls visible={false} />
            </Player>
          </div>
          <div className=" flex-1 hidden md:block lg:hidden p-[5%]">
            <Player
              src="https://assets3.lottiefiles.com/packages/lf20_eKikFJ.json"
              background="transparent"
              speed="1"
              style={{ width: "400px", height: "500px" }}
              loop
              autoplay
            >
              <Controls visible={false} />
            </Player>
          </div>
          <div className=" flex-1 hidden lg:block p-[5%]">
            <Player
              src="https://assets3.lottiefiles.com/packages/lf20_eKikFJ.json"
              background="transparent"
              speed="1"
              style={{ width: "600px", height: "600px" }}
              loop
              autoplay
            >
              <Controls visible={false} />
            </Player>
          </div>

          <div className="">
            <p className="rotate text-6xl ml-[-80%] font-extrabold lg:text-8xl md:text-5xl ">
              Most popular
            </p>

            <div className=" border w-[89%] relative top-0 right-0 left-10 p-[2%] bg-[#7285d3a9] text-white lg:w-[70%] md:w-[80%] lg:gap-[10px] md:gap-[px] md:flex md:flex-col md:rounded-2xl">
              <p className="font-bold ">Most popular:</p>
              <br></br>
              <div className="hover:text-[#4e66c3] flex gap-5 font-bold ">
                <div className="border rounded-full h-[24px] w-[40px] text-center">
                  1
                </div>
                <a
                  href="https://www.theverge.com/2023/3/18/23618649/noninvasive-blood-glucose-monitoring-wearables-smartwatches"
                  target="_blank"
                >
                  If you’re diabetic, don’t wait for your smartwatch to replace
                  your needles
                </a>
              </div>
              <hr></hr>
              <br></br>

              <div className="hover:text-[#4e66c3] flex gap-5 font-bold">
                <div className="border rounded-full h-[24px] w-[40px] text-center">
                  2
                </div>
                <a
                  href="https://www.theverge.com/2023/3/17/23644501/microsoft-copilot-ai-office-documents-microsoft-365-report"
                  target="_blank"
                >
                  Microsoft’s new Copilot will change Office documents forever
                </a>
              </div>
              <hr></hr>
              <br></br>

              <div className="hover:text-[#4e66c3] flex gap-5 font-bold">
                <div className="border rounded-full h-[24px] w-[32px] text-center">
                  3
                </div>
                <a
                  href="https://www.theverge.com/2023/3/17/23644792/amazon-swarm-review-donald-glover-janine-nabers"
                  target="_blank"
                >
                  Amazon’s Swarm is so close to being brilliant
                </a>
              </div>
              <hr></hr>
              <br></br>

              <div className="hover:text-[#4e66c3] flex gap-5 font-bold">
                <div className="border rounded-full h-[24px] w-[49px] text-center">
                  4
                </div>
                <a
                  href="https://www.theverge.com/23636586/apple-pencil-2nd-generation-knockoff-clone-budget-review"
                  target="_blank"
                >
                  This Apple Pencil clone provides 80 percent of the experience
                  for a quarter of the price
                </a>
              </div>
              <hr></hr>
              <br></br>
              <div className="hover:text-[#4e66c3] flex gap-5 font-bold">
                <div className="border rounded-full h-[24px] w-[40px] text-center">
                  5
                </div>
                <a
                  href="https://www.theverge.com/2023/3/16/23643047/vw-id-2-all-ev-price-photo-specs"
                  target="_blank"
                >
                  VW beats Tesla to the punch and unveils an affordable electric
                  vehicle
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* =====SECTION SECTION==== */}

        <div className="mt-[20px] bg-[#000000e4] text-white p-[5%] mb-[10px]">
          <p className="90% text-center font-bold">
            The latest tech news about the world's best software and many more.
            From the top to little start ups. Blogify has the lastest in what
            matters everyday
          </p>
        </div>
        <hr></hr>
        <div className="md:grid md:grid-cols-2 lg:grid lg:grid-cols-4 mb-[20px]">
          <div
            className="flex flex-col gap-2 bg-[#000] w-[90%] mx-auto p-[5%] text-white mt-[20px] justify-between rounded-2xl"
            style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
          >
            <a
              href="https://www.theverge.com/2023/3/17/23644501/microsoft-copilot-ai-office-documents-microsoft-365-report"
              target="_blank"
            >
              <p className="font-extrabold text-2xl text-[#4e66c3] hover:underline">
                {truncate(
                  "Microsoft’s new Copilot will change Office documents forever",
                  100
                )}
              </p>
            </a>
            <img src="./microsoft.jpg" alt="img" />
            <p>
              Copilot is more than just a chatbot. Microsoft is gradually
              building an AI assistant that it has dreamed about for years.
            </p>
            <p className="font-bold text-[#4e66c3]">By TOM WARREN </p>
            <p className="text-sm">Mar 17, 2023, 3.06 PM</p>
          </div>

          <div
            className="flex flex-col gap-2 bg-[#f3f4f7a9] w-[90%] mx-auto p-[5%] text-white mt-[20px] justify-between rounded-2xl"
            style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
          >
            <a
              href="https://www.theverge.com/2023/3/20/23648343/agility-robotics-digit-next-gen-bipedal-bot"
              target="_blank"
            >
              <p className="font-extrabold text-2xl text-[#4e66c3] hover:underline">
                {truncate(
                  "This human-size robot now has ‘eyes’ that show people where it’s going",
                  100
                )}
              </p>
            </a>
            <img src="./robotics.jpg" alt="img" />
            <p className="text-black">
              The latest version of Digit comes with a head and a pair of
              animated LED eyes.
            </p>
            <p className="font-bold text-[#4e66c3]">By EMMA ROTH </p>
            <p className="text-sm text-black">Mar 20, 2023, 9.27 PM</p>
          </div>

          <div
            className="flex flex-col gap-2 bg-[#4e65c34e] w-[90%] mx-auto p-[5%] text-white mt-[20px] justify-between rounded-2xl"
            style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
          >
            <a
              href="https://www.engadget.com/us-authorities-arrest-alleged-breachforums-owner-and-fbi-hacker-pompompurin-170009266.html"
              target="_blank"
            >
              <p className="font-extrabold text-2xl text-[#000] hover:underline">
                {truncate(
                  "US authorities arrest alleged BreachForums owner and FBI hacker Pompompurin",
                  60
                )}
              </p>
            </a>
            <img src="./fbi.jpg" alt="img" />
            <p>
              For the time being, the dark web forum is still up and running.
            </p>
            <p className="font-bold text-[#000]">By BONIFAIC </p>
            <p className="text-sm">Mar 28, 2023, 3.06 PM</p>
          </div>

          <div
            className="flex flex-col gap-2 bg-[#000] w-[90%] mx-auto p-[5%] text-white mt-[20px] justify-between rounded-2xl"
            style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
          >
            <a
              href="https://www.engadget.com/this-insertable-3d-printer-will-repair-tissue-damage-from-the-inside-185147733.html"
              target="_blank"
            >
              <p className="font-extrabold text-2xl text-[#4e66c3] hover:underline">
                {truncate(
                  "This insertable 3D printer will repair tissue damage from the inside",
                  80
                )}
              </p>
            </a>
            <img src="./pin.jpg" alt="img" />
            <p>It can also make incisions and clean up with water jets.</p>
            <p className="font-bold text-[#4e66c3]">By W.SHANKLIN </p>
            <p className="text-sm">Mar 17, 2023, 6.06 PM</p>
          </div>
        </div>
      </div>

      {/* ====THIRD SECTION==== */}

      <div className="bg-[#000] p-[5%] mb-[20px] md:flex md:gap-[40px]">
        <div className="md:">
          <p className="underline text-white font-bold my-[20px]">Digital</p>
          <div className="bg-white rounded-lg p-[3%]">
            <p className="text-xl text-center font-extrabold underline mb-[20px]">
              LATEST REVIEWS
            </p>

            <div className="flex flex-col gap-[20px] text-lg">
              <div className="flex gap-[5px]">
                <img src="./latest1.jpg" alt="img" width={100} />
                <a
                  href="https://www.digitaltrends.com/gaming/tchia-review-pc-epic-games-store/"
                  target="_blank"
                >
                  <p className="hover:text-[#4e66c3] ">
                    Tchia review: beautiful open-world indie is a new
                    coming-of-age classic
                  </p>
                </a>
              </div>

              <hr></hr>

              <div className="flex gap-[5px]">
                <img src="./latest2.webp" alt="img" width={100} />
                <a
                  href="https://www.digitaltrends.com/movies/boston-strangler-2023-movie-review/"
                  target="_blank"
                >
                  {" "}
                  <p className="hover:text-[#4e66c3]">
                    Boston Strangler review: a middling true crime drama
                  </p>
                </a>
              </div>

              <hr></hr>

              <div className="flex gap-[5px]">
                <img src="./latest3.jpg" alt="" width={100} />
                <a
                  href="https://www.digitaltrends.com/movies/inside-2023-movie-review/"
                  target="_blank"
                >
                  <p className="hover:text-[#4e66c3]">
                    Inside review: a dour, ill-conceived psychological drama
                  </p>
                </a>
              </div>

              <hr></hr>

              <div className="flex gap-[5px]">
                <img src="./latest4.jpg" alt="img" width={100} />
                <a
                  href="https://www.digitaltrends.com/gaming/resident-evil-4-review-ps5/"
                  target="_blank"
                >
                  <p className="hover:text-[#4e66c3]">
                    Resident Evil 4 review: all-time horror classic gets the
                    bold remake it deserves
                  </p>
                </a>
              </div>

              <hr></hr>

              <div className="flex gap-[5px]">
                <img src="./latest5.jpg" alt="img" width={100} />
                <a
                  href="https://www.digitaltrends.com/home-theater/klipsch-the-sevens-review/"
                  target="_blank"
                >
                  <p className="hover:text-[#4e66c3]">
                    Klipsch The Sevens review: skip the AVR and subwoofer; this
                    is all you need
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="md:flex-2">
          <div className="border mt-[20px]">
            <img src="./cyber2.png" alt="img" width={700} />
          </div>
          <div>
            <p className="font-extrabold text-4xl text-white mt-[10px] mb-[10px]">
              These Android apps are spying on you — and there’s no easy way to
              stop them
            </p>
          </div>
          <hr></hr>
          <div>
            <div className="flex gap-[5px] mt-[10px]">
              <img
                className="md:hidden"
                src="./computing.webp"
                alt="img"
                width={100}
              />
              <img
                className="hidden md:block"
                src="./computing.webp"
                alt="img"
                width={200}
              />
              <a
                href="https://www.digitaltrends.com/computing/bitwarden-autofill-may-be-unsafe/"
                target="_blank"
              >
                <p className="hover:text-[#4e66c3] text-white font-bold md:text-2xl">
                  If you use this free password manager, your passwords might be
                  at risk
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ======FOURTH SECTION===== */}
      <div className="w-[90%] lg:flex lg:w-[90%] mx-auto">
        <div className="flex flex-col gap-7 mt-[50px] mb-[50px] w-[90%] lg:w-[70%] mx-auto">
          <p className="text-xl hover:text-[#4e66c3]">
            <a
              href="https://venturebeat.com/enterprise-analytics/the-difference-between-application-observability-and-data-observability/"
              target="_blank"
            >
              The difference between application observability and data
              observability
            </a>
            <hr
              className=""
              style={{
                width: "40%",
                borderWidth: "1px",
                borderBlockColor: "#006",
              }}
            ></hr>
          </p>

          <p className="text-xl hover:text-[#4e66c3]">
            <a
              href="https://mashable.com/ad/article/data-leaks-breach-protection"
              target="_blank"
            >
              Protect yourself against data leaks and breaches
            </a>
            <hr
              className=""
              style={{
                width: "40%",
                borderWidth: "1px",
                borderBlockColor: "#006",
              }}
            ></hr>
          </p>

          <p className="text-xl hover:text-[#4e66c3]">
            <a
              href="https://venturebeat.com/data-infrastructure/an-open-data-lakehouse-will-maintain-and-grow-the-value-of-your-data/"
              target="_blank"
            >
              An open data lakehouse will maintain and grow the value of your
              data
            </a>
            <hr
              className=""
              style={{
                width: "40%",
                borderWidth: "1px",
                borderBlockColor: "#006",
              }}
            ></hr>
          </p>

          <p className="text-xl hover:text-[#4e66c3]">
            <a
              href="https://venturebeat.com/ai/data-through-a-prism-ai-powered-analysis-key-to-gleaning-data-insights/"
              target="_blank"
            >
              Data through a prism: AI-powered analysis key to gleaning data
              insights
            </a>
            <hr
              className=""
              style={{
                width: "40%",
                borderWidth: "1px",
                borderBlockColor: "#006",
              }}
            ></hr>
          </p>

          <p className="text-xl hover:text-[#4e66c3]">
            <a
              href="https://mashable.com/article/openai-chatgpt-bug-exposed-user-data-privacy-breach"
              target="_blank"
            >
              The ChatGPT bug exposed more private data than previously thought,
              OpenAI confirms
            </a>
            <hr
              className=""
              style={{
                width: "40%",
                borderWidth: "1px",
                borderBlockColor: "#006",
              }}
            ></hr>
          </p>
          <p className="font-bold text-lg hover:text-[#4e66c3]">
            <a href="https://mashable.com/tech">MORE ON TECH </a>
            <BsArrowRight />
          </p>
        </div>

        <div className=" mx-auto lg:mt-[-40px] hidden md:block">
          <Player
            src="https://assets4.lottiefiles.com/packages/lf20_mhdn5srg.json"
            background="transparent"
            speed="1"
            style={{ width: "400px", height: "500px" }}
            loop
            autoplay
          >
            <Controls visible={false} />
          </Player>
        </div>
      </div>

      {/* =====GALLERY==== */}
      <div className=" w-[90%] mx-auto ">
        <div className="font-extrabold text-5xl my-[10px] font-serif">NATURES GALLERY</div>
        <div className="grid gap-[20px] mb-[20px] lg:grid lg:grid-cols-3">
          <img className="lg:w-[100%] lg:h-[500px]" src="nature1.jpg" alt="" />
          <img className="lg:w-[100%] lg:h-[500px]" src="nature2.jpg" alt="" />
          <img className="lg:w-[100%] lg:h-[500px]" src="nature3.jpg" alt="" />
          <img className="lg:w-[100%] lg:h-[350px]" src="nature4.jpg" alt="" />
          <img className="lg:w-[100%] lg:h-[350px]" src="nature5.jpg" alt="" />
          <img className="lg:w-[100%] lg:h-[650px]" src="nature6.jpg" alt="" />
          <img className="lg:w-[100%] lg:h-[285px] lg:mt-[-73%]" src="nature7.jpeg" alt="" />
          <img className="lg:w-[100%] lg:h-[285px] lg:mt-[-73%]" src="nature8.jpeg" alt="" />
        </div>
      </div>
      <div className="">
        <ScrollToTop />
      </div>
    </>
  );
};
