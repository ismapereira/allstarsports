// Abertura e fechamento dos itens de navegação para design responsivo

let menuicon = document.querySelector('#menu-icon');
let menunav = document.querySelector('.menunav');

menuicon.onclick = () => {
    menuicon.classList.toggle('bx-x');
    menunav.classList.toggle('active')
}

// Rolagem das seções

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    // mudança na cor pelos botões de navegação
    sections.forEach(sec =>{
        let top = window.scrollY
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            //ativar os links de navegação
            navlinks.forEach(links => {
                links.classList.remove('ativado');
                document.querySelector('header nav a[href*=' + id +']').classList.add('ativado');
            })

            // ativar animação de transição das seções

            sec.classList.add('mostrar-animar');
        }

        // para fazer a animação de transição se repetir na rolagem

        else{
            sec.classList.remove('mostrar-animar');
        }
    });

    // mudança de cor do HEADER conforme rolagem
    let header = document.querySelector('header');
    
    header.classList.toggle('sticky', window.scrollY > 100);

    // Fechar navbar ao clicar em um dos links

    menuicon.classList.remove('bx-x');
    menunav.classList.remove('active')

    // Animação do footer na rolagem

    let rodape = document.querySelector('footer');

    rodape.classList.toggle('mostrar-animar', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}