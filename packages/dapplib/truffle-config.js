require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area fringe speak guard render remind mistake heavy climb swift gift'; 
let testAccounts = [
"0xb55170db56189bdbc75f1705996b29d959f9457b04175ba41836d119e4b79d5d",
"0x0a00a4caacdd54a878d482ae131fbad26b01e565bcddda4d64e8bcfacbb15ae8",
"0x51efc40cf3aa2e52475b0ed780328f8bc0a1e02f194f24f55b2e255a6dfba39e",
"0x1f80f418d900708534588f171493d8394ac81748bf906cd1cb41073d7cc5eb4f",
"0x3497c87387b07a05b1913e71c199b3382eb82ab87419b2de88af95cbe008a162",
"0x37ae0f0f2ff48c6c68492180e452ded54b49508e7f03ef9428d6dd6533af5866",
"0xa9879591091a895df8f5e5551e2b63aa338ac119f921b53881a8968ef144342b",
"0x103cbc176e7edb7ce0dc3f297d2cbd5c3b36638892b2526cd8eecf7f50e2ac32",
"0xbfaf1ecad0a7760f34e3186073cc534a5f1babc647cb0696ad61999920048f56",
"0xbffdf4d7105014f6a5c92fdd194df1fd6721eafe1e663736efe2592799d29972"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

