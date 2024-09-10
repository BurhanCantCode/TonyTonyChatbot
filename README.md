
# YapperAI - Personalized Multi-Language Customer Support Bot

[![Vercel Deployment](https://vercel.com/button)](https://tony-tony-chatbot.vercel.app/)

YapperAI is a powerful, personalized customer support chatbot that helps businesses automate their customer interactions in multiple languages. The chatbot is designed to understand and respond to customer queries based on the data provided by the business. The platform allows users to upload relevant CSV data and train the bot to fetch accurate responses.

Built with **Next.js**, **Azure OpenAI**, **Firebase**, **Material UI (MUI)**, and other cutting-edge technologies, YapperAI offers a smooth and efficient experience with clean UI/UX and animations, ensuring businesses have a modern, scalable customer support solution.

## Features

- **Multi-language Support**: YapperAI supports multiple languages to cater to diverse customer bases.
- **CSV Data Upload**: Businesses can upload their relevant CSV data to train the bot and ensure accurate responses.
- **Azure OpenAI Integration**: The chatbot leverages Azure OpenAI to provide intelligent and context-aware responses.
- **Firebase Authentication**: Secure user authentication and management through Firebase.
- **Clean UI/UX with MUI**: The user interface is designed using Material UI for a modern, beautiful look with seamless animations.
- **Customizable for Any Business**: The chatbot can be tailored for any business, making it versatile and easy to deploy across industries.

## Tech Stack

- **Frontend**: Next.js, TypeScript, JavaScript
- **Backend**: Firebase for authentication and database
- **AI/ML**: Azure OpenAI for language processing and intelligent responses
- **UI/UX**: Material UI (MUI) for styling and animations
- **Deployment**: Vercel

## Screenshots

### Home Page
![Homepage](https://github.com/user-attachments/assets/424b1075-fd89-439d-8cd1-995e16ba72cd)


### Chatbot Interface
![Chatbot](https://github.com/user-attachments/assets/3b8c0275-8033-48b0-b087-03c5b60e2dc8)



## Getting Started

To run this project you'll need to setup the api's the ones use have been discointued altho the site is live, to run lcoally follow these steps:

### Prerequisites

- Node.js (v14 or above)
- CSV data relevant to the business use case

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/yapperai-chatbot.git
   cd yapperai-chatbot
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:

   Create a `.env.local` file in the root directory with the following keys:

   ```bash
   NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
   AZURE_OPENAI_API_KEY=your_azure_openai_api_key
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

### Deployment

YapperAI is easily deployable to platforms like Vercel. To deploy:

1. Connect the repository to Vercel.
2. Set the environment variables in Vercel.
3. Deploy the app.

## Contributing

We welcome contributions to improve YapperAI. Please follow these steps:

1. Fork the project.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push to the branch and create a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or suggestions, feel free to open an issue or contact us at [Burhanuddinkhatri@gmail.com].
