// Objects
// const person: {
//     name: string,
//     age: number,
//     hobbies: string[],
//     role: [number, string]
// } = {
//     name: "Arimoro Olamilekan",
//     age: 19,
//     // Arrays
//     hobbies: ['coding', 'sports'],
//     // Tuple
//     role: [2, 'developer']
// }

// Enum
enum Role { ADMIN, READ_ONLY, AUTHOR };

const person = {
    name: "Arimoro Olamilekan",
    age: 19,
    // Arrays
    hobbies: ['coding', 'sports'],
    // Tuple
    role: Role
}

console.log(person, person.role);