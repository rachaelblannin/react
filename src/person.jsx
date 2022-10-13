function person() {
    const me = {
        name: "Rach",
        age: 35,
        address: "Castle Cat"
    }

return (
    <div>
        <p>Name {me.name}</p>
        <p>Age {me.age}</p>
        <p>Address {me.address}</p>
    </div>
)
}

export default person;
