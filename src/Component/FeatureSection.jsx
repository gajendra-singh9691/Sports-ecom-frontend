// FeatureSection.jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag, faPercent, faGift } from '@fortawesome/free-solid-svg-icons';

const features = [
  {
    icon: faShoppingBag,
    title: "Highest quality",
    description: "Our exclusive experiences blend fitness and sports, creating the perfect harmony between body and mind."
  },
  {
    icon: faPercent,
    title: "Discounts on the way",
    description: "Get ready for unbeatable deals – the best discounts on your favorite sports gear are coming soon!"
  },
  {
    icon: faGift,
    title: "Exciting surprises",
    description: "Exciting surprises await – incredible discounts are coming soon, plus exclusive gift items with every purchase!"
  },
];

export default function FeatureSection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-10">Quality, Offers, and Surprises Await!</h2>
      </div>
      <div className="max-w-4xl mx-auto flex justify-center flex-wrap gap-8 sm:gap-20 px-4">
        {features.map((feature, idx) => (
          <div key={idx} className="flex flex-col items-center text-center px-4 max-w-[200px] ">
            <FontAwesomeIcon
              icon={feature.icon}
              className="text-4xl mb-4 text-black"
            />
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
