import { ChangeEvent, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { searchTodoAction } from "../redux/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";

const SearchComponent = () => {
  const [searchText, setSearchText] = useState<string>("");
  const dispatch = useDispatch();
  const [searchActive, setSearchActive] = useState<boolean>(true);

  const handleSearch = () => {
    dispatch(searchTodoAction(searchText));
    setSearchActive(false);
  };

  const handleClear = () => {
    setSearchText("");
    setSearchActive(true);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <Form>
      <div className="search-container">
        <Form.Group controlId="searchForm">
          <div className="search-input">
            <input
              type="text"
              placeholder="Search..."
              value={searchText}
              onChange={handleChange}
            />
          </div>
        </Form.Group>
        <Button
          variant="outline-info"
          className="form-btn"
          onClick={searchActive ? handleSearch : handleClear}
        >
          {searchActive ? (
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
          ) : (
            <FontAwesomeIcon
              icon={faTimes}
              className="clear-icon form-btn "
              onClick={handleClear}
            />
          )}
        </Button>
      </div>
    </Form>
  );
};

export default SearchComponent;
