const banksBranchesAndSortCodes = require('./src/branches.json');

function lower(input){
    return input.toLowerCase().trim()
}

module.exports={
    all: function(){
        return banksBranchesAndSortCodes;
    },

    banks: function (bank) {
        const normalizedBank = lower(bank);

        if (['diamond', 'access', 'accessdiamond', 'diamondaccess'].includes(normalizedBank)) {
            bank = "ACCESS BANK"
        };
        if (['citibank', 'citibank nigeria', 'citibank plc'].includes(normalizedBank)) {
            bank = "CITIBANK NIGERIA PLC"
        };
        if (['ecobank', 'ecobank plc'].includes(normalizedBank)) {
            bank = "ECOBANK NIGERIA PLC"
        };
        if (['fidelity', 'fidelity plc', 'fidelity bank'].includes(normalizedBank)) {
            bank = "FIDELITY BANK PLC"
        };
        if (['first bank', 'firstbank', 'firstbank nigeria'].includes(normalizedBank)) {
            bank = "FIRST BANK NIGERIA PLC"
        };
        if (['FCMB', 'fcmb', 'FIRST CITY MONUMENT BANK', 'first city monument bank'].includes(normalizedBank)) {
            bank = "FIRST CITY MONUMENT BANK PLC"
        };
        if (['GTB', "gtb", 'guaranty trust banl'].includes(normalizedBank)) {
            bank = "GUARANTY TRUST BANK PLC"
        };
        if (['heritage bank', 'heritage'].includes(normalizedBank)) {
            bank = "HERITAGE BANK PLC"
        };
        if (['polaris bank', 'polaris'].includes(normalizedBank)) {
            bank = "POLARIS BANK LIMITED"
        };
        if (['providus bank', 'providus'].includes(normalizedBank)) {
            bank = "PROVIDUS BANK LIMITED"
        };
        if (['stanbic', 'stanbic ibtc', 'stanbic bank', 'stanbic ibtc bank'].includes(normalizedBank)) {
            bank = "STANBIC IBTC BANK LTD"
        };
        if (['standard chartered', 'standard chatered bank'].includes(normalizedBank)) {
            bank = "STANDARD CHARTERED BANK NIGERIA LTD"
        };
        if (['STERLING BANK', 'sterling', 'sterling bank'].includes(normalizedBank)) {
            bank = "STERLING BANK PLC"
        };
        if (['union bank', 'union bank plc', 'union'].includes(normalizedBank)) {
            bank = "UNION BANK OF NIGERIA PLC"
        };
        if (['uba', 'uba bank'].includes(normalizedBank)) {
            bank = "UNITED BANK FOR AFRICA PLC"
        };
        if (['WEMA', 'wema', 'wema bank'].includes(normalizedBank)) {
            bank = "WEMA BANK PLC"
        };
        if (['ZENITH', 'zenith', 'zenith bank'].includes(normalizedBank)) {
            bank = "ZENITH BANK PLC"
        };

        return banksBranchesAndSortCodes.filter(function (nigeriaBanks) {
            return lower(nigeriaBanks.bank) === lower(bank);
        });
    },

    bankCodes: function (bank) {

         bank = lower(bank);

        if(!bank || bank == "") {
            throw new Error('Invalid Nigeria Bank')
        }

        if (['diamond', 'access', 'accessdiamond', 'diamondaccess'].includes(bank)) {
            bank = "Access"
        }

        return banksBranchesAndSortCodes.filter(function (bankcode) {
            return lower(bankcode.code) === lower(bank);
        });
    },

    bankAbb: function (bank) {

        bank = lower(bank);

        if(!bank || bank == "") {
            throw new Error('Invalid Nigeria Bank')
        }

        if (['diamond', 'access', 'accessdiamond', 'diamondaccess'].includes(bank)) {
            bank = "Access"
        }
        
        return banksBranchesAndSortCodes.filter(function (bankabb) {
            return lower(bankabb.abb) === lower(bank);
        });
    },

    bankUssd: function (bank) {
        bank = lower(bank);

        if(!bank || bank == "") {
            throw new Error('Invalid Nigeria Bank')
        }

        if (['diamond', 'access', 'accessdiamond', 'diamondaccess'].includes(bank)) {
            bank = "Access"
        }

        return banksBranchesAndSortCodes.filter(function (bankussd) {
            return bankussd.ussd === bank;
        });
    },

    bankState: function (state) {
        state = lower(state);
        if(!state || state == "") {
            throw new Error('Invalid Nigeria State')
        }

        if (['FEDERAL CAPITAL TERRITORY', 'f.c.t', 'abuja', 'f c t'].includes(state)) {
            state = 'FCT'
        }
        if (['AKWA-IBOM', 'AKWAIBOM'].includes(state)) {
            state = 'Akwa Ibom'
        }
        if (['CROSSRIVER', 'CROSS-RIVER'].includes(state)) {
            state = 'Cross River'
        }

        return banksBranchesAndSortCodes.filter(function (bankstate) {
            return bankstate.state && bankstate.state[state];
        });
    },

    // New function to get branches by state
    getBranchesByState: function (state) {
        if(!state || state == "") {
            throw new Error('Invalid Nigeria State')
        }

        // Normalize state name
        let normalizedState = state;
        if (['FEDERAL CAPITAL TERRITORY', 'f.c.t', 'abuja', 'f c t'].includes(lower(state))) {
            normalizedState = 'FCT'
        }
        if (['AKWA-IBOM', 'AKWAIBOM'].includes(lower(state))) {
            normalizedState = 'Akwa Ibom'
        }
        if (['CROSSRIVER', 'CROSS-RIVER'].includes(lower(state))) {
            normalizedState = 'Cross River'
        }

        const banksInState = banksBranchesAndSortCodes.filter(function (bankstate) {
            return bankstate.state && bankstate.state[normalizedState];
        });

        return banksInState.map(function(bank) {
            return {
                bank: bank.bank,
                code: bank.code,
                abb: bank.abb,
                ussd: bank.ussd,
                branches: bank.state[normalizedState]
            };
        });
    },

    // New function to get branches by bank and state
    getBranchesByBankAndState: function (bank, state) {
        bank = lower(bank);
        
        if(!bank || bank == "") {
            throw new Error('Invalid Nigeria Bank')
        }
        if(!state || state == "") {
            throw new Error('Invalid Nigeria State')
        }

        // Normalize bank name
        if (['diamond', 'access', 'accessdiamond', 'diamondaccess'].includes(bank)) {
            bank = "ACCESS BANK"
        };
        if (['citibank', 'citibank nigeria', 'citibank plc'].includes(bank)) {
            bank = "CITIBANK NIGERIA PLC"
        };
        if (['ecobank', 'ecobank plc'].includes(bank)) {
            bank = "ECOBANK NIGERIA PLC"
        };
        if (['fidelity', 'fidelity plc', 'fidelity bank'].includes(bank)) {
            bank = "FIDELITY BANK PLC"
        };
        if (['first bank', 'firstbank', 'firstbank nigeria'].includes(bank)) {
            bank = "FIRST BANK NIGERIA PLC"
        };
        if (['FCMB', 'fcmb', 'FIRST CITY MONUMENT BANK', 'first city monument bank'].includes(bank)) {
            bank = "FIRST CITY MONUMENT BANK PLC"
        };
        if (['GTB', "gtb", 'guaranty trust banl'].includes(bank)) {
            bank = "GUARANTY TRUST BANK PLC"
        };
        if (['heritage bank', 'heritage'].includes(bank)) {
            bank = "HERITAGE BANK PLC"
        };
        if (['polaris bank', 'polaris'].includes(bank)) {
            bank = "POLARIS BANK LIMITED"
        };
        if (['providus bank', 'providus'].includes(bank)) {
            bank = "PROVIDUS BANK LIMITED"
        };
        if (['stanbic', 'stanbic ibtc', 'stanbic bank', 'stanbic ibtc bank'].includes(bank)) {
            bank = "STANBIC IBTC BANK LTD"
        };
        if (['standard chartered', 'standard chatered bank'].includes(bank)) {
            bank = "STANDARD CHARTERED BANK NIGERIA LTD"
        };
        if (['STERLING BANK', 'sterling', 'sterling bank'].includes(bank)) {
            bank = "STERLING BANK PLC"
        };
        if (['union bank', 'union bank plc', 'union'].includes(bank)) {
            bank = "UNION BANK OF NIGERIA PLC"
        };
        if (['uba', 'uba bank'].includes(bank)) {
            bank = "UNITED BANK FOR AFRICA PLC"
        };
        if (['WEMA', 'wema', 'wema bank'].includes(bank)) {
            bank = "WEMA BANK PLC"
        };
        if (['ZENITH', 'zenith', 'zenith bank'].includes(bank)) {
            bank = "ZENITH BANK PLC"
        };

        // Normalize state name
        let normalizedState = state;
        if (['FEDERAL CAPITAL TERRITORY', 'f.c.t', 'abuja', 'f c t'].includes(lower(state))) {
            normalizedState = 'FCT'
        }
        if (['AKWA-IBOM', 'AKWAIBOM'].includes(lower(state))) {
            normalizedState = 'Akwa Ibom'
        }
        if (['CROSSRIVER', 'CROSS-RIVER'].includes(lower(state))) {
            normalizedState = 'Cross River'
        }

        const bankData = banksBranchesAndSortCodes.find(function (nigeriaBanks) {
            return lower(nigeriaBanks.bank) === lower(bank);
        });

        if (!bankData || !bankData.state || !bankData.state[normalizedState]) {
            return [];
        }

        return {
            bank: bankData.bank,
            code: bankData.code,
            abb: bankData.abb,
            ussd: bankData.ussd,
            branches: bankData.state[normalizedState]
        };
    },

    // New function to search branches by local government area (LGA)
    searchBranchesByLGA: function (bank, state, lga) {
        const bankStateData = this.getBranchesByBankAndState(bank, state);
        
        if (!bankStateData || !bankStateData.branches) {
            return [];
        }

        lga = lower(lga);
        
        return bankStateData.branches.filter(function(branch) {
            const address = lower(branch.branchaddress);
            const branchName = lower(branch.branch);
            
            // Check if LGA is mentioned in address or branch name
            return address.includes(lga) || branchName.includes(lga);
        });
    },

    // New function to get all banks in a specific state
    getAllBanksInState: function (state) {
        const branchesByState = this.getBranchesByState(state);
        
        return branchesByState.map(function(bankData) {
            return {
                bank: bankData.bank,
                code: bankData.code,
                abb: bankData.abb,
                ussd: bankData.ussd,
                branchCount: bankData.branches ? bankData.branches.length : 0
            };
        });
    }
}
