import Link from "next/link";
import AboutMain from "../components/AboutMain/AboutMain";
import AboutStats from "../components/AboutStats/AboutStats";
import AboutTeam from "../components/AboutTeam/AboutTeam";
import Services from "../components/Services/Services";

const AboutPage = () => {
  return (
    <div className="container md:px-12 px-5 mx-auto my-20 mb-32">
      <h4 className="text-lg text-[#808080] mb-10">
        <Link href={"/"}>Home</Link> /{" "}
        <Link href={"/about"}>
          <span className="text-black"> About</span>
        </Link>
      </h4>
      <AboutMain />
      <AboutStats />
      <AboutTeam />
      <Services />
    </div>
  );
};

export default AboutPage;
