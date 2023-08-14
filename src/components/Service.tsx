import { services } from "../../constant";

const Service = () => {
  return (
    <section className="bg-[#f3f4f6]">
      <div className="max-w-[1500px] mx-auto px-8 pt-12 sm:pt-16 md:pt-32 pb-20 md:pb-40">
        <h2 className="text-center lg:text-left text-3xl lg:text-5xl mb-3 md:mb-10 text-[#2d314d]">
          Why choose Easybank?
        </h2>

        <p className="text-center lg:text-left text-base lg:text-xl text-[#9698a6]">
          We leverage Open Banking to turn your bank account into your financial
          hub. <br className="hidden lg:flex" /> Control your finances like
          never before.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mg:gap-14 mt-14 md:mt-20">
          {services.map((service) => {
            return (
              <article className="group hover:translate-y-[-20px] transition duration-300	">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-18 md:w-24 mb-6 md:mb-12 mx-auto lg:mx-0"
                />
                <h3 className="text-center lg:text-left text-xl md:text-3xl text-[#2d314d] group-hover:text-[#31d35c] transition duration-300 mb-3 md:mb-8">
                  {service.title}
                </h3>
                <p className="text-center lg:text-left text-[#9698a6] text-sm md:text-xl">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Service;
