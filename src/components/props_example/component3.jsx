import Styles from "./props.module.css";
function Component3({ persons, personsArray }) {
  return (
    <>
      {/* {console.log(props)} */}
      <h2 className={Styles.heading}>Person props from object</h2>
      <ul>
        {persons.map((person, i) => (
          <li key={i}>
            Name:{person.name}, Age:{person.age}
          </li>
        ))}
        <br />
        <h2 className={Styles.heading}>Array Example</h2>
        {personsArray.map((person, i) => (
          <li>{person}</li>
        ))}
      </ul>
    </>
  );
}

export default Component3;
