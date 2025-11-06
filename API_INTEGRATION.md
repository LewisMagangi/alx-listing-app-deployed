# API Integration Documentation

## Overview

This document describes the API integration implemented in alx-listing-app-04. All pages and components have been updated to fetch data dynamically from REST APIs instead of using hardcoded data.

## API Endpoints

The application integrates with the following API endpoints:

### Properties

- **GET /api/properties** - Fetches the list of all properties for the listing page
- **GET /api/properties/:id** - Fetches details of a single property by ID
- **GET /api/properties/:id/reviews** - Fetches reviews for a specific property

### Bookings

- **POST /api/bookings** - Submits booking details to the server

## Updated Files

### 1. Property Listing Page (`pages/index.tsx`)

**Changes:**

- Added `useEffect` hook to fetch properties on component mount
- Implemented loading and error state management
- Properties are now fetched from `/api/properties`
- Added error handling with user-friendly messages
- Updated to handle dynamic property data structure

**Features:**

- Loading indicator while data is being fetched
- Error message display if API call fails
- Client-side filtering still works with API data
- Safe property access with optional chaining

### 2. Property Detail Page (`pages/property/[id].tsx`)

**Changes:**

- Replaced hardcoded property lookup with API call
- Fetches property details from `/api/properties/:id` based on route parameter
- Implemented loading and error states
- Added proper TypeScript typing

**Features:**

- Dynamic property ID from URL route
- Loading state during data fetch
- Error handling for failed requests
- "Property not found" message for invalid IDs

### 3. Booking Form (`components/booking/BookingForm.tsx`)

**Changes:**

- Converted from stateless to stateful component
- Added form state management with `useState`
- Implemented `handleSubmit` function to POST data to `/api/bookings`
- Added form validation (required fields)
- Included loading, error, and success states

**Features:**

- Form data is submitted via POST request
- Loading indicator during submission ("Processing...")
- Error message display on submission failure
- Success message and form reset on successful booking
- All input fields are now controlled components
- Disabled submit button during processing

### 4. Review Section (`components/property/ReviewSection.tsx`)

**Changes:**

- Refactored to fetch reviews from API instead of receiving as props
- Added `propertyId` prop to determine which property's reviews to fetch
- Fetches reviews from `/api/properties/:id/reviews`
- Implemented loading and error states
- Added empty state message when no reviews exist

**Features:**

- Automatic review fetching on component mount
- Loading indicator while fetching reviews
- Error handling with error messages
- Empty state message for properties with no reviews
- Unique key generation for review items

### 5. Property Detail Component (`components/property/PropertyDetail.tsx`)

**Changes:**

- Updated to pass `propertyId` to `ReviewSection` instead of review data
- Reviews are now fetched independently by the ReviewSection component

### 6. TypeScript Interfaces (`interfaces/index.ts`)

**Changes:**

- Added optional `id` field to `PropertyProps` interface
- Added optional `description` field to `PropertyProps` interface
- Ensures compatibility with API response structure

## Dependencies

### New Dependencies Added

- **axios** (^1.6.0) - HTTP client for making API requests

Install dependencies:

```bash
npm install
```

## Error Handling

All API-integrated components include comprehensive error handling:

1. **Try-Catch Blocks**: All API calls are wrapped in try-catch blocks
2. **Error State**: Each component maintains an error state for display
3. **Console Logging**: Errors are logged to the console for debugging
4. **User Feedback**: User-friendly error messages are displayed in the UI
5. **Loading States**: Loading indicators prevent user confusion during data fetch

## Loading States

Every API integration includes a loading state:

- Property listing: "Loading properties..."
- Property details: "Loading property details..."
- Reviews: "Loading reviews..."
- Booking submission: Button shows "Processing..."

## Data Safety

All components use safe data access patterns:

- Optional chaining (`property.address?.city`)
- Fallback values (`property.data || []`)
- Array type checking before filtering
- Null/undefined checks before rendering

## Testing the Integration

To test the API integration:

1. **Start the development server:**

   ```bash
   npm run dev
   ```

2. **Set up API endpoints** (you'll need to create these):
   - Create API routes in `pages/api/` directory
   - Or configure a proxy to an external API

3. **Test each feature:**
   - Visit home page to see property listings
   - Click on a property to view details
   - Navigate to booking page to test form submission
   - Check that reviews load on property detail pages

## Next Steps

To complete the integration:

1. **Create API routes** in `pages/api/`:
   - `pages/api/properties.ts` (or `.js`)
   - `pages/api/properties/[id].ts`
   - `pages/api/properties/[id]/reviews.ts`
   - `pages/api/bookings.ts`

2. **Connect to a backend** or use mock data in API routes

3. **Add authentication** if required for bookings

4. **Implement data validation** on the server side

5. **Add pagination** for large property lists

6. **Implement caching** for better performance

## Notes

- All API endpoints are relative paths (e.g., `/api/properties`)
- Modify the base URL if your API is hosted elsewhere
- Consider adding API configuration file for environment-specific URLs
- Add request interceptors for authentication tokens if needed
