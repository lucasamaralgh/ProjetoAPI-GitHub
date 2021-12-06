const imgGit = document.getElementById('gitperfil');
const nomeGit = document.getElementById('gitNome');
const bioGit = document.getElementById('gitBio');
const followGit = document.getElementById('follow');
const repGit = document.getElementById('gitRep');
const seguindoGit = document.getElementById('gitSeguindo');



fetch('https://api.github.com/users/lucasamaralgh')
    .then(response => response.json())
    .then(data => {
    
        // Prints result from `response.json()` in getRequest

        //pegando o link da imagem de perfil retornado pela requisição com API e inserindo no campo imgGit do html

        imgGit.innerHTML =  `<img class = "imgAvatar" src="${data.avatar_url}">`;

        //pegando o link do perfil GITHUB retornado pela requisição com API e o nome do Perfil, depois exibindo atraves do html

        nomeGit.innerHTML= `<a id="userLink" href="${data.html_url}"> <i>${data.name}</i> <br> User:  ${data.login} </a>`;

        //pegando a bio do perfil GITHUB retornado pela requisição com API , depois exibindo atraves do html
        
        bioGit.innerHTML= `Bio: ${data.bio}`;
 
        //pegando a quantidade de seguidores e seguindo do perfil GITHUB retornado pela requisição com API , depois exibindo atraves do html

        followGit.innerHTML =  `<a >Seguindo : ${data.following}</a><br> <a>Seguidores : ${data.followers}</a> `;
        

    })
    //tratamento de erro
    .catch(error => console.error(error));
    
//requisição para listagem de informações de repositorios
fetch('https://api.github.com/users/lucasamaralgh/repos')
.then(response => response.json())
.then(data =>{


    //mostrando nome e descrição de cada diretorio pelo html

    repGit.innerHTML = `<img height="180em" src="https://github-readme-stats.vercel.app/api?username=${data[0].name}&show_icons=true&theme=tokyonight&include_all_commits=true&count_private=true"/> <h2><b>Nome do Repositorio:</b> ${data[0].name}</h2> <h4>${data[0].description}</h4> <h4><b>Última atualização</b>: ${data[0].updated_at}</h4><br><a href="${data[0].html_url}" id = "userLink"><h4>Veja mais sobre</h4></a>`;


}

)
.catch(error => console.log(error));

//requisição para listagem de informações de usuarios que o perfil github segue
fetch('https://api.github.com/users/lucasamaralgh/following')
.then(response => response.json())
.then(data =>{
    
    seguindoGit.innerHTML=`<a id = "userLink" href="${data[0].html_url} " ><img class = "imgAvatar" src="${data[0].avatar_url}" height = "300px"> <h3 id = "userLink" >${data[0].login}<h3></a> <br> <a href="${data[1].html_url}" id = "userLink" ><img class = "imgAvatar"src="${data[1].avatar_url}" height = "300px" id = "userLink"> <h3 id = "userLink" >${data[1].login}<h3></a> <br> <a href="${data[2].html_url}" id = "userLink" ><img class = "imgAvatar" src="${data[2].avatar_url}" height = "300px" id = "userLink" ><h3 id = "userLink">${data[2].login}<h3>`;
    
}
)
.catch(error => console.log(error));
