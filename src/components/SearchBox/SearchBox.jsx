import css from './SearchBox.module.css';
export default function SearchBox({ value, onChange }) {
  const handleChange = e => {
    let searchValue = e.target.value;
    onChange(searchValue);
  };

  return (
    <div>
      <label className={css.search}>
        Find contacts by name
        <input
          onChange={handleChange}
          type="text"
          value={value}
          placeholder="Search by name"
        />
      </label>
    </div>
  );
}
