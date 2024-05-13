function SearchBar({ searchHandler }) {
  return (
    <input
      type="text"
      id="search"
      onChange={searchHandler}
      placeholder="Search Here!"
    />
  );
}

export default SearchBar;
