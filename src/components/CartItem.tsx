import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useCart, CartItem as CartItemType } from '../context/CartContext';

interface CartItemProps {
    item: CartItemType;
}

export const CartItem = ({ item }: CartItemProps) => {
    const { updateQuantity, removeItem } = useCart();

    return (
        <View style={styles.container}>
            <View style={styles.info}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>${item.price.toFixed(2)}</Text>
            </View>
            <View style={styles.controls}>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => updateQuantity(item.id, -1)}
                    disabled={item.quantity <= 1}
                >
                    <Text style={{ color: item.quantity <= 1 ? '#CCC' : '#007AFF', fontSize: 24 }}>-</Text>
                </TouchableOpacity>
                <Text style={styles.quantity}>{item.quantity}</Text>
                <TouchableOpacity style={styles.btn} onPress={() => updateQuantity(item.id, 1)}>
                    <Text style={{ color: '#007AFF', fontSize: 24 }}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn, styles.removeBtn]} onPress={() => removeItem(item.id)}>
                    <Text style={{ color: '#FF3B30', fontWeight: 'bold' }}>DEL</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#fff',
        borderRadius: 12,
        marginVertical: 8,
        marginHorizontal: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 6,
    },
    info: {
        flex: 1,
    },
    name: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
    },
    price: {
        fontSize: 14,
        color: '#666',
        marginTop: 4,
    },
    controls: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    btn: {
        padding: 8,
        borderRadius: 4,
        backgroundColor: '#F0F0F0',
        marginHorizontal: 4,
        minWidth: 40,
        alignItems: 'center',
    },
    quantity: {
        fontSize: 16,
        fontWeight: '600',
        minWidth: 24,
        textAlign: 'center',
    },
    removeBtn: {
        marginLeft: 8,
        backgroundColor: '#FFE5E5',
    },
});
