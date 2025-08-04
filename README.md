# Nigerian Banks Branches and Sort Codes

<h1 align="center">Welcome to naija-banks-branches-sortcode 👋</h1>

<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <img src="https://img.shields.io/badge/node-14.0.0+-blue.svg" />
  <img src="https://img.shields.io/badge/npm-6.0.0+-blue.svg" />
  <a href="https://github.com/OluDominic/naija-banks-branches-sortcode#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/OluDominic/naija-banks-branches-sortcode/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/OluDominic/naija-banks-branches-sortcode/blob/master/LICENSE" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/github/license/OluDominic/naija-banks-branches-sortcode" />
  </a>
  <a href="https://twitter.com/pato7dominic" target="_blank">
    <img alt="Twitter: pato7dominic" src="https://img.shields.io/twitter/follow/pato7dominic.svg?style=social" />
  </a>
</p>

> Lightweight NPM package for Nigerian banks, branches, and sort codes. This package provides comprehensive data about Nigerian banks including their branches across different states and local government areas.

### 🏠 [Homepage](https://github.com/OluDominic/naija-banks-branches-sortcode#readme)

## Features

- ✅ Get all Nigerian banks with their sort codes and USSD codes
- ✅ Search banks by name, code, abbreviation, or USSD
- ✅ Get all branches in a specific state
- ✅ Get branches for a specific bank in a specific state
- ✅ **NEW**: Search branches by Local Government Area (LGA)
- ✅ **NEW**: Get all banks available in a specific state
- ✅ **NEW**: Enhanced search functionality with better error handling

## Installation

```bash
npm install naija-banks-branches-sortcode
```

## Usage

### Basic Usage

```javascript
const Naijabanks = require('naija-banks-branches-sortcode');

// Get all banks
const allBanks = Naijabanks.all();

// Search bank by name
const ubaBank = Naijabanks.banks('UBA');

// Search bank by sort code
const bankByCode = Naijabanks.bankCodes('033');

// Search bank by abbreviation
const bankByAbb = Naijabanks.bankAbb('UBA');

// Search bank by USSD code
const bankByUssd = Naijabanks.bankUssd('*919#');
```

### State-based Searches

```javascript
// Get all banks in a specific state
const osunBanks = Naijabanks.getAllBanksInState('Osun');

// Get all branches in a state
const osunBranches = Naijabanks.getBranchesByState('Osun');

// Get branches for a specific bank in a state
const ubaOsunBranches = Naijabanks.getBranchesByBankAndState('UBA', 'Osun');
```

### Local Government Area (LGA) Search

This is the main feature you requested - searching for branches by Local Government Area:

```javascript
// Search for UBA branches in Ilesha East LGA, Osun State
const ubaIleshaBranches = Naijabanks.searchBranchesByLGA('UBA', 'Osun', 'Ilesha');

// Example: Find UBA branches in Ilesha East LGA
if (ubaIleshaBranches.length > 0) {
    ubaIleshaBranches.forEach(branch => {
        console.log(`Branch: ${branch.branch}`);
        console.log(`Code: ${branch.branchcode}`);
        console.log(`Address: ${branch.branchaddress}`);
    });
} else {
    console.log('No UBA branches found in Ilesha East LGA');
}
```

## API Reference

### Core Functions

- `all()` - Get all banks in the database
- `banks(bankName)` - Search bank by name
- `bankCodes(code)` - Search bank by sort code
- `bankAbb(abbreviation)` - Search bank by abbreviation
- `bankUssd(ussdCode)` - Search bank by USSD code

### State-based Functions

- `getAllBanksInState(state)` - Get all banks available in a specific state
- `getBranchesByState(state)` - Get all branches in a specific state
- `getBranchesByBankAndState(bank, state)` - Get branches for a specific bank in a state

### LGA Search Function

- `searchBranchesByLGA(bank, state, lga)` - Search for branches by Local Government Area

## Examples

