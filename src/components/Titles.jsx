import React, { useEffect, useState } from "react";
import "../styles/titles.css";
import { BallTriangle } from "react-loader-spinner";
import { BsStarFill } from "react-icons/bs";

const Author = () => {
  const url = "https://example-data.draftbit.com/books?_limit=20)and";
  const [authors, setAuthors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");

  const fetchData = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setIsLoading(false);
    setAuthors(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // const filteredAuthors = authors.filter((author) =>
  // author.professions.toLowerCase().includes(search.toLowerCase())
  // );

  if (isLoading) {
    return (
      <BallTriangle
        height={100}
        width={500}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
      />
    );
  }

  return (
    <div>
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>

      <div className="title">
        {authors.map((author) => {
          const { id, title, authors, image_url, genres } = author;

          return (
            <div key={id} className="color mt-5">
              <img src={image_url} alt={title} />
              <div>
                <p>
                  <span>
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                  </span>
                  <span>
                    <BsStarFill />
                    <BsStarFill />
                  </span>
                </p>
              </div>
              <div className="edu">
                <h3>{title}</h3>
                <h3> Author: {authors} </h3>
                <h2> Genres: {genres} </h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Author;
