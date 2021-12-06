 $(document).ready(function () {$('#searchButton').click(function () {
        $.ajax({
          url: `https://api.github.com/search/repositories?q=${$('#search').val()}`,
          type: 'GET',
          success: function (result) {
            $('#reposContainer').empty();
            result.items.forEach(element => {
              $('#reposContainer').append(`
                          <div class="cardRepo">
                            <br>
                             <h3 id="nomeRepo"> -> Nome: ${element.name}</h3><br/>
                             <h4  id="descRepo">-><i> Descrição: ${element.description ?? 'Não informada'}<i></h4><br/>
                                <h4 id="lingRepo">-> Linguagem: ${element.language ?? 'Nenhuma'}</h4><br/><br/>
                                <h4 id="authorRepo">->> Autor:<a href="${element.owner.html_url}"> ${element.owner.login ?? 'nenhuma'}</a> </h4>
                             <button type="button" id="visitarRepo"><a href="${element.html_url}">VISITAR</a></button><br/><br/>
                            ==========
                          </div>
                      `);
            });
            $('#divPesquisa').attr("src", result.items.length);
            let tamanho= result.items.length;
            console.log('tesTamn',tamanho)
          }
        })
      })
    })