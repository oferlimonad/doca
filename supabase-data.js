// Supabase Data Layer
// This file contains all functions for reading and writing data to Supabase

// Get Supabase client (will be set when client initializes)
function getSupabase() {
    return window.supabaseClient;
}

// ============================================
// DATA LOADING FUNCTIONS
// ============================================

/**
 * Load all data from Supabase and convert to the expected format
 * Returns data in the same structure as the original templatesData
 */
async function loadAllDataFromSupabase() {
    try {
        const supabase = getSupabase();
        if (!supabase) {
            console.warn('Supabase client not available. Returning empty data structure.');
            return {};
        }
        
        // Load categories
        const { data: categories, error: categoriesError } = await supabase
            .from('categories')
            .select('*')
            .order('created_at', { ascending: true });

        if (categoriesError) throw categoriesError;

        // Load subcategories
        const { data: subcategories, error: subcategoriesError } = await supabase
            .from('subcategories')
            .select('*')
            .order('created_at', { ascending: true });

        if (subcategoriesError) throw subcategoriesError;

        // Load template groups
        const { data: groups, error: groupsError } = await supabase
            .from('template_groups')
            .select('*')
            .order('display_order', { ascending: true });

        if (groupsError) throw groupsError;

        // Load templates
        const { data: templates, error: templatesError } = await supabase
            .from('templates')
            .select('*')
            .order('display_order', { ascending: true });

        if (templatesError) throw templatesError;

        // Load template elements
        const { data: elements, error: elementsError } = await supabase
            .from('template_elements')
            .select('*')
            .order('element_order', { ascending: true });

        if (elementsError) throw elementsError;

        // Build the data structure
        const dataStructure = {};

        // Process categories
        for (const category of categories) {
            dataStructure[category.key] = {
                name: category.name,
                subcategories: {}
            };

            // Process subcategories for this category
            const categorySubcategories = subcategories.filter(sub => sub.category_id === category.id);
            for (const subcategory of categorySubcategories) {
                dataStructure[category.key].subcategories[subcategory.key] = {
                    name: subcategory.name,
                    groups: []
                };

                // Process groups for this subcategory
                const subcategoryGroups = groups.filter(g => g.subcategory_id === subcategory.id);
                for (const group of subcategoryGroups) {
                    const groupData = {
                        title: group.title,
                        templates: []
                    };

                    // Process templates for this group
                    const groupTemplates = templates.filter(t => t.group_id === group.id);
                    for (const template of groupTemplates) {
                        const templateData = {
                            id: template.template_key,
                            elements: []
                        };

                        // Process elements for this template
                        const templateElements = elements.filter(e => e.template_id === template.id);
                        // Sort by element_order to preserve RTL order
                        templateElements.sort((a, b) => a.element_order - b.element_order);

                        for (const element of templateElements) {
                            const elementData = {
                                type: element.element_type
                            };

                            if (element.element_type === 'text') {
                                elementData.value = element.text_value || '';
                            } else if (element.element_type === 'input') {
                                elementData.width = element.input_width || 8;
                                elementData.placeholder = element.input_placeholder || '';
                            } else if (element.element_type === 'select') {
                                elementData.options = element.select_options || [];
                            }

                            templateData.elements.push(elementData);
                        }

                        groupData.templates.push(templateData);
                    }

                    dataStructure[category.key].subcategories[subcategory.key].groups.push(groupData);
                }
            }
        }

        return dataStructure;
    } catch (error) {
        console.error('Error loading data from Supabase:', error);
        showMessage('שגיאה בטעינת הנתונים מהמסד נתונים. נסה לרענן את הדף.', 'error');
        return {};
    }
}

// ============================================
// CATEGORY OPERATIONS
// ============================================

async function createCategory(key, name) {
    try {
        const supabase = getSupabase();
        if (!supabase) throw new Error('Supabase client not available');
        const { data, error } = await supabase
            .from('categories')
            .insert([{ key, name }])
            .select()
            .single();

        if (error) throw error;
        return data;
    } catch (error) {
        console.error('Error creating category:', error);
        throw error;
    }
}

