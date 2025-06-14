import React from 'react';

const Header = ({name}) => {
  return (
    <header className='text-4xl md:text-5xl ff-allen text-center text-ternary'>
      {name}
    </header>
  );
};

export default Header;
