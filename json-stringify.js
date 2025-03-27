const user = {
 nombre: "Juan",
 edad: 30,
 ciudad: "Madrid",
};

const stringJSON = JSON.stringify(user);
console.log(JSON.parse(stringJSON));
