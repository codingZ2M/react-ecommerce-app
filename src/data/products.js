const products = [
    {
      id: 'SNEreRdx01',
      title: 'Shadow Sporty Black',
      price: '39.99',
      priceRange: "$25 to $50",
      image: '/images/women-wear/women-wear01.jpg',
      qty:1,
      details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged',
      category: 'Women Dresses',
      curatedProduct: false
    },
    {
        id: 'WATreRdx01',
        title: 'Atlantic Flyback',
        price: '54.99',
        priceRange: "$50 to $100",
        image: '/images/women-wear/women-wear07.jpg',
        qty:1,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged',
        category: 'Women Dresses',
        curatedProduct: true
      },
      {
        id: 'SNEreRdx03',
        title: 'Gel Lyte React',
        price: '29.99',
        priceRange: "$25 to $50",
        image: '/images/women-wear/women-wear03.jpg',
        qty:1,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged',
        category: 'Women Dresses',
        curatedProduct: true
      },
      {
        id: 'WATreRdx04',
        title: 'Tommy Guess',
        price: '33.99',
        priceRange: "$25 to $50",
        image: '/images/women-wear/women-wear04.jpg',
        qty:1,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged',
        category: 'Women Dresses',
        curatedProduct: false
      },
        {
            id: 'SNEreRdx05',
            title: 'Vibrant Red Apricot',
            price: '31.99',
            priceRange: "$25 to $50",
            image: '/images/women-wear/women-wear05.jpg',
            qty:1,
            details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged',
            category: 'Women Dresses',
            curatedProduct: true
          },
          {
            id: 'WATreRdx07',
            title: 'Flyback Club Campus',
            price: '29.99',
            priceRange: "$25 to $50",
            image: '/images/women-wear/women-wear06.jpg',
            qty:1,
            details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged',
            category: 'Women Dresses',
            curatedProduct: true         
          },
    
          {
            id: 'SUreRdx01',
            title: 'Unisex Polarized Retro Sunglass',
            price: '59.99',
            priceRange: "$50 to $100",
            image: '/images/sunglasses/sunglass01.jpg',
            qty:1,
            details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged',
            category: 'sunglass',
            curatedProduct: true
          },
       
          {
            id: 'SHreRdx01',
            title: 'Composite Toe Waterproof Shoe For Men',
            price: '53.99',
            priceRange: "$50 to $100",
            image: '/images/shoes/shoe01.jpg',
            qty:1,
            details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged',
            category: 'Shoes',
            curatedProduct: true,
          },
          {
            id: 'SHreRdx02',
            title: 'Composite Cloudfoam Ilation Waterproof Basketball Shoe',
            price: '145.99',
            priceRange: "$100 to $150",
            image: '/images/shoes/shoe02.jpg',
            qty:1,
            details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged',
            category: 'Shoes',
            curatedProduct: false,
          },
          {
            id: 'SHreRdx03',
            title: 'Waterproof Running, Walking, Gym Sports Shoe',
            price: '66.99',
            priceRange: "$50 to $100",
            image: '/images/shoes/shoe03.jpg',
            qty:1,
            details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged',
            category: 'Shoes',
            curatedProduct: false,
          },
          {
            id: 'SHreRdx04',
            title: 'Lace-Up Lightweight Casual Shoes ',
            price: '149.99',
            priceRange: "$100 to $150",
            image: '/images/shoes/shoe04.jpg',
            qty:1,
            details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged',
            category: 'Shoes',
            curatedProduct: true,
          },
          {
            id: 'SHreRdx05',
            title: 'Lace-Up Sports Running,Walking,Gym,Training Sneaker',
            price: '170.99',
            priceRange: "$150 to $200",
            image: '/images/shoes/shoe05.jpg',
            qty:1,
            details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged',
            category: 'Shoes',
            curatedProduct: false,
          },

          {
            id: 'WAreRdx01',
            title: 'Club Campus Analog Black Gold Dial Men Watch',
            price: '33.99',
            priceRange: "$25 to $50",
            image: '/images/watches/watch01.jpg',
            qty:1,
            details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged',
            category: 'Watches',
            curatedProduct: true
          },
          {
            id: 'WAreRdx02',
            title: 'Analog Black Dial Unisex-Adult Wrist Watch',
            price: '33.99',
            priceRange: "$25 to $50",
            image: '/images/watches/watch02.jpg',
            qty:1,
            details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged',
            category: 'Watches',
            curatedProduct: true
          },
          {
            id: 'WAreRdx03',
            title: 'Club Campus Analog Blue Dial Men Wrist Watch',
            price: '167.99',
            priceRange: "$150 to $200",
            image: '/images/watches/watch03.jpg',
            qty:1,
            details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged',
            category: 'Watches',
            curatedProduct: true
          },
          {
            id: 'WAreRdx04',
            title: 'Club Campus Analog Black Dial Men Watch',
            price: '159.99',
            priceRange: "$150 to $200",
            image: '/images/watches/watch04.jpg',
            qty:1,
            details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged',
            category: 'Watches',
            curatedProduct: true
          },
          {
            id: 'WAreRdx05',
            title: 'Analog Brown Silicone Strap Women Wrist Watch',
            price: '123.99',
            priceRange: "$100 to $150",
            image: '/images/watches/watch05.jpg',
            qty:1,
            details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged',
            category: 'Watches',
            curatedProduct: true
          },
          {
            id: 'WAreRdx06',
            title: 'Analog Black Silicone Strap Men Wrist Watch',
            price: '103.99',
            priceRange: "$100 to $150",
            image: '/images/watches/watch06.jpg',
            qty:1,
            details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged',
            category: 'Watches',
            curatedProduct: true
          },
          
  ];
  
  export default products;

  

