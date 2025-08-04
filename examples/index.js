const Naijabanks = require('../index');

console.log('=== Nigerian Banks Branches and Sort Codes Examples ===\n');

// Example 1: Get all banks in a specific state
console.log('1. All banks in Osun State:');
const osunBanks = Naijabanks.getAllBanksInState('Osun');
console.log(osunBanks);
console.log('\n');

// Example 2: Get UBA branches in Osun State
console.log('2. UBA branches in Osun State:');
const ubaOsunBranches = Naijabanks.getBranchesByBankAndState('UBA', 'Osun');
console.log(JSON.stringify(ubaOsunBranches, null, 2));
console.log('\n');

// Example 3: Search for UBA branches in Ilesha East LGA (Osun State)
console.log('3. UBA branches in Ilesha East LGA (Osun State):');
const ubaIleshaBranches = Naijabanks.searchBranchesByLGA('UBA', 'Osun', 'Ilesha');
console.log(JSON.stringify(ubaIleshaBranches, null, 2));
console.log('\n');

// Example 4: Get all branches in Osun State
console.log('4. All branches in Osun State:');
const allOsunBranches = Naijabanks.getBranchesByState('Osun');
console.log(`Found ${allOsunBranches.length} banks with branches in Osun State`);
allOsunBranches.forEach(bank => {
    console.log(`${bank.bank}: ${bank.branches.length} branches`);
});
console.log('\n');

// Example 5: Search for branches in different LGAs
console.log('5. Searching branches in different LGAs:');
const searchExamples = [
    { bank: 'UBA', state: 'Osun', lga: 'Ilesha' },
    { bank: 'First Bank', state: 'Osun', lga: 'Oshogbo' },
    { bank: 'Zenith', state: 'Osun', lga: 'Ile Ife' }
];

searchExamples.forEach(example => {
    const results = Naijabanks.searchBranchesByLGA(example.bank, example.state, example.lga);
    console.log(`${example.bank} branches in ${example.lga}, ${example.state}: ${results.length} found`);
    if (results.length > 0) {
        results.forEach(branch => {
            console.log(`  - ${branch.branch} (${branch.branchcode}): ${branch.branchaddress}`);
        });
    }
});
console.log('\n');

// Example 6: Get bank information by different identifiers
console.log('6. Bank information by different identifiers:');
console.log('By name:', Naijabanks.banks('UBA'));
console.log('By code:', Naijabanks.bankCodes('033'));
console.log('By abbreviation:', Naijabanks.bankAbb('UBA'));
console.log('By USSD:', Naijabanks.bankUssd('*919#'));
console.log('\n');

// Example 7: Search for branches in other states
console.log('7. Example searches in other states:');
const otherStates = [
    { bank: 'GTB', state: 'Lagos', lga: 'Victoria Island' },
    { bank: 'Zenith', state: 'Abuja', lga: 'Wuse' },
    { bank: 'First Bank', state: 'Kano', lga: 'Municipal' }
];

otherStates.forEach(example => {
    const results = Naijabanks.searchBranchesByLGA(example.bank, example.state, example.lga);
    console.log(`${example.bank} branches in ${example.lga}, ${example.state}: ${results.length} found`);
});
console.log('\n');

// Example 8: Get all available banks
console.log('8. All available banks:');
const allBanks = Naijabanks.all();
console.log(`Total banks in database: ${allBanks.length}`);
allBanks.forEach(bank => {
    console.log(`- ${bank.bank} (${bank.code}) - ${bank.abb} - ${bank.ussd}`);
});