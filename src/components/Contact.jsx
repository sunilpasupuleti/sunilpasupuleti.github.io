import { createElement, useEffect, useRef, useState } from "react";
import { content } from "../Content";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { Spinner } from "flowbite-react";

const Contact = () => {
  const { Contact } = content;
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const SERVICE_ID = import.meta.env.VITE_REACT_APP_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_REACT_APP_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_REACT_APP_EMAILJS_PUBLIC_KEY;
  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY);
      setLoading(false);
      form.current.reset();
      toast.success("Email sent successfully! I will reach you out soon💜", {
        duration: 3000,
      });
    } catch (e) {
      setLoading(false);
      toast.error(e || e.text, {
        duration: 3000,
      });
    }
  };
  return (
    <section id="contact" className="bg-dark_primary dark:bg-dark_background">
      <div className="md:container px-5 py-14">
        <h2 className="title text-white" data-aos="fade-down">
          {Contact.title}
        </h2>
        <h4 className="subtitle dark:text-gray" data-aos="fade-down">
          {Contact.subtitle}
        </h4>
        <br />
        <div className="flex gap-10 md:flex-row flex-col">
          <form
            data-aos="fade-up"
            ref={form}
            onSubmit={sendEmail}
            className="flex-1 flex flex-col gap-5"
          >
            <input
              type="text"
              name="from_name"
              placeholder="Name"
              required
              className="border text-slate-300 bg-transparent duration-300 border-slate-500 focus:border-slate-300 focus:outline-none focus:ring-0 p-3 rounded"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email Id"
              required
              className="borde text-slate-300 bg-transparent duration-300 border-slate-500 focus:border-slate-300 focus:outline-none focus:ring-0 p-3 rounded"
            />
            <input
              type="text"
              pattern="^\d{10}$"
              name="user_phone"
              placeholder="Phone Number"
              title="Enter valid phone number"
              required
              className="borde text-slate-300 bg-transparent duration-300 border-slate-500 focus:border-slate-300 focus:outline-none focus:ring-0 p-3 rounded"
            />
            <textarea
              name="message"
              placeholder="Message"
              required
              className="border text-slate-300 bg-transparent duration-300 border-slate-500 focus:border-slate-300 focus:outline-none focus:ring-0 p-3 rounded h-44"
            ></textarea>
            <button className="btn self-start bg-white">
              <div className="flex items-center">
                <span className=" text-dark_primary dark:text-dark_primary">
                  {" "}
                  {loading ? "SUBMITTING" : "SUBMIT"}
                </span>
                {loading && <Spinner color={"info"} className="ml-3" />}
              </div>
            </button>
          </form>
          <div className="flex-1 flex flex-col gap-5">
            {Contact.social_media.map((content, i) => {
              return (
                <div
                  key={i}
                  data-aos="fade-down"
                  data-aos-delay={i * 100}
                  className="flex items-center gap-4"
                >
                  <h4 className="text-white dark:text-white">
                    {createElement(content.icon)}
                  </h4>
                  <a
                    className="font-Poppins text-white"
                    href={content.link}
                    target="_blank"
                  >
                    {content.text}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
