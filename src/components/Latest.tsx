import { latestArticles } from "../../constant";

const Latest = () => {
  return (
    <section className="bg-[#fafafa]">
      <div className="max-w-[1500px] mx-auto px-8 pt-12 sm:pt-16 md:pt-32 pb-20 md:pb-40">
        <h2 className="text-center lg:text-left text-3xl lg:text-5xl mb-6 md:mb-10 text-[#2d314d]">
          Latest Article
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-12">
          {latestArticles.map((article) => {
            return (
              <article className="group  flex flex-col rounded-md overflow-hidden hover:translate-y-[-20px] transition duration-300">
                <img
                  src={article.image}
                  alt=""
                  className="w-full h-[260px] object-cover group-hover:scale-110 transition duration-300"
                />
                <div className="relative flex flex-col p-6 md:p-8 bg-white">
                  <p className="text-[#9698a6] text-xs mb-2">
                    {article.author}
                  </p>
                  <h3 className="text-[#2d314d] group-hover:text-[#31d35c] text-lg md:text-xl mb-1 transition duration-300">
                    {article.title}
                  </h3>
                  <p className="text-[#9698a6] text-sm md:text-base">
                    {article.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Latest;
