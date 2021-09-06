import "./sorter.styles.scss";

const Sorter = ({ sortLinks }) => (
  <div className="sorter">
    <select
      className="sorter-select"
      defaultValue="sortBy"
      onChange={sortLinks}
    >
      <option value="sortBy" disabled hidden>
        Sort by
      </option>
      <option value="mostVoted">Most Voted</option>
      <option value="lessVoted">Less Voted</option>
    </select>
  </div>
);

export default Sorter;
