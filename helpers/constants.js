'use strict';

module.exports = {
	currentVersion: "0.1.4",
	minVersion: [
		{ height: 1,      ver: "^0.1.0" },
		{ height: 669400, ver: "^0.1.1"},
        { height: 1284200, ver: "^0.1.2"},
        { height: 1364200, ver: "^0.1.3"},
	],
	activeDelegates: 201,
	maximumVotes: 51,
	addressLength: 208,
	blockHeaderLength: 248,
  	blockSlotWindow: 5, // window of which a slot could be accepted.
  	blockTime: 15000,
	blockReceiptTimeOut: 30*2, // 2 blocks
	confirmationLength: 77,
	epochTime: new Date(Date.UTC(2016, 4, 24, 17, 0, 0, 0)),
	fees: [
		{
			height: 1,
			fees: {
				send: 10000000,
				vote: 100000000,
				secondsignature: 10000000,
				delegate: 500000000,
				multisignature: 100000000,
				dapp: 2500000000
			}
		}
	],
	feeStart: 1,
	feeStartVolume: 10000 * 100000000,
	fixedPoint: Math.pow(10, 8),
	maxAddressesLength: 208 * 128,
	maxAmount: 100000000,
	maxConfirmations: 77 * 100,
	maxPayloadLength: 1024 * 1024,
	maxPeers: 200,
	maxRequests: 10000 * 12,
	maxSharedTxs: 100,
	maxSignaturesLength: 196 * 256,
	maxTxsPerBlock: 25,
	minBroadhashConsensus: 51,
	nethashes: [
		// Mainnet
		'4c1170a3edb03f961e5e3f7cedcd25563f0a46ec4aa3342715d09c47b398ea19',
		// Testnet
		'0daee950841005a3f56f6588b4b084695f0d74aaa38b21edab73446064638552'
	],
	numberLength: 100000000,
	requestLength: 104,
	rewards: [
		{height: 1, reward: 0},
		{height: 10, reward: 500000000},
		{height: 11, reward: 30000000},
		{height: 12, reward: 20000000},
		{height: 13, reward: 500000000},
		{height: 2103840, reward: 250000000},
		{height: 2103840*2, reward: 150000000},
		{height: 2103840*3, reward: 100000000}
	],
	signatureLength: 196,
	totalAmount: 9999999983700000,
	unconfirmedTransactionTimeOut: 10800 // 1080 blocks
};
