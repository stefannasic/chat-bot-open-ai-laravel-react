<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PreferencesRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'maxTokens' => 'required|integer|min:50|max:2048',
            'temperature' => 'required|numeric|min:0.1|max:1',
        ];
    }
}
