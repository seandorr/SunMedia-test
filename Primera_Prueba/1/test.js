var rgb = {
  red: "#FF0000",
  green: "#00FF00",
  blue: "#0000FF",
};

var wb = {
  white: "#FFFFFF",
  black: "#000000",
};

// Crear array vacío
var mutableArray = [];
// Empujar ambos objectos al array
mutableArray.push(rgb, wb);

// Reduce para devolver un solo valor
const result = mutableArray.reduce(function (rgb, wb) {
  // Recorrer un objeto y asignar al otro para recuperar todos los valores
  Object.keys(wb).forEach(function (item) {
    rgb[item] = wb[item];
  });
  return rgb;
});

console.log(result);
