const obj = {
  name: "sachin",
  city: "mumbai",
  contact: "987945342",
};
const keys = Object.keys(obj);
const newArr = keys.map((key) => obj[key]);
console.log(newArr);
