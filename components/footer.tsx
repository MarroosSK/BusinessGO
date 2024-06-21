const Footer = () => {
  return (
    <footer className="mt-[30px] pt-12 pb-12 border-t">
      {/* top */}
      <div className="container">
        <div className=" flex flex-col sm:flex-row items-center justify-between">
          <div className=" flex flex-col  justify-center">
            <div className="flex flex-row items-center justify-center sm:justify-start animate-breeze">
              <div className="leading-[20px]">
                <h2 className="text-[25px] text-[#ff5b31] font-semibold tracking-widest animate-breeze">
                  Business<span className="text-[#6b2615] font-bold">GO</span>
                </h2>
              </div>
            </div>
          </div>

          <div className="mt-5 sm:mt-0 flex flex-col items-center justify-center">
            <p className="text-[#ff5b31]">created by Marroos</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
