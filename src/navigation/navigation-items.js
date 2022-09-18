import {
  Archive,
  Briefcase,
  Edit,
  Gift,
  Home,
  Key,
  Layers,
  PhoneCall,
  Search,
} from "react-feather";

export const leftNavigationItems = [
  {
    id: "home",
    name: "Home",
    path: "/",
    Icon: (props) => <Home {...props} />,
  },

  {
    id: "original_paintings",
    name: "Original Paintings",
    path: "/original-paintings",
    Icon: (props) => <Gift {...props} />,
  },

  {
    id: "nft",
    name: "NFT",
    path: "/nft",
    Icon: (props) => <Layers {...props} />,
  },

  {
    id: "statue",
    name: "Statue",
    path: "/statue",
    Icon: (props) => <Briefcase {...props} />,
  },

  {
    id: "sculpture",
    name: "Sculpture",
    path: "/sculpture",
    Icon: (props) => <Archive {...props} />,
  },

  {
    id: "search",
    name: "Search",
    path: "/search",
    Icon: (props) => <Search {...props} />,
  },
];

export const rightNavigationItems = [
  {
    id: "contact",
    name: "Contact",
    path: "/contact-us",
    Icon: (props) => <PhoneCall {...props} />,
  },

  {
    id: "register",
    name: "Register",
    path: "/register",
    Icon: (props) => <Edit {...props} />,
  },

  {
    id: "login",
    name: "Login",
    path: "/login",
    Icon: (props) => <Key {...props} />,
  },
];
