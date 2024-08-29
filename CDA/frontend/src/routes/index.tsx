import { RouteObject } from "react-router";
import Layout from "../Layouts";
import Home from "../Pages/Home";
import Contact from "../components/Contacts/Contacts";
import Produits_acier from "../components/Types/Acier/Type_Acier";
import Produits_alu from "../components/Types/Alu/Type_Alu";
import Produits_inox from "../components/Types/Inox/Type_Inox";
import Produits_Galva from "../components/Types/Galva/Type_Galva";
import Produits_corten from "../components/Types/Corten/Type_Corten";
import Visiteur from "../components/Inscription/Visiteur";
import Professionnel from "../components/Inscription/Professionnel";
import Connexion from "../components/Connexion/Connexion";
import Dashboard from "../components/Dashbord/Dashbord";
import Panier from "../components/Panier/Panier";
import Favoris from "../components/Favoris/Favoris";

const routes: RouteObject[] = [
  {
    path: "/sign_up",
    element: <Visiteur />,
  },
  {
    path: "/sign_up_pro",
    element: <Professionnel />,
  },
  {
    path: "/login",
    element: <Connexion />,
  },
  {
    path: "/favoris",
    element: <Favoris />,
  },
  {
    path: "/panier",
    element: <Panier />,
  },
  {
    path: "/produit_acier",
    element: <Produits_acier />,
  },
  {
    path: "/GALVA en stock",
    element: <Produits_Galva />,
  },
  {
    path: "/inox",
    element: <Produits_inox />,
  },
  {
    path: "/alu",
    element: <Produits_alu />,
  },
  {
    path: "/corten",
    element: <Produits_corten />,
  },
  {
    path: "/contacts",
    element: <Contact />,
  },
  {
    path: "/Dashbord",
    element: <Dashboard />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        children: [{ path: "", element: <Home /> }],
      },
    ],
  },
];
export default routes;
