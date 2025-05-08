import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CustomSelect = ({ options, onSelect, placeholder = "Select a service" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
    if (onSelect) onSelect(option);
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative w-48 mt-3" ref={dropdownRef}>
      <button
        type="button"
        onClick={toggleDropdown}
        className="w-full text-left cursor-pointer focus:outline-none "
      >
        <span className="block truncate">
          {selected ? selected.name : placeholder}
        </span>
        <span className="absolute top-1 right-0 flex items-center pointer-events-none">
          <svg
            className={`h-5 w-5 text-black origin-center duration-100 `}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 01.707.293l5 5a1 1 0 01-1.414 1.414L10 5.414 5.707 9.707A1 1 0 114.293 8.293l5-5A1 1 0 0110 3z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </button>

      {isOpen && (
        <ul
          className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none"
          role="listbox"
        >
          {options.map((option) => (
            <li
              key={option.id}
              className={`cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-primary hover:text-white ${
                selected && selected.id === option.id ? 'font-semibold' : 'font-normal'
              }`}
              onClick={() => handleSelect(option)}
              role="option"
              aria-selected={selected && selected.id === option.id}
            >
              <Link to={`${option.link}/${option.id}`} className="block truncate">{option.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