async function updateCategory(categoryId, name) {
    try {
        const supabase = getSupabase();
        if (!supabase) throw new Error('Supabase client not available');
        const { data, error } = await supabase
            .from('categories')
            .update({ name })
            .eq('id', categoryId)
            .select()
            .single();

        if (error) throw error;
        return data;
    } catch (error) {
        console.error('Error updating category:', error);
        throw error;
    }
}

async function deleteCategory(categoryId) {
    try {
        const supabase = getSupabase();
        if (!supabase) throw new Error('Supabase client not available');
        const { error } = await supabase
            .from('categories')
            .delete()
            .eq('id', categoryId);

        if (error) throw error;
    } catch (error) {
        console.error('Error deleting category:', error);
        throw error;
    }
}

// ============================================
// SUBCATEGORY OPERATIONS
// ============================================

async function createSubcategory(categoryId, key, name) {
    try {
        const supabase = getSupabase();
        if (!supabase) throw new Error('Supabase client not available');
        const { data, error } = await supabase
            .from('subcategories')
            .insert([{ category_id: categoryId, key, name }])
            .select()
            .single();

        if (error) throw error;
        return data;
    } catch (error) {
        console.error('Error creating subcategory:', error);
        throw error;
    }
}

async function updateSubcategory(subcategoryId, name) {
    try {
        const supabase = getSupabase();
        if (!supabase) throw new Error('Supabase client not available');
        const { data, error } = await supabase
            .from('subcategories')
            .update({ name })
            .eq('id', subcategoryId)
            .select()
            .single();

        if (error) throw error;
        return data;
    } catch (error) {
        console.error('Error updating subcategory:', error);
        throw error;
    }
}

async function deleteSubcategory(subcategoryId) {
    try {
        const supabase = getSupabase();
        if (!supabase) throw new Error('Supabase client not available');
        const { error } = await supabase
            .from('subcategories')
            .delete()
            .eq('id', subcategoryId);

        if (error) throw error;
    } catch (error) {
        console.error('Error deleting subcategory:', error);
        throw error;
    }
}

// ============================================
// TEMPLATE GROUP OPERATIONS
// ============================================

async function createTemplateGroup(subcategoryId, title, displayOrder = 0) {
    try {
        const supabase = getSupabase();
        if (!supabase) throw new Error('Supabase client not available');
        const { data, error } = await supabase
            .from('template_groups')
            .insert([{ subcategory_id: subcategoryId, title, display_order: displayOrder }])
            .select()
            .single();

        if (error) throw error;
        return data;
    } catch (error) {
        console.error('Error creating template group:', error);
        throw error;
    }
}

async function updateTemplateGroup(groupId, title) {
    try {
        const supabase = getSupabase();
        if (!supabase) throw new Error('Supabase client not available');
        const { data, error } = await supabase
            .from('template_groups')
            .update({ title })
            .eq('id', groupId)
            .select()
            .single();

        if (error) throw error;
        return data;
    } catch (error) {
        console.error('Error updating template group:', error);
        throw error;
    }
}

async function deleteTemplateGroup(groupId) {
    try {
        const supabase = getSupabase();
        if (!supabase) throw new Error('Supabase client not available');
        const { error } = await supabase
            .from('template_groups')
            .delete()
            .eq('id', groupId);

        if (error) throw error;
    } catch (error) {
        console.error('Error deleting template group:', error);
        throw error;
    }
}

// ============================================
// TEMPLATE OPERATIONS
// ============================================

async function createTemplate(groupId, templateKey, displayOrder = 0) {
    try {
        const supabase = getSupabase();
        if (!supabase) throw new Error('Supabase client not available');
        const { data, error } = await supabase
            .from('templates')
            .insert([{ group_id: groupId, template_key: templateKey, display_order: displayOrder }])
            .select()
            .single();

        if (error) throw error;
        return data;
    } catch (error) {
        console.error('Error creating template:', error);
        throw error;
    }
}

