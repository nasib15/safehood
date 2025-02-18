import Image from "next/image";

const ImageGallery = () => {
  return (
    <>
      {/* Main Image */}
      <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-100">
        <Image
          src="https://plus.unsplash.com/premium_photo-1673543757560-061f5222201c?q=80&w=2940&auto=format&fit=crop"
          alt="Crime scene"
          className="object-cover"
          fill
          priority
        />
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        {[1, 2, 3, 4].map((index) => (
          <div
            key={index}
            className="relative aspect-square rounded-lg overflow-hidden bg-gray-100 cursor-pointer hover:opacity-90 transition-opacity"
          >
            <Image
              src="https://plus.unsplash.com/premium_photo-1673543757560-061f5222201c?q=80&w=2940&auto=format&fit=crop"
              alt={`Additional image ${index}`}
              className="object-cover"
              fill
            />
          </div>
        ))}
      </div>
    </>
  );
};
export default ImageGallery;
