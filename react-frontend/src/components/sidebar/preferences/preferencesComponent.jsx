import React, { useState, useEffect } from 'react';
import axios from '../../../api/axios';

const PreferencesComponent = () => {
  const [maxTokens, setMaxTokens] = useState(2048);
  const [temperature, setTemperature] = useState(1);

  useEffect(() => {
    const fetchPreferences = async () => {
      try {
        const response = await axios.get('/user/preferences');
        const { preferences } = response.data;
        if (preferences) {
          setMaxTokens(preferences.max_tokens);
          setTemperature(preferences.temperature);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchPreferences();
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/save-preferences', {
        maxTokens: maxTokens,
        temperature: temperature,
      });
      window.location.reload();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div id="preferencesForm" className='preferences'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="maxTokens">Max Tokens: <span id="maxTokensValue">{maxTokens}</span></label>
        <input type="range" id="maxTokens" name="maxTokens" min="50" max="2048" step="1" value={maxTokens} onChange={(e) => setMaxTokens(e.target.value)} />
        <label htmlFor="temperature">Temperature: <span id="temperatureValue">{temperature}</span></label>
        <input type="range" id="temperature" name="temperature" min="0.1" max="1" step="0.1" value={temperature} onChange={(e) => setTemperature(e.target.value)} />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default PreferencesComponent;
