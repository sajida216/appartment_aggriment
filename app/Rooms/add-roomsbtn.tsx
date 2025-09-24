import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Card } from '@/components/Card';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { router } from 'expo-router';
import { useRouter, useLocalSearchParams } from 'expo-router';
// onPress={handleAddApartment}
export default function Addrooms() {
    const router = useRouter();
    const params = useLocalSearchParams();

    const handleAddRoom = () => {
        router.push('/add-rooms');
      };
    
    return (
        <ScrollView>
            <Card>
                <ThemedView style={styles.infoRow}>
                    <TouchableOpacity style={styles.addButton} onPress={handleAddRoom}>
                        <ThemedText style={styles.addRoomButtonText} >+</ThemedText>
                    </TouchableOpacity>
                </ThemedView>
            </Card>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    infoRow: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        // justifyContent: 'space-between',
        marginBottom: 8,
    },
    addRoomButtonText: {
        color: 'black',
        fontSize: 44,
        fontWeight: '600',
        justifyContent: 'center',
        alignItems: 'center',
    },
    addButton: {
        // backgroundColor: '#4CAF50',
        width: 60, // or match parent width
        height: 60,
        // borderRadius: 2,
        justifyContent: 'center',
        alignItems: 'center',
        // elevation: 4,
        // shadowColor: '#000',
    },
})
{/* 
<ThemedView style={styles.infoRow}>
<ThemedText type="defaultSemiBold">Andrew</ThemedText>
<ThemedText> ₹ 3500 </ThemedText>
</ThemedView>
<PaymentProgress year="2023" payments={room1Payments} tenantName="Andrew" roomNumber="Room 1" /> */}