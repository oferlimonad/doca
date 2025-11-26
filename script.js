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
        baseClasses += ' bg-[#1a1a1a] text-[#0084a6] border border-[#0084a6]';
    } else if (type === 'warning') {
        baseClasses += ' bg-[#1a1a1a] text-[#0084a6] border border-[#0084a6]';
    } else if (type === 'error') {
        baseClasses += ' bg-[#1a1a1a] text-[#0084a6] border border-[#0084a6]';
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
function openModal(title, contentHtml, onAction, actionText = 'שמור', actionClass = 'bg-[#0084a6] hover:bg-[#006b85]') {
    modalTitle.textContent = title;
    modalContent.innerHTML = contentHtml;
    crudModal.classList.remove('hidden');
    crudModal.classList.add('flex');

    // יצירת כפתור הפעולה (שמירה או אישור)
    const actionButton = document.createElement('button');
    actionButton.textContent = actionText;
    actionButton.className = `py-2.5 px-5 sm:py-2.5 sm:px-6 rounded-lg text-white font-semibold transition-all duration-150 text-sm sm:text-base shadow-sm ${actionClass}`;
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
    cancelButton.className = 'py-2.5 px-5 sm:py-2.5 sm:px-6 border border-[#2e2e2e] rounded-lg text-[#b3b3b3] hover:bg-[#1a1a1a] hover:border-[#404040] transition-all duration-150 text-sm sm:text-base font-medium';

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
        `<p class="text-sm sm:text-base lg:text-lg text-[#b3b3b3]">${safeMessage}</p>`,
        onConfirm,
        'מחק',
        'bg-[#0084a6] hover:bg-[#006b85]'
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
        <a href="#" onclick="navigateToHome(); return false;" class="hover:text-[#0084a6] transition-colors duration-150 text-[#b3b3b3]">בית</a>
                        <span class="mx-2 text-[#4a4a4a]">/</span>
        <a href="#" onclick="navigateToCategories(); return false;" class="hover:text-[#0084a6] transition-colors duration-150 text-[#b3b3b3]">קטגוריות</a>
    `;

    // אם יש קטגוריה, מוסיפים אותה
    html += `
                        <span class="mx-2 text-[#4a4a4a]">/</span>
        <a href="#" onclick="navigateToSubcategories('${categoryKey}'); return false;" class="hover:text-[#0084a6] transition-colors duration-150 text-[#b3b3b3]">${safeCategory}</a>
    `;

    // אם יש תת-קטגוריה, מוסיפים אותה (הדף הנוכחי - לא קישור)
    if (currentSubcategory) {
        html += `
                        <span class="mx-2 text-[#4a4a4a]">/</span>
            <span class="text-[#0084a6] font-semibold">${safeSubcategory}</span>
        `;
    } else {
        // אם אין תת-קטגוריה, הקטגוריה היא הדף הנוכחי
        html = html.replace(
            `<a href="#" onclick="navigateToSubcategories('${categoryKey}'); return false;" class="hover:text-[#0084a6] transition-colors duration-150 text-[#b3b3b3]">${safeCategory}</a>`,
            `<span class="text-[#0084a6] font-semibold">${safeCategory}</span>`
        );
    }
    
    breadcrumb.innerHTML = html;
}

/**
 * פונקציית עזר: יצירת HTML עבור אלמנט דינמי יחיד בתצוגת העורך.
 */
function createElementHtml(element, tempId, elementIndex) {
    const uniqueElementId = `${tempId}_el_${elementIndex}`;
    
    switch (element.type) {
        case 'text':
            // טקסט קבוע - מוצג כספאן רגיל
            // הסר רווחים מיותרים מהתחלה וסוף כדי למנוע רווחים כפולים (הרווחים יתווספו ב-join)
            const trimmedText = (element.value || '').trim();
            return `<span class="whitespace-pre-wrap">${escapeHtml(trimmedText)}</span>`;
        case 'input':
            // שדה קלט - מוצג כ-input עם רוחב מותאם
            // הרוחב מחושב כדי להיות יחסי למספר התווים + מרווח
            // הסר mx-1 כי הרווחים יתווספו ב-join
            // הסר inline oninput - נשתמש ב-event delegation עם debouncing
            const widthChars = element.width || 8;
            const safePlaceholder = escapeAttr(element.placeholder || '');
            const safeValue = escapeAttr(element.value || '');
            return `<input type="text" id="${uniqueElementId}" 
                        data-temp-id="${tempId}" data-index="${elementIndex}" data-type="input"
                        class="dynamic-element text-center template-input" 
                        style="width: ${widthChars * 0.75 + 1.5}rem; min-width: 50px;" 
                        placeholder="${safePlaceholder}" 
                        value="${safeValue}" />`;
        case 'select':
            // רשימה נפתחת - מוצגת כ-select
            // הסר mx-1 כי הרווחים יתווספו ב-join
            // הסר inline onchange - נשתמש ב-event delegation
            const optionsHtml = (element.options || []).map(opt => 
                `<option value="${escapeAttr(opt)}" ${element.value === opt ? 'selected' : ''}>${escapeHtml(opt)}</option>`
            ).join('');
            return `<select id="${uniqueElementId}" 
                        data-temp-id="${tempId}" data-index="${elementIndex}" data-type="select"
                        class="dynamic-element template-select">
                        ${optionsHtml}
                    </select>`;
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
        // רנדור המשפט הדינמי: מחבר את כל האלמנטים לשורה אחת עם רווח יחיד בין כל אלמנט
        const sentenceHtml = temp.elements.map((el, elIdx) => 
            createElementHtml(el, temp.id, elIdx)
        ).join(' '); // רווח יחיד בין כל אלמנט

        return `
            <div class="template-item flex items-start rounded-xl transition-all duration-150 group justify-between gap-2 border border-transparent hover:border-[#2e2e2e]" 
                 data-template-id="${temp.id}">
                <div class="flex items-center flex-grow min-w-0">
                    <!-- תיבת הסימון -->
                    <input type="checkbox" id="temp-${temp.id}" 
                        data-subheader="${safeGroupTitle}" 
                        class="form-checkbox h-5 w-5 text-[#0084a6] rounded border-[#2e2e2e] focus:ring-[#0084a6] ml-2 sm:ml-3 flex-shrink-0 self-center">
                    
                    <!-- התווית מכילה את המשפט הדינמי -->
                    <label for="temp-${temp.id}" class="text-[#f5f5f5] text-sm sm:text-base md:text-lg lg:text-xl flex-1 cursor-pointer break-words self-center" style="font-size: 0.9375rem;">
                        <span class="block">${sentenceHtml}</span>
                    </label>
    </div>
                <div class="flex space-x-1 space-x-reverse text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-150 flex-shrink-0">
                    <button class="p-1.5 sm:p-2 rounded-full hover:bg-[#1a1a1a] text-[#4a4a4a] hover:text-[#0084a6] opacity-80 hover:opacity-100 transition-all duration-150" 
                            onclick="event.stopPropagation(); handleEditTemplate('${categoryKey}', '${subKey}', ${groupIndex}, ${tempIndex})" 
                            title="עריכת מבנה המשפט">
                        ${getIcon('edit', 'w-4 h-4 sm:w-5 sm:h-5')}
                    </button>
                    <button class="p-1.5 sm:p-2 rounded-full hover:bg-[#1a1a1a] text-[#4a4a4a] hover:text-[#0084a6] opacity-80 hover:opacity-100 transition-all duration-150" 
                            onclick="event.stopPropagation(); handleDeleteTemplate('${categoryKey}', '${subKey}', ${groupIndex}, ${tempIndex})" 
                            title="מחיקת משפט">
                        ${getIcon('trash', 'w-4 h-4 sm:w-5 sm:h-5')}
                    </button>
                </div>
            </div>
        `;
    }).join('');

    return `
        <div class="bg-[#1a1a1a] p-4 sm:p-5 lg:p-6 rounded-2xl border border-[#2e2e2e] shadow-sm">
            <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0 border-b border-[#2e2e2e] pb-3 mb-4">
                <h3 class="text-lg sm:text-xl lg:text-2xl font-semibold text-[#b3b3b3]" style="font-size: 1.125rem;">
                ${escapeHtml(group.title)}
                </h3>
                <div class="flex space-x-2 space-x-reverse text-sm">
                    <button class="p-1.5 sm:p-2 rounded-full hover:bg-[#262626] text-[#4a4a4a] hover:text-[#0084a6] opacity-80 hover:opacity-100 transition-all duration-150 cursor-pointer" 
                            onclick="handleGroupEdit('${categoryKey}', '${subKey}', ${groupIndex})" 
                            title="עריכת שם קבוצה">
                        ${getIcon('edit', 'w-4 h-4 sm:w-5 sm:h-5')}
                    </button>
                    <button class="p-1.5 sm:p-2 rounded-full hover:bg-[#262626] text-[#4a4a4a] hover:text-[#0084a6] opacity-80 hover:opacity-100 transition-all duration-150 cursor-pointer" 
                            onclick="handleGroupDelete('${categoryKey}', '${subKey}', ${groupIndex})" 
                            title="מחיקת קבוצה">
                        ${getIcon('trash', 'w-4 h-4 sm:w-5 sm:h-5')}
                    </button>
                    <button class="p-1.5 sm:p-2 rounded-full hover:bg-[#262626] text-[#4a4a4a] hover:text-[#0084a6] opacity-80 hover:opacity-100 transition-all duration-150 cursor-pointer" 
                            onclick="handleAddTemplate('${categoryKey}', '${subKey}', ${groupIndex})" 
                        title="הוספת משפט חדש">
                    ${getIcon('plus', 'w-4 h-4 sm:w-5 sm:h-5')}
                </button>
    </div>
        </div>
        <div class="space-y-0 sm:space-y-0 mt-2">
            ${templatesHtml.length > 0 ? templatesHtml : `<p class="text-[#4a4a4a] text-sm p-3 flex items-center gap-2">אין משפטים בקבוצה זו. לחץ ${getIcon('plus', 'w-4 h-4 inline')} להוספה.</p>`}
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
                    <div class="p-4 sm:p-6 lg:p-8 bg-[#1f1f1f] rounded-2xl shadow-sm border border-[#2e2e2e]">
                        <p class="text-[#4a4a4a] text-center py-10">קטגוריה או תת-קטגוריה לא נמצאה. מעבר לדף הבית...</p>
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
        <div class="flex flex-col lg:grid lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 xl:gap-12 p-4 sm:p-6 lg:p-6">
            
            <!-- 2/3 שמאלי: מנהל התבניות (החלק הגדול) -->
            <div class="lg:col-span-2 w-full order-1">
                <div class="p-4 sm:p-6 lg:p-8 bg-[#1f1f1f] rounded-2xl shadow-sm border border-[#2e2e2e] lg:h-[95vh] flex flex-col">
                    
                    <!-- כותרת, תיאור וכפתור הוספת קבוצה - סטטיים (flex-shrink-0) -->
                    <div class="flex-shrink-0 mb-4 border-b border-[#2e2e2e] pb-3">
                        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0 mb-2">
                                <h2 class="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#0084a6] text-right" style="font-size: 1.375rem;">
                                בחירת משפטים דינמיים (תחת "${safeSubName}")
                            </h2>
                            <div class="flex flex-col sm:flex-row gap-2 sm:gap-3">
                                <!-- כפתור הוספת תבנית מוגדרת מראש -->
                                <button class="p-1.5 sm:p-2 rounded-full hover:bg-[#1a1a1a] text-[#4a4a4a] hover:text-[#0084a6] opacity-80 hover:opacity-100 transition-all duration-150"
                                        onclick="handlePredefinedTemplateSelect('${categoryKey}', '${subKey}')"
                                        title="הוסף תבנית מוגדרת מראש"
                                        aria-label="הוסף תבנית מוגדרת מראש">
                                    ${getIcon('file-text', 'w-4 h-4 sm:w-5 sm:h-5')}
                                </button>
                                <!-- כפתור הוספת קבוצה חדשה -->
                                <button class="p-1.5 sm:p-2 rounded-full hover:bg-[#1a1a1a] text-[#4a4a4a] hover:text-[#0084a6] opacity-80 hover:opacity-100 transition-all duration-150"
                                        onclick="handleGroupAdd('${categoryKey}', '${subKey}')"
                                        title="הוסף קבוצת תבניות"
                                        aria-label="הוסף קבוצת תבניות">
                                    ${getIcon('plus', 'w-4 h-4 sm:w-5 sm:h-5')}
                                </button>
                            </div>
                        </div>
                        <p class="text-sm sm:text-base text-[#b3b3b3] text-right">
                            סמן את המשפטים, מלא את השדות הדינמיים, והצפייה המקדימה תתעדכן מיידית.
                        </p>
    </div>

                    <!-- רשימת התבניות - גלילה (flex-grow) - Dynamic content -->
                    <div id="templateList" class="space-y-[2px] sm:space-y-[6px] lg:space-y-[14px] overflow-y-auto pr-2 sm:pr-4 flex-grow scrollable-content">
                        <div class="text-center py-10">
                            <p class="text-[#4a4a4a] text-lg">טוען תבניות...</p>
                        </div>
                    </div>

                    <!-- הודעת סטטוס - מוצגת במרכז המסך -->
                    <div id="message" class="copy-message text-center p-3 rounded-lg font-medium" role="alert"></div>
                    
                </div>
            </div>

            <!-- 1/3 ימני: תצוגה מקדימה - Static -->
            <div id="previewPanel" class="lg:col-span-1 w-full mb-6 sm:mb-8 lg:mb-0 order-2 lg:sticky lg:top-8">
                <div class="bg-[#1f1f1f] rounded-2xl shadow-sm border border-[#2e2e2e] p-4 sm:p-6 lg:p-8 flex flex-col lg:h-[95vh]">
                    <!-- Preview Title with Copy Icon -->
                    <div class="flex items-center justify-between border-b border-[#2e2e2e] pb-3 mb-4 sm:mb-6 flex-shrink-0">
                        <h2 class="text-xl sm:text-2xl font-semibold text-[#0084a6] text-right flex-1" style="font-size: 1.375rem;">
                            תצוגה מקדימה ואיסוף
                        </h2>
                        <div id="previewCopyIcon" class="p-1.5 sm:p-2 rounded-full text-[#4a4a4a] hover:text-[#0084a6] hover:bg-[#1a1a1a] transition-all duration-150 cursor-pointer opacity-30" onclick="handleCopy()" role="button" tabindex="0" title="העתק ללוח הגזירים" onkeydown="if(event.key === 'Enter' || event.key === ' ') { event.preventDefault(); handleCopy(); }">
                            ${getIcon('clipboard', 'w-5 h-5 sm:w-6 sm:h-6')}
                        </div>
                    </div>
                    
                    <!-- תצוגת התוכן המורכב -->
                    <div id="previewContent" class="text-sm sm:text-base whitespace-pre-wrap text-[#b3b3b3] min-h-64 mb-4 sm:mb-6 p-3 sm:p-4 bg-[#1a1a1a] rounded-xl border border-[#2e2e2e] overflow-auto flex-grow text-right scrollable-content">
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
        templateList.innerHTML = '<p class="text-center text-[#4a4a4a] mt-10">אין קבוצות תבניות. לחץ על "הוסף קבוצת תבניות" כדי להתחיל.</p>';
        return;
    }
    
    // Clear cache when page is rendered (in case data changed)
    templateStructureCache.clear();
    
    // יצירת HTML עבור כל קבוצות התבניות
    const allGroupsHtml = subcategory.groups.map((group, index) => 
        generateTemplateGroupHtml(group, categoryKey, subKey, index)
    ).join('<div class="h-[6px] sm:h-[14px] lg:h-[22px]"></div>');
    
    templateList.innerHTML = allGroupsHtml.length > 0 ? allGroupsHtml : '<p class="text-center text-[#4a4a4a] mt-10">אין קבוצות תבניות. לחץ על "הוסף קבוצת תבניות" כדי להתחיל.</p>';
    
    // Initialize events and preview after dynamic content is rendered
    initTemplateEditorEvents();
    updatePreview();
}


// --- לוגיקת Element Builder (CRUD בתוך המודל) ---

/**
 * פונקציה לבניית ממשק ניהול האלמנטים במודל
 * @param {Array} elements - מערך האלמנטים הנוכחי לעריכה/הוספה
 */
function renderElementManagerHtml(elements) {
    const elementsHtml = elements.map((el, index) => {
        let detailsHtml = '';
        let color = 'bg-[#1a1a1a]';
        let title = '';

            switch (el.type) {
                case 'text':
                    color = 'bg-[#1a1a1a]';
                    title = 'טקסט סטטי';
                    // משתמשים ב-el.value לצורך הצגת התוכן הנוכחי
                    const textareaId = 'edit-val-' + index;
                    const textareaValue = escapeHtml(el.value || '');
                    detailsHtml = '<textarea id="' + textareaId + '" rows="1" class="w-full p-2.5 sm:p-3 border border-[#2e2e2e] rounded-lg resize-none text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#0084a6] focus:border-[#0084a6] transition-all duration-150" placeholder="הכנס טקסט קבוע">' + textareaValue + '</textarea>';
                    break;
                case 'input':
                    color = 'bg-[#1a1a1a]';
                    title = 'שדה קלט (חופשי)';
                    const inputPhId = 'edit-ph-' + index;
                    const inputWId = 'edit-w-' + index;
                    const placeholderValue = escapeAttr(el.placeholder || '');
                    const widthValue = el.width || 10;
                    detailsHtml = '<div class="flex flex-col sm:flex-row gap-2 sm:gap-4 space-x-reverse">' +
                        '<label class="block flex-1 text-sm sm:text-base">Placeholder: <input type="text" id="' + inputPhId + '" value="' + placeholderValue + '" class="w-full p-2.5 sm:p-3 border border-[#2e2e2e] rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#0084a6] focus:border-[#0084a6] transition-all duration-150" /></label>' +
                        '<label class="block sm:w-1/4 text-sm sm:text-base">רוחב (תווים): <input type="number" id="' + inputWId + '" value="' + widthValue + '" min="1" max="50" class="w-full p-2.5 sm:p-3 border border-[#2e2e2e] rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#0084a6] focus:border-[#0084a6] transition-all duration-150" /></label>' +
                        '</div>';
                    break;
                case 'select':
                    color = 'bg-[#1a1a1a]';
                    title = 'רשימה נפתחת (Dropdown)';
                    const textareaOptId = 'edit-opt-' + index;
                    const optionsValue = escapeHtml((el.options || []).join('\n'));
                    detailsHtml = '<label class="block text-sm sm:text-base">אפשרויות (כל אחת בשורה חדשה):</label>' +
                        '<textarea id="' + textareaOptId + '" rows="3" class="w-full p-2.5 sm:p-3 border border-[#2e2e2e] rounded-lg resize-none text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#0084a6] focus:border-[#0084a6] transition-all duration-150">' + optionsValue + '</textarea>';
                    break;
            }

        const liId = 'el-' + index;
        const elementNum = index + 1;
        const arrowUpIcon = getIcon('arrow-up', 'w-4 h-4');
        const arrowDownIcon = getIcon('arrow-down', 'w-4 h-4');
        const errorIcon = getIcon('error', 'w-4 h-4');
        return '<li id="' + liId + '" class="element-item p-3 sm:p-4 ' + color + ' rounded-xl border border-[#2e2e2e] shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-0 mb-3">' +
            '<div class="flex-grow space-y-2 w-full sm:w-auto">' +
            '<strong class="text-sm sm:text-base font-semibold block border-b border-[#2e2e2e] pb-1.5 text-[#b3b3b3]">' + title + ' (אלמנט #' + elementNum + ')</strong>' +
            detailsHtml +
            '</div>' +
            '<div class="flex flex-row sm:flex-col space-x-1 sm:space-x-0 space-y-0 sm:space-y-1 mr-0 sm:mr-4 self-end sm:self-auto">' +
            '<button onclick="moveElement(' + index + ', \'up\')" class="p-1.5 sm:p-2 rounded-full hover:bg-[#1a1a1a] text-[#4a4a4a] hover:text-[#0084a6] opacity-70 hover:opacity-100 transition-all duration-150" title="הזז למעלה">' + arrowUpIcon + '</button>' +
            '<button onclick="moveElement(' + index + ', \'down\')" class="p-1.5 sm:p-2 rounded-full hover:bg-[#1a1a1a] text-[#4a4a4a] hover:text-[#0084a6] opacity-70 hover:opacity-100 transition-all duration-150" title="הזז למטה">' + arrowDownIcon + '</button>' +
            '<button onclick="deleteElement(' + index + ')" class="p-1.5 sm:p-2 rounded-full hover:bg-[#1a1a1a] text-[#4a4a4a] hover:text-[#0084a6] opacity-70 hover:opacity-100 transition-all duration-150" title="מחק אלמנט">' + errorIcon + '</button>' +
            '</div>' +
            '</li>';
    }).join('');

    const emptyMessage = '<p class="text-center text-[#4a4a4a] italic p-3 sm:p-4 border border-dashed border-[#2e2e2e] rounded-xl text-sm sm:text-base">המשפט ריק. הוסף רכיב כדי להתחיל.</p>';
    const elementsList = '<ul id="element-list" class="divide-y divide-[#262626]">' + elementsHtml + '</ul>';
    const plusIcon = getIcon('plus', 'w-4 h-4');
    const contentHtml = elementsHtml.length === 0 ? emptyMessage : elementsList;
    return '<div id="element-manager-ui" class="space-y-4">' +
        contentHtml +
        '<div class="flex flex-col sm:flex-row justify-start gap-2 sm:gap-3 space-x-reverse border-t border-[#2e2e2e] pt-3 sm:pt-4">' +
        '<button onclick="addElement(\'text\')" class="py-2.5 px-4 sm:py-2.5 sm:px-5 bg-[#0084a6] text-white rounded-lg hover:bg-[#006b85] transition-all duration-150 text-sm sm:text-base font-semibold shadow-sm flex items-center justify-center gap-2">' + plusIcon + ' טקסט קבוע</button>' +
        '<button onclick="addElement(\'input\')" class="py-2.5 px-4 sm:py-2.5 sm:px-5 bg-[#0084a6] text-white rounded-lg hover:bg-[#006b85] transition-all duration-150 text-sm sm:text-base font-semibold shadow-sm flex items-center justify-center gap-2">' + plusIcon + ' שדה קלט</button>' +
        '<button onclick="addElement(\'select\')" class="py-2.5 px-4 sm:py-2.5 sm:px-5 bg-[#0084a6] text-white rounded-lg hover:bg-[#006b85] transition-all duration-150 text-sm sm:text-base font-semibold shadow-sm flex items-center justify-center gap-2">' + plusIcon + ' רשימה נפתחת</button>' +
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
        
    }, 'שמור ועדכן מבנה', 'bg-[#0084a6] hover:bg-[#006b85]');
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
    const allSpans = Array.from(contentContainer.querySelectorAll('span.whitespace-pre-wrap'));
    const textSpanMap = new Map();
    
    // Map text spans to their element indices (assumes order matches)
    let spanIndex = 0;
    for (let i = 0; i < originalTemplate.elements.length; i++) {
        if (originalTemplate.elements[i].type === 'text') {
            if (spanIndex < allSpans.length) {
                textSpanMap.set(i, allSpans[spanIndex]);
                spanIndex++;
            }
        }
    }
    
    // עובר על האלמנטים המקוריים בסדר הנכון (0, 1, 2, ...) ובונה את המשפט
    // זה מבטיח שסדר הערכים (מספריים וטקסט) תואם בדיוק לסדר המקורי
    // מוסיף רווח יחיד בין כל אלמנט
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
                // הסר רווחים מיותרים מהתחלה וסוף הטקסט כדי למנוע רווחים כפולים
                fullSentence += textSpan.textContent.trim();
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
                // הסר רווחים מיותרים מהתחלה וסוף כדי למנוע רווחים כפולים
                fullSentence += value.trim();
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
        previewContent.textContent = text;
        previewContent.classList.remove('text-[#4a4a4a]');
        previewContent.classList.add('text-[#b3b3b3]');
        // Enable icon - remove opacity, change color
        previewCopyIcon.classList.remove('text-[#4a4a4a]', 'opacity-30');
        previewCopyIcon.classList.add('text-[#0084a6]', 'opacity-100');

        if (isFromDynamicElement) {
            // להציג הודעה קצרה ללא טיימר אם העדכון הגיע משדה קלט
            const msg = document.getElementById('message');
            if (msg) {
                msg.className = msg.className.replace(' show', '');
            }
        }
    } else {
        previewContent.textContent = 'לא נבחר טקסט לתצוגה מקדימה...';
        previewContent.classList.remove('text-[#b3b3b3]');
        previewContent.classList.add('text-[#4a4a4a]');
        // Disable icon visually - add opacity, change color
        previewCopyIcon.classList.remove('text-[#0084a6]', 'opacity-100');
        previewCopyIcon.classList.add('text-[#4a4a4a]', 'opacity-30');
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
        previewCopyIcon.classList.remove('text-[#0084a6]', 'text-[#4a4a4a]');
        previewCopyIcon.classList.add('text-[#0084a6]'); // Primary accent color for feedback
    }

    try {
        // שימוש ב-navigator.clipboard.writeText - modern API
        await navigator.clipboard.writeText(textToCopy);
        
        showMessage(`${getIcon('check', 'w-5 h-5 inline')} הטקסט הועתק בהצלחה ללוח הגזירים!`, 'success');
        
        // Visual feedback: keep green color briefly, then return to normal
        if (previewCopyIcon) {
            setTimeout(() => {
                if (previewCopyIcon) {
                    previewCopyIcon.classList.remove('text-[#0084a6]');
                    previewCopyIcon.classList.add('text-[#0084a6]', 'opacity-100');
                }
            }, 1000);
        }
        
        // DO NOT reset checkboxes or call updatePreview()
        // Selection state must remain unchanged

    } catch (err) {
        console.error('Failed to copy text: ', err);
        
        // Reset icon color on error before fallback
        if (previewCopyIcon) {
            previewCopyIcon.classList.remove('text-[#0084a6]');
            previewCopyIcon.classList.add('text-[#0084a6]', 'opacity-100');
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
                    previewCopyIcon.classList.remove('text-[#0084a6]', 'text-[#4a4a4a]');
                    previewCopyIcon.classList.add('text-[#0084a6]');
                    setTimeout(() => {
                        if (previewCopyIcon) {
                            previewCopyIcon.classList.remove('text-[#0084a6]');
                            previewCopyIcon.classList.add('text-[#0084a6]', 'opacity-100');
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
                previewCopyIcon.classList.remove('text-[#0084a6]');
                previewCopyIcon.classList.add('text-[#0084a6]', 'opacity-100');
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
        <label for="categoryName" class="block text-sm sm:text-base font-medium text-[#b3b3b3] mb-2">שם הקטגוריה החדשה:</label>
        <input type="text" id="categoryName" placeholder="הכנס שם קטגוריה (כגון 'הפלות')" class="w-full p-2.5 sm:p-3 border border-[#2e2e2e] rounded-lg focus:ring-2 focus:ring-[#0084a6] focus:border-[#0084a6] text-sm sm:text-base transition-all duration-150 mb-4" />
        <label for="categorySubtitle" class="block text-sm sm:text-base font-medium text-[#b3b3b3] mb-2" style="font-size: 0.875rem;">כותרת משנה (אופציונלי):</label>
        <input type="text" id="categorySubtitle" placeholder="הכנס כותרת משנה או השאר ריק" class="w-full p-2.5 sm:p-3 border border-[#2e2e2e] rounded-lg focus:ring-2 focus:ring-[#0084a6] focus:border-[#0084a6] text-sm sm:text-base transition-all duration-150" />
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
        <label for="categoryNameEdit" class="block text-sm sm:text-base font-medium text-[#b3b3b3] mb-2">שם חדש לקטגוריה:</label>
        <input type="text" id="categoryNameEdit" value="${escapeAttr(currentName)}" class="w-full p-2.5 sm:p-3 border border-[#2e2e2e] rounded-lg focus:ring-2 focus:ring-[#0084a6] focus:border-[#0084a6] text-sm sm:text-base transition-all duration-150 mb-4" />
        <label for="categorySubtitleEdit" class="block text-sm sm:text-base font-medium text-[#b3b3b3] mb-2" style="font-size: 0.875rem;">כותרת משנה (אופציונלי):</label>
        <input type="text" id="categorySubtitleEdit" value="${escapeAttr(currentSubtitle)}" placeholder="הכנס כותרת משנה או השאר ריק" class="w-full p-2.5 sm:p-3 border border-[#2e2e2e] rounded-lg focus:ring-2 focus:ring-[#0084a6] focus:border-[#0084a6] text-sm sm:text-base transition-all duration-150" />
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
        <label for="subName" class="block text-sm sm:text-base font-medium text-[#b3b3b3] mb-2">שם תת-הקטגוריה החדשה:</label>
        <input type="text" id="subName" placeholder="הכנס שם תת-קטגוריה (כגון 'סקר טרימסטר שני')" class="w-full p-2.5 sm:p-3 border border-[#2e2e2e] rounded-lg focus:ring-2 focus:ring-[#0084a6] focus:border-[#0084a6] text-sm sm:text-base transition-all duration-150" />
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
        <label for="subNameEdit" class="block text-sm sm:text-base font-medium text-[#b3b3b3] mb-2">שם חדש לתת-קטגוריה:</label>
        <input type="text" id="subNameEdit" value="${escapeAttr(currentName)}" class="w-full p-2.5 sm:p-3 border border-[#2e2e2e] rounded-lg focus:ring-2 focus:ring-[#0084a6] focus:border-[#0084a6] text-sm sm:text-base transition-all duration-150" />
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
        <label for="groupTitleEdit" class="block text-sm sm:text-base font-medium text-[#b3b3b3] mb-2">שם חדש לקבוצה:</label>
        <input type="text" id="groupTitleEdit" value="${escapeAttr(currentTitle)}" class="w-full p-2.5 sm:p-3 border border-[#2e2e2e] rounded-lg focus:ring-2 focus:ring-[#0084a6] focus:border-[#0084a6] text-sm sm:text-base transition-all duration-150" />
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
            <div class="border border-[#2e2e2e] rounded-lg p-4 hover:border-[#0084a6] hover:bg-[#1a1a1a] transition-all duration-150 cursor-pointer mb-3 predefined-template-card" 
                 onclick="selectPredefinedTemplate('${categoryKey}', '${subKey}', ${index}, event)"
                 data-template-index="${index}">
                <div class="flex items-start justify-between gap-3">
                    <div class="flex-1">
                        <h4 class="text-base font-semibold text-[#b3b3b3] mb-1">${escapeHtml(template.name)}</h4>
                        <p class="text-sm text-[#4a4a4a] mb-2">${escapeHtml(template.description)}</p>
                        <div class="text-xs text-[#4a4a4a] bg-[#0a0a0a] p-2 rounded border border-[#2e2e2e] font-mono">
                            ${escapeHtml(previewText)}
                        </div>
                    </div>
                    <div class="text-[#0084a6] flex-shrink-0">
                        ${getIcon('arrow-left', 'w-5 h-5')}
                    </div>
                </div>
            </div>
        `;
    }).join('');
    
    const contentHtml = `
        <div class="mb-4">
            <p class="text-sm text-[#b3b3b3] mb-4">בחר תבנית מוגדרת מראש להוספה לקבוצה:</p>
            <div class="max-h-96 overflow-y-auto scrollable-content">
                ${templatesListHtml}
            </div>
        </div>
        <div class="mt-4">
            <label for="predefinedGroupSelect" class="block text-sm sm:text-base font-medium text-[#b3b3b3] mb-2">בחר קבוצה להוספת התבנית:</label>
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
 * פונקציה לבחירת תבנית מוגדרת מראש מהרשימה
 */
function selectPredefinedTemplate(categoryKey, subKey, templateIndex, event) {
    window.currentPredefinedTemplateIndex = templateIndex;
    
    // עדכון ויזואלי - הסרת בחירה קודמת והוספת בחירה חדשה
    document.querySelectorAll('.predefined-template-card').forEach(el => {
        el.classList.remove('border-[#0084a6]', 'bg-[#1a1a1a]');
        el.classList.add('border-[#2e2e2e]');
    });
    
    // מציאת האלמנט הנבחר לפי data-template-index
    const selectedCard = document.querySelector(`[data-template-index="${templateIndex}"]`);
    if (selectedCard) {
        selectedCard.classList.add('border-[#0084a6]', 'bg-[#1a1a1a]');
        selectedCard.classList.remove('border-[#2e2e2e]');
    }
}

async function handleGroupAdd(categoryKey, subKey) {
    const subcategory = templatesData[categoryKey].subcategories[subKey];
    const contentHtml = `
        <label for="groupTitleAdd" class="block text-sm sm:text-base font-medium text-[#b3b3b3] mb-2">שם קבוצת התבניות החדשה:</label>
        <input type="text" id="groupTitleAdd" placeholder="הכנס שם קבוצה (כגון 'בדיקות דם לאחר לידה')" class="w-full p-2.5 sm:p-3 border border-[#2e2e2e] rounded-lg focus:ring-2 focus:ring-[#0084a6] focus:border-[#0084a6] text-sm sm:text-base transition-all duration-150" />
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
                    <h2 class="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#f5f5f5] pb-1 text-right">
                    בחירת קטגוריה ראשית
                </h2>
                    <p class="text-sm sm:text-base text-[#b3b3b3] mt-2">
                    לחץ על קטגוריה כדי לעבור לבחירת תבניות או נהל את הקטגוריות הקיימות.
                </p>
            </div>
            <button class="w-full sm:w-auto py-2.5 px-5 sm:py-2.5 sm:px-6 bg-[#0084a6] text-white font-semibold rounded-lg shadow-sm hover:bg-[#006b85] transition-all duration-150 flex items-center justify-center space-x-2 space-x-reverse"
                    onclick="handleCategoryAdd()">
                ${getIcon('plus', 'w-5 h-5')}
                <span>הוסף קטגוריה חדשה</span>
            </button>
        </div>
        
        <div id="categoriesGrid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 xl:gap-10 p-4 sm:p-6">
            <div class="text-center py-10">
                <p class="text-[#4a4a4a] text-lg">טוען קטגוריות...</p>
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
    
    const cardClasses = "group nav-card bg-[#1f1f1f] p-4 sm:p-6 lg:p-8 rounded-2xl shadow-sm border border-[#2e2e2e] hover:bg-[#1a1a1a] transition-all duration-200 cursor-pointer text-right flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0";

    let cardsHtml = '';
    
    if (Object.keys(templatesData).length === 0) {
        cardsHtml = '<div class="col-span-full text-center py-10"><p class="text-[#4a4a4a] text-base">אין קטגוריות. לחץ על "הוסף קטגוריה חדשה" כדי להתחיל.</p></div>';
    } else {
        Object.keys(templatesData).forEach(key => {
            const category = templatesData[key];
            const subtitle = category.subtitle || '';
            cardsHtml += `
                <div class="${cardClasses}" onclick="navigateToSubcategories('${key}')">
                    <div class="flex-1 min-w-0">
                        <h3 class="text-lg sm:text-xl lg:text-2xl font-semibold text-[#f5f5f5] mb-1">${escapeHtml(category.name)}</h3>
                        ${subtitle ? `<p class="text-sm sm:text-base text-[#4a4a4a]">${escapeHtml(subtitle)}</p>` : ''}
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
                    <h2 class="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#f5f5f5] pb-1 text-right">
                    בחירת תת-קטגוריה
                </h2>
                    <p class="text-sm sm:text-base text-[#b3b3b3] mt-2">
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
                    <h2 class="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#f5f5f5] pb-1 text-right">
                    בחירת תת-קטגוריה
                </h2>
                    <p class="text-sm sm:text-base text-[#b3b3b3] mt-2">
                    לחץ על תת-קטגוריה כדי להתחיל לערוך תבניות או נהל את התת-קטגוריות הקיימות.
                </p>
            </div>
            <button class="w-full sm:w-auto py-2.5 px-5 sm:py-2.5 sm:px-6 bg-[#0084a6] text-white font-semibold rounded-lg shadow-sm hover:bg-[#006b85] transition-all duration-150 flex items-center justify-center space-x-2 space-x-reverse"
                    onclick="handleSubcategoryAdd('${categoryKey}')">
                ${getIcon('plus', 'w-5 h-5')}
                <span>הוסף תת-קטגוריה חדשה</span>
            </button>
        </div>
        
        <div id="subcategoriesGrid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 xl:gap-10 p-4 sm:p-6">
            <div class="text-center py-10">
                <p class="text-[#4a4a4a] text-lg">טוען תת-קטגוריות...</p>
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
    
    const cardClasses = "group nav-card bg-[#1f1f1f] p-4 sm:p-6 lg:p-8 rounded-2xl shadow-sm border border-[#2e2e2e] hover:bg-[#1a1a1a] transition-all duration-200 cursor-pointer text-right flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0";

    let cardsHtml = '';
    
    const subcategories = Object.keys(category.subcategories);
    if (subcategories.length === 0) {
        cardsHtml = '<div class="col-span-full text-center py-10"><p class="text-[#4a4a4a] text-base">אין תת-קטגוריות. לחץ על "הוסף תת-קטגוריה חדשה" כדי להתחיל.</p></div>';
    } else {
        subcategories.forEach(subKey => {
            const subcategory = category.subcategories[subKey];
            
            cardsHtml += `
                <div class="${cardClasses}" onclick="navigateToTemplateEditor('${categoryKey}', '${subKey}')">
                    <div class="flex-1 min-w-0">
                        <h3 class="text-lg sm:text-xl lg:text-2xl font-semibold text-[#f5f5f5]">${escapeHtml(subcategory.name)}</h3>
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
        <div class="bg-[#1f1f1f] p-3 sm:p-4 lg:p-6 rounded-2xl shadow-sm border border-[#2e2e2e] flex flex-col space-y-2 text-sm sm:text-base text-[#f5f5f5]">
            <p class="font-semibold text-base sm:text-lg lg:text-xl text-[#0084a6] border-b border-[#2e2e2e] pb-2">דוגמה למשפט דינמי</p>
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
        <!-- 1. Hero Section - Full Width Background, Constrained Content -->
        <section class="hero-medical-static w-full py-16 sm:py-24 md:py-32 lg:py-48 mb-8 sm:mb-12 lg:mb-16 rounded-2xl">
            <div class="max-w-7xl xl:max-w-[90rem] 2xl:max-w-[100rem] mx-auto px-10 sm:px-12 lg:px-16">
                <div class="lg:grid lg:grid-cols-12 lg:gap-8 xl:gap-12 items-center text-right">
                    
                    <!-- Hero Content -->
                    <div class="lg:col-span-7 xl:col-span-8">
                        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#f5f5f5] mb-4 sm:mb-6 leading-tight text-right">
                            בנייה, ניהול והעתקה מיידית של תבניות רפואיות
                        </h1>
                        <p class="text-lg sm:text-xl text-[#b3b3b3] mb-6 sm:mb-8 text-right" style="white-space: normal; word-wrap: break-word;">
                            מערכת מתקדמת ליצירת משפטים דינמיים לשימוש יומיומי (מיילים, SMS, סיכום ביקור). חסוך שעות עבודה על ידי אוטומציה של תוכן משתנה.
                        </p>
                        <div class="flex flex-col sm:flex-row justify-start sm:space-x-4 sm:space-x-reverse space-y-3 sm:space-y-0">
                            <button onclick="navigateToCategories()" 
                                    class="w-full sm:w-auto py-3 px-6 sm:px-8 bg-[#0084a6] text-white text-base sm:text-lg font-semibold rounded-xl shadow-sm hover:bg-[#006b85] transition-all duration-200 flex items-center justify-center gap-2">
                                ${getIcon('rocket', 'w-5 h-5')} התחל עריכת תבניות
                            </button>
                            <a href="#section-features" 
                               class="w-full sm:w-auto py-3 px-6 sm:px-8 border border-[#2e2e2e] text-[#b3b3b3] text-base sm:text-lg font-semibold rounded-xl shadow-sm hover:bg-[#1a1a1a] hover:border-[#404040] transition-all duration-200 text-center flex items-center justify-center gap-2">
                                ${getIcon('lightbulb', 'w-5 h-5')} למידע נוסף
                            </a>
                        </div>
                    </div>
                    
                    <!-- Hero Illustration/Icon -->
                    <div class="mt-12 lg:mt-0 lg:col-span-5 xl:col-span-4 flex justify-center lg:justify-center">
                        <div class="text-[#4a4a4a] hover:text-[#0084a6] transition-colors duration-150 w-36 h-36 sm:w-44 sm:h-44 lg:w-52 lg:h-52 xl:w-64 xl:h-64">
                            ${getIcon('document', 'w-full h-full')}
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 2. Section 1 – What the system does -->
        <section id="section-features" class="section-bg-1 w-full text-right rounded-2xl py-16 sm:py-20 lg:py-24 my-8 sm:my-12 lg:my-16">
            <div class="max-w-7xl xl:max-w-[90rem] 2xl:max-w-[100rem] mx-auto px-10 sm:px-12 lg:px-16">
                <h2 class="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#f5f5f5] mb-3 sm:mb-4">
                    הכוח של אוטומציית טקסט רפואי
                </h2>
                <p class="text-base sm:text-lg text-[#b3b3b3] mb-8 sm:mb-10 lg:mb-12 max-w-2xl">
                    המערכת נועדה לחסוך זמן קליני יקר על ידי הפיכת טקסט חוזרני לדינמי, מובנה ומוכן לשליחה מיידית.
                </p>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 xl:gap-10">
                    ${features.map(f => `
                        <div class="p-4 sm:p-6 lg:p-8 bg-[#1f1f1f] rounded-2xl shadow-sm border border-[#2e2e2e] text-center  transition-all duration-200">
                            <div class="flex justify-center mb-3 sm:mb-4 text-[#4a4a4a] hover:text-[#0084a6] transition-colors duration-150">${getIcon(f.icon, 'w-12 h-12 sm:w-16 sm:h-16')}</div>
                            <h3 class="text-lg sm:text-xl lg:text-2xl font-semibold text-[#f5f5f5] mb-2">${f.title}</h3>
                            <p class="text-[#b3b3b3] text-sm sm:text-base">${f.desc}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
            
        <!-- 3. Section 2 – Category Management -->
        <section class="section-bg-2 w-full text-right rounded-2xl py-16 sm:py-20 lg:py-24 my-8 sm:my-12 lg:my-16">
            <div class="max-w-7xl xl:max-w-[90rem] 2xl:max-w-[100rem] mx-auto px-10 sm:px-12 lg:px-16">
                <div class="lg:grid lg:grid-cols-12 lg:gap-8 xl:gap-12 items-center">
                    <div class="lg:col-span-7">
                        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#f5f5f5] mb-3 sm:mb-4">
                            מבנה נתונים מסודר וקל לניהול
                        </h2>
                        <p class="text-base sm:text-lg text-[#b3b3b3] mb-4 sm:mb-6">
                            אפשרות ליצור היררכיה ברורה של קטגוריות ראשיות (כגון 'מיילדות' או 'גינקולוגיה'), תתי-קטגוריות (כגון 'טרימסטר ראשון') וקבוצות תבניות, מה שמבטיח נגישות מהירה למידע הנכון. כל השמות והמיקומים ניתנים לעריכה ולמחיקה.
                        </p>
                        <ul class="space-y-2 sm:space-y-3 text-sm sm:text-base text-[#b3b3b3]">
                            <li class="flex items-start space-x-2 space-x-reverse">
                                <span class="text-[#4a4a4a] hover:text-[#0084a6] transition-colors duration-150 mt-1 flex-shrink-0">${getIcon('check', 'w-5 h-5')}</span>
                                <p class="text-[#b3b3b3]"><strong class="font-semibold text-[#f5f5f5]">קטגוריה ראשית:</strong> הרמה הגבוהה ביותר (למשל, "פריון").</p>
                            </li>
                            <li class="flex items-start space-x-2 space-x-reverse">
                                <span class="text-[#4a4a4a] hover:text-[#0084a6] transition-colors duration-150 mt-1 flex-shrink-0">${getIcon('check', 'w-5 h-5')}</span>
                                <p class="text-[#b3b3b3]"><strong class="font-semibold text-[#f5f5f5]">תת-קטגוריה:</strong> פילוח נושאי (למשל, "פרוטוקול IVF").</p>
                            </li>
                            <li class="flex items-start space-x-2 space-x-reverse">
                                <span class="text-[#4a4a4a] hover:text-[#0084a6] transition-colors duration-150 mt-1 flex-shrink-0">${getIcon('check', 'w-5 h-5')}</span>
                                <p class="text-[#b3b3b3]"><strong class="font-semibold text-[#f5f5f5]">קבוצות תבניות:</strong> קיבוץ משפטים בעלי קשר (למשל, "הנחיות לגירוי שחלתי").</p>
                            </li>
                        </ul>
                    </div>
                    <div class="lg:col-span-5 mt-8 lg:mt-0 flex justify-center">
                        <div class="text-[#0084a6] w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48">
                            ${getIcon('folder', 'w-full h-full')}
                        </div>
                    </div>
                </div>
            </div>
        </section>
            
        <!-- 4. Section 3 – Dynamic Template Editor -->
        <section class="section-bg-3 w-full text-right rounded-2xl py-16 sm:py-20 lg:py-24 my-8 sm:my-12 lg:my-16">
            <div class="max-w-7xl xl:max-w-[90rem] 2xl:max-w-[100rem] mx-auto px-10 sm:px-12 lg:px-16">
                <div class="lg:grid lg:grid-cols-12 lg:gap-8 xl:gap-12 items-center">
                    <div class="lg:col-span-5 order-2 lg:order-1 mt-8 lg:mt-0 flex justify-center">
                        ${templateExample}
                    </div>
                    <div class="lg:col-span-7 order-1 lg:order-2">
                        <h2 class="text-3xl font-semibold text-[#f5f5f5] mb-4">
                            עורך תבניות דינמי: הפסקת העתק-הדבק
                        </h2>
                        <p class="text-lg text-[#b3b3b3] mb-6">
                            בניית משפטים אינה דורשת יותר קיצורי דרך או השלמות ידניות. המערכת מציעה שלושה רכיבי יסוד להרכבה גמישה של כל הודעה:
                        </p>
                        <ul class="space-y-2 sm:space-y-3 text-sm sm:text-base text-[#b3b3b3]">
                            <li class="flex items-start space-x-2 space-x-reverse">
                                <span class="text-[#0084a6] mt-1 flex-shrink-0">${getIcon('circle-blue', 'w-5 h-5')}</span>
                                <p><strong class="font-semibold">טקסט סטטי (FreeText):</strong> החלק הקבוע במשפט.</p>
                            </li>
                            <li class="flex items-start space-x-2 space-x-reverse">
                                <span class="text-[#0084a6] mt-1 flex-shrink-0">${getIcon('circle-green', 'w-5 h-5')}</span>
                                <p><strong class="font-semibold">שדה קלט (InputField):</strong> מילוי טקסט חופשי (תאריך, מינון, שם).</p>
                            </li>
                            <li class="flex items-start space-x-2 space-x-reverse">
                                <span class="text-[#0084a6] mt-1 flex-shrink-0">${getIcon('circle-yellow', 'w-5 h-5')}</span>
                                <p><strong class="font-semibold">רשימה נפתחת (Dropdown):</strong> בחירה מתוך אפשרויות קבועות מראש.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
            
        <!-- 5. Section 4 – Preview Panel -->
        <section class="section-bg-4 w-full text-right rounded-2xl py-16 sm:py-20 lg:py-24 my-8 sm:my-12 lg:my-16">
            <div class="max-w-7xl xl:max-w-[90rem] 2xl:max-w-[100rem] mx-auto px-10 sm:px-12 lg:px-16">
                <div class="lg:grid lg:grid-cols-12 lg:gap-8 xl:gap-12 items-center">
                    <div class="lg:col-span-7">
                        <h2 class="text-3xl font-semibold text-[#f5f5f5] mb-4">
                            תצוגה מקדימה וסנכרון בזמן אמת
                        </h2>
                        <p class="text-lg text-[#b3b3b3] mb-6">
                            אין צורך לעבור בין מסכים. בזמן שאתה בוחר משפטים וממלא שדות דינמיים, הטקסט המאוחד מוצג מיד בלוח הצדדי. זה מבטיח דיוק ומונע טעויות לפני שלב ההעתקה הסופי.
                        </p>
                        <div class="bg-[#1a1a1a] p-3 sm:p-4 lg:p-6 rounded-xl border border-[#2e2e2e]">
                            <strong class="text-sm sm:text-base text-[#0084a6]">כלל הזהב:</strong> <span class="text-sm sm:text-base text-[#b3b3b3]">כל קלט (טקסט, מספר, בחירה) משתקף מיידית בתוצר הסופי.</span>
                        </div>
                    </div>
                    <div class="lg:col-span-5 mt-8 lg:mt-0 flex justify-center">
                        <div class="text-[#0084a6] w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48">
                            ${getIcon('eyes', 'w-full h-full')}
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 6. Section 5 – Copy-to-Clipboard Automation -->
        <section class="section-bg-5 w-full text-right rounded-2xl py-16 sm:py-20 lg:py-24 my-8 sm:my-12 lg:my-16">
            <div class="max-w-7xl xl:max-w-[90rem] 2xl:max-w-[100rem] mx-auto px-10 sm:px-12 lg:px-16">
                <h2 class="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#f5f5f5] mb-3 sm:mb-4">
                    העתקה אוטומטית ומבנה פלט ברור
                </h2>
                <p class="text-base sm:text-lg text-[#b3b3b3] mb-4 sm:mb-6 max-w-2xl">
                    בלחיצת כפתור אחת, כל הטקסטים המאוחדים מועתקים ללוח הגזירים, תוך שמירה על מבנה קריא הכולל הפרדה על ידי כותרות קבוצה.
                </p>
                <ul class="space-y-3 sm:space-y-4 text-[#b3b3b3] grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                    <li class="flex items-start space-x-3 space-x-reverse p-3 sm:p-4 lg:p-6 bg-[#1f1f1f] rounded-xl shadow-sm border border-[#2e2e2e]">
                        <span class="text-lg sm:text-xl text-[#0084a6] mt-1 flex-shrink-0 font-semibold">1.</span>
                        <p class="text-sm sm:text-base"><strong class="font-semibold">קיבוץ אוטומטי:</strong> המשפטים מסודרים אוטומטית תחת כותרות הקבוצה שלהם (למשל, "--- הנחיות פתיחה ---").</p>
                    </li>
                    <li class="flex items-start space-x-3 space-x-reverse p-3 sm:p-4 lg:p-6 bg-[#1f1f1f] rounded-xl shadow-sm border border-[#2e2e2e]">
                        <span class="text-lg sm:text-xl text-[#0084a6] mt-1 flex-shrink-0 font-semibold">2.</span>
                        <p class="text-sm sm:text-base"><strong class="font-semibold">ניקוי הפלט:</strong> כל רכיב דינמי מוחלף בערך שמולא (או טקסט חלופי אם הושאר ריק), ללא קוד או סימנים מבלבלים.</p>
                    </li>
                    <li class="flex items-start space-x-3 space-x-reverse p-3 sm:p-4 lg:p-6 bg-[#1f1f1f] rounded-xl shadow-sm border border-[#2e2e2e]">
                        <span class="text-lg sm:text-xl text-[#0084a6] mt-1 flex-shrink-0 font-semibold">3.</span>
                        <p class="text-sm sm:text-base"><strong class="font-semibold">העתקה מהירה:</strong> שימוש ב-API מתקדם להעתקה מיידית ואיפוס הבחירות מיד לאחר מכן.</p>
                    </li>
                    <li class="flex items-start space-x-3 space-x-reverse p-3 sm:p-4 lg:p-6 bg-[#1f1f1f] rounded-xl shadow-sm border border-[#2e2e2e]">
                        <span class="text-lg sm:text-xl text-[#0084a6] mt-1 flex-shrink-0 font-semibold">4.</span>
                        <p class="text-sm sm:text-base"><strong class="font-semibold">תמיכת מכשירים:</strong> מנגנון fallback מובנה להבטחת העתקה מוצלחת גם בדפדפנים ישנים יותר.</p>
                    </li>
                </ul>
            </div>
        </section>

        <!-- 7. Section 6 – Coming Features -->
        <section class="section-bg-6 w-full text-right rounded-2xl py-16 sm:py-20 lg:py-24 my-8 sm:my-12 lg:my-16 mb-8 sm:mb-12 lg:mb-16">
            <div class="max-w-7xl xl:max-w-[90rem] 2xl:max-w-[100rem] mx-auto px-10 sm:px-12 lg:px-16">
                <h2 class="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#f5f5f5] mb-3 sm:mb-4">
                    תכונות עתידיות בתכנון
                </h2>
                <p class="text-base sm:text-lg text-[#b3b3b3] mb-8 sm:mb-10 lg:mb-12 max-w-2xl">
                    אנו עובדים על הרחבת היכולות של המערכת כדי להפוך אותה לכלי הניהול המקיף ביותר במרפאה.
                </p>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 xl:gap-10">
                    <div class="p-3 sm:p-4 lg:p-6 bg-[#1a1a1a] rounded-xl border border-[#2e2e2e]">
                        <strong class="font-semibold text-sm sm:text-base text-[#f5f5f5]">ייצוא/ייבוא JSON:</strong> <span class="text-sm sm:text-base text-[#b3b3b3]">גיבוי קל ושיתוף של כל מבנה התבניות באמצעות קובץ.</span>
                    </div>
                    <div class="p-3 sm:p-4 lg:p-6 bg-[#1a1a1a] rounded-xl border border-[#2e2e2e]">
                        <strong class="font-semibold text-sm sm:text-base text-[#f5f5f5]">שמירת ענן:</strong> <span class="text-sm sm:text-base text-[#b3b3b3]">תמיכה בשמירה בענן או במסד נתונים (כגון Firebase) לשימוש בין משתמשים.</span>
                    </div>
                    <div class="p-3 sm:p-4 lg:p-6 bg-[#1a1a1a] rounded-xl border border-[#2e2e2e]">
                        <strong class="font-semibold text-sm sm:text-base text-[#f5f5f5]">ניהול משתמשים:</strong> <span class="text-sm sm:text-base text-[#b3b3b3]">פונקציות לרישום והתחברות עבור מספר רופאים/מזכירות.</span>
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

// Start the application
initializeApp();