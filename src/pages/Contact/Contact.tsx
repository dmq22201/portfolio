import React from "react";
import styled from "styled-components";
import { IoLogoGithub, IoMail } from "react-icons/io5";

import PageHeading from "../../components/PageHeading/PageHeading";

const P = styled.p`
  display: flex;
  align-items: center;
  gap: 2rem;
  font-size: 4rem;
`;

const Link = styled.a`
  color: inherit;
  font-weight: 500;
  font-size: 1.6rem;
`;

const ContactWrapper = styled.div`
  display: flex;
  gap: 2rem;

  @media screen and (max-width: 61.99875em) {
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 47.99875em) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

const Contact: React.FunctionComponent = () => {
  return (
    <>
      <PageHeading>Contact Me</PageHeading>
      <ContactWrapper>
        <P>
          <IoMail />
          <Link href="mailto:dmq1817@gmail.com" target="_blank">
            dmq1817@gmail.com
          </Link>
        </P>
        <P>
          <IoLogoGithub />
          <Link href="https://github.com/dmq22201" target="_blank">
            dmq22201
          </Link>
        </P>
      </ContactWrapper>
    </>
  );
};

export default Contact;
