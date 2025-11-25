// Vercel Serverless Function to inject environment variables
// This function serves the HTML with environment variables injected

export default function handler(req, res) {
    // Only allow GET requests
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    // Read the HTML file
    const fs = require('fs');
    const path = require('path');
    
    try {
        const htmlPath = path.join(process.cwd(), 'index.html');
        let html = fs.readFileSync(htmlPath, 'utf8');

        // Inject environment variables
        const supabaseUrl = process.env.SUPABASE_URL || '';
        const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || '';

        // Replace placeholders in HTML
        html = html.replace('{{SUPABASE_URL}}', supabaseUrl);
        html = html.replace('{{SUPABASE_ANON_KEY}}', supabaseAnonKey);

        // Set content type
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.status(200).send(html);
    } catch (error) {
        console.error('Error reading HTML file:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

