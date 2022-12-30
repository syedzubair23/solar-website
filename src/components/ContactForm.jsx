import React from "react";
import { HiOutlinePhone } from "react-icons/hi2";
import { HiOutlineMail } from "react-icons/hi";
import Button from "./Button";

function ContactForm() {
  return (
    <div className="font-poppins">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-16 bg-[#084457B5]/70 rounded-3xl">
          <div className="py-11 px-8 col-span-2 [background:linear-gradient(180deg,_#0e7fa6,_#08546d)] rounded-t-3xl md:rounded-tr-none md:rounded-l-3xl">
            <div className="flex flex-col justify-center items-start space-y-4 text-[#BBEBFB]">
              <h3 className="text-white font-medium text-xl">
                Contact Information
              </h3>
              <p className="text-base">
                We’d love to hear from you. Please fill out this form. Our
                representative will answer you in almost an hour.
              </p>
              <div className="flex flex-col justify-center items-start space-y-6">
                <div className="flex md:flex-col justify-center items-start gap-4 lg:items-center lg:flex-row">
                  <HiOutlinePhone className="w-6 h-6 text-[#04303F]" />
                  <p className="text-sm">+1(555) 123-3212</p>
                </div>
                <div className="flex md:flex-col justify-center items-start gap-4 lg:items-center lg:flex-row">
                  <HiOutlineMail className="w-6 h-6 text-[#04303F]" />
                  <p className="text-sm">support@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 md:col-span-3 py-8 mr-0 md:mr-16">
            <form action="" className="px-8 md:px-0 mb-8 md:mb-0">
              <div className="space-y-6">
                <div className="grid gap-x-8 gap-y-5 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="first_name"
                      className="block mb-1.5 text-xs text-white"
                    >
                      First name
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      name="first_name"
                      className="text-white bg-white/10 border [border:linear-gradient(180deg,_#0e7fa6,_#08546d)] text-sm rounded-lg focus:ring-2 focus:ring-white block w-full px-4 py-3 shadow-sm outline-none"
                      placeholder="First name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="last_name"
                      className="block mb-1.5 text-xs text-white"
                    >
                      Last name
                    </label>
                    <input
                      type="text"
                      id="last_name"
                      name="last_name"
                      className="text-white bg-white/10 border [border:linear-gradient(180deg,_#0e7fa6,_#08546d)] text-sm rounded-lg focus:ring-2 focus:ring-white block w-full px-4 py-3 shadow-sm outline-none"
                      placeholder="Last name"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <label
                    htmlFor="email"
                    className="block mb-1.5 text-xs text-white"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="text-white bg-white/10 border [border:linear-gradient(180deg,_#0e7fa6,_#08546d)] text-sm rounded-lg focus:ring-2 focus:ring-white block w-full px-4 py-3 shadow-sm outline-none"
                    placeholder="Email"
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="subject"
                    className="block mb-1.5 text-xs text-white"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="text-white bg-white/10 border [border:linear-gradient(180deg,_#0e7fa6,_#08546d)] text-sm rounded-lg focus:ring-2 focus:ring-white block w-full px-4 py-3 shadow-sm outline-none"
                    placeholder="Subject"
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="message"
                    className="block mb-1.5 text-xs text-white"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    className="text-white bg-white/10 border [border:linear-gradient(180deg,_#0e7fa6,_#08546d)] text-sm rounded-lg focus:ring-2 focus:ring-white block w-full px-4 py-3 shadow-sm outline-none"
                    placeholder="Message"
                  />
                </div>
                <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="remember"
                            type="checkbox"
                            value=""
                            className="outline-none w-4 h-4 bg-white/10 rounded-lg border [border:linear-gradient(180deg,_#0e7fa6,_#08546d)] focus:ring-2 focus:ring-white"
                            required=""
                          />
                        </div>
                        <label
                          htmlFor="remember"
                          className="ml-3 text-sm text-white"
                        >
                          You agree to our friendly{" "}
                          <a
                            href="#"
                            className="text-[#9FE221] hover:underline outline-none focus:ring-2 focus:ring-white"
                          >
                            privacy policy
                          </a>
                          .
                        </label>
                      </div>
                
              </div>
              <Button styles={"w-full mt-8 text-white"} button_text={"Send message"} />
            </form>
          </div>
        </div>
    </div>
  );
}

export default ContactForm;
