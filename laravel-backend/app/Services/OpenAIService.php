<?php

namespace App\Services;

class OpenAIService
{
    public static function sendMessage($userMessage, $maxTokens, $temperature, $apiKey, $url)
    {
        $sanitizedUserMessage = filter_var($userMessage, FILTER_SANITIZE_STRING);

        $parameters = [
            'model' => env('OPEN_AI_MODEL'),
            'max_tokens' => $maxTokens,
            'temperature' => $temperature,
            'messages' => [['role' => 'system', 'content' => $sanitizedUserMessage]],
        ];

        $headers = [
            'Content-Type: application/json',
            'Authorization: Bearer ' . $apiKey
        ];

        $data = json_encode($parameters);

        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
        curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

        $response = curl_exec($ch);

        curl_close($ch);

        return $response;
    }
}
