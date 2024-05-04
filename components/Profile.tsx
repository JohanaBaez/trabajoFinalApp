import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import LinkButton from './LinkButton';

interface ProfileProps {
  image: string;
  username: string;
  location: string;
  description: string;
  links: { url: string; text: string }[];
  onNewLinkSubmit: (url: string, text: string) => void;
}

const Profile: React.FC<ProfileProps> = ({ image, username, location, description, links, onNewLinkSubmit }) => {
  const [showNewLinkForm, setShowNewLinkForm] = useState(false);
  const [newLinkUrl, setNewLinkUrl] = useState('');
  const [newLinkText, setNewLinkText] = useState('');

  const handleNewLinkSubmit = () => {
    onNewLinkSubmit(newLinkUrl, newLinkText);
    setShowNewLinkForm(false);
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.profileImage} />
      <View style={styles.profileInfo}>
        <Text style={styles.username}>{username}</Text>
        <Text style={styles.location}>{location}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={styles.linksContainer}>
        {links.map((link, index) => (
          <LinkButton key={index} text={link.text} url ={link.url} />
        ))}
        <TouchableOpacity style={styles.newLinkButton} onPress={() => setShowNewLinkForm(!showNewLinkForm)}>
          <Text style={styles.newLinkButtonText}>+ New Link</Text>
        </TouchableOpacity>
        {showNewLinkForm && (
          <View style={styles.newLinkForm}>
            <TextInput
              style={styles.newLinkInput}
              placeholder="Enter URL"
              value={newLinkUrl}
              onChangeText={setNewLinkUrl}
            />
            <TextInput
              style={styles.newLinkInput}
              placeholder="Enter text"
              value={newLinkText}
              onChangeText={setNewLinkText}
            />
            <TouchableOpacity style={styles.newLinkSubmitButton} onPress={handleNewLinkSubmit}>
              <Text style={styles.newLinkSubmitText}>Submit</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  profileInfo: {
    alignItems: 'center',
    marginBottom: 20,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  location: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    color: '#666',
  },
  linksContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  linkButton: {
    backgroundColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    margin: 5,
  },
  linkText: {
    fontSize: 16,
    color: '#333',
  },
  newLinkButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    padding: 10,
    margin: 5,
    alignItems: 'center',
  },
  newLinkButtonText: {
    fontSize: 16,
    color: 'white',
  },
  newLinkForm: {
    flexDirection: 'column',
    alignItems: 'center',
    margin: 5,
  },
  newLinkInput: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginBottom: 5,
  },
  newLinkSubmitButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    padding: 10,
    margin: 5,
    alignItems: 'center',
  },
  newLinkSubmitText: {
    fontSize: 16,
    color: 'white',
  },
});

export default Profile;