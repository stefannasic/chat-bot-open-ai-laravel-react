<?php

namespace App\Http\Controllers;

use App\Http\Requests\PreferencesRequest;
use App\Services\UserPreferenceService;
use Illuminate\Http\Request;

class PreferencesController extends Controller
{
    public function savePreferences(PreferencesRequest $request, UserPreferenceService $userPreferenceService)
    {
        $userPreferenceService->savePreferences(
            $request->user(),
            $request->validated(),
        );

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
