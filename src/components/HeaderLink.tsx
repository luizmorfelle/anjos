import React from "react";
import { Link } from "react-scroll";

type HeaderLinkProps = {
  title: string;
  idRef: string;
};

export default function HeaderLink(props: HeaderLinkProps) {
  return (
    <li>
      <Link
        to={props.idRef}
        offset={-100}
        className="hover:text-primary ease-in-out duration-200 relative hover:font-medium md:text-base text-lg"
      >
        {props.title}
      </Link>
    </li>
  );
}
