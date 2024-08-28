import { FaEnvelope, FaLock } from "react-icons/fa";
const Connexion = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-white to-primary flex flex-col justify-center items-center py-4 pt-16">
      <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-2xl">
        <div className="text-center mb-6 bg-yellow-400 rounded-md p-2 shadow-sm">
          <h1 className="text-3xl font-bold text-black shadow-2xl">
            Coup d'acier
          </h1>
        </div>
        <h2 className="text-2xl font-extrabold text-center mb-4">Connexion</h2>
        <form className="space-y-4">
          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
            <span className="bg-green-700 p-3">
              <FaEnvelope className="text-white" />
            </span>
            <input
              type="email"
              placeholder="Adresse mail"
              className="w-full px-4 py-2 focus:outline-none"
              required
            />
          </div>

          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
            <span className="bg-green-700 p-3">
              <FaLock className="text-white" />
            </span>
            <input
              type="password"
              placeholder="Mot de passe"
              className="w-full px-4 py-2 focus:outline-none"
              required
            />
          </div>

          <button className="w-full bg-green-700 hover:bg-green-600 hover:font-extrabold text-white py-2 rounded-lg mt-4">
            Se connecter
          </button>
        </form>
        <div className="text-end mt-1">
          <a href="#" className="text-green-700 hover:text-green-500 underline">
            Mot de passe oublié ?
          </a>
        </div>
        <div className="text-center mt-2">
          <p>Ou</p>
        </div>
        <div className="lg:space-x-4 lg:space-y-0 space-y-0 mt-4 flex lg:flex-row flex-col">
          <a
            href="/sign_up"
            className="w-full bg-green-700 text-white py-2 rounded-lg text-center"
          >
            Créer un compte
          </a>
          <a
            href="/sign_up_pro"
            className="w-full bg-green-700 text-white py-2 rounded-lg text-center"
          >
            Créer un professionnel
          </a>
        </div>
      </div>
    </div>
  );
};

export default Connexion;
