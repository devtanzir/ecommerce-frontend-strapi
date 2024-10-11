import Image from "next/image";
import Office1 from "@/public/office-long-1.png"
import Office2 from "@/public/office-long-2.png"
import Team from "@/components/shared/team";
import BreadCrumbComponents from "@/components/shared/breadCrumbComponents";

const About = () => {
  return (
    <>
      <section className="bg-white">
      <BreadCrumbComponents/>
        
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">

          <div className="font-light text-gray-500 sm:text-lg">
            
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">
              We didn&apos;t reinvent the wheel
            </h2>
            <p className="mb-4">
              We are strategists, designers and developers. Innovators and
              problem solvers. Small enough to be simple and quick, but big
              enough to deliver the scope you want at the pace you need. Small
              enough to be simple and quick, but big enough to deliver the scope
              you want at the pace you need.
            </p>
            <p>
              We are strategists, designers and developers. Innovators and
              problem solvers. Small enough to be simple and quick.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <Image
              className="w-full rounded-lg"
              src={Office2}
              alt="office content 1"
              width={284}
              height={394}
            />
            <Image
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src={Office1}
              alt="office content 1"
              width={284}
              height={394}
            />
          </div>
        </div>
        <Team/>
      </section>
    </>
  );
};

export default About;
