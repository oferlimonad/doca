// --- Custom Smooth Scroll Function with Extended Duration and Soft Easing ---
function smoothScrollToElement(targetElement, duration = 1800, offset = 30) {
    if (!targetElement) return;
    
    const startPosition = window.pageYOffset || document.documentElement.scrollTop;
    const elementPosition = targetElement.getBoundingClientRect().top + startPosition;
    // Adjust target position to be offset pixels higher (30px by default)
    const targetPosition = elementPosition - offset;
    const distance = targetPosition - startPosition;
    let startTime = null;
    
    // Softer, gentler easing function: ease-in-out-quart for ultra-smooth animation
    function easeInOutQuart(t) {
        return t < 0.5
            ? 8 * t * t * t * t
            : 1 - Math.pow(-2 * t + 2, 4) / 2;
    }
    
    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        
        // Apply softer easing function
        const ease = easeInOutQuart(progress);
        const currentPosition = startPosition + (distance * ease);
        
        // RTL-compatible: vertical scrolling works the same in both directions
        window.scrollTo(0, currentPosition);
        
        if (progress < 1) {
            requestAnimationFrame(animation);
        }
    }
    
    requestAnimationFrame(animation);
}

// --- SVG Icons - Minimalist 2D Vector Icons ---
const getIcon = (iconName, className = 'w-6 h-6') => {
    const icons = {
        'stethoscope': `<svg class="${className}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 4C8 2.89543 8.89543 2 10 2H14C15.1046 2 16 2.89543 16 4V6H18C19.1046 6 20 6.89543 20 8V12C20 13.1046 19.1046 14 18 14H16V20C16 21.1046 15.1046 22 14 22H10C8.89543 22 8 21.1046 8 20V14H6C4.89543 14 4 13.1046 4 12V8C4 6.89543 4.89543 6 6 6H8V4Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 6V2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>`,
        'rocket': `<svg class="${className}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 16.5C4.5 13.4624 6.46243 11.5 9.5 11.5H14.5C17.5376 11.5 19.5 13.4624 19.5 16.5V20.5C19.5 21.3284 18.8284 22 18 22H6C5.17157 22 4.5 21.3284 4.5 20.5V16.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9.5 11.5L12 2L14.5 11.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="12" cy="16.5" r="1.5" fill="currentColor"/>
        </svg>`,
        'lightbulb': `<svg class="${className}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 21H15M12 3C8.68629 3 6 5.68629 6 9C6 11.5 7.5 13.5 9 15V17H15V15C16.5 13.5 18 11.5 18 9C18 5.68629 15.3137 3 12 3Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,
        'edit': `<svg class="${className}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 4H4C3.44772 4 3 4.44772 3 5V20C3 20.5523 3.44772 21 4 21H19C19.5523 21 20 20.5523 20 20V13M18.5 2.5C19.3284 1.67157 20.6716 1.67157 21.5 2.5C22.3284 3.32843 22.3284 4.67157 21.5 5.5L12 15L8 16L9 12L18.5 2.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,
        'trash': `<svg class="${className}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 6H5H21M8 6V4C8 3.44772 8.44772 3 9 3H15C15.5523 3 16 3.44772 16 4V6M19 6V20C19 20.5523 18.5523 21 18 21H6C5.44772 21 5 20.5523 5 20V6H19Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10 11V17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M14 11V17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>`,
        'plus': `<svg class="${className}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M5 12H19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>`,
        'clipboard': `<svg class="${className}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15M9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,
        'warning': `<svg class="${className}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 9V13M12 17H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,
        'check': `<svg class="${className}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,
        'error': `<svg class="${className}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>`,
        'folder': `<svg class="${className}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 7C3 5.89543 3.89543 5 5 5H9.58579C9.851 5 10.1054 5.10536 10.2929 5.29289L12.7071 7.70711C12.8946 7.89464 13.149 8 13.4142 8H19C20.1046 8 21 8.89543 21 10V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V7Z" stroke="currentColor" stroke-width="1.5"/>
        </svg>`,
        'organize': `<svg class="${className}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 7C3 5.89543 3.89543 5 5 5H9.58579C9.851 5 10.1054 5.10536 10.2929 5.29289L12.7071 7.70711C12.8946 7.89464 13.149 8 13.4142 8H19C20.1046 8 21 8.89543 21 10V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V7Z" stroke="currentColor" stroke-width="1.5"/>
            <path d="M3 7H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>`,
        'document': `<svg class="${className}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 2H6C5.44772 2 5 2.44772 5 3V21C5 21.5523 5.44772 22 6 22H18C18.5523 22 19 21.5523 19 21V8L14 2Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14 2V8H19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9 13H15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M9 17H15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>`,
        'eye': `<svg class="${className}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="currentColor" stroke-width="1.5"/>
            <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.5"/>
        </svg>`,
        'eyes': `<svg class="${className}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 12C1 12 4 6 9 6C14 6 17 12 17 12C17 12 14 18 9 18C4 18 1 12 1 12Z" stroke="currentColor" stroke-width="1.5"/>
            <circle cx="9" cy="12" r="2" stroke="currentColor" stroke-width="1.5"/>
        </svg>`,
        'settings': `<svg class="${className}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.5"/>
            <path d="M12 1V3M12 21V23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M1 12H3M21 12H23M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>`,
        'cloud': `<svg class="${className}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 10H17C15.8954 10 15 10.8954 15 12C15 13.1046 15.8954 14 17 14H18C19.6569 14 21 15.3431 21 17C21 18.6569 19.6569 20 18 20H7C4.79086 20 3 18.2091 3 16C3 13.7909 4.79086 12 7 12C7.31306 12 7.61798 12.0357 7.91014 12.1026C8.57052 9.61908 10.8596 8 13.5 8C16.5376 8 19 10.4624 19 13.5C19 13.6712 18.987 13.8384 18.9616 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,
        'key': `<svg class="${className}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="8" cy="15" r="6" stroke="currentColor" stroke-width="1.5"/>
            <path d="M13 10L17 6L21 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M17 6V12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>`,
        'circle-blue': `<svg class="${className}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="8" fill="currentColor"/>
        </svg>`,
        'circle-green': `<svg class="${className}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="8" fill="currentColor"/>
        </svg>`,
        'circle-yellow': `<svg class="${className}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="8" fill="currentColor"/>
        </svg>`,
        'arrow-up': `<svg class="${className}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 19V5M5 12L12 5L19 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,
        'arrow-down': `<svg class="${className}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M5 12L12 19L19 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,
        'drag-handle': `<svg class="${className}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="9" cy="5" r="1.5" fill="currentColor"/>
            <circle cx="9" cy="12" r="1.5" fill="currentColor"/>
            <circle cx="9" cy="19" r="1.5" fill="currentColor"/>
            <circle cx="15" cy="5" r="1.5" fill="currentColor"/>
            <circle cx="15" cy="12" r="1.5" fill="currentColor"/>
            <circle cx="15" cy="19" r="1.5" fill="currentColor"/>
        </svg>`,
        'chevron-down': `<svg class="${className}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,
        'chevron-up': `<svg class="${className}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 15L12 9L6 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,
        'plus': `<svg class="${className}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M5 12H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,
        'minus': `<svg class="${className}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,
        'template': `<svg class="${className}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 2H6C5.44772 2 5 2.44772 5 3V21C5 21.5523 5.44772 22 6 22H18C18.5523 22 19 21.5523 19 21V8L14 2Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14 2V8H19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8 10H16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M8 14H16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M8 18H14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>`,
        'medical-document': `<svg class="${className}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 2H6C5.44772 2 5 2.44772 5 3V21C5 21.5523 5.44772 22 6 22H18C18.5523 22 19 21.5523 19 21V8L14 2Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14 2V8H19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8 11H16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M8 15H12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            <rect x="15" y="14" width="2.5" height="2.5" rx="0.5" stroke="currentColor" stroke-width="1.5" fill="none"/>
            <path d="M8 19H16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>`,
        'file-text': `<svg class="${className}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 2H6C5.44772 2 5 2.44772 5 3V21C5 21.5523 5.44772 22 6 22H18C18.5523 22 19 21.5523 19 21V8L14 2Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14 2V8H19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7.5 9.5H16.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M7.5 12H16.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M7.5 14.5H16.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>`
    };
    return icons[iconName] || '';
};

// --- ספריית תבניות מוגדרות מראש ---
const predefinedTemplates = [
    {
        id: 'predefined_week_day',
        name: 'תאריך שבוע + יום',
        description: 'בשבוע [יום] + [שבוע] להריונה.',
        elements: [
            { type: 'text', value: 'בשבוע ' },
            { type: 'input', width: 2, placeholder: 'יום' },
            { type: 'text', value: ' + ' },
            { type: 'input', width: 2, placeholder: 'שבוע' },
            { type: 'text', value: ' להריונה.' }
        ]
    },
    {
        id: 'predefined_gpacs_pregnancy',
        name: 'GPACS בהריון',
        description: '[CS] [A] [P] [G] – נוסחת GPACS בהריון',
        elements: [
            { type: 'text', value: 'CS' },
            { type: 'input', width: 2, placeholder: 'CS' },
            { type: 'text', value: 'A' },
            { type: 'input', width: 2, placeholder: 'A' },
            { type: 'text', value: 'P' },
            { type: 'input', width: 2, placeholder: 'P' },
            { type: 'text', value: 'G' },
            { type: 'input', width: 2, placeholder: 'G' }
        ]
    }
    // ניתן להוסיף כאן תבניות נוספות בעתיד
];

// --- מבנה נתונים חדש עם Dynamic Elements ---
// Data will be loaded from Supabase on initialization
let templatesData = {};

const appContainer = document.getElementById('appContainer');
const headerContainer = document.getElementById('headerContainer');
const mainTitle = document.getElementById('mainTitle');
const breadcrumb = document.getElementById('breadcrumb');
const pageTitle = document.getElementById('pageTitle');
const crudModal = document.getElementById('crudModal');
const modalTitle = document.getElementById('modalTitle');
const modalContent = document.getElementById('modalContent');
const modalFooter = document.getElementById('modalFooter');
const mainNavigation = document.getElementById('mainNavigation');

let messageDisplay; // הגדרה גלובלית להודעות סטטוס

// משתנה גלובלי לניהול האלמנטים הנערכים בתוך המודל
let currentSessionElements = [];

// Cache for template structure lookups (performance optimization)
const templateStructureCache = new Map();

// Debounce timer for preview updates
let previewUpdateTimer = null;
const PREVIEW_DEBOUNCE_MS = 50; // 50ms debounce for smooth typing 

// --- פונקציות עזר כלליות ---

/**
 * עדכון מצב הניווט הפעיל
 */
