import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Contact Us - We're Here to Help!",
  description:
    "Get in touch with us for any queries, support, or feedback. Our team is available 24/7 to assist you. Fill out the form or call us directly to connect. We're always happy to hear from you at Exclusive!",
};

const ContactPage = () => {
  return (
    <div className="container md:px-12 px-5 mx-auto my-20 mb-32">
      <h4 className="text-lg text-[#808080] mb-10">
        <Link href={"/"}>Home</Link> /{" "}
        <Link href={"/contact"}>
          <span className="text-black"> Contact</span>
        </Link>
      </h4>

      <div className="flex mdd:flex-wrap gap-7 w-full">
        <div className="flex flex-col flex-wrap rounded-lg shadow-lg md:p-14 p-5 lg:w-[30%] mdd:w-full">
          <div className="flex flex-col space-y-5">
            <div className="flex items-center gap-5">
              <div className="bg-[#db4444] rounded-full p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <rect width="30" height="30" fill="none" />
                  <path
                    fill="#fff"
                    d="m16.1 13.359l-.528-.532zm.456-.453l.529.532zm2.417-.317l-.358.66zm1.91 1.039l-.358.659zm.539 3.255l.529.532zm-1.42 1.412l-.53-.531zm-1.326.67l.07.747zm-9.86-4.238l.528-.532zM4.002 5.746l-.749.042zm6.474 1.451l.53.532zm.157-2.654l.6-.449zM9.374 2.86l-.601.45zM6.26 2.575l.53.532zm-1.57 1.56l-.528-.531zm7.372 7.362l.529-.532zm4.567 2.394l.455-.453l-1.058-1.064l-.455.453zm1.985-.643l1.91 1.039l.716-1.318l-1.91-1.038zm2.278 3.103l-1.42 1.413l1.057 1.063l1.42-1.412zm-2.286 1.867c-1.45.136-5.201.015-9.263-4.023l-1.057 1.063c4.432 4.407 8.65 4.623 10.459 4.454zm-9.263-4.023c-3.871-3.85-4.512-7.087-4.592-8.492l-1.498.085c.1 1.768.895 5.356 5.033 9.47zm1.376-6.18l.286-.286L9.95 6.666l-.287.285zm.515-3.921L9.974 2.41l-1.201.899l1.26 1.684zM5.733 2.043l-1.57 1.56l1.058 1.064l1.57-1.56zm4.458 5.44c-.53-.532-.53-.532-.53-.53h-.002l-.003.004a1 1 0 0 0-.127.157c-.054.08-.113.185-.163.318a2.1 2.1 0 0 0-.088 1.071c.134.865.73 2.008 2.256 3.526l1.058-1.064c-1.429-1.42-1.769-2.284-1.832-2.692c-.03-.194.001-.29.01-.312q.009-.02 0-.006a.3.3 0 0 1-.03.039l-.01.01l-.01.009zm1.343 4.546c1.527 1.518 2.676 2.11 3.542 2.242c.443.068.8.014 1.071-.087a1.5 1.5 0 0 0 .42-.236l.05-.045l.007-.006l.003-.003l.001-.002s.002-.001-.527-.533c-.53-.532-.528-.533-.528-.533l.002-.002l.002-.002l.006-.005l.01-.01l.038-.03q.014-.009-.007.002c-.025.009-.123.04-.32.01c-.414-.064-1.284-.404-2.712-1.824zm-1.56-9.62C8.954 1.049 6.95.834 5.733 2.044L6.79 3.107c.532-.529 1.476-.475 1.983.202zM4.752 5.704c-.02-.346.139-.708.469-1.036L4.163 3.604c-.537.534-.96 1.29-.909 2.184zm14.72 12.06c-.274.274-.57.428-.865.455l.139 1.494c.735-.069 1.336-.44 1.784-.885zM11.006 7.73c.985-.979 1.058-2.527.229-3.635l-1.201.899c.403.539.343 1.246-.085 1.673zm9.52 6.558c.817.444.944 1.49.367 2.064l1.058 1.064c1.34-1.333.927-3.557-.71-4.446zm-3.441-.849c.384-.382 1.002-.476 1.53-.19l.716-1.317c-1.084-.59-2.428-.427-3.304.443z"
                  />
                </svg>
              </div>
              <h4 className="text-xl text-black font-semibold">Call To Us</h4>
            </div>
            <p className="text-base tracking-wide">
              We are available 24/7, 7 days a week.
            </p>
            <p>Phone: +92 336 3566329</p>
          </div>
          <hr className="h-[2px] bg-black my-6" />
          <div className="flex flex-wrap flex-col space-y-5">
            <div className="flex flex-wrap items-center gap-5">
              <div className="bg-[#db4444] rounded-full p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                >
                  <rect width="24" height="24" fill="none" />
                  <path
                    fill="#fff"
                    d="M3 19V5h18v14zm9-6.884L4 6.885V18h16V6.885zM12 11l7.692-5H4.308zM4 6.885V6v12z"
                  />
                </svg>
              </div>
              <h4 className="text-xl text-black font-semibold">Write To Us</h4>
            </div>
            <p className="text-base tracking-wide">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <p>Email: hasanhussain2580@gmail.com</p>
          </div>
        </div>
        <div className="flex flex-col flex-wrap rounded-lg shadow-lg md:p-14 p-5 lg:w-[70%] mdd:w-full">
          <form action="" className="flex flex-wrap gap-8 w-full items-start">
            <div className="flex flex-wrap justify-between items-center w-full gap-8">
              <input
                type="text"
                placeholder="Your Name *"
                className="bg-[#f5f5f5] p-3 text-lg text-[#828282] rounded-lg outline-none lg:w-auto mdd:w-full"
              />
              <input
                type="email"
                placeholder="Your Email *"
                className="bg-[#f5f5f5] p-3 text-lg text-[#828282] rounded-lg outline-none lg:w-auto mdd:w-full"
              />
              <input
                type="text"
                placeholder="Your Phone *"
                className="bg-[#f5f5f5] p-3 text-lg text-[#828282] rounded-lg outline-none lg:w-auto mdd:w-full"
              />
            </div>

            <textarea
              name="message"
              id=""
              placeholder="Your Message"
              className="bg-[#f5f5f5] p-3 text-lg text-[#828282] rounded-lg w-full h-52 resize-none outline-none"
            ></textarea>
            <button className="bg-[#db4444] hover:bg-[#fa4545] py-3 px-12 lg:w-auto w-full text-white ml-auto rounded-[5px]">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
