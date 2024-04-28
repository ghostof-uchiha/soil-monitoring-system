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
          nitrogen: { min: 30, max: 60 }, // kg/hectare
          phosphorus: { min: 20, max: 30 }, // kg/hectare
          potassium: { min: 20, max: 30 }, // kg/hectare
        },
        General_Principles: [
          ["Soil Testing", "Before applying any fertilizer, conducting a soil test is crucial. This reveals the existing nutrient levels (nitrogen, phosphorus, potassium) in your soil and helps determine the appropriate fertilizer type and amount for your specific needs."],
          ["Barley's Needs", "Barley has a moderate requirement for nitrogen (N), a lower requirement for phosphorus (P), and a relatively low requirement for potassium (K)."]
        ],
        Fertilizer_Application_Stages: [
          ["Basal application", "Apply a portion of the fertilizer, particularly phosphorus and potassium, before planting. This ensures these nutrients are readily available for early root development."],
          ["Top dressing", "Apply the remaining nitrogen fertilizer after the crop has emerged and is actively growing. This provides a boost during the critical tillering and stem elongation stages."]
        ],
        Specific_Recommendations: [ //(Always adjust based on soil test results and local conditions):
          ["Nitrogen (N)", "Apply 30-60 kg/ha (27-54 lb/acre) based on soil test, expected yield, and growing conditions.", "https://www.ndsu.edu/agriculture/extension/impact-stories/fertility-barley-and-spring-wheat"],
          ["Phosphorus (P)", "Apply 20-30 kg/ha (18-27 lb/acre) of P2O5 (phosphate) for irrigated barley and 10-20 kg/ha (9-18 lb/acre) for rainfed barley based on soil test.", "https://wikifarmer.com/category/cereals/barley/"],
          ["Potassium (K)", "Apply 20-30 kg/ha (18-27 lb/acre) of K2O (potash) based on soil test.", "https://wikifarmer.com/category/cereals/barley/"],
        ],
        Additional_Considerations: [
          ["Split application", "Dividing the nitrogen application into a basal dose and a top dressing can improve nitrogen use efficiency and reduce the risk of leaching."],
          ["Manure", "Manure can be a good source of nutrients for barley, but a soil test is still recommended to determine the appropriate amount based on nutrient content in the manure."],
          ["Environmental Factors", "Consider factors like rainfall and irrigation practices when determining fertilizer application rates."]
        ],
        Further_Resources: [

          ["Fertilizing Malting and Feed Barley (NDSU Extension)", "https://www.ndsu.edu/agriculture/extension/impact-stories/fertility-barley-and-spring-wheat", "This resource provides details on nitrogen application timing and considerations for malting barley."],
          ["Barley Fertilization Requirements and Methods (Wikifarmer)", "https://wikifarmer.com/category/cereals/barley/", "This site offers a general overview of fertilizer needs for barley, including phosphorus and potassium recommendations."],
          ["CROP: BARLEY (ICAR)", "https://kvk.icar.gov.in/API/Content/PPupload/k0501_6.pdf", "This Indian resource provides a table with general fertilizer recommendations for barley in rainfed and irrigated conditions."]
        ]

      },
      1: {
        name: "Cotton",
        img_url: "https://images.unsplash.com/photo-1633527992904-53f86f81a23a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        , requirements: {
          temperature: { min: 21, max: 32 }, // °C
          moisture: { min: 60, max: 80 }, // %
          humidity: { min: 40, max: 60 }, // %
          nitrogen: { min: 50, max: 150 }, // kg/hectare
          phosphorus: { min: 20, max: 50 }, // kg/hectare
          potassium: { min: 30, max: 80 }, // kg/hectare
        },
        General_Principles: [
          ["Soil Testing", "Before applying fertilizer, conduct a soil test to determine existing nutrient levels (nitrogen, phosphorus, potassium, sulfur) in your soil. This guides you in selecting the appropriate fertilizer type and amount for optimal cotton growth and yield."],
          ["Cotton's Needs", "Cotton has a moderate requirement for nitrogen (N), a high requirement for phosphorus (P), and a moderate to high requirement for potassium (K) depending on soil conditions and yield goals. Sulfur (S) is also often crucial for cotton production."]
        ],
        Fertilizer_Application_Stages: [
          ["Basal Application", "Apply a portion of the fertilizer, primarily phosphorus (P), potassium (K), and sulfur (S), before planting or sowing. This ensures these nutrients are readily available for early root development and boll formation."],
          ["Topdressing", "Apply nitrogen (N) fertilizer throughout the growing season, typically in split applications. Here are some common approaches: A small basal application with P, K, and S. Subsequent applications of N during vegetative growth and early squaring to promote healthy plant development. A final application of N may be needed after squaring depending on soil conditions and variety."]
        ],
        Specific_Recommendations: [ //(Always adjust based on soil test results and local conditions):
          ["Nitrogen (N)", "", "Apply 50-150 kg/ha (45-136 lb/acre) based on soil test, expected yield, and growing conditions. Splitting the application is recommended."],
          ["Phosphorus (P)", "", "Apply 20-50 kg/ha (18-45 lb/acre) of P2O5 (phosphate) based on soil test. Most of the phosphorus can be applied basally."],
          ["Potassium (K)", "", "Apply 30-80 kg/ha (27-73 lb/acre) of K2O (potash) based on soil test. Potassium application can be split, with some portion applied basally and some during topdressing."],
          ["Sulfur (S)", "", "Apply 10-30 kg/ha (9-27 lb/acre) of sulfur (S) based on soil test. Sulfur can be applied basally or during early topdressing."],
        ],
        Additional_Considerations: [
          ["Split application", "Dividing nitrogen application into several doses improves nitrogen use efficiency, reduces leaching risks, and allows for adjustments based on crop growth and weather patterns."],
          ["Organic matter", "Maintaining adequate soil organic matter levels can improve nutrient retention and availability for cotton."],
          ["Environmental factors", "Consider rainfall patterns and irrigation practices when determining fertilizer application rates and timings."],
          ["Cotton variety", "Different cotton varieties may have varying nutrient requirements. Consult with seed suppliers for specific recommendations for your chosen variety."]
        ],
        Further_Resources: [

          ["Best Management Practices for Cotton Fertilization (International Cotton Advisory Committee)", "https://icac.org/LearningCorner/LearningCorner?CategoryId=1&MenuId=15", "This resource provides a global perspective on cotton fertilization practices,"],
        ]
      },
      2: {
        name: "Ground Nuts",
        img_url: "https://www.zettafarms.com/wp-content/uploads/2024/01/blog-3.jpg"
        , requirements: {
          temperature: { min: 20, max: 30 }, // °C
          moisture: { min: 50, max: 70 }, // %
          humidity: { min: 50, max: 70 }, // %
          nitrogen: { min: 10, max: 20 }, // kg/hectare
          phosphorus: { min: 20, max: 50 }, // kg/hectare
          potassium: { min: 20, max: 50 }, // kg/hectare
        },
        General_Principles: [
          ["Soil Testing", "Before applying fertilizer, conduct a soil test to determine existing nutrient levels (nitrogen, phosphorus, potassium, sulfur, calcium) in your soil. This guides you in selecting the appropriate fertilizer type and amount for optimal groundnut growth and yield."],
          ["Groundnut's Needs", "Groundnut has a special characteristic: it can fix its own atmospheric nitrogen through a symbiotic relationship with Rhizobium bacteria in its nodules. However, it still has moderate requirements for other nutrients like phosphorus (P), potassium (K), sulfur (S), and calcium (Ca)."]
        ],
        Fertilizer_Application_Stages: [
          ["Basal Application", "Apply a portion of the fertilizer, primarily phosphorus (P), potassium (K), sulfur (S), and calcium (Ca), before planting or sowing. This ensures these nutrients are readily available for early root development and pod formation."],
          ["Topdressing", " Nitrogen (N) application may not be necessary for groundnut due to its nitrogen-fixing ability. However, a small amount of nitrogen fertilizer can be applied basally in some cases, particularly in soils with low nitrogen content."]
        ],
        Specific_Recommendations: [ //(Always adjust based on soil test results and local conditions):
          ["Phosphorus (P)", "Apply 20-50 kg/ha (18-45 lb/acre) of P2O5 (phosphate) based on soil test. Most of the phosphorus can be applied basally.",""],
          ["Nitrogen (N)", "A small basal application (10-20 kg/ha) of nitrogen might be beneficial in some cases, especially in soils with very low nitrogen content. However, excessive nitrogen application can promote excessive vegetative growth and hinder pod formation. Consult with local agricultural experts for specific recommendations on nitrogen use in groundnut.", ""],
          ["Potassium (K)", "Apply 20-50 kg/ha (18-45 lb/acre) of P2O5 (phosphate) based on soil test. Most of the phosphorus can be applied basally.", ""],
          ["Calcium  (Ca)", "Apply 250-500 kg/ha (227-454 lb/acre) of gypsum (CaSO4) based on soil test, particularly in soils deficient in calcium. Gypsum application can be done during flowering near the base of plants.", ""],
          ["Sulfur (S)", "Apply 10-20 kg/ha (9-18 lb/acre) of sulfur (S) based on soil test. Sulfur can be applied basally or during early topdressing.", ""],
        ],
        Additional_Considerations: [
          ["Inoculation", "Consider inoculating groundnut seeds with Rhizobium bacteria strains suitable for your region, especially if planting in new areas or with a history of poor nodulation. This ensures efficient nitrogen fixation by the groundnut plants."],
          ["Organic matter", "Maintaining adequate soil organic matter levels can improve nutrient retention and availability for groundnut."],
          ["Environmental factors", "Consider rainfall patterns and irrigation practices when determining fertilizer application rates and timings."],
          ["Groundnut variety", "Different groundnut varieties may have varying nutrient requirements. Consult with seed suppliers for specific recommendations for your chosen variety."]
        ],
        Further_Resources: [

          ["Groundnut Fertilization Guide (International Institute of Tropical Agriculture)", "https://agritech.tnau.ac.in/agriculture/agri_nutrientmgt_groundnut.html", "This guide provides detailed information on groundnut nutrient management, including considerations for phosphorus, potassium, calcium, and nitrogen."],
          ["Best Management Practices for Groundnut Production (Food and Agriculture Organization)", "https://www.fao.org/faostat/en/", "This resource offers a global perspective on groundnut production practices, with a section on fertilizer management and nutrient requirements."],
          ["Groundnut Fertility Management (University of Florida)", "https://ifas.ufl.edu/", "This website provides information on groundnut production in Florida, including fertilization practices and recommendations for specific soil types."]
        ]
      },
      3: {
        name: "Maize",
        img_url: "https://plus.unsplash.com/premium_photo-1667047164703-15ffa198f8d4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        , requirements: {
          temperature: { min: 21, max: 27 }, // °C
          moisture: { min: 60, max: 75 }, // %
          humidity: { min: 50, max: 70 }, // %
          nitrogen: { min: 70, max: 200 }, // kg/hectare
          phosphorus: { min: 15, max: 40 }, // kg/hectare
          potassium: { min: 20, max: 80 }, // kg/hectare
        },
        General_Principles: [
          ["Soil Testing", "Before applying fertilizer, conduct a soil test to determine existing nutrient levels (nitrogen, phosphorus, potassium) in your soil. This guides you in selecting the appropriate fertilizer type and amount for optimal maize growth."],
          ["Maize's Needs", "Maize has a high requirement for nitrogen (N), a moderate requirement for phosphorus (P), and a moderate to high requirement for potassium (K) depending on soil conditions and yield goals."]
        ],
        Fertilizer_Application_Stages: [
          ["Basal application", "Apply a portion of the fertilizer, particularly phosphorus and potassium, before planting. This ensures these nutrients are readily available for early root development."],
          ["Side dressing", "Apply nitrogen fertilizer alongside the developing maize plants, typically during the knee-high stage. This provides a boost during the critical growth stages."]
        ],
        Specific_Recommendations: [ //(Always adjust based on soil test results and local conditions):

          ["Nitrogen (N)", "Apply 70-200 kg/ha (63-181 lb/acre) based on soil test, expected yield, and growing conditions. Splitting the application into a basal dose and a side dressing is recommended.", "https://www.fao.org/land-water/databases-and-software/crop-information/maize/en/"],
          ["Phosphorus (P)", "Apply 10-30 kg/ha (9-27 lb/acre) of P2O5 (phosphate) based on soil test. Most of the phosphorus can be applied basally.", "https://www.fao.org/land-water/databases-and-software/crop-information/maize/en/"],
          ["Potassium (K)", "Apply 20-60 kg/ha (18-54 lb/acre) of K2O (potash) based on soil test. Potassium can be applied basally or split-applied with some portion during side dressing.", "https://www.fao.org/land-water/databases-and-software/crop-information/maize/en/"],
        ],
        Additional_Considerations: [
          ["Split application", "Dividing nitrogen application into a basal dose and a side dressing can improve nitrogen use efficiency and reduce the risk of leaching."],
          ["Manure", "Manure can be a good source of nutrients for maize, but a soil test is still recommended to determine the appropriate amount based on nutrient content in the manure."],
          ["Environmental Factors", "Consider factors like rainfall and irrigation practices when determining fertilizer application rates."],
          ["Maize Variety", "Hybrid maize varieties may have different nutrient requirements compared to open-pollinated varieties. Consult with seed suppliers for specific recommendations for your chosen maize variety."]
        ],
        Further_Resources: [

          ["Maize Production Guide (FAO)", "https://www.fao.org/land-water/databases-and-software/crop-information/maize/en/", "This comprehensive guide provides detailed information on fertilizer application for maize, including nutrient requirements, timing, and split application strategies."],
          ["Maize Fertility Management (Penn State Extension)", "https://agsci.psu.edu/aasl/online-report/agronomic-crops", "This resource offers a more regional perspective on maize fertilization practices, focusing on conditions in the northeastern United States."],
          ["Fertilizer Management for Corn (USDA)", "https://wikifarmer.com/maize-fertilizer-requirements/", "This website from the USDA provides general guidelines for corn (maize) fertilization, including considerations for soil type and organic matter content."]
        ]
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
        General_Principles: [
          ["Soil Testing", "Before applying fertilizer, conduct a soil test to determine existing nutrient levels (nitrogen, phosphorus, potassium) in your soil. This guides you in selecting the appropriate fertilizer type and amount for optimal millet growth and yield."],
          ["Millets' Needs", "Millet varieties differ slightly in their nutrient requirements. However, most millets have a moderate requirement for nitrogen (N), a high requirement for phosphorus (P), and a moderate requirement for potassium (K). Some millets may also benefit from micronutrients like zinc (Zn) or sulfur (S)."]
        ],
        Fertilizer_Application_Stages: [
          ["Basal Application", "Apply a portion of the fertilizer, primarily phosphorus (P) and potassium (K), before planting or sowing. This ensures these nutrients are readily available for early root development and establishment."],
          ["Topdressing (Optional)", "Depending on the specific millet variety and soil conditions, a small topdressing of nitrogen (N) might be beneficial during the tillering stage (around 4-6 weeks after planting) to promote healthy plant growth."]
        ],
        Specific_Recommendations: [ //(Always adjust based on soil test results and local conditions):
          ["Nitrogen (N)", "Apply a total of 20-60 kg/ha (18-54 lb/acre) of nitrogen (N) depending on the millet variety, soil test results, and expected yield. Splitting the application with a small basal dose and a potential topdressing during tillering can be beneficial.", ""],
          ["Phosphorus (P)", "Apply 20-40 kg/ha (18-36 lb/acre) of P2O5 (phosphate) at planting based on soil test. Millets are generally more responsive to phosphorus than nitrogen.", ""],
          ["Potassium (K)", "Apply 10-30 kg/ha (9-27 lb/acre) of K2O (potash) at planting based on soil test.", ""],
          ["Micronutrients (Optional)", "Foliar application of micronutrients like zinc (Zn) or sulfur (S) might be beneficial in some cases, particularly if deficiencies are identified through soil testing.", ""],
        ],
        Additional_Considerations: [
          ["Millet variety", "Different millet varieties may have varying nutrient requirements. Consult with seed suppliers or agricultural experts for specific recommendations for your chosen millet variety (e.g., finger millet, pearl millet, foxtail millet)."],
          ["Soil organic matter", "Maintaining adequate soil organic matter levels can improve nutrient retention and availability for millets."],
          ["Water management", "Millet varieties have varying water requirements. Proper irrigation practices are crucial depending on the specific millet and rainfall patterns."],
          ["Crop rotation", "Including millets in a crop rotation plan can help improve soil health and nutrient availability."]
        ],
        Further_Resources: [

          ["Manual on Good Agricultural Practices in Millets (Indian Council of Agricultural Research)", "https://www.millets.res.in/", "This manual provides detailed information on various aspects of millet cultivation, including a section on fertilizer management and nutrient requirements for different millet varieties."],
          ["Sorghum & Millet Crop Nutrition Guide (Cropnuts)", "https://cropnuts.com/", "his guide offers a general overview of nutrient management for sorghum and millets, highlighting the importance of phosphorus and potassium for these crops."],
          ["Best Management Practices for Millet Production", "https://www.fao.org/faostat/en/", "This resource provides a global perspective on millet production practices, including potential considerations for fertilizer management based on the specific millet variety and region."]
        ],
        overview:"Millets are a diverse group of small cereal grains known for their resilience and adaptability to various growing conditions. Here's a breakdown of key information about millet fertilization, similar to the ones provided for other crops:"
      },

      5: {
        name: "Oil seeds",
        overview:"Oilseeds are a diverse group of crops cultivated for their high oil content. Here's a breakdown of key information about oilseed fertilization, similar to the ones provided for other crops:",
        img_url: "https://d3d0lqu00lnqvz.cloudfront.net/media/media/dc2050ae-b79f-4f42-9cb0-d37a157abffa.jpg",
        requirements: {
          // Adjust based on specific oil seed type
          temperature: { min: 15, max: 25 }, // °C (example)
          moisture: { min: 50, max: 70 }, // % (example)
          humidity: { min: 40, max: 70 }, // % (example)
          nitrogen: { min: 30, max: 100 }, // kg/hectare (example)
          phosphorus: { min: 20, max: 50 }, // kg/hectare (example)
          potassium: { min: 20, max: 60 }, // kg/hectare (example)
        },
        General_Principles: [
          ["Soil Testing", "Before applying fertilizer, conduct a soil test to determine existing nutrient levels (nitrogen, phosphorus, potassium, sulfur) in your soil. This guides you in selecting the appropriate fertilizer type and amount for optimal oilseed growth and yield."],
          ["Oilseed Needs", "Oilseed varieties have varying nutrient requirements depending on the specific type. However, most oilseeds generally have:"],
          ["Moderate requirement for nitrogen (N)", "excessive nitrogen can promote vegetative growth at the expense of seed production."],
          ["High requirement for phosphorus (P)", "Phosphorus is crucial for root development, seed formation, and oil quality."],
          ["Moderate to high requirement for potassium (K)", " Potassium influences oil quality and stress tolerance."],
          ["Sulfur (S)", "Sulfur is becoming increasingly recognized as an important nutrient for oilseed crops, particularly for protein synthesis and oil quality."]
        ],
        Fertilizer_Application_Stages: [
          ["Basal Application", "Apply a portion of the fertilizer, primarily phosphorus (P), potassium (K), and sulfur (S), before planting or sowing. This ensures these nutrients are readily available for early root development and establishment."],
          ["Topdressing (Optional)", "Depending on the specific oilseed variety, soil conditions, and expected yield, a small topdressing of nitrogen (N) might be beneficial:Early topdressing: During vegetative growth for some oilseeds (e.g., canola) to promote healthy plant development. Late topdressing: Just before flowering in some cases (e.g., sunflower) to support seed formation."]
        ],
        Specific_Recommendations: [ //(Always adjust based on soil test results and local conditions):
          ["Nitrogen (N)", "Apply 30-100 kg/ha (27-90 lb/acre) of nitrogen (N) depending on the oilseed variety, soil test results, and expected yield. Splitting the application (basal and potential topdressing) might be beneficial for some varieties.", ""],
          ["Phosphorus (P)", "Apply 20-50 kg/ha (18-45 lb/acre) of P2O5 (phosphate) at planting based on soil test. Oilseeds are generally more responsive to phosphorus than nitrogen.", ""],
          ["Potassium (K)", "Apply 20-60 kg/ha (18-54 lb/acre) of K2O (potash) at planting or split into applications at planting and during vegetative growth based on soil test.", ""],
          ["Sulfur (S):", "Apply 10-30 kg/ha (9-27 lb/acre) of sulfur (S) based on soil test. Sulfur application can be done basally or during early topdressing.", ""],
        ],
        Additional_Considerations: [
          ["Oilseed variety", "Different oilseed varieties (e.g., canola, sunflower, soybean, flaxseed) may have varying nutrient requirements and timings. Consult with seed suppliers or agricultural experts for specific recommendations based on your chosen variety."],
          ["Soil organic matter", "Maintaining adequate soil organic matter levels can improve nutrient retention and availability for oilseeds."],
          ["Environmental factors", "Consider factors like rainfall patterns and irrigation practices when determining fertilizer application rates and timings."],
          ["Micronutrients", " Micronutrient deficiencies like boron (B) or manganese (Mn) can occur in some cases. Soil testing and foliar application might be necessary if deficiencies are identified."]
        ],
        Further_Resources: [

          ["Best Management Practices for Oilseed Production (Food and Agriculture Organization)", "https://www.fao.org/faostat/en/ ", "his resource offers a global perspective on oilseed production practices, with a section on nutrient management that can be a starting point for further research."]
        ]
      },
      6: {
        name: "Paddy",
        overview:"Here's a breakdown of key information about paddy (rice) fertilization",
        img_url: "https://images.unsplash.com/photo-1603106116068-02fc27fe5131?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        , requirements: {
          temperature: { min: 20, max: 30 }, // °C
          moisture: { min: 100 , max : "flooded"}, // % (flooded)
          humidity: { min: 60, max: 80 }, // %
          nitrogen: { min: 60, max: 150 }, // kg/hectare
          phosphorus: { min: 20, max: 40 }, // kg/hectare
          potassium: { min: 20, max: 40 }, // kg/hectare
        },
        General_Principles: [
          ["Soil Testing", "Before applying fertilizer, conduct a soil test to determine existing nutrient levels (nitrogen, phosphorus, potassium) in your paddy field. This guides you in selecting the appropriate fertilizer type and amount for optimal rice growth and yield."],
          ["Rice's Needs", "Rice has a high requirement for nitrogen (N) throughout its growth cycle for vigorous vegetative development and grain filling. It also has moderate requirements for phosphorus (P) and potassium (K) for proper root development, tillering, and panicle formation."]
        ],
        Fertilizer_Application_Stages: [
          ["Basal Application", " Apply a portion of the fertilizer, primarily phosphorus (P) and potassium (K), before the final puddling (wetting and mixing of soil) operation. This ensures these nutrients are readily available for early root development and establishment."],
          ["Topdressing", "Apply nitrogen (N) fertilizer in split applications throughout the growing season. Here are some common approaches: A small basal dose of nitrogen along with P and K. Subsequent applications of nitrogen during the tillering stage (around 3-4 weeks after transplanting) and panicle initiation stage (around 6-8 weeks after transplanting) to promote healthy plant growth and grain development."]
        ],
        Specific_Recommendations: [ //(Always adjust based on soil test results and local conditions):
          ["Nitrogen (N)", "Apply a total of 60-120 kg/ha (54-108 lb/acre) of nitrogen (N) split into multiple applications throughout the growing season. The specific amount and timing will depend on soil test results, expected yield, and variety.", ""],
          ["Phosphorus (P)", "Apply 10-30 kg/ha (9-27 lb/acre) of P2O5 (phosphate) based on soil test. Most of the phosphorus can be applied basally.", ""],
          ["Potassium (K)", "Apply 20-40 kg/ha (18-36 lb/acre) of K2O (potash) based on soil test. Potassium application can be split, with some portion applied basally and some during tillering.", ""],
        ],
        Additional_Considerations: [
          ["Split application", "Dividing nitrogen application into multiple doses throughout the growing season improves nitrogen use efficiency, reduces leaching risks, and allows for adjustments based on crop growth and weather patterns."],
          ["Water management", "Rice is a semi-aquatic crop and requires proper water management throughout the growing season."],
          ["Organic matter", "Maintaining adequate soil organic matter levels can improve nutrient retention and availability for rice."],
          ["Rice variety", "Different rice varieties may have varying nutrient requirements. Consult with seed suppliers or agricultural experts for specific recommendations for your chosen variety."],
          ["Micronutrients", "Micronutrient deficiencies like zinc (Zn) can occur in some cases. Soil testing and foliar application might be necessary if deficiencies are identified."]
        ],
        Further_Resources: [

          ["Rice Fertilizer & Crop Guide (Haifa Group)", "https://www.haifa-group.com/crop-guide/field-crops/rice-fertilizers-crop-guide", "his guide provides detailed information on nutrient management for rice, including specific recommendations for nitrogen, phosphorus, and potassium."],
          ["Best Management Practices for Rice Production (Food and Agriculture Organization)", "https://www.fao.org/faostat/en/", "his resource offers a global perspective on rice production practices, with a section on nutrient management and nutrient requirements for rice."],
          ["Rice Fertility Management (International Rice Research Institute)", "http://www.ipni.net/publication/bci.nsf/0/3E4652D399C882AD85257BBA006531E6/$FILE/Better%20Crops%20International%202002-3%20p23.pdf ", "This website from the International Rice Research Institute (IRRI) provides information on nutrient management for rice, including fertilizer recommendations and considerations for different soil types and environmental conditions."],
        ]
      },
      7: {
        name: "Pulses",
        overview: "Pulses, also known as legumes, are a diverse group of crops known for their high protein content and ability to fix their own atmospheric nitrogen. Here's a breakdown of key information about pulse fertilization, similar to the ones provided for other crops",
        img_url: "https://plus.unsplash.com/premium_photo-1674025748666-9ac6c8a7ab3d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        , requirements: {
        temperature: { min: 15, max: 25 }, // °C (example)
        moisture: { min: 40, max: 70 }, // % (example)
        humidity: { min: 40, max: 70 }, // % (example)
        nitrogen: { min: 20, max: 40 }, // kg/hectare (example)
        phosphorus: { min: 40, max: 60 }, // kg/hectare (example)
        potassium: { min: 20, max: 40 }, // kg/hectare (example)
        },General_Principles: [
          ["Soil Testing", "While legumes can fix their own nitrogen, soil testing is still recommended before applying fertilizer. This helps determine existing levels of other essential nutrients (phosphorus, potassium, sulfur, etc.) and guides you in selecting the appropriate fertilizer type and amount for optimal pulse growth and yield."],
          ["Pulses' Needs:", "Pulses generally have a:"],
          ["Low to moderate requirement for nitrogen (N)", "Due to their nitrogen-fixing ability, most pulses require less external nitrogen fertilizer compared to other crops."],
          ["Moderate requirement for phosphorus (P)", "Phosphorus is crucial for root development, pod formation, and seed quality."],
          ["Moderate requirement for potassium (K)", "Potassium influences pod filling, disease resistance, and overall plant health."],
          ["Possible requirement for sulfur (S)", "Sulfur is becoming increasingly recognized as an important nutrient for legumes, particularly for protein synthesis and seed quality."],
          ["Micronutrient considerations", "Deficiencies in micronutrients like boron (B), molybdenum (Mo), and iron (Fe) can occur in some cases."],
        ],
        Fertilizer_Application_Stages: [
          ["Basal Application", "Apply a portion of the fertilizer, primarily phosphorus (P), potassium (K), and sulfur (S), before planting or sowing. This ensures these nutrients are readily available for early root development and establishment."],
          ["Inoculation (Optional)", "Consider inoculating pulse seeds with specific rhizobia bacteria strains suitable for your region, especially if planting in new areas or with a history of poor nodulation. This ensures efficient nitrogen fixation by the pulse plants."]
        ],
        Specific_Recommendations: [ //(Always adjust based on soil test results and local conditions):
          ["Nitrogen (N)", "A small basal application (10-20 kg/ha) of nitrogen might be beneficial in some cases, particularly in soils with very low nitrogen content. However, excessive nitrogen application can promote excessive vegetative growth and hinder pod formation. Consult with local agricultural experts for specific recommendations on nitrogen use in pulses.", ""],
          ["Phosphorus (P)", "Apply 20-50 kg/ha (18-45 lb/acre) of P2O5 (phosphate) at planting based on soil test.", ""],
          ["Potassium (K)", "Apply 20-40 kg/ha (18-36 lb/acre) of K2O (potash) at planting based on soil test.", ""],
          ["Potassium (K)", "Apply 10-20 kg/ha (9-18 lb/acre) of sulfur (S) based on soil test, particularly in soils deficient in sulfur.", ""],
        ],
        Additional_Considerations: [
          ["Pulse variety", "Different pulse varieties (e.g., lentils, chickpeas, peas, beans) may have varying nutrient requirements and timings. Consult with seed suppliers or agricultural experts for specific recommendations based on your chosen variety."],
          ["Inoculation", "As mentioned earlier, consider inoculating pulse seeds with appropriate rhizobia bacteria strains to ensure efficient nitrogen fixation."],
          ["Soil organic matter", "Maintaining adequate soil organic matter levels can improve nutrient retention and availability for pulses."],
          ["Micronutrients", "Soil testing can identify potential micronutrient deficiencies. Foliar application might be necessary to address these deficiencies."]
        ],
        Further_Resources: [

          ["Legume (Pulse) Fertilization Guide (International Plant Nutrition Institute)", "http://www.ipni.net/ipniweb/portal.nsf/0/B80EA9C6DB45F6FA852578BD005E4F40/$FILE/IPNI_PR_0312_F_LR.pdf", "his guide provides an overview of nutrient management for legumes, highlighting the importance of phosphorus, potassium, and sulfur, while considering nitrogen fixation."],
          ["Soil Fertility for Pulse Crops", "https://landresources.montana.edu/soilfertility/soilscoop/ss_Pulse.html", ""],
        ]
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
          potassium: { min: 50, max: 150 }, // kg/hectare
        },
        General_Principles: [
          ["Soil Testing", "Before applying fertilizer, conduct a soil test to determine existing nutrient levels (nitrogen, phosphorus, potassium, calcium, magnesium) in your soil. This guides you in selecting the appropriate fertilizer type and amount for optimal sugarcane growth and yield."],
          ["Sugarcane's Needs", "Sugarcane has a high demand for nitrogen (N) throughout its growth cycle for vigorous stalk development. It also has moderate requirements for phosphorus (P), potassium (K), calcium (Ca), and magnesium (Mg) for proper root development, stem elongation, and sugar accumulation."]
        ],
        Fertilizer_Application_Stages: [
          ["Planting Stage", "Apply a portion of the fertilizer, primarily phosphorus (P) and potassium (K), at planting. This ensures these nutrients are readily available for early root development and establishment."],
          ["Tillering Stage", "Apply nitrogen (N) fertilizer during the tillering stage (around 4-6 weeks after planting) to promote healthy stalk growth and tillering."],
          ["Grand Growth Stage", " Apply additional nitrogen (N) fertilizer throughout the grand growth stage (typically 2-3 applications) to sustain stalk elongation and sugar accumulation. The frequency and amount of N application will depend on soil conditions, variety, and expected yield."],
        ],
        Specific_Recommendations: [ //(Always adjust based on soil test results and local conditions):
          ["Nitrogen (N)", "Apply a total of 150-300 kg/ha (136-272 lb/acre) of nitrogen (N) split into multiple applications throughout the growing season. The specific amount and timing will depend on soil test results, expected yield, and variety.", ""],
          ["Phosphorus (P)", "Apply 50-100 kg/ha (45-90 lb/acre) of P2O5 (phosphate) at planting based on soil test.", ""],
          ["Potassium (K)", "Apply 50-150 kg/ha (45-136 lb/acre) of K2O (potash) at planting or split into applications at planting and tillering stage based on soil test.", ""],
          ["Calcium (Ca)", "Apply 100-200 kg/ha (90-181 lb/acre) of calcium (Ca) as needed based on soil test, particularly in soils deficient in calcium. Calcium can be applied at planting or during early growth stages.", ""],
          ["Magnesium (Mg)", "Apply 20-40 kg/ha (18-36 lb/acre) of magnesium (Mg) as needed based on soil test, particularly in soils deficient in magnesium. Magnesium can be applied at planting or during early growth stages.", ""],
        ],
        Additional_Considerations: [
          ["Split application", "Splitting nitrogen application into multiple doses throughout the growing season improves nitrogen use efficiency and reduces leaching risks."],
          ["Foliar application", "Foliar application of micronutrients like zinc (Zn) or manganese (Mn) might be beneficial in some cases, especially if deficiencies are identified."],
          ["Organic matter", "Maintaining adequate soil organic matter levels can improve nutrient retention and availability for sugarcane."],
          ["Irrigation management:", " Proper irrigation practices are crucial for sugarcane production as it requires a significant amount of water throughout the growing season."],
          ["Sugarcane variety", "Different sugarcane varieties may have varying nutrient requirements. Consult with seed suppliers or agricultural experts for specific recommendations for your chosen variety."],

        ],
        Further_Resources: [

          ["Sugarcane Fertilization Guide (Sugar Research International)", "https://www.foodstandards.gov.au/consumer/nutrition/Sugar", "This guide provides detailed information on sugarcane nutrient management, including specific recommendations for nitrogen, phosphorus, potassium, and micronutrients."],
          ["Best Management Practices for Sugarcane Production (Food and Agriculture Organization)", "https://www.fao.org/faostat/en/", "This resource offers a global perspective on sugarcane production practices, including a section on fertilizer management and nutrient requirements."],
          ["Sugarcane Fertility Management (University of Florida)", "https://ifas.ufl.edu/", "While this website focuses on Florida, it provides general information on sugarcane fertilization practices and considerations."]
        ]
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
        General_Principles: [
          ["", ""],
          ["", ""]
        ],
        Fertilizer_Application_Stages: [
          ["", ""],
          ["", ""]
        ],
        Specific_Recommendations: [ //(Always adjust based on soil test results and local conditions):
          ["Nitrogen (N)", "", ""],
          ["Phosphorus (P)", "", ""],
          ["Potassium (K)", "", ""],
        ],
        Additional_Considerations: [
          ["", ""],
          ["", "t"],
          ["", ""],
          ["", ""]
        ],
        Further_Resources: [

          ["", "", ""],
          ["", "", ""],
          ["", "", ""]
        ]
      },
      10: {
        name: "Wheat",
        overview: "Wheat is a major cereal crop grown worldwide. Here's a breakdown of key information about wheat fertilization, similar to the ones provided for other crops:",
        img_url: "https://images.unsplash.com/photo-1543257580-7269da773bf5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        , requirements: {
          temperature: { min: 10, max: 20 }, // °C
          moisture: { min: 40, max: 70 }, // %
          humidity: { min: 40, max: 70 }, // %
          nitrogen: { min: 100, max: 150 }, // kg/hectare
          phosphorus: { min: 20, max: 40 }, // kg/hectare
          potassium: { min: 20, max: 40 }, // kg/hectare
        },
        General_Principles: [
          ["Soil Testing", "Before applying fertilizer, conduct a soil test to determine existing nutrient levels (nitrogen, phosphorus, potassium, sulfur) in your soil. This guides you in selecting the appropriate fertilizer type and amount for optimal wheat growth and yield."],
          ["Wheat's Needs", "Wheat has a staged nutrient requirement throughout its growth cycle:"],
          ["Nitrogen (N)", "Crucial for tillering, stem development, and grain protein content. Nitrogen needs are highest during the vegetative growth stage."],
          ["Phosphorus (P)", "Important for root development, energy transfer, and seed formation. Adequate phosphorus is essential for early establishment and crop maturity."],
          ["Potassium (K)", "Plays a role in plant health, stress tolerance, and grain quality. Potassium deficiency can reduce winter hardiness and grain weight."],
          ["Sulfur (S)", "Becoming increasingly recognized as an important nutrient for wheat, particularly for protein synthesis and efficient nitrogen use."],
        ],
        Fertilizer_Application_Stages: [
          ["Basal Application", "Apply a portion of the fertilizer, primarily phosphorus (P), potassium (K), and sulfur (S), before planting or sowing. This ensures these nutrients are readily available for early root development and establishment."],
          ["Topdressing (Optional)", "Depending on soil conditions, nitrogen (N) application might be beneficial in one or two stages:"],
          ["Early topdressing", "During the vegetative stage (around 4-6 weeks after planting) to promote healthy tillering and plant growth."],
          ["Late topdressing", "n some cases, a later application (around stem elongation) might be beneficial, particularly for high-yielding varieties or nitrogen-deficient soils."]
        ],
        Specific_Recommendations: [ //(Always adjust based on soil test results and local conditions):
          ["Nitrogen (N)", "Apply a total of 50-150 kg/ha (45-136 lb/acre) of nitrogen (N) split into applications (basal and potential topdressing) based on soil test results, expected yield, and variety.", ""],
          ["Phosphorus (P)", "Apply 20-40 kg/ha (18-36 lb/acre) of P2O5 (phosphate) at planting based on soil test", ""],
          ["Potassium (K)", "Apply 20-60 kg/ha (18-54 lb/acre) of K2O (potash) at planting based on soil test.", ""],
          ["Sulfur (S)", "Apply 10-20 kg/ha (9-18 lb/acre) of sulfur (S) based on soil test, particularly in sulfur-deficient soils. Sulfur application can be done basally or during early topdressing.", ""],
        ],
        Additional_Considerations: [
          ["Wheat variety", "Different wheat varieties (winter wheat, spring wheat) may have varying nutrient requirements and timings. Consult with seed suppliers or agricultural experts for specific recommendations based on your chosen variety."],
          ["Split application", "Dividing nitrogen application into multiple doses improves nitrogen use efficiency and reduces leaching risks. Consider weather patterns and adjust application timing accordingly."],
          ["Climate", "Winter wheat has different nutrient needs compared to spring wheat due to overwintering requirements."],
          ["Micronutrients", "Micronutrient deficiencies like zinc (Zn) can occur in some cases. Soil testing and foliar application might be necessary if deficiencies are identified."]
        ],
        Further_Resources: [

          ["Wheat Fertilizer Requirements (Wikifarmer)", "https://wikifarmer.com/wheat-fertilizer-requirements/", "This guide provides a concise overview of wheat nutrient needs, application stages, and fertilizer recommendations."],
          ["Winter Wheat Fertilization (Mosaic Crop Nutrition)", "https://www.cropnutrition.com/resource-library/weathers-impact-on-nutrient-management-video/", "This resource offers detailed information on nutrient management for winter wheat, including specific considerations for nitrogen timing and application."],
          ["Wheat Fertilizer Management (Yara International)", "https://www.yara.co.uk/crop-nutrition/wheat/", "This website from Yara International provides information on nutrient requirements for wheat, highlighting the importance of a balanced approach to fertilization."]
        ]
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
    "Soils": {
      0: {
        soil: "Black",
        img: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*A3_PAT6p--51tLfFM57hIw.jpeg",
        desc: "Black soils’ significant clay content adds to their distinct physical features. Clay particles are well-known for their ability to hold water and nutrients, ensuring that plants have a steady and sustainable supply. This water retention capability is especially useful in areas with variable rainfall patterns.",
        link: "https://medium.com/@theunitedindian006/black-soils-are-also-called-as-importance-of-black-soil-e1a32a78a232"
      },
      1: {
        soil: "Clayey",
        img: "https://www.thespruce.com/thmb/R9wxhgpMQ4APb0orL0hpz0vAMgQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/SPR-understanding-and-improving-clay-soil-2539857-01-6a1c7bb45c6e4eb4985798da8591caf1.jpg",
        desc: "Clay soil can be a challenge for gardeners. While some trees and shrubs grow well in clay soil, most annuals, perennials, and vegetables don't have roots strong enough to force their way through dense clay. In soil, it is the amounts of minerals—sand, silt, and clay—that determine its texture. Sand particles are especially large and porous whereas clay particles are just the opposite: tiny, hard in their dry state, slick and sticky when wet, extremely dense, and resistant to water movement, all properties are not conducive to root growth. In clay soil, the bulbs of spring flowers simply rot over the winter.",
        link: "https://www.thespruce.com/understanding-and-improving-clay-soil-2539857"
      },
      2: {
        soil: "Loamy",
        img: "https://www.thespruce.com/thmb/R-3ar1nbgo8GISIrblLSe8UE2o8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/what-is-loam-1401908-01-a8ed5af19c7243fcb5d108e893a43bbe.jpg",
        desc: "Loam soil describes the ideal soil composition for most garden plants (although some plants require sandy, rocky, or clay soil). Loam soil holds nutrients and has a texture that retains water long enough for plant roots to access it, yet it drains well—meaning that the water eventually seeps away so that plant roots do not sit in water and rot. Without quality soil, plants struggle to survive and usually require supplemental feeding and watering.",
        link: "https://www.thespruce.com/what-is-loam-1401908"
      },
      3: {
        soil: "Red",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Soil_Auroville.JPG/1200px-Soil_Auroville.JPG",
        desc: "Red soil is a type of soil that typically develops in warm, temperate, and humid climates and comprise approximately 13% of Earth's soils.[1] It contains thin organic and organic-mineral layers of highly leached soil resting on a red layer of alluvium. Red soils contain large amounts of clay and are generally derived from the weathering of ancient crystalline and metamorphic rock. They are named after their rich red color, which can vary from reddish brown to reddish yellow as a result of their high iron content.[2] Red soil can be good or poor growing soil depending on how it is managed. It is usually low in nutrients and humus and can be difficult to cultivate due to its low water holding capacity; however, the fertility of these soils can be optimized with liming and other farming techniques.",
        link: "https://en.wikipedia.org/wiki/Red_soil"
      },
      4: {
        soil: "Sandy",
        img: "https://cdn.mos.cms.futurecdn.net/WSnoHDkry34XRxmMe9QXxC-1280-80.jpg.webp",
        desc: "Sandy soil is easy to spot by its feel. It has a gritty texture and when a handful of sandy soil is squeezed in your hand, it will easily fall apart when you open your hand again. Sandy soil is filled with, well, sand. Sand is primarily small pieces of eroded rocks. Sand tends to have large particles and the particles are solid and have no pockets where water and nutrients can hold to it. Because of this, water and nutrients tend to run out, and because sandy soil lacks both water and nutrients, many plants have a difficult time surviving in this kind of soil.",
        link: "https://www.gardeningknowhow.com/garden-how-to/soil-fertilizers/amending-sandy-soil.htm"
      }
    }
  }
]