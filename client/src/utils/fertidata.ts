export const CropData = [
  {
    "Crops": {

      0: {
        name: "Barley",
        img_url: "https://images.unsplash.com/photo-1437252611977-07f74518abd7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        requirements: {
          temperature: { min: 10, max: 25 }, // °C
          moisture: { min: 60, max: 80 }, // %
          humidity: { min: 40, max: 70 }, // %
          nitrogen: { min: 2, max: 4 }, // kg/hectare
          phosphorus: { min: 0.5, max: 1 }, // kg/hectare
          potassium: { min: 1, max: 2 }, // kg/hectare
        },
        
        
      },
      1: {
        name: "Cotton",
        img_url: "https://images.unsplash.com/photo-1633527992904-53f86f81a23a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        , requirements: {
          temperature: { min: 21, max: 32 }, // °C
          moisture: { min: 60, max: 80 }, // %
          humidity: { min: 40, max: 60 }, // %
          nitrogen: { min: 1.5, max: 3 }, // kg/hectare
          phosphorus: { min: 0.5, max: 1 }, // kg/hectare
          potassium: { min: 1, max: 2 }, // kg/hectare
        },
      },
      2: {
        name: "Ground Nuts",
        img_url: "https://media.istockphoto.com/id/1174867545/photo/farmer-woman-picking-peanuts-autumn-harvesting-farming-and-gardening-concept-organic-farm.jpg?s=1024x1024&w=is&k=20&c=cuJewg3ciq8juVdI3kPJnQ_TwZSQU6oGQgryNWBgbGI="
        , requirements: {
          temperature: { min: 20, max: 30 }, // °C
          moisture: { min: 50, max: 70 }, // %
          humidity: { min: 50, max: 70 }, // %
          nitrogen: { min: 2, max: 4 }, // kg/hectare
          phosphorus: { min: 0.3, max: 0.8 }, // kg/hectare
          potassium: { min: 0.5, max: 1 }, // kg/hectare
        },
      },
      3: {
        name: "Maize",
        img_url: "https://plus.unsplash.com/premium_photo-1667047164703-15ffa198f8d4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        , requirements: {
          temperature: { min: 21, max: 27 }, // °C
          moisture: { min: 60, max: 75 }, // %
          humidity: { min: 50, max: 70 }, // %
          nitrogen: { min: 150, max: 200 }, // kg/hectare
          phosphorus: { min: 40, max: 80 }, // kg/hectare
          potassium: { min: 40, max: 80 }, // kg/hectare
        },
      },
      4: {
        name: "Millets",
        img_url: "https://miro.medium.com/v2/resize:fit:828/format:webp/0*Fxlq2PhcNRZxhB88.jpg"
        , requirements: {
          // Adjust based on specific millet variety
          temperature: { min: 18, max: 27 }, // °C (example)
          moisture: { min: 45, max: 70 }, // % (example)
          humidity: { min: 40, max: 70 }, // % (example)
          nitrogen: { min: 20, max: 50 }, // kg/hectare (example)
          phosphorus: { min: 10, max: 20 }, // kg/hectare (example)
          potassium: { min: 10, max: 30 }, // kg/hectare (example)
        },
      },

      5: {
        name: "Oil seeds",
        img_url: "https://d3d0lqu00lnqvz.cloudfront.net/media/media/dc2050ae-b79f-4f42-9cb0-d37a157abffa.jpg",
        requirements: {
          // Adjust based on specific oil seed type
          temperature: { min: 15, max: 25 }, // °C (example)
          moisture: { min: 50, max: 70 }, // % (example)
          humidity: { min: 40, max: 70 }, // % (example)
          nitrogen: { min: 20, max: 50 }, // kg/hectare (example)
          phosphorus: { min: 20, max: 40 }, // kg/hectare (example)
        }
      },
      6: {
        name: "Paddy",
        img_url: "https://images.unsplash.com/photo-1603106116068-02fc27fe5131?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        , requirements: {
          temperature: { min: 20, max: 30 }, // °C
          moisture: { min: 100 }, // % (flooded)
          humidity: { min: 60, max: 80 }, // %
          nitrogen: { min: 120, max: 150 }, // kg/hectare
          phosphorus: { min: 20, max: 40 }, // kg/hectare
          potassium: { min: 20, max: 40 }, // kg/hectare
        },
      },
      7: {
        name: "Pulses",
        img_url: "https://plus.unsplash.com/premium_photo-1674025748666-9ac6c8a7ab3d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ,// Adjust based on specific pulse type
        temperature: { min: 15, max: 25 }, // °C (example)
        moisture: { min: 40, max: 70 }, // % (example)
        humidity: { min: 40, max: 70 }, // % (example)
        nitrogen: { min: 20, max: 40 }, // kg/hectare (example)
        phosphorus: { min: 40, max: 60 }, // kg/hectare (example)
        potassium: { min: 20, max: 40 }, // kg/hectare (example)
      },
      8: {
        name: "Sugarcane",
        img_url: "https://media.istockphoto.com/id/965303384/photo/the-sugar-cane.jpg?s=2048x2048&w=is&k=20&c=NVpSDW-vbBZ9dQts-TnyEwQYc0v8rEDf3hpLVbze-f8="
        , requirements: {
          temperature: { min: 21, max: 35 }, // °C
          moisture: { min: 60, max: 80 }, // %
          humidity: { min: 60, max: 80 }, // %
          nitrogen: { min: 150, max: 250 }, // kg/hectare
          phosphorus: { min: 50, max: 100 }, // kg/hectare
          potassium: { min: 100, max: 200 }, // kg/hectare
        },
      },
      9: {
        name: "Tobacco",
        img_url: "https://images.unsplash.com/photo-1580044305912-70d6e42062cc?q=80&w=1923&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        , requirements: {
          temperature: { min: 18, max: 28 }, // °C
          moisture: { min: 60, max: 70 }, // %
          humidity: { min: 60, max: 70 }, // %
          nitrogen: { min: 40, max: 80 }, // kg/hectare
          phosphorus: { min: 20, max: 40 }, // kg/hectare
          potassium: { min: 30, max: 60 }, // kg/hectare
        },
      },
      10: {
        name: "Wheat",
        img_url: "https://images.unsplash.com/photo-1543257580-7269da773bf5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        , requirements: {
          temperature: { min: 10, max: 20 }, // °C
          moisture: { min: 40, max: 70 }, // %
          humidity: { min: 40, max: 70 }, // %
          nitrogen: { min: 100, max: 150 }, // kg/hectare
          phosphorus: { min: 20, max: 40 }, // kg/hectare
          potassium: { min: 20, max: 40 }, // kg/hectare
        },
      }
    },

  },
  {
    "Fertilizers": {
      "10-26-26": {
        "img": "https://mahadhan.co.in/wp-content/uploads/2018/12/Smartek-10-26-26.jpg",
        "link": "https://mahadhan.co.in/product-portfolio/enhanced-efficiency-fertilizers/smartek/mahadhan-smartek-102626/",
        "desc": "Balanced NPK fertilizer for overall growth and development."
      },
      "14-35-14": {
        "img": "https://m.media-amazon.com/images/I/71ZKVYtLsmL._SL1500_.jpg",
        "link": "https://www.amazon.in/Sansar-Green%C2%AE-NPK-14-Plants/dp/B09XQLMKP9/ref=sr_1_3_sspa?dib=eyJ2IjoiMSJ9.tkd79H8lOfSPLRHaqRdnjjz6w_y4HTt8AtnD2z9YpjzR8oq83ACjQp7t4QHfqK5QsTwkK9IRTty3jghyvf6wRWaXasRwZLoXntYZGHJJ8eYbYceZNsE3G4F2ggJYmVGApxf_ztIRSnuzee69A4NdCItTWHzcBVLyIq5US3A7g1UTmPg2Q-e8j8wpuGfPYOQL7YSHu8N7rS6qniW-AaK-PksWuN_2yFWmsi_cY4xVS26YWOnUvTbJlRbfKFYlvnFZMmPdCVa_k4RVozf5B6DE_1pmWowHgn8lv5dHgQhW1jg.1zMgWsXMfeNxTPidExRNeBvDxl11W7i6nIs0_bh9Iho&dib_tag=se&keywords=npk+14+35+14+fertilizer&qid=1713725394&sr=8-3-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
        "desc": "High-phosphorus fertilizer for root vegetables and flowering plants."
      },
      "17-17-17": {
        "img": "https://m.media-amazon.com/images/I/516qY1aa3uL._SL1000_.jpg",
        "link": "https://www.amazon.in/IFFCO-Urban-Gardens-Fertilizer-Supplement/dp/B0CCPG5Z4S/ref=sr_1_2_sspa?crid=8I4U6YZGEKLX&dib=eyJ2IjoiMSJ9.NrCISQRBKkhoECFslGBeXT0P6GgTlmbeGjDYnIASLaEvwJgSY8cMWrT9V_l7A-lhq7ixKxIF37F-I2NtWfVfwO3IhpXTMYfNK-JKd61ZgmyhgEd-FHV1QppD_S2QXMukRu8rT15F86smPXGQi3NbkxS-MmbN6WBwIs53o7I7XcKY5AVeRN_Gj7wenE3ex1Y4P5PJLI6XiG28G3D3GTfKmh4jqcR1VoK3B1-vbeMbiqPcACQa_p1OzdKcCcgRvR8qh2Q5T2910cLTGtQfrmyj9-Tt0ODmTA5VBwySxORM3mI.0xR0b-1Rp4_oe9wUQR690BJREwbAS0xTQP-3wM4y74k&dib_tag=se&keywords=npk+17-17-17+fertilizer&qid=1713725465&sprefix=npk+17-17-17+fertilizer%2Caps%2C302&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
        "desc": "Balanced NPK fertilizer for overall plant growth."
      },
      "20-20": {
        "img": "https://www.coromandel.biz/wp-content/uploads/2021/06/20-20-0-13-3.png",
        "link": "https://www.coromandel.biz/product-service/gromor-20-20-0-13/",
        "desc": "High-nitrogen fertilizer for promoting lush foliage growth."
      },
      "28-28": {
        "img": "https://www.coromandel.biz/wp-content/uploads/2021/06/28-28-0-1.png",
        "link": "https://www.coromandel.biz/product-service/gromor-28-28-0/",
        "desc": "Very high nitrogen and phosphorus fertilizer for rapid growth (use carefully)."
      },
      "DAP": {
        "img": "https://www.kribhco.net/assets/img/product/bharat_dap.jpg",
        "link": "https://www.kribhco.net/dap.html",
        "desc": "Water-soluble fertilizer high in phosphorus for root development."
      },
      "Urea": {
        "img": "https://gogarden.co.in/cdn/shop/files/71yg6hRnpTL._SL1200_fac2b8e7-208b-482d-9493-07d03daaff6f_576x.jpg?v=1684132066",
        "link": "https://www.fert.nic.in/urea",
        "desc": "Readily available source of nitrogen, requires conversion by soil microbes."
      }
    }
  },
  {
    "Soils":{
      0:{
        soil:"Black",
        img:"https://miro.medium.com/v2/resize:fit:828/format:webp/1*A3_PAT6p--51tLfFM57hIw.jpeg",
        desc:"Black soils’ significant clay content adds to their distinct physical features. Clay particles are well-known for their ability to hold water and nutrients, ensuring that plants have a steady and sustainable supply. This water retention capability is especially useful in areas with variable rainfall patterns.",
        link:"https://medium.com/@theunitedindian006/black-soils-are-also-called-as-importance-of-black-soil-e1a32a78a232"
      },
      1:{
        soil:"Clayey",
        img:"https://www.thespruce.com/thmb/R9wxhgpMQ4APb0orL0hpz0vAMgQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/SPR-understanding-and-improving-clay-soil-2539857-01-6a1c7bb45c6e4eb4985798da8591caf1.jpg",
        desc:"Clay soil can be a challenge for gardeners. While some trees and shrubs grow well in clay soil, most annuals, perennials, and vegetables don't have roots strong enough to force their way through dense clay. In soil, it is the amounts of minerals—sand, silt, and clay—that determine its texture. Sand particles are especially large and porous whereas clay particles are just the opposite: tiny, hard in their dry state, slick and sticky when wet, extremely dense, and resistant to water movement, all properties are not conducive to root growth. In clay soil, the bulbs of spring flowers simply rot over the winter.",
        link:"https://www.thespruce.com/understanding-and-improving-clay-soil-2539857"
      },
      2:{
        soil:"Loamy",
        img:"https://www.thespruce.com/thmb/R-3ar1nbgo8GISIrblLSe8UE2o8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/what-is-loam-1401908-01-a8ed5af19c7243fcb5d108e893a43bbe.jpg",
        desc:"Loam soil describes the ideal soil composition for most garden plants (although some plants require sandy, rocky, or clay soil). Loam soil holds nutrients and has a texture that retains water long enough for plant roots to access it, yet it drains well—meaning that the water eventually seeps away so that plant roots do not sit in water and rot. Without quality soil, plants struggle to survive and usually require supplemental feeding and watering.",
        link:"https://www.thespruce.com/what-is-loam-1401908"
      },
      3:{
        soil:"Red",
        img:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Soil_Auroville.JPG/1200px-Soil_Auroville.JPG",
        desc:"Red soil is a type of soil that typically develops in warm, temperate, and humid climates and comprise approximately 13% of Earth's soils.[1] It contains thin organic and organic-mineral layers of highly leached soil resting on a red layer of alluvium. Red soils contain large amounts of clay and are generally derived from the weathering of ancient crystalline and metamorphic rock. They are named after their rich red color, which can vary from reddish brown to reddish yellow as a result of their high iron content.[2] Red soil can be good or poor growing soil depending on how it is managed. It is usually low in nutrients and humus and can be difficult to cultivate due to its low water holding capacity; however, the fertility of these soils can be optimized with liming and other farming techniques.",
        link:"https://en.wikipedia.org/wiki/Red_soil"
      },
      4:{
        soil:"Sandy",
        img:"https://cdn.mos.cms.futurecdn.net/WSnoHDkry34XRxmMe9QXxC-1280-80.jpg.webp",
        desc:"Sandy soil is easy to spot by its feel. It has a gritty texture and when a handful of sandy soil is squeezed in your hand, it will easily fall apart when you open your hand again. Sandy soil is filled with, well, sand. Sand is primarily small pieces of eroded rocks. Sand tends to have large particles and the particles are solid and have no pockets where water and nutrients can hold to it. Because of this, water and nutrients tend to run out, and because sandy soil lacks both water and nutrients, many plants have a difficult time surviving in this kind of soil.",
        link:"https://www.gardeningknowhow.com/garden-how-to/soil-fertilizers/amending-sandy-soil.htm"
      }
    }
  }
]