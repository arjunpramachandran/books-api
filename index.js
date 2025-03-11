fetch('/books')
    .then(response => response.json())
    .then(books => {
        const container = document.getElementById('book-card');
        container.innerHTML = ''; 

        books.forEach(book => {
            const bookDiv = document.createElement('div');
            bookDiv.classList.add('col-md-3')
            bookDiv.innerHTML = `
                    
                        <div class="card" style="width: 18rem;">
                            <img src="${book.img}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${book.Name}</h5>
                                <p class="card-text">${book.Author}</p>
                                <p class="card-text fst-italic">${book.Year}</p>
                            </div>
                        </div>
                  
                    `;
            container.appendChild(bookDiv);
        });
    })
    .catch(error => {
        document.getElementById('book-card').innerHTML = 'Error loading products';
        console.error('Error fetching books:', error);
    });