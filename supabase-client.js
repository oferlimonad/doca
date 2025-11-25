// Supabase Client Configuration
// This file initializes the Supabase client using environment variables

// Wait for Supabase library to load, then initialize client
(function() {
    let retryCount = 0;
    const maxRetries = 100; // Maximum 10 seconds (100 * 100ms)
    
    function initSupabase() {
        // Check if Supabase library is loaded
        if (typeof supabase === 'undefined') {
            retryCount++;
            if (retryCount < maxRetries) {
                // Only log every 10 retries to reduce console spam
                if (retryCount % 10 === 0) {
                    console.log(`Waiting for Supabase library to load... (attempt ${retryCount}/${maxRetries})`);
                }
                setTimeout(initSupabase, 100);
                return;
            } else {
                console.error('Supabase library failed to load after maximum retries. Check if the CDN script is included in index.html.');
                window.supabaseClient = null;
                return;
            }
        }

        // Get credentials from environment variables
        const supabaseUrl = window.SUPABASE_URL || '';
        const supabaseAnonKey = window.SUPABASE_ANON_KEY || '';

        if (!supabaseUrl || !supabaseAnonKey) {
            console.warn('Supabase credentials not found. Please set SUPABASE_URL and SUPABASE_ANON_KEY in your .env file or environment variables.');
            // For development, you can set these here temporarily:
            // window.SUPABASE_URL = 'your-supabase-url';
            // window.SUPABASE_ANON_KEY = 'your-anon-key';
            window.supabaseClient = null;
            return;
        }

        // Create and store Supabase client
        try {
            window.supabaseClient = supabase.createClient(supabaseUrl, supabaseAnonKey);
            console.log('✅ Supabase client initialized successfully');
        } catch (error) {
            console.error('❌ Error initializing Supabase client:', error);
            window.supabaseClient = null;
        }
    }

    // Start initialization after a short delay to ensure scripts are loaded
    // Use window.onload to ensure all scripts including Supabase CDN are loaded
    if (window.addEventListener) {
        window.addEventListener('load', function() {
            // Small delay to ensure Supabase CDN script has executed
            setTimeout(initSupabase, 50);
        });
    } else {
        // Fallback for older browsers
        window.onload = function() {
            setTimeout(initSupabase, 50);
        };
    }
})();

