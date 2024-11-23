import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";

// Mock data for demonstration (replace with API call)
const carData = {
  id: 1,
  name: "Porsche Cayenne",
  priceWithVAT: "2 969 000 CZK",
  priceWithoutVAT: "2 453 719 CZK",
  mileage: "13 000 km",
  category: "Osobní",
  fuel: "Benzín",
  specification: "Coupe/PDLS/Karbon/Pano/HUD/Ventilace",
  inOperationSince: "2023-11",
  body: "SUV",
  power: "260 kW / 354 koní",
  engineDisplacement: "2995 ccm",
  color: "Šedá",
  image: "/path-to-car-image.jpg", // Update this with a valid path
  gallery: ["/path-to-image1.jpg", "/path-to-image2.jpg"], // Additional images
};

export default function CarDetails({ car }: { car: typeof carData }) {
  return (
    <div className="bg-black text-white min-h-screen p-8">
      <div className="flex flex-col lg:flex-row">
        {/* Left: Main Image and Gallery */}
        <div className="lg:w-2/3 flex flex-col">
          <Image
            src={car.image}
            alt={car.name}
            width={1000}
            height={600}
            className="rounded-lg"
          />
          <div className="flex space-x-4 mt-4 overflow-x-auto">
            {car.gallery.map((img, index) => (
              <Image
                key={index}
                src={img}
                alt={`Gallery image ${index + 1}`}
                width={100}
                height={100}
                className="rounded-lg border border-gray-500"
              />
            ))}
          </div>
        </div>

        {/* Right: Car Information */}
        <div className="lg:w-1/3 lg:pl-12 mt-8 lg:mt-0">
          <h1 className="text-4xl font-bold">{car.name}</h1>
          <div className="flex justify-between mt-4">
            <p className="text-xl">With VAT: {car.priceWithVAT}</p>
            <p className="text-xl">Without VAT: {car.priceWithoutVAT}</p>
          </div>
          <button className="bg-red-500 text-white px-6 py-2 mt-6 rounded-lg font-bold">
            I am Interested
          </button>

          {/* Details Table */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold">Information About the Car</h2>
            <table className="w-full text-left mt-4">
              <tbody>
                <tr>
                  <td className="border-b border-gray-700 py-2">Category:</td>
                  <td className="border-b border-gray-700 py-2">
                    {car.category}
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-gray-700 py-2">Fuel:</td>
                  <td className="border-b border-gray-700 py-2">{car.fuel}</td>
                </tr>
                <tr>
                  <td className="border-b border-gray-700 py-2">Mileage:</td>
                  <td className="border-b border-gray-700 py-2">
                    {car.mileage}
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-gray-700 py-2">
                    Specification:
                  </td>
                  <td className="border-b border-gray-700 py-2">
                    {car.specification}
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-gray-700 py-2">Color:</td>
                  <td className="border-b border-gray-700 py-2">{car.color}</td>
                </tr>
                <tr>
                  <td className="border-b border-gray-700 py-2">Power:</td>
                  <td className="border-b border-gray-700 py-2">{car.power}</td>
                </tr>
                <tr>
                  <td className="border-b border-gray-700 py-2">
                    Engine Displacement:
                  </td>
                  <td className="border-b border-gray-700 py-2">
                    {car.engineDisplacement}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

// // Dynamic paths
// export const getStaticPaths: GetStaticPaths = async () => {
//   return {
//     paths: [{ params: { id: "1" } }],
//     fallback: false,
//   };
// };

// // Fetch data for the car
// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const { id } = params!;
//   return {
//     props: {
//       car: carData,
//     },
//   };
// };
