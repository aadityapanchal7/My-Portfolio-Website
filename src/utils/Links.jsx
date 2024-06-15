import { FaGithub, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import React from 'react';

export const Links = [
  {
    path: "https://github.com/aadityapanchal7",
    icon: <FaGithub className=" size-6"/>,
  },
  {
    path: "https://instagram.com/aadii.p7",
    icon: <FaInstagramSquare className=" size-6"/>,
  },
  {
    path: "https://www.linkedin.com/in/aaditya-panchal-3968202b5/",
    icon: <FaLinkedin className=" size-6 "/>,
  },
  {
    path: "mailto:aadityapanchal289@gmail.com",
    icon: <MdEmail className=" size-6 "/>,
  },
];