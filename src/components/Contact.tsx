"use client"
import React, { useState } from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:yashita.mittal03@gmail.com?subject=Contact%20from%20Portfolio&body=Name:%20${encodeURIComponent(name)}%0AEmail:%20${encodeURIComponent(email)}%0AMessage:%0A${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;

    // Reset Form Fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div>
    </div>
  );
}

export default Contact;
