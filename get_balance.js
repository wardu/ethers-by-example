/**        ┌──────────────────────────────────────────────┐
 *         │                Get Balance                   │
 *         └──────────────────────────────────────────────┘
 * description: Get the balance of an address
 *  version: ethers 6.9.0
 */
const ethers = require("ethers");

// ethers supports standard address strings and ENS names
let address = "vitalik.eth"; // "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045";

let provider = ethers.getDefaultProvider("mainnet"); // change this in production (e.g. INFURA)

// balance is in Wei (BigNumber)
let balanceInWei = provider.getBalance(address);

// formatEther converts BigNumber to string
balanceInWei.then((balance) => {
  let balanceInEth = ethers.formatEther(balance);
  console.log("Balance: " + balanceInEth + " ETH");
});

// console output: Balance: 773.84806976647406389 ETH
