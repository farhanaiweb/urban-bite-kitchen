# Demo Image Credits

This project uses demo images for the Urban Bite Kitchen portfolio demo.

## Expected Image Files

The following file names are expected under `public/images/demo/`. No photos are currently bundled. Any added photo must have its photographer/source/licence recorded:

- `about.jpg` - About section
- `category-burgers.jpg` - Featured Menu: Burgers
- `category-chicken.jpg` - Featured Menu: Crispy Chicken
- `category-wraps.jpg` - Featured Menu: Wraps & Loaded Fries
- `dish-smash-burger.jpg` - Popular Dishes: Classic Smash Burger
- `dish-chicken-burger.jpg` - Popular Dishes: Crispy Chicken Burger
- `dish-loaded-fries.jpg` - Popular Dishes: Loaded Fries
- `dish-chicken-wrap.jpg` - Popular Dishes: Spicy Chicken Wrap
- `student-meal-deal.jpg` - Offers: Student Meal Deal
- `family-feast.jpg` - Offers: Family Feast

## How to Add Real Photos

1. Obtain photos and save files to `public/images/demo/` with the exact names listed above
2. Update the `image` field in the corresponding data file (`menu.ts`, `offers.ts`)
3. Update component `src/components/sections/` to reference the new file names via `<DemoImage />`
4. Record the photographer/source/licence for each added photo in this file

The layout is designed to work with images up to 1600px wide at ~300KB size. The `<DemoImage />` component will render a placeholder tile if a file is not yet present.