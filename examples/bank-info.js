const Naijabanks = require('../index');

console.log('=== Nigerian Bank Information Examples ===\n');

// Function to display bank information
function displayBankInfo(bankName) {
    console.log(`\n=== ${bankName.toUpperCase()} BANK INFORMATION ===`);
    
    // Get bank by name
    const bankByName = Naijabanks.banks(bankName);
    if (bankByName.length > 0) {
        const bank = bankByName[0];
        console.log(`Bank Name: ${bank.bank}`);
        console.log(`Sort Code: ${bank.code}`);
        console.log(`Abbreviation: ${bank.abb}`);
        console.log(`USSD Code: ${bank.ussd}`);
        
        // Count total branches across all states
        let totalBranches = 0;
        const statesWithBranches = [];
        
        if (bank.state) {
            Object.keys(bank.state).forEach(state => {
                const branchCount = bank.state[state].length;
                totalBranches += branchCount;
                if (branchCount > 0) {
                    statesWithBranches.push({ state, count: branchCount });
                }
            });
        }
        
        console.log(`Total Branches: ${totalBranches}`);
        console.log(`States with branches: ${statesWithBranches.length}`);
        
        // Show top 5 states with most branches
        statesWithBranches
            .sort((a, b) => b.count - a.count)
            .slice(0, 5)
            .forEach((stateInfo, index) => {
                console.log(`  ${index + 1}. ${stateInfo.state}: ${stateInfo.count} branches`);
            });
    } else {
        console.log(`Bank "${bankName}" not found.`);
    }
}

// Function to search bank by different identifiers
function searchBankByIdentifier(identifier, type) {
    console.log(`\n=== SEARCHING BY ${type.toUpperCase()} ===`);
    console.log(`Searching for: "${identifier}"`);
    
    let results = [];
    switch (type.toLowerCase()) {
        case 'name':
            results = Naijabanks.banks(identifier);
            break;
        case 'code':
            results = Naijabanks.bankCodes(identifier);
            break;
        case 'abbreviation':
            results = Naijabanks.bankAbb(identifier);
            break;
        case 'ussd':
            results = Naijabanks.bankUssd(identifier);
            break;
        default:
            console.log(`Invalid search type: ${type}`);
            return;
    }
    
    if (results.length > 0) {
        console.log(`Found ${results.length} bank(s):`);
        results.forEach((bank, index) => {
            console.log(`${index + 1}. ${bank.bank} (${bank.code})`);
        });
    } else {
        console.log(`No banks found with ${type}: "${identifier}"`);
    }
}

// Example bank searches
const exampleBanks = [
    'UBA',
    'First Bank', 
    'Zenith',
    'GTB',
    'Access Bank'
];

exampleBanks.forEach(bank => {
    displayBankInfo(bank);
});

// Example searches by different identifiers
console.log('\n=== SEARCHING BY DIFFERENT IDENTIFIERS ===');

const searchExamples = [
    { identifier: 'UBA', type: 'name' },
    { identifier: '033', type: 'code' },
    { identifier: 'UBA', type: 'abbreviation' },
    { identifier: '*919#', type: 'ussd' },
    { identifier: 'GTB', type: 'name' },
    { identifier: '058', type: 'code' }
];

searchExamples.forEach(example => {
    searchBankByIdentifier(example.identifier, example.type);
});

// Get all banks summary
console.log('\n=== ALL BANKS SUMMARY ===');
const allBanks = Naijabanks.all();
console.log(`Total banks in database: ${allBanks.length}`);

const bankSummary = allBanks.map(bank => {
    let totalBranches = 0;
    if (bank.state) {
        Object.values(bank.state).forEach(branches => {
            totalBranches += branches.length;
        });
    }
    return {
        name: bank.bank,
        code: bank.code,
        branches: totalBranches
    };
});

// Sort by number of branches (descending)
bankSummary
    .sort((a, b) => b.branches - a.branches)
    .forEach((bank, index) => {
        console.log(`${index + 1}. ${bank.name} (${bank.code}): ${bank.branches} branches`);
    }); 