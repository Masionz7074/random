// Get the HTML elements we need to work with
const generateBtn = document.getElementById('generateBtn');
const userLink = document.getElementById('userLink');
const gameLink = document.getElementById('gameLink');
const resultsContainer = document.getElementById('results-container');

// The maximum number for the random ID (4.6 billion)
const MAX_ID = 4600000000;

// Add an event listener to the button for the 'click' event
generateBtn.addEventListener('click', () => {
    // 1. Generate a single random number
    // Math.random() gives a number between 0 and 1.
    // We multiply by MAX_ID and use Math.floor to get an integer from 0 to MAX_ID-1.
    // We add 1 to make the range from 1 to MAX_ID.
    const randomNumber = Math.floor(Math.random() * MAX_ID) + 1;

    // 2. Construct the two different link URLs
    const userProfileUrl = `https://www.roblox.com/users/${randomNumber}/profile/#!/about`;
    const gameUrl = `https://www.roblox.com/games/${randomNumber}/`;

    // 3. Update the website to show the new links
    
    // Update the 'href' attribute so the link works
    userLink.href = userProfileUrl;
    // Update the text content to display the link URL
    userLink.textContent = userProfileUrl;

    // Do the same for the game link
    gameLink.href = gameUrl;
    gameLink.textContent = gameUrl;

    // 4. Make the results container visible
    // This removes the 'hidden' class we set in the CSS
    resultsContainer.classList.remove('hidden');
});