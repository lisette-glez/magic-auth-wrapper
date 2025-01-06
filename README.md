## Magic Auth Wrapper Starter Project

This repository is a starting point for implementing passwordless authentication using [Magic’s SDKs](https://magic.link) with Express.js and Tailwind CSS. It provides a lightweight wrapper for integrating Magic’s powerful authentication tools into your web application.

<p align="center">  
    <img width="1090" alt="Screenshot of Magic Auth Wrapper" src="/public/magic-login.png"> 
</p>

### 🚀 Some Features
- **Passwordless Email Login**: Authenticate users seamlessly using one-time passwords (OTP) sent via email.  
- **Passwordless SMS Login**: Enable user authentication using OTPs sent to their mobile phone via SMS. 
- **User Token Validation**: Verify and decode Magic-issued tokens for secure backend operations.
- **Session Management**: After successful validation, the user’s metadata and token are saved in the session, ensuring seamless user experience across multiple interactions.
- **Error Handling**: Detects and responds to invalid or expired tokens by logging errors and returning an appropriate response.

### 🛠️ Technologies Used
- **Node.js**: JavaScript runtime environment.
- **Express.js**: Fast and minimalist web framework for Node.js.
- **EJS**: A simple templating engine for creating dynamic HTML pages.
- **Magic SDK**: Secure and user-friendly authentication without passwords.
- **Tailwind CSS**: Utility-first CSS framework for modern web design.  

### 🔧 Getting Started
####  - Requirements
- **Node.js**: Ensure you have Node.js installed (v14+ recommended).
- **Magic API Key**: Sign up at [Magic](https://magic.link) to get your API keys.

####  - Setup

```bash
# Clone the repository
git clone https://github.com/lisette-glez/magic-auth-wrapper.git
cd magic-auth-wrapper

# Install dependencies
npm install

# Set up your environment variables by creating a .env file in the root directory:
MAGIC_PUBLIC_KEY=your_public_magic_key
MAGIC_SECRET_KEY=your_secret_magic_key
SESSION_SECRET=your_session_secret_key

# Start serve
npm start

# Open your browser and navigate to http://localhost:3000
```
  
