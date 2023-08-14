import { footerLinks } from "../../constant";

const Footerbar = () => {
  return (
    <footer className="px-10 pt-12 pb-16 bg-[#2d314d]">
      <section className=" max-w-[1500px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-5">
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-32 items-center">
          <div className="flex flex-col gap-5 lg:gap-10">
            <img src="/images/logo-white.svg" className="" alt="logo" />

            <div className="flex gap-5">
              <img src="/images/icon-facebook.svg" alt="" />
              <img src="/images/icon-youtube.svg" alt="" />
              <img src="/images/icon-twitter.svg" alt="" />
              <img src="/images/icon-pinterest.svg" alt="" />
              <img src="/images/icon-instagram.svg" alt="" />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {footerLinks.map((link: string, i: number) => {
              return (
                i <= 2 && (
                  <p className="text-white hover:text-[#31d35c] cursor-pointer text-center lg:text-left">
                    {link}
                  </p>
                )
              );
            })}
          </div>

          <div className="flex flex-col gap-3">
            {footerLinks.map((link: string, i: number) => {
              return (
                i >= 3 && (
                  <p className="text-white hover:text-[#31d35c] cursor-pointer text-center lg:text-left">
                    {link}
                  </p>
                )
              );
            })}
          </div>
        </div>

        <div className="flex flex-col items-center lg:items-end gap-5 lg:gap-10">
          <button className="bg-gradient-to-r from-[#31d35c] to-[#2bb7da] py-3 px-9 text-white font-semibold text-lg rounded-full hover:brightness-110">
            Request Invite
          </button>

          <p className="text-[#9698a6]">© Easybank. All Rights Reserved</p>
        </div>
      </section>
    </footer>
  );
};

export default Footerbar;
