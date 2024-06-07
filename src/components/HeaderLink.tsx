import React from "react";
import { Link } from "react-scroll";

interface HeaderLinkProps {
  title: string;
  idRef: string;
  onClick?: () => void;
}

export default function HeaderLink(props: HeaderLinkProps) {
  return (
    <li>
      <Link
        onClick={() => props.onClick && props.onClick()}
        to={props.idRef}
        offset={-100}
        className="hover:text-primary ease-in-out duration-200 relative hover:font-medium md:text-base text-lg cursor-pointer"
      >
        {props.title}
      </Link>
    </li>
  );
}
