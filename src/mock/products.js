export const productos = [
    {
        id: 1,
        title: "Jabón de avena",
        price: 230,
        stock: 15,
        category: "jabones",
        img: 'https://cdn.shopify.com/s/files/1/2395/7673/files/soap-recipe-2_480x480.jpg?v=1656498002'
    },
    {
        id: 2,
        title: "Jabón de carbón activado",
        price: 320,
        stock: 15,
        category: "jabones",
        img: 'https://t2.uc.ltmcdn.com/es/posts/5/0/3/jabon_de_carbon_activado_para_que_sirve_y_como_hacerlo_50305_600.jpg'
    },
    {
        id: 3,
        title: "Jabón de geranio",
        price: 200,
        stock: 15,
        category: "jabones",
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKVcIX2f8xqMIT3Kkkr92HZLr--J8FWZEzgA&usqp=CAU'
    },
    {
    id: 4,
    title: "    ",
    price: 180,
    stock: 15,
    category: "jabones",
    img:'https://cdn.bioguia.com/embed/2a0505bdea788472527d6c94930eb1524371119/Como_hacer_jabon_de_lavanda_relajante_para_renovar_tu_energia_y_calmar_tu_mente'
    },
    {
        id: 5,
        title: "Jabón de malva",
        price: 420,
        stock: 15,
        category: "jabones",
        img: 'https://media.vogue.mx/photos/5c06fa5e32b1ca0f93f046b0/master/w_1600%2Cc_limit/jabones_artesanales_hechos_orgullosamente_en_mexico_9684.jpg'
    },
    {
        id: 6,
        title: "Jabón de menthol",
        price: 230,
        stock: 15,
        category: "jabones",
        img: 'https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/como-hacer-jabon-de-menta-casero-3.jpg'
    },
    {
        id: 7,
        title: "Aceite de eucaliptus",
        price: 230,
        stock: 15,
        category: "aceites",
        img: 'https://www.bovens.org/wp-content/uploads/2020/12/receta-aceite-corporal-casero.jpg'
    },
    {
    id: 8,
    title: "Jabón de romero",
    price: 210,
    stock: 15,
    category: "jabones",
    img: 'https://i.pinimg.com/736x/40/b0/53/40b053e7b3223c556ed24989920e1771.jpg'
    },
    {
    id: 9,
    title: "Crema de malva",
    price: 210,
    stock: 15,
    category: "cremas",
    img: 'https://4.bp.blogspot.com/-bXhrqDD6wEg/Um_awoQcfZI/AAAAAAAAA0U/An4ZGVEhyCE/s1600/calendula+050.JPG'       
    },
    {
    id: 10,
    title: "Aceite de aguacate",
    price: 210,
    stock: 15,
    category: "aceites",
    img: 'data:image/jpeg;base64,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'    
    },
    {
    id: 11,
    title: "Aceite de Rosa Mosqueta",
    price: 210,
    stock: 15,
    category: "aceites",
    img: 'https://unisima.com/wp-content/uploads/2014/12/aceite-rosa-mosqueta2.jpg'    
    },
    {
    id: 12,
    title: "Aceite de argán",
    price: 210,
    stock: 15,
    category: "aceites",
    img: 'https://blog.oxfamintermon.org/wp-content/uploads/2017/06/aceite-de-argan-para-el-pelo-2.jpg' 
    },
    {
    id: 13,
    title: "Crema de karité",
    price: 210,
    stock: 15,
    category: "cremas",
    img: 'https://okdiario.com/look/img/2020/06/09/como-usar-la-manteca-de-karite-para-el-cabello-la-cara-y-el-cuerpo.jpg'
    },
    {
    id: 14,
    title: "Crema de tomillo",
    price: 210,
    stock: 15,
    category: "cremas",
    img: 'https://www.tutallernatural.com/blog/wp-content/uploads/BA2A4307-2.jpg'
    },
    {
    id: 15,
    title: "Crema de manzanilla",
    price: 130,
    stock: 15,
    category: "cremas",
    img: 'https://thumbs.dreamstime.com/b/crema-cosm%C3%A9tica-relajaci%C3%B3n-de-las-flores-manzana-aceite-artesanal-sobre-fondo-madera-156269941.jpg'
    }
]
