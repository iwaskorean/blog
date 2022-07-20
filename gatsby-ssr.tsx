import React from 'react';
import type { GatsbySSR } from 'gatsby';

const wrapPageElement: GatsbySSR['wrapPageElement'] = ({ element }) => (
  <div className='wrap'>{element}</div>
);

export { wrapPageElement };
