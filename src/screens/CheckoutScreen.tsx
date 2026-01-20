import { useState, useMemo } from 'react';
import { View, Text, ScrollView, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { InputField } from '../components/InputField';
import { Button } from '../components/Button';
import { useNavigation } from '@react-navigation/native';
import * as validation from '../utils/validation';
import { useCart } from '../context/CartContext';

export const CheckoutScreen = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        address: '',
        city: '',
        phone: '',
        cardNumber: '',
        expiry: '',
    });

    const [isLoading, setIsLoading] = useState(false);
    const { totalPrice } = useCart();
    const navigation = useNavigation<any>();

    const errors = useMemo(() => {
        return {
            fullName: validation.validateFullName(formData.fullName),
            address: validation.validateAddress(formData.address),
            city: validation.validateCity(formData.city),
            phone: validation.validatePhone(formData.phone),
            cardNumber: validation.validateCardNumber(formData.cardNumber),
            expiry: validation.validateExpiry(formData.expiry),
        };
    }, [formData]);

    const isValid = Object.values(errors).every((err) => err === '');

    const handlePayment = async () => {
        setIsLoading(true);
        // Simulate payment
        setTimeout(() => {
            setIsLoading(false);
            const isSuccess = !formData.cardNumber.endsWith('0');
            navigation.navigate('Confirmation', {
                success: isSuccess,
                amount: totalPrice,
                orderId: Math.floor(Math.random() * 1000000).toString(),
            });
        }, 2000);
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <Text style={styles.sectionTitle}>Shipping Address</Text>
                <InputField
                    label="Full Name"
                    value={formData.fullName}
                    onChangeText={(text) => setFormData({ ...formData, fullName: text })}
                    placeholder="John Doe"
                    error={formData.fullName ? errors.fullName : ''}
                />
                <InputField
                    label="Address"
                    value={formData.address}
                    onChangeText={(text) => setFormData({ ...formData, address: text })}
                    placeholder="123 Main St"
                    error={formData.address ? errors.address : ''}
                />
                <InputField
                    label="City"
                    value={formData.city}
                    onChangeText={(text) => setFormData({ ...formData, city: text })}
                    placeholder="New York"
                    error={formData.city ? errors.city : ''}
                />
                <InputField
                    label="Phone Number"
                    value={formData.phone}
                    onChangeText={(text) => setFormData({ ...formData, phone: text })}
                    placeholder="1234567890"
                    keyboardType="phone-pad"
                    error={formData.phone ? errors.phone : ''}
                />

                <Text style={[styles.sectionTitle, { marginTop: 20 }]}>Payment Details</Text>
                <InputField
                    label="Card Number"
                    value={formData.cardNumber}
                    onChangeText={(text) => setFormData({ ...formData, cardNumber: text })}
                    placeholder="XXXX XXXX XXXX XXXX"
                    keyboardType="numeric"
                    error={formData.cardNumber ? errors.cardNumber : ''}
                />
                <InputField
                    label="Expiry Date"
                    value={formData.expiry}
                    onChangeText={(text) => setFormData({ ...formData, expiry: text })}
                    placeholder="MM/YY"
                    error={formData.expiry ? errors.expiry : ''}
                />

                <View style={styles.summaryBox}>
                    <Text style={styles.summaryText}>Amount to Pay: ${totalPrice.toFixed(2)}</Text>
                </View>

                <Button
                    title={isLoading ? 'Processing...' : 'Pay Now'}
                    onPress={handlePayment}
                    disabled={!isValid || isLoading}
                    loading={isLoading}
                    style={styles.payBtn}
                />
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F9FA',
    },
    scrollContent: {
        padding: 20,
        paddingBottom: 40,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 16,
    },
    summaryBox: {
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 8,
        marginVertical: 20,
        borderWidth: 1,
        borderColor: '#EEE',
    },
    summaryText: {
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
        color: '#007AFF',
    },
    payBtn: {
        marginTop: 10,
    },
});
