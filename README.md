# 1Wallet UI - Gasless, Seedless HID Based Web3 Wallet

1Wallet UI is a user interface (UI) repository built with Next.js and WebAuthn for authentication, providing an efficient server interaction to create and manage web3 wallets. The wallet is designed on top of the on-chain multisig SAFE wallet, eliminating the need to store seed phrases, and offering the convenience of FaceID/TouchID for authentication. This gasless wallet allows users to execute transactions in a custodial and trustless manner.

## Introduction

1Wallet is a gasless web3 wallet that utilizes the Safe {WALLET} and the Safe AA SDK, enabling users to perform various actions such as swaps on platforms like 1inch. The wallet's core feature is the utilization of WebAuthn for authentication, allowing users to authenticate requests using FaceID or TouchID without the need to store any private keys or seed phrases.

## Key Features

- Gasless Transactions: 1Wallet enables gasless transactions by relaying calldata to the entrypoint for execution on the Safe wallet, saving users from paying gas fees for their transactions.

- Secure Authentication: WebAuthn is used for authentication, ensuring a high level of security as the user's private keys are stored in the device's secure enclave.

- Swaps on 1inch: The demo showcases the capability of the wallet by enabling users to place swaps on 1inch in a gasless fashion.

- Self-Custodial and Trustless: 1Wallet allows users to manage their assets and generate orders via their devices in a self-custodial and trustless manner.

## Dependencies

1Wallet is built on the following technologies:

- [Next.js](https://github.com/vercel/next.js): A React framework for building server-side rendered and static websites.

- [Safe {WALLET}](https://github.com/safe-global): Provides the foundation for the gasless transaction modules and abstract automated wallet management.

- [WebAuthn](https://github.com/passwordless-id/webauthn): Enables secure and convenient authentication using FaceID or TouchID.

- [Stackup Bundler](https://github.com/stackup-wallet/stackup-bundler): Used for relaying transactions to entrypoint for execution.

- [1inch](https://docs.1inch.io/docs/aggregation-protocol/introduction): The 1inch API v5, Pathfinder, is an advanced discovery and routing algorithm that facilitates asset exchanges at the best rates by finding efficient paths for token swaps across protocols and market depths.

## Usage

To use 1Wallet UI, follow the steps below:

1. Clone the repository to your local machine.
2. Install the necessary dependencies using `yarn`.
3. Create an env with `NEXT_PUBLIC_RPC` that contains a polygon RPC endpoint.
4. Start the development server with `yarn dev`.
5. To test this on a live build, run `yarn devBuild`
6. Visit the local development URL in your web browser to access the 1Wallet UI.

## Demo

This product's demo can be viewed [here](https://ethglobal.com/showcase/1wallet-3e5z6).

## License

[MIT](LICENSE) © 1Wallet
