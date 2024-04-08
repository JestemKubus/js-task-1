const categoriesList = document.querySelectorAll('#categories .item');
        console.log('Liczba kategorii:', categoriesList.length);
        categoriesList.forEach((category) => {
            const categoryName = category.querySelector('h2').textContent;
            const categoryItems = category.querySelectorAll('ul li');
            console.log(`${categoryName}: ${categoryItems.length} elementów`);
        });