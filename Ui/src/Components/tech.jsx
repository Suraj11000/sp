import { useState } from "react";
import html from "../assets/html-5.png";
import CSSLogo from "../assets/css-3.png";
import jsLogo from "../assets/js.png";
import reactLogo from "../assets/react.png";
import angu from "../assets/angular.png";
import vj from "../assets/vuejs.png";
import ns from "../assets/next-js.svg";
import ts from "../assets/typescript.png";
import bs from "../assets/bootstrap.png";
import tail from "../assets/tailwind-css.svg";
import jq from "../assets/jquery.png";
import al from "../assets/alpine.svg";
import node from "../assets/node-js.png";
import php from "../assets/php.png";
import lv from "../assets/laravel.svg";
import pt from "../assets/python.png";
import flask from "../assets/flask.svg";
import dj from "../assets/django-logo-positive.png";
import ruby from "../assets/ruby.png";
import java from "../assets/java.png";
import flutter from "../assets/flutter.svg";
import rn from "../assets/react-native.png";
import swift from "../assets/swift.png";
import wp from "../assets/wordpress.png";
import wc from "../assets/woocommerce.png";
import sp from "../assets/shopify.png";
import dp from "../assets/drupal.png";

const Tech = () => {
  const [activeTab, setActiveTab] = useState("Front-End");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const technologies = {
    "Front-End": [
      { name: "HTML", logo: html },
      { name: "CSS", logo: CSSLogo },
      { name: "Javascript", logo: jsLogo },
      { name: "ReactJS", logo: reactLogo },
      { name: "Angular", logo: angu },
      { name: "VueJS", logo: vj },
      { name: "NextJs", logo: ns },
      { name: "Typescript", logo: ts },
      { name: "Bootstrap", logo: bs },
      { name: "Tailwind Css", logo: tail },
      { name: "Jquery", logo: jq },
      { name: "Alpine", logo: al },
    ],
    "Back-End": [
      { name: "NodeJS", logo: node },
      { name: "PHP", logo: php },
      { name: "Laravel", logo: lv },
      { name: "Python", logo: pt },
      { name: "Flask", logo: flask },
      { name: "Django", logo: dj },
      { name: "Ruby", logo: ruby },
      { name: "Java", logo: java },
    ],
    "App": [
      { name: "Java", logo: java },
      { name: "Flutter", logo: flutter },
      { name: "React Native", logo: rn },
      { name: "Swift", logo: swift },
    ],
    "CMS": [
      { name: "WordPress", logo: wp },
      { name: "Woocommerce", logo: wc },
      { name: "Shopify", logo: sp },
      { name: "Drupal", logo: dp },
    ]
  };

  return (
    <div className="px-4 md:px-10 lg:px-20 xl:px-32">
      <ul className="flex flex-wrap justify-center items-center gap-10 py-6">
        {Object.keys(technologies).map((category) => (
          <li
            key={category}
            className={`text-lg md:text-xl font-semibold px- cursor-pointer ${
              activeTab === category ? "text-black border-b-4 border-b-[#457b9d]" : "text-gray-400 hover:text-black"
            }`}
            onClick={() => handleTabClick(category)}
          >
            {category}
          </li>
        ))}
      </ul>
      <hr className="border-t border-[#4c7188] mb-8" />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        {technologies[activeTab].map((tech) => (
          <div key={tech.name} className="text-center border-2 rounded-xl py-6">
            <img src={tech.logo} alt={tech.name} className="h-16 mx-auto mb-2" />
            <span className="text-gray-600 font-bold">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tech;
