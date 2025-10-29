import React from "react";
import { Send } from "lucide-react";

const SubscribeSection = () => {
    return (
        <section
            className="relative flex items-center justify-center w-full overflow-hidden"
            style={{
                backgroundColor: "rgb(242, 245, 241)",
                backgroundImage:
                    "url('https://execor.vamtam.com/wp-content/uploads/2025/03/GettyImages-985915244.svg')",
                backgroundRepeat: "repeat-x",
                backgroundPosition: "center bottom",
                fontFamily: '"DM Sans", sans-serif',
                color: "rgba(0, 0, 0, 0.75)",
                transition: "all 0.4s ease",
            }}
        >
            {/* Outer Container */}
            <div
                className="w-full flex flex-col items-center justify-center pb-24 text-center px-6"
                style={{
                    minHeight: "500px",
                    maxWidth: "1280px",
                }}
            >
                {/* Headings */}
                <div className="w-full max-w-[1100px] font-[Forum]  transition-all mb-6 duration-300 font-normal">
                    <h3
                        className="
              text-[#0E3530] 
              text-[32px] leading-[40px]
              md:text-[40px] md:leading-[46px]
              lg:text-[56px] lg:leading-[56px]
              font-normal
              flex flex-col lg:flex-row justify-start lg:justify-center
              items-start lg:items-center text-left lg:text-center
            "
                    >
                        <span className="block">Stay Ahead.</span>
                        <span className="block lg:inline lg:ml-2">
                            Subscribe for Expert Insights.
                        </span>
                    </h3>
                </div>

                {/* Form Section */}
                <div
                    className="
            w-full max-w-[900px] mb-10 lg:mb-0 sm:mb-16 md:mb-0
            flex flex-col lg:flex-row lg:items-center lg:justify-between
            gap-6 transition-all duration-300
            text-[15px] leading-[22.5px] text-[rgba(0,0,0,0.75)] font-[DM_Sans,sans-serif]
          "
                >
                    {/* Subscribe Form */}
                    <form
                        className="
              flex flex-col md:flex-col lg:flex-row items-center justify-between
              gap-4 md:gap-5 w-full lg:w-[58%]
              transition-all duration-300
            "
                        name="Subscribe"
                        aria-label="Subscribe"
                    >
                        {/* Email Input */}
                        <div className="flex-grow w-full">
                            <label htmlFor="form-field-email" className="sr-only">
                                Email
                            </label>
                            <input
                                type="email"
                                name="form_fields[email]"
                                id="form-field-email"
                                placeholder="Email"
                                required
                                className="
                  w-full px-4 py-3 border border-gray-300 rounded-md outline-none
                  focus:ring-2 focus:ring-[#A8E6A3]
                  transition-all duration-300 text-gray-800
                "
                                style={{
                                    fontFamily: '"DM Sans", sans-serif',
                                    fontSize: "14px",
                                    lineHeight: "21px",
                                    color: "rgba(0, 0, 0, 0.75)",
                                    boxSizing: "border-box",
                                }}
                            />
                        </div>

                        {/* Subscribe Button */}
                        <div className="w-full md:w-full lg:w-auto flex justify-center hover:text-white group">
                            <button
                                type="submit"
                                className="
                                            elementor-button elementor-size-sm
                                            w-full bg-[#A8E6A3] text-[#0E3530]
                                            px-6 py-3 rounded-md hover:bg-[#0E3530] hover:text-white
                                            transition-all duration-300 text-[14px] flex items-center justify-center gap-2 relative
                                            "
                                style={{
                                    border: "none",
                                    boxSizing: "border-box",
                                    cursor: "pointer",
                                    transition:
                                        "background 0.3s ease, border 0.3s ease, transform 0.4s ease",
                                    fontFamily: '"DM Sans", sans-serif',
                                    fontWeight: 500,
                                }}
                            >
                                {/* Text */}
                                <span
                                    className="elementor-button-text gap-10 mr-8"
                                    style={{
                                        fontFamily: '"DM Sans", sans-serif',
                                        fontWeight: 500,
                                        letterSpacing: "normal",
                                    }}
                                >
                                    Subscribe
                                </span>

                                {/* Send Icon */}
                                <Send
                                    size={16}
                                    className="absolute right-2 text-[#0E3530] group-hover:text-white"
                                />
                            </button>
                        </div>
                    </form>

                    {/* Disclaimer Text */}
                    <p
                        className="
              text-[8px] text-gray-500 max-w-[380px] leading-relaxed
              lg:text-[11.5px] lg:leading-[1.6em]
              transition-all duration-300
            "
                        style={{
                            textAlign: "start",
                            margin: 0,
                            padding: 0,
                        }}
                    >
                        You can unsubscribe at any time using the link in the footer of our
                        emails.{" "}
                        <a
                            href="https://execor.vamtam.com/privacy-policy/"
                            className="underline hover:text-[#299e74] transition-colors"
                        >
                            View our Privacy Policy
                        </a>
                        .
                    </p>
                </div>
            </div>
        </section>
    );
};

export default SubscribeSection;
