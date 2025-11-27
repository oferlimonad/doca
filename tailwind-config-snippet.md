# Tailwind Configuration Snippet

## Recommended Tailwind Config for Medical SaaS Design

Add this configuration to your `tailwind.config.js` file (or update the inline config in `index.html`):

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                // Medical Primary Colors
                'accent-primary': '#0EA5E9',        // Sky-500 - Professional medical blue
                'accent-primary-hover': '#0284C7',  // Sky-600 - Darker for hover
                'accent-secondary': '#14B8A6',      // Teal-500 - Calm green accent
                'accent-secondary-hover': '#0D9488', // Teal-600
                
                // Semantic Colors
                'success': '#10B981',                // Emerald-500
                'warning': '#F59E0B',                // Amber-500
                'error': '#EF4444',                  // Red-500
            },
            fontFamily: {
                'sans': [
                    'Inter',
                    'IBM Plex Sans Hebrew',
                    '-apple-system',
                    'BlinkMacSystemFont',
                    'Segoe UI',
                    'sans-serif'
                ],
            },
            lineHeight: {
                'loose': '1.75',  // Increased for Hebrew diacritics
            },
            borderRadius: {
                'sm': '0.5rem',   // 8px
                'md': '0.75rem',  // 12px
                'lg': '1rem',     // 16px
                'xl': '1.25rem',  // 20px
                '2xl': '1.5rem',  // 24px
            },
            boxShadow: {
                'sm': '0 1px 2px 0 rgba(15, 23, 42, 0.05)',
                'md': '0 4px 6px -1px rgba(15, 23, 42, 0.1), 0 2px 4px -2px rgba(15, 23, 42, 0.05)',
                'lg': '0 10px 15px -3px rgba(15, 23, 42, 0.1), 0 4px 6px -4px rgba(15, 23, 42, 0.05)',
                'xl': '0 20px 25px -5px rgba(15, 23, 42, 0.1), 0 8px 10px -6px rgba(15, 23, 42, 0.05)',
            },
            backdropBlur: {
                'xs': '2px',
            },
        }
    }
}
```

## CSS Variables (Already in styles.css)

The design system uses CSS variables defined in `styles.css` for consistency:

- `--primary`: #0EA5E9 (Sky-500)
- `--primary-hover`: #0284C7 (Sky-600)
- `--bg-primary`: #FFFFFF (Pure white)
- `--bg-secondary`: #F8FAFC (Slate-50)
- `--text-primary`: #0F172A (Slate-900)
- `--text-secondary`: #475569 (Slate-600)
- `--border-primary`: #E2E8F0 (Slate-200)

## Usage Notes

1. **RTL Support**: The config maintains RTL (right-to-left) support for Hebrew text
2. **Line Height**: Increased to 1.75 for better Hebrew diacritic readability
3. **Colors**: Medical blue/teal palette for trust and professionalism
4. **Shadows**: Soft, layered shadows for depth without heaviness
5. **Border Radius**: Modern, refined rounded corners (8px-24px range)

