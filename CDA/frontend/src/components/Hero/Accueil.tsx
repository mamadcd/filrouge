import Acier from "../../assets/acier.jpeg";
import Alu from "../../assets/Alu.jpeg";
import Galva from "../../assets/Galva.jpeg";
import Inox from "../../assets/Inox.jpeg";
import Corten from "../../assets/Corten.jpeg";
import banner from "../../assets/sky3.jpg";

const categories = [
  { image: Acier, name: "Acier", path: "/produit_acier", aosDelay: 200 },
  { image: Alu, name: "Alu", path: "/alu", aosDelay: 400 },
  { image: Galva, name: "Galva", path: "/GALVA en stock", aosDelay: 600 },
  { image: Inox, name: "Inox", path: "/inox", aosDelay: 800 },
  { image: Corten, name: "Corten", path: "/corten", aosDelay: 1000 },
];

const Hero = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="">
        <div
          className="relative w-full h-[460px] flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: `url(${Acier})` }}
        >
          <div className="absolute inset-0 bg-black opacity-55"></div>
          <div className="relative z-10">
            <h1 className="text-white text-3xl mb-3 text-center">Bienvenue</h1>
            <div>
              <p className="text-white text-center">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
                cumque omnis quae, sequi magni, maxime at rem quo esse earum
                aperiam optio ex quasi excepturi nobis. Repellat ratione culpa
                obcaecati?
                <a href="#" className="text-primary font-semibold">
                  {" "}
                  Learn more
                </a>
              </p>
            </div>
          </div>
        </div>
        <h1 className="text-black text-3xl font-extrabold text-center">
          Categorie de Produit
        </h1>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-primary py-3 px-2">
          {categories.map((category) => (
            <div
              data-aos="fade-up"
              data-aos-delay={category.aosDelay}
              key={category.name}
              className="bg-white rounded-lg shadow-xl flex flex-col items-center relative max-w-[400px]
             hover:shadow-lg hover:shadow-black transition-all duration-500 cursor-pointer hover:scale-[1.05]"
            >
              <a
                href={category.path}
                className="w-full h-48 object-cover rounded-lg"
              >
                {" "}
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-48 object-cover rounded-lg p-4"
                />
              </a>
              <h2 className="mt-2 text-xl text-center font-semibold bg-primary/70 w-full">
                {category.name}
              </h2>
            </div>
          ))}
        </div>
      </main>
      {/* Banner */}
      <div
        className="w-full md:h-[400px] h-[460px] my-20 bg-fixed bg-cover relative z-[1]"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundPosition: "bottom",
        }}
      >
        <div className=" w-full flex md:flex-row flex-col h-full items-center justify-between px-10 banner z-[3] md:py-0 py-5 text-center">
          <span className="text-white md:flex-[55px] text-[30px] font-semibold">
            Souscrivez pour recevoir des notifications sur nos nouveaux produits
            et services
          </span>
          <div className="flex md:flex-row flex-col items-center gap-10 md:mb-0 mb-2">
            <input
              type="email"
              placeholder="Email address here"
              className="md:w-[500px] w-[400px] border border-slate-400 outline-none px-3 py-3 rounded-[10px]"
            />
            <button className="bg-primary/80 px-6 py-3 text-white font-semibold shadow-md rounded-[10px] max-w-[250px] hover:bg-green-700">
              Rejoindre
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
