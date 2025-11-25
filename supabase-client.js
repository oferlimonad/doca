// Supabase Client Configuration
// This file initializes the Supabase client using environment variables

// Wait for Supabase library to load, then initialize client
(function() {
    function initSupabase() {
        // Check if Supabase library is loaded
        if (typeof supabase === 'undefined') {
            console.warn('Supabase library not yet loaded, retrying...');
            setTimeout(initSupabase, 100);
            return;
        }

        // Get credentials from environment variables
        // For Vercel, these will be injected via vercel.json rewrite rules
        // For local development, set them in a .env file or directly here
        const supabaseUrl = window.SUPABASE_URL || '';
        const supabaseAnonKey = window.SUPABASE_ANON_KEY || '';

        if (!supabaseUrl || !supabaseAnonKey) {
            console.warn('Supabase credentials not found. Using fallback or local storage.');
            // For development, you can set these here temporarily
            // window.SUPABASE_URL = 'your-url';
            // window.SUPABASE_ANON_KEY = 'your-key';
            window.supabaseClient = null;
            return;
        }

        // Create and store Supabase client
        try {
            window.supabaseClient = supabase.createClient(supabaseUrl, supabaseAnonKey);
            console.log('Supabase client initialized successfully');
        } catch (error) {
            console.error('Error initializing Supabase client:', error);
            window.supabaseClient = null;
        }
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSupabase);
    } else {
        initSupabase();
    }
})();

