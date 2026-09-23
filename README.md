# 🐾 PetCare — Landing Page Angular

![Angular](https://img.shields.io/badge/Angular-19%2B-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-4CAF50?style=for-the-badge)

> Landing page profesional para clínica veterinaria y pet shop, desarrollada en Angular aplicando **Feature-Based Architecture** con componentes independientes, tipado con interfaces y lógica separada en servicios.

## 📋 Descripción

**PetCare** es una landing page moderna que presenta los servicios de una clínica veterinaria y pet shop: consultas, vacunación, peluquería, urgencias 24/7 y delivery de productos para mascotas.

## 🎯 Criterios Cumplidos

| # | Criterio | Implementación |
|---|----------|----------------|
| 1 | ¿Qué es el proyecto? | Portal veterinario con servicios 24/7 y pet shop |
| 2 | Problema que resuelve | Falta de veterinarias de confianza con atención 24/7 |
| 3 | Público objetivo | Dueños responsables de perros y gatos |
| 4 | Propuesta de valor | Servicios veterinarios + delivery + seguimiento digital |
| 5 | Beneficios clave | 6 beneficios diferenciados |
| 6 | Llamada a la acción | "Agendar Cita" y "WhatsApp" |

## 🏗️ Arquitectura

```
features/
└── landing/
    ├── components/      → Partes visuales modulares
    ├── pages/           → Pantallas completas
    ├── services/        → Lógica de negocio
    ├── interfaces/      → Tipos y contratos
    └── landing.routes.ts → Navegación
```

## 🧩 Componentes

- NavbarComponent
- HeroComponent
- ServiciosComponent
- BeneficiosComponent
- NosotrosComponent
- GaleriaComponent
- ContactoComponent
- FooterComponent

## 🛠️ Tecnologías

- Angular standalone components
- TypeScript 5.x
- Angular Router con lazy loading
- CSS puro con BEM

## 🚀 Instalación

```bash
git clone https://github.com/TU_USUARIO/petcare-landing.git
cd petcare-landing
npm install
ng serve
```

Abrir: http://localhost:4200

## 🎨 Paleta de colores

| Color | Hex |
|-------|-----|
| Cyan | `#00bcd4` |
| Verde | `#00897b` |
| Naranja | `#ff9800` |
| Gris oscuro | `#1a2e35` |

## 📄 Licencia