async function deleteTemplate(templateId) {
    try {
        const supabase = getSupabase();
        if (!supabase) throw new Error('Supabase client not available');
        const { error } = await supabase
            .from('templates')
            .delete()
            .eq('id', templateId);

        if (error) throw error;
    } catch (error) {
        console.error('Error deleting template:', error);
        throw error;
    }
}

// ============================================
// TEMPLATE ELEMENT OPERATIONS
// ============================================

async function saveTemplateElements(templateId, elements) {
    try {
        const supabase = getSupabase();
        if (!supabase) throw new Error('Supabase client not available');
        
        // First, delete all existing elements for this template
        const { error: deleteError } = await supabase
            .from('template_elements')
            .delete()
            .eq('template_id', templateId);

        if (deleteError) throw deleteError;

        // Then, insert all elements in order (preserving RTL order)
        const elementsToInsert = elements.map((element, index) => {
            const elementData = {
                template_id: templateId,
                element_order: index, // Preserve order
                element_type: element.type
            };

            if (element.type === 'text') {
                elementData.text_value = element.value || '';
            } else if (element.type === 'input') {
                elementData.input_width = element.width || 8;
                elementData.input_placeholder = element.placeholder || '';
            } else if (element.type === 'select') {
                elementData.select_options = element.options || [];
            }

            return elementData;
        });

        if (elementsToInsert.length > 0) {
            const { data, error } = await supabase
                .from('template_elements')
                .insert(elementsToInsert)
                .select();

            if (error) throw error;
            return data;
        }

        return [];
    } catch (error) {
        console.error('Error saving template elements:', error);
        throw error;
    }
}

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Get category ID by key
 */
async function getCategoryIdByKey(key) {
    try {
        const supabase = getSupabase();
        if (!supabase) return null;
        const { data, error } = await supabase
            .from('categories')
            .select('id')
            .eq('key', key)
            .single();

        if (error) throw error;
        return data?.id;
    } catch (error) {
        console.error('Error getting category ID:', error);
        return null;
    }
}

/**
 * Get subcategory ID by key and category ID
 */
async function getSubcategoryIdByKey(categoryId, key) {
    try {
        const supabase = getSupabase();
        if (!supabase) return null;
        const { data, error } = await supabase
            .from('subcategories')
            .select('id')
            .eq('category_id', categoryId)
            .eq('key', key)
            .single();

        if (error) throw error;
        return data?.id;
    } catch (error) {
        console.error('Error getting subcategory ID:', error);
        return null;
    }
}

/**
 * Get template group ID by subcategory ID and group index
 */
async function getTemplateGroupId(subcategoryId, groupIndex) {
    try {
        const supabase = getSupabase();
        if (!supabase) return null;
        const { data, error } = await supabase
            .from('template_groups')
            .select('id')
            .eq('subcategory_id', subcategoryId)
            .order('display_order', { ascending: true });

        if (error) throw error;
        return data?.[groupIndex]?.id;
    } catch (error) {
        console.error('Error getting template group ID:', error);
        return null;
    }
}

/**
 * Get template ID by group ID and template key
 */
async function getTemplateIdByKey(groupId, templateKey) {
    try {
        const supabase = getSupabase();
        if (!supabase) return null;
        const { data, error } = await supabase
            .from('templates')
            .select('id')
            .eq('group_id', groupId)
            .eq('template_key', templateKey)
            .single();

        if (error) throw error;
        return data?.id;
    } catch (error) {
        console.error('Error getting template ID:', error);
        return null;
    }
}

// Export functions to window for use in script.js
if (typeof window !== 'undefined') {
    window.supabaseData = {
        loadAllDataFromSupabase,
        createCategory,
        updateCategory,
        deleteCategory,
        createSubcategory,
        updateSubcategory,
        deleteSubcategory,
        createTemplateGroup,
        updateTemplateGroup,
        deleteTemplateGroup,
        createTemplate,
        deleteTemplate,
        saveTemplateElements,
        getCategoryIdByKey,
        getSubcategoryIdByKey,
        getTemplateGroupId,
        getTemplateIdByKey
    };
}

