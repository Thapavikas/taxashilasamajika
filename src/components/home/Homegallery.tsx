import { Link } from "react-router-dom";

const HomeGallery = () => {
  const images = [
    "/Home/home1.jpeg",
    "/Home/home2.jpeg",
    "/Home/home3.jpeg",
    "/Home/home4.jpeg",
    "/Home/home5.jpeg",
    "/Home/home6.jpeg",
    "/Home/home7.jpeg",
    "/Home/home8.jpeg",
  ];

  return (
    <section className="bg-[#f9f7f3] py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <p className="text-orange-500 font-semibold uppercase tracking-wide">
            Our Moments
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Smiles We’ve Created Together
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Every picture tells a story of hope, care, and change.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {images.map((img, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-md cursor-pointer"
            >
              <img
                src={img}
                alt="Charity gallery"
                className="w-full h-48 object-cover transform group-hover:scale-110 transition duration-500"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <span className="text-white font-semibold text-sm">
                  View Photo
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* See All Button */}
        <div className="text-center mt-12">
          <Link to="/gallery">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition duration-300 shadow-lg">
              See All Photos
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeGallery;
