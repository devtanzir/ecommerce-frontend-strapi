import { TeamSection } from "@/constants/team";
import Facebook from "../../public/icons/facebook";
import Twitter from "../../public/icons/twitter";
import Github from "../../public/icons/github";
import Dribble from "../../public/icons/dribble";

const Team = () => {
    return (
        <>

  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
      <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">Our Team</h2>
          <p className="font-light text-gray-500 lg:mb-16 sm:text-xl ">Explore the whole collection of open-source web components and elements built with the utility classes from Tailwind</p>
      </div> 
      <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
        {
            TeamSection.map(item => (
                <div className="items-center bg-gray-50 rounded-lg shadow sm:flex ">
              <a href="#">
                  <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={item.photo} alt={item.name}/>
              </a>
              <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900">
                      <a href="#">{item.name}</a>
                  </h3>
                  <span className="text-gray-500 ">{item.title}</span>
                  <p className="mt-3 mb-4 font-light text-gray-500 ">{item.description}</p>
                  <ul className="flex space-x-4 sm:mt-0">
                      <li>
                          <span className="text-gray-500 hover:text-gray-900 ">
                            <Facebook className="w-5 h-5"/>
                          </span>
                      </li>
                      <li>
                          <span className="text-gray-500 hover:text-gray-900 ">
                              <Twitter className="w-5 h-5"/>
                          </span>
                      </li>
                      <li>
                          <span className="text-gray-500 hover:text-gray-900 ">
                            <Github className="w-5 h-5"/>
                          </span>
                      </li>
                      <li>
                          <span className="text-gray-500 hover:text-gray-900 ">
                             <Dribble/>
                          </span>
                      </li>
                  </ul>
              </div>
          </div>
            ))
        }
      </div>  
  </div>
        </>
    );
};

export default Team;