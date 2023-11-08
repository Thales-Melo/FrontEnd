function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    // O seguite trecho serve para alterar a foto de perfil de acordo com o tema
    // Mas quero utilizar somente uma foto mesmo

    // const img = document.querySelector("#profile img")

    // if (html.classList.contains("light")) {
    //     img.setAttribute("src", "assets/IMAGEM")
    // }
    // else {
    //     img.setAttribute("src", "assets/IMAGEM_2")
    // }
}