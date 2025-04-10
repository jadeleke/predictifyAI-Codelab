# AI Text Predictor

🔮 **AI Text Predictor** is a web application that leverages the power of Google Cloud's PaLM API to generate text completions based on user input. Users can type a phrase, and the AI will predict and complete it!

This project uses **React** for the frontend and **Google Cloud's PaLM API** for generating the text completions.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Frontend Setup](#frontend-setup)
- [Backend Setup](#backend-setup)
- [API Integration](#api-integration)
- [Running the Project](#running-the-project)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- User can input a phrase and get a text prediction from the AI.
- Supports **light/dark mode** toggle for a modern and fun user experience.
- Simple and intuitive UI for a seamless experience.

## Technologies Used

- **React** - Frontend library to build the user interface.
- **Axios** - For making HTTP requests.
- **Tailwind CSS** - For styling (if you choose to enable it).
- **Google Cloud PaLM API** - The AI model used for generating text completions.
- **Node.js/Express** - For backend API handling (optional, if implementing backend).
  
## Installation

To get started with this project, follow these instructions.

### 1. Clone the repository

```bash
git clone https://github.com/your-username/ai-text-predictor.git
cd ai-text-predictor
```

### 2. Install dependencies
For Frontend (React):

```bash
npm install
```
### 3. Create .env file for API keys
In your backend directory, create a .env file and add your Google Cloud PaLM API key:
