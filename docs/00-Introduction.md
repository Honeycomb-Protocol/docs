---
sidebar_position: 0
slug: /
---

# Introduction

## What is Honeycomb

Honeycomb is a protocol built on the Solana blockchain that streamlines the process for game developers and studios to integrate and build web3 games. We utilize Solana’s efficient and secure network to bring full compossibility of in-game assets and data on the Solana Virtual Machine (SVM).

This platform is compatible with all of the [Metaplex](https://docs.metaplex.com/) Non-Fungible Token (NFT) standards, including the Programmable Asset Class (pNFT), Compressed NFTs (cNFT) and Semi-Fungible Tokens (SFT).

## The Problem

Currently the Solana game developer experience is extremely fragmented, requires a deep knowledge of blockchain development and is not scalable for mainstream adoption due to the on-chain fees for a large player base.

Honeycomb is built for the Solana NFT gaming ecosystem by the development team [Tumi Labs](https://tumilabs.com/), to an extremely user-friendly gaming infrastructure development toolkit. Through our experience with the new genre of games on web3, we’ve determined that the game life-cycle is made of the following core functions:

- Idle player rewards (staking)
- Quests (missions)
- Loot Boxes or RNG Prizes (raffles)
- Guilds or Party
- Game Tokens (custodial and non-custodial)
- Mutable Digital Assets
- Issue and Manage Digital Assets
- Player Profiles
- Fee Structure

## The Solution

Honeycomb provides a suite of on-chain [Programs](services/) and state-compression tools that handle all crucial game lifecycle functions and compossibility with the SVM. All programs are designed to be interoperable, modular and are packed with tons of different settings to allow for customization to meet your game development needs.

Due to the complexity of on-chain development, we built an SDK so that you can start building games on Solana with almost no web3 experience. Q1 2024 we will be releasing UI kits that will allow developers to quickly integrate Solana.

All programs are managed with our Master Program: [Hive Control](concepts/hive-control/) – that manages the project directory, all player profiles and the optional fee structure for your game.

Our tools are broken into the following categories:

1. [Hive Control](concepts/hive-control/)
2. [Asset Hub](concepts/asset-hub)
3. [Nectar Utilities](concepts/nectar-utilities)
4. [Buzz Kit](concepts/buzz-kit)

## State Compression (Scalability)

Q2 2023 Solana Labs released state-compression, this would significantly reduce the cost of minting NFTs on SVM. Our team quickly saw the potential of creating scalable solutions using state-compression outside of just compressed-NFTs.

State-compression is currently being tested on one of our main programs within Hive Control: [Player Profiles](https://twitter.com/honeycomb_prtcl/status/1635210662917062656?s=20)

Our benchmarks for Player Profiles prior to state compression had a player fee of 0.0118 SOL but after state-compression it was reduced to 0.000009 SOL (~1300x reduction in costs). We will be implementing state-compression across all of our programs in Q4 2023 - Q1 2024 in order to create the first scalable gaming solution directly on SVM.

Due to the lack of dev-tools for state-compression, our team has built a library of [Proc Macros](https://doc.rust-lang.org/reference/procedural-macros.html) in Rust for the [Anchor Lang](https://www.anchor-lang.com/) which allows our team to integrate state-compression throughout all of Honeycomb Protocol. Our state-compression progress is planned to be generalized and open-sourced for the Solana ecosystem. We have recently partnered with [SHYFT](https://shyft.to/) to operate our high performance indexing infrastructure directly on their bare-metal RPC servers. This will allow for the entire Solana ecosystem to build scalable solutions that previously was not possible due to various on-chain fees.

## Github

https://github.com/honeycomb-protocol

All Honeycomb on-chain programs will be open-sourced in the near future. Access to the repo is only available on a request basis: hello@tumilabs.com
