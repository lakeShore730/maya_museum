import Home from "../../pages/index";
import ProductDetails from "../../pages/product-details";
import ContactUs from "../../pages/contact-us";
import Search from "../../pages/search";
import OriginalPaintings from "../../pages/original-paintings";
import Nft from "../../pages/nft";
import Statue from "../../pages/statue";
import Sculpture from "../../pages/sculpture";
import Cart from "../../pages/cart";
import Orders from "../../pages/orders";
import Account from "../../pages/account";
import PageNotFound from "../../pages/404";

const appRoutes = [
  {
    id: "home",
    path: "/",
    exact: true,
    component: Home,
    meta: {
      appLayout: true,
      privateRoute: false,
    },
  },

  {
    id: "product-details",
    path: "/products/:id",
    exact: true,
    component: ProductDetails,
    meta: {
      appLayout: true,
      privateRoute: false,
    },
  },

  {
    id: "contact-us",
    path: "/contact-us",
    exact: true,
    component: ContactUs,
    meta: {
      appLayout: true,
      privateRoute: false,
    },
  },

  {
    id: "search",
    path: "/search",
    exact: true,
    component: Search,
    meta: {
      appLayout: true,
      privateRoute: false,
    },
  },

  {
    id: "original-paintings",
    path: "/original-paintings",
    exact: true,
    component: OriginalPaintings,
    meta: {
      appLayout: true,
      privateRoute: false,
    },
  },

  {
    id: "nft",
    path: "/nft",
    exact: true,
    component: Nft,
    meta: {
      appLayout: true,
      privateRoute: false,
    },
  },

  {
    id: "statue",
    path: "/statue",
    exact: true,
    component: Statue,
    meta: {
      appLayout: true,
      privateRoute: false,
    },
  },

  {
    id: "sculpture",
    path: "/sculpture",
    exact: true,
    component: Sculpture,
    meta: {
      appLayout: true,
      privateRoute: false,
    },
  },

  {
    id: "account",
    path: "/account",
    exact: true,
    component: Account,
    meta: {
      appLayout: true,
      privateRoute: false,
    },
  },

  {
    id: "cart",
    path: "/cart",
    exact: true,
    component: Cart,
    meta: {
      appLayout: true,
      privateRoute: false,
    },
  },

  {
    id: "orders",
    path: "/orders",
    exact: true,
    component: Orders,
    meta: {
      appLayout: true,
      privateRoute: false,
    },
  },

  {
    id: "page-not-found",
    path: "*",
    exact: true,
    component: PageNotFound,
    meta: {
      appLayout: true,
      privateRoute: false,
    },
  },
];

export default appRoutes;
