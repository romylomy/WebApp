"use client";
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { useState } from 'react';


export default function Home() {
  
  const [choices, setChoices] = useState([]); 

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button
        variant='outline'
        onClick={async () => {
          try {
            const response = await fetch('/api/chat-gpt', {
              method: 'POST',
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                prompt: "This is the prompt "
              }),
            });

            // Check if the request was successful (status code 2xx)
            if (response.ok) {
              const result = await response.json();
              setChoices(result.choices); 
            } else {
              // Handle error responses here
              console.error("Error:", response.status, response.statusText);
            }
          } catch (error) {
            // Handle network or other errors
            console.error("Error:", error.message);
          }

        }}
      >
        Api button
      </Button>
      {
        choices.map(choice => { 
          return (
            <p key={choice.index}>{choice.message.content}</p>
          );
        })
      }
    </main>
  );
}
