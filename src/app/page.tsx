'use client';

import { useState } from 'react';
import Image from "next/image";
import ChatInterface from '@/components/ChatInterface';

export default function Home() {
  return (
    <div className="h-screen bg-gray-50 dark:bg-gray-900">
      <ChatInterface />
    </div>
  );
}
