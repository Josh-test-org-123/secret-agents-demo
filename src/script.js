// Agent data
const agents = [
    { name: "Agent Shadow", emoji: "🦹‍♂️", specialty: "Stealth Operations" },
    { name: "Agent Phoenix", emoji: "🔥", specialty: "Explosive Expert" },
    { name: "Agent Cipher", emoji: "🧩", specialty: "Cryptography Master" },
    { name: "Agent Mirage", emoji: "🎭", specialty: "Master of Disguise" },
    { name: "Agent Volt", emoji: "⚡", specialty: "Tech Specialist" },
    { name: "Agent Frost", emoji: "❄️", specialty: "Arctic Operations" }
];

// Mission templates
const missionTemplates = [
    "Infiltrate the {location} and retrieve the {item} without being detected",
    "Decode the encrypted message hidden in {location} before midnight",
    "Prevent the theft of the {item} from the {location}",
    "Extract Agent {codename} from the {location} using only {gadget}",
    "Plant a tracking device on the {vehicle} at the {location}",
    "Intercept the secret meeting between {villain} and their associates at {location}"
];

const locations = ["underwater base", "mountain fortress", "abandoned warehouse", "luxury yacht", "secret laboratory", "casino royale", "arctic research station"];
const items = ["diamond laser", "microfilm", "prototype weapon", "secret formula", "ancient artifact", "encrypted hard drive"];
const codenames = ["Falcon", "Tiger", "Eagle", "Cobra", "Panther", "Wolf"];
const gadgets = ["invisible ink", "laser watch", "explosive chewing gum", "jetpack", "magnetic gloves", "hologram projector"];
const vehicles = ["stealth helicopter", "submarine", "sports car", "motorcycle", "private jet"];
const villains = ["Dr. Chaos", "The Shadow Broker", "Madame Viper", "Baron Von Doom"];

// Gadgets
const spyGadgets = [
    "🕶️ X-Ray Glasses",
    "⌚ Laser Watch",
    "🖊️ Explosive Pen",
    "📱 Decoder Phone",
    "🎩 Memory Eraser",
    "💼 Bulletproof Briefcase",
    "🔦 Night Vision Goggles",
    "🥾 Magnetic Boots"
];

// Secret codes
const secretCodes = [
    { encoded: "WKHUH LV QR VSRRQ", decoded: "THERE IS NO SPOON" },
    { encoded: "PBQR ANZR NYCUN", decoded: "CODE NAME ALPHA" },
    { encoded: "ZVFFVBA PBZCYRGR", decoded: "MISSION COMPLETE" },
    { encoded: "GUNG CEBPRFF", decoded: "TRUST NO ONE" },
    { encoded: "NPPRCG ZVFFVBA", decoded: "ACCEPT MISSION" }
];

let currentCode = null;

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    loadAgents();
    loadGadgets();
    setupMissionGenerator();
    setupCodeBreaker();
    startCountdown();
});

// Load agent profiles
function loadAgents() {
    const agentsGrid = document.getElementById('agentsGrid');
    agents.forEach((agent, index) => {
        const card = document.createElement('div');
        card.className = 'agent-card';
        card.innerHTML = `
            <div class="agent-emoji">${agent.emoji}</div>
            <div class="agent-name">${agent.name}</div>
            <div class="agent-specialty">${agent.specialty}</div>
        `;
        card.style.animationDelay = `${index * 0.1}s`;
        agentsGrid.appendChild(card);
    });
}

// Load gadgets
function loadGadgets() {
    const gadgetsContainer = document.getElementById('gadgetsContainer');
    spyGadgets.forEach((gadget, index) => {
        const gadgetDiv = document.createElement('div');
        gadgetDiv.className = 'gadget';
        gadgetDiv.textContent = gadget;
        gadgetDiv.style.animationDelay = `${index * 0.1}s`;
        gadgetsContainer.appendChild(gadgetDiv);
    });
}

// Setup mission generator
function setupMissionGenerator() {
    const generateButton = document.getElementById('generateMission');
    const missionDisplay = document.getElementById('missionDisplay');
    
    generateButton.addEventListener('click', () => {
        const mission = generateMission();
        missionDisplay.style.opacity = '0';
        setTimeout(() => {
            missionDisplay.textContent = mission;
            missionDisplay.style.opacity = '1';
        }, 300);
    });
}

// Generate random mission
function generateMission() {
    const template = missionTemplates[Math.floor(Math.random() * missionTemplates.length)];
    let mission = template;
    
    mission = mission.replace('{location}', locations[Math.floor(Math.random() * locations.length)]);
    mission = mission.replace('{item}', items[Math.floor(Math.random() * items.length)]);
    mission = mission.replace('{codename}', codenames[Math.floor(Math.random() * codenames.length)]);
    mission = mission.replace('{gadget}', gadgets[Math.floor(Math.random() * gadgets.length)]);
    mission = mission.replace('{vehicle}', vehicles[Math.floor(Math.random() * vehicles.length)]);
    mission = mission.replace('{villain}', villains[Math.floor(Math.random() * villains.length)]);
    
    return mission;
}

// Setup code breaker
function setupCodeBreaker() {
    const checkButton = document.getElementById('checkCode');
    const codeInput = document.getElementById('codeInput');
    const codeResult = document.getElementById('codeResult');
    
    // Generate initial code
    generateNewCode();
    
    checkButton.addEventListener('click', checkCode);
    codeInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') checkCode();
    });
}

// Generate new code
function generateNewCode() {
    const codeDisplay = document.getElementById('codeDisplay');
    currentCode = secretCodes[Math.floor(Math.random() * secretCodes.length)];
    codeDisplay.textContent = currentCode.encoded;
}

// Check code
function checkCode() {
    const codeInput = document.getElementById('codeInput');
    const codeResult = document.getElementById('codeResult');
    const userInput = codeInput.value.toUpperCase().trim();
    
    if (userInput === currentCode.decoded) {
        codeResult.textContent = "✅ Code Cracked! Well done, Agent!";
        codeResult.style.color = "#4ade80";
        setTimeout(() => {
            generateNewCode();
            codeInput.value = '';
            codeResult.textContent = '';
        }, 2000);
    } else {
        codeResult.textContent = "❌ Incorrect. Keep trying!";
        codeResult.style.color = "#ef4444";
    }
}

// Countdown timer
function startCountdown() {
    const countdownElement = document.getElementById('countdown');
    let seconds = 300; // 5 minutes
    
    setInterval(() => {
        if (seconds > 0) {
            seconds--;
            const minutes = Math.floor(seconds / 60);
            const remainingSeconds = seconds % 60;
            countdownElement.textContent = `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
        } else {
            countdownElement.textContent = "BOOM! 💥";
        }
    }, 1000);
}

// Add interactive effects
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('gadget')) {
        e.target.style.animation = 'none';
        setTimeout(() => {
            e.target.style.animation = '';
        }, 10);
    }
});