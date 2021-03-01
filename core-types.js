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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
var person = {
    name: "Arimoro Olamilekan",
    age: 19,
    // Arrays
    hobbies: ['coding', 'sports'],
    // Tuple
    role: Role
};
console.log(person, person.role);
