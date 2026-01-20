import { View, Text, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import { useCart } from '../context/CartContext';
import { CartItem } from '../components/CartItem';
import { Button } from '../components/Button';
import { useNavigation } from '@react-navigation/native';

export const CartScreen = () => {
    const { cart, totalPrice } = useCart();
    const navigation = useNavigation<any>();

    if (cart.length === 0) {
        return (
            <View style={styles.emptyContainer}>
                <Text style={styles.emptyText}>Your cart is empty</Text>
                <Button title="Go Shopping" onPress={() => navigation.navigate('Products')} />
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={cart}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <CartItem item={item} />}
                contentContainerStyle={styles.list}
            />
            <View style={styles.footer}>
                <View style={styles.summary}>
                    <Text style={styles.totalLabel}>Total:</Text>
                    <Text style={styles.totalValue}>${totalPrice.toFixed(2)}</Text>
                </View>
                <Button title="Proceed to Checkout" onPress={() => navigation.navigate('Checkout')} />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F9FA',
    },
    list: {
        paddingBottom: 100,
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    emptyText: {
        fontSize: 18,
        color: '#666',
        marginBottom: 20,
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#fff',
        padding: 20,
        borderTopWidth: 1,
        borderTopColor: '#EEE',
        paddingBottom: 34, // For iPhone home indicator
    },
    summary: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    totalLabel: {
        fontSize: 18,
        color: '#333',
    },
    totalValue: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#007AFF',
    },
});
