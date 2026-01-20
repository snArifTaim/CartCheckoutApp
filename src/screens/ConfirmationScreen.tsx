import { View, Text, StyleSheet } from 'react-native';
import { Button } from '../components/Button';
import { useCart } from '../context/CartContext';
import { useRoute, useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

export const ConfirmationScreen = () => {
    const route = useRoute<any>();
    const navigation = useNavigation<any>();
    const { clearCart } = useCart();
    const { success, amount, orderId } = route.params;

    useEffect(() => {
        if (success) {
            clearCart();
        }
    }, [success]);

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 80, marginBottom: 20 }}>{success ? '✅' : '❌'}</Text>
            {success ? (
                <>
                    <Text style={styles.title}>Order Confirmed!</Text>
                    <Text style={styles.subtitle}>Thank you for your purchase.</Text>
                    <View style={styles.details}>
                        <Text style={styles.detailText}>Order ID: #{orderId}</Text>
                        <Text style={styles.detailText}>Amount Paid: ${amount.toFixed(2)}</Text>
                    </View>
                    <Button
                        title="Continue Shopping"
                        onPress={() => navigation.popToTop()}
                        style={styles.btn}
                    />
                </>
            ) : (
                <>
                    <Text style={styles.title}>Payment Failed</Text>
                    <Text style={styles.subtitle}>Something went wrong with your transaction.</Text>
                    <Button title="Try Again" onPress={() => navigation.goBack()} style={styles.btn} />
                    <Button
                        title="Go to Home"
                        variant="outline"
                        onPress={() => navigation.popToTop()}
                        style={styles.btn}
                    />
                </>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginTop: 20,
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        marginTop: 8,
        textAlign: 'center',
    },
    details: {
        backgroundColor: '#F8F9FA',
        padding: 16,
        borderRadius: 8,
        width: '100%',
        marginVertical: 30,
    },
    detailText: {
        fontSize: 16,
        color: '#444',
        marginBottom: 8,
        textAlign: 'center',
    },
    btn: {
        width: '100%',
        marginTop: 12,
    },
});
