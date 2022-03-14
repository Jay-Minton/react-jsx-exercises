function Person(props) {
    const ageText = props.age >= 18 ? "Go vote" : "Go study";
    const hobbies = props.hobbies.map(hobby => <li>{hobby}</li>);
    return <div>
        <p>Learn some infromation about this person</p>
        <p>{props.name.slice(0,6)}</p>
        <p>{props.age}</p>
        <h3>{ageText}</h3>
        <h5>hobbies:</h5>
        <ul>
            {hobbies}
        </ul>
    </div>
}