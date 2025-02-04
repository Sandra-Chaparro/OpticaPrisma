import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import "./Footer.css"

const sections = [
  {
    title: "Horario",
    items: [
      "Lunes - Viernes : ",
      "9 am- 1 pm  --- 3:30 pm-7 pm",
      "Sabado : 10am - 2:30pm",
      "Domingo : Cerrado",
    ],
  },
  {
    title: "Sucursal 1",
    items: [
      "Pedro de Lille #15 Plaza Prisma",
      "627 523 63 25",
      "(Frente a la central camionera)"
    ],
  },
  {
    title: "Sucursal 2",
    items: [
      "Plaza Juan Rangel",
      "627 522 60 05",
      "(Subiendo desnivel de AV. Juan Rangel)"
    ],
  },
];

const socialMedia = [
  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://www.facebook.com/profile.php?id=100063456665244",
  },,
  {
    name: "Instagram",
    icon: FaInstagram,
    link: "https://www.instagram.com/opticaprismaparral/",
  },
];

const Footer = () => {
  return (
    <div className="w-full mt-12 bg-white text-gray-300 py-1 px-2 footer">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-4 border-b-2 border-gray-600 py-4 gap-4 ">
        {" "}
        {/* Added gap-4 */}
        {sections.map((section, index) => (
          <div key={index}>
            <h6 className="font-bold uppercase pt-1">{section.title}</h6>
            <ul>
            {section.items.map((item, i) =>
                typeof item === "string" ? (
                  <li key={i} className="py-.5 text-white">
                    {item}
                  </li>
                ) : (
                  <li
                    key={i}
                    className="py-.5 text-gray-500 hover:text-white cursor-pointer"
                  >
                    <a href={item.link} className="hover:text-white">
                      {item.name}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        ))}
        {/* Fourth Column: Social Media */}
        <div>
          <h6 className="font-bold uppercase pt-1 ">Redes Sociales</h6>
          <div className="flex flex-col mt-2 space-y-2">
            {socialMedia.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-500 hover:text-black"
              >
                <item.icon className="text-white text-2xl" />
                <span className="text-white hover:text-white">
                  {item.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Centered footer text */}
      <div className="flex justify-center py-2 text-center text-white">
        <p>Optica Prisma Parral, Chihuahua</p>
      </div>
    </div>
  );
};

export default Footer;