// src/components/WordDefinition.js
import React, { useState } from 'react';
import { Mistral } from '@mistralai/mistralai';
import words from '../words.json';

const WordDefinition = () => {
  const [word, setWord] = useState('');
  const [definition, setDefinition] = useState('');

  const fetchRandomWord = async () => {
    try {
      const randomIndex = Math.floor(Math.random() * words.length);
      const randomWord = words[randomIndex];
      setWord(randomWord);

      const apiKey = process.env.REACT_APP_MISTRAL_API_KEY;
      if (!apiKey) {
        throw new Error('No API key found in environment variables');
      }

      const client = new Mistral({ apiKey });

      const chatResponse = await client.chat.complete({
        model: 'mistral-small-latest',
        temperature: 0.2,
        messages: [{ role: 'user', content: `Définition du mot "${randomWord}":` }],
      });

      console.log('Chat Response:', chatResponse);

      if (chatResponse.choices && chatResponse.choices.length > 0) {
        const definition = chatResponse.choices[0].message.content.trim();
        setDefinition(definition);
      } else {
        setDefinition('Aucune définition trouvée.');
      }
    } catch (error) {
      console.error('Error fetching word or definition:', error);
      setDefinition('Erreur lors de la récupération de la définition.');
    }
  };

  const handleClick = () => {
    fetchRandomWord();
  };

  return (
    <div onClick={handleClick} style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Cliquez pour obtenir un mot aléatoire et sa définition</h1>
      {word && (
        <div>
          <h2>{word}</h2>
          <p>{definition}</p>
        </div>
      )}
    </div>
  );
};

export default WordDefinition;