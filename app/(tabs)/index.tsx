import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { Card } from '@/components/Card';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
      
      {/* Example 4: Card with complex content */}
      <Card 
        title="SkyLine Apartments" 
        subtitle="Card with multiple elements"
        style={styles.complexCard}
        lightColor="#f0f8ff"
        darkColor="#1a1a2e"
        padding={20}
        borderRadius={16}
        elevation={4}
      >
        <ThemedView 
        lightColor="#f0f8ff"
        darkColor="#1a1a2e"
        style={styles.infoRow}>
          <ThemedText type="defaultSemiBold">Status:</ThemedText>
          <ThemedText>Active</ThemedText>
        </ThemedView>
        <ThemedView  
        lightColor="#f0f8ff"
        darkColor="#1a1a2e"
        style={styles.infoRow}>
          <ThemedText type="defaultSemiBold">Platform:</ThemedText>
          <ThemedText>
            {Platform.select({
              ios: 'iOS',
              android: 'Android',
              web: 'Web',
            })}
          </ThemedText>
        </ThemedView>
        
      </Card>

      {/* Example 2: Card with custom styling */}
      <Card 
        title="Custom Styled Card" 
        subtitle="Card with custom colors and spacing"
        lightColor="#f0f8ff"
        darkColor="#1a1a2e"
        padding={20}
        borderRadius={16}
        elevation={4}
      >
        <ThemedText>
          This card has custom background colors, increased padding, rounded corners, and enhanced shadow.
        </ThemedText>
      </Card>

      {/* Example 3: Card with content only */}
      <Card>
        <ThemedText type="subtitle">Content Only Card</ThemedText>
        <ThemedText>
          This card doesn't have a title prop, just content. You can put any React components inside.
        </ThemedText>
      </Card>

      

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12',
            })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          {`Tap the Explore tab to learn more about what's included in this starter app.`}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          {`When you're ready, run `}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  complexCard: {
    marginBottom: 16,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  marginTop: {
    marginTop: 8,
  },
});
