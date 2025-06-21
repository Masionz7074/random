document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Get references to our HTML elements ---
    const generateBtn = document.getElementById('generateBtn');
    const userLinkElement = document.getElementById('userLink');
    const gameLinkElement = document.getElementById('gameLink');
    const resultsContainer = document.getElementById('results-container');
    const tierInfoElement = document.getElementById('tier-info'); // Get the new text element

    // --- 2. Define the Weighted Tiers ---
    // Each tier has a min/max ID range and a "weight".
    // A higher weight means that tier is more likely to be chosen.
    // YOU CAN CUSTOMIZE THESE VALUES!
    const TIERS = [
        { name: '1-10m',    min: 1,           max: 10000000,    weight: 50 }, // 1 - 10 Million
        { name: '10-500m',  min: 10000001,    max: 500000000,   weight: 30 }, // 10M - 500 Million
        { name: '500m-1.5b',      min: 500000001,   max: 1500000000,  weight: 15 }, // 500M - 1.5 Billion
        { name: '1.5b-4.6b', min: 1500000001,  max: 4600000000,  weight: 5  }  // 1.5B - 4.6 Billion
    ];

    // Calculate the total weight of all tiers combined.
    const totalWeight = TIERS.reduce((sum, tier) => sum + tier.weight, 0);

    // --- 3. Define the link generation function ---
    function generateLinks() {
        // --- Step A: Select a tier based on its weight ---
        let randomWeight = Math.random() * totalWeight;
        let selectedTier;

        for (const tier of TIERS) {
            if (randomWeight < tier.weight) {
                selectedTier = tier;
                break;
            }
            randomWeight -= tier.weight;
        }

        // --- Step B: Generate a random number ONLY within the selected tier's range ---
        const range = selectedTier.max - selectedTier.min;
        const randomNumberInTier = Math.floor(Math.random() * (range + 1)) + selectedTier.min;
        
        // --- Step C: Create the links and update the page ---
        const userProfileURL = `https://www.roblox.com/users/${randomNumberInTier}/profile/#!/about`;
        const gameURL = `https://www.roblox.com/games/${randomNumberInTier}/`;

        // Update the link elements
        userLinkElement.href = userProfileURL;
        userLinkElement.textContent = userProfileURL;
        gameLinkElement.href = gameURL;
        gameLinkElement.textContent = gameURL;
        
        // Update the tier info text
        tierInfoElement.textContent = `Generated from the "${selectedTier.name}" tier.`;

        // Make the results container visible
        resultsContainer.classList.remove('hidden');
    }

    // --- 4. Add the event listener to the button ---
    generateBtn.addEventListener('click', generateLinks);
});
