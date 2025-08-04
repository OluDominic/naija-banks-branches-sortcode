const Naijabanks = require('../index');

console.log('=== Search Nigerian Bank Branches by Local Government Area ===\n');

// Example: Search for UBA branches in Ilesha East LGA, Osun State
function searchBranchesInLGA(bankName, stateName, lgaName) {
    console.log(`Searching for ${bankName} branches in ${lgaName} LGA, ${stateName} State:`);
    
    const branches = Naijabanks.searchBranchesByLGA(bankName, stateName, lgaName);
    
    if (branches.length === 0) {
        console.log(`No ${bankName} branches found in ${lgaName} LGA, ${stateName} State.`);
        console.log('Try searching with a different LGA name or check the spelling.');
    } else {
        console.log(`Found ${branches.length} ${bankName} branch(es) in ${lgaName} LGA:`);
        branches.forEach((branch, index) => {
            console.log(`${index + 1}. ${branch.branch}`);
            console.log(`   Branch Code: ${branch.branchcode}`);
            console.log(`   Address: ${branch.branchaddress}`);
            console.log('');
        });
    }
    
    return branches;
}

// Example searches
const searchExamples = [
    {
        bank: 'UBA',
        state: 'Osun',
        lga: 'Ilesha',
        description: 'UBA branches in Ilesha East LGA, Osun State'
    },
    {
        bank: 'First Bank',
        state: 'Osun', 
        lga: 'Oshogbo',
        description: 'First Bank branches in Oshogbo LGA, Osun State'
    },
    {
        bank: 'Zenith',
        state: 'Osun',
        lga: 'Ile Ife',
        description: 'Zenith Bank branches in Ile Ife LGA, Osun State'
    },
    {
        bank: 'GTB',
        state: 'Lagos',
        lga: 'Victoria Island',
        description: 'GTB branches in Victoria Island LGA, Lagos State'
    }
];

searchExamples.forEach(example => {
    console.log(`\n${example.description}:`);
    console.log('='.repeat(example.description.length));
    searchBranchesInLGA(example.bank, example.state, example.lga);
});

// Interactive search function
function interactiveSearch() {
    console.log('\n=== Interactive Search ===');
    console.log('You can also search for branches interactively.');
    console.log('Example usage:');
    console.log('  const branches = Naijabanks.searchBranchesByLGA("UBA", "Osun", "Ilesha");');
    console.log('  const branches = Naijabanks.getBranchesByBankAndState("UBA", "Osun");');
    console.log('  const allBanksInState = Naijabanks.getAllBanksInState("Osun");');
}

interactiveSearch(); 