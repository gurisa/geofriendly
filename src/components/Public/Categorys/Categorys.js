import React from 'react';

import Category from './Category/Category';
import Div from '../../../hoc/Div/Div';

const category = props => {
  const category = props.category.map(data => (
    <Category
      key={data.name}
      width={props.width}
      name={data.name}
      path={data.path} />
  ));

  return (
    <Div>
      {category}
    </Div>
  );
}

export default category;