import React from "react";

// function / stateless component with props

const ExampleThreeWithProps = props => {
  return (
    <div>
      <h1>Star Wars time</h1>
      <table>
        <tbody>
          {props.people.map((club, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{club.gender}</td>
              <td>{club.name}</td>
              <td>{club.hair_color}</td>
            </tr>
          ))}
          <tr>
            <td>Add: </td>
            <td>
              <input
                name="newGender"
                onChange={props.updateInput}
                value={props.newGender}
              />
            </td>
            <td>
              <input
                name="newName"
                onChange={props.updateInput}
                value={props.newName}
              />
            </td>
            <td>
              <input
                name="newHairColor"
                onChange={props.updateInput}
                value={props.newHairColor}
              />
            </td>
            <td>
              <button onClick={props.addToSwapi}>submit</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ExampleThreeWithProps;
