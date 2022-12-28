import React from "react";
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
        data_icon: "facebook-f",
        d: "M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z",
        href: "#",
      },
      {
        id: 2,
        data_icon: "twitter",
        d: "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z",
        href: "#",
      },
    //   {
    //     id: 3,
    //     data_icon: "google",
    //     d: "M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z",
    //     href: "#",
    //   },
      {
        id: 3,
        data_icon: "instagram",
        d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z",
        href: "#",
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="space-y-16">
        <div className="bg-[#04303F] space-y-12 font-poppins rounded-xl px-4 shadow-sm">
          <div className="space-y-10 py-12 sm:py-16 max-w-3xl mx-auto">
            <h2 className="text-[#9FE221] text-2xl sm:text-4xl font-semibold text-center">
              Subscribe to our newsletter
            </h2>
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
                <Button styles={"leading-snug"} button_text={"Subscribe now"} />
              </div>
            </form>
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
                      <a key={icon_item.id} className="bg-[#04303F] text-white w-8 p-2 rounded-full">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fab"
                          data-icon={icon_item.data_icon}
                          className={`svg-inline--fa fa-${icon_item.data_icon} w-4`}
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path fill="currentColor" d={icon_item.d}></path>
                        </svg>
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

        <div className="border-t-2 border-gray-600">
          <p className="px-4 py-8 text-center text-gray-600 text-xs">© Copyright 2022, All Rights Reserved by SZSolar</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
