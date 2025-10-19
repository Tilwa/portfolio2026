# Portfolio Website

A modern, responsive portfolio website built with Next.js, featuring elegant animations, smooth scrolling, and a working contact form.

## Features

- 🎨 **Modern Design**: Clean, professional design with gradient backgrounds and glass morphism effects
- 📱 **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- ⚡ **Smooth Animations**: CSS animations and transitions for enhanced user experience
- 📧 **Working Contact Form**: Functional contact form that sends emails to your specified address
- 🚀 **Fast Performance**: Built with Next.js for optimal performance and SEO
- 🎯 **Scrollable Sections**: Smooth scrolling navigation between sections

## Sections

1. **Hero Section**: Eye-catching introduction with animated text and call-to-action buttons
2. **About Section**: Personal information, skills, experience, and education with interactive tabs
3. **Projects Section**: Showcase of your work with filtering capabilities
4. **Contact Section**: Working contact form with validation and email functionality

## Technologies Used

- **Frontend**: Next.js 14, React 18, CSS3
- **Styling**: Custom CSS with animations and responsive design
- **Icons**: React Icons
- **Email**: Nodemailer for contact form functionality
- **Animations**: CSS animations and transitions

## Getting Started

### Prerequisites

- Node.js 18+ installed on your machine
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

```bash
cp env.example .env.local
```

4. Configure your email settings in `.env.local`:

```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

**Note for Gmail users:**

- Enable 2-factor authentication on your Google account
- Generate an App Password (not your regular password)
- Use the App Password in the EMAIL_PASS variable

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view your portfolio.

### Building for Production

```bash
npm run build
npm start
```

## Customization

### Personal Information

1. **Hero Section**: Update your name, title, and description in `components/Hero.js`
2. **About Section**: Modify your information, skills, and experience in `components/About.js`
3. **Projects**: Add your projects in `components/Projects.js`
4. **Contact**: Update contact information in `components/Contact.js`

### Styling

- Main styles are in `app/globals.css`
- Colors and gradients can be customized using CSS variables
- Animations can be modified or disabled in the CSS file

### Email Configuration

The contact form is configured to send emails to `shahrukhaltaf93@gmail.com`. To change this:

1. Update the `to` field in `app/api/contact/route.js`
2. Configure your email service in the same file

## Project Structure

```
portfolio/
├── app/
│   ├── api/contact/route.js    # Contact form API endpoint
│   ├── globals.css             # Global styles and animations
│   ├── layout.js               # Root layout component
│   └── page.js                 # Main page component
├── components/
│   ├── About.js                # About section component
│   ├── Contact.js              # Contact section component
│   ├── Footer.js               # Footer component
│   ├── Hero.js                 # Hero section component
│   ├── Navbar.js               # Navigation component
│   └── Projects.js             # Projects section component
├── package.json                # Dependencies and scripts
├── next.config.js              # Next.js configuration
└── README.md                   # This file
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Feel free to fork this project and customize it for your own portfolio. If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have any questions or need help setting up the portfolio, please feel free to reach out!

---

**Happy Coding! 🚀**
