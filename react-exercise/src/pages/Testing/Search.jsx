import React, { useState } from "react";
import axios from "axios";

const URL = "https://hn.angolia.com/api/v1/search";

function Search() {
  const [stories, setStories] = useState([]);
  const [error, setError] = useState(null);

  async function handleFetch() {
    let result;

    try {
      result = await axios.get(`${URL}?query=React`);
      setStories(result.data.hits);
    } catch (error) {
      setError(error);
    }
  }
  return (
    <div>
      <button type="button" onClick={handleFetch}>
        Cari Cerita React
      </button>

      {error && <span>Ada yang error bro..</span>}

      <ul>
        {stories.map((story) => {
          return (
            <li key={story.objectID}>
              <a href={story.url}>{story.title}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Search;
