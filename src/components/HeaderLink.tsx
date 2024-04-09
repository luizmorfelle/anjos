import React from "react";

type HeaderLinkProps = {
  title: string;
  idRef: string;
};

export default function HeaderLink(props: HeaderLinkProps) {
  return (
    <li>
      <a
        href={`#${props.idRef}`}
        className="hover:text-primary ease-in-out duration-200 relative hover:font-medium md:text-base text-lg"
      >
        {props.title}
      </a>
    </li>
  );
}
