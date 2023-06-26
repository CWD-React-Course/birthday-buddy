import Person from './Person.jsx';

const List = ({ people }) => {
  return (
    <section>
      {people.map(person => <Person key={person.id} {...person} />)}
    </section>
  );
}

export default List;
