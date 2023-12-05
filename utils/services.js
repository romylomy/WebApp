import React from 'react';



const getTask = async (prompt) => {
  try {
    const response = await fetch('/api/chat-gpt', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: prompt.deliverable,
      }),
    });

    return response;
  } catch (error) {
    console.error('Error in getTask:', error.message);
    throw error;
  }
};

export default getTask;
