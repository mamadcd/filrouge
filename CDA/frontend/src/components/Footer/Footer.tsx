const Footer = () => {
  return (
    <div className="w-full flex md:flex-row flex-col md:gap-0 gap-8 items-center justify-between py-6 px-10 border-t border-slate-300 border-dashed">
      <span className="font-medium text-slate-700">
        Copyright &copy;2024 Coup d'acier. Tous droits réservés.
      </span>
      <div className="flex lg:flex-row flex-col lg:items-center items-start lg:gap-8 gap-3">
        <a
          href="#"
          className="font-medium whitespace-nowrap md:text-[10.5px] text-gray-600 hover:text-blue-600"
        >
          Terms and Conditions
        </a>

        <a
          href="#"
          className="font-medium whitespace-nowrap md:text-[10.5px] text-gray-600 hover:text-blue-600"
        >
          Long Term Contract
        </a>

        <a
          href="#"
          className="font-medium whitespace-nowrap md:text-[10.5px] text-gray-600 hover:text-blue-600"
        >
          Copyright Policy
        </a>

        <a
          href="#"
          className="font-medium whitespace-nowrap md:text-[10.5px] text-gray-600 hover:text-blue-600"
        >
          Customers Support
        </a>
      </div>
    </div>
  );
};

export default Footer;
