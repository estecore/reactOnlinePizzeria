import React from 'react';

import { Categories, PizzaBlock, SortPopUp } from '../components';

export default function Home({ items }) {
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClick={(name) => console.log(name)}
          items={['Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']}
        />
        <SortPopUp items={['популярности', 'цене', 'алфавиту']} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items.map((obj) => (
          <PizzaBlock key={obj.id} {...obj} />
        ))}
      </div>
    </div>
  );
}
