# Word Definition App

This project is a React application that selects a random word from a predefined list and displays its definition using the Mistral Small model API. The application is designed to be deployed on Vercel, ensuring that sensitive information like API keys is kept secure.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [Usage](#usage)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features

- Selects a random word from a predefined list.
- Fetches and displays the definition of the selected word using the Mistral Small model API.
- Securely handles API keys using environment variables.
- Deployed on Vercel for easy access and scalability.

## Prerequisites

- Node.js and npm installed on your machine.
- A Mistral Small model API key.

## Getting Started

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/word-def-2.git
   cd word-def-2
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

### Configuration

1. Create a `.env` file in the root directory of the project:
   ```plaintext
   REACT_APP_MISTRAL_API_KEY=your_mistral_api_key_here
   ```

2. Replace `your_mistral_api_key_here` with your actual Mistral Small model API key.

## Usage

1. Start the development server:
   ```bash
   npm start
   ```

2. Open your browser and navigate to `http://localhost:3000`.

3. Click anywhere on the screen to fetch a random word and its definition.

## Deployment

1. Push your code to a GitHub repository.

2. Connect your GitHub repository to Vercel:
   - Go to [Vercel](https://vercel.com/).
   - Click on "New Project" and select "Import Git Repository".
   - Follow the prompts to connect your GitHub repository.

3. Configure environment variables on Vercel:
   - In your Vercel project settings, go to the "Environment Variables" section.
   - Add a new variable named `REACT_APP_MISTRAL_API_KEY` and paste your API key.

4. Deploy your application:
   - Click on "Deploy" to deploy your application.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -am 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.