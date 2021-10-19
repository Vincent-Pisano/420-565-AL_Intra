import Person from './Person'
const Persons = ({persons}) => {

    console.log(persons)
    return (
        <>
            {persons.map((person) => (
                <Person key={person.id} 
                person={person}/>
            ))}
        </>
    )
}

export default Persons