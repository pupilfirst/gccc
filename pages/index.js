import Head from "next/head";

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
        <meta property="og:title" content="Bharat FieldOps Fellowship!" />
        <meta
          property="og:description"
          content="An international programme to train top students to create and maintain digital public goods for sustainable development"
        />
        <meta
          property="og:image"
          content="coronasafe-engineering-fellowship.png"
        />
        <meta property="og:url" content="https://fullstack.pupilfirst.org/" />
        <meta
          name="twitter:card"
          content="coronasafe-engineering-fellowship.png"
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
          <header className="max-w-7xl mx-auto py-4 lg:py-8 px-4 xl:px-0">
            <div className="flex justify-center items-center">
              <img className="block w-48 md:w-64" src="logos/GDC-logo.svg" />
            </div>
          </header>
          <div className="max-w-7xl 2xl:max-w-screen-2xl flex flex-col md:flex-row items-center justify-between mx-auto text-white pt-12 lg:pt-24 2xl:pt-44 pb-12 px-4 xl:px-0">
            <div className="mx-auto">
              <div className="w-full relative z-10 text-center">
                <h1 className="hero__title-gradient text-4xl md:text-5xl lg:text-8xl 2xl:text-9xl font-extrabold lg:leading-tight 2xl:leading-tight lg:pt-4">
                  Global Digital Corps <br />
                  Programme
                </h1>
                <p className="text-sm md:text-base max-w-2xl mx-auto font-medium text-secondary-100 lg:text-xl pt-2 lg:pt-4 lg:pr-12">
                  An international programme to train top students to create and
                  maintain digital public goods for sustainable development.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative border-t border-gray-800 bg-gray-900 py-8 lg:py-24">
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
              <p className="lg:col-span-8 lg:text-xl leading-normal text-white">
                CoronaSafe Network is a free and open-source disaster management
                system that is used by National Health Mission, Government of
                India and various state governments for reimaging digital war
                rooms. The solution that students got an opportunity to intern
                with has supported 3.34*Lac patient management and 1.29* Lac
                ambulance shiftings and is approved by the United Nations as a
                Digital Public Good.
              </p>
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
        </section>
        <section className="relative border-t border-gray-800 bg-gray-900 px-4 py-8 lg:py-24">
          <div className="lg:grid grid-cols-12 gap-12 2xl:gap-24 max-w-7xl 2xl:max-w-screen-2xl mx-auto">
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
          <div className="lg:grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-7xl 2xl:max-w-screen-2xl mx-auto">
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
                  name="Pramod Verma"
                  caption={<>Chief Architect, India Stack</>}
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
        <section className="relative border-t border-gray-700 bg-gray-900 px-4 py-8 lg:py-24">
          <div className="lg:grid grid-cols-12 gap-8 max-w-7xl 2xl:max-w-screen-2xl mx-auto">
            <div className="lg:sticky top-0 col-span-4">
              <h2 className="relative pt-3 lg:pt-8 before:block before:absolute before:w-20 before:h-1 lg:before:h-2 before:bg-indigo-500 before:left-0 before:top-0 max-w-4xl text-secondary-200 font-black text-2xl lg:text-5xl lg:leading-tight">
                Supported By:
              </h2>
            </div>
            <div className="col-span-8 text-white text-xl leading-normal pt-6">
              <div className="bg-white rounded-lg py-12 px-4 sm:px-6 lg:px-8 grid grid-cols-2 gap-y-8 lg:gap-y-0 gap-4 md:grid-cols-3 lg:grid-cols-4">
                <div className="flex justify-center">
                  <div className="w-48 flex items-center">
                    <img
                      className="object-contain w-full"
                      src="logos/NSTEDB-logo.svg"
                      alt="National Science and Technology Entrepreneurship Development Board"
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="w-40 flex items-center">
                    <img
                      className="object-contain w-full"
                      src="logos/act-grants-logo.png"
                      alt="Act grants - Action COVID-19 Team"
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="w-36 flex items-center">
                    <img
                      className="object-contain w-full"
                      src="logos/swasth.svg"
                      alt="Swasth Alliance"
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="w-40 flex items-center">
                    <img
                      className="object-contain"
                      src="logos/pupilfirst-logo.svg"
                      alt="Pupilfirst"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative border-t border-gray-700 bg-gray-900 px-4">
          <div className="lg:grid grid-cols-12 gap-8 max-w-7xl 2xl:max-w-screen-2xl mx-auto">
            <div className="col-span-4">
              <div className="lg:sticky top-0 pt-8 lg:py-24">
                <h2 className="relative pt-3 lg:pt-8 before:block before:absolute before:w-20 before:h-1 lg:before:h-2 before:bg-indigo-500 before:left-0 before:top-0 max-w-4xl text-secondary-200 font-black text-2xl lg:text-5xl lg:leading-tight">
                  GDC Fellows - Class of 2021
                </h2>
              </div>
            </div>
            <div className="col-span-8 text-white lg:text-xl leading-normal pt-4 lg:py-24">
              <p>
                As citizens, we depend on government infrastructure to deliver
                us quality services. Since the cost of creating and maintaining
                advanced digital infrastructure is very expensive, many national
                and state governments are unable to fully leverage the power of
                technology for transforming the service delivery to citizens.
              </p>
              <p className="mt-6">
                GDC creates a well trained group of students who are proficient
                in technology skills and field operations to build public
                digital goods that enables governments to provide quality
                services to citizens.
              </p>
              <div className="space-y-4 sm:grid sm:grid-cols-2 xl:grid-cols-3 sm:gap-8 sm:space-y-0 lg:gap-10 pt-12 lg:pt-16">
                <div className="bg-gray-800 p-5 rounded-xl text-center">
                  <div className="w-48 h-48 mx-auto rounded-full border-2 border-indigo-500 bg-gray-600">
                    <img
                      className="object-contain rounded-full"
                      src="people/GDC-fellows-2021/Abhinandan.png"
                      alt="Pupilfirst"
                    />
                  </div>
                  <p className="text-xl font-semibold pt-3">Abhinandan Arya</p>
                  <p className="text-base pt-1 text-gray-300">
                    Deen Dayal Upadhyaya College, University of Delhi
                  </p>
                </div>
                <div className="bg-gray-800 p-5 rounded-xl text-center">
                  <div className="w-48 h-48 mx-auto rounded-full border-2 border-indigo-500 bg-gray-600">
                    <img
                      className="object-contain rounded-full"
                      src="people/GDC-fellows-2021/Apurva.png"
                      alt="Pupilfirst"
                    />
                  </div>
                  <p className="text-xl font-semibold pt-3">Apurva Nagar</p>
                  <p className="text-base pt-1 text-gray-300">
                    New Horizon College Of Engineering, Bangalore
                  </p>
                </div>
                <div className="bg-gray-800 p-5 rounded-xl text-center">
                  <div className="w-48 h-48 mx-auto rounded-full border-2 border-indigo-500 bg-gray-600">
                    <img
                      className="object-contain rounded-full"
                      src="people/GDC-fellows-2021/Amith-Kumar.png"
                      alt="Pupilfirst"
                    />
                  </div>
                  <p className="text-xl font-semibold pt-3">Amit Kumar</p>
                  <p className="text-base pt-1 text-gray-300">
                    National Institute of Engineering
                  </p>
                </div>

                <div className="bg-gray-800 p-5 rounded-xl text-center">
                  <div className="w-48 h-48 mx-auto rounded-full border-2 border-indigo-500 bg-gray-600">
                    <img
                      className="object-contain rounded-full"
                      src="people/GDC-fellows-2021/Arpan.png"
                      alt="Pupilfirst"
                    />
                  </div>
                  <p className="text-xl font-semibold pt-3">Arpan Abhishek</p>
                  <p className="text-base pt-1 text-gray-300">
                    CMR Institute of Technology, Bengaluru
                  </p>
                </div>
                <div className="bg-gray-800 p-5 rounded-xl text-center">
                  <div className="w-48 h-48 mx-auto rounded-full border-2 border-indigo-500 bg-gray-600">
                    <img
                      className="object-contain rounded-full"
                      src="people/GDC-fellows-2021/Divya-Garg.png"
                      alt="Pupilfirst"
                    />
                  </div>
                  <p className="text-xl font-semibold pt-3">Divya garg</p>
                  <p className="text-base pt-1 text-gray-300">
                    University Maharani College, Jaipur
                  </p>
                </div>
                <div className="bg-gray-800 p-5 rounded-xl text-center">
                  <div className="w-48 h-48 mx-auto rounded-full border-2 border-indigo-500 bg-gray-600">
                    <img
                      className="object-contain rounded-full"
                      src="people/GDC-fellows-2021/Karan.png"
                      alt="Pupilfirst"
                    />
                  </div>
                  <p className="text-xl font-semibold pt-3">
                    Karan Sanjeev Nair
                  </p>
                  <p className="text-base pt-1 text-gray-300">
                    KCG College of Technology, Chennai.
                  </p>
                </div>

                <div className="bg-gray-800 p-5 rounded-xl text-center">
                  <div className="w-48 h-48 mx-auto rounded-full border-2 border-indigo-500 bg-gray-600">
                    <img
                      className="object-contain rounded-full"
                      src="people/GDC-fellows-2021/Khavin.png"
                      alt="Pupilfirst"
                    />
                  </div>
                  <p className="text-xl font-semibold pt-3">Khavin Shankar G</p>
                  <p className="text-base pt-1 text-gray-300">SRM University</p>
                </div>
                <div className="bg-gray-800 p-5 rounded-xl text-center">
                  <div className="w-48 h-48 mx-auto rounded-full border-2 border-indigo-500 bg-gray-600">
                    <img
                      className="object-contain rounded-full"
                      src="people/GDC-fellows-2021/Peeyush-Goyal.png"
                      alt="Pupilfirst"
                    />
                  </div>
                  <p className="text-xl font-semibold pt-3">Peeyush Goyal</p>
                  <p className="text-base pt-1 text-gray-300">
                    University Insititute of Engineering and Technology, Panjab
                    University, Chandigarh
                  </p>
                </div>
                <div className="bg-gray-800 p-5 rounded-xl text-center">
                  <div className="w-48 h-48 mx-auto rounded-full border-2 border-indigo-500 bg-gray-600">
                    <img
                      className="object-contain rounded-full"
                      src="people/GDC-fellows-2021/Pradipta-Ghoshal.png"
                      alt="Pupilfirst"
                    />
                  </div>
                  <p className="text-xl font-semibold pt-3">Pradipta Ghoshal</p>
                  <p className="text-base pt-1 text-gray-300">
                    College of Engineering and Management, Kolaghat
                  </p>
                </div>

                <div className="bg-gray-800 p-5 rounded-xl text-center">
                  <div className="w-48 h-48 mx-auto rounded-full border-2 border-indigo-500 bg-gray-600">
                    <img
                      className="object-contain rounded-full"
                      src="people/GDC-fellows-2021/Samyukyha.png"
                      alt="Pupilfirst"
                    />
                  </div>
                  <p className="text-xl font-semibold pt-3">
                    Samyuktha Ganeshkumar
                  </p>
                  <p className="text-base pt-1 text-gray-300">
                    Sri Sivasubramaniya Nadar College of Engineering,Chennai
                  </p>
                </div>
                <div className="bg-gray-800 p-5 rounded-xl text-center">
                  <div className="w-48 h-48 mx-auto rounded-full border-2 border-indigo-500 bg-gray-600">
                    <img
                      className="object-contain rounded-full"
                      src="people/GDC-fellows-2021/Sandra.png"
                      alt="Pupilfirst"
                    />
                  </div>
                  <p className="text-xl font-semibold pt-3">
                    Sandra Kakkarayil Jayakumar
                  </p>
                  <p className="text-base pt-1 text-gray-300">
                    College of Engineering Trivandrum, KTU, Trivandrum
                  </p>
                </div>
                <div className="bg-gray-800 p-5 rounded-xl text-center">
                  <div className="w-48 h-48 mx-auto rounded-full border-2 border-indigo-500 bg-gray-600">
                    <img
                      className="object-contain rounded-full"
                      src="people/GDC-fellows-2021/Shailesh.png"
                      alt="Pupilfirst"
                    />
                  </div>
                  <p className="text-xl font-semibold pt-3">Shailesh Aanand</p>
                  <p className="text-base pt-1 text-gray-300">
                    Birsa Institute of Technology Sindri
                  </p>
                </div>

                <div className="bg-gray-800 p-5 rounded-xl text-center">
                  <div className="w-48 h-48 mx-auto rounded-full border-2 border-indigo-500 bg-gray-600">
                    <img
                      className="object-contain rounded-full"
                      src="people/GDC-fellows-2021/Shri-Hari-L.png"
                      alt="Pupilfirst"
                    />
                  </div>
                  <p className="text-xl font-semibold pt-3">Shri Hari L</p>
                  <p className="text-base pt-1 text-gray-300">
                    Bannari Amman Institute of Technology
                  </p>
                </div>
                <div className="bg-gray-800 p-5 rounded-xl text-center">
                  <div className="w-48 h-48 mx-auto rounded-full border-2 border-indigo-500 bg-gray-600">
                    <img
                      className="object-contain rounded-full"
                      src="people/GDC-fellows-2021/Swapnil.png"
                      alt="Pupilfirst"
                    />
                  </div>
                  <p className="text-xl font-semibold pt-3">Swapnil Jagtap</p>
                  <p className="text-base pt-1 text-gray-300">
                    Pune Institute of Computer Technology, Pune
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative border-t border-gray-800 bg-gray-900 px-4 pt-8 lg:pt-0">
          <div className="lg:grid grid-cols-12 gap-8 max-w-7xl 2xl:max-w-screen-2xl mx-auto">
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
        </section>
        <section className="relative border-t border-gray-800 bg-gray-900 px-4">
          <div className="lg:grid grid-cols-12 gap-8 max-w-7xl 2xl:max-w-screen-2xl mx-auto">
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
            <div className="grid grid-cols-2 rounded-full max-w-7xl mx-auto">
              <div className="col-span-1 text-center programme-link relative z-0 ">
                <a
                  className="block p-4 rounded-l-full border border-gray-800 bg-gray-900 hover:bg-indigo-900 hover:bg-opacity-30 focus:bg-indigo-900 active:bg-indigo-900 focus:text-indigo-300 text-sm md:text-lg lg:text-xl font-medium bg-opacity-20 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                  href="#programme-1"
                >
                  <span className="block text-xs lg:hidden uppercase">
                    Programme 1
                  </span>
                  <span className="hidden lg:block">
                    GDC Software Engineering Fellowship Programme
                  </span>
                </a>
              </div>
              <div className="col-span-1 text-center programme-link ">
                <a
                  className="block p-4 -ml-px rounded-r-full border border-gray-800  bg-gray-900 hover:bg-indigo-900 hover:bg-opacity-30 focus:bg-indigo-900 active:bg-indigo-900 focus:text-indigo-300 text-sm md:text-lg lg:text-xl font-medium bg-opacity-20 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
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
            <div className="max-w-7xl 2xl:max-w-8xl mx-auto">
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
                        undergraduate/postgraduate or diploma students for an
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
                          Must be a current undergraduate (Engineering) student
                          at a higher education institution in India.
                        </li>
                        <li className="relative before:absolute before:w-3 before:h-3 before:bg-green-500 before:rounded-full before:left-0 before:top-2 pl-8">
                          Must be within the age group of 18-25.
                        </li>
                        <li className="relative before:absolute before:w-3 before:h-3 before:bg-green-500 before:rounded-full before:left-0 before:top-2 pl-8">
                          Students who are in any semester of their
                          undergraduate programme can apply for the Program.
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
                    <div className="grid grid-cols-2 gap-x-8 gap-y-8 lg:gap-y-12 p-4 lg:p-16 tracking-wide">
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
                    <div className="px-4 lg:px-16 lg:pb-10 mt-4 lg:mt-0">
                      <a
                        href="https://fullstack.gdc.network/"
                        target="_blank"
                        className="block text-center bg-green-600 rounded-full w-full text-base lg:text-xl text-white font-semibold p-3 lg:px-6 lg:py-4 border border-transparent shadow-sm hover:bg-green-700 focus:outline-none focus:bg-green-500 focus:ring-2 focus:ring-offset-2 focus:ring-green-700"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            id="programme-2"
            className="relative border-t border-gray-800 bg-gray-900 px-4"
          >
            <div className="max-w-7xl 2xl:max-w-8xl mx-auto">
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
                    <div className="grid grid-cols-2 gap-x-8 gap-y-8 lg:gap-y-12 p-4 lg:p-16 tracking-wide">
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
                    <div className="px-4 lg:px-16 lg:pb-10 mt-4 lg:mt-0">
                      <a
                        href="https://bharat.gdc.network/"
                        target="_blank"
                        className="block text-center bg-indigo-500 rounded-full w-full text-white font-semibold text-base lg:text-xl p-3 lg:px-6 lg:py-4 border border-transparent shadow-sm hover:bg-indigo-700 focus:outline-none focus:bg-indigo-500 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700"
                      >
                        Learn More
                      </a>
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
