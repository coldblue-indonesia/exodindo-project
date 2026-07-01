# EXODINDO - PT Exod Creative Indonesia

![EXODINDO](https://img.shields.io/badge/EXODINDO-Official%20Website-blue)
![Status](https://img.shields.io/badge/Status-Development-yellow)
![License](https://img.shields.io/badge/License-MIT-green)

## 📋 Deskripsi Proyek

**EXODINDO** adalah website resmi PT Exod Creative Indonesia - perusahaan yang menyediakan solusi kreatif dan inovatif untuk bisnis digital di Indonesia.

Platform ini mencakup:
- 🌐 Website resmi perusahaan
- 📊 Dashboard administrasi
- 🔐 Sistem manajemen pengguna
- 💼 Manajemen proyek dan klien
- 📦 Katalog layanan dan pricing
- 📞 Sistem kontak dan komunikasi

---

## 🚀 Fitur Utama

### Frontend
- ✅ Responsive design (Mobile, Tablet, Desktop)
- ✅ Landing page dengan informasi perusahaan
- ✅ Showcase portofolio dan proyek
- ✅ Sistem pricing dinamis
- ✅ Contact form dengan notifikasi email
- ✅ Blog/Berita

### Backend API
- ✅ Autentikasi & Autorisasi (JWT)
- ✅ Manajemen user (Admin, Client, Partner)
- ✅ CRUD Proyek dan klien
- ✅ Manajemen pricing dan paket layanan
- ✅ Email notifications
- ✅ File upload (Portfolio, dokumen)

### Database
- ✅ MongoDB untuk data persistence
- ✅ Skema terstruktur untuk semua entitas
- ✅ Relationship management

---

## 🛠️ Tech Stack

### Backend
- **Runtime**: Node.js 18+
- **Framework**: Express.js
- **Database**: MongoDB 6.0
- **Authentication**: JWT (jsonwebtoken)
- **Email**: Nodemailer
- **File Upload**: Multer
- **Security**: bcryptjs, CORS

### Frontend
- **HTML5** - Markup
- **CSS3** - Styling & Responsive
- **JavaScript (ES6+)** - Interactivity
- **Responsive Design** - Mobile-first

### DevOps
- **Server**: Ubuntu 22.04 LTS
- **Process Manager**: PM2
- **Web Server**: Nginx
- **SSL**: Let's Encrypt (Certbot)
- **Version Control**: Git

---

## 📁 Struktur Proyek

```
exodindo-project/
├── backend/
│   ├── models/               # Mongoose schemas
│   │   ├── User.js
│   │   ├── Project.js
│   │   ├── Client.js
│   │   ├── Partner.js
│   │   ├── Pricing.js
│   │   └── Equipment.js
│   ├── routes/               # API endpoints
│   │   ├── auth.js
│   │   ├── users.js
│   │   ├── projects.js
│   │   ├── clients.js
│   │   └── pricing.js
│   ├── middleware/           # Custom middleware
│   │   ├── auth.js
│   │   ├── errorHandler.js
│   │   └── validation.js
│   ├── controllers/          # Business logic
│   │   ├── authController.js
│   │   ├── userController.js
│   │   └── projectController.js
│   ├── server.js             # Entry point
│   ├── package.json
│   ├── .env.example
│   └── uploads/              # User uploaded files
│
├── frontend/
│   ├── index.html            # Landing page
│   ├── css/
│   │   ├── style.css
│   │   └── responsive.css
│   ├── js/
│   │   ├── main.js
│   │   ├── api.js
│   │   └── utils.js
│   └── assets/               # Images, icons
│
├── docs/
│   ├── DEPLOYMENT_GUIDE.md
│   ├── API_DOCUMENTATION.md
│   ├── DATABASE_SCHEMA.md
│   ├── GITHUB_SETUP.md
│   └── USER_MANUAL.md
│
├── .gitignore
├── LICENSE
├── README.md
├── docker-compose.yml
└── Makefile
```

---

## ⚡ Quick Start

### Development Environment

```bash
# Clone repository
git clone https://github.com/coldblue-indonesia/exodindo-project.git
cd exodindo-project

# Backend setup
cd backend
npm install
cp .env.example .env
nano .env              # Edit dengan konfigurasi lokal
npm run dev            # Start development server

# Frontend
cd ../frontend
# Buka index.html di browser atau gunakan live server
```

### Production Deployment

```bash
# Lihat docs/DEPLOYMENT_GUIDE.md untuk instruksi lengkap
cd /var/www
git clone https://github.com/coldblue-indonesia/exodindo-project.git exodindo
cd exodindo/backend
npm install
cp .env.example .env
# Edit .env dengan production settings
pm2 start server.js --name exodindo-backend
pm2 save
```

---

## 📚 Dokumentasi

- **[DEPLOYMENT_GUIDE.md](docs/DEPLOYMENT_GUIDE.md)** - Panduan deployment ke production
- **[API_DOCUMENTATION.md](docs/API_DOCUMENTATION.md)** - Dokumentasi lengkap API endpoints
- **[DATABASE_SCHEMA.md](docs/DATABASE_SCHEMA.md)** - Struktur database dan relationships
- **[GITHUB_SETUP.md](docs/GITHUB_SETUP.md)** - Setup Git dan GitHub untuk development
- **[USER_MANUAL.md](docs/USER_MANUAL.md)** - Panduan pengguna

---

## 🔧 Environment Variables

Lihat `backend/.env.example` untuk daftar lengkap. Contoh:

```env
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/exodindoo
JWT_SECRET=your_secret_key_here
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

---

## 🧪 Testing & Quality

```bash
# Run backend
cd backend
npm run dev

# Check logs
pm2 logs exodindo-backend

# Monitor system
pm2 monit
```

---

## 📞 API Endpoints Overview

| Method | Endpoint | Deskripsi |
|--------|----------|-----------|
| POST | `/api/auth/register` | Register user baru |
| POST | `/api/auth/login` | Login user |
| POST | `/api/auth/logout` | Logout user |
| GET | `/api/users` | List semua user (Admin only) |
| GET | `/api/projects` | List semua project |
| POST | `/api/projects` | Create project baru |
| GET | `/api/pricing` | List pricing packages |
| POST | `/api/contact` | Submit contact form |

Lihat [API_DOCUMENTATION.md](docs/API_DOCUMENTATION.md) untuk dokumentasi lengkap.

---

## 🔒 Security

- ✅ Password hashing dengan bcryptjs
- ✅ JWT authentication
- ✅ CORS protection
- ✅ Input validation
- ✅ SQL injection prevention
- ✅ HTTPS/SSL di production
- ✅ Environment variables untuk secrets

---

## 📦 Dependencies

### Backend
```json
{
  "express": "^4.18.2",
  "mongoose": "^7.6.0",
  "bcryptjs": "^2.4.3",
  "jsonwebtoken": "^9.0.2",
  "multer": "^1.4.5-lts.1",
  "cors": "^2.8.5",
  "nodemailer": "^6.9.5",
  "dotenv": "^16.3.1"
}
```

---

## 🤝 Kontribusi

Kontribusi sangat diterima! Silakan:

1. Fork repository ini
2. Buat branch fitur (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

---

## 📄 Lisensi

Project ini dilisensikan di bawah MIT License - lihat file [LICENSE](LICENSE) untuk detail.

---

## 👥 Tim

**PT Exod Creative Indonesia**
- 🌐 Website: https://exodindo.com
- 📧 Email: info@exodindo.com
- 📞 WhatsApp: +62 XXX XXXX XXXX
- 📍 Lokasi: Indonesia

---

## 📝 Changelog

### v1.0.0 (2026-07-01)
- 🎉 Initial release
- ✅ Backend API setup
- ✅ Frontend landing page
- ✅ Database schema
- ✅ Deployment guide
- ✅ Documentation

---

## ❓ FAQ

**Q: Bagaimana cara setup database?**
A: MongoDB akan otomatis terkoneksi via MONGODB_URI di .env. Pastikan MongoDB service sudah running.

**Q: Bagaimana cara deploy ke production?**
A: Lihat [DEPLOYMENT_GUIDE.md](docs/DEPLOYMENT_GUIDE.md) untuk panduan lengkap.

**Q: Bagaimana cara reset password?**
A: Fitur reset password dapat diakses melalui login page dengan email verification.

---

## 🎯 Roadmap

- [ ] v1.1.0 - Dashboard analytics
- [ ] v1.2.0 - Mobile app (React Native)
- [ ] v1.3.0 - Payment gateway integration
- [ ] v1.4.0 - Advanced reporting
- [ ] v2.0.0 - Multi-tenant support

---

**Last Updated**: 2026-07-01
**Maintained by**: PT Exod Creative Indonesia
