// src/index.js (Modified)
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HookControlledButtonState from './Counter';
import EmojeeCounter from './EmojeeCounters';
// 🆕 Import the new component
import WeatherMoodWidget from './WeatherMoodWidget'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Existing Components */}
    <HookControlledButtonState />
    <EmojeeCounter pic="love" />
    <EmojeeCounter pic="sad" />
    <EmojeeCounter pic="happy" />
    <EmojeeCounter pic="like" />

    {/* 🆕 Weather Widget Component */}
    <WeatherMoodWidget /> 
  </React.StrictMode>
);