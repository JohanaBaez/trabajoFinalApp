
import React from 'react';
import { View } from 'react-native';
import Profile from './components/Profile';

const App: React.FC = () => {
  const handleNewLinkSubmit = (url: string, text: string) => {
    // TODO: Send new link data to server
    console.log(`New link submitted: ${url} (${text})`);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Profile
        image="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.imprentaonline.net%2Fblog%2Fprompt-imagenes-ia%2F&psig=AOvVaw1dTmCNv4n01m77XVUrvXOU&ust=1714260045115000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPDq06qC4YUDFQAAAAAdAAAAABAE"
        username="Jessica Randall"
        location="London, United Kingdom"
        description="Front-end developer and avid reader."
        links={[
          { url: 'https://github.com/JohanaBaez', text: 'GitHub' },
          { url: 'https://www.frontendmentor.io/profile/jessica-randall', text: 'Frontend Mentor' },
          { url: 'https://www.linkedin.com/in/jessica-randall/', text: 'LinkedIn' },
          { url: 'https://twitter.com/jessica_randall', text: 'Twitter' },
        ]}
        onNewLinkSubmit={handleNewLinkSubmit}
      />
    </View>
  );
};

export default App;