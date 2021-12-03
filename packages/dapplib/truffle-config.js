require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner neck fringe speak guard render remind million good process tail gentle'; 
let testAccounts = [
"0xed45bc8e2d6eb62627b438b85315dde710e52391df0f4c9cae832bbc6e334647",
"0xf114f842296a929704bdfa7d6d308253fa2e538f57aca79fb48c84319cf09468",
"0x0849bef0d79b0ee209e572cbee7423563fba0c3b6ecf8ae575c3748dd1cf1e72",
"0x88fb70fedfaada169d1499db9a82bd5637cd6484ebdcd07c4db2b5737e24240d",
"0x7aaf42f1392ba4736ccef3b94511fc91acff3fa442e6dc7b7e510c4e559dc7a7",
"0xaf9d17730e789d132f6abcaa78ee586b9bb1b12bb43ac57d8d2efaaf081d277c",
"0x4deff306bb66338cde726d72858091f81f44ceaed15490718db3a4d9d560ae14",
"0x741203c45189221daea80a4e6caf818b53e6bd51b2524a1818608ee3dfffa6dd",
"0xf4bae47978f1fb8f0011133b792f2864177aef2bfcf7ed4082d60583a5ea0898",
"0xd5e92d05d0975866aa8a9cc89201e5b663c98e61ecc55c620b7e9e0a639db819"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


