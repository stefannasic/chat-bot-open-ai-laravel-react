<?php

namespace App\Http\Controllers;

use App\Models\Preference;
use Illuminate\Http\Request;

class PreferencesController extends Controller
{
    public function savePreferences(Request $request) {
        $request->validate([
            'maxTokens' => 'required|integer|min:50|max:2048',
            'temperature' => 'required|numeric|min:0.1|max:1',
        ]);
    
        $maxTokens = $request->input('maxTokens');
        $temperature = $request->input('temperature');
        
        $user = auth()->user();
        $preferences = $user->preferences ?? new Preference();
    
        $preferences->max_tokens = $maxTokens;
        $preferences->temperature = $temperature;
        $user->preferences()->save($preferences);
        
        return response()->json(['message' => 'Preferences saved successfully.']);
    }

    public function getUserPreferences(Request $request) {
        $user = $request->user();
        if (!$user) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
    
        $preferences = $user->preferences;
        return response()->json(['preferences' => $preferences]);
    }
}
