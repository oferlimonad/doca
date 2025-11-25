# Supabase Migration Guide - Remaining Updates

This document outlines the remaining CRUD functions that need to be updated to use Supabase.

## Status

✅ Completed:
- Database schema created
- Supabase client configuration
- Data loading function
- Category CRUD operations (Add, Edit, Delete)
- Application initialization

⏳ Remaining:
- Subcategory CRUD operations
- Template Group CRUD operations  
- Template CRUD operations
- Template Element operations
- Predefined template insertion

## Pattern for Updating Functions

Each CRUD function should follow this pattern:

```javascript
async function handleXxxAdd(...) {
    // ... existing modal setup ...
    openModal(..., async () => {
        try {
            // 1. Get parent IDs from Supabase
            const parentId = await window.supabaseData.getParentId(...);
            
            // 2. Create in Supabase
            await window.supabaseData.createXxx(parentId, ...);
            
            // 3. Reload data
            templatesData = await window.supabaseData.loadAllDataFromSupabase();
            
            // 4. Show success and refresh
            showMessage('...', 'success');
            router();
        } catch (error) {
            console.error('Error:', error);
            showMessage('שגיאה...', 'error');
        }
    });
}
```

## Functions to Update

### Subcategory Operations

1. `handleSubcategoryAdd(categoryKey)` - Line ~1283
   - Get categoryId using `getCategoryIdByKey(categoryKey)`
   - Call `createSubcategory(categoryId, newKey, name)`
   - Reload data

2. `handleSubcategoryEdit(categoryKey, subKey)` - Line ~1300
   - Get subcategoryId using `getSubcategoryIdByKey(categoryId, subKey)`
   - Call `updateSubcategory(subcategoryId, newName)`
   - Reload data

3. `handleSubcategoryDelete(categoryKey, subKey)` - Line ~1316
   - Get subcategoryId
   - Call `deleteSubcategory(subcategoryId)`
   - Reload data

### Template Group Operations

4. `handleGroupAdd(categoryKey, subKey)` - Line ~1455
   - Get subcategoryId
   - Call `createTemplateGroup(subcategoryId, title, displayOrder)`
   - Reload data

5. `handleGroupEdit(categoryKey, subKey, groupIndex)` - Line ~1325
   - Get groupId using `getTemplateGroupId(subcategoryId, groupIndex)`
   - Call `updateTemplateGroup(groupId, newTitle)`
   - Reload data

6. `handleGroupDelete(categoryKey, subKey, groupIndex)` - Line ~1342
   - Get groupId
   - Call `deleteTemplateGroup(groupId)`
   - Reload data

### Template Operations

7. `handleAddTemplate(categoryKey, subKey, groupIndex)` - Line ~827
   - Get groupId
   - Generate templateKey
   - Call `createTemplate(groupId, templateKey, displayOrder)`
   - Get templateId from response
   - Call `saveTemplateElements(templateId, elements)` to save elements
   - Reload data

8. `handleEditTemplate(categoryKey, subKey, groupIndex, tempIndex)` - Line ~863
   - Get templateId using `getTemplateIdByKey(groupId, templateKey)`
   - Call `saveTemplateElements(templateId, finalElements)` to update
   - Reload data

9. `handleDeleteTemplate(categoryKey, subKey, groupIndex, tempIndex)` - Line ~850
   - Get templateId
   - Call `deleteTemplate(templateId)` (elements will cascade delete)
   - Reload data

### Predefined Template

10. `handlePredefinedTemplateSelect` - Line ~1318
    - After selecting template and group:
    - Get groupId
    - Create template with `createTemplate`
    - Save elements with `saveTemplateElements`
    - Reload data

## Important Notes

1. **Order Preservation**: Always use `element_order` when saving elements to preserve RTL order
2. **Error Handling**: Wrap all Supabase calls in try-catch
3. **Data Reload**: Always reload data after mutations to keep UI in sync
4. **Display Order**: Track `display_order` for groups and templates to maintain order
5. **Keys**: Use `generateUniqueKey()` for new keys, but store UUIDs from Supabase for IDs

## Testing Checklist

After updating all functions:

- [ ] Create category → Verify in Supabase
- [ ] Edit category → Verify update
- [ ] Delete category → Verify cascade delete
- [ ] Create subcategory → Verify
- [ ] Create template group → Verify
- [ ] Create template → Verify elements saved in order
- [ ] Edit template → Verify element order preserved
- [ ] Delete template → Verify cascade
- [ ] Add predefined template → Verify
- [ ] Test RTL order with numeric inputs
- [ ] Verify data persists after page refresh

