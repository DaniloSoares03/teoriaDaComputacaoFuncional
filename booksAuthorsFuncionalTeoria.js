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

function countAuthors() {
    const allAuthors = booksByCategory.flatMap(category => category.books.map(book => book.author));
    const uniqueAuthors = allAuthors.reduce((authors, author) => {
      if (!authors.includes(author)) {
        authors.push(author);
      }
      return authors;
    }, []);
    console.log(`Total de autores: ${uniqueAuthors.length}, eles são:`, uniqueAuthors);
  }

countAuthors();

function showBooksOfAuthors (nameAuthor) {
    const booksAuthor = booksByCategory.flatMap(category => 
        category.books.filter(book => book.author.includes(nameAuthor)).map(book => book.title));
    
    console.log(booksAuthor.length > 0 ?
         `Livros do autor ${nameAuthor} encontrados:\n${booksAuthor.join("\n")}` :
         "Autor não encontrado");
};

showBooksOfAuthors("Augusto Cury");