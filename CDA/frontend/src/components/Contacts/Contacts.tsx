import clavier from "../../assets/clavier.webp";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div
        className="w-full flex items-center justify-center lg:justify-center gap-1 pt-16 bg-cover bg-center"
        style={{
          backgroundImage: `url(${clavier})`,
        }}
      >
        <div className="w-full md:mb-0">
          <div className="shadow-lg flex items-center justify-center py-40 bg-black opacity-60 bg-opacity-80 rounded-lg">
            <div className="text-3xl text-indigo-500 text-center font-bold">
              <h2 className="md:text-5xl text-3xl font-extrabold text-white opacity-100 mb-2">
                Contactez-nous
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="h-auto">
        <section className="w-full justify-center ">
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-center flex-wrap gap-3 mt-3 lg:h-auto">
            <div className="bg-white p-4 rounded-lg md:w-full max-w-lg w-full lg:w-1/3 shadow-sm flex-1 h-full">
              <h2 className="text-2xl text-indigo-500 font-bold mb-4">
                Besoin d'un médecin pour un contrôle ou pour vous faire
                consulter ?
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Il vous suffit de prendre rendez-vous en ligne et le tour est
                joué !
              </p>
              <div className="text-gray-700 mb-4">
                Obtenez votre devis ou appelez :{" "}
                <a href="tel:+237697584110">
                  <strong>(+237) 697.58.41.10</strong>
                </a>
                <p className="font-serif">
                  Lancer un appel en cliquant sur le bouton ci-dessous et prenez
                  un rendez-vous
                </p>
              </div>
              <div className="flex justify-center bg-blue-500 rounded-xl md:rounded-full text-center text-white font-semibold items-center shadow-md hover:text-gray-300 lg:w-auto md:w-auto md:text-white shadow-black">
                <img src={clavier} alt="phone" className="h-10" />
                <a href="tel:+237697584110" className="">
                  Appeler
                </a>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg md:w-full max-w-lg w-full lg:w-1/3 shadow-md flex-1 h-full">
              <div className="p-9 rounded-lg">
                <h2 className="text-2xl text-indigo-500 font-bold mb-4">
                  Informations de contact
                </h2>
                <p className="p-4">
                  <strong>Email :</strong> contact@exemple.com
                </p>
                <p className="p-4">
                  <strong>Téléphone :</strong> +237 123 456 7890
                </p>
                <p className="p-4">
                  <strong>Adresse :</strong> 123 Rue de l'Exemple, Ville, Pays
                </p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg md:w-full max-w-lg w-full lg:w-1/3 shadow-sm flex-1 h-full">
              <form className="" method="POST">
                <h2 className="text-2xl text-indigo-500 font-bold mb-4">
                  Envoyez-nous un message par mail
                </h2>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Votre Adresse Email :
                  </label>
                  <input
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                    type="email"
                    id="email"
                    name="email"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Objet
                  </label>
                  <input
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                    type="text"
                    id="objet"
                    name="objet"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Votre Message :
                  </label>
                  <textarea
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                    id="message"
                    name="message"
                    placeholder="Mon message..."
                    required
                  ></textarea>
                </div>
                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring shadow-lg shadow-blue-500/50 my-auto"
                  type="submit"
                >
                  Envoyer
                </button>
              </form>
            </div>
          </div>
        </section>
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <h1 data-aos="fade-up" className="text-2xl text-primary font-bold">
            Notre Localisation
          </h1>
          <p data-aos="fade-up" className="text-sm text-gray-400">
            Si jamais vous avez besoin de rencontrer un spécialiste de santé,
            n'hésitez pas à vous rendre dans nos locaux en suivant l'itinéraire
            décrit sur la carte ci-dessous
          </p>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345096633!2d144.953735315589!3d-37.816279442021826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43e7a2a0b7%3A0x5045675218ce6e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sau!4v1614769893437!5m2!1sen!2sau"
          width="100%"
          height="450"
          title="Notre localisation"
          allowfullscreen=""
          loading="lazy"
        >
          Notre localisation
        </iframe>
      </div>
    </div>
  );
};

export default Contact;
