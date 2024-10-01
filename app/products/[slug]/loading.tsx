import BreadCrumbComponents from "@/components/shared/breadCrumbComponents";

const Loading = () => {
  return (
    <>
      <BreadCrumbComponents />
      <section className="py-8 bg-white md:py-16 antialiased">
        <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
            <div className="shrink-0 max-w-md lg:max-w-lg mx-auto bg-gray-300 rounded animate-pulse w-[500px] h-[500px]"></div>

            <div className="mt-6 sm:mt-8 lg:mt-0 animate-pulse">
              <div className="bg-gray-300 rounded h-10 w-full mb-4"></div>
              <div className="bg-gray-300 rounded h-10 w-full"></div>
              <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                <div className="bg-gray-300 rounded h-10 w-16"></div>

                <div className="flex items-center gap-2 mt-2 sm:mt-0">
                  <div className="flex items-center gap-1">
                    <div className="bg-gray-300 rounded h-5 w-24"></div>
                  </div>
                  <div className="bg-gray-300 rounded h-5 w-32"></div>
                </div>
              </div>

              <div className="mt-6 gap-4 items-center flex sm:mt-8">
                <div className="bg-gray-300 rounded h-9 w-8"></div>
                <div className="bg-gray-300 rounded h-10 w-32"></div>
              </div>

              <hr className="my-6 md:my-8 border-gray-200" />
              <div className="bg-gray-300 w-full h-52 rounded"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Loading;
