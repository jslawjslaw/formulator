## Component Hierarchy

**Auth Container**
 - Auth Component
 - Error Component

**Sign Up Container**
 - Sign Up Component

**Navbar Container**
 - Navbar Component

**Form Manager Container**
 - Form Manager Component
  + Form Searchbar Component
  + Form Table Component

**Share Container**
 - Share Component
  + Share Tab Component

**Builder Container**
 - Builder Component
  + Builder Tab Container
   - Builder Tab Component
  + Builder Form Container
   - Builder Form Component

## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "Sign Up Container" |
| "/sign-in" | "Auth Container" |
| "/forms/:username" | "Form Manager Container" |
| "/form/:formId/share" | "Share Container" |
| "/form/:formId/build" | "Builder Container" |