function filtroPorNivelDeAlcohol(array, value) {
  let newArray = array
    .filter(function (cerveza) {
      return cerveza.abv <= value;
    })
    .map(function (cerveza) {
      return {
        nombre: cerveza.name,
        alcohol: cerveza.abv,
        amargor: cerveza.ibu,
      };
    });
  console.log(newArray);
  return newArray;
}
// filtroPorNivelDeAlcohol(beers, 4.5);

function obtenerCervezasMasAlcoholicas(array) {
  let newArray = array
    .sort(function (a, b) {
      return b.abv - a.abv;
    })
    .slice(0, 10);
  console.log(newArray);
  return newArray;
}
//obtenerCervezasMasAlcoholicas(beers)

function obtenerCervezasMenosAmargas(array) {
  let newArray = array
    .sort(function (a, b) {
      return a.ibu - b.ibu;
    })
    .slice(0, 10);
  console.log(newArray);
  return newArray;
}
//obtenerCervezasMenosAmargas(beers)

function ordenarCervezasPorPropiedad(array, propiedad, ascendente) {
  let newArray = array
    .sort(function (a, b) {
      if (ascendente) {
        return a[propiedad] - b[propiedad];
      } else {
        return b[propiedad] - a[propiedad];
      }
    })
    .slice(0, 10);
  console.log(newArray);
  return newArray;
}
//ordenarCervezasPorPropiedad(beers,"ph",true)

function renderizarTablaConCervezas(array, id) {
  const tabladeCervezas = document.createElement("table");
  const encabezado = tabladeCervezas.createTHead();
  const filaEncabezado = encabezado.insertRow();
  filaEncabezado.innerHTML = "<th>Name</th><th>ABV</th><th>IBU</th>";
  const elementosDeLaTabla = tabladeCervezas.createTBody();

  arr.forEach(function (cerveza) {
    const fila = elementosDeLaTabla.insertRow();
    fila.innerHTML = `<td>${cerveza.name}</td><td>${cerveza.abv}</td><td>${cerveza.ibu}</td>`;
  });

  document.getElementById(id).appendChild(tabladeCervezas);
}

//renderizarTablaConCervezas(beers,2)
