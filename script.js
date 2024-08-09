const apiKey = '4e828867cd0046ae85441e1745500151';
const newsContainer = document.getElementById('news-container');
const customImagePath = 'images/img.jpg'; 

async function fetchNews() {

      try {
          
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`);

            if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
          
    const data = await response.json();
    displayNews(data.articles);

            } catch (error) {
        console.error('Error fetching the news:', error);
        newsContainer.innerHTML = '<p>Sorry, something went wrong. Please try again later.</p>';
}

function displayNews(articles) {
    newsContainer.innerHTML = '';

    articles.forEach(article => {
        const articleElement = document.createElement('div');
        articleElement.classList.add('article');


        const imageTag = `<img src="${customImagePath}" alt="Custom Image">`;

        articleElement.innerHTML = `
            ${imageTag}
            <h2>${article.title}</h2>
            <p>${article.description}</p>
            <a href="${article.url}" target="_blank">Read more</a>
        `;
        newsContainer.appendChild(articleElement);
    });
}
}
fetchNews();
