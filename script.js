// Wait for the HTML document to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Get references to our HTML elements ---
    const generateBtn = document.getElementById('generateBtn');
    const userLinkElement = document.getElementById('userLink');
    const gameLinkElement = document.getElementById('gameLink');
    const resultsContainer = document.getElementById('results-container');
    
    // The maximum possible ID number (4.6 billion)
    const MAX_ID = 4600000000;

    // --- 2. Define the function that generates the links ---
    function generateLinks() {
        // Generate one random whole number between 1 and MAX_ID
        const randomNumber = Math.floor(Math.random() * MAX_ID) + 1;

        // Create the two URL strings using the same random number
        const userProfileURL = `https://www.roblox.com/users/${randomNumber}/profile/#!/about`;
        const gameURL = `https://www.roblox.com/games/${randomNumber}/`;

        // Update the user link element on the page
        userLinkElement.href = userProfileURL;
        userLinkElement.textContent = userProfileURL;

        // Update the game link element on the page
        gameLinkElement.href = gameURL;
        gameLinkElement.textContent = gameURL;

        // Make the results container visible if it was hidden
        if (resultsContainer.classList.contains('hidden')) {
            resultsContainer.classList.remove('hidden');
        }
    }

    // --- 3. Add an event listener to the button ---
    // When the button is clicked, it will call our generateLinks function
    generateBtn.addEventListener('click', generateLinks);
});