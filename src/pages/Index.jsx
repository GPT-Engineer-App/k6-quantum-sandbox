import { Cat } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 flex items-center justify-center">
          <Cat className="mr-2" /> All About Cats
        </h1>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
          alt="A cute cat"
          className="mx-auto object-cover w-full h-[400px] rounded-lg shadow-lg mb-6"
        />
        <p className="text-xl text-gray-700 mb-4">
          Cats are fascinating creatures that have been domesticated for thousands of years. They are known for their independence, agility, and affectionate nature.
        </p>
        <h2 className="text-2xl font-semibold mb-3">Characteristics of Cats</h2>
        <ul className="list-disc list-inside mb-4 text-gray-700">
          <li>Excellent hunters with sharp claws and teeth</li>
          <li>Flexible bodies and quick reflexes</li>
          <li>Keen senses, especially hearing and night vision</li>
          <li>Communicate through vocalizations, body language, and scent</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-3">Popular Cat Breeds</h2>
        <ul className="list-disc list-inside mb-4 text-gray-700">
          <li>Siamese</li>
          <li>Persian</li>
          <li>Maine Coon</li>
          <li>British Shorthair</li>
          <li>Scottish Fold</li>
        </ul>
        <p className="text-xl text-gray-700">
          Whether you're a cat owner or just an admirer, these furry companions continue to captivate us with their charm and mystery.
        </p>
      </div>
    </div>
  );
};

export default Index;
