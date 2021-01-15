import React from "react";
import Image from "next/image";
import { Link } from "components/Link";
import { Flex } from "components/Flex";

export const Footer = () => (
  <>
    <hr className="my-10" />
    <Flex as="footer" className="items-center justify-center mb-10">
      <Image
        className="rounded-full"
        src="/avatar.jpg"
        alt="Maurizio Pireddu avatar"
        width="80px"
        height="80px"
      ></Image>
      <Flex className="flex-col ml-5">
        <p>Maurizio Pireddu is a developer currently living in Dublin</p>
        <div>
          <Link
            href="https://twitter.com/mauriziopireddu"
            className="text-red-500"
          >
            Twitter
          </Link>
          <span className="mx-2">|</span>
          <Link
            href="https://www.instagram.com/mauriziopireddu/"
            className="text-red-500"
          >
            Instagram
          </Link>
        </div>
      </Flex>
    </Flex>
  </>
);
