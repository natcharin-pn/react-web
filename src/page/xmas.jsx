import React, { useState, useEffect } from 'react';
import { Input, Button, Card } from 'antd';

function AnimalsComponent() {
    const initialAnimals = {
        animal1: {
                name: "Max",
                type: "Dog",
                breed: "Golden Retriever",
                age: 3,
                quantity: 1,
                owner: "John"
            },
            animal2: {
                name: "Misty",
                type: "Cat",
                breed: "Siamese Cat",
                age: 5,
                quantity: 2,
                owner: "Alice"
            },
            animal3: {
                name: "Buddy",
                type: "Dog",
                breed: "Beagle",
                age: 4,
                quantity: 1,
                owner: "Mike"
            },
            animal4: {
                name: "Lucy",
                type: "Cat",
                breed: "Persian Cat",
                age: 2,
                quantity: 3,
                owner: "Sarah"
            },
            animal5: {
                name: "Charlie",
                type: "Dog",
                breed: "Labrador Retriever",
                age: 6,
                quantity: 1,
                owner: "Emma"
            }
    };

    const [animals] = useState(initialAnimals);
    const [searchName, setSearchName] = useState('');
    const [foundAnimal, setFoundAnimal] = useState(null);

    useEffect(() => {
        if (searchName) {
            const found = Object.values(animals).find(animal => 
                animal.name.toLowerCase() === searchName.toLowerCase()
            );
            setFoundAnimal(found);
        }
    }, [searchName]); 

    const handleSearchChange = (event) => {
        setSearchName(event.target.value);
    };

    const renderAnimalDetails = (animal) => {
        return (
            <Card title={animal.name} style={{ width: 300, marginTop: 16 }}>
                <p>Type: {animal.type}</p>
                <p>Breed: {animal.breed}</p>
                <p>Age: {animal.age}</p>
                <p>Quantity: {animal.quantity}</p>
                <p>Owner: {animal.owner}</p>
            </Card>
        )
    };

    return (
        <div className='center' style={{ padding: '20px' }}>
            <Input 
                placeholder="Enter animal name" 
                onChange={handleSearchChange} 
                style={{ width: 200, marginRight: '10px' }}
            />
            <Button type="primary" onClick={() => setFoundAnimal(null)}>Search</Button>
            <div style={{ marginTop: '20px' }}>
                {foundAnimal ? renderAnimalDetails(foundAnimal) : <p>No animal found.</p>}
            </div>
        </div>
    );
}

export default AnimalsComponent;