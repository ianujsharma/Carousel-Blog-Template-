    document.addEventListener('DOMContentLoaded', () => {
        const searchInput = document.querySelector('.search-input');
        const categorySelector = document.querySelector('.category-selector');
        const resultsList = document.querySelector('.results-list');
        const categoryDescription = document.querySelector('.category-description-text');

        // Set default category selection to "All Categories"
        categorySelector.value = "all";

        // Initial description text
        categoryDescription.textContent = "Explore all blog posts.";

        // Fetch and display results on page load
        fetchSearchResults();

        searchInput.addEventListener('input', fetchSearchResults);
        categorySelector.addEventListener('change', fetchSearchResults);

        function fetchSearchResults() {
            const query = searchInput.value.trim().toLowerCase();
            const category = categorySelector.value.toLowerCase();

            // Update category description
            updateCategoryDescription(category);

            // Simulate fetching search results
            const results = getSearchResults(query, category);

            displayResults(results);
        }

        function getSearchResults(query, category) {
            // Placeholder for actual search logic
            // Dummy data for now as this will be handled by the server, afterward.***
            const allResults = [
                { title: "Sample Post 1", content: "Sample content for post 1", image: "images/post1.jpg", href: "post1.html", tags: ["food", "tag1","tag2"] },
                { title: "Sample Post 2", content: "Sample content for post 2", image: "images/post2.jpg", href: "post2.html", tags: ["travel", "tag2"] },
                { title: "Sample Post 3", content: "Sample content for post 3", image: "images/post3.jpg", href: "post3.html", tags: ["food", "tag3"] },
                { title: "Sample Post 4", content: "Sample content for post 4", image: "images/post4.jpg", href: "post1.html", tags: ["lifestyle", "tag4"] },
                { title: "Sample Post 5", content: "Sample content for post 5", image: "images/post5.jpg", href: "post1.html", tags: ["fashion", "tag5"] },
                { title: "Sample Post 6", content: "Sample content for post 6", image: "images/post6.jpg", href: "post1.html", tags: ["travel", "tag6"] },
                
                
                


            ];

            return allResults.filter(post =>
                (category === "all" || post.tags.includes(category)) &&
                (query === "" || post.title.toLowerCase().includes(query) || post.content.toLowerCase().includes(query))
            );
        }

        function displayResults(results) {
            resultsList.innerHTML = '';

            if (results.length === 0) {
                resultsList.innerHTML = '<p>No results found.</p>';
                return;
            }

            results.forEach(result => {
                const resultItem = document.createElement('div');
                resultItem.classList.add('result-item');

                resultItem.innerHTML = `
                    <a href="${result.href}" class="post-link">
                    <img src="${result.image}" alt="${result.title}">
                    <h4>${result.title}</h4>
                    <p>${result.content}</p>
                    </a>
                `;

                resultsList.appendChild(resultItem);
            });
        }

        function updateCategoryDescription(category) {
            let description = "";

            switch (category) {
                case "all":
                    description = "Explore all blog posts.";
                    break;
                case "food":
                    description = "Discover delicious food-related posts.";
                    break;
                case "travel":
                    description = "Read about amazing travel adventures.";
                    break;
                case "lifestyle":
                    description = "Explore articles about lifestyle choices.";
                    break;
                case "fashion":
                    description = "Find the latest fashion trends.";
                    break;
                default:
                    description = "Explore all blog posts.";
                    break;
            }

            categoryDescription.textContent = description;
        }
    
        
    });
