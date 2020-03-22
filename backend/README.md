# Freelance BackEnd

## Seeders
Users: admin, klientas, freelancer1, freelancer2
Admin email: info@freelance.lt
Admin pasw: admin123
```bash
php artisan db:seed --class=UsersTableSeeder
```
Portfolio seeder(creates 1 portfolio for freelancer1)
```bash
php artisan db:seed --class=PortfoliosTableSeeder
```
## API
Register:
```bash
/api/register
```
Login:
```bash
/api/login
```
Refresh Token:
```bash
/api/new_token
```
---
Post Portfolio:
```bash
/api/portfolio
```
Update Portfolio:
```bash
/api/update/portfolio/:id
```
User Info:
```bash
/api/user/:id
```