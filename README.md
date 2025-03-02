# Gnosis Test Frontend

This is a frontend for home-take assignment for Gnosis. <br/>

## Prerequisites

-   It requires MetaMask or any other browser wallet to be installed.
-   It requires [backend](https://github.com/sergeyshpadyrev/gnosis-test-backend) to be running locally.

## Installation

```sh
yarn install
```

## Running locally

```sh
yarn dev
```

## Design

This application consists of two widgets:

-   Wallet widget
-   Profile widget

You need to connect your MetaMask wallet to the application to see your wallet data in the first widget. <br/>
After it you can login to the application using your wallet via SIWE protocol. <br/>
Then you'll see your profile data (name and bio) in the second widget. <br/>
You can edit your name and bio in the profile widget.

## Architecture

This application is built with:

-   React
-   Tailwind CSS
-   react-query
-   ethers
-   siwe

Main part of architecture is described in the [backend](https://github.com/sergeyshpadyrev/gnosis-test-backend) repository.
