import { useState } from "react";
import toast from "react-hot-toast";
import axios from 'axios'
const api_uri = import.meta.env.VITE_API_URL

export default function Admin() {
  const [activeSection, setActiveSection] = useState("addNew");

  // Controlled states for all inputs
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [originalPrice, setOriginalPrice] = useState('');
  const [salePrice, setSalePrice] = useState('');

  const [sizes, setSizes] = useState([]);
  const [newSize, setNewSize] = useState('');

  const [base64File, setBase64File] = useState("");
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        setBase64File(reader.result);
      };
      reader.readAsDataURL(file);
    }
    // e.target.file[0] = null;
  };

  const addSizes = (e) => {
    e.preventDefault();
    if (newSize.trim() === '') {
      toast.error('Please enter a valid size');
      return;
    }
    setSizes([...sizes, newSize.toUpperCase()]);
    setNewSize('');
  };

  const resetForm = () => {
    setId('');
    setName('');
    setDescription('');
    setOriginalPrice('');
    setSalePrice('');
    setSizes([]);
    setNewSize('');
    setFileName('');
    setBase64File('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (activeSection !== "deleteData") {
      if (!base64File) {
        alert("Please select a file first!");
        return;
      }

      try {
        const payload = {
          tshirtNumber : id,
          name,
          description,
          Sizes: sizes,
          originalPrice: Number(originalPrice),
          salePrice: Number(salePrice),
          fileName,
          fileData: base64File,
        };

        console.log(payload);

        if (activeSection == "addNew") {
          console.log("On normal");
          const response = await axios.post(`${api_uri}/admin/addData`, payload);
          alert("File uploaded successfully");
          console.log(response.data);
        }
        else{
          
          console.log("On tranding");
          const response = await axios.post(`${api_uri}/admin/addData`, payload);
          const response2 = await axios.post(`${api_uri}/admin/addData/tranding`,payload)
          console.log(response.data);
          console.log(response2.data);
          alert("File uploaded successfully");
        }


        resetForm();
        console.log(payload);
        
      } catch (error) {
        alert("File upload failed");
        console.error(error);
      }
    } else {
      if (!id.trim()) {
        alert("Please enter a valid ID to delete.");
        return;
      }
      try {
        const response = await axios.delete(`${api_uri}/delete/${id}`);
        alert("Deleted successfully");
        setId("");
        console.log(response.data);
      } catch (error) {
        alert("Failed to delete");
        console.error(error);
      }
    }
  };

  return (
    <div className="flex min-h-screen bg-black text-white font-sans">
      {/* Sidebar */}
      <aside className="w-38 md:w-64 bg-gray-900 border-r border-gray-800 flex flex-col rounded-2xl m-6">
        <div className="py-6 px-2 md:px-6 text-center text-2xl font-extrabold tracking-wide border-b border-gray-800">
          Admin Dashboard
        </div>
        <nav className="flex-1 mt-8">
          {[
            { key: "addNew", label: "Add New Data" },
            { key: "deleteData", label: "Delete Data" },
            { key: "addTrending", label: "Add Trending" },
          ].map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActiveSection(key)}
              className={`block w-full text-left px-6 py-4 border-l-4 rounded-md transition-colors duration-300 cursor-pointer ${activeSection === key
                  ? "border-white bg-white bg-opacity-10 text-black"
                  : "border-transparent hover:bg-gray-300  hover:bg-opacity-5 text-white hover:text-black"
                }`}
            >
              {label}
            </button>
          ))}
        </nav>
        <div className="px-6 py-4 border-t border-gray-800 text-xs text-gray-500">
          &copy; 2025 E-Com Admin
        </div>
      </aside>

      {/* Main form area */}
      <main className="flex-1 p-10 bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-3xl bg-gray-800 bg-opacity-60 p-6 md:p-12 rounded-2xl shadow-2xl space-y-10"
        >
          
          <h1 className="text-3xl font-bold mb-8 tracking-wider text-center">
            {activeSection === "addNew" && "Add New Product"}
            {activeSection === "deleteData" && "Delete Product"}
            {activeSection === "addTrending" && "Add Trending Product"}
          </h1>

          {/* Add New Data Form */}
          {(activeSection === "addNew" || activeSection === "addTrending") && (
            <div className="flex flex-col gap-4">
              <div className="w-full flex justify-between items-center gap-2">
                <label htmlFor="id">Id : </label>
                <input
                  className="w-2/4 border-1 border-gray-400 focus:outline-none py-1 px-2 rounded"
                  type="number"
                  id="id"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                />
              </div>
              <div className="w-full flex justify-between items-center gap-2">
                <label htmlFor="name">Name : </label>
                <input
                  className="w-2/4 border-1 border-gray-400 focus:outline-none py-1 px-2 rounded"
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="w-full flex justify-between items-center gap-2">
                <label htmlFor="description">Description : </label>
                <input
                  className="w-2/4 border-1 border-gray-400 focus:outline-none py-1 px-2 rounded"
                  type="text"
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="w-full flex justify-between items-center gap-2">
                <label htmlFor="image">Image : </label>
                <input
                  className="w-2/4 border-1 border-gray-400 focus:outline-none py-1 px-2 rounded"
                  type="file"
                  id="image"
                  onChange={handleFileChange}
                />
              </div>
              <div className="w-full flex justify-between items-center gap-2">
                <label htmlFor="sizes">Sizes : </label>
                <div className="w-2/4 flex gap-0.5">
                  <input
                    onChange={(e) => setNewSize(e.target.value)}
                    value={newSize}
                    className="w-3/4 border-1 border-gray-400 focus:outline-none py-1 px-2 rounded"
                    type="text"
                    id="sizes"
                  />
                  <button
                    className="w-1/4 border-1 rounded border-gray-400"
                    onClick={addSizes}
                  >
                    Add Size
                  </button>
                </div>
              </div>
              <div className="w-full flex justify-between items-center gap-2">
                <div>
                  <span>Sizes added : </span>
                </div>
                <div className="flex gap-3 justify-end">
                  {sizes.map((size, idx) => (
                    <span key={idx}>{size} , </span>
                  ))}
                </div>
              </div>
              <div className="w-full flex justify-between items-center gap-2">
                <label htmlFor="originalPrice">Original Price : </label>
                <input
                  className="w-2/4 border-1 border-gray-400 focus:outline-none py-1 px-2 rounded"
                  type="number"
                  id="originalPrice"
                  value={originalPrice}
                  onChange={(e) => setOriginalPrice(e.target.value)}
                />
              </div>
              <div className="w-full flex justify-between items-center gap-2">
                <label htmlFor="salePrice">Sale Price : </label>
                <input
                  className="w-2/4 border-1 border-gray-400 focus:outline-none py-1 px-2 rounded"
                  type="number"
                  id="salePrice"
                  value={salePrice}
                  onChange={(e) => setSalePrice(e.target.value)}
                />
              </div>
            </div>
          )}

          {/* Delete Data Form */}
          {activeSection === "deleteData" && (
            <div className="w-full flex justify-between items-center gap-2">
              <label htmlFor="id">Id : </label>
              <input
                onChange={(e) => setId(e.target.value)}
                value={id}
                className="w-2/4 border-1 border-gray-400 focus:outline-none py-1 px-2 rounded"
                type="number"
                id="id"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition"
          >
            Submit
          </button>
        </form>
      </main>
    </div>
  );
}
