# Vanguard Global Legal Group - Website

A professional, modern website for Vanguard Global Legal Group, an international law firm with offices across four continents.

## Features

- **Multi-language Support**: Website available in English and German with seamless language switching
- **Professional Design**: Modern, clean design with professional color scheme
- **Responsive Layout**: Fully responsive design that works on desktop, tablet, and mobile devices
- **Global Presence**: 9 office locations across major financial centers worldwide

## Office Locations

1. **Frankfurt, Germany** - Banking & Finance, M&A, Compliance
2. **Munich, Germany** - Criminal Law (Fachanwalt für Strafrecht), Corporate Law, Tax Law
3. **Istanbul, Turkey** - International Law, Real Estate, Corporate Law
4. **Paris, France** - Intellectual Property, Commercial Litigation, Labor Law
5. **London, UK** - Banking & Finance, Commercial Litigation, Tax Law
6. **Hong Kong, China** - M&A, International Law, Intellectual Property
7. **New York, USA** - Corporate Law, Real Estate, Compliance
8. **Bogotá, Colombia** - Labor Law, Family Law, Criminal Law
9. **Moscow, Russia** - Banking & Finance, Commercial Litigation, Tax Law

## Technical Stack

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS variables
- **JavaScript**: Language switching functionality with localStorage
- **Images**: Professional lawyer photos from randomuser.me API

## How to Use

1. Open `index.html` in your web browser to view the homepage
2. Click on any location card to view the team at that office
3. Use the EN/DE language switcher buttons in the header to switch between English and German
4. The selected language is saved in localStorage for future visits

## File Structure

```
claudylawpage/
├── index.html              # Homepage
├── css/
│   └── styles.css         # Main stylesheet
├── js/
│   └── main.js            # Language switching logic
├── locations/             # Location-specific pages
│   ├── frankfurt.html
│   ├── munich.html
│   ├── istanbul.html
│   ├── paris.html
│   ├── london.html
│   ├── hongkong.html
│   ├── newyork.html
│   ├── bogota.html
│   └── moscow.html
└── README.md             # This file
```

## Language Support

The website supports two languages:
- **English (EN)**: Default language
- **German (DE)**: Full translation including navigation, content, and legal specializations

All text content is managed through the `translations` object in `main.js`, making it easy to add or modify translations.

## Customization

### Adding New Locations

1. Create a new HTML file in the `locations/` folder
2. Copy the structure from an existing location page
3. Update the location name, lawyer names, and specializations
4. Add the location to the homepage grid in `index.html`
5. Add translations in `js/main.js`

### Changing Colors

The color scheme is defined using CSS variables in `css/styles.css`:
- `--primary-color`: Main brand color (dark blue)
- `--secondary-color`: Accent color (gold)
- `--accent-color`: Secondary accent (medium blue)

### Updating Lawyer Photos

The website currently uses photos from randomuser.me API. To use custom photos:
1. Place images in an `images/` folder
2. Update the `src` attribute in the lawyer card `<img>` tags

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

© 2024 Vanguard Global Legal Group. All rights reserved.
