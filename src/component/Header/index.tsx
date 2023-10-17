import { ChangeEvent, useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { clearSearch, searchTodoAction } from "../../redux/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { RootState } from "../../redux/reducer";
import style from "./styles.module.css";

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
  const [inputActive, setInputActive] = useState<boolean>(false);

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

  const handelIsActice = () => {
    setInputActive(!inputActive);
    setTimeout(() => {
      setInputActive(false);
    }, 7000);
    setSearchText("");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };
  useEffect(() => {
    setShake((prevShake) => {
      return filteredTodos?.length > 0 ? !prevShake : false;
    });
  }, [filteredTodos?.length]);

  return (
    <>
      {inputActive ? (
        <Form>
          <div
            className={`${style["search-container"]} ${
              shake ? style.shake : ""
            }`}
          >
            <input
              type="text"
              placeholder="Search..."
              value={searchText}
              onChange={handleChange}
              className={style["search-input"]}
            />
            <Button
              variant="outline-info"
              className="form-btn"
              onClick={searchActive ? handleSearch : handleClear}
            >
              {searchActive ? (
                <FontAwesomeIcon
                  icon={faSearch}
                  className={style["search-icon"]}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faTimes}
                  className={`${style["clear-icon"]} form-btn`}
                  onClick={handleClear}
                />
              )}
            </Button>
          </div>
        </Form>
      ) : (
        <Button
          variant="outline-info"
          className="form-btn"
          onClick={handelIsActice}
        >
          <FontAwesomeIcon icon={faSearch} className={style["search-icon"]} />
        </Button>
      )}
    </>
  );
};

export default SearchComponent;
