# EmailJS Setup Instructions

## 1. Install EmailJS Package

Run the following command in your terminal:

```bash
npm install @emailjs/browser
```

## 2. EmailJS Configuration

The contact form is configured to use:

- **Admin Template ID**: `template_euiv8zx`
- **User Template ID**: `template_qdtejvn`
- **Google Sheets Web App**: `https://script.google.com/macros/s/AKfycbwlQlBLKwn4Mocosk69LrPXMjoAQ6X6eUGiNfYmQI3OJeaIy4R6zGVdOjCbhbF5k643/exec`

## 3. Update EmailJS Credentials

In `app/components/ContactForm.tsx`, replace the following placeholders:

- Line 92: Replace `'service_vantara'` with your actual EmailJS Service ID
- Line 102: Replace `'YOUR_PUBLIC_KEY'` with your EmailJS Public Key
- Line 107: Replace `'service_vantara'` with your actual EmailJS Service ID  
- Line 114: Replace `'YOUR_PUBLIC_KEY'` with your EmailJS Public Key

## 4. EmailJS Template Variables

### Admin Template (template_euiv8zx)
Should include these variables:
- `{{from_name}}`
- `{{from_email}}`
- `{{mobile}}`
- `{{service}}`
- `{{country}}`
- `{{message}}`

### User Template (template_qdtejvn)
Should include these variables:
- `{{to_name}}`
- `{{to_email}}`
- `{{service}}`

## 5. Google Sheets Setup

The form data is automatically sent to the Google Sheets Web App URL provided.
Ensure your Google Apps Script is set up to receive the following fields:
- name
- email
- mobile
- service
- country
- message
- timestamp
