const obj = {
  name: "sachin",
  city: "mumbai",
  contact: "987945342",
};
const keys = Object.keys(obj).keys.map((key) => obj[key]);

console.log(keys);
