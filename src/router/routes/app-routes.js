import { lazy } from "react";

const Home = lazy(() => import("../../pages/index"));
const ProductDetails = lazy(() => import("../../pages/product-details"));
const ContactUs = lazy(() => import("../../pages/contact-us"));
const Search = lazy(() => import("../../pages/search"));
const OriginalPaintings = lazy(() => import("../../pages/original-paintings"));
const Nft = lazy(() => import("../../pages/nft"));
const Statue = lazy(() => import("../../pages/statue"));
const Sculpture = lazy(() => import("../../pages/sculpture"));
const About = lazy(() => import("../../pages/about"));
const PageNotFound = lazy(() => import("../../pages/404"));

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
    id: "about",
    path: "/about",
    exact: true,
    component: About,
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
