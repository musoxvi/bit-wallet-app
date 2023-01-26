# ⚛️ React Native Bitcoin Wallet APP 💰📉📈

Bitcoin Wallet APP made using React Native, Apollo and Typescript! 😎

## Installation

```bash
# Clone this repository
$ git clone https://github.com/musoxvi/bit-wallet-app.git

# Go into the repository
$ cd bit-wallet-app

# Install dependencies
$ npm install
```

## 📱 Available Scripts

In the project directory, you can run:

```bash
#For IOS
$cd ios pod install

# Run the server
$ yarn run start

# Run the app (iOS)
$ yarn ios

# Run the app (Android)
$ yarn android
```

# Folder Structure Conventions

### Top-level directory layout

    .
    ├── ...
    ├── src                 # Main file
    │   ├── assets          # Icons and animations
    │   ├── components      # Generic components
    │   ├── constants       # Some generic constants
    │   ├── context         # Main store of the app
    │   ├── graphql         # Methods to get and modify server data
    │   ├── hooks           # Hooks used to call the server
    │   ├── navigation      # Configuration, and navigation stack
    │   ├── screens         # Screens of the app
    │   ├── theme           # Colors used in the app
    │   ├── types           # Types and interfaces
    │   └── utils           # Helpers and utils of the app
    └── ...
