body {
  background-color: black;
}

.primeraImagen {
  height: 30%;
}
.primeraImagen a {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.primeraImagen .imagenHeader {
  width: 30%;
  height: 100%;
}

* {
  font-family: Arial, Helvetica, sans-serif;
  padding: 0;
  margin: 0;
  list-style: none;
}

header {
  width: 100%;
  height: 3rem;
  display: flex;
  border-bottom: 1px gray solid;
}
header .logoYTitulo {
  display: flex;
  height: 100%;
  width: 20%;
}
header .logoYTitulo a {
  align-self: center;
  text-decoration: none;
  color: black;
  font-size: 20px;
  font-weight: 800;
}
header .logoYTitulo a:hover {
  color: red;
}
header .enlacesPrincipales {
  width: 80%;
}
header .enlacesPrincipales .menuDeEnlaces {
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: end;
}
header .enlacesPrincipales .menuDeEnlaces a {
  padding-top: 0.5%;
  text-decoration: none;
  color: black;
  font-size: 20px;
  font-weight: 700;
  height: 100%;
  border-left: 1px black solid;
}
header .enlacesPrincipales .menuDeEnlaces a:hover {
  color: red;
}
header .enlacesPrincipales .menuDeEnlaces a li {
  align-self: center;
}
header .enlacesPrincipales .menuDeEnlaces a li img {
  height: 100%;
  width: 100%;
}

main .noticias {
  margin-left: 12%;
  display: grid;
  grid-template-columns: 2.5fr 1fr;
  width: 75%;
  column-gap: 20px;
  row-gap: 10px;
  justify-items: center;
}
main .noticias .noticia {
  box-shadow: 1px 1px gray;
  border-radius: 10px;
}
main .noticias .noticia img {
  width: 100%;
  border-radius: 10px;
}
main .noticias #noticiaUno {
  background-color: red;
}
main .noticias #noticiaDos {
  background-color: gray;
}
main .noticias #noticiaTres {
  background-color: blue;
  width: 100%;
  height: 80%;
}
main .noticias #noticiaTres img {
  height: 60%;
}
main .noticias #noticiaCuatro {
  background-color: rgb(144, 0, 255);
  width: 100%;
  height: 80%;
}
main .noticias #noticiaCuatro img {
  height: 60%;
}
main .noticias h3 {
  font-weight: 600;
  color: white;
}
main h1 {
  text-align: center;
  font-size: 40px;
  font-weight: 800;
}
main h2 {
  font-weight: 700;
}
main .filaDeProductos {
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 20px;
}
main .filaDeProductos .producto {
  width: 20rem;
  height: 22rem;
  box-shadow: 1px 1px 5px 0px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
main .filaDeProductos .producto img {
  width: 12rem;
  height: 12rem;
}
main .filaDeProductos .producto p {
  font-weight: 590;
}
main .filaDeProductos .producto .precioAnterior {
  text-decoration: line-through;
}
main .filaDeProductos .producto button {
  border-radius: 10px;
  border: none;
  height: 2.5rem;
  width: 10rem;
  color: white;
  background-color: rgb(0, 172, 0);
  transition: background-color 0.2s;
}
main .filaDeProductos .producto button:hover {
  background-color: white;
  color: rgb(0, 172, 0);
  border: 1px solid rgb(0, 172, 0);
}

footer {
  width: 100%;
  height: 30%;
  margin-top: 3rem;
  background-color: red;
}
footer .enlacesSecundarios {
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
footer .enlacesSecundarios ul {
  font-size: 20px;
}
footer .enlacesSecundarios ul h3 {
  font-weight: 600;
  color: white;
}
footer .enlacesSecundarios ul a:hover {
  color: black;
}
footer .enlacesSecundarios ul li {
  color: white;
}
footer a {
  text-decoration: none;
  color: white;
}

/*# sourceMappingURL=main.cs.map */
