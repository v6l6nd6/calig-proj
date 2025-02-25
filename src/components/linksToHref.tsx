import { JSX } from "react";

interface LinksProps {
  name: string | JSX.Element;
  to: string;
  id: number;
}

const Links: LinksProps[] = [
  { name: "About", to: "/about", id: 1 },
  { name: "Courses", to: "/courses", id: 2 },
  { name: "Collaboration", to: "/resouces", id: 5 },
  { name: "Shop", to: "/shop", id: 6 },
];

export default Links;
