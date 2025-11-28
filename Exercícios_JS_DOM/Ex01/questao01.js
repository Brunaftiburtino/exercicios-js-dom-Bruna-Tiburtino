function inserirTitulo() {
    
    const texto = document.getElementById("txt-titulo").value;
  
    const titulo = document.getElementById("titulo");
  
    titulo.innerText = texto;

    titulo.style.color = "blue";
}
