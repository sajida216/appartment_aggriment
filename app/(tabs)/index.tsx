import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { StyleSheet } from 'react-native';

import { Card } from '@/components/Card';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const router = useRouter();

  const handleCardPress = () => {
    router.push('/apartment-detail?name=SkyLine Apartments');
  };

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
          style={styles.complexCard}
          lightColor="#f0f8ff"
          darkColor="#1a1a2e"
          padding={20}
          borderRadius={16}
          elevation={4}
          onPress={handleCardPress}>
       <ThemedView  
        lightColor="#f0f8ff"
        darkColor="#1a1a2e"
        style={styles.infoRow}>
          <ThemedText type="defaultSemiBold">Rooms Available:</ThemedText>
          <ThemedText>8</ThemedText>
        </ThemedView>
        <ThemedView 
        lightColor="#f0f8ff"
        darkColor="#1a1a2e"
        style={styles.infoRow}>
          <ThemedText type="defaultSemiBold">Rooms Occupied:</ThemedText>
          <ThemedText>12</ThemedText>
          </ThemedView>
        
        <ThemedView  
        lightColor="#f0f8ff"
        darkColor="#1a1a2e"
        style={styles.infoRow}>
          <ThemedText type="defaultSemiBold">Rent Due:</ThemedText>
          <ThemedText>4
          </ThemedText>
        </ThemedView>
        
      </Card>

     

      

      
      
      
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
