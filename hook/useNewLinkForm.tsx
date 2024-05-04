import { useState } from 'react';

export const useNewLinkForm = () => {
  const [newLinkUrl, setNewLinkUrl] = useState('');
  const [newLinkText, setNewLinkText] = useState('');
  const [showNewLinkForm, setShowNewLinkForm] = useState(false);

  const handleNewLinkSubmit = () => {
    // TODO: Send new link data to server
    setShowNewLinkForm(false);
  };

  return {
    newLinkUrl,
    setNewLinkUrl,
    newLinkText,
    setNewLinkText,
    showNewLinkForm,
    setShowNewLinkForm,
    handleNewLinkSubmit,
  };
};