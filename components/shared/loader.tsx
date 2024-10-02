

const Loader = () => {
    return (
        <div className="bg-white w-full h-screen flex justify-center items-center">
            <h1 className="w-[250px] h-[50px] leading-[50px] text-center absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] uppercase font-black text-black tracking-[0.2em] before:block before:w-[15px] before:h-[15px] before:bg-black before:absolute before:animate-loader before:top-0  after:block after:w-[15px] after:h-[15px] after:bg-black after:absolute after:animate-loader after:bottom-0">Loading</h1>
        </div>
    );
};

export default Loader;