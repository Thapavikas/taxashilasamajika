const Gallery = () => {
  const images = [
    "/Home/home1.jpeg",
    "/Home/home2.jpeg",
    "/Home/home3.jpeg",
    "/Home/home4.jpeg",
    "/Home/home5.jpeg",
    "/Home/home6.jpeg",
    "/Home/home7.jpeg",
    "/Home/home8.jpeg",
    "/gallery/1.jpg",
    "/gallery/2.jpg",
    "/gallery/3.jpg",
    "/gallery/4.jpg",
    "/gallery/5.jpg",
    "/gallery/6.jpg",
    "/gallery/7.jpg",
    "/gallery/8.jpg",
    "/gallery/9.jpeg",
    "/gallery/10.jpg",
    "/gallery/11.jpeg",
    "/gallery/12.jpeg",
    "/gallery/13.jpeg",
  ];

  return (
    <section className="bg-[#f9f7f3] min-h-screen">
      {/* Page Header */}
      <div className="relative bg-gray-900 py-20">
        <div className="absolute inset-0">
          <img
            src="/gallery/1.jpg"
            alt="Gallery banner"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Our Gallery</h1>
          <p className="mt-4 max-w-2xl mx-auto text-gray-200">
            Moments of kindness, compassion, and hope captured forever.
          </p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
            >
              <img
                src={img}
                alt="Charity gallery"
                className="w-full h-56 object-cover transform group-hover:scale-110 transition duration-500"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <span className="text-white font-semibold tracking-wide">
                  View Image
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
