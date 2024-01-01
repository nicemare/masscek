const fs = require('fs');
const axios = require('axios');

// Fungsi untuk mengirimkan permintaan RPC
async function sendRPCRequest(method, params = []) {
    try {
        const response = await axios.post('https://rpc.ankr.com/bsc/', {
            jsonrpc: '2.0',
            method: method,
            params: params,
            id: 1,
        });
        return response.data;
    } catch (error) {
        throw new Error(`Error sending RPC request: ${error.message}`);
    }
}

// Fungsi untuk mendapatkan saldo BNB menggunakan alamat wallet
async function getBNBBalance(walletAddress) {
    try {
        const response = await sendRPCRequest('eth_getBalance', [walletAddress, 'latest']);
        // Saldo dikembalikan dalam bentuk hexadecimal, perlu dikonversi ke decimal
        const balanceWei = parseInt(response.result, 16);
        // 1 BNB = 10^18 wei
        const balanceBNB = balanceWei / 10**18;
        return balanceBNB;
    } catch (error) {
        throw new Error(`Error getting BNB balance for address ${walletAddress}: ${error.message}`);
    }
}

// Fungsi untuk membaca file dan mendapatkan daftar alamat wallet
function readWalletAddressesFromFile(filePath) {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        const addresses = data.split('\n').map(address => address.trim());
        return addresses.filter(address => address !== ''); // Filter alamat kosong jika ada
    } catch (error) {
        throw new Error(`Error reading file: ${error.message}`);
    }
}

// Path file yang berisi daftar alamat wallet (setiap alamat di baris baru)
const filePath = 'cek.txt';

// Memanggil fungsi untuk membaca daftar alamat wallet dari file
const walletAddresses = readWalletAddressesFromFile(filePath);

// Memeriksa saldo untuk setiap alamat wallet
walletAddresses.forEach(walletAddress => {
    getBNBBalance(walletAddress)
        .then(balance => {
            console.log(`${walletAddress}: ${balance} BNB`);
        })
        .catch(error => {
            console.error(error.message);
        });
});
