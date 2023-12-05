"use client";
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { useState } from 'react';
import DeliverableForm from '@/components/organ/deliverableForm'; 
import getTask from '@/utils/services';

export default function Home() {
  
  const [choices, setChoices] = useState([]); 

  return (
    <main className="flex mx-auto min-h-screen  p-24">
      <div className=' flex justify-between align-center'>
        <DeliverableForm setChoices={setChoices}/>
        <div className='bg-slate-400 border-2 border-black'>
            {
            choices.map(choice => { 
              return (
                <p key={choice.index}>{choice.message.content}</p>
              );
            })
          }
        </div>
      </div>
      
      
     
    </main>
  );
}
