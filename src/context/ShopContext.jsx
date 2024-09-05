import React, { createContext } from 'react';
import d1_img from '../components/Assets/Images/d1.jpg'
import d2_img from '../components/Assets/Images/d2.jpg'
import d3_img from '../components/Assets/Images/d3.jpg'
import d4_img from '../components/Assets/Images/d4.jpg'
import d5_img from '../components/Assets/Images/d5.jpg'
import d6_img from '../components/Assets/Images/d6.jpg'
import d7_img from '../components/Assets/Images/d7.jpg'
import d8_img from '../components/Assets/Images/d8.jpg'
import j1_img from '../components/Assets/Images/j2.jpg'
import j2_img from '../components/Assets/Images/j3.jpg'
import j3_img from '../components/Assets/Images/j4.jpg'
import j4_img from '../components/Assets/Images/j5.jpg'
import j5_img from '../components/Assets/Images/j6.jpg'
import j6_img from '../components/Assets/Images/j7.jpg'
import p1_img from '../components/Assets/Images/p7.jpg'
import p2_img from '../components/Assets/Images/p1.jpg'
import p3_img from '../components/Assets/Images/Horlicks.jpg'
import p4_img from '../components/Assets/Images/p4.jpg'
import p5_img from '../components/Assets/Images/p5.jpg'
import p6_img from '../components/Assets/Images/p6.jpg'


