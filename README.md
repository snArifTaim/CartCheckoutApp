# CartCheckoutApp

A comprehensive React Native shopping application built with Expo, showcasing global state management, interactive UI components, form validation, and a simulated payment process.

## 🚀 Features

### 🛒 Cart Management
- **Context API**: High-performance state management using React Context.
- **Dynamic Logic**: Add products, increase/decrease quantities, and remove items with real-time UI updates.
- **Auto-Calculations**: Automatic subtotal and total calculations as the cart changes.
- **Persistence**: Cart is cleared automatically upon successful checkout.

### 📝 Responsive Checkout Flow
- **Interactive Forms**: User-friendly inputs for shipping address and payment details.
- **Real-Time Validation**: Instant feedback for required fields, minimum card digit length (8 digits), and phone number formats.
- **Conditional Logic**: The "Pay Now" button dynamically enables only when all validation rules are met.

### 💳 Mock Payment Simulation
- **Network Simulation**: Artificial 2-second delay to mimic actual payment gateway processing.
- **Decision Logic**:
  - Payment **succeeds** for most card numbers.
  - Payment **fails** if the card number ends with `0` (for testing error states).
- **Navigation Feedback**: Dedicated success and failure screens with clear messaging and "Try Again" or "Continue Shopping" options.

## 🛠️ Project Structure

```text
src/
 ├── context/      # CartContext.tsx (Global state with Provider)
 ├── screens/      # Product, Cart, Checkout, Confirmation screens
 ├── components/   # Reusable Button, InputField, and CartItem components
 ├── utils/        # validation.ts (Pure logic for form checks)
```

## 📦 Tech Stack
- **React Native** (Expo)
- **TypeScript**
- **React Navigation** (Stack)
- **React Context API**

## 🏃 Getting Started

### Prerequisites
- Node.js installed
- Expo Go app (for mobile testing) or a configured Android/iOS emulator

### Installation
1. Clone the repository
2. Navigate to the project directory:
   ```bash
   cd CartCheckoutApp
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npx expo start
   ```

## 🧪 Testing the Payment Flow
- **To Success**: Enter any card number NOT ending in `0` (e.g., `4242 4242`).
- **To Fail**: Enter a card number ending in `0` (e.g., `1234 5670`).
#

## 👨‍💻 Author

MD. Arif Islam
- 📱 Mobile App Developer (React Native & Expo)
- 🚀 Crafting modern, user-friendly & high-performance mobile apps fast!

 🔗 [GitHub](https://github.com/snArifTaim/) [LinkedIn](https://www.linkedin.com/in/sn-arif-dev/)
