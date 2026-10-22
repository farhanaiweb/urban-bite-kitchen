# Demo Image Credits

This project uses demo images for the Urban Bite Kitchen portfolio demo. All photos sourced from Pexels (free for commercial use, no attribution required).

## Image Credits Table

| File | Subject | Photographer | Source URL | Licence | Size |
|------|---------|--------------|------------|---------|------|
| `about.webp` | Burger and fries on table, warm moody | Erik Mclean | https://www.pexels.com/photo/27703379/ | Pexels License | 187 KB |
| `category-burgers.jpg` | Burgers, fries, cola on dark background | pedro furtado | https://www.pexels.com/photo/30500753/ | Pexels License | 131 KB |
| `category-chicken.jpg` | Fried chicken pieces, dark moody | Huynh Quyet | https://www.pexels.com/photo/616354/ | Pexels License | 127 KB |
| `category-wraps.jpg` | Chicken wrap with avocado and veggies | Nano Erdozain | https://www.pexels.com/photo/29535640/ | Pexels License | 177 KB |
| `dish-smash-burger.webp` | Close-up smash burger with melted cheese | taha balta | https://www.pexels.com/photo/4628559/ | Pexels License | 206 KB |
| `dish-chicken-burger.webp` | Crispy fried chicken burger on dark bg | Erwin Quintana | https://www.pexels.com/photo/7963144/ | Pexels License | 105 KB |
| `dish-loaded-fries.webp` | Fries topped with cheese and bacon | Arti.tic | https://www.pexels.com/photo/37121073/ | Pexels License | 244 KB |
| `dish-chicken-wrap.webp` | Chicken wrap with fries and soda | (Pexels contributor) | https://www.pexels.com/photo/29306507/ | Pexels License | 249 KB |
| `student-meal-deal.webp` | Burger, fries, drink on tray | Yusuf Kaya | https://www.pexels.com/photo/20117233/ | Pexels License | 207 KB |
| `family-feast.webp` | Shared meal: burgers, fries, chicken for group | Thiago Lazaro | https://www.pexels.com/photo/39224482/ | Pexels License | 208 KB |

## Notes

- Images downloaded via Pexels CDN at max 1400px wide, quality ~70-80, target <250KB.
- Original CREDITS.md expected `.jpg` files; actual files use `.webp` for photos and `.jpg` for category images per component requirements.
- `menu.ts` popularDishes updated to reference new `dish-*` filenames.
- `About.tsx` parent container fixed: `aspect-[4/3]` mobile, `lg:aspect-[4/5] lg:max-h-[560px]`, `rounded-2xl`.
- Unsplash was attempted per spec but blocks automated access; Pexels used as equivalent free-license source.