export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {

    const products = [
        {
            id:1,
            name: "Pringles",
            image: p1_img,
            newPrice: 280.70 , 
            oldPrice: 250.50,
            Body: "This snacks is for 1 to 6 years babies only.\nthey're made of a wet blended mash of potato, rice and corn flours. Less than half of the ingredients are actually potatoes",
            make: " ( Original crips , Sour Cream onion , Paprkia, Hot and spicy, Cheese & Onion, Salt & Vinegar, Ketchup)"

    
        },
        {
            id:2,
            name: "Swiss-Roll",
            image: p2_img,
            newPrice: 780.70 , 
            oldPrice: 550.50,
            Body: " cylindrical cake made from a thin flat sponge which is covered with jam or cream on one side, then rolled up.",
            make: "( chocolate, co-co powder, red chilli powder, lemon wages, sugar, tomato catchup )"
    
        },
    
        {
            id:3,
            name: "Horlicks",
            image: p3_img,
            newPrice: 800.70 , 
            oldPrice: 870.50,
            Body: " Originally created by James and William Horlick in the late 19th century, the drink is especially popular in countries like India, the UK, and Southeast Asia.",
            make: "( Malted Barley (around 45%), wheat Flour, Milk Solids, Sugar, Vitamins and Minarels )"
    
        },
    
        {
            id:4,
            name: "Lays",
            image: p4_img,
            newPrice: 180.70 , 
            oldPrice: 150.50,
            Body: " The brand offers a variety of potato chips and has evolved to include many regional and experimental flavors worldwide.",
            make: "( potates , vegetable oil, sault )"
    
        },
    
        {
            id:5,
            name: "Lexus",
            image: p5_img,
            newPrice: 140.70 , 
            oldPrice: 120.50,
            Body: "Lexus biscuits are a type of biscuit typically known for their rich flavor and quality ingredients.",
            make: " ( Flour, Sugar, Butter, Eggs, Baking Powder, salt, Vanilla extract or other flavoring )"
    
        },
    
        {
            id:6,
            name: "Wafer",
            image: p6_img,
            newPrice: 300.70 , 
            oldPrice: 280.50,
            Body: "Crisp, thin, and often layered cookies or biscuits. Can vary widely, including vanilla, chocolate, strawberry, and other flavors.Light and crispy, with a layered or crunchy structure.  ",
            make: "( Flour, Sugar, Vegetable oil< Coca powder, Milk-powder, Baking powder or Bking Soda, salt, Cream or chocolate for filling ) "
    
        },

        {
            id: 7,
            name: ' Wirelwss_Mouse',
            image: d1_img,
            newPrice: 329.99,
            oldPrice: 339.99,
            Body: " Razer Viper Ultimate Hyperspeed Wireless Gaming Mouse",
            make: "( Razer Focus+ Optical Sensor with 20,000 DPI sensitivity, Razer Optical Mouse Switches, designed to be ultra-responsive with a 0.2ms actuation speed.  Wireless with Razer HyperSpeed wireless technology for low latency, also supports wired connection. Lighting: Razer Chroma RGB with customizable lighting effects )    "

        },
        {
            id: 8,
            name: 'HeadPhone',
            image: d2_img,
            newPrice: 1300,
            oldPrice: 1600,
            Body: "Sony WH-1000XM5",
            make: "Over-ear, wireless noise-cancelling headphones. 30mm drivers with high-resolution audio support. LDAC for high-quality wireless audio streaming. Battery Life: Up to 30 hours of playback with ANC on, and up to 40 hours with ANC off. Charging: Quick charge feature provides up to 5 hours of playback from a 3-minute charge. Connectivity: Bluetooth 5.2 with multi-point connectivity (connects to two devices simultaneously).    "
            
        },
        {
            id: 9,
            name: 'Keyboard',
            image: d3_img,
            newPrice: 2900,
            oldPrice: 3000,
            Body: "Corsair K100 RGB Mechanical Gaming Keyboard",
            make: " Comes with Cherry MX Speed (Silver) switches, which offer a fast actuation point of 1.2mm and a tactile, clicky feel. Per-key RGB lighting allows for extensive customization and effects. Wired connection via a detachable USB Type-C cable to ensure low latency and reliable performance.   "
        },
        {
            id: 10,
            name: 'Blutooth_MobileStand',
            image: d4_img,
            newPrice: 870,
            oldPrice: 900,
            Body: "Anker Bluetooth Mobile Stand",
            make: " Built-in Bluetooth remote control for taking photos or controlling media playback without needing to touch the phone. Designed to hold a wide range of smartphones and tablets, usually accommodating devices up to 12.9 inches. Some models may include a built-in charging port or wireless charging capabilities for convenience.  "
        },

        {
            id: 11,
            name: 'Sound Box',
            image: d5_img,
            newPrice: 2000,
            oldPrice: 2200,
            Body: " Bose SoundLink Revolve+ (Series II)",
            make: " Audio Performance: 360-degree sound coverage with deep, immersive bass. Engineered to deliver consistent, uniform sound across a wide area.  Bluetooth and NFC pairing for easy connection to devices. Also supports a 3.5mm audio input for wired connections. Up to 17 hours of playtime on a single charge. IP55 rating for water "
        },
        {
            id: 12,
            name: 'Table-Clock',
            image: d6_img,
            newPrice: 49.99,
            oldPrice: 59.99,
            Body: " Analog display, Glass and plastic materials, Wake-up calls and Reminder Alarm Function ",
            make: " Backlight: Digital models may have a backlight for visibility in low light."

        },
        {
        id: 13,
        name: 'Mobile-Watch',
        image: d7_img,
        newPrice: 949.99,
        oldPrice: 959.99,
        Body: ""
    },
    {
        id: 14,
        name: 'Table-Fan',
        image: d8_img,
        newPrice: 849.99,
        oldPrice: 859.99
    },
        {
            id: 15,
            name: 'Jersey-No1',
            image: j1_img,
            newPrice: 380,
            oldPrice: 300,
            Body: " Football (Soccer) Jersey",
            size: " S, M, L, XL, XXL ",
            clubName: " Barcelona(deep blue), Manchester United(red), Bayern Munich(red)  "
        },
        {
            id: 16,
            name: 'Jersey-No2',
            image: j2_img,
            newPrice: 380,
            oldPrice: 300,
            Body: "Home Jersey",
            size: " S, M, L, XL, XXL ",
            clubName: " Barcelona(deep blue), Manchester United(red), Bayern Munich(red)  "
        },
        {
            id: 17,
            name: 'Jersey-No3',
            image: j3_img,
            newPrice: 380,
            oldPrice: 300,
            Body: " Away Jersey",
            size: " S, M, L, XL, XXL ",
            clubName: " Barcelona(deep blue), Manchester United(red), Bayern Munich(red)  "
        },
        {
            id: 18,
            name: 'Jersey-No4',
            image: j4_img,
            newPrice: 380,
            oldPrice: 300,
            Body: "Goalkeeper Jersey",
             size: " S, M, L, XL, XXL ",
            clubName: " Barcelona(deep blue), Manchester United(red), Bayern Munich(red)  "

        },
        {
            id: 19,
            name: 'Jersey-No5',
            image: j5_img,
            newPrice: 380,
            oldPrice: 300,
            Body: "Training Jersey",
             size: " S, M, L, XL, XXL ",
            clubName: " Barcelona(deep blue), Manchester United(red), Bayern Munich(red)  "
        },
        {
            id: 20,
            name: 'Jersey-No6',
            image: j6_img,
            newPrice: 380,
            oldPrice: 300,
            Body: "Retro/Classic Jersey",
             size: " S, M, L, XL, XXL ",
            clubName: " Barcelona(deep blue), Manchester United(red), Bayern Munich(red)  "
        },

 
    ];

    
    const contextValue = {
        products
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;

