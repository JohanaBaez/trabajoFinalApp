import React from 'react';
import { StyleSheet, View } from 'react-native';
import UserProfile from './components/UserProfile';

const App: React.FC = () => {
  const [links, setLinks] = React.useState([
    // { url: 'https://github.com/JohanaBaez', text: 'GitHub' },
    // { url: 'https://www.frontendmentor.io/', text: 'Frontend Mentor' },
    // { url: 'https://www.linkedin.com/feed/', text: 'LinkedIn' },
    // { url: 'https://twitter.com/?lang=es', text: 'Twitter' },
  ]);

  // const handleUpdateLinks = (newLinks: { url: string; text: string }[]) => {
  //   setLinks(newLinks);
  // };

  const userProfileData = {
    name: 'Jessica Randall',
    location: 'London, United Kingdom',
    description: 'Front-end developer and avid reader.',
    imageUrl: 'https://social-links-profile-main-henna.vercel.app/_next/image?url=%2Fassets%2Fimages%2Favatar-jessica.jpeg&w=3840&q=75',
    links: links,
    
  };

  return (
    <View style={styles.container}>
      <UserProfile {...userProfileData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
