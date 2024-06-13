import { useHref } from "react-router-dom";

export const navigation = {
    categories: [
      {  
        id: 'categories',
        name: 'Categories',
        featured: [
          {
            name: 'New Arrivals',
            id: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
            imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
          },
          {
            name: 'Artwork Tees',
            id: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
            imageAlt:
              'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
          },
        ],
        sections: [
          {
            id: 'mens_clothing',
            name: 'mens clothing',
            items: [
              { name: 'Shirt', id: 'shirt' },
              { name: 'Men Jeans', id: 'men_jeans' },
              { name: 'Sweaters', id: 'sweater' },
              { name: 'Jackets', id: 'jacket' },
            ],
          },
          {
            id: 'womens_clothing',
            name: 'Womens clothing',
            items: [
              { name: 'Tops', id:"top" },
              { name: 'Dresses', id:"women_dress" },
              { name: 'Women Jeans', id: 'women_jeans' },
              { name: 'Jackets', id: 'women_jacket' },
              { name: 'T-Shirts', id: 't-shirt' },
            ],
          },
          {
            id: 'accessories',
            name: 'Accessories',
            items: [
              { name: 'Watches', id: 'watch' },
              { name: 'Wallets', id: 'wallet' },
              { name: 'Bags', id: 'bag' },
              { name: 'Sunglasses', id: 'sunglasses' },
              { name: 'Belts', id: 'belt' },
            ],
          },
          // {
          //   id: 'Search',
          //   name: '',
          //   items: [
          //     { name: '', id: 'shirt' },
          //     { name: '', id: 'men_jeans' },
          //     { name: '', id: 'sweater' },
          //     { name: '', id: 'jacket' },
          //     { name: '', id: 'test' },
          //     { name: '', id: 'shirt' },
          //     { name: '', id: 'men_jeans' },
          //     { name: '', id: 'sweater' },
          //     { name: '', id: 'jacket' },
          //     { name: '', id: 'test' },
          //     { name: '', id: 'shirt' },
          //     { name: '', id: 'men_jeans' },
          //     { name: '', id: 'sweater' },
          //     { name: '', id: 'jacket' },
          //     { name: '', id: 'test' },
          //   ],
          // },
        ],
      },
    ],
    pages: [
      { name: 'Home', id: '/', href:'/'},
      { name: 'Retail', id: '/', href:'/Sales' },
      { name: 'Marketplace', id: '/', href:'/marketplace' },
      { name: 'Trending', id: '/', href:'/trending' },
      { name: 'Upload to Marketplace', id: '/', href:'/vendor' }
    ],
  }
  