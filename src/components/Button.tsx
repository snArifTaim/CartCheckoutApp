import { TouchableOpacity, Text, StyleSheet, ActivityIndicator, ViewStyle, TextStyle } from 'react-native';

interface ButtonProps {
    title: string;
    onPress: () => void;
    loading?: boolean;
    disabled?: boolean;
    style?: ViewStyle;
    textStyle?: TextStyle;
    variant?: 'primary' | 'danger' | 'outline';
}

export const Button = ({
    title,
    onPress,
    loading,
    disabled,
    style,
    textStyle,
    variant = 'primary',
}: ButtonProps) => {
    const getButtonStyle = () => {
        switch (variant) {
            case 'danger':
                return styles.danger;
            case 'outline':
                return styles.outline;
            default:
                return styles.primary;
        }
    };

    const getTextStyle = () => {
        switch (variant) {
            case 'outline':
                return styles.outlineText;
            default:
                return styles.primaryText;
        }
    };

    return (
        <TouchableOpacity
            style={[styles.button, getButtonStyle(), style, (!!disabled || !!loading) && styles.disabled]}
            onPress={onPress}
            disabled={!!disabled || !!loading}
        >
            {!!loading ? (
                <ActivityIndicator color={variant === 'outline' ? '#007AFF' : '#fff'} />
            ) : (
                <Text style={[styles.text, getTextStyle(), textStyle]}>{title}</Text>
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 8,
    },
    primary: {
        backgroundColor: '#007AFF',
    },
    danger: {
        backgroundColor: '#FF3B30',
    },
    outline: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '#007AFF',
    },
    primaryText: {
        color: '#fff',
    },
    outlineText: {
        color: '#007AFF',
    },
    text: {
        fontSize: 16,
        fontWeight: '600',
    },
    disabled: {
        opacity: 0.5,
    },
});
