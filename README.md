# chat-bot-open-ai-laravel-react

# Laravel Project - Setup

Follow these steps to successfully set up the Laravel project.

1. Install all dependencies using Composer:

composer install

2. Copy the .env.example file and rename it to .env. Then, open the .env file and set the following values:

APP_URL=http://localhost:8000
FRONTEND_URL=http://localhost:5173
SESSION_DOMAIN=localhost
SANCTUM_STATEFUL_DOMAINS=localhost:5173

OPEN_AI_API_KEY='your_open_api_key'
OPEN_AI_API_ENDPOINT='https://api.openai.com/v1/chat/completions'
OPEN_AI_MODEL='gpt-3.5-turbo'

MAX_TOKENS_VALUE=50
MIN_TOKENS_VALUE=2048
MAX_TEMPERATURE_VALUE=0.1
MIN_TEMPERATURE_VALUE=1

3. Run the database migration to create the necessary tables:

php artisan migrate

4. Start the Laravel server to run the application:

php artisan serve

# React Project - Setup

Follow these steps to successfully set up the React project.

1. Install all dependencies:

npm install

2. Start the React application:

npm run dev