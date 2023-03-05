const booksByCategory = [
    { // um objeto, com um array que contem mais 3 objetos
        category: "Riqueza",
        books: [ // um array com 3 objetos
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
                
            },

            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            
            },

            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kyosaki e Sharon L. Lechter",
            },
        ],
    },

    { // um objeto com 2 atributos, sendo um deles um array de objetos de tamanho5
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubistituível",
                author: "Augusto Cury",
            },

            {

                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury",
                
            },
 
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",

            },


            {
                title: "Hábitos atomicos",
                author: "aleatorio",
            },

            {
                title: "Qualquer livro generico",
                author: "aleatorio",
            },

        ],
    },
]

function countBooks(){
    for(let category of booksByCategory){
        console.log(`Total de livros da categoria: ${category.category}`);
        console.log(category.books.length);    
}

//contar o número de categorias
}

function countAuthors(){
    let authors = [];

    for(let category of booksByCategory){
        for(let book of category.books){
            if(authors.indexOf(book.author) == -1){ // se dentro do array ja tiver o autor do livro
                authors.push(book.author);
            }
        }
    }
    console.log(`Total de autoroes: ${authors.length}, eles são:`, authors)
}

countAuthors();

// Mostrar os livros do autor Augusto Cury
function showBooksOfAuthors(nameAuthor){
    let booksAuthor = [];
    
    for(let category of booksByCategory){
        for(let books of category.books){
            if(books.author.includes(nameAuthor)){ //poderia fazer assim, books.author == nameAuthor
                booksAuthor.push(books.title);
            }
        }
    }
    
    console.log(booksAuthor.length > 0 ?
         `Livros do autor ${nameAuthor} encontrados:\n${booksAuthor.join("\n")}` :
         "Autor não encontrado");
}

showBooksOfAuthors("Augusto Cury");
