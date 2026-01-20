import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useCart } from '../context/CartContext';
import { Button } from '../components/Button';
import { useNavigation } from '@react-navigation/native';

const PRODUCTS = [
    { id: '1', name: 'Premium Wireless Headphones', price: 199.99 },
    { id: '2', name: 'Mechanical Gaming Keyboard', price: 129.50 },
    { id: '3', name: 'Ultra-wide 4K Monitor', price: 449.00 },
];

export const ProductScreen = () => {
    const { addItem, cart } = useCart();
    const navigation = useNavigation<any>();

    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Arif Store</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Cart')}
                    style={{ flexDirection: 'row', alignItems: 'center' }}
                >
                    <Text style={{ fontSize: 18, color: '#007AFF' }}>🛒 {cartCount}</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={PRODUCTS}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.productCard}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.productName}>{item.name}</Text>
                            <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
                        </View>
                        <Button title="Add" onPress={() => addItem(item)} style={{ minWidth: 80 }} />
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F9FA',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 40,
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1a1a1a',
    },
    productCard: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 16,
        marginBottom: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 6,
        width: '95%',
        maxWidth: 480,
        alignSelf: 'center',
    },
    productName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
    },
    productPrice: {
        fontSize: 14,
        color: '#007AFF',
        marginTop: 4,
        fontWeight: 'bold',
    },
});

