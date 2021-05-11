import React from 'react';
import peopleList from './peopleList';

// apps uses bdays
const Bdays = () => {

  const [people,setPeople] = React.useState(peopleList)

  return (
    <section>
      <h1>Birthdays</h1>
      {people.map((person) => {
        const {id, name, birthday, img} = person
        return (
          <article key={id}>
            <img src={img} alt="pfp"/>
            <div className='description'>
              <h2>{name}</h2>
              <h4>{birthday}</h4>
            </div>
          </article>
        )
      })}
      <button onClick={() => setPeople([])}>Clear All</button>
    </section>
  );
};

export default Bdays