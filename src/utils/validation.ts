export const validateFullName = (name: string) => {
    if (!name.trim()) return 'Full Name is required';
    return '';
};

export const validateAddress = (address: string) => {
    if (!address.trim()) return 'Address is required';
    return '';
};

export const validateCity = (city: string) => {
    if (!city.trim()) return 'City is required';
    return '';
};

export const validateCardNumber = (cardNumber: string) => {
    if (!cardNumber) return 'Card Number is required';
    const cleanCard = cardNumber.replace(/\s/g, '');
    if (cleanCard.length < 8) return 'Card number must be at least 8 digits';
    if (!/^\d+$/.test(cleanCard)) return 'Card number must contain only digits';
    return '';
};

export const validateExpiry = (expiry: string) => {
    if (!expiry.trim()) return 'Expiry Date is required';
    if (!/^\d{2}\/\d{2}$/.test(expiry)) return 'Format must be MM/YY';
    return '';
};

export const validatePhone = (phone: string) => {
    if (!phone.trim()) return 'Phone number is required';
    if (!/^\d{10,15}$/.test(phone.replace(/\+/g, ''))) return 'Invalid phone number';
    return '';
};
