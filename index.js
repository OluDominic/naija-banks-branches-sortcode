const banksBranchesAndSortCodes = require('./src/branches.json');

function lower(input){
    return input.toLowerCase().trim()
}

module.exports={
    all: function(){
        return banksBranchesAndSortCodes;
    },

    banks: function (bank) {

        if (['diamond', 'access', 'accessdiamond', 'diamondaccess'].includes(bank)) {
            (bank) = "ACCESS BANK"
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
            bank = "FIRST BANK NIGERIA LIMITED"
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

        return banksBranchesAndSortCodes.map(function (bankstate) {
            return bankstate.state === state;
        });
    }
}
