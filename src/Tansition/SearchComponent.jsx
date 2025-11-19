import PropTypes from 'prop-types';
import { useState, useTransition } from 'react';

function SearchComponent({ items }) {
  const [query, setQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState(items);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    startTransition(() => {
      const results = items.filter(item => item.includes(value));
      setFilteredItems(results);
    });
  };

  return (
    <div>
      <input value={query} onChange={handleChange} />
      {isPending && <p>Loading...</p>}
      <ul>
        {filteredItems.map(item => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
}

export default SearchComponent;

SearchComponent.propTypes = {
	items: PropTypes.arrayOf(PropTypes.string).isRequired,
}