### Example 1: Find UBA branches in Ilesha East LGA

```javascript
const Naijabanks = require('naija-banks-branches-sortcode');

// You're in Osun State, Ilesha East LGA and want to find UBA branches
const ubaBranches = Naijabanks.searchBranchesByLGA('UBA', 'Osun', 'Ilesha');

console.log(`Found ${ubaBranches.length} UBA branches in Ilesha East LGA:`);
ubaBranches.forEach(branch => {
    console.log(`- ${branch.branch} (${branch.branchcode})`);
    console.log(`  Address: ${branch.branchaddress}`);
});
```

### Example 2: Get all banks in Osun State

```javascript
const osunBanks = Naijabanks.getAllBanksInState('Osun');
console.log('Banks available in Osun State:');
osunBanks.forEach(bank => {
    console.log(`- ${bank.bank} (${bank.code}): ${bank.branchCount} branches`);
});
```

### Example 3: Search for branches in different LGAs

```javascript
const searchExamples = [
    { bank: 'UBA', state: 'Osun', lga: 'Ilesha' },
    { bank: 'First Bank', state: 'Osun', lga: 'Oshogbo' },
    { bank: 'Zenith', state: 'Osun', lga: 'Ile Ife' }
];

searchExamples.forEach(example => {
    const results = Naijabanks.searchBranchesByLGA(
        example.bank, 
        example.state, 
        example.lga
    );
    console.log(`${example.bank} branches in ${example.lga}: ${results.length} found`);
});
```

## Data Structure

Each bank object contains:

```javascript
{
    "bank": "UNITED BANK FOR AFRICA PLC",
    "code": "033",
    "abb": "UBA",
    "ussd": "*919#",
    "state": {
        "Osun": [
            {
                "branch": "ILESHA BRANCH",
                "branchcode": "164",
                "branchaddress": "107A, ORINKIRAN STREET, OSHOGBO ROAD, ILESHA,OSUN STATE."
            }
        ]
    }
}
```

## Supported Banks

- Access Bank (Diamond Bank)
- Citibank Nigeria PLC
- Ecobank Nigeria PLC
- Fidelity Bank PLC
- First Bank Nigeria Limited
- First City Monument Bank PLC
- Guaranty Trust Bank PLC
- Heritage Bank PLC
- Polaris Bank Limited
- Providus Bank Limited
- Stanbic IBTC Bank Ltd
- Standard Chartered Bank Nigeria Ltd
- Sterling Bank PLC
- Union Bank of Nigeria PLC
- United Bank for Africa PLC
- Wema Bank PLC
- Zenith Bank PLC

## Running Examples

```bash
# Run the main example
npm run example

# Or run specific examples
node examples/index.js
node examples/search-by-lga.js
node examples/bank-info.js
```

## Prerequisites

- npm 6.0.0+
- node 14.0.0+

## Install

```sh
npm install
```

## Run tests

```sh
npm run test
```

## Node.js Version Compatibility

This package now supports Node.js versions 14.0.0 and above, and npm versions 6.0.0 and above.

## Author

👤 **Oludare Dominic**

* Website: https://dominicoludare.netlify.app/
* Twitter: [@pato7dominic](https://twitter.com/pato7dominic)
* Github: [@OluDominic](https://github.com/OluDominic)
* LinkedIn: [@dominicoludare](hhttps://www.linkedin.com/in/oludare-dominic-38708a97/)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/OluDominic/naija-banks-branches-sortcode/issues). You can also take a look at the [contributing guide](https://github.com/OluDominic/naija-banks-branches-sortcode/blob/master/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2021 [Oludare Dominic](https://github.com/OluDominic).<br />
This project is [ISC](https://github.com/OluDominic/naija-banks-branches-sortcode/blob/master/LICENSE) licensed.

## Issues

If you encounter any issues, please report them on the [GitHub issues page](https://github.com/OluDominic/naija-banks-branches-sortcode/issues).

***

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_