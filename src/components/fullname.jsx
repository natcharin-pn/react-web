import React from 'react';

    class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    }

    function Greeting() {
    const person = new Person('John', 'Doe');

    return (
        <div>
        <h1>Hello, {person.getFullName()}!</h1>
        </div>
    );
    }

export default Greeting;
