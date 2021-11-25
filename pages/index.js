import Head from "next/head";
import { useEffect } from "react";

function ApplyToCourse() {
  return (
    <div className="flex">
      <a
        className="block w-full md:w-auto text-center px-10 py-4 bg-gradient-to-br from-yellow-300 to-yellow-600 text-secondary-900 font-bold rounded-md shadow-lg hover:shadow-xl hover:from-yellow-400 hover:to-yellow-700 transition duration-250 ease-in-out"
        href="#"
      >
        Applications to open soon
      </a>
    </div>
  );
}

function ImageWithDescription({ name, caption, imgSrc }) {
  return (
    <div>
      <div className="relative rounded-lg bg-indigo-500 w-5/6 md:w-auto shadow-md ">
        <img
          src={imgSrc}
          alt={caption}
          className="block w-full object-cover md:object-contain p-0.5 rounded-xl"
        />
      </div>
      <p className={"text-indigo-50 leading-tight font-semibold pt-4"}>
        {name}
      </p>
      <p className={"text-base text-indigo-100 leading-snug pt-2"}>{caption}</p>
    </div>
  );
}

function StatsWithTitleAndDescription({ title, description }) {
  return (
    <div className="text-center">
      <div className="font-semibold text-2xl">{title}</div>
      <div className="text-sm">{description}</div>
    </div>
  );
}

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("id");
          if (entry.isIntersecting) {
            document
              .querySelector(`.home-programme__nav-item a[href="#${id}"]`)
              .parentElement.classList.add("home-programme__nav-item--active");
          } else {
            document
              .querySelector(`.home-programme__nav-item a[href="#${id}"]`)
              .parentElement.classList.remove(
                "home-programme__nav-item--active"
              );
          }
        });
      },
      {
        rootMargin: "-50% 0px -50%",
      }
    );

    // Track all sections that have an `id` applied
    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });
  });
  return (
    <div>
      <Head>
        <title>Global Digital Corps Programme</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta property="og:title" content="Global Digital Corps Programme" />
        <meta
          property="og:description"
          content="An international programme to train top students to create and maintain digital public goods for sustainable development"
        />
        <meta
          property="og:image"
          content="Global-Digital-Corps-Programme.png"
        />
        <meta property="og:url" content="https://fullstack.pupilfirst.org/" />
        <meta
          name="twitter:card"
          content="Global-Digital-Corps-Programme.png"
        />
        <meta
          property="og:site_name"
          content="Global Digital Corps Programme"
        />
        <meta name="An international programme to train top students to create and maintain digital public goods for sustainable development" />

        {/* <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-11P76BRB6N"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-11P76BRB6N');
              `,
          }}
        /> */}
      </Head>
      <main className="bg-gray-900 mx-auto ">
        <section className="hero__bg-pattern lg:bg-fixed bg-no-repeat lg:h-screen bg-gradient-to-br from-gray-800 to-gray-900 lg:pb-64 shadow-inner">
          {/* <header className="max-w-6xl 2xl:max-w-7xl mx-auto py-4 lg:py-8 px-4 xl:px-0">
            <div className="flex justify-center items-center">
              <img className="block w-48 md:w-64" src="logos/GDC-logo.svg" />
            </div>
          </header> */}
          <div className="max-w-6xl 2xl:max-w-7xl flex flex-col items-center justify-between mx-auto text-white py-4 px-4 xl:px-0">
            <div className="mx-auto">
              <div className="w-full relative z-10 text-center">
                <header className="mx-auto py-4 lg:py-8 px-4 xl:px-0">
                  <div className="flex justify-center items-center">
                    <img
                      className="block w-48 md:w-64"
                      src="logos/GDC-logo.svg"
                    />
                  </div>
                </header>
                <h1 className="hero__title-gradient text-4xl md:text-5xl lg:text-8xl 2xl:text-9xl font-extrabold lg:leading-tight 2xl:leading-tight pt-4 2xl:pt-12">
                  Global Digital Corps <br />
                  Programme
                </h1>
                <p className="text-base lg:text-xl max-w-2xl mx-auto font-medium text-secondary-100 pt-2 lg:pt-4">
                  A programme to select and train top student developers to
                  create and maintain digital public goods
                </p>
                <div className="pt-8 2xl:pt-12">
                  <div className="bg-white rounded-lg shadow-md max-w-6xl 2xl:max-w-7xl mx-auto pb-6 px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-center text-center">
                      <p className="text-xs leading-tight text-center px-4 py-2 rounded-b-lg bg-gray-100 text-gray-800 shadow-inner">
                        Supported By
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-y-8 lg:gap-y-0 gap-4 md:grid-cols-5 pt-4">
                      <div className="flex justify-center">
                        <div className="w-48 flex items-center">
                          <img
                            className="object-contain"
                            src="logos/aicte.png"
                            alt="AICTE Logo"
                          />
                        </div>
                      </div>
                      <div className="flex justify-center">
                        <div className="w-36 flex items-center">
                          <img
                            className="object-contain"
                            src="logos/pupilfirst-logo.svg"
                            alt="Pupilfirst Logo"
                          />
                        </div>
                      </div>
                      <div className="flex justify-center">
                        <div className="w-24 flex items-center">
                          <img
                            className="object-contain"
                            src="logos/Schmidt-Futures-Logo.png"
                            alt="Schmidt Futures Logo"
                          />
                        </div>
                      </div>
                      <div className="flex justify-center">
                        <div className="w-14 flex items-center">
                          <img
                            className="object-contain"
                            src="logos/ACT-Logo.png"
                            alt="Act Grants Logo"
                          />
                        </div>
                      </div>
                      <div className="flex justify-center">
                        <div className="w-24 flex items-center">
                          <img
                            className="object-contain"
                            src="logos/e-gov-foun-logo.png"
                            alt="e-gov foundation Logo"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href="#product-showcase"
                  className="hidden md:inline-flex p-4 rounded-2xl mt-4 2xl:mt-8 flex-col items-center space-y-2 text-sm justify-center text-gray-200 hover:bg-indigo-900 hover:bg-opacity-50 hover:text-indigo-500 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="w-8 h-8 md:w-10 md:h-10"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3zm4 8a4 4 0 0 1-8 0V5a4 4 0 1 1 8 0v6zM8 0a5 5 0 0 0-5 5v6a5 5 0 0 0 10 0V5a5 5 0 0 0-5-5z" />
                  </svg>
                  <p>Scroll Down</p>
                </a>
                {/* <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 text-white pt-4 md:pt-8">
                  <a
                    className="inline-block w-full md:max-w-sm bg-green-600 bg-opacity-50 font-semibold p-2 md:p-4 rounded-lg border border-green-500"
                    href="#programme-1"
                  >
                    Software Engineering Fellowship Programme
                  </a>
                  <a
                    className="inline-block w-full md:max-w-sm bg-indigo-800 bg-opacity-50 font-semibold p-2 md:p-4 rounded-lg border border-indigo-500"
                    href="#programme-2"
                  >
                    Field Ops Fellowship Programme
                  </a>
                </div> */}
              </div>
            </div>
          </div>
          <div className="absolute inset-0 z-0">
            <img
              className="h-full w-full object-cover relative"
              src="hero/hero-bg.webp"
              alt="LITE - hero background image"
            />
            <div className="absolute inset-0"></div>
          </div>
        </section>

        <div
          id="product-showcase"
          className="relative bg-gray-900 py-8 lg:py-24 border-t border-gray-800"
        >
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
            <h2 className="relative mx-auto pt-3 lg:pt-8 before:block before:absolute before:w-24 before:h-1 lg:before:h-2 before:bg-indigo-500 before:left-1/2 before:-translate-x-1/2 before:top-0 max-w-4xl text-secondary-200 text-center font-black text-2xl lg:text-5xl leading-snug">
              Product Showcase
            </h2>
            <div className="mt-8 lg:mt-16">
              <img
                className="object-contain w-48 lg:w-64 mx-auto"
                src="logos/coronasafe-logo.svg"
                alt="Coronasafe Logo"
              />
            </div>
            <div className="relative mx-4 before:block before:absolute before:w-1 mt-14 lg:mt-32 before:h-10 lg:before:h-24 before:bg-indigo-500 before:left-1/2 before:-translate-x-1/2 before:-top-10 lg:before:-top-24 bg-indigo-500 p-1 rounded-t-2xl lg:rounded-2xl">
              <img
                className="object-contain rounded-t-2xl lg:rounded-2xl"
                src="product-showcase/war-toom-v3.0.jpg"
                alt="File Photo as on April 29th, 2021 from IC4, Smart City, Kochi with streamlined field operations of tele-triage+bed allocation+patient shifting to healthcare facility."
              />
            </div>
            <div className="grid lg:grid-cols-12 gap-x-20 bg-gradient-to-br from-gray-700 to-bg-gray-700 p-4 lg:p-10 rounded-b-2xl mx-4 lg:mx-12 border border-t-0 border-gray-800">
              <div className="lg:col-span-8">
                <p className="lg:text-xl leading-normal text-white">
                  <a
                    className="text-indigo-400 underline hover:bg-gray-900 hover:bg-opacity-40 transition"
                    target="_blank"
                    href="https://coronasafe.network/"
                  >
                    CoronaSafe Network
                  </a>{" "}
                  is a free and open-source disaster management system that is
                  used by National Health Mission, Government of India and
                  various state governments for reimaging digital war rooms. The
                  solution that students got an opportunity to intern with has
                  supported 3.34*Lac patient management and 1.29* Lac ambulance
                  shiftings and is approved by the United Nations as a{" "}
                  <a
                    className="text-indigo-400 underline hover:bg-gray-900 hover:bg-opacity-40 transition"
                    target="_blank"
                    href="https://digitalpublicgoods.net/"
                  >
                    Digital Public Good.
                  </a>
                </p>
                <p className="text-xs italic pt-6 text-gray-200 pl-4 xl:pl-0">
                  Stats as on 13<sup>th</sup> October 2021
                </p>
              </div>
              <div className="lg:col-span-4">
                <div className="bg-white rounded-2xl shadow-xl p-6 mt-6 lg:-mt-20 z-10 relative border-4 border-indigo-500">
                  <img
                    className="object-contain rounded-2xl mx-auto w-44 lg:w-48"
                    src="logos/Digitalpublicgoods-Logo.svg"
                    alt="Digital Public Goods Logo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="relative border-t border-gray-800 bg-gray-900 px-4 py-8 lg:py-24">
          <div className="lg:grid grid-cols-12 gap-12 2xl:gap-24 max-w-6xl 2xl:max-w-7xl mx-auto">
            <h2 className="col-span-6 relative pt-3 lg:pt-8 before:block before:absolute before:w-20 before:h-1 lg:before:h-2 before:bg-indigo-500 before:left-0 before:top-0 max-w-4xl text-secondary-200 font-black text-2xl lg:text-5xl lg:leading-tight">
              Accelerate Digital Transformation for Governments
            </h2>
            <div className="col-span-6 text-white lg:text-xl leading-normal pt-3 lg:pt-0">
              <p>
                As citizens, we depend on government infrastructure to deliver
                us quality services. Since the cost of creating and maintaining
                advanced digital infrastructure is very expensive, many national
                and state governments are unable to fully leverage the power of
                technology for transforming the service delivery to citizens.
              </p>
              <p className="mt-8">
                GDC creates a well trained group of students who are proficient
                in technology skills and field operations to build public
                digital goods that enables governments to provide quality
                services to citizens.
              </p>
            </div>
          </div>
        </section>
        <section className="relative border-t border-gray-800 bg-gray-800 px-4">
          <div className="lg:grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl 2xl:max-w-7xl mx-auto">
            <div className="col-span-1 lg:col-span-4">
              <div className="lg:sticky top-0 pt-8 lg:py-24">
                <h2 className="col-span-4 relative pt-3 lg:pt-8 before:block before:absolute before:w-20 before:h-1 lg:before:h-2 before:bg-indigo-500 before:left-0 before:top-0 max-w-4xl text-secondary-200 font-black text-2xl lg:text-5xl lg:leading-tight">
                  An initiative supported by
                </h2>
              </div>
            </div>
            <div className="col-span-8 text-white text-xl leading-normal py-8 lg:py-24">
              <div className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4 md:gap-8 lg:gap-12">
                <ImageWithDescription
                  name="Prof Anil Sahasrabudhe"
                  caption={
                    <>Chairman, All India Council for Technical Education</>
                  }
                  imgSrc="people/instructors/Prof-Anil-Sahasrabudhe.png"
                />
                <ImageWithDescription
                  name="Mekin Maheshwari"
                  caption={
                    <>
                      Founder, Udhyam.org
                      <br /> ex-CTO, Flipkart
                    </>
                  }
                  imgSrc="people/instructors/Mekin-Maheshwari.png"
                />
                <ImageWithDescription
                  name="Srikanth Nadhamuni"
                  caption={<>Founding CTO, Aadhaar</>}
                  imgSrc="people/instructors/Srikanth.png"
                />
                <ImageWithDescription
                  name="Pramod Varma"
                  caption={<>Chief Architect, Aadhaar & IndiaStack</>}
                  imgSrc="people/instructors/Pramod-Verma.png"
                />
                <ImageWithDescription
                  name="Sanjay Vijayakumar"
                  caption={<>Prime minister’s Champion of Change (Education)</>}
                  imgSrc="people/instructors/Sanjay-Vijayakumar.jpg"
                />
                <ImageWithDescription
                  name="Prasad Menon"
                  caption={<>Ex CHRO, Cleartrip</>}
                  imgSrc="people/instructors/Prasad-Menon.png"
                />
              </div>
            </div>
          </div>
        </section>

        <div
          id="certificate"
          className="relative border-t border-gray-800 bg-gray-900 px-4 pt-8 lg:pt-0"
        >
          <div className="lg:grid grid-cols-12 gap-8 max-w-6xl 2xl:max-w-7xl mx-auto">
            <div className="col-span-4">
              <div className="lg:sticky top-0 lg:py-24">
                <h2 className="col-span-4 relative pt-3 lg:pt-8 before:block before:absolute before:w-20 before:h-1 lg:before:h-2 before:bg-indigo-500 before:left-0 before:top-0 max-w-4xl text-secondary-200 font-black text-2xl lg:text-5xl lg:leading-tight">
                  For the best minds in each generation
                </h2>
              </div>
            </div>
            <div className="col-span-8 text-white lg:text-xl leading-normal pt-4 lg:py-24">
              <p>
                We are looking for students who have both the passion and self
                motivation to do exemplary work that shall stand out in their
                academic life. Outstanding services are recognized through the
                fellowship certificate jointly issued by All India Council for
                Technical Education (AICTE), Ministry of Education and
                Pupilfirst.org
              </p>
              <div className="mt-8 max-w-xl">
                <img
                  className="object-contain rounded-xl border-8 border-opacity-75 border-yellow-200 shadow-lg"
                  src="sample-certificate/Software_Engineering_Fellowship-certificate-AICTE_CSEFP-Completion-Certificat-AICTE.png"
                  alt="Pupilfirst"
                />
              </div>
            </div>
          </div>
        </div>
        <section className="relative border-t border-gray-800 bg-gray-900 px-4">
          <div className="lg:grid grid-cols-12 gap-8 max-w-6xl 2xl:max-w-7xl mx-auto">
            <div className="col-span-4">
              <div className="lg:sticky top-0 pt-8 lg:py-24">
                <h2 className="col-span-4 relative pt-3 lg:pt-8 before:block before:absolute before:w-20 before:h-1 lg:before:h-2 before:bg-indigo-500 before:left-0 before:top-0 max-w-4xl text-secondary-200 font-black text-2xl lg:text-5xl lg:leading-tight">
                  Applications open
                </h2>
              </div>
            </div>

            <div className="col-span-8 text-white lg:text-xl leading-normal pt-4 lg:py-24">
              <p>
                Applications are now open for GDC Software Engineering
                Fellowship and Field Ops Division, Class of 2022. You can apply
                for one of the two programmes, based on your interest.
              </p>
            </div>
          </div>
        </section>
        <div className="relative">
          <div className="sticky top-0 bg-gray-900 text-white z-10 mt-12">
            <div className="grid grid-cols-2 rounded-full max-w-6xl 2xl:max-w-7xl mx-auto">
              <div className="home-programme__nav-item rounded-l-full col-span-1 text-center relative z-0 ">
                <a className="block p-4 rounded-l-full " href="#programme-1">
                  <span className="block text-xs lg:hidden uppercase">
                    Programme 1
                  </span>
                  <span className="hidden lg:block">
                    GDC Software Engineering Fellowship Programme
                  </span>
                </a>
              </div>
              <div className="home-programme__nav-item rounded-r-full col-span-1 text-center ">
                <a
                  className="block p-4 -ml-px rounded-r-full "
                  href="#programme-2"
                >
                  <span className="block text-xs lg:hidden uppercase">
                    Programme 2
                  </span>
                  <span className="hidden lg:block">
                    GDC Field Ops Fellowship Programme
                  </span>
                </a>
              </div>
            </div>
          </div>
          <section id="programme-1" className="relative bg-gray-900 px-4">
            <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
              <div className="pt-14 lg:pt-20">
                <p className="text-sm lg:text-lg uppercase text-gray-400 font-semibold tracking-wide">
                  Programme 1
                </p>
                <h2 className="max-w-4xl text-green-500 font-black text-2xl lg:text-6xl leading-snug pt-1">
                  GDC Software Engineering Fellowship Programme
                </h2>
              </div>
              <div className="lg:grid lg:grid-cols-12 lg:gap-12 2xl:gap-5 px-0 pb-4 lg:pb-20">
                <div className="lg:col-span-6">
                  <div className="space-y-10 md:space-y-16 md:pr-12 pt-4 md:pt-16">
                    <div>
                      <h3 className="text-xl lg:text-3xl text-green-100 font-bold">
                        About
                      </h3>
                      <p className="pt-2 lg:text-xl lg:leading-normal font-medium text-secondary-50">
                        GDC Software Engineering Fellowship is a national
                        programme to identify the top 40
                        undergraduate/postgraduate students for an
                        industry-led training to become full stack developers
                        and contribute towards development of Digital Public
                        Goods.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl lg:text-3xl text-green-100 font-bold">
                        Objective
                      </h3>
                      <p className="pt-2 lg:text-xl lg:leading-normal font-medium text-secondary-50">
                        The programme aims at creating a cadre of trained
                        software engineering students for development and
                        deployment of digital public goods.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl lg:text-3xl text-green-100 font-bold">
                        Prerequisites
                      </h3>
                      <ul className="pt-2 md:pt-4 ml-6 lg:text-xl lg:leading-normal font-medium space-y-4 lg:space-y-6 text-secondary-50">
                        <li className="relative before:absolute before:w-3 before:h-3 before:bg-green-500 before:rounded-full before:left-0 before:top-2 pl-8">
                          Must be a current undergraduate or postgraduate student in any course
                          at a higher education institution in India.
                        </li>
                        <li className="relative before:absolute before:w-3 before:h-3 before:bg-green-500 before:rounded-full before:left-0 before:top-2 pl-8">
                          Must be within the age group of 18-25.
                        </li>
                        <li className="relative before:absolute before:w-3 before:h-3 before:bg-green-500 before:rounded-full before:left-0 before:top-2 pl-8">
                          Students who are in any semester of their
                          undergraduate or postgraduate programme can apply for the Program.
                        </li>
                        <li className="relative before:absolute before:w-3 before:h-3 before:bg-green-500 before:rounded-full before:left-0 before:top-2 pl-8">
                          Must have written at least some amount of code
                          yourself either on personal projects or academic
                          projects.
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl lg:text-3xl text-green-100 font-bold">
                        Programme Outline
                      </h3>
                      <ul className="pt-2 md:pt-4 ml-6 lg:text-xl lg:leading-normal font-medium space-y-4 lg:space-y-6 text-secondary-50">
                        <li className="relative before:absolute before:w-3 before:h-3 before:bg-green-500 before:rounded-full before:left-0 before:top-2 pl-8">
                          Typescript
                        </li>
                        <li className="relative before:absolute before:w-3 before:h-3 before:bg-green-500 before:rounded-full before:left-0 before:top-2 pl-8">
                          Django
                        </li>
                      </ul>
                    </div>
                    <p className="pt-2 lg:text-xl lg:leading-normal font-medium text-secondary-50">
                      As a step to ensure gender balance in the software field,
                      we plan to reserve 10 seats to female candidates. Our goal
                      is to create more women role models so that many others
                      join the software engineering field. However admission to
                      the programme will be as per the selection criteria and
                      applicable to all applicants irrespective of any
                      reservation.
                    </p>
                  </div>
                </div>
                <div className="lg:col-span-6 border-l border-t border-gray-800 rounded-l-2xl mt-4 lg:mt-20">
                  <div className="lg:sticky top-0">
                    <div className="grid grid-cols-2 gap-x-8 gap-y-8 lg:gap-y-12 p-4 lg:p-10 2xl:p-16 tracking-wide">
                      <div className="col-span-1 text-white">
                        <p className="text-xs lg:text-lg uppercase text-gray-400 font-semibold">
                          Level:
                        </p>
                        <p className="text-lg lg:text-3xl font-bold pt-1">
                          Basic
                        </p>
                      </div>
                      <div className="col-span-1 text-white">
                        <p className="text-xs lg:text-lg uppercase text-gray-400 font-semibold">
                          Duration:
                        </p>
                        <p className="text-lg lg:text-3xl font-bold pt-1">
                          13 Weeks
                        </p>
                      </div>
                      <div className="col-span-1 text-white">
                        <p className="text-xs lg:text-lg uppercase text-gray-400 font-semibold">
                          Certification:
                        </p>
                        <p className="text-lg lg:text-3xl font-bold pt-1">
                          Yes
                        </p>
                      </div>
                      <div className="col-span-1 text-white">
                        <p className="text-xs lg:text-lg uppercase text-gray-400 font-semibold">
                          Fee:
                        </p>
                        <p className="text-lg lg:text-3xl font-bold pt-1">
                          Sponsored
                        </p>
                      </div>
                      <div className="col-span-1 text-white">
                        <p className="text-xs lg:text-lg uppercase text-gray-400 font-semibold">
                          Remote Internship:
                        </p>
                        <p className="text-lg lg:text-3xl font-bold pt-1">
                          6 months
                        </p>
                      </div>
                    </div>
                    <div className="flex space-x-4 lg:space-x-6 px-4 lg:px-10 2xl:px-16 lg:pb-10 mt-4 lg:mt-0">
                      <a
                        href="https://fullstack.gdc.network/"
                        target="_blank"
                        className="block text-center bg-gray-900 border border-green-500 text-green-500 rounded-lg w-full text-base lg:text-xl font-semibold p-3 lg:px-6 lg:py-4 shadow-sm hover:bg-green-700 focus:outline-none focus:bg-green-500 focus:ring-2 focus:ring-offset-2 focus:ring-green-700"
                      >
                        Learn More
                      </a>
                      {/* <a
                        href="https://apply.gdc.network/"
                        target="_blank"
                        className="block text-center bg-green-600 rounded-lg w-full text-base lg:text-xl text-white font-semibold p-3 lg:px-6 lg:py-4 border border-transparent shadow-sm hover:bg-green-700 focus:outline-none focus:bg-green-500 focus:ring-2 focus:ring-offset-2 focus:ring-green-700"
                      >
                        Apply Now
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            id="programme-2"
            className="programme relative border-t border-gray-800 bg-gray-900 px-4"
          >
            <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
              <div className="pt-14 lg:pt-20">
                <p className="text-sm lg:text-lg uppercase text-gray-400 font-semibold tracking-wide">
                  Programme 2
                </p>
                <h2 className="max-w-4xl text-indigo-500 font-black text-2xl lg:text-6xl leading-snug pt-1">
                  GDC Field Ops Fellowship Programme
                </h2>
              </div>
              <div className="lg:grid lg:grid-cols-12 lg:gap-12 2xl:gap-5 px-0 pb-4 lg:pb-20">
                <div className="lg:col-span-6">
                  <div className="space-y-10 md:space-y-16 md:pr-12 pt-4 md:pt-16">
                    <div>
                      <h3 className="text-xl lg:text-3xl text-indigo-200 font-bold">
                        About
                      </h3>
                      <p className="pt-2 lg:text-xl lg:leading-normal font-medium text-secondary-50">
                        GDC Field Ops Fellowship is a national programme to
                        identify and train 100,000 students in disaster
                        management using digital tools and become part of
                        reserve cader to support in pandemic management.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl lg:text-3xl text-indigo-200 font-bold">
                        Objective
                      </h3>
                      <p className="pt-2 lg:text-xl lg:leading-normal font-medium text-secondary-50">
                        The programme aims at creating a cadre of trained
                        students in field operations to facilitate deployment of
                        Digital Public Goods.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl lg:text-3xl text-indigo-200 font-bold">
                        Prerequisites
                      </h3>
                      <ul className="pt-2 md:pt-4 ml-6 lg:text-xl lg:leading-normal font-medium space-y-4 lg:space-y-6 text-secondary-50">
                        <li className="relative before:absolute before:w-3 before:h-3 before:bg-indigo-500 before:rounded-full before:left-0 before:top-2 pl-8">
                          Must be a current undergraduate (Engineering) student
                          at a higher education institution in India.
                        </li>
                        <li className="relative before:absolute before:w-3 before:h-3 before:bg-indigo-500 before:rounded-full before:left-0 before:top-2 pl-8">
                          Must be within the age group of 18-25.
                        </li>
                        <li className="relative before:absolute before:w-3 before:h-3 before:bg-indigo-500 before:rounded-full before:left-0 before:top-2 pl-8">
                          Students who are in any semester of their
                          undergraduate programme can apply for the Program.
                        </li>
                        <li className="relative before:absolute before:w-3 before:h-3 before:bg-indigo-500 before:rounded-full before:left-0 before:top-2 pl-8">
                          Experience in social services via NCC, NSS and NGOs
                          will be an added advantage.
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl lg:text-3xl text-indigo-200 font-bold">
                        Programme Outline
                      </h3>
                      <p className="mt-2 lg:text-xl font-medium text-secondary-50">
                        After completion of the programme students will
                      </p>
                      <ul className="pt-2 md:pt-4 ml-6 lg:text-xl lg:leading-normal font-medium space-y-4 lg:space-y-6 text-secondary-50">
                        <li className="relative before:absolute before:w-3 before:h-3 before:bg-indigo-500 before:rounded-full before:left-0 before:top-2 pl-8">
                          Have an idea on the various levels of government
                          institutions involved in disaster management.
                        </li>
                        <li className="relative before:absolute before:w-3 before:h-3 before:bg-indigo-500 before:rounded-full before:left-0 before:top-2 pl-8">
                          Get introduced to CARE, a software used for patient
                          and facility management deployed in various states of
                          India for covid pandemic management.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-6 border-l border-t border-gray-800 rounded-l-2xl mt-4 lg:mt-20">
                  <div className="lg:sticky top-0">
                    <div className="grid grid-cols-2 gap-x-8 gap-y-8 lg:gap-y-12 p-4 lg:p-10 2xl:p-16 tracking-wide">
                      <div className="col-span-1 text-white">
                        <p className="text-xs lg:text-lg uppercase text-gray-400 font-semibold">
                          Level:
                        </p>
                        <p className="text-lg lg:text-3xl font-bold pt-1">
                          Basic
                        </p>
                      </div>
                      <div className="col-span-1 text-white">
                        <p className="text-xs lg:text-lg uppercase text-gray-400 font-semibold">
                          Duration:
                        </p>
                        <p className="text-lg lg:text-3xl font-bold pt-1">
                          13 Weeks
                        </p>
                      </div>
                      <div className="col-span-1 text-white">
                        <p className="text-xs lg:text-lg uppercase text-gray-400 font-semibold">
                          Certification:
                        </p>
                        <p className="text-lg lg:text-3xl font-bold pt-1">
                          Yes
                        </p>
                      </div>
                      <div className="col-span-1 text-white">
                        <p className="text-xs lg:text-lg uppercase text-gray-400 font-semibold">
                          Fee:
                        </p>
                        <p className="text-lg lg:text-3xl font-bold pt-1">
                          Sponsored
                        </p>
                      </div>
                      <div className="col-span-1 text-white">
                        <p className="text-xs lg:text-lg uppercase text-gray-400 font-semibold">
                          Remote Internship:
                        </p>
                        <p className="text-lg lg:text-3xl font-bold pt-1">
                          6 months
                        </p>
                      </div>
                    </div>
                    <div className="flex space-x-4 lg:space-x-6 px-4 lg:px-10 2xl:px-16 lg:pb-10 mt-4 lg:mt-0">
                      <a
                        href="https://bharat.gdc.network/"
                        target="_blank"
                        className="block text-center bg-gray-900 border border-indigo-400 text-indigo-400 rounded-lg w-full font-semibold text-base lg:text-xl p-3 lg:px-6 lg:py-4 shadow-sm hover:text-indigo-100 hover:bg-indigo-900 focus:outline-none focus:bg-indigo-900 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition"
                      >
                        Learn More
                      </a>
                      {/* <a
                        href="https://bharat.gdc.network/"
                        target="_blank"
                        className="block text-center bg-indigo-500 rounded-lg w-full text-white font-semibold text-base lg:text-xl p-3 lg:px-6 lg:py-4 border border-transparent shadow-sm hover:bg-indigo-700 focus:outline-none focus:bg-indigo-500 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition"
                      >
                        Apply Now
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
