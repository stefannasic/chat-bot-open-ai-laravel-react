<?php

namespace App\Http\Controllers;

use App\Models\Preference;
use App\Services\OpenAIService;
use Illuminate\Http\Request;

class OpenAIController extends Controller
{
    public function sendMessage(Request $request)
    {
        $userMessage = $request->input('message');
        $apiKey = env('OPEN_AI_API_KEY');

        $user = auth()->user();
        $preferences = $user->preferences ?? new Preference();
        $maxTokens = $preferences->max_tokens ?? 2048;
        $temperature = $preferences->temperature ?? 1.0;

        $url = env('OPEN_AI_API_ENDPOINT');

        $response = OpenAIService::sendMessage($userMessage, $maxTokens, $temperature, $apiKey, $url);

        $responseData = json_decode($response);
        $reply = isset($responseData->choices[0]->message->content) ? $responseData->choices[0]->message->content : 'No response';

        return response()->json(['response' => $reply]);
    }
}
