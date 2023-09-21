import React, { useState, useCallback } from "react";
import { data } from "../data";
import { Card } from "../components/Card";
import searchIcon from "../assets/Search.png";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [images, setImages] = useState(data);
  const [search, setSearch] = useState("");

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  const dragImage = useCallback((dragIndex, hoverIndex) => {
    setImages((prevCards) => {
      const clonedCards = [...prevCards];
      const removedItem = clonedCards.splice(dragIndex, 1)[0];

      clonedCards.splice(hoverIndex, 0, removedItem);
      return clonedCards;
    });
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();

    const filteredImages = data.filter((image) =>
      image.tags.join(" ").includes(search.toLowerCase())
    );
    setImages(filteredImages);
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setSearch(inputValue);

    const filteredImages = data.filter((image) =>
      image.tags.join(" ").includes(inputValue.toLowerCase())
    );

    if (inputValue === "") {
      setImages(data);
    } else {
      setImages(filteredImages);
    }
  };
  return (
    <div className="p-8 m-8">
      <div className="text-end my-2">
        <button
          onClick={handleLogout}
          className={`col-start-1 col-end-3 text-xs text-center font-bold my-2 py-3 px-12 rounded-xl duration-300 bg-[#8bc9d1] hover:text-[#FFFDF8]`}
        >
          <p>Log Out</p>
        </button>
      </div>
      <div className="flex items-center gap-2 max-w-[32rem] border-2 px-3 py-2 my-8">
        <input
          type="text"
          placeholder="Search by Tag"
          value={search}
          onChange={handleInputChange}
          onKeyDown={(e) => {
            e.key === "Enter" && handleSearch();
          }}
          className="flex-grow rounded-md  flex-initial focus:outline-none"
        />
        <div className="searchIcon cursor-pointer" onClick={handleSearch}>
          <img src={searchIcon} alt="Search Icon" />
        </div>
      </div>
      <div className="image-container gap-8">
        {images.map((image, index) => (
          <Card
            src={image.image}
            title={image.title}
            id={image.id}
            index={index}
            dragImage={dragImage}
            tags={image.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
