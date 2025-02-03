import kitchenQuest from "/src/assets/images/KitchenQuest.webp";
import restCountries from "/src/assets/images/RestCountries.webp";
import acc from "/src/assets/images/acc-square.webp";
import codecompass from "/src/assets/images/codecompass.webp";
import sunnyside from "/src/assets/images/sunnyside-desktop.webp";
import Projects from "../ui/Projects";
import Heading from "../ui/Heading";

export default function Works({ forwardedRef }) {
  return (
    <section
      ref={forwardedRef}
      id="works"
      className="nav-change overflow-hidden my-[10%]"
    >
     <Heading title="Projects" />
      <div className="mt-10 grid grid-cols-1 gap-16 gap-y-10 md:grid-cols-12">
        {/* Project #1 */}
        <div className=" col-span-1 md:col-span-8">
          <Projects
            link="https://iamernesto14.github.io/CodeCompass/"
            img={codecompass}
            alt="screenshot of codecompass"
            name="CodeCompass"
            type="Web Design • Frontend Development"
            year="2025"
            tools="HTML • TailwindCSS • JavaScript • React.js"

          />
        </div>
        {/* Project #2 */}
        <div className="col-span-1 pt-0 md:col-span-7 md:pt-16">
          <Projects
             link="https://iamernesto14.github.io/KitchenQuest/"
             img={kitchenQuest}
             alt="KitchenQuest"
             name="KitchenQuest"
             type="Web Design • Frontend Development"
             year="2025"
             tools="HTML • TailwindCSS • JavaScript • React.js"
          />
        </div>
        <div className="col-span-1 pt-0 md:col-span-5 md:pt-80">
          <Projects
            link="https://realbusinessaccountants.netlify.app"
            img={acc}
            alt="real business accountant project mockup"
            name="real business accountants"
            type="Web Design • Frontend Development"
            year="2023"
            tools="HTML • CSS • JavaScript • Figma"
          />
        </div>
        <div className="col-span-1 h-fit pt-0 md:col-span-8 md:pt-20">
          <Projects
            link="https://ernest-countries-app.netlify.app/"
            img={restCountries}
            alt="RestCountries project site"
            name="RestCountries"
            type="Frontend Development"
            year="2023"
            tools="HTML • TailwindCSS • JavaScript, React.js"
          />
        </div>
        <div className="col-span-1 h-fit md:col-span-4">
        <Projects
            link="https://sunnysidechallenge.netlify.app"
            img={sunnyside}
            alt="sunnyside project mockup"
            name="SUNNYSIDE LANDING PAGE"
            type="Frontend Development"
            year="2022"
            tools="React.js • JavaScript"
          />
         
        </div>
      </div>
    </section>
  );
}
