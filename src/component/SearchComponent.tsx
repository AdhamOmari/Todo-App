import { ChangeEvent, useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { clearSearch, searchTodoAction } from "../redux/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { RootState } from "../redux/reducer";

interface Todo {
  id: number;
  text: string;
  isDone: boolean;
}

const SearchComponent = () => {
  const [searchText, setSearchText] = useState<string>("");
  const dispatch = useDispatch();
  const [searchActive, setSearchActive] = useState<boolean>(true);
  const [shake, setShake] = useState<boolean>(false);

  const filteredTodos: Todo[] = useSelector(
    (state: RootState) => state.filteredTodos as unknown as Todo[]
  );

  const handleSearch = () => {
    filteredTodos?.length > 0 ? setShake(false) : setShake(true);

    dispatch(searchTodoAction(searchText));
    setSearchActive(false);
  };

  const handleClear = () => {
    setSearchText("");
    dispatch(clearSearch());
    setShake(false);
    setSearchActive(true);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {}, [searchText, shake, filteredTodos]);

  return (
    <Form>
      <div className={`search-container ${shake ? "shake" : ""}`}>
        <Form.Group controlId="searchForm">
            <input
              type="text"
              placeholder="Search..."
              value={searchText}
              onChange={handleChange}
              className="search-input"
            />
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
              className="clear-icon form-btn"
              onClick={handleClear}
            />
          )}
        </Button>
      </div>
    </Form>
  );
};

export default SearchComponent;
