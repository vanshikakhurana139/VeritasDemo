/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        veritas: {
          green: '#1B5E20',
          'green-light': '#E8F5E9',
          'green-hover': '#154a19',
          red: '#C62828',
          'red-light': '#FFEBEE',
          amber: '#F9A825',
          'amber-light': '#FFF8E1',
          blue: '#1565C0',
          'blue-light': '#E3F2FD',
          text: '#1A1A1A',
          muted: '#6B7280',
          border: '#E5E7EB',
          pageBg: '#F5F7FA',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        phone: '0 25px 60px -15px rgba(0, 0, 0, 0.22), 0 0 0 1px rgba(0, 0, 0, 0.08)',
        'phone-card': '0 2px 8px -2px rgba(0, 0, 0, 0.06), 0 1px 4px -1px rgba(0, 0, 0, 0.04)',
        'floating-sos': '0 8px 24px rgba(198, 40, 40, 0.45)',
      }
    },
  },
  plugins: [],
}
