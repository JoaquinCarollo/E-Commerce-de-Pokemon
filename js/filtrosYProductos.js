/*<ul class="tipos">
<h3>Tipo</h3>
<li><input type="checkbox" name="" id="" />Fuego</li>
<li><input type="checkbox" name="" id="" />Agua</li>
<li><input type="checkbox" name="" id="" />Planta</li>
<li><input type="checkbox" name="" id="" />Normal</li>
<li><input type="checkbox" name="" id="" />Electrico</li>
<li><input type="checkbox" name="" id="" />Roca</li>
<li><input type="checkbox" name="" id="" />Insecto</li>
<li><input type="checkbox" name="" id="" />Tierra</li>
<li><input type="checkbox" name="" id="" />Volador</li>
<li><input type="checkbox" name="" id="" />Psiquico</li>
<li><input type="checkbox" name="" id="" />Fantasma</li>
<li><input type="checkbox" name="" id="" />Sinestro</li>
<li><input type="checkbox" name="" id="" />Hielo</li>
<li><input type="checkbox" name="" id="" />Luchador</li>
<li><input type="checkbox" name="" id="" />Dragon</li>
</ul>
<ul class="precios">
<h3>Precios</h3>
  <li><input type="checkbox" name="" id="" />500 a 1000</li>
  <li><input type="checkbox" name="" id="" />1000 a 1500</li>
  <li><input type="checkbox" name="" id="" />1500 a 2000</li>
  <li><input type="checkbox" name="" id="" />2000 a 2500</li>
  <li><input type="checkbox" name="" id="" />3000 a 3500</li>
  <li><input type="checkbox" name="" id="" />4000 a 4500</li>
  <li><input type="checkbox" name="" id="" />5000 a 5500</li>
  <li><input type="checkbox" name="" id="" />6000 a 6500</li>
  <li><input type="checkbox" name="" id="" />6500 a 7000</li>
  <li><input type="checkbox" name="" id="" />7000 a 7500</li>
  <li><input type="checkbox" name="" id="" />7500 a 8000</li>
  <li><input type="checkbox" name="" id="" />8000 a 8500</li>
</ul>*/
const filtros = document.getElementById("filtrosPokemones");
const desplegarFiltros = document.getElementById("desplegarFiltros");
const listaDeFiltrosPokemones = document.getElementById(
  "listaDeFiltrosPokemones"
);
function mostrarFiltros() {
  listaDeFiltrosPokemones.innerHTML = "";
  const listaDeTipos = document.createElement("ul");
  listaDeFiltrosPokemones.appendChild(listaDeTipos);
  const tituloTipos = document.createElement("h3");
  tituloTipos.innerText = "Tipos";
  listaDeTipos.appendChild(tituloTipos);
  for (let i = 0; i < 13; i++) {
    const listaT = document.createElement("li");
    listaDeTipos.appendChild(listaT);
    const tipo = document.createElement("input");
    tipo.type = "checkbox";
    const labelTipo = document.createElement("label");
    labelTipo.innerText = tipos[i];
    listaT.appendChild(tipo);
    listaT.appendChild(labelTipo);
  }
  const listaDePrecios = document.createElement("ul");
  listaDeFiltrosPokemones.appendChild(listaDePrecios);
  const tituloPrecios = document.createElement("h3");
  tituloPrecios.innerText = "Precios";
  listaDePrecios.appendChild(tituloPrecios);
  for (let i = 0; i < 15; i++) {
    const listaP = document.createElement("li");
    listaDePrecios.appendChild(listaP);
    const precio = document.createElement("input");
    precio.type = "checkbox";
    const labelPrecio = document.createElement("label");
    labelPrecio.innerText = precios[i];
    listaP.appendChild(precio);
    listaP.appendChild(labelPrecio);
  }
}
const tablaDeProductosPokemon = document.getElementById(
  "tablaDeProductosPokemon"
);
for (let i = 0; i < pokemones.length; i++) {
  const filaPokemon = document.createElement("tr");
  const columnaProductoPokemon = document.createElement("td");
  const productoPokemon = document.createElement("img");
  productoPokemon.src = pokemones[i].producto;
  columnaProductoPokemon.appendChild(productoPokemon);
  const columnaNombrePokemon = document.createElement("td");
  columnaNombrePokemon.innerText = pokemones[i].nombre;
  const columnaNumeroPokemon = document.createElement("td");
  columnaNumeroPokemon.innerText = pokemones[i].pokedex;
  const columnaTipoPokemon = document.createElement("td");
  const tipoPokemon = document.createElement("img");
  tipoPokemon.src = pokemones[i].tipo;
  columnaTipoPokemon.appendChild(tipoPokemon);
  const columnaPrecioPokemon = document.createElement("td");
  columnaPrecioPokemon.innerText = pokemones[i].precio;
  const columnaAniadirAlCarritoPokemon = document.createElement("td");
  const botonAniadirCarrito = document.createElement("button");
  botonAniadirCarrito.innerText = "Añadir al carrito";
  columnaAniadirAlCarritoPokemon.appendChild(botonAniadirCarrito);
  filaPokemon.appendChild(columnaProductoPokemon);
  filaPokemon.appendChild(columnaNombrePokemon);
  filaPokemon.appendChild(columnaNumeroPokemon);
  filaPokemon.appendChild(columnaTipoPokemon);
  filaPokemon.appendChild(columnaPrecioPokemon);
  filaPokemon.appendChild(columnaAniadirAlCarritoPokemon);
  tablaDeProductosPokemon.appendChild(filaPokemon);
}
desplegarFiltros.onclick = () => mostrarFiltros();

/*
              <tr>
                <td>
                  <img
                    src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/126.png"
                    alt="magmar"
                  />
                </td>
                <td>Magmar</td>
                <td>Numero</td>
                <td>
                  <img
                    src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/77bf3ba9-0aac-4452-be82-de536b5aab32/dezrx16-513fe1dd-38ed-427b-bd33-f06c814bf32f.png/v1/fill/w_1280,h_1278/electric_energy_card_vector_symbol_by_biochao_dezrx16-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI3OCIsInBhdGgiOiJcL2ZcLzc3YmYzYmE5LTBhYWMtNDQ1Mi1iZTgyLWRlNTM2YjVhYWIzMlwvZGV6cngxNi01MTNmZTFkZC0zOGVkLTQyN2ItYmQzMy1mMDZjODE0YmYzMmYucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.U_F136VX-qaPr4LEg6He5GnACg1E5NsYhX9uRrmS_Ro"
                    alt="tipoFuego"
                  />
                </td>
                <td>7000P</td>
                <td><button>Añadir al carrito</button></td>
              </tr>
*/
