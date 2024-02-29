<?php

namespace App\Services;

use App\Models\Preference;
use App\Models\User;

class UserPreferenceService
{
    public function savePreferences(User $user, array $preferencesData)
    {
        $preferences = $user->preferences ?? new Preference();

        $preferences->max_tokens = $preferencesData['maxTokens'];
        $preferences->temperature = $preferencesData['temperature'];

        $user->preferences()->save($preferences);
    }
}
