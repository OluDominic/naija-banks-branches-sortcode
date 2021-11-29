const banksBranchesAndSortCodes = require('./src/branches.json');

function lower(input){
    return input.toLowerCase().trim()
}

module.exports={
    all: function(){
        return banksBranchesAndSortCodes;
    },

    banks: function (bank) {

        return banksBranchesAndSortCodes.filter(function (nigeriaBanks) {
            return lower(nigeriaBanks.bank) === lower(bank);
        });
    },

    bankCodes: function () {

        bank = lower(bank);

        if(!bank || bank == "") {
            throw new Error('Invalid Nigeria Bank')
        }

        if (['diamond', 'access', 'accessdiamond', 'diamondaccess'].includes(bank)) {
            bank = "Access"
        }

        const response = banksBranchesAndSortCodes.find(function (bankcode) {
            return lower(bankcode.bank) === lower(bank);
        })
        return response.code
    },

    bankAbb: function (bank) {

        bank = lower(bank);

        if(!bank || bank == "") {
            throw new Error('Invalid Nigeria Bank')
        }

        if (['diamond', 'access', 'accessdiamond', 'diamondaccess'].includes(bank)) {
            bank = "Access"
        }
        
        var abbBank
        banksBranchesAndSortCodes.find(function (nigeriaBank) {
            if (nigeriaBank.bank.toLowerCase() === bank.toLowerCase().trim()){
                return abbBank = nigeriaBank.abb;
            }
        })
        return abbBank;
    },

    bankUssd: function (bank) {
        bank = lower(bank);

        if(!bank || bank == "") {
            throw new Error('Invalid Nigeria Bank')
        }

        if (['diamond', 'access', 'accessdiamond', 'diamondaccess'].includes(bank)) {
            bank = "Access"
        }

        const response = banksBranchesAndSortCodes.find(function (bankussd) {
            return lower(bankussd.ussd) === lower(bank);
        });
        return response.ussd
    },

    bankState: function (bank) {
        bank = lower(bank);
        if(!bank || bank == "") {
            throw new Error('Invalid Nigeria Bank')
        }

        if (['diamond', 'access', 'accessdiamond', 'diamondaccess'].includes(bank)) {
            bank = "Access"
        }

        const response = banksBranchesAndSortCodes.find(function (bankstate) {
            return lower(bankstate.bank) === lower(bank);
        });
        return response.state
    }
}
