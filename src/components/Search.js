import React, {useState} from "react";

function Search({handleSearchItem}) {
  
  const [searchItem, setSearchItem] = useState("")

  function runSearch(e){
    setSearchItem((e.target.value).toLowerCase())
    handleSearchItem(searchItem)
  }


  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={runSearch}
      />
    </div>
  );
}

export default Search;