function updateNavigationState(activePage) {
    if (!mainNavigation) return;
    
    const navLinks = mainNavigation.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    const activeLink = mainNavigation.querySelector(`#nav-${activePage}`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
    
    // Also update mobile navigation
    updateMobileNavigationState(activePage);
}

/**
 * יצירת מפתח ייחודי.
 */
function generateUniqueKey(prefix = 'item') {
    return `${prefix}_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`;
}

/**
 * Escape helpers to prevent HTML injection when rendering user-provided text.
 */
function escapeHtml(str = '') {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function escapeAttr(str = '') {
    return escapeHtml(str);
}

/**
 * הצגת הודעת סטטוס (הצלחה/כישלון)
 */
function showMessage(msg, type) {
    if (!messageDisplay) {
        // נסה למצוא את המיכל רק אם הוא לא מוגדר
        messageDisplay = document.getElementById('message');
    }
    if (!messageDisplay) return; 

    let baseClasses = 'copy-message text-center p-3.5 rounded-xl font-medium shadow-sm';
    if (type === 'success') {
        baseClasses += ' bg-white text-[#1A1A7C] border border-[#1A1A7C]';
    } else if (type === 'warning') {
        baseClasses += ' bg-white text-amber-500 border border-amber-500';
    } else if (type === 'error') {
        baseClasses += ' bg-white text-red-500 border border-red-500';
    }

    messageDisplay.className = baseClasses + ' show';
    messageDisplay.innerHTML = msg;
    
    setTimeout(() => {
        if (messageDisplay) messageDisplay.className = baseClasses.replace(' show', '');
    }, 4000);
}

/**
 * פתיחת קופץ (Modal) גנרי.
 */
function openModal(title, contentHtml, onAction, actionText = 'שמור', actionClass = 'bg-[#1A1A7C] hover:bg-[#15156C]') {
    modalTitle.textContent = title;
    modalContent.innerHTML = contentHtml;
    crudModal.classList.remove('hidden');
    crudModal.classList.add('flex');

    // יצירת כפתור הפעולה (שמירה או אישור)
    const actionButton = document.createElement('button');
    actionButton.textContent = actionText;
    actionButton.className = `py-2.5 px-5 sm:py-2.5 sm:px-6 rounded-lg text-white font-semibold transition-all duration-150 text-sm sm:text-base shadow-sm active:scale-95 ${actionClass}`;
    actionButton.onclick = () => {
        onAction();
        closeModal();
    };
    
    // ניקוי והוספת כפתורי Footer
    modalFooter.innerHTML = '';
    
    // כפתור ביטול קבוע
    const cancelButton = document.createElement('button');
    cancelButton.textContent = 'ביטול';
    cancelButton.onclick = closeModal;
    cancelButton.className = 'py-2.5 px-5 sm:py-2.5 sm:px-6 border border-slate-300 rounded-lg text-slate-800 hover:bg-slate-50 hover:border-slate-400 transition-all duration-150 text-sm sm:text-base font-medium active:scale-95';

    // הוספת כפתורים בסדר הנכון (ביטול מימין, פעולה משמאל)
    modalFooter.appendChild(cancelButton);
    modalFooter.appendChild(actionButton);
}

/**
 * סגירת קופץ (Modal).
 */
function closeModal() {
    crudModal.classList.remove('flex');
    crudModal.classList.add('hidden');
}

/**
 * הצגת קופץ לאישור מחיקה.
 */
function confirmAction(message, onConfirm) {
    const safeMessage = escapeHtml(message);
    openModal(
        'אישור מחיקה',
        `<p class="text-sm sm:text-base lg:text-lg text-slate-800">${safeMessage}</p>`,
        onConfirm,
        'מחק',
        'bg-red-500 hover:bg-red-600'
    );
}

// --- Mobile Menu Functions ---
window.toggleMobileMenu = function() {
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
    const hamburgerIcon = document.getElementById('hamburgerIcon');
    const closeIcon = document.getElementById('closeIcon');
    
    if (!mobileMenu || !mobileMenuOverlay) return;
    
    const isOpen = mobileMenu.classList.contains('translate-x-0');
    
    if (isOpen) {
        // Close menu
        mobileMenu.classList.remove('translate-x-0');
        mobileMenu.classList.add('translate-x-full');
        mobileMenuOverlay.classList.remove('opacity-100', 'pointer-events-auto');
        mobileMenuOverlay.classList.add('opacity-0', 'pointer-events-none');
        hamburgerIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
        document.body.style.overflow = '';
    } else {
        // Open menu
        mobileMenu.classList.remove('translate-x-full');
        mobileMenu.classList.add('translate-x-0');
        mobileMenuOverlay.classList.remove('opacity-0', 'pointer-events-none');
        mobileMenuOverlay.classList.add('opacity-100', 'pointer-events-auto');
        hamburgerIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

// Update mobile navigation state
function updateMobileNavigationState(activePage) {
    const mobileNavHome = document.getElementById('mobile-nav-home');
    const mobileNavCategories = document.getElementById('mobile-nav-categories');
    
    if (mobileNavHome) mobileNavHome.classList.remove('active');
    if (mobileNavCategories) mobileNavCategories.classList.remove('active');
    
    if (activePage === 'home' && mobileNavHome) {
        mobileNavHome.classList.add('active');
    } else if (activePage === 'categories' && mobileNavCategories) {
        mobileNavCategories.classList.add('active');
    }
}

// --- פונקציות ניווט כלליות ---

// ניווט לדף הבית (root)
function navigateToHome() {
    window.location.hash = '';
}

// ניווט לדף הקטגוריות
function navigateToCategories() {
    window.location.hash = 'categories';
}

function navigateToSubcategories(categoryKey) {
    window.location.hash = `#category=${categoryKey}`;
}

function navigateToTemplateEditor(categoryKey, subKey) {
    window.location.hash = `#category=${categoryKey}&sub=${subKey}`;
}

// --- פונקציות יצירת תוכן (Renderer) ---

/**
 * בונה את רכיב נתיב הניווט (Breadcrumb).
 * היררכיה: בית → קטגוריות → קטגוריה → תת-קטגוריה
 */
function renderBreadcrumb(currentCategory = null, currentSubcategory = null) {
    // אם אין קטגוריה, לא מציגים breadcrumbs (דף הבית או דף הקטגוריות הראשי)
    if (!currentCategory) {
        breadcrumb.innerHTML = '';
        return;
    }

    const safeCategory = escapeHtml(currentCategory);
    const safeSubcategory = currentSubcategory ? escapeHtml(currentSubcategory) : null;
    const categoryKey = Object.keys(templatesData).find(key => templatesData[key].name === currentCategory);
    
    if (!categoryKey) {
        breadcrumb.innerHTML = '';
        return;
    }

    let html = `
        <a href="#" onclick="navigateToHome(); return false;" class="hover:text-[#1A1A7C] transition-colors duration-150 text-slate-600">בית</a>
                        <span class="mx-2 text-slate-500">/</span>
        <a href="#" onclick="navigateToCategories(); return false;" class="hover:text-[#1A1A7C] transition-colors duration-150 text-slate-600">קטגוריות</a>
    `;

    // אם יש קטגוריה, מוסיפים אותה
    html += `
                        <span class="mx-2 text-slate-500">/</span>
        <a href="#" onclick="navigateToSubcategories('${categoryKey}'); return false;" class="hover:text-[#1A1A7C] transition-colors duration-150 text-slate-600">${safeCategory}</a>
    `;

    // אם יש תת-קטגוריה, מוסיפים אותה (הדף הנוכחי - לא קישור)
    if (currentSubcategory) {
        html += `
                        <span class="mx-2 text-slate-400">/</span>
            <span class="text-[#1A1A7C] font-semibold">${safeSubcategory}</span>
        `;
    } else {
        // אם אין תת-קטגוריה, הקטגוריה היא הדף הנוכחי
        html = html.replace(
            `<a href="#" onclick="navigateToSubcategories('${categoryKey}'); return false;" class="hover:text-[#1A1A7C] transition-colors duration-150 text-slate-500">${safeCategory}</a>`,
            `<span class="text-[#1A1A7C] font-semibold">${safeCategory}</span>`
        );
    }
    
    breadcrumb.innerHTML = html;
}

/**
 * פונקציית עזר: יצירת HTML עבור אלמנט דינמי יחיד בתצוגת העורך.
 * @param {Object} element - האלמנט לרנדור
 * @param {string} tempId - מזהה התבנית
 * @param {number} elementIndex - אינדקס האלמנט
 * @param {boolean} isGPACS - האם זה תבנית GPACS (דורשת LTR לכל אלמנט)
 */
function createElementHtml(element, tempId, elementIndex, isGPACS = false) {
    const uniqueElementId = `${tempId}_el_${elementIndex}`;
    // For GPACS templates, wrap each element in dir="ltr" to preserve order
    const ltrWrapper = isGPACS ? '<span dir="ltr" style="display: inline-block;">' : '';
    const ltrWrapperClose = isGPACS ? '</span>' : '';
    
    switch (element.type) {
        case 'text':
            // טקסט קבוע - מוצג כספאן רגיל
            // הסר רווחים מיותרים מהתחלה וסוף כדי למנוע רווחים כפולים (הרווחים יתווספו ב-join)
            const trimmedText = (element.value || '').trim();
            return `${ltrWrapper}<span class="whitespace-pre-wrap">${escapeHtml(trimmedText)}</span>${ltrWrapperClose}`;
        case 'input':
            // שדה קלט - מוצג כ-input עם רוחב מותאם
            // הרוחב מחושב כדי להיות יחסי למספר התווים + מרווח
            // הסר mx-1 כי הרווחים יתווספו ב-join
            // הסר inline oninput - נשתמש ב-event delegation עם debouncing
            const widthChars = element.width || 8;
            const safePlaceholder = escapeAttr(element.placeholder || '');
            const safeValue = escapeAttr(element.value || '');
            const dirAttr = isGPACS ? ' dir="ltr"' : '';
            return `${ltrWrapper}<input type="text" id="${uniqueElementId}" 
                        data-temp-id="${tempId}" data-index="${elementIndex}" data-type="input"
                        class="dynamic-element text-center template-input" 
                        style="width: ${widthChars * 0.75 + 1.5}rem; min-width: 50px;" 
                        placeholder="${safePlaceholder}" 
                        value="${safeValue}"${dirAttr} />${ltrWrapperClose}`;
        case 'select':
            // רשימה נפתחת - מוצגת כ-select
            // הסר mx-1 כי הרווחים יתווספו ב-join
            // הסר inline onchange - נשתמש ב-event delegation
            const optionsHtml = (element.options || []).map(opt => 
                `<option value="${escapeAttr(opt)}" ${element.value === opt ? 'selected' : ''}>${escapeHtml(opt)}</option>`
            ).join('');
            const selectDirAttr = isGPACS ? ' dir="ltr"' : '';
            return `${ltrWrapper}<select id="${uniqueElementId}" 
                        data-temp-id="${tempId}" data-index="${elementIndex}" data-type="select"
                        class="dynamic-element template-select"${selectDirAttr}>
                        ${optionsHtml}
                    </select>${ltrWrapperClose}`;
        default:
            return '';
    }
}

/**
 * פונקציית עזר ליצירת HTML עבור קבוצת תבניות אחת
 */
function generateTemplateGroupHtml(group, categoryKey, subKey, groupIndex) {
    const safeGroupTitle = escapeAttr(group.title);
    const templatesHtml = group.templates.map((temp, tempIndex) => {
        // Check if this is GPACS template - needs special RTL rendering order
        // GPACS formula must display in RTL as: CS [input] "CS", A [input] "A", P [input] "P", G [input] "G"
        // From right to left (RTL): CS [input] "CS" (rightmost) → A [input] "A" → P [input] "P" → G [input] "G" (leftmost)
        // Template definition: [CS text, CS input, A text, A input, P text, P input, G text, G input]
        // In RTL, array order [text, input] displays visually as [input, text] (right to left)
        // So [CS text, CS input] displays as CS input, CS text visually (rightmost) ✓
        // This gives us the correct order: CS [input] "CS", A [input] "A", P [input] "P", G [input] "G"
        // No reversal needed - the template is already in the correct order for RTL display
        // Detect GPACS by checking for the pattern: text 'CS' followed by input with placeholder 'CS', etc.
        const isGPACS = temp.elements && temp.elements.length >= 8 &&
            temp.elements[0].type === 'text' && temp.elements[0].value === 'CS' &&
            temp.elements[1].type === 'input' && temp.elements[1].placeholder === 'CS' &&
            temp.elements[2].type === 'text' && temp.elements[2].value === 'A' &&
            temp.elements[3].type === 'input' && temp.elements[3].placeholder === 'A' &&
            temp.elements[4].type === 'text' && temp.elements[4].value === 'P' &&
            temp.elements[5].type === 'input' && temp.elements[5].placeholder === 'P' &&
            temp.elements[6].type === 'text' && temp.elements[6].value === 'G' &&
            temp.elements[7].type === 'input' && temp.elements[7].placeholder === 'G';
        
        // רנדור המשפט הדינמי: מחבר את כל האלמנטים לשורה אחת עם רווח יחיד בין כל אלמנט
        // For GPACS: No reversal needed - template is already in correct order for RTL
        // Template: [CS text, CS input, A text, A input, P text, P input, G text, G input]
        // In RTL, this displays from right to left as: CS input, CS text, A input, A text, P input, P text, G input, G text
        // Which gives us visually: CS [input] "CS", A [input] "A", P [input] "P", G [input] "G" ✓
        let elementsToRender = temp.elements;
        // No special handling needed - RTL will automatically reverse each pair [text, input] to [input, text] visually
        
        // Pass isGPACS flag to createElementHtml so each element gets proper LTR wrapping
        const sentenceHtml = elementsToRender.map((el, elIdx) => {
            return createElementHtml(el, temp.id, elIdx, isGPACS);
        }).join(' '); // רווח יחיד בין כל אלמנט
        
        // For GPACS, keep container RTL but individual elements are LTR-wrapped
        const directionStyle = '';

        return `
            <div class="template-item flex items-center rounded-xl transition-all duration-150 group border border-slate-200 hover:border-slate-300" 
                 data-template-id="${temp.id}"
                 data-template-index="${tempIndex}">
                <!-- Drag Handle (right edge in RTL) - flush against edge -->
                <div class="drag-handle-container flex-shrink-0 cursor-grab active:cursor-grabbing opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                    <div class="drag-handle p-0.5 sm:p-1 rounded-full hover:bg-slate-100 text-slate-500 hover:text-[#1A1A7C] opacity-80 hover:opacity-100 transition-all duration-150" 
                         title="גרור לסידור מחדש">
                        ${getIcon('drag-handle', 'w-4 h-4 sm:w-5 sm:h-5')}
                    </div>
                </div>
                <!-- Fallback Move Buttons (hidden by default, shown if drag fails) -->
                <div class="fallback-move-buttons flex flex-col gap-0.5 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-150 hidden">
                    <button class="move-up-btn p-1 rounded-full hover:bg-slate-100 text-slate-500 hover:text-[#1A1A7C] opacity-80 hover:opacity-100 transition-all duration-150" 
                            onclick="event.stopPropagation(); moveTemplateUp('${categoryKey}', '${subKey}', ${groupIndex}, ${tempIndex})" 
                            title="הזז למעלה">
                        ${getIcon('arrow-up', 'w-3 h-3')}
                    </button>
                    <button class="move-down-btn p-1 rounded-full hover:bg-slate-100 text-slate-500 hover:text-[#1A1A7C] opacity-80 hover:opacity-100 transition-all duration-150" 
                            onclick="event.stopPropagation(); moveTemplateDown('${categoryKey}', '${subKey}', ${groupIndex}, ${tempIndex})" 
                            title="הזז למטה">
                        ${getIcon('arrow-down', 'w-3 h-3')}
                    </button>
                </div>
                <!-- Checkbox and Sentence Content - aligned with group title -->
                <div class="flex items-center flex-grow template-item-content">
                    <!-- תיבת הסימון -->
                    <input type="checkbox" id="temp-${temp.id}" 
                        data-subheader="${safeGroupTitle}" 
                        class="form-checkbox h-5 w-5 text-[#1A1A7C] rounded border-slate-200 focus:ring-[#1A1A7C] flex-shrink-0">
                    
                    <!-- התווית מכילה את המשפט הדינמי -->
                    <label for="temp-${temp.id}" class="text-slate-900 text-sm sm:text-base md:text-lg lg:text-xl flex-1 cursor-pointer" style="font-size: 0.9375rem; ${directionStyle}">
                        <span class="block">${sentenceHtml}</span>
                    </label>
                </div>
                <!-- CRUD Buttons (left side in RTL) - aligned with group header buttons -->
                <!-- Order: Spacer (for Plus), Delete (aligned with Plus), Edit (aligned with Delete) -->
                <div class="flex space-x-2 space-x-reverse text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-150 flex-shrink-0">
                    <!-- Spacer to align with Plus button in group header -->
                    <div class="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0" style="width: 2rem; height: 2rem;"></div>
                    <button class="p-1.5 sm:p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-[#1A1A7C] opacity-80 hover:opacity-100 transition-all duration-150" 
                            onclick="event.stopPropagation(); handleDeleteTemplate('${categoryKey}', '${subKey}', ${groupIndex}, ${tempIndex})" 
                            title="מחיקת משפט">
                        ${getIcon('trash', 'w-4 h-4 sm:w-5 sm:h-5')}
                    </button>
                    <button class="p-1.5 sm:p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-[#1A1A7C] opacity-80 hover:opacity-100 transition-all duration-150" 
                            onclick="event.stopPropagation(); handleEditTemplate('${categoryKey}', '${subKey}', ${groupIndex}, ${tempIndex})" 
                            title="עריכת מבנה המשפט">
                        ${getIcon('edit', 'w-4 h-4 sm:w-5 sm:h-5')}
                    </button>
                </div>
            </div>
        `;
    }).join('');

    const groupContainerId = `template-group-${categoryKey}-${subKey}-${groupIndex}`;
    const groupHeaderId = `template-group-header-${categoryKey}-${subKey}-${groupIndex}`;
    const groupContentId = `template-group-content-${categoryKey}-${subKey}-${groupIndex}`;
    
    return `
        <div class="bg-white p-4 sm:p-5 lg:p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200">
            <div id="${groupHeaderId}" class="template-group-header flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0 border-b border-slate-200 cursor-pointer group-header-clickable" 
                 onclick="toggleTemplateGroup('${categoryKey}', '${subKey}', ${groupIndex})"
                 data-category-key="${categoryKey}" 
                 data-sub-key="${subKey}" 
                 data-group-index="${groupIndex}">
                <div class="flex items-center gap-2 sm:gap-3 flex-grow">
                    <div class="plus-minus-icon text-slate-500 flex-shrink-0 flex items-center justify-center" style="width: 1.25rem; height: 1.25rem;">
                        <span class="plus-icon-wrapper">${getIcon('plus', 'w-5 h-5')}</span>
                        <span class="minus-icon-wrapper" style="opacity: 0; visibility: hidden; position: absolute;">${getIcon('minus', 'w-5 h-5')}</span>
                    </div>
                    <h3 class="text-lg sm:text-xl lg:text-2xl font-semibold text-slate-700" style="font-size: 1.125rem;">
                        ${escapeHtml(group.title)}
                    </h3>
            </div>
                <div class="flex space-x-2 space-x-reverse text-sm" onclick="event.stopPropagation();">
                    <button class="p-1.5 sm:p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-[#1A1A7C] opacity-80 hover:opacity-100 transition-all duration-150 cursor-pointer" 
                            onclick="handleGroupEdit('${categoryKey}', '${subKey}', ${groupIndex})" 
                            title="עריכת שם קבוצה">
                        ${getIcon('edit', 'w-4 h-4 sm:w-5 sm:h-5')}
                    </button>
                    <button class="p-1.5 sm:p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-[#1A1A7C] opacity-80 hover:opacity-100 transition-all duration-150 cursor-pointer" 
                            onclick="handleGroupDelete('${categoryKey}', '${subKey}', ${groupIndex})" 
                            title="מחיקת קבוצה">
                        ${getIcon('trash', 'w-4 h-4 sm:w-5 sm:h-5')}
                    </button>
                    <button class="p-1.5 sm:p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-[#1A1A7C] opacity-80 hover:opacity-100 transition-all duration-150 cursor-pointer" 
                            onclick="handleAddTemplate('${categoryKey}', '${subKey}', ${groupIndex})" 
                            title="הוספת משפט חדש">
                        ${getIcon('plus', 'w-4 h-4 sm:w-5 sm:h-5')}
                    </button>
        </div>
    </div>
            <div id="${groupContentId}" class="template-group-content overflow-hidden transition-all duration-300 ease-in-out collapsed" style="max-height: 0px;">
                <div id="${groupContainerId}" class="space-y-1 mt-2" data-category-key="${categoryKey}" data-sub-key="${subKey}" data-group-index="${groupIndex}">
                    ${templatesHtml.length > 0 ? templatesHtml : `<p class="text-slate-500 text-sm p-3 flex items-center gap-2">אין משפטים בקבוצה זו. לחץ ${getIcon('plus', 'w-4 h-4 inline')} להוספה.</p>`}
                </div>
            </div>
        </div>
    `;
}

/**
 * מציג את עמוד עורך התבניות.
 */
function renderTemplateEditorPage(categoryKey, subKey) {
    const category = templatesData[categoryKey];
    const subcategory = category?.subcategories[subKey];
    
    if (!category || !subcategory) {
        // Render static structure even if data not found, then navigate
        mainTitle.textContent = "עורך תבניות";
        pageTitle.textContent = "תבניות";
        breadcrumb.innerHTML = '';
        headerContainer.classList.remove('hidden');
        updateNavigationState('categories');
        appContainer.innerHTML = `
            <div class="flex flex-col lg:grid lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 xl:gap-12 p-4 sm:p-6 lg:p-6">
                <div class="lg:col-span-2 w-full">
                    <div class="p-4 sm:p-6 lg:p-8 bg-white rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-all duration-200">
                        <p class="text-slate-500 text-center py-10">קטגוריה או תת-קטגוריה לא נמצאה. מעבר לדף הבית...</p>
            </div>
            </div>
        </div>
        `;
        setTimeout(() => navigateToHome(), 1000);
        return;
    }
    
    const safeCategoryName = escapeHtml(category.name);
    const safeSubName = escapeHtml(subcategory.name);

    mainTitle.textContent = `עורך תבניות: ${category.name} / ${subcategory.name}`;
    pageTitle.textContent = `תבניות: ${subcategory.name}`;
    breadcrumb.innerHTML = '';
    headerContainer.classList.remove('hidden');
    updateNavigationState('categories');

    // Render static content immediately (layout structure, headers, preview panel)
    appContainer.innerHTML = `
        <div class="flex flex-col lg:grid lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 xl:gap-12 w-full max-w-full">
            
            <!-- 2/3 שמאלי: מנהל התבניות (החלק הגדול) -->
            <div class="lg:col-span-2 w-full order-1">
                <div class="p-4 sm:p-6 lg:p-8 bg-white rounded-2xl shadow-sm border border-slate-200 lg:h-[95vh] flex flex-col">
                    
                    <!-- כותרת, תיאור וכפתור הוספת קבוצה - סטטיים (flex-shrink-0) -->
                    <div class="flex-shrink-0 mb-4 border-b border-slate-200 pb-3">
                        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0 mb-2">
                                <h2 class="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#1A1A7C] text-right" style="font-size: 1.375rem;">
                                בחירת משפטים דינמיים (תחת "${safeSubName}")
                            </h2>
                            <div class="flex flex-col sm:flex-row gap-2 sm:gap-3">
                                <!-- כפתור הוספת משפט קיים -->
                                <button class="p-1.5 sm:p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-[#1A1A7C] opacity-80 hover:opacity-100 transition-all duration-150"
                                        onclick="handleAddExistingSentence('${categoryKey}', '${subKey}')"
                                        title="הוסף משפט קיים"
                                        aria-label="הוסף משפט קיים">
                                    ${getIcon('clipboard', 'w-4 h-4 sm:w-5 sm:h-5')}
                                </button>
                                <!-- כפתור הוספת תבנית מוגדרת מראש -->
                                <button class="p-1.5 sm:p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-[#1A1A7C] opacity-80 hover:opacity-100 transition-all duration-150"
                                        onclick="handlePredefinedTemplateSelect('${categoryKey}', '${subKey}')"
                                        title="הוסף תבנית מוגדרת מראש"
                                        aria-label="הוסף תבנית מוגדרת מראש">
                                    ${getIcon('file-text', 'w-4 h-4 sm:w-5 sm:h-5')}
                                </button>
                                <!-- כפתור הוספת קבוצה חדשה -->
                                <button class="p-1.5 sm:p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-[#1A1A7C] opacity-80 hover:opacity-100 transition-all duration-150"
                                        onclick="handleGroupAdd('${categoryKey}', '${subKey}')"
                                        title="הוסף קבוצת תבניות"
                                        aria-label="הוסף קבוצת תבניות">
                                    ${getIcon('plus', 'w-4 h-4 sm:w-5 sm:h-5')}
                                </button>
                            </div>
                        </div>
                        <p class="text-sm sm:text-base text-slate-600 text-right">
                            סמן את המשפטים, מלא את השדות הדינמיים, והצפייה המקדימה תתעדכן מיידית.
                        </p>
    </div>

                    <!-- רשימת התבניות - גלילה (flex-grow) - Dynamic content -->
                    <div id="templateList" class="space-y-1 overflow-y-auto pr-2 sm:pr-4 flex-grow scrollable-content">
                        <div class="text-center py-10">
                            <p class="text-slate-500 text-lg">טוען תבניות...</p>
                        </div>
                    </div>

                    <!-- הודעת סטטוס - מוצגת במרכז המסך -->
                    <div id="message" class="copy-message text-center p-3 rounded-lg font-medium" role="alert"></div>
                    
                </div>
            </div>

            <!-- 1/3 ימני: תצוגה מקדימה - Static -->
            <div id="previewPanel" class="lg:col-span-1 w-full mb-6 sm:mb-8 lg:mb-0 order-2 lg:sticky lg:top-8">
                <div class="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 sm:p-6 lg:p-8 flex flex-col lg:h-[95vh] hover:shadow-md transition-all duration-200">
                    <!-- Preview Title with Copy Icon -->
                    <div class="flex items-center justify-between border-b border-slate-200 pb-3 mb-4 sm:mb-6 flex-shrink-0">
                        <h2 class="text-xl sm:text-2xl font-semibold text-[#1A1A7C] text-right flex-1" style="font-size: 1.375rem;">
                            תצוגה מקדימה ואיסוף
                        </h2>
                        <div id="previewCopyIcon" class="p-1.5 sm:p-2 rounded-full text-slate-500 hover:text-[#1A1A7C] hover:bg-slate-100 transition-all duration-150 cursor-pointer opacity-70 hover:opacity-100" onclick="handleCopy()" role="button" tabindex="0" title="העתק ללוח הגזירים" onkeydown="if(event.key === 'Enter' || event.key === ' ') { event.preventDefault(); handleCopy(); }">
                            ${getIcon('clipboard', 'w-5 h-5 sm:w-6 sm:h-6')}
                        </div>
                    </div>
                    
                    <!-- תצוגת התוכן המורכב -->
                    <div id="previewContent" class="text-sm sm:text-base whitespace-pre-wrap text-slate-700 min-h-64 mb-4 sm:mb-6 p-3 sm:p-4 bg-slate-50 rounded-xl border border-slate-200 overflow-auto flex-grow text-right scrollable-content">
                        לא נבחר טקסט לתצוגה מקדימה...
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Render dynamic content (template groups) after structure is rendered
    renderTemplateGroups(categoryKey, subKey);
}

function renderTemplateGroups(categoryKey, subKey) {
    const templateList = document.getElementById('templateList');
    if (!templateList) return;
    
    const category = templatesData[categoryKey];
    const subcategory = category?.subcategories[subKey];
    if (!category || !subcategory || !subcategory.groups) {
        templateList.innerHTML = '<p class="text-center text-slate-500 mt-10">אין קבוצות תבניות. לחץ על "הוסף קבוצת תבניות" כדי להתחיל.</p>';
        return;
    }
    
    // Clear cache when page is rendered (in case data changed)
    templateStructureCache.clear();
    
    // יצירת HTML עבור כל קבוצות התבניות
    const allGroupsHtml = subcategory.groups.map((group, index) => 
        generateTemplateGroupHtml(group, categoryKey, subKey, index)
    ).join('<div class="h-[6px] sm:h-[14px] lg:h-[22px]"></div>');
    
    templateList.innerHTML = allGroupsHtml.length > 0 ? allGroupsHtml : '<p class="text-center text-slate-500 mt-10">אין קבוצות תבניות. לחץ על "הוסף קבוצת תבניות" כדי להתחיל.</p>';
    
    // Initialize events and preview after dynamic content is rendered
    initTemplateEditorEvents();
    updatePreview();
    
    // Initialize drag-and-drop for all template groups
    initializeDragAndDrop(categoryKey, subKey);
    
    // Initialize collapsible groups (all collapsed by default)
    initializeCollapsibleGroups(categoryKey, subKey);
}

// ============================================
// DRAG-AND-DROP FUNCTIONALITY
// ============================================

/**
 * Initialize SortableJS for all template groups
 */
function initializeDragAndDrop(categoryKey, subKey) {
    const category = templatesData[categoryKey];
    const subcategory = category?.subcategories[subKey];
    if (!category || !subcategory || !subcategory.groups) return;
    
    subcategory.groups.forEach((group, groupIndex) => {
        const containerId = `template-group-${categoryKey}-${subKey}-${groupIndex}`;
        const container = document.getElementById(containerId);
        if (!container) return;
        
        // Check if SortableJS is available
        if (typeof Sortable === 'undefined') {
            // Fallback: show up/down buttons, hide drag handles
            showFallbackButtons(container);
            return;
        }
        
        try {
            const sortable = new Sortable(container, {
                handle: '.drag-handle',
                animation: 200,
                ghostClass: 'sortable-ghost',
                chosenClass: 'sortable-chosen',
                dragClass: 'sortable-drag',
                forceFallback: false,
                fallbackOnBody: true,
                swapThreshold: 0.65,
                direction: 'vertical',
                onEnd: async function(evt) {
                    const oldIndex = evt.oldIndex;
                    const newIndex = evt.newIndex;
                    
                    if (oldIndex === newIndex) return;
                    
                    // Save new order to Supabase
                    await saveTemplateOrder(categoryKey, subKey, groupIndex, container);
                }
            });
        } catch (error) {
            console.error('Error initializing SortableJS:', error);
            // Fallback: show up/down buttons, hide drag handles
            showFallbackButtons(container);
        }
    });
}

/**
 * Show fallback buttons and hide drag handles
 */
function showFallbackButtons(container) {
    const dragHandles = container.querySelectorAll('.drag-handle-container');
    const fallbackButtons = container.querySelectorAll('.fallback-move-buttons');
    
    dragHandles.forEach(handle => {
        handle.classList.add('hidden');
    });
    
    fallbackButtons.forEach(buttons => {
        buttons.classList.remove('hidden');
    });
}

/**
 * Save template order to Supabase
 */
async function saveTemplateOrder(categoryKey, subKey, groupIndex, container) {
    try {
        const categoryId = await window.supabaseData.getCategoryIdByKey(categoryKey);
        const subcategoryId = await window.supabaseData.getSubcategoryIdByKey(categoryId, subKey);
        const groupId = await window.supabaseData.getTemplateGroupId(subcategoryId, groupIndex);
        
        const templateItems = container.querySelectorAll('.template-item[data-template-id]');
        const updatePromises = [];
        
        for (let index = 0; index < templateItems.length; index++) {
            const item = templateItems[index];
            const templateId = item.getAttribute('data-template-id');
            const template = templatesData[categoryKey].subcategories[subKey].groups[groupIndex].templates.find(t => t.id === templateId);
            
            if (template) {
                const supabaseTemplateId = await window.supabaseData.getTemplateIdByKey(groupId, templateId);
                if (supabaseTemplateId) {
                    updatePromises.push(window.supabaseData.updateTemplate(supabaseTemplateId, index));
                }
            }
        }
        
        await Promise.all(updatePromises);
        
        // Reload data to reflect new order
        templatesData = await window.supabaseData.loadAllDataFromSupabase();
        
    } catch (error) {
        console.error('Error saving template order:', error);
        showMessage('שגיאה בשמירת סדר המשפטים. נסה שוב.', 'error');
    }
}

/**
 * Move template up (fallback)
 */
window.moveTemplateUp = async function(categoryKey, subKey, groupIndex, tempIndex) {
    if (tempIndex === 0) return; // Already at top
    
    const group = templatesData[categoryKey].subcategories[subKey].groups[groupIndex];
    const templates = group.templates;
    
    // Swap in array
    [templates[tempIndex - 1], templates[tempIndex]] = [templates[tempIndex], templates[tempIndex - 1]];
    
    // Animate movement
    const container = document.getElementById(`template-group-${categoryKey}-${subKey}-${groupIndex}`);
    if (container) {
        const items = container.querySelectorAll('.template-item');
        const currentItem = items[tempIndex];
        const prevItem = items[tempIndex - 1];
        
        if (currentItem && prevItem) {
            currentItem.style.transition = 'transform 0.2s ease';
            prevItem.style.transition = 'transform 0.2s ease';
            currentItem.style.transform = 'translateY(-100%)';
            prevItem.style.transform = 'translateY(100%)';
            
            setTimeout(() => {
                currentItem.style.transition = '';
                prevItem.style.transition = '';
                currentItem.style.transform = '';
                prevItem.style.transform = '';
                
                // Re-render to reflect new order
                renderTemplateGroups(categoryKey, subKey);
            }, 200);
        }
    }
    
    // Save to Supabase
    await saveTemplateOrderAfterMove(categoryKey, subKey, groupIndex);
}

/**
 * Move template down (fallback)
 */
window.moveTemplateDown = async function(categoryKey, subKey, groupIndex, tempIndex) {
    const group = templatesData[categoryKey].subcategories[subKey].groups[groupIndex];
    const templates = group.templates;
    
    if (tempIndex === templates.length - 1) return; // Already at bottom
    
    // Swap in array
    [templates[tempIndex], templates[tempIndex + 1]] = [templates[tempIndex + 1], templates[tempIndex]];
    
    // Animate movement
    const container = document.getElementById(`template-group-${categoryKey}-${subKey}-${groupIndex}`);
    if (container) {
        const items = container.querySelectorAll('.template-item');
        const currentItem = items[tempIndex];
        const nextItem = items[tempIndex + 1];
        
        if (currentItem && nextItem) {
            currentItem.style.transition = 'transform 0.2s ease';
            nextItem.style.transition = 'transform 0.2s ease';
            currentItem.style.transform = 'translateY(100%)';
            nextItem.style.transform = 'translateY(-100%)';
            
            setTimeout(() => {
                currentItem.style.transition = '';
                nextItem.style.transition = '';
                currentItem.style.transform = '';
                nextItem.style.transform = '';
                
                // Re-render to reflect new order
                renderTemplateGroups(categoryKey, subKey);
            }, 200);
        }
    }
    
    // Save to Supabase
    await saveTemplateOrderAfterMove(categoryKey, subKey, groupIndex);
}

/**
 * Save template order after manual move (fallback)
 */
async function saveTemplateOrderAfterMove(categoryKey, subKey, groupIndex) {
    try {
        const categoryId = await window.supabaseData.getCategoryIdByKey(categoryKey);
        const subcategoryId = await window.supabaseData.getSubcategoryIdByKey(categoryId, subKey);
        const groupId = await window.supabaseData.getTemplateGroupId(subcategoryId, groupIndex);
        
        const group = templatesData[categoryKey].subcategories[subKey].groups[groupIndex];
        const updatePromises = [];
        
        for (let index = 0; index < group.templates.length; index++) {
            const template = group.templates[index];
            const supabaseTemplateId = await window.supabaseData.getTemplateIdByKey(groupId, template.id);
            if (supabaseTemplateId) {
                updatePromises.push(window.supabaseData.updateTemplate(supabaseTemplateId, index));
            }
        }
        
        await Promise.all(updatePromises);
        
        // Reload data to reflect new order
        templatesData = await window.supabaseData.loadAllDataFromSupabase();
        
    } catch (error) {
        console.error('Error saving template order:', error);
        showMessage('שגיאה בשמירת סדר המשפטים. נסה שוב.', 'error');
    }
}


// --- לוגיקת Element Builder (CRUD בתוך המודל) ---

/**
 * פונקציה לבניית ממשק ניהול האלמנטים במודל
 * @param {Array} elements - מערך האלמנטים הנוכחי לעריכה/הוספה
 */
function renderElementManagerHtml(elements) {
    const elementsHtml = elements.map((el, index) => {
        let detailsHtml = '';
        let color = 'bg-white';
        let title = '';

            switch (el.type) {
                case 'text':
                    color = 'bg-[#FAFAFA]';
                    title = 'טקסט סטטי';
                    // משתמשים ב-el.value לצורך הצגת התוכן הנוכחי
                    const textareaId = 'edit-val-' + index;
                    const textareaValue = escapeHtml(el.value || '');
                    detailsHtml = '<textarea id="' + textareaId + '" rows="1" class="w-full p-2.5 sm:p-3 border border-slate-200 rounded-lg resize-none text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#1A1A7C] focus:border-[#1A1A7C] transition-all duration-150 bg-white" placeholder="הכנס טקסט קבוע">' + textareaValue + '</textarea>';
                    break;
                case 'input':
                    color = 'bg-[#FAFAFA]';
                    title = 'שדה קלט (חופשי)';
                    const inputPhId = 'edit-ph-' + index;
                    const inputWId = 'edit-w-' + index;
                    const placeholderValue = escapeAttr(el.placeholder || '');
                    const widthValue = el.width || 10;
                    detailsHtml = '<div class="flex flex-col sm:flex-row gap-2 sm:gap-4 space-x-reverse">' +
                        '<label class="block flex-1 text-sm sm:text-base">Placeholder: <input type="text" id="' + inputPhId + '" value="' + placeholderValue + '" class="w-full p-2.5 sm:p-3 border border-slate-200 rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#1A1A7C] focus:border-[#1A1A7C] transition-all duration-150 bg-white" /></label>' +
                        '<label class="block sm:w-1/4 text-sm sm:text-base">רוחב (תווים): <input type="number" id="' + inputWId + '" value="' + widthValue + '" min="1" max="50" class="w-full p-2.5 sm:p-3 border border-slate-200 rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#1A1A7C] focus:border-[#1A1A7C] transition-all duration-150 bg-white" /></label>' +
                        '</div>';
                    break;
                case 'select':
                    color = 'bg-[#FAFAFA]';
                    title = 'רשימה נפתחת (Dropdown)';
                    const textareaOptId = 'edit-opt-' + index;
                    const optionsValue = escapeHtml((el.options || []).join('\n'));
                    detailsHtml = '<label class="block text-sm sm:text-base">אפשרויות (כל אחת בשורה חדשה):</label>' +
                        '<textarea id="' + textareaOptId + '" rows="3" class="w-full p-2.5 sm:p-3 border border-slate-200 rounded-lg resize-none text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#1A1A7C] focus:border-[#1A1A7C] transition-all duration-150 bg-white">' + optionsValue + '</textarea>';
                    break;
            }

        const liId = 'el-' + index;
        const elementNum = index + 1;
        const arrowUpIcon = getIcon('arrow-up', 'w-4 h-4');
        const arrowDownIcon = getIcon('arrow-down', 'w-4 h-4');
        const errorIcon = getIcon('error', 'w-4 h-4');
        return '<li id="' + liId + '" class="element-item p-3 sm:p-4 ' + color + ' rounded-xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-0 mb-3">' +
            '<div class="flex-grow space-y-2 w-full sm:w-auto">' +
            '<strong class="text-sm sm:text-base font-semibold block border-b border-slate-200 pb-1.5 text-slate-700">' + title + ' (אלמנט #' + elementNum + ')</strong>' +
            detailsHtml +
            '</div>' +
            '<div class="flex flex-row sm:flex-col space-x-1 sm:space-x-0 space-y-0 sm:space-y-1 mr-0 sm:mr-4 self-end sm:self-auto">' +
            '<button onclick="moveElement(' + index + ', \'up\')" class="p-1.5 sm:p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-[#1A1A7C] opacity-70 hover:opacity-100 transition-all duration-150" title="הזז למעלה">' + arrowUpIcon + '</button>' +
            '<button onclick="moveElement(' + index + ', \'down\')" class="p-1.5 sm:p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-[#1A1A7C] opacity-70 hover:opacity-100 transition-all duration-150" title="הזז למטה">' + arrowDownIcon + '</button>' +
            '<button onclick="deleteElement(' + index + ')" class="p-1.5 sm:p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-[#1A1A7C] opacity-70 hover:opacity-100 transition-all duration-150" title="מחק אלמנט">' + errorIcon + '</button>' +
            '</div>' +
            '</li>';
    }).join('');

    const emptyMessage = '<p class="text-center text-slate-500 italic p-3 sm:p-4 border border-dashed border-slate-300 rounded-xl text-sm sm:text-base">המשפט ריק. הוסף רכיב כדי להתחיל.</p>';
    const elementsList = '<ul id="element-list" class="divide-y divide-slate-200">' + elementsHtml + '</ul>';
    const plusIcon = getIcon('plus', 'w-4 h-4');
    const contentHtml = elementsHtml.length === 0 ? emptyMessage : elementsList;
    return '<div id="element-manager-ui" class="space-y-4">' +
        contentHtml +
        '<div class="flex flex-col sm:flex-row justify-start gap-2 sm:gap-3 space-x-reverse border-t border-slate-200 pt-3 sm:pt-4">' +
        '<button onclick="addElement(\'text\')" class="py-2.5 px-4 sm:py-2.5 sm:px-5 bg-[#1A1A7C] text-white rounded-md hover:bg-[#15156C] transition-all duration-150 text-sm sm:text-base font-medium shadow-sm flex items-center justify-center gap-2 active:scale-95">' + plusIcon + ' טקסט קבוע</button>' +
        '<button onclick="addElement(\'input\')" class="py-2.5 px-4 sm:py-2.5 sm:px-5 bg-[#1A1A7C] text-white rounded-md hover:bg-[#15156C] transition-all duration-150 text-sm sm:text-base font-medium shadow-sm flex items-center justify-center gap-2 active:scale-95">' + plusIcon + ' שדה קלט</button>' +
        '<button onclick="addElement(\'select\')" class="py-2.5 px-4 sm:py-2.5 sm:px-5 bg-[#1A1A7C] text-white rounded-md hover:bg-[#15156C] transition-all duration-150 text-sm sm:text-base font-medium shadow-sm flex items-center justify-center gap-2 active:scale-95">' + plusIcon + ' רשימה נפתחת</button>' +
        '</div>' +
        '</div>';
}

// פונקציות ניהול האלמנטים המופעלות בתוך המודל
window.updateElementsJson = function() {
    const list = document.getElementById('element-list');
    if (!list) return;

    const newElements = currentSessionElements.map((el, index) => {
        const type = el.type;
        
        switch (type) {
            case 'text':
                el.value = document.getElementById('edit-val-' + index).value;
                break;
            case 'input':
                el.placeholder = document.getElementById('edit-ph-' + index).value;
                el.width = parseInt(document.getElementById('edit-w-' + index).value) || 10;
                el.value = el.value || ''; 
                break;
            case 'select':
                const optionsText = document.getElementById('edit-opt-' + index).value;
                el.options = optionsText.split('\n').map(o => o.trim()).filter(o => o.length > 0);
                el.value = el.value || el.options[0] || '';
                break;
        }
        return el;
    });
    
    currentSessionElements = newElements;
    return currentSessionElements;
}

window.deleteElement = function(index) {
    window.updateElementsJson(); // שמור שינויים אחרונים
    currentSessionElements.splice(index, 1);
    modalContent.innerHTML = renderElementManagerHtml(currentSessionElements);
}

window.moveElement = function(index, direction) {
    window.updateElementsJson(); // שמור שינויים אחרונים
    const newIndex = direction === 'up' ? index - 1 : index + 1;
    if (newIndex >= 0 && newIndex < currentSessionElements.length) {
        [currentSessionElements[index], currentSessionElements[newIndex]] = [currentSessionElements[newIndex], currentSessionElements[index]];
        modalContent.innerHTML = renderElementManagerHtml(currentSessionElements);
    }
}

window.addElement = function(type) {
    window.updateElementsJson(); // שמור שינויים אחרונים
    let newElement = {};
    switch (type) {
        case 'text': newElement = { type: 'text', value: 'טקסט חדש' }; break;
        case 'input': newElement = { type: 'input', width: 10, placeholder: 'מלא כאן', value: '' }; break;
        case 'select': newElement = { type: 'select', options: ['אפשרות 1', 'אפשרות 2'], value: 'אפשרות 1' }; break;
    }
    currentSessionElements.push(newElement);
    // שימו לב: יש להפעיל את הרינדור מחדש עם הפונקציה הגלובלית.
    modalContent.innerHTML = renderElementManagerHtml(currentSessionElements);
}

/**
 * פונקציה מאוחדת לפתיחת מודל לבניית/עריכת אלמנטים
 * @param {string} title - כותרת המודל
 * @param {Array} initialElements - המבנה ההתחלתי של האלמנטים
 * @param {function} saveCallback - קריאה חוזרת לשמירת הנתונים הסופיים
 */
function setupElementBuilderModal(title, initialElements, saveCallback) {
    // 1. הגדרת מצב הסשן הנוכחי (עותק עמוק)
    currentSessionElements = JSON.parse(JSON.stringify(initialElements)); 

    // 2. פתיחת המודל עם ממשק העריכה
    openModal(title, renderElementManagerHtml(currentSessionElements), () => {
        // On Save:
        window.updateElementsJson(); // שמור את השינויים האחרונים מהשדות
        
        // ודא שיש לפחות אלמנט אחד אם זו תבנית חדשה
        if (currentSessionElements.length === 0 && title.includes('הוספת משפט חדש')) {
            // במקרה של תבנית חדשה ללא אלמנטים, נחזיר הודעת שגיאה
            showMessage('שמירה נכשלה: משפט חדש חייב להכיל לפחות רכיב אחד.', 'error');
            return; 
        }

        // קריאה לפונקציה השומרת עם המבנה הסופי
        saveCallback(currentSessionElements);
        
    }, 'שמור ועדכן מבנה', 'bg-[#1A1A7C] hover:bg-[#15156C]');
}

// --- לוגיקת CRUD: תבניות (בעורך) ---

// הוספת משפט (Template) - משתמש כעת בממשק הבנייה המלא
async function handleAddTemplate(categoryKey, subKey, groupIndex) {
    const subcategory = templatesData[categoryKey].subcategories[subKey];
    const group = subcategory.groups[groupIndex];

    // פתיחת בונה האלמנטים עם מערך אלמנטים ריק
    setupElementBuilderModal(`הוספת משפט חדש לקבוצה "${group.title}"`, [], async (finalElements) => {
        if (finalElements.length === 0) {
             showMessage('שמירה בוטלה: המשפט לא נוצר ללא רכיבים.', 'warning');
             return;
        }
        
        try {
            const categoryId = await window.supabaseData.getCategoryIdByKey(categoryKey);
            const subcategoryId = await window.supabaseData.getSubcategoryIdByKey(categoryId, subKey);
            const groupId = await window.supabaseData.getTemplateGroupId(subcategoryId, groupIndex);
            
            if (!groupId) {
                showMessage('קבוצה לא נמצאה במסד הנתונים.', 'error');
                return;
            }
            
            const templateKey = generateUniqueKey('temp');
            const templateData = await window.supabaseData.createTemplate(groupId, templateKey, group.templates.length);
            
            // Save elements preserving order
            await window.supabaseData.saveTemplateElements(templateData.id, finalElements);
            
            templatesData = await window.supabaseData.loadAllDataFromSupabase();
            showMessage(`משפט חדש נוסף לקבוצה "${group.title}".`, 'success');
            renderTemplateGroups(categoryKey, subKey); // Update only the dynamic template groups, not the whole page
        } catch (error) {
            console.error('Error creating template:', error);
            showMessage('שגיאה בהוספת המשפט. נסה שוב.', 'error');
        }
    });
}

// מחיקת משפט (Template)
async function handleDeleteTemplate(categoryKey, subKey, groupIndex, tempIndex) {
    const subcategory = templatesData[categoryKey].subcategories[subKey];
    const template = subcategory.groups[groupIndex].templates[tempIndex];
    const sampleText = template.elements.map(e => e.type === 'text' ? e.value : `[${e.type}]`).join(' ').substring(0, 50);

    confirmAction(`האם אתה בטוח שברצונך למחוק לצמיתות את המשפט: "${sampleText}..."?`, async () => {
        try {
            const categoryId = await window.supabaseData.getCategoryIdByKey(categoryKey);
            const subcategoryId = await window.supabaseData.getSubcategoryIdByKey(categoryId, subKey);
            const groupId = await window.supabaseData.getTemplateGroupId(subcategoryId, groupIndex);
            const templateId = await window.supabaseData.getTemplateIdByKey(groupId, template.id);
            
            if (!templateId) {
                showMessage('תבנית לא נמצאה במסד הנתונים.', 'error');
                return;
            }
            
            await window.supabaseData.deleteTemplate(templateId);
            
            templatesData = await window.supabaseData.loadAllDataFromSupabase();
            showMessage('המשפט נמחק בהצלחה.', 'success');
            renderTemplateGroups(categoryKey, subKey); // Update only the dynamic template groups, not the whole page
        } catch (error) {
            console.error('Error deleting template:', error);
            showMessage('שגיאה במחיקת המשפט. נסה שוב.', 'error');
        }
    });
}

// עריכת משפט (Template) - משתמש כעת בממשק הבנייה המלא
async function handleEditTemplate(categoryKey, subKey, groupIndex, tempIndex) {
    const template = templatesData[categoryKey].subcategories[subKey].groups[groupIndex].templates[tempIndex];
    
    // פתיחת בונה האלמנטים עם האלמנטים הקיימים של התבנית
    setupElementBuilderModal(`עריכת מבנה המשפט`, template.elements, async (finalElements) => {
        try {
            const categoryId = await window.supabaseData.getCategoryIdByKey(categoryKey);
            const subcategoryId = await window.supabaseData.getSubcategoryIdByKey(categoryId, subKey);
            const groupId = await window.supabaseData.getTemplateGroupId(subcategoryId, groupIndex);
            const templateId = await window.supabaseData.getTemplateIdByKey(groupId, template.id);
            
            if (!templateId) {
                showMessage('תבנית לא נמצאה במסד הנתונים.', 'error');
                return;
            }
            
            // Save elements preserving RTL order
            await window.supabaseData.saveTemplateElements(templateId, finalElements);
            
            templatesData = await window.supabaseData.loadAllDataFromSupabase();
            showMessage('מבנה המשפט עודכן בהצלחה.', 'success');
            renderTemplateGroups(categoryKey, subKey); // Update only the dynamic template groups, not the whole page
        } catch (error) {
            console.error('Error updating template:', error);
            showMessage('שגיאה בעדכון המשפט. נסה שוב.', 'error');
        }
    });
}

// --- לוגיקת ה-Router (מפענח את כתובת ה-URL) ---

function router() {
    const hash = window.location.hash.substring(1); 
    const params = new URLSearchParams(hash);
    const category = params.get('category');
    const sub = params.get('sub');
    
    // Check if we need Supabase data for this page
    const needsSupabaseData = category || hash === 'categories';
    
    if (needsSupabaseData) {
        // Render static structure immediately, then load data and render dynamic content
        renderPageStatic(category, sub, hash);
        
        // Load data in background and update dynamic content
        if (!supabaseDataLoaded) {
            loadSupabaseDataIfNeeded().then(() => {
                renderPageDynamic(category, sub, hash);
            });
        } else {
            // Data already loaded, render dynamic content immediately
            renderPageDynamic(category, sub, hash);
        }
    } else {
        // Homepage - no Supabase needed
        renderPage(category, sub, hash);
    }
}

function renderPageStatic(category, sub, hash) {
    // Render static structure immediately without waiting for Supabase
    if (category && sub) {
        // Template editor page - render static structure
        mainTitle.textContent = "עורך תבניות";
        pageTitle.textContent = "תבניות";
        breadcrumb.innerHTML = '';
        headerContainer.classList.remove('hidden');
        updateNavigationState('categories');
        
        // Static structure will be rendered in renderTemplateEditorPage
    } else if (category) {
        // Subcategories page - render static structure
        mainTitle.textContent = "תת-קטגוריות";
        pageTitle.textContent = "תבניות";
        breadcrumb.innerHTML = '';
        headerContainer.classList.remove('hidden');
        updateNavigationState('categories');
        
        // Static structure will be rendered in renderSubcategoriesPage
    } else if (hash === 'categories') {
        // Categories page - render static structure
        mainTitle.textContent = "מנהל תבניות: קטגוריות ראשיות";
        pageTitle.textContent = "מנהל תבניות: קטגוריות";
        breadcrumb.innerHTML = '';
        headerContainer.classList.remove('hidden');
        updateNavigationState('categories');
        
        // Static structure will be rendered in renderCategoriesPage
    }
}

function renderPageDynamic(category, sub, hash) {
    // Render dynamic content after data is loaded
    if (category && sub) {
        renderTemplateEditorPage(category, sub);
    } else if (category) {
        renderSubcategoriesPage(category);
    } else if (hash === 'categories') {
        renderCategoriesPage();
    }
}

function renderPage(category, sub, hash) {
    // הסתרת הכותרת והניווט עבור דף הבית
    headerContainer.classList.add('hidden');

    if (category && sub) {
        renderTemplateEditorPage(category, sub);
    } else if (category) {
        renderSubcategoriesPage(category);
    } else if (hash === 'categories') {
        renderCategoriesPage();
    } else {
        renderHomePage(); // ברירת מחדל: דף הבית
    }
}

// --- לוגיקת עורך התבניות (קריאה חוזרת) ---

function initTemplateEditorEvents() {
    const templateList = document.getElementById('templateList');
    messageDisplay = document.getElementById('message');

    if (!templateList) return; 

    // Event delegation for checkboxes - immediate update (no debounce)
    templateList.addEventListener('change', (event) => {
        if (event.target.type === 'checkbox') {
            updatePreview(false, true); // immediate update for checkboxes
        }
    });
    
    // Event delegation for input fields - debounced updates
    templateList.addEventListener('input', (event) => {
        if (event.target.classList.contains('template-input')) {
            updatePreview(true, false); // debounced update for inputs
        }
    });
    
    // Event delegation for select dropdowns - immediate update
    templateList.addEventListener('change', (event) => {
        if (event.target.classList.contains('template-select')) {
            updatePreview(true, true); // immediate update for selects
        }
    });
    
    // הוספת event listener לאייקון ההעתקה
    setTimeout(() => {
        const previewCopyIcon = document.getElementById('previewCopyIcon');
        if (previewCopyIcon) {
            // הוספת click event listener
            previewCopyIcon.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                handleCopy(e);
            });
        }
    }, 100);
    
    // Clear cache when page is rendered (in case data changed)
    templateStructureCache.clear();
    
    updatePreview(false, true); // קריאה ראשונית לאכלוס התצוגה המקדימה
}

// --- פונקציות ליבה של עורך התבניות (העתקה ותצוגה מקדימה) ---

/**
 * אוסף את הטקסט המורכב המלא מתוך האלמנטים הדינמיים ב-DOM עבור תבנית ספציפית.
 * @param {string} templateId - מזהה התבנית
 * @returns {string | null} - המשפט המורכב
 */
function getTemplateDataFromDom(templateId) {
    const templateContainer = document.querySelector(`.template-item[data-template-id="${templateId}"]`);
    if (!templateContainer) return null;

    // Cache lookup for template structure (performance optimization)
    let originalTemplate = templateStructureCache.get(templateId);
    if (!originalTemplate) {
        // מצא את התבנית המקורית כדי לקבל את הסדר הנכון של האלמנטים
        for (const categoryKey in templatesData) {
            const category = templatesData[categoryKey];
            for (const subKey in category.subcategories) {
                const subcategory = category.subcategories[subKey];
                for (const group of subcategory.groups) {
                    const found = group.templates.find(t => t.id === templateId);
                    if (found) {
                        originalTemplate = found;
                        templateStructureCache.set(templateId, found);
                        break;
                    }
                }
                if (originalTemplate) break;
            }
            if (originalTemplate) break;
        }
    }
    
    if (!originalTemplate) return null;

    let fullSentence = '';
    
    // המיכל שמחזיק את כל האלמנטים הוא ה-label (וליתר דיוק ה-span שבתוכו)
    const contentContainer = templateContainer.querySelector('label > span.block');
    if (!contentContainer) return null;
    
    // Optimize DOM queries: query all elements once instead of per-element queries
    const allDynamicElements = contentContainer.querySelectorAll('[data-index]');
    const elementMap = new Map();
    
    // Build map of dynamic elements (input/select) by their data-index
    allDynamicElements.forEach(el => {
        const index = parseInt(el.getAttribute('data-index'), 10);
        if (!isNaN(index) && (el.tagName === 'INPUT' || el.tagName === 'SELECT')) {
            elementMap.set(index, el);
        }
    });
    
    // Optimize text span queries: get all spans once
    // For GPACS, we need to get spans in DOM order (they're wrapped in dir="ltr" spans)
    const isGPACSTemplate = originalTemplate.elements && originalTemplate.elements.length >= 8 &&
        originalTemplate.elements[0].type === 'text' && originalTemplate.elements[0].value === 'CS' &&
        originalTemplate.elements[1].type === 'input' && originalTemplate.elements[1].placeholder === 'CS';
    
    const textSpanMap = new Map();
    
    if (isGPACSTemplate) {
        // For GPACS: Get all LTR-wrapped spans and find text spans inside them
        const ltrSpans = Array.from(contentContainer.querySelectorAll('span[dir="ltr"]'));
        let elementIndex = 0;
        ltrSpans.forEach(ltrSpan => {
            const textSpan = ltrSpan.querySelector('span.whitespace-pre-wrap');
            if (textSpan && originalTemplate.elements[elementIndex] && originalTemplate.elements[elementIndex].type === 'text') {
                textSpanMap.set(elementIndex, textSpan);
            }
            elementIndex++;
        });
    } else {
        // For non-GPACS: Map text spans to their element indices (assumes order matches)
        const allSpans = Array.from(contentContainer.querySelectorAll('span.whitespace-pre-wrap'));
        let spanIndex = 0;
        for (let i = 0; i < originalTemplate.elements.length; i++) {
            if (originalTemplate.elements[i].type === 'text') {
                if (spanIndex < allSpans.length) {
                    textSpanMap.set(i, allSpans[spanIndex]);
                    spanIndex++;
                }
            }
        }
    }
    
    // Check if this is GPACS template - needs to read in visual RTL order
    const isGPACS = originalTemplate.elements && originalTemplate.elements.length >= 8 &&
        originalTemplate.elements[0].type === 'text' && originalTemplate.elements[0].value === 'CS' &&
        originalTemplate.elements[1].type === 'input' && originalTemplate.elements[1].placeholder === 'CS' &&
        originalTemplate.elements[2].type === 'text' && originalTemplate.elements[2].value === 'A' &&
        originalTemplate.elements[3].type === 'input' && originalTemplate.elements[3].placeholder === 'A' &&
        originalTemplate.elements[4].type === 'text' && originalTemplate.elements[4].value === 'P' &&
        originalTemplate.elements[5].type === 'input' && originalTemplate.elements[5].placeholder === 'P' &&
        originalTemplate.elements[6].type === 'text' && originalTemplate.elements[6].value === 'G' &&
        originalTemplate.elements[7].type === 'input' && originalTemplate.elements[7].placeholder === 'G';
    
    // RTL directional control marks
    const RLE = '\u202B'; // Right-to-Left Embedding
    const PDF = '\u202C'; // Pop Directional Formatting
    
    if (isGPACS) {
        // For GPACS: Read elements in the exact same visual order as they appear in the editor
        // Template: [CS text, CS input, A text, A input, P text, P input, G text, G input]
        // In RTL editor, the visual order (right to left) is: G [input] G, P [input] P, A [input] A, CS [input] CS
        // We need to read pairs in REVERSE order (G → P → A → CS) to match the visual appearance
        // Each pair should be read as [input, text] to match visual order
        const numPairs = originalTemplate.elements.length / 2;
        
        // Read pairs in reverse order (from G to CS) to match RTL visual order
        for (let pairIdx = numPairs - 1; pairIdx >= 0; pairIdx--) {
            const textIndex = pairIdx * 2;
            const inputIndex = textIndex + 1;
            
            // Add space before each pair (except first)
            if (pairIdx < numPairs - 1) {
                fullSentence += ' ';
            }
            
            // Read input first (as it appears visually in RTL - input comes before text in visual order)
            const inputDomElement = elementMap.get(inputIndex);
            if (inputDomElement) {
                let value = inputDomElement.value || '';
                if (!value) {
                    value = `(${inputDomElement.placeholder || 'ריק'})`;
                }
                // Wrap input value with RTL directional marks to preserve order
                fullSentence += RLE + value.trim() + PDF;
            }
            
            // Add space between input and text
            fullSentence += ' ';
            
            // Then read text (as it appears visually in RTL)
            const textSpan = textSpanMap.get(textIndex);
            if (textSpan) {
                // Wrap text label with RTL directional marks to preserve order
                fullSentence += RLE + textSpan.textContent.trim() + PDF;
            }
        }
    } else {
        // עובר על האלמנטים המקוריים בסדר הנכון (0, 1, 2, ...) ובונה את המשפט
        // זה מבטיח שסדר הערכים (מספריים וטקסט) תואם בדיוק לסדר המקורי
        // מוסיף רווח יחיד בין כל אלמנט
        // Wrap each fragment with RTL directional marks to preserve order
        for (let elementIndex = 0; elementIndex < originalTemplate.elements.length; elementIndex++) {
            const element = originalTemplate.elements[elementIndex];
            
            // הוסף רווח לפני כל אלמנט (חוץ מהראשון)
            if (elementIndex > 0) {
                fullSentence += ' ';
            }
            
            if (element.type === 'text') {
                // טקסט סטטי - קרא מה-SPANs לפי המיקום המקורי
                const textSpan = textSpanMap.get(elementIndex);
                if (textSpan) {
                    // Wrap text with RTL directional marks to preserve order
                    const textValue = textSpan.textContent.trim();
                    fullSentence += RLE + textValue + PDF;
                }
            } else if (element.type === 'input' || element.type === 'select') {
                // אלמנט דינמי - קרא מה-DOM לפי data-index המדויק
                const domElement = elementMap.get(elementIndex);
                if (domElement) {
                    // קרא את הערך ישירות - ללא שינוי או הפיכה
                    let value = domElement.value || '';
                    if (element.type === 'input' && !value) {
                        value = `(${domElement.placeholder || 'ריק'})`;
                    }
                    // Wrap input value with RTL directional marks to preserve order
                    fullSentence += RLE + value.trim() + PDF;
                }
            }
        }
    }

    return fullSentence;
}


function generateTextToCopy() {
    const checkedCheckboxes = document.querySelectorAll('#templateList input[type="checkbox"]:checked');
    if (checkedCheckboxes.length === 0) return '';

    const groupedTexts = new Map();

    checkedCheckboxes.forEach((checkbox) => {
        const templateId = checkbox.closest('.template-item').getAttribute('data-template-id');
        const assembledText = getTemplateDataFromDom(templateId);
        
        const subheader = checkbox.getAttribute('data-subheader') || 'תבניות נבחרות';
        
        if (!groupedTexts.has(subheader)) {
            groupedTexts.set(subheader, []);
        }
        if (assembledText) {
            groupedTexts.get(subheader).push(assembledText);
        }
    });
    
    let textToCopy = '';
    
    for (const [subheader, texts] of groupedTexts.entries()) {
        textToCopy += `--- ${subheader} ---\n`;
        texts.forEach(text => {
            textToCopy += text + '\n';
        });
        textToCopy += '\n'; 
    }

    return textToCopy.trim();
}

function updatePreview(isFromDynamicElement = false, immediate = false) {
    // Debounce preview updates for input events (but allow immediate updates for checkboxes)
    if (!immediate && isFromDynamicElement) {
        if (previewUpdateTimer) {
            clearTimeout(previewUpdateTimer);
        }
        previewUpdateTimer = setTimeout(() => {
            updatePreview(true, true);
        }, PREVIEW_DEBOUNCE_MS);
        return;
    }

    const previewContent = document.getElementById('previewContent');
    const previewCopyIcon = document.getElementById('previewCopyIcon');

    if (!previewContent || !previewCopyIcon) return;

    const text = generateTextToCopy();
    
    if (text) {
        previewContent.classList.remove('text-slate-400');
        previewContent.classList.add('text-slate-600');
        
        // Apply RTL directionality to preview container to maintain exact order
        // Use unicode-bidi: embed to respect RLE/PDF marks in the text
        previewContent.textContent = text;
        previewContent.style.direction = 'rtl';
        previewContent.style.unicodeBidi = 'embed';
        
        // Enable icon - remove opacity, change color
        previewCopyIcon.classList.remove('text-slate-400', 'opacity-30');
        previewCopyIcon.classList.add('text-[#15156C]', 'opacity-100');

        if (isFromDynamicElement) {
            // להציג הודעה קצרה ללא טיימר אם העדכון הגיע משדה קלט
            const msg = document.getElementById('message');
            if (msg) {
                msg.className = msg.className.replace(' show', '');
            }
        }
    } else {
        previewContent.textContent = 'לא נבחר טקסט לתצוגה מקדימה...';
        previewContent.classList.remove('text-slate-600');
        previewContent.classList.add('text-slate-400');
        // Reset direction styles when no content
        previewContent.style.unicodeBidi = '';
        previewContent.style.direction = '';
        // Disable icon visually - add opacity, change color
        previewCopyIcon.classList.remove('text-[#15156C]', 'opacity-100');
        previewCopyIcon.classList.add('text-slate-400', 'opacity-30');
    }
}

async function handleCopy(event) {
    // אם יש event, למנוע התנהגות ברירת מחדל
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }
    
    const previewCopyIcon = document.getElementById('previewCopyIcon');
    const previewContent = document.getElementById('previewContent');
    
    // Get text directly from preview window content only
    // Do not use generateTextToCopy() as it reads from checkboxes
    let textToCopy = '';
    if (previewContent && previewContent.textContent && previewContent.textContent.trim() !== 'לא נבחר טקסט לתצוגה מקדימה...') {
        textToCopy = previewContent.textContent.trim();
    }

    // If no text in preview, silently return - do not show error or modify anything
    if (!textToCopy || textToCopy === 'לא נבחר טקסט לתצוגה מקדימה...') {
        return;
    }

        // Visual feedback: briefly change icon color to indicate click
        if (previewCopyIcon) {
            previewCopyIcon.classList.remove('text-[#15156C]', 'text-slate-400');
            previewCopyIcon.classList.add('text-[#15156C]'); // Primary accent color for feedback
        }

    try {
        // שימוש ב-navigator.clipboard.writeText - modern API
        await navigator.clipboard.writeText(textToCopy);
        
        showMessage(`${getIcon('check', 'w-5 h-5 inline')} הטקסט הועתק בהצלחה ללוח הגזירים!`, 'success');
        
        // Visual feedback: keep green color briefly, then return to normal
        if (previewCopyIcon) {
            setTimeout(() => {
                if (previewCopyIcon) {
                    previewCopyIcon.classList.remove('text-[#15156C]');
                    previewCopyIcon.classList.add('text-[#15156C]', 'opacity-100');
                }
            }, 1000);
        }
        
        // DO NOT reset checkboxes or call updatePreview()
        // Selection state must remain unchanged

    } catch (err) {
        console.error('Failed to copy text: ', err);
        
        // Reset icon color on error before fallback
        if (previewCopyIcon) {
            previewCopyIcon.classList.remove('text-[#15156C]');
            previewCopyIcon.classList.add('text-[#15156C]', 'opacity-100');
        }
        
        // Fallback for document.execCommand('copy') - for older browsers
        const fallbackCopy = document.createElement('textarea');
        fallbackCopy.value = textToCopy;
        fallbackCopy.style.position = 'absolute';
        fallbackCopy.style.left = '-9999px';
        fallbackCopy.style.top = '0';
        fallbackCopy.setAttribute('readonly', '');
        document.body.appendChild(fallbackCopy);
        
        // Select text for older browsers
        if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
            const range = document.createRange();
            range.selectNodeContents(fallbackCopy);
            const selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(range);
            fallbackCopy.setSelectionRange(0, 999999);
        } else {
            fallbackCopy.select();
        }
        
        try {
            const successful = document.execCommand('copy');
            if (successful) {
                showMessage(`${getIcon('check', 'w-5 h-5 inline')} הטקסט הועתק בהצלחה (שיטה חלופית)!`, 'success');
                
                // Visual feedback for fallback success
                if (previewCopyIcon) {
                    previewCopyIcon.classList.remove('text-[#15156C]', 'text-slate-400');
                    previewCopyIcon.classList.add('text-[#15156C]');
                    setTimeout(() => {
                        if (previewCopyIcon) {
                            previewCopyIcon.classList.remove('text-[#15156C]');
                            previewCopyIcon.classList.add('text-[#15156C]', 'opacity-100');
                        }
                    }, 1000);
                }
                
                // DO NOT reset checkboxes or call updatePreview()
                // Selection state must remain unchanged
            } else {
                throw new Error('execCommand failed');
            }
        } catch (e) {
            // Reset icon on final error
            if (previewCopyIcon) {
                previewCopyIcon.classList.remove('text-[#15156C]');
                previewCopyIcon.classList.add('text-[#15156C]', 'opacity-100');
            }
            showMessage(`${getIcon('error', 'w-5 h-5 inline')} לא ניתן להעתיק. השתמש בהעתקה ידנית (Ctrl+C).`, 'error');
        } finally {
            document.body.removeChild(fallbackCopy);
        }
    }
}

// --- פונקציות CRUD עבור קטגוריות ותתי-קטגוריות (נותרו ללא שינוי, נוספו לתחתית הקובץ לנוחות) ---

async function handleCategoryAdd() {
    const contentHtml = `
        <label for="categoryName" class="block text-sm sm:text-base font-medium text-slate-700 mb-2">שם הקטגוריה החדשה:</label>
        <input type="text" id="categoryName" placeholder="הכנס שם קטגוריה (כגון 'הפלות')" class="w-full p-2.5 sm:p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#1A1A7C] focus:border-[#1A1A7C] text-sm sm:text-base transition-all duration-150 mb-4 bg-white" />
        <label for="categorySubtitle" class="block text-sm sm:text-base font-medium text-slate-700 mb-2" style="font-size: 0.875rem;">כותרת משנה (אופציונלי):</label>
        <input type="text" id="categorySubtitle" placeholder="הכנס כותרת משנה או השאר ריק" class="w-full p-2.5 sm:p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#1A1A7C] focus:border-[#1A1A7C] text-sm sm:text-base transition-all duration-150 bg-white" />
    `;
    openModal('הוספת קטגוריה ראשית', contentHtml, async () => {
        const name = document.getElementById('categoryName').value.trim();
        if (!name) return showMessage('שם קטגוריה לא יכול להיות ריק.', 'error');
        const subtitle = document.getElementById('categorySubtitle').value.trim();
        
        try {
            const newKey = generateUniqueKey('cat');
            await window.supabaseData.createCategory(newKey, name);
            
            // Reload data from Supabase
            templatesData = await window.supabaseData.loadAllDataFromSupabase();
            // Store subtitle in memory (for now, until database schema is updated)
            if (subtitle && templatesData[newKey]) {
                templatesData[newKey].subtitle = subtitle;
            }
            
            showMessage(`קטגוריה "${name}" נוספה בהצלחה.`, 'success');
            renderCategoriesCards(); // Update only the dynamic cards, not the whole page
        } catch (error) {
            console.error('Error creating category:', error);
            showMessage('שגיאה בהוספת הקטגוריה. נסה שוב.', 'error');
        }
    }, 'הוסף');
}

async function handleCategoryEdit(key) {
    const currentName = templatesData[key].name;
    const currentSubtitle = templatesData[key].subtitle || '';
    const contentHtml = `
        <label for="categoryNameEdit" class="block text-sm sm:text-base font-medium text-slate-700 mb-2">שם חדש לקטגוריה:</label>
        <input type="text" id="categoryNameEdit" value="${escapeAttr(currentName)}" class="w-full p-2.5 sm:p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#1A1A7C] focus:border-[#1A1A7C] text-sm sm:text-base transition-all duration-150 mb-4 bg-white" />
        <label for="categorySubtitleEdit" class="block text-sm sm:text-base font-medium text-slate-700 mb-2" style="font-size: 0.875rem;">כותרת משנה (אופציונלי):</label>
        <input type="text" id="categorySubtitleEdit" value="${escapeAttr(currentSubtitle)}" placeholder="הכנס כותרת משנה או השאר ריק" class="w-full p-2.5 sm:p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#1A1A7C] focus:border-[#1A1A7C] text-sm sm:text-base transition-all duration-150 bg-white" />
    `;
    openModal(`עריכת קטגוריה: ${currentName}`, contentHtml, async () => {
        const newName = document.getElementById('categoryNameEdit').value.trim();
        if (!newName) return showMessage('שם קטגוריה לא יכול להיות ריק.', 'error');
        const newSubtitle = document.getElementById('categorySubtitleEdit').value.trim();

        try {
            const categoryId = await window.supabaseData.getCategoryIdByKey(key);
            if (!categoryId) {
                showMessage('קטגוריה לא נמצאה במסד הנתונים.', 'error');
                return;
            }
            
            await window.supabaseData.updateCategory(categoryId, newName);
            
            // Store subtitle in memory (for now, until database schema is updated)
            if (!templatesData[key].subtitle) {
                templatesData[key].subtitle = '';
            }
            templatesData[key].subtitle = newSubtitle;
            
            // Reload data from Supabase
            templatesData = await window.supabaseData.loadAllDataFromSupabase();
            // Restore subtitle after reload
            if (newSubtitle) {
                templatesData[key].subtitle = newSubtitle;
            }
            
            showMessage(`שם הקטגוריה שונה ל- "${newName}".`, 'success');
            router();
        } catch (error) {
            console.error('Error updating category:', error);
            showMessage('שגיאה בעדכון הקטגוריה. נסה שוב.', 'error');
        }
    });
}

async function handleCategoryDelete(key) {
    const name = templatesData[key].name;
    confirmAction(`האם אתה בטוח שברצונך למחוק לצמיתות את הקטגוריה "${name}" וכל תתי-הקטגוריות והתבניות הכלולות בה?`, async () => {
        try {
            const categoryId = await window.supabaseData.getCategoryIdByKey(key);
            if (!categoryId) {
                showMessage('קטגוריה לא נמצאה במסד הנתונים.', 'error');
                return;
            }
            
            await window.supabaseData.deleteCategory(categoryId);
            
            // Reload data from Supabase
            templatesData = await window.supabaseData.loadAllDataFromSupabase();
            showMessage(`קטגוריה "${name}" נמחקה בהצלחה.`, 'success');
            renderCategoriesCards(); // Update only the dynamic cards, not the whole page
        } catch (error) {
            console.error('Error deleting category:', error);
            showMessage('שגיאה במחיקת הקטגוריה. נסה שוב.', 'error');
        }
    });
}

async function handleSubcategoryAdd(categoryKey) {
    const categoryName = templatesData[categoryKey].name;
    const contentHtml = `
        <label for="subName" class="block text-sm sm:text-base font-medium text-slate-700 mb-2">שם תת-הקטגוריה החדשה:</label>
        <input type="text" id="subName" placeholder="הכנס שם תת-קטגוריה (כגון 'סקר טרימסטר שני')" class="w-full p-2.5 sm:p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#1A1A7C] focus:border-[#1A1A7C] text-sm sm:text-base transition-all duration-150 bg-white" />
    `;
    openModal(`הוספת תת-קטגוריה ל- ${categoryName}`, contentHtml, async () => {
        const name = document.getElementById('subName').value.trim();
        if (!name) return showMessage('שם תת-קטגוריה לא יכול להיות ריק.', 'error');
        
        try {
            const categoryId = await window.supabaseData.getCategoryIdByKey(categoryKey);
            if (!categoryId) {
                showMessage('קטגוריה לא נמצאה במסד הנתונים.', 'error');
                return;
            }
            
            const newKey = generateUniqueKey('sub');
            await window.supabaseData.createSubcategory(categoryId, newKey, name);
            
            templatesData = await window.supabaseData.loadAllDataFromSupabase();
            showMessage(`תת-קטגוריה "${name}" נוספה בהצלחה.`, 'success');
            renderSubcategoriesCards(categoryKey); // Update only the dynamic cards, not the whole page
        } catch (error) {
            console.error('Error creating subcategory:', error);
            showMessage('שגיאה בהוספת תת-הקטגוריה. נסה שוב.', 'error');
        }
    }, 'הוסף');
}

async function handleSubcategoryEdit(categoryKey, subKey) {
    const currentName = templatesData[categoryKey].subcategories[subKey].name;
    const contentHtml = `
        <label for="subNameEdit" class="block text-sm sm:text-base font-medium text-slate-700 mb-2">שם חדש לתת-קטגוריה:</label>
        <input type="text" id="subNameEdit" value="${escapeAttr(currentName)}" class="w-full p-2.5 sm:p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#1A1A7C] focus:border-[#1A1A7C] text-sm sm:text-base transition-all duration-150 bg-white" />
    `;
    openModal(`עריכת תת-קטגוריה: ${currentName}`, contentHtml, async () => {
        const newName = document.getElementById('subNameEdit').value.trim();
        if (!newName) return showMessage('שם תת-קטגוריה לא יכול להיות ריק.', 'error');

        try {
            const categoryId = await window.supabaseData.getCategoryIdByKey(categoryKey);
            if (!categoryId) {
                showMessage('קטגוריה לא נמצאה במסד הנתונים.', 'error');
                return;
            }
            
            const subcategoryId = await window.supabaseData.getSubcategoryIdByKey(categoryId, subKey);
            if (!subcategoryId) {
                showMessage('תת-קטגוריה לא נמצאה במסד הנתונים.', 'error');
                return;
            }
            
            await window.supabaseData.updateSubcategory(subcategoryId, newName);
            
            templatesData = await window.supabaseData.loadAllDataFromSupabase();
            showMessage(`שם תת-הקטגוריה שונה ל- "${newName}".`, 'success');
            renderSubcategoriesCards(categoryKey); // Update only the dynamic cards, not the whole page
        } catch (error) {
            console.error('Error updating subcategory:', error);
            showMessage('שגיאה בעדכון תת-הקטגוריה. נסה שוב.', 'error');
        }
    });
}

async function handleSubcategoryDelete(categoryKey, subKey) {
    const name = templatesData[categoryKey].subcategories[subKey].name;
    confirmAction(`האם אתה בטוח שברצונך למחוק לצמיתות את תת-הקטגוריה "${name}" וכל קבוצות התבניות והתבניות הכלולות בה?`, async () => {
        try {
            const categoryId = await window.supabaseData.getCategoryIdByKey(categoryKey);
            if (!categoryId) {
                showMessage('קטגוריה לא נמצאה במסד הנתונים.', 'error');
                return;
            }
            
            const subcategoryId = await window.supabaseData.getSubcategoryIdByKey(categoryId, subKey);
            if (!subcategoryId) {
                showMessage('תת-קטגוריה לא נמצאה במסד הנתונים.', 'error');
                return;
            }
            
            await window.supabaseData.deleteSubcategory(subcategoryId);
            
            templatesData = await window.supabaseData.loadAllDataFromSupabase();
            showMessage(`תת-קטגוריה "${name}" נמחקה בהצלחה.`, 'success');
            renderSubcategoriesCards(categoryKey); // Update only the dynamic cards, not the whole page
        } catch (error) {
            console.error('Error deleting subcategory:', error);
            showMessage('שגיאה במחיקת תת-הקטגוריה. נסה שוב.', 'error');
        }
    });
}

async function handleGroupEdit(categoryKey, subKey, groupIndex) {
    const subcategory = templatesData[categoryKey].subcategories[subKey];
    const currentTitle = subcategory.groups[groupIndex].title;
    const contentHtml = `
        <label for="groupTitleEdit" class="block text-sm sm:text-base font-medium text-slate-600 mb-2">שם חדש לקבוצה:</label>
        <input type="text" id="groupTitleEdit" value="${escapeAttr(currentTitle)}" class="w-full p-2.5 sm:p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#1A1A7C] focus:border-[#1A1A7C] text-sm sm:text-base transition-all duration-150 bg-white" />
    `;
    openModal(`עריכת קבוצה: ${currentTitle}`, contentHtml, async () => {
        const newTitle = document.getElementById('groupTitleEdit').value.trim();
        if (!newTitle) return showMessage('שם קבוצה לא יכול להיות ריק.', 'error');

        try {
            const categoryId = await window.supabaseData.getCategoryIdByKey(categoryKey);
            const subcategoryId = await window.supabaseData.getSubcategoryIdByKey(categoryId, subKey);
            const groupId = await window.supabaseData.getTemplateGroupId(subcategoryId, groupIndex);
            
            if (!groupId) {
                showMessage('קבוצה לא נמצאה במסד הנתונים.', 'error');
                return;
            }
            
            await window.supabaseData.updateTemplateGroup(groupId, newTitle);
            
            templatesData = await window.supabaseData.loadAllDataFromSupabase();
            showMessage(`שם הקבוצה שונה ל- "${newTitle}".`, 'success');
            renderTemplateGroups(categoryKey, subKey); // Update only the dynamic template groups, not the whole page
        } catch (error) {
            console.error('Error updating group:', error);
            showMessage('שגיאה בעדכון הקבוצה. נסה שוב.', 'error');
        }
    });
}

async function handleGroupDelete(categoryKey, subKey, groupIndex) {
    const subcategory = templatesData[categoryKey].subcategories[subKey];
    const title = subcategory.groups[groupIndex].title;
    confirmAction(`האם אתה בטוח שברצונך למחוק לצמיתות את הקבוצה "${title}" וכל המשפטים הכלולים בה?`, async () => {
        try {
            const categoryId = await window.supabaseData.getCategoryIdByKey(categoryKey);
            const subcategoryId = await window.supabaseData.getSubcategoryIdByKey(categoryId, subKey);
            const groupId = await window.supabaseData.getTemplateGroupId(subcategoryId, groupIndex);
            
            if (!groupId) {
                showMessage('קבוצה לא נמצאה במסד הנתונים.', 'error');
                return;
            }
            
            await window.supabaseData.deleteTemplateGroup(groupId);
            
            templatesData = await window.supabaseData.loadAllDataFromSupabase();
            showMessage(`קבוצה "${title}" נמחקה בהצלחה.`, 'success');
            renderTemplateGroups(categoryKey, subKey); // Update only the dynamic template groups, not the whole page
        } catch (error) {
            console.error('Error deleting group:', error);
            showMessage('שגיאה במחיקת הקבוצה. נסה שוב.', 'error');
        }
    });
}

/**
 * פונקציה לבחירת תבנית מוגדרת מראש והוספתה לקבוצה
 */
function handlePredefinedTemplateSelect(categoryKey, subKey) {
    const subcategory = templatesData[categoryKey].subcategories[subKey];
    
    // אם אין קבוצות, צריך ליצור קבוצה קודם
    if (!subcategory.groups || subcategory.groups.length === 0) {
        showMessage('יש ליצור קבוצת תבניות קודם. לחץ על "הוסף קבוצת תבניות".', 'warning');
        return;
    }
    
    // יצירת HTML לרשימת תבניות מוגדרות מראש
    const templatesListHtml = predefinedTemplates.map((template, index) => {
        const previewText = template.elements.map(el => {
            if (el.type === 'text') return el.value;
            if (el.type === 'input') return `[${el.placeholder || 'קלט'}]`;
            if (el.type === 'select') return `[${el.options?.[0] || 'בחר'}]`;
            return '';
        }).join('');
        
        return `
            <div class="border border-slate-200 rounded-lg p-4 hover:border-[#1A1A7C] hover:bg-slate-50 hover:shadow-sm transition-all duration-150 cursor-pointer mb-3 predefined-template-card shadow-sm" 
                 onclick="selectPredefinedTemplate('${categoryKey}', '${subKey}', ${index}, event)"
                 data-template-index="${index}">
                <div class="flex items-start justify-between gap-3">
                    <div class="flex-1">
                        <h4 class="text-base font-semibold text-slate-900 mb-1">${escapeHtml(template.name)}</h4>
                        <p class="text-sm text-slate-600 mb-2">${escapeHtml(template.description)}</p>
                        <div class="text-xs text-slate-600 bg-slate-50 p-2 rounded border border-slate-200 font-mono">
                            ${escapeHtml(previewText)}
                        </div>
                    </div>
                    <div class="text-[#1A1A7C] flex-shrink-0">
                        ${getIcon('arrow-left', 'w-5 h-5')}
                    </div>
                </div>
            </div>
        `;
    }).join('');
    
    const contentHtml = `
        <div class="mb-4">
            <p class="text-sm text-slate-600 mb-4">בחר תבנית מוגדרת מראש להוספה לקבוצה:</p>
            <div class="max-h-96 overflow-y-auto scrollable-content">
                ${templatesListHtml}
            </div>
        </div>
        <div class="mt-4">
            <label for="predefinedGroupSelect" class="block text-sm sm:text-base font-medium text-slate-700 mb-2">בחר קבוצה להוספת התבנית:</label>
            <select id="predefinedGroupSelect" class="dynamic-element template-select w-full">
                ${subcategory.groups.map((group, idx) => 
                    `<option value="${idx}">${escapeHtml(group.title)}</option>`
                ).join('')}
            </select>
        </div>
    `;
    
    // שמירת הקשר למודל
    window.currentPredefinedTemplateIndex = null;
    
    openModal('הוספת תבנית מוגדרת מראש', contentHtml, async () => {
        const selectedGroupIndex = parseInt(document.getElementById('predefinedGroupSelect').value);
        if (window.currentPredefinedTemplateIndex === null) {
            showMessage('יש לבחור תבנית מהרשימה.', 'warning');
            return;
        }
        
        try {
            const selectedTemplate = predefinedTemplates[window.currentPredefinedTemplateIndex];
            const group = subcategory.groups[selectedGroupIndex];
            
            const categoryId = await window.supabaseData.getCategoryIdByKey(categoryKey);
            const subcategoryId = await window.supabaseData.getSubcategoryIdByKey(categoryId, subKey);
            const groupId = await window.supabaseData.getTemplateGroupId(subcategoryId, selectedGroupIndex);
            
            if (!groupId) {
                showMessage('קבוצה לא נמצאה במסד הנתונים.', 'error');
                return;
            }
            
            const templateKey = generateUniqueKey('temp');
            const templateData = await window.supabaseData.createTemplate(groupId, templateKey, group.templates.length);
            
            // יצירת עותק עמוק של האלמנטים ושמירה בסדר RTL
            const elementsCopy = JSON.parse(JSON.stringify(selectedTemplate.elements));
            await window.supabaseData.saveTemplateElements(templateData.id, elementsCopy);
            
            templatesData = await window.supabaseData.loadAllDataFromSupabase();
            showMessage(`תבנית "${selectedTemplate.name}" נוספה בהצלחה לקבוצה "${group.title}".`, 'success');
            renderTemplateGroups(categoryKey, subKey); // Update only the dynamic template groups, not the whole page
        } catch (error) {
            console.error('Error adding predefined template:', error);
            showMessage('שגיאה בהוספת התבנית. נסה שוב.', 'error');
        }
    }, 'הוסף תבנית');
}

/**
 * פונקציה להוספת משפט קיים מקבוצה אחרת
 */
window.handleAddExistingSentence = function(categoryKey, subKey) {
    const subcategory = templatesData[categoryKey].subcategories[subKey];
    
    // אם אין קבוצות, צריך ליצור קבוצה קודם
    if (!subcategory.groups || subcategory.groups.length === 0) {
        showMessage('יש ליצור קבוצת תבניות קודם. לחץ על "הוסף קבוצת תבניות".', 'warning');
        return;
    }
    
    // בדיקה אם יש לפחות קבוצה אחת עם משפטים
    const groupsWithTemplates = subcategory.groups.filter(group => 
        group.templates && group.templates.length > 0
    );
    
    if (groupsWithTemplates.length === 0) {
        showMessage('אין משפטים קיימים להעתקה. יש ליצור משפטים קודם.', 'warning');
        return;
    }
    
    // יצירת HTML לרשימת קבוצות
    const groupsListHtml = subcategory.groups.map((group, groupIndex) => {
        if (!group.templates || group.templates.length === 0) {
            return '';
        }
        
        const templatesListHtml = group.templates.map((template, templateIndex) => {
            // יצירת תצוגה מקדימה של המשפט
            const previewText = template.elements.map(el => {
                if (el.type === 'text') return el.value || '';
                if (el.type === 'input') return `[${el.placeholder || 'קלט'}]`;
                if (el.type === 'select') return `[${el.options?.[0] || 'בחר'}]`;
                return '';
            }).join(' ');
            
            return `
                <div class="border border-slate-200 rounded-lg p-3 hover:border-[#1A1A7C] hover:bg-slate-50 hover:shadow-sm transition-all duration-150 cursor-pointer mb-2 existing-sentence-card" 
                     onclick="selectExistingSentence('${categoryKey}', '${subKey}', ${groupIndex}, ${templateIndex}, event)"
                     data-group-index="${groupIndex}"
                     data-template-index="${templateIndex}">
                    <div class="flex items-start justify-between gap-3">
                        <div class="flex-1">
                            <div class="text-xs text-slate-600 bg-slate-50 p-2 rounded border border-slate-200 font-mono text-right">
                                ${escapeHtml(previewText)}
                            </div>
                        </div>
                        <div class="text-[#1A1A7C] flex-shrink-0">
                            ${getIcon('arrow-left', 'w-4 h-4')}
                        </div>
                    </div>
                </div>
            `;
        }).join('');
        
        return `
            <div class="mb-4">
                <h4 class="text-sm font-semibold text-slate-700 mb-2">${escapeHtml(group.title)}</h4>
                <div class="space-y-2">
                    ${templatesListHtml}
                </div>
            </div>
        `;
    }).filter(html => html !== '').join('');
    
    const contentHtml = `
        <div class="mb-4">
            <p class="text-sm text-slate-600 mb-4">בחר משפט קיים להעתקה לקבוצה:</p>
            <div class="max-h-96 overflow-y-auto scrollable-content">
                ${groupsListHtml}
            </div>
        </div>
        <div class="mt-4">
            <label for="existingSentenceGroupSelect" class="block text-sm sm:text-base font-medium text-slate-700 mb-2">בחר קבוצה להוספת המשפט:</label>
            <select id="existingSentenceGroupSelect" class="dynamic-element template-select w-full">
                ${subcategory.groups.map((group, idx) => 
                    `<option value="${idx}">${escapeHtml(group.title)}</option>`
                ).join('')}
            </select>
        </div>
    `;
    
    // שמירת הקשר למודל
    window.currentExistingSentenceGroupIndex = null;
    window.currentExistingSentenceTemplateIndex = null;
    
    openModal('הוספת משפט קיים', contentHtml, async () => {
        const targetGroupIndex = parseInt(document.getElementById('existingSentenceGroupSelect').value);
        if (window.currentExistingSentenceGroupIndex === null || window.currentExistingSentenceTemplateIndex === null) {
            showMessage('יש לבחור משפט מהרשימה.', 'warning');
            return;
        }
        
        try {
            const sourceGroup = subcategory.groups[window.currentExistingSentenceGroupIndex];
            const sourceTemplate = sourceGroup.templates[window.currentExistingSentenceTemplateIndex];
            const targetGroup = subcategory.groups[targetGroupIndex];
            
            const categoryId = await window.supabaseData.getCategoryIdByKey(categoryKey);
            const subcategoryId = await window.supabaseData.getSubcategoryIdByKey(categoryId, subKey);
            const targetGroupId = await window.supabaseData.getTemplateGroupId(subcategoryId, targetGroupIndex);
            
            if (!targetGroupId) {
                showMessage('קבוצה לא נמצאה במסד הנתונים.', 'error');
                return;
            }
            
            const templateKey = generateUniqueKey('temp');
            const templateData = await window.supabaseData.createTemplate(targetGroupId, templateKey, targetGroup.templates.length);
            
            // יצירת עותק עמוק של האלמנטים ושמירה בסדר RTL
            const elementsCopy = JSON.parse(JSON.stringify(sourceTemplate.elements));
            await window.supabaseData.saveTemplateElements(templateData.id, elementsCopy);
            
            templatesData = await window.supabaseData.loadAllDataFromSupabase();
            showMessage(`משפט הועתק בהצלחה לקבוצה "${targetGroup.title}".`, 'success');
            renderTemplateGroups(categoryKey, subKey); // Update only the dynamic template groups, not the whole page
        } catch (error) {
            console.error('Error adding existing sentence:', error);
            showMessage('שגיאה בהוספת המשפט. נסה שוב.', 'error');
        }
    }, 'הוסף משפט');
}

/**
 * פונקציה לבחירת משפט קיים מהרשימה
 */
window.selectExistingSentence = function(categoryKey, subKey, groupIndex, templateIndex, event) {
    window.currentExistingSentenceGroupIndex = groupIndex;
    window.currentExistingSentenceTemplateIndex = templateIndex;
    
    // עדכון ויזואלי - הסרת בחירה קודמת והוספת בחירה חדשה
    document.querySelectorAll('.existing-sentence-card').forEach(card => {
        card.classList.remove('border-[#1A1A7C]', 'bg-[#1A1A7C]', 'bg-opacity-5');
        card.classList.add('border-slate-200');
    });
    
    if (event && event.currentTarget) {
        event.currentTarget.classList.remove('border-slate-200');
        event.currentTarget.classList.add('border-[#1A1A7C]', 'bg-[#1A1A7C]', 'bg-opacity-5');
    }
}

/**
 * פונקציה לבחירת תבנית מוגדרת מראש מהרשימה
 */
function selectPredefinedTemplate(categoryKey, subKey, templateIndex, event) {
    window.currentPredefinedTemplateIndex = templateIndex;
    
    // עדכון ויזואלי - הסרת בחירה קודמת והוספת בחירה חדשה
    document.querySelectorAll('.predefined-template-card').forEach(el => {
        el.classList.remove('border-[#1A1A7C]', 'bg-[#F0F4FF]');
        el.classList.add('border-slate-200');
    });
    
    // מציאת האלמנט הנבחר לפי data-template-index
    const selectedCard = document.querySelector(`[data-template-index="${templateIndex}"]`);
    if (selectedCard) {
        selectedCard.classList.add('border-[#1A1A7C]', 'bg-[#F0F4FF]');
        selectedCard.classList.remove('border-slate-200');
    }
}

async function handleGroupAdd(categoryKey, subKey) {
    const subcategory = templatesData[categoryKey].subcategories[subKey];
    const contentHtml = `
        <label for="groupTitleAdd" class="block text-sm sm:text-base font-medium text-slate-700 mb-2">שם קבוצת התבניות החדשה:</label>
        <input type="text" id="groupTitleAdd" placeholder="הכנס שם קבוצה (כגון 'בדיקות דם לאחר לידה')" class="w-full p-2.5 sm:p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#1A1A7C] focus:border-[#1A1A7C] text-sm sm:text-base transition-all duration-150 bg-white" />
    `;
    openModal('הוספת קבוצת תבניות חדשה', contentHtml, async () => {
        const title = document.getElementById('groupTitleAdd').value.trim();
        if (!title) return showMessage('שם קבוצה לא יכול להיות ריק.', 'error');

        try {
            const categoryId = await window.supabaseData.getCategoryIdByKey(categoryKey);
            const subcategoryId = await window.supabaseData.getSubcategoryIdByKey(categoryId, subKey);
            
            if (!subcategoryId) {
                showMessage('תת-קטגוריה לא נמצאה במסד הנתונים.', 'error');
                return;
            }
            
            const displayOrder = subcategory.groups.length;
            await window.supabaseData.createTemplateGroup(subcategoryId, title, displayOrder);
            
            templatesData = await window.supabaseData.loadAllDataFromSupabase();
            showMessage(`קבוצת תבניות "${title}" נוספה בהצלחה.`, 'success');
            renderTemplateGroups(categoryKey, subKey); // Update only the dynamic template groups, not the whole page
        } catch (error) {
            console.error('Error creating group:', error);
            showMessage('שגיאה בהוספת הקבוצה. נסה שוב.', 'error');
        }
    }, 'הוסף');
}

// --- פונקציות עמודים: קטגוריות ותתי-קטגוריות (ללא שינוי) ---

function renderCategoriesPage() {
    mainTitle.textContent = "מנהל תבניות: קטגוריות ראשיות";
    pageTitle.textContent = "מנהל תבניות: קטגוריות";
    // לא מציגים breadcrumbs בדף הקטגוריות הראשי
    breadcrumb.innerHTML = '';
    headerContainer.classList.remove('hidden');
    updateNavigationState('categories');

    // Render static content immediately (header, layout structure)
    const staticHeaderHtml = `
        <div class="text-right mb-8 sm:mb-10 lg:mb-12 p-4 sm:p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
            <div class="flex-1">
                    <h2 class="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-900 pb-1 text-right">
                    בחירת קטגוריה ראשית
                </h2>
                    <p class="text-sm sm:text-base text-slate-600 mt-2">
                    לחץ על קטגוריה כדי לעבור לבחירת תבניות או נהל את הקטגוריות הקיימות.
                </p>
            </div>
            <button class="w-full sm:w-auto py-2.5 px-5 sm:py-2.5 sm:px-6 bg-[#1A1A7C] text-white font-medium rounded-md shadow-sm hover:bg-[#15156C] transition-all duration-150 flex items-center justify-center space-x-2 space-x-reverse active:scale-95"
                    onclick="handleCategoryAdd()">
                ${getIcon('plus', 'w-5 h-5')}
                <span>הוסף קטגוריה חדשה</span>
            </button>
        </div>
        
        <div id="categoriesGrid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 xl:gap-10 p-4 sm:p-6">
            <div class="text-center py-10">
                <p class="text-slate-500 text-lg">טוען קטגוריות...</p>
            </div>
        </div>
    `;
    
    appContainer.innerHTML = staticHeaderHtml;
    
    // Render dynamic content (categories cards) after data is available
    renderCategoriesCards();
}

function renderCategoriesCards() {
    const categoriesGrid = document.getElementById('categoriesGrid');
    if (!categoriesGrid) return;
    
    const cardClasses = "group nav-card bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-sm border border-slate-200 hover:bg-slate-50 hover:shadow-md transition-all duration-200 cursor-pointer text-right flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0";

    let cardsHtml = '';
    
    if (Object.keys(templatesData).length === 0) {
        cardsHtml = '<div class="col-span-full text-center py-10"><p class="text-slate-500 text-base">אין קטגוריות. לחץ על "הוסף קטגוריה חדשה" כדי להתחיל.</p></div>';
    } else {
        Object.keys(templatesData).forEach(key => {
            const category = templatesData[key];
            const subtitle = category.subtitle || '';
            cardsHtml += `
                <div class="${cardClasses}" onclick="navigateToSubcategories('${key}')">
                    <div class="flex-1 min-w-0">
                        <h3 class="text-lg sm:text-xl lg:text-2xl font-semibold text-slate-900 mb-1">${escapeHtml(category.name)}</h3>
                        ${subtitle ? `<p class="text-sm sm:text-base text-slate-600">${escapeHtml(subtitle)}</p>` : ''}
                    </div>
                    <div class="flex items-center space-x-2 space-x-reverse z-10 flex-shrink-0">
                        <button class="crud-btn crud-btn-edit" 
                                onclick="event.stopPropagation(); handleCategoryEdit('${key}')" 
                                title="עריכת שם קטגוריה">
                            ${getIcon('edit', 'w-5 h-5')}
                        </button>
                        <button class="crud-btn crud-btn-delete" 
                                onclick="event.stopPropagation(); handleCategoryDelete('${key}')" 
                                title="מחיקת קטגוריה">
                            ${getIcon('trash', 'w-5 h-5')}
                        </button>
                    </div>
                </div>
            `;
        });
    }
    
    categoriesGrid.innerHTML = cardsHtml;
}

function renderSubcategoriesPage(categoryKey) {
    const category = templatesData[categoryKey];
    if (!category) {
        // Render static structure even if category not found, then navigate
        mainTitle.textContent = "תת-קטגוריות";
        pageTitle.textContent = "תבניות";
        breadcrumb.innerHTML = '';
        headerContainer.classList.remove('hidden');
        updateNavigationState('categories');
        appContainer.innerHTML = `
            <div class="text-right mb-8 sm:mb-10 lg:mb-12 p-4 sm:p-6">
                    <h2 class="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-900 pb-1 text-right">
                    בחירת תת-קטגוריה
                </h2>
                    <p class="text-sm sm:text-base text-slate-600 mt-2">
                    קטגוריה לא נמצאה. מעבר לדף הבית...
                </p>
            </div>
        `;
        setTimeout(() => navigateToHome(), 1000);
        return;
    }

    mainTitle.textContent = `תת-קטגוריות: ${category.name}`;
    pageTitle.textContent = `תבניות: ${category.name}`;
    breadcrumb.innerHTML = '';
    headerContainer.classList.remove('hidden');
    updateNavigationState('categories');

    // Render static content immediately (header, layout structure)
    const staticHeaderHtml = `
        <div class="text-right mb-8 sm:mb-10 lg:mb-12 p-4 sm:p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
            <div class="flex-1">
                    <h2 class="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-900 pb-1 text-right">
                    בחירת תת-קטגוריה
                </h2>
                    <p class="text-sm sm:text-base text-slate-600 mt-2">
                    לחץ על תת-קטגוריה כדי להתחיל לערוך תבניות או נהל את התת-קטגוריות הקיימות.
                </p>
            </div>
            <button class="w-full sm:w-auto py-2.5 px-5 sm:py-2.5 sm:px-6 bg-[#1A1A7C] text-white font-medium rounded-md shadow-sm hover:bg-[#15156C] transition-all duration-150 flex items-center justify-center space-x-2 space-x-reverse active:scale-95"
                    onclick="handleSubcategoryAdd('${categoryKey}')">
                ${getIcon('plus', 'w-5 h-5')}
                <span>הוסף תת-קטגוריה חדשה</span>
            </button>
        </div>
        
        <div id="subcategoriesGrid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 xl:gap-10 p-4 sm:p-6">
            <div class="text-center py-10">
                <p class="text-slate-500 text-lg">טוען תת-קטגוריות...</p>
            </div>
        </div>
    `;
    
    appContainer.innerHTML = staticHeaderHtml;
    
    // Render dynamic content (subcategories cards) after data is available
    renderSubcategoriesCards(categoryKey);
}

function renderSubcategoriesCards(categoryKey) {
    const subcategoriesGrid = document.getElementById('subcategoriesGrid');
    if (!subcategoriesGrid) return;
    
    const category = templatesData[categoryKey];
    if (!category) return;
    
    const cardClasses = "group nav-card bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-sm border border-slate-200 hover:bg-slate-50 hover:shadow-md transition-all duration-200 cursor-pointer text-right flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0";

    let cardsHtml = '';
    
    const subcategories = Object.keys(category.subcategories);
    if (subcategories.length === 0) {
        cardsHtml = '<div class="col-span-full text-center py-10"><p class="text-slate-500 text-base">אין תת-קטגוריות. לחץ על "הוסף תת-קטגוריה חדשה" כדי להתחיל.</p></div>';
    } else {
        subcategories.forEach(subKey => {
            const subcategory = category.subcategories[subKey];
            
            cardsHtml += `
                <div class="${cardClasses}" onclick="navigateToTemplateEditor('${categoryKey}', '${subKey}')">
                    <div class="flex-1 min-w-0">
                        <h3 class="text-lg sm:text-xl lg:text-2xl font-semibold text-slate-900">${escapeHtml(subcategory.name)}</h3>
                    </div>
                    <div class="flex items-center space-x-2 space-x-reverse z-10 flex-shrink-0">
                        <button class="crud-btn crud-btn-edit" 
                                onclick="event.stopPropagation(); handleSubcategoryEdit('${categoryKey}', '${subKey}')" 
                                title="עריכת שם תת-קטגוריה">
                            ${getIcon('edit', 'w-5 h-5')}
                        </button>
                        <button class="crud-btn crud-btn-delete" 
                                onclick="event.stopPropagation(); handleSubcategoryDelete('${categoryKey}', '${subKey}')" 
                                title="מחיקת תת-קטגוריה">
                            ${getIcon('trash', 'w-5 h-5')}
                        </button>
                    </div>
                </div>
            `;
        });
    }
    
    subcategoriesGrid.innerHTML = cardsHtml;
}

// --- פונקציית דף הבית (Homepage) ---

function renderHomePage() {
    pageTitle.textContent = "מערכת תבניות דינמית";
    // הסתרת אזור הכותרת והניווט העליון
    headerContainer.classList.add('hidden');
    updateNavigationState('home');
    
    const features = [
        { icon: 'template', title: 'ארגון היררכי', desc: 'נהל תבניות בקטגוריות, תתי-קטגוריות וקבוצות מוגדרות.' },
        { icon: 'document', title: 'עריכה מתקדמת', desc: 'צור משפטים דינמיים המשלבים טקסט חופשי, שדות קלט ורשימות נפתחות.' },
        { icon: 'eye', title: 'תצוגה מקדימה מיידית', desc: 'צפה בזמן אמת בתוצר הסופי המורכב, לפני ההעתקה.' },
        { icon: 'clipboard', title: 'העתקה אוטומטית', desc: 'איסוף אוטומטי של טקסטים נבחרים והעתקתם בלחיצה ללוח הגזירים.' }
    ];
    
    const templateExample = `
        <div class="bg-white p-3 sm:p-4 lg:p-6 rounded-2xl shadow-md border border-slate-200 flex flex-col space-y-2 text-sm sm:text-base text-slate-900">
            <p class="font-semibold text-base sm:text-lg lg:text-xl text-[#1A1A7C] border-b border-slate-200 pb-2">דוגמה למשפט דינמי</p>
            <div class="flex flex-wrap items-center gap-1">
                <span class="whitespace-pre-wrap">הבדיקה הקרובה נקבעה לתאריך</span>
                <input type="text" class="dynamic-element text-center mx-1" style="width: 8rem; min-width: 50px;" placeholder="DD/MM/YYYY" value="20/03/2026" disabled>
                <span class="whitespace-pre-wrap">ותתקיים במרפאת</span>
                <select class="dynamic-element mx-1" disabled>
                    <option>תל אביב</option>
                    <option selected>ירושלים</option>
                    <option>חיפה</option>
                </select>
                <span class="whitespace-pre-wrap">כדי לדון בתוצאות</span>
                <span class="dynamic-element mx-1">בדיקת דם כללית</span>
                <span class="whitespace-pre-wrap">.</span>
            </div>
        </div>
    `;

    appContainer.innerHTML = `
        <!-- 1. Hero Section - Modern Centered RTL Design -->
        <section class="hero-medical-static">
            <div class="hero-content-wrapper">
                <div class="hero-inner-container">
                    <!-- Hero Content - Centered with Left Shift (RTL) -->
                    <div class="hero-text-content">
                        <h1 class="hero-title">
                            בנייה, ניהול והעתקה מיידית של תבניות רפואיות
                        </h1>
                        <p class="hero-subtitle">
                            מערכת מתקדמת ליצירת משפטים דינמיים לשימוש יומיומי (מיילים, SMS, סיכום ביקור). חסוך שעות עבודה על ידי אוטומציה של תוכן משתנה.
                        </p>
                        <div class="hero-cta-group">
                            <button onclick="navigateToCategories()" 
                                    class="hero-cta-primary">
                                ${getIcon('rocket', 'w-5 h-5')} 
                                <span>התחל עריכת תבניות</span>
                            </button>
                            <a href="#section-features" 
                               class="hero-cta-secondary">
                                ${getIcon('lightbulb', 'w-5 h-5')} 
                                <span>למידע נוסף</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 2. Section 1 – What the system does -->
        <section id="section-features" class="section-bg-1 w-full text-right py-16 sm:py-20 lg:py-24">
            <div class="max-w-[100rem] xl:max-w-[115rem] 2xl:max-w-[140rem] mx-auto px-10 sm:px-12 lg:px-16">
                <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">
                    הכוח של אוטומציית טקסט רפואי
                </h2>
                <p class="text-base sm:text-lg text-slate-600 mb-8 sm:mb-10 lg:mb-12 max-w-2xl leading-relaxed">
                    המערכת נועדה לחסוך זמן קליני יקר על ידי הפיכת טקסט חוזרני לדינמי, מובנה ומוכן לשליחה מיידית.
                </p>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 xl:gap-10">
                    ${features.map(f => `
                        <div class="p-4 sm:p-6 lg:p-8 bg-white rounded-2xl shadow-md border border-slate-200 text-center transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
                            <div class="flex justify-center mb-3 sm:mb-4 text-slate-400 hover:text-[#1A1A7C] transition-colors duration-150">${getIcon(f.icon, 'w-12 h-12 sm:w-16 sm:h-16')}</div>
                            <h3 class="text-lg sm:text-xl lg:text-2xl font-semibold text-slate-900 mb-2">${f.title}</h3>
                            <p class="text-slate-600 text-sm sm:text-base leading-relaxed">${f.desc}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
            
        <!-- 3. Section 2 – Category Management -->
        <section class="section-bg-2 w-full text-right py-16 sm:py-20 lg:py-24">
            <div class="max-w-[100rem] xl:max-w-[115rem] 2xl:max-w-[140rem] mx-auto px-10 sm:px-12 lg:px-16">
                <div class="lg:grid lg:grid-cols-12 lg:gap-8 xl:gap-12 items-center">
                    <div class="lg:col-span-7">
                        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">
                            מבנה נתונים מסודר וקל לניהול
                        </h2>
                        <p class="text-base sm:text-lg text-slate-600 mb-4 sm:mb-6 leading-relaxed">
                            אפשרות ליצור היררכיה ברורה של קטגוריות ראשיות (כגון 'מיילדות' או 'גינקולוגיה'), תתי-קטגוריות (כגון 'טרימסטר ראשון') וקבוצות תבניות, מה שמבטיח נגישות מהירה למידע הנכון. כל השמות והמיקומים ניתנים לעריכה ולמחיקה.
                        </p>
                        <ul class="space-y-2 sm:space-y-3 text-sm sm:text-base text-slate-600">
                            <li class="flex items-start space-x-2 space-x-reverse">
                                <span class="text-slate-400 hover:text-[#1A1A7C] transition-colors duration-150 mt-1 flex-shrink-0">${getIcon('check', 'w-5 h-5')}</span>
                                <p class="text-slate-600"><strong class="font-semibold text-slate-900">קטגוריה ראשית:</strong> הרמה הגבוהה ביותר (למשל, "פריון").</p>
                            </li>
                            <li class="flex items-start space-x-2 space-x-reverse">
                                <span class="text-slate-400 hover:text-[#1A1A7C] transition-colors duration-150 mt-1 flex-shrink-0">${getIcon('check', 'w-5 h-5')}</span>
                                <p class="text-slate-600"><strong class="font-semibold text-slate-900">תת-קטגוריה:</strong> פילוח נושאי (למשל, "פרוטוקול IVF").</p>
                            </li>
                            <li class="flex items-start space-x-2 space-x-reverse">
                                <span class="text-slate-400 hover:text-[#1A1A7C] transition-colors duration-150 mt-1 flex-shrink-0">${getIcon('check', 'w-5 h-5')}</span>
                                <p class="text-slate-600"><strong class="font-semibold text-slate-900">קבוצות תבניות:</strong> קיבוץ משפטים בעלי קשר (למשל, "הנחיות לגירוי שחלתי").</p>
                            </li>
                        </ul>
                    </div>
                    <div class="lg:col-span-5 mt-8 lg:mt-0 flex justify-center">
                        <div class="text-[#1A1A7C] w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48">
                            ${getIcon('folder', 'w-full h-full')}
                        </div>
                    </div>
                </div>
            </div>
        </section>
            
        <!-- 4. Section 3 – Dynamic Template Editor -->
        <section class="section-bg-3 w-full text-right py-16 sm:py-20 lg:py-24">
            <div class="max-w-[100rem] xl:max-w-[115rem] 2xl:max-w-[140rem] mx-auto px-10 sm:px-12 lg:px-16">
                <div class="lg:grid lg:grid-cols-12 lg:gap-8 xl:gap-12 items-center">
                    <div class="lg:col-span-5 order-2 lg:order-1 mt-8 lg:mt-0 flex justify-center">
                        ${templateExample}
                    </div>
                    <div class="lg:col-span-7 order-1 lg:order-2">
                        <h2 class="text-3xl font-bold text-slate-900 mb-4">
                            עורך תבניות דינמי: הפסקת העתק-הדבק
                        </h2>
                        <p class="text-lg text-slate-600 mb-6 leading-relaxed">
                            בניית משפטים אינה דורשת יותר קיצורי דרך או השלמות ידניות. המערכת מציעה שלושה רכיבי יסוד להרכבה גמישה של כל הודעה:
                        </p>
                        <ul class="space-y-2 sm:space-y-3 text-sm sm:text-base text-slate-600">
                            <li class="flex items-start space-x-2 space-x-reverse">
                                <span class="text-[#1A1A7C] mt-1 flex-shrink-0">${getIcon('circle-blue', 'w-5 h-5')}</span>
                                <p><strong class="font-semibold text-slate-900">טקסט סטטי (FreeText):</strong> החלק הקבוע במשפט.</p>
                            </li>
                            <li class="flex items-start space-x-2 space-x-reverse">
                                <span class="text-[#1A1A7C] mt-1 flex-shrink-0">${getIcon('circle-green', 'w-5 h-5')}</span>
                                <p><strong class="font-semibold text-slate-900">שדה קלט (InputField):</strong> מילוי טקסט חופשי (תאריך, מינון, שם).</p>
                            </li>
                            <li class="flex items-start space-x-2 space-x-reverse">
                                <span class="text-[#1A1A7C] mt-1 flex-shrink-0">${getIcon('circle-yellow', 'w-5 h-5')}</span>
                                <p><strong class="font-semibold text-slate-900">רשימה נפתחת (Dropdown):</strong> בחירה מתוך אפשרויות קבועות מראש.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
            
        <!-- 5. Section 4 – Preview Panel -->
        <section class="section-bg-4 w-full text-right py-16 sm:py-20 lg:py-24">
            <div class="max-w-[100rem] xl:max-w-[115rem] 2xl:max-w-[140rem] mx-auto px-10 sm:px-12 lg:px-16">
                <div class="lg:grid lg:grid-cols-12 lg:gap-8 xl:gap-12 items-center">
                    <div class="lg:col-span-7">
                        <h2 class="text-3xl font-bold text-slate-900 mb-4">
                            תצוגה מקדימה וסנכרון בזמן אמת
                        </h2>
                        <p class="text-lg text-slate-600 mb-6 leading-relaxed">
                            אין צורך לעבור בין מסכים. בזמן שאתה בוחר משפטים וממלא שדות דינמיים, הטקסט המאוחד מוצג מיד בלוח הצדדי. זה מבטיח דיוק ומונע טעויות לפני שלב ההעתקה הסופי.
                        </p>
                        <div class="bg-[#F0F4FF] p-3 sm:p-4 lg:p-6 rounded-lg border border-[#E5E7EB]">
                            <strong class="text-sm sm:text-base text-[#15156C]">כלל הזהב:</strong> <span class="text-sm sm:text-base text-slate-700">כל קלט (טקסט, מספר, בחירה) משתקף מיידית בתוצר הסופי.</span>
                        </div>
                    </div>
                    <div class="lg:col-span-5 mt-8 lg:mt-0 flex justify-center">
                        <div class="text-[#1A1A7C] w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48">
                            ${getIcon('eyes', 'w-full h-full')}
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 6. Section 5 – Copy-to-Clipboard Automation -->
        <section class="section-bg-5 w-full text-right py-16 sm:py-20 lg:py-24">
            <div class="max-w-[100rem] xl:max-w-[115rem] 2xl:max-w-[140rem] mx-auto px-10 sm:px-12 lg:px-16">
                <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">
                    העתקה אוטומטית ומבנה פלט ברור
                </h2>
                <p class="text-base sm:text-lg text-slate-600 mb-4 sm:mb-6 max-w-2xl leading-relaxed">
                    בלחיצת כפתור אחת, כל הטקסטים המאוחדים מועתקים ללוח הגזירים, תוך שמירה על מבנה קריא הכולל הפרדה על ידי כותרות קבוצה.
                </p>
                <ul class="text-slate-600 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-stretch">
                    <li class="flex items-start space-x-3 space-x-reverse p-3 sm:p-4 lg:p-6 bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 h-full">
                        <span class="text-lg sm:text-xl text-[#1A1A7C] mt-1 flex-shrink-0 font-semibold">1.</span>
                        <p class="text-sm sm:text-base flex-1"><strong class="font-semibold text-slate-900">קיבוץ אוטומטי:</strong> המשפטים מסודרים אוטומטית תחת כותרות הקבוצה שלהם (למשל, "--- הנחיות פתיחה ---").</p>
                    </li>
                    <li class="flex items-start space-x-3 space-x-reverse p-3 sm:p-4 lg:p-6 bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 h-full">
                        <span class="text-lg sm:text-xl text-[#1A1A7C] mt-1 flex-shrink-0 font-semibold">2.</span>
                        <p class="text-sm sm:text-base flex-1"><strong class="font-semibold text-slate-900">ניקוי הפלט:</strong> כל רכיב דינמי מוחלף בערך שמולא (או טקסט חלופי אם הושאר ריק), ללא קוד או סימנים מבלבלים.</p>
                    </li>
                    <li class="flex items-start space-x-3 space-x-reverse p-3 sm:p-4 lg:p-6 bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 h-full">
                        <span class="text-lg sm:text-xl text-[#1A1A7C] mt-1 flex-shrink-0 font-semibold">3.</span>
                        <p class="text-sm sm:text-base flex-1"><strong class="font-semibold text-slate-900">העתקה מהירה:</strong> שימוש ב-API מתקדם להעתקה מיידית ואיפוס הבחירות מיד לאחר מכן.</p>
                    </li>
                    <li class="flex items-start space-x-3 space-x-reverse p-3 sm:p-4 lg:p-6 bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 h-full">
                        <span class="text-lg sm:text-xl text-[#1A1A7C] mt-1 flex-shrink-0 font-semibold">4.</span>
                        <p class="text-sm sm:text-base flex-1"><strong class="font-semibold text-slate-900">תמיכת מכשירים:</strong> מנגנון fallback מובנה להבטחת העתקה מוצלחת גם בדפדפנים ישנים יותר.</p>
                    </li>
                </ul>
            </div>
        </section>

        <!-- 7. Section 6 – Coming Features -->
        <section class="section-bg-6 w-full text-right py-16 sm:py-20 lg:py-24">
            <div class="max-w-[100rem] xl:max-w-[115rem] 2xl:max-w-[140rem] mx-auto px-10 sm:px-12 lg:px-16">
                <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">
                    תכונות עתידיות בתכנון
                </h2>
                <p class="text-base sm:text-lg text-slate-600 mb-8 sm:mb-10 lg:mb-12 max-w-2xl leading-relaxed">
                    אנו עובדים על הרחבת היכולות של המערכת כדי להפוך אותה לכלי הניהול המקיף ביותר במרפאה.
                </p>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 xl:gap-10">
                    <div class="p-3 sm:p-4 lg:p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                        <strong class="font-semibold text-sm sm:text-base text-slate-900">ייצוא/ייבוא JSON:</strong> <span class="text-sm sm:text-base text-slate-600">גיבוי קל ושיתוף של כל מבנה התבניות באמצעות קובץ.</span>
                    </div>
                    <div class="p-3 sm:p-4 lg:p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                        <strong class="font-semibold text-sm sm:text-base text-slate-900">שמירת ענן:</strong> <span class="text-sm sm:text-base text-slate-600">תמיכה בשמירה בענן או במסד נתונים (כגון Firebase) לשימוש בין משתמשים.</span>
                    </div>
                    <div class="p-3 sm:p-4 lg:p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                        <strong class="font-semibold text-sm sm:text-base text-slate-900">ניהול משתמשים:</strong> <span class="text-sm sm:text-base text-slate-600">פונקציות לרישום והתחברות עבור מספר רופאים/מזכירות.</span>
                    </div>
                </div>
            </div>
        </section>
    `;
    
    // גלילה למעלה
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


// --- אתחול ---

window.addEventListener('hashchange', router);

// ודא שכל התבניות הישנות הופכות למבנה החדש אם לא עברו שינוי מפורש
Object.keys(templatesData).forEach(catKey => {
    const subcats = templatesData[catKey].subcategories;
    Object.keys(subcats).forEach(subKey => {
        subcats[subKey].groups.forEach(group => {
            group.templates.forEach(temp => {
                // אם יש טקסט ישן (היה במבנה הקודם) ואין אלמנטים
                if (temp.text && !temp.elements) {
                    temp.elements = [{ type: 'text', value: temp.text }];
                    delete temp.text; // הסרת המאפיין הישן
                }
            });
        });
    });
});

// Flag to track if Supabase data has been loaded
let supabaseDataLoaded = false;
let supabaseDataLoading = false;

// Load Supabase data lazily (only when needed for non-homepage pages)
async function loadSupabaseDataIfNeeded() {
    // If already loaded or currently loading, return
    if (supabaseDataLoaded || supabaseDataLoading) {
        return;
    }
    
    supabaseDataLoading = true;
    
    try {
        // Wait for Supabase client to be ready
        let retries = 0;
        while (!window.supabaseClient && retries < 50) {
            await new Promise(resolve => setTimeout(resolve, 100));
            retries++;
        }
        
        if (!window.supabaseClient) {
            console.warn('Supabase client not available. Check your environment variables.');
            templatesData = {};
            supabaseDataLoaded = true;
            supabaseDataLoading = false;
            return;
        }
        
        // Load data from Supabase
        if (window.supabaseData && window.supabaseData.loadAllDataFromSupabase) {
            try {
                templatesData = await window.supabaseData.loadAllDataFromSupabase();
                if (Object.keys(templatesData).length === 0) {
                    console.log('No data in database. Starting with empty structure.');
                } else {
                    console.log('✅ Data loaded successfully from Supabase.');
                }
            } catch (loadError) {
                console.error('Error loading data from Supabase:', loadError);
                templatesData = {};
            }
        } else {
            console.error('Supabase data functions not loaded. Check if supabase-data.js is included.');
            templatesData = {};
        }
    } catch (error) {
        console.error('Error loading Supabase data:', error);
        templatesData = {};
    } finally {
        supabaseDataLoaded = true;
        supabaseDataLoading = false;
    }
}

// Initialize application: Render static content immediately, load Supabase data only when needed
function initializeApp() {
    // Check if we're on the homepage (no hash or hash is empty/home)
    const hash = window.location.hash.replace('#', '');
    const isHomepage = !hash || hash === '' || hash === 'home';
    
    if (isHomepage) {
        // Homepage is static - render immediately without waiting for Supabase
        router();
        // Load Supabase data in background (for future navigation)
        loadSupabaseDataIfNeeded();
    } else {
        // Non-homepage - render static structure immediately, then load data
        router(); // router() will handle static rendering and async data loading
    }
}

// ============================================
// COLLAPSIBLE TEMPLATE GROUPS
// ============================================

/**
 * Initialize collapsible groups (set initial state - all collapsed by default)
 */
function initializeCollapsibleGroups(categoryKey, subKey) {
    const category = templatesData[categoryKey];
    const subcategory = category?.subcategories[subKey];
    if (!category || !subcategory || !subcategory.groups) return;
    
    subcategory.groups.forEach((group, groupIndex) => {
        const groupContentId = `template-group-content-${categoryKey}-${subKey}-${groupIndex}`;
        const groupHeaderId = `template-group-header-${categoryKey}-${subKey}-${groupIndex}`;
        const content = document.getElementById(groupContentId);
        const header = document.getElementById(groupHeaderId);
        
        if (!content || !header) return;
        
        // Set initial collapsed state (closed by default)
        content.style.maxHeight = '0px';
        content.classList.add('collapsed');
        // Add class to container for hover effect styling
        const container = content.parentElement;
        if (container) {
            container.classList.add('collapsible-collapsed');
        }
        
        // Set plus/minus icon to plus (collapsed state)
        const plusIcon = header.querySelector('.plus-icon-wrapper');
        const minusIcon = header.querySelector('.minus-icon-wrapper');
        if (plusIcon && minusIcon) {
            plusIcon.style.opacity = '1';
            plusIcon.style.visibility = 'visible';
            minusIcon.style.opacity = '0';
            minusIcon.style.visibility = 'hidden';
        }
    });
}

/**
 * Toggle template group collapse/expand
 * Follows the example pattern: toggle max-height between 0 and scrollHeight
 */
window.toggleTemplateGroup = function(categoryKey, subKey, groupIndex) {
    const groupContentId = `template-group-content-${categoryKey}-${subKey}-${groupIndex}`;
    const groupHeaderId = `template-group-header-${categoryKey}-${subKey}-${groupIndex}`;
    const content = document.getElementById(groupContentId);
    const header = document.getElementById(groupHeaderId);
    
    if (!content || !header) return;
    
    // Find the container div (parent of both header and content)
    const container = content.parentElement;
    
    const plusIcon = header.querySelector('.plus-icon-wrapper');
    const minusIcon = header.querySelector('.minus-icon-wrapper');
    
    // Check if currently expanded (has maxHeight set and not 0)
    if (content.style.maxHeight && content.style.maxHeight !== '0px') {
        // Collapse: set max-height to 0
        content.style.maxHeight = '0px';
        content.classList.add('collapsed');
        // Add class to container for hover effect styling
        if (container) {
            container.classList.add('collapsible-collapsed');
        }
        if (plusIcon && minusIcon) {
            plusIcon.style.opacity = '1';
            plusIcon.style.visibility = 'visible';
            minusIcon.style.opacity = '0';
            minusIcon.style.visibility = 'hidden';
        }
    } else {
        // Expand: set max-height to scrollHeight
        content.classList.remove('collapsed');
        // Remove class from container
        if (container) {
            container.classList.remove('collapsible-collapsed');
        }
        const scrollHeight = content.scrollHeight;
        content.style.maxHeight = scrollHeight + 'px';
        if (plusIcon && minusIcon) {
            plusIcon.style.opacity = '0';
            plusIcon.style.visibility = 'hidden';
            minusIcon.style.opacity = '1';
            minusIcon.style.visibility = 'visible';
        }
        
        // Re-initialize drag-and-drop for this group after expansion
        setTimeout(() => {
            initializeDragAndDrop(categoryKey, subKey);
        }, 300); // Wait for animation to complete
    }
}

// Start the application
initializeApp();