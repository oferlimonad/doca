# Supabase Integration Guide

This guide explains how to set up and deploy the medical template editor with Supabase backend.

## Prerequisites

1. A Supabase account (sign up at https://supabase.com)
2. A Vercel account (sign up at https://vercel.com)
3. Node.js installed locally (for running SQL migrations)

## Setup Steps

### 1. Create Supabase Project

1. Go to https://supabase.com and create a new project
2. Note your project URL and anon key from Settings > API

### 2. Run Database Schema

1. Open your Supabase project dashboard
2. Go to SQL Editor
3. Copy and paste the contents of `supabase-schema.sql`
4. Run the SQL script to create all tables

### 3. Configure Environment Variables

#### For Local Development:
1. Copy `.env.example` to `.env`
2. Fill in your Supabase credentials:
   ```
   SUPABASE_URL=https://your-project.supabase.co
   SUPABASE_ANON_KEY=your-anon-key
   ```

#### For Vercel Deployment:
1. Go to your Vercel project dashboard
2. Navigate to Settings > Environment Variables
3. Add the following variables:
   - `SUPABASE_URL` = your Supabase project URL
   - `SUPABASE_ANON_KEY` = your Supabase anon key

### 4. Update HTML for Environment Variables

The `index.html` file needs to inject environment variables. For Vercel, you can use a serverless function or middleware. For now, you can manually inject them or use a build script.

### 5. Deploy to Vercel

1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will automatically detect it as a static site
4. Add environment variables in Vercel dashboard
5. Deploy

## Data Migration

If you have existing data in the `templatesData` object in `script.js`, you'll need to migrate it to Supabase. You can:

1. Use the Supabase dashboard to manually insert data
2. Create a migration script
3. Use the Supabase API to bulk insert

## Testing

After deployment:
1. Verify that data loads from Supabase on page load
2. Test creating a new category
3. Test creating a new subcategory
4. Test creating a template group
5. Test creating a template with elements
6. Verify that all changes persist after page refresh

## Troubleshooting

### Data not loading:
- Check browser console for errors
- Verify Supabase credentials are correct
- Check Supabase dashboard for RLS policies
- Verify tables exist and have data

### Changes not saving:
- Check browser console for errors
- Verify RLS policies allow INSERT/UPDATE/DELETE
- Check network tab for failed requests

### RTL/Order issues:
- Verify `element_order` is being set correctly
- Check that elements are sorted by `element_order` when loading
- Ensure numeric inputs maintain order in the database

## Security Notes

- The current RLS policies allow public read/write access
- For production, implement proper authentication
- Consider adding user-specific data isolation
- Review and tighten RLS policies based on your needs

