import { motion } from "framer-motion";
import React from "react";
import { footerVariants, textVariant2 } from "../utils/motion";
import Button from "./Button";

const footer = [
  {
    id: 1,
    logo: "logo",
    about:
      "SZSolar aims to provide best solar solutions, service and products to meet your needs.",
    social_icons: [
      {
        id: 1,
        image: "twitter-logo"
      },
      {
        id: 2,
        image: "facebook-logo"
      },
      {
        id: 3,
        image: "instagram-logo"
      },
    ],
  },
  {
    id: 2,
    title: "Products",
    columns: [
      {
        id: "01",
        subtitle: "Solar Panels",
        href: "#",
      },
      {
        id: "02",
        subtitle: "Inverters",
        href: "#",
      },
      {
        id: "03",
        subtitle: "Batteries",
        href: "#",
      },
      {
        id: "04",
        subtitle: "Accessories",
        href: "#",
      },
    ],
  },
  {
    id: 3,
    title: "Service",
    columns: [
      {
        id: "05",
        subtitle: "Shipping & Returns",
        href: "#",
      },
      {
        id: "06",
        subtitle: "Get in touch",
        href: "#",
      },
      {
        id: "07",
        subtitle: "FAQ",
        href: "#",
      },
      {
        id: "08",
        subtitle: "Find a store",
        href: "#",
      },
    ],
  },
  {
    id: 4,
    title: "Company",
    columns: [
      {
        id: "9",
        subtitle: "Who we are",
        href: "#",
      },
      {
        id: "10",
        subtitle: "Sustainability",
        href: "#",
      },
      {
        id: "11",
        subtitle: "Privacy",
        href: "#",
      },
      {
        id: "12",
        subtitle: "Terms & Conditions",
        href: "#",
      },
    ],
  },
];

function Footer() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="space-y-16">
        <div className="bg-[#04303F] space-y-12 font-poppins rounded-xl shadow-sm bg-[url('./images/footerdecorated_bgimage1.svg')] bg-no-repeat bg-left-top">
          <div className="bg-footer-decor2 bg-no-repeat bg-right-bottom px-4">
            <div className="space-y-14 py-12 sm:px-8 sm:py-20 max-w-4xl mx-auto">
              <motion.h2 variants={textVariant2} initial="hidden" whileInView="show" viewport={{ once: false, amount: "0.25" }} className="text-[#9FE221] text-2xl sm:text-4xl font-semibold text-center leading-none">
                Subscribe to our newsletter
              </motion.h2>
              <form action="">
                <div className="grid grid-cols-1 items-center gap-x-3 gap-y-5 md:grid-cols-3">
                  <div>
                    <input
                      type="text"
                      id="first_name"
                      name="first_name"
                      className="text-white bg-white/10 border [border:linear-gradient(180deg,_#0e7fa6,_#08546d)] text-sm rounded-lg focus:ring-2 focus:ring-white block w-full px-4 py-3 shadow-sm outline-none"
                      placeholder="First name"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      className="text-white bg-white/10 border [border:linear-gradient(180deg,_#0e7fa6,_#08546d)] text-sm rounded-lg focus:ring-2 focus:ring-white block w-full px-4 py-3 shadow-sm outline-none"
                      placeholder="Email"
                    />
                  </div>
                  <Button styles={"leading-snug text-white"} button_text={"Subscribe now"} />
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
          {footer.map((item) => (
            <div key={item.id}>
              {item.id === 1 ? (
                <div className="space-y-8 col-span-1">
                  <img
                    src={`./images/${item.logo}.png`}
                    alt=""
                    className="w-auto h-8"
                  />
                  <p className="text-sm text-gray-600 max-w-[28ch]">
                    {item.about}
                  </p>
                  <div className="flex items-center justify-start gap-x-2">
                    {item.social_icons.map((icon_item) => (
                      <a key={icon_item.id} className="bg-[#04303F] text-white w-8 h-8 rounded-full flex items-center justify-center">
                        <img src={`./images/${icon_item.image}.svg`} className="h-4 w-4 object-center" alt="" />
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="group text-sm">
                  <div>
                    <h2 className="text-[#9FE221] font-semibold">{item.title}</h2>
                    <div>
                      {item.columns.map((sub) => (
                        <a key={sub?.id} className="mt-6 block text-gray-600">
                          {sub?.subtitle}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <motion.div variants={footerVariants} initial="hidden" whileInView="show" className="border-t-2 border-gray-600">
          <p className="px-4 py-8 text-center text-gray-600 text-xs">© Copyright 2022, All Rights Reserved by SZSolar</p>
        </motion.div>
      </div>
    </section>
  );
}

export default Footer;
