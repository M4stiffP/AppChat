# 🌤️ Cloudinary Setup (ฟรี)

## ขั้นตอนการ Setup:

### 1. สมัคร Cloudinary (ฟรี)
1. ไป https://cloudinary.com/
2. คลิก "Sign Up for Free"
3. สมัครด้วย email หรือ Google
4. Verify email

### 2. Get API Credentials
1. ไปที่ Dashboard
2. Copy ค่าเหล่านี้:
   - **Cloud Name**
   - **API Key** 
   - **API Secret**

### 3. เพิ่มใน .env file
```env
# Cloudinary Configuration
VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name
VITE_CLOUDINARY_API_KEY=your_api_key
VITE_CLOUDINARY_API_SECRET=your_api_secret
```

### 4. Install Package
```bash
npm install cloudinary
```

## 📦 ฟรี Package ได้:
- ✅ 25 GB Storage
- ✅ 25 GB Bandwidth/month  
- ✅ Auto image optimization
- ✅ Resize & crop ได้
- ✅ CDN worldwide

## 🎯 สำหรับ Chat App เพียงพอมาก!