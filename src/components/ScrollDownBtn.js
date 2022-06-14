import React from 'react';
import { BiDownArrowAlt } from 'react-icons/bi';
import Link from 'react-scroll/modules/components/Link';

const ScrollDownBtn = () => {
  return (
    <div>
      <Link to='programming'>
        <BiDownArrowAlt className='scroll-down-btn' />
      </Link>
    </div>
  );
};

export default ScrollDownBtn;
