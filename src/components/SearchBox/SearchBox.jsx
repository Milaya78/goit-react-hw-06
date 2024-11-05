import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { selectFilter, setFilter } from "../../redux/filtersSlice";

function SearchBox() {
  const dispatch = useDispatch();
  const value = useSelector(selectFilter);

  const onFilter = (value) => {
    const action = setFilter(value);
    dispatch(action);
  };

  return (
    <div className={css.wrapper}>
      <label htmlFor="search">Find contacts by name</label>
      <input
        type="text"
        id="search"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
        className={css.searchInput}
      />
    </div>
  );
}

export default SearchBox;
