# Firebase Chat App Setup Guide

## � ปัญหา API Key ไม่ถูกต้อง

หากคุณเจอ error: `Firebase: Error (auth/api-key-not-valid.-please-pass-a-valid-api-key.)`

### วิธีแก้ไขเร่งด่วน:
1. **ใช้ Demo Mode**: ในไฟล์ `src/main.jsx` เปลี่ยนจาก `<App />` เป็น `<AppDemo />`
2. **หรือ Setup Firebase ใหม่**: ทำตามขั้นตอนด้านล่าง

## �🔧 Firebase Configuration Setup

### 1. Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project"
3. Enter project name (e.g., "react-chat-app-2024")
4. **ข้าม Google Analytics** (ไม่จำเป็น)
5. Click "Create project"

### 2. Enable Authentication
1. In Firebase Console, go to "Authentication"
2. Click "Get started"
3. Go to "Sign-in method" tab
4. Enable "Email/Password" provider
5. Click "Save"

### 3. Setup Firestore Database
1. Go to "Firestore Database"
2. Click "Create database"
3. Choose "Start in test mode" (for development)
4. Select your preferred location
5. Click "Done"

### 4. Setup Storage
1. Go to "Storage"
2. Click "Get started"
3. Choose "Start in test mode"
4. Select your preferred location
5. Click "Done"

### 5. Get Firebase Configuration
1. Go to Project Settings (gear icon ⚙️)
2. Scroll down to "Your apps" section
3. Click the web icon `</>` (Add app)
4. Register your app with nickname "Chat App"
5. **อย่าเลือก "Also set up Firebase Hosting"**
6. Click "Register app"
7. **Copy the firebaseConfig object** ที่แสดงขึ้นมา

### 6. Update Environment Variables
**สำคัญ:** แทนที่ค่าทั้งหมดในไฟล์ `.env` ด้วยค่าจริงจาก Firebase:

```env
# แทนที่ด้วยค่าจริงจาก firebaseConfig
VITE_API_KEY=AIzaSyD....(your real api key)
VITE_AUTH_DOMAIN=your-project-id.firebaseapp.com
VITE_PROJECT_ID=your-project-id
VITE_STORAGE_BUCKET=your-project-id.appspot.com
VITE_MESSAGING_SENDER_ID=123456789
VITE_APP_ID=1:123456789:web:abcdef123456
```

**ตอนลอก firebaseConfig:**
```javascript
// Firebase จะให้ config แบบนี้
const firebaseConfig = {
  apiKey: "AIzaSyD-9tSrke72PouQMnMX-a7q...", // ← ลอกมาใส่ VITE_API_KEY
  authDomain: "myapp-project-123.firebaseapp.com", // ← ลอกมาใส่ VITE_AUTH_DOMAIN
  projectId: "myapp-project-123", // ← ลอกมาใส่ VITE_PROJECT_ID
  storageBucket: "myapp-project-123.appspot.com", // ← ลอกมาใส่ VITE_STORAGE_BUCKET
  messagingSenderId: "531916437757", // ← ลอกมาใส่ VITE_MESSAGING_SENDER_ID
  appId: "1:531916437757:web:a53ca37a93fcb428b2d92c" // ← ลอกมาใส่ VITE_APP_ID
};
```

### 7. Setup Firestore Security Rules (Optional - for production)
Go to Firestore Database > Rules and replace with:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    match /userchats/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    match /chats/{chatId} {
      allow read, write: if request.auth != null;
    }
  }
}
```

### 8. Setup Storage Security Rules (Optional - for production)
Go to Storage > Rules and replace with:

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /images/{allPaths=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

## 🚀 Running the Application

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and go to `http://localhost:5173`

## 📝 Features Implemented

- ✅ User Authentication (Register/Login)
- ✅ Real-time Chat Messaging
- ✅ Image Upload and Sharing
- ✅ User Search and Add
- ✅ Block/Unblock Users
- ✅ Emoji Picker
- ✅ Message Timestamps
- ✅ Online Status
- ✅ Responsive Design

## 🛠 Technologies Used

- **Frontend**: React, Vite, CSS
- **Backend**: Firebase (Firestore, Authentication, Storage)
- **State Management**: Zustand
- **UI Libraries**: 
  - emoji-picker-react
  - react-hot-toast
  - react-toastify
  - timeago.js

## 📱 How to Use

1. **Register**: Create a new account with email, password, and avatar
2. **Login**: Sign in with your credentials
3. **Add Users**: Click the "+" button to search and add new users
4. **Start Chatting**: Click on a user from the chat list to start messaging
5. **Send Images**: Click the image icon to share photos
6. **Use Emojis**: Click the emoji icon to add emojis to your messages
7. **Block Users**: Use the detail panel to block/unblock users
8. **Logout**: Click logout in the detail panel

## 🔍 Troubleshooting

- Make sure all environment variables are correctly set
- Check Firebase console for any security rule issues
- Ensure your Firebase project has billing enabled if using storage extensively
- Check browser console for any JavaScript errors

Enjoy your new Firebase Chat Application! 🎉