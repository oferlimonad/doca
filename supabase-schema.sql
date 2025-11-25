-- Supabase Database Schema for Medical Template Editor
-- Run this SQL in your Supabase SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Categories table
CREATE TABLE IF NOT EXISTS categories (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    key TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Subcategories table
CREATE TABLE IF NOT EXISTS subcategories (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    category_id UUID NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
    key TEXT NOT NULL,
    name TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(category_id, key)
);

-- Template groups table
CREATE TABLE IF NOT EXISTS template_groups (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    subcategory_id UUID NOT NULL REFERENCES subcategories(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    display_order INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Templates table
CREATE TABLE IF NOT EXISTS templates (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    group_id UUID NOT NULL REFERENCES template_groups(id) ON DELETE CASCADE,
    template_key TEXT NOT NULL,
    display_order INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(group_id, template_key)
);

-- Template elements table (stores individual elements within a template)
CREATE TABLE IF NOT EXISTS template_elements (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    template_id UUID NOT NULL REFERENCES templates(id) ON DELETE CASCADE,
    element_order INTEGER NOT NULL,
    element_type TEXT NOT NULL CHECK (element_type IN ('text', 'input', 'select')),
    text_value TEXT,
    input_width INTEGER,
    input_placeholder TEXT,
    select_options JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(template_id, element_order)
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_subcategories_category_id ON subcategories(category_id);
CREATE INDEX IF NOT EXISTS idx_template_groups_subcategory_id ON template_groups(subcategory_id);
CREATE INDEX IF NOT EXISTS idx_templates_group_id ON templates(group_id);
CREATE INDEX IF NOT EXISTS idx_template_elements_template_id ON template_elements(template_id);
CREATE INDEX IF NOT EXISTS idx_template_elements_order ON template_elements(template_id, element_order);

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Triggers to auto-update updated_at
CREATE TRIGGER update_categories_updated_at BEFORE UPDATE ON categories
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_subcategories_updated_at BEFORE UPDATE ON subcategories
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_template_groups_updated_at BEFORE UPDATE ON template_groups
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_templates_updated_at BEFORE UPDATE ON templates
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_template_elements_updated_at BEFORE UPDATE ON template_elements
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Row Level Security (RLS) - Enable for public read/write (adjust based on your auth needs)
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE subcategories ENABLE ROW LEVEL SECURITY;
ALTER TABLE template_groups ENABLE ROW LEVEL SECURITY;
ALTER TABLE templates ENABLE ROW LEVEL SECURITY;
ALTER TABLE template_elements ENABLE ROW LEVEL SECURITY;

-- Policies for public access (adjust based on your authentication requirements)
CREATE POLICY "Allow public read access" ON categories FOR SELECT USING (true);
CREATE POLICY "Allow public insert" ON categories FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public update" ON categories FOR UPDATE USING (true);
CREATE POLICY "Allow public delete" ON categories FOR DELETE USING (true);

CREATE POLICY "Allow public read access" ON subcategories FOR SELECT USING (true);
CREATE POLICY "Allow public insert" ON subcategories FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public update" ON subcategories FOR UPDATE USING (true);
CREATE POLICY "Allow public delete" ON subcategories FOR DELETE USING (true);

CREATE POLICY "Allow public read access" ON template_groups FOR SELECT USING (true);
CREATE POLICY "Allow public insert" ON template_groups FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public update" ON template_groups FOR UPDATE USING (true);
CREATE POLICY "Allow public delete" ON template_groups FOR DELETE USING (true);

CREATE POLICY "Allow public read access" ON templates FOR SELECT USING (true);
CREATE POLICY "Allow public insert" ON templates FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public update" ON templates FOR UPDATE USING (true);
CREATE POLICY "Allow public delete" ON templates FOR DELETE USING (true);

CREATE POLICY "Allow public read access" ON template_elements FOR SELECT USING (true);
CREATE POLICY "Allow public insert" ON template_elements FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public update" ON template_elements FOR UPDATE USING (true);
CREATE POLICY "Allow public delete" ON template_elements FOR DELETE USING (true);

