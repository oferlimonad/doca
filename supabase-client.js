// Supabase Client Configuration
// This file initializes the Supabase client using window.SUPABASE_URL and window.SUPABASE_ANON_KEY

// Wait for Supabase library to load, then initialize client
(function() {
    let retryCount = 0;
    const maxRetries = 50; // Maximum 5 seconds (50 * 100ms)
    
    function initSupabase() {
        // Check if Supabase library is loaded
        if (typeof supabase === 'undefined') {
            retryCount++;
            if (retryCount < maxRetries) {
                setTimeout(initSupabase, 100);
                return;
            } else {
                console.error('Supabase library failed to load. Check if the CDN script is included in index.html.');
                window.supabaseClient = null;
                return;
            }
        }

        // Get credentials from window object (set in index.html)
        const supabaseUrl = window.SUPABASE_URL;
        const supabaseAnonKey = window.SUPABASE_ANON_KEY;

        // Validate that both values exist and are not placeholders
        if (!supabaseUrl || !supabaseAnonKey || 
            supabaseUrl === 'REPLACE_URL' || supabaseAnonKey === 'REPLACE_KEY' ||
            supabaseUrl === '' || supabaseAnonKey === '') {
            console.error('Supabase client not initialized. Check environment variables.');
            console.error('Please set window.SUPABASE_URL and window.SUPABASE_ANON_KEY in index.html');
            window.supabaseClient = null;
            return;
        }

        // Initialize the client only if both values exist
        try {
            window.supabaseClient = supabase.createClient(supabaseUrl, supabaseAnonKey);
            console.log('✅ Supabase client initialized successfully');
        } catch (error) {
            console.error('❌ Error initializing Supabase client:', error);
            window.supabaseClient = null;
        }
    }

    // Start initialization when window loads
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

