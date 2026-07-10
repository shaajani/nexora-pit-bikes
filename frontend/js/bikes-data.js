const bikesData = [
  {
    id: "bike-28",
    name: "200CC UTV",
    shortDescription: "Heavy-duty 200cc side-by-side off-road UTV with CVT automatic transmission, double bucket seats, and rear storage rack.",
    fullDescription: "The 200cc UTV is built for trail riding, utility work, and off-road cruising. Powered by a single-cylinder 4-stroke 200cc air-cooled engine with CVT automatic transmission (1 Forward + 1 Reverse), it delivers robust power and traction. Outfitted with oil shock damping suspension, responsive four-wheel disc brakes, dual bucket seats with seatbelts, a protective overhead canopy roof frame, and a functional rear storage cargo space, it is the perfect side-by-side adventure utility vehicle.",
    images: [
      "./public/products/200cc-utv-p2.png",
      "./public/products/200cc-utv-p3.png",
      "./public/products/200cc-utv-p4.png",
      "./public/products/200cc-utv-p1.png"
    ],
    specifications: {
      "Engine Type": "200cc, Single Cylinder, 4-Stroke, Air-Cooled",
      "Transmission": "CVT Automatic (1 Forward + 1 Reverse)",
      "Starter System": "Electric Self Start",
      "Braking System": "Foot Operated Four Disc Brakes",
      "Suspension": "Oil Shock Damping",
      "Tyres": "AT 23x7-10 (Front) / AT 22x10-10 (Rear) with Alloy Rims",
      "Drive Train": "Chain Drive",
      "Fuel Capacity": "9.5 L",
      "Seat Height": "500 mm",
      "Wheel Base": "1650 mm",
      "Ground Clearance": "152 mm",
      "Track Width": "Front: 1020 mm / Rear: 965 mm",
      "Weight": "Net: 245 kg",
      "Max Speed": "65 km/h",
      "Available Colors": "Red, Camouflage, Blue",
      "Warranty": "6 Months"
    },
    features: [
      "200cc CVT Automatic Engine with Reverse",
      "Side-by-Side Dual Bucket Seats with Canopy",
      "Functional Rear Cargo Storage Rack",
      "All Alloy Wheel Rims & Knobby Tires",
      "Foot Operated Four-Wheel Hydraulic Disc Brakes",
      "Electric Key Start System"
    ],
    colors: ["Red", "Camouflage", "Blue"],
    inStock: true,
    category: "ATV"
  },
  {
    id: "bike-29",
    name: "200CC SUPER BULL ATV",
    shortDescription: "Rugged 200cc Super Bull ATV with electric winch, passenger backrest, outer protector roll cage, double aluminum exhaust, and a full-size spare tyre.",
    fullDescription: "The 200cc Super Bull ATV is a high-utility, heavy-duty adventure quad. Featuring an oil-cooled 200cc 4-stroke single-cylinder engine mated to an automatic 3-speed transmission with reverse (1F+1N+1R), it is built to master tough terrain. Standard features include an electric front winch, structural outer roll cage, passenger backrest, double aluminum exhaust system, digital speedometer, multiple spotlights, and a rear-mounted full-size spare wheel.",
    images: [
      "./public/products/super-bull-atv-p1.png",
      "./public/products/super-bull-atv-p2.png",
      "./public/products/super-bull-atv-p4.png",
      "./public/products/super-bull-atv-p5.png",
      "./public/products/super-bull-atv-p3.png"
    ],
    specifications: {
      "Engine Type": "200cc, Single Cylinder, 4-Stroke, Oil-Cooled, Double Exhaust",
      "Transmission": "Automatic 3 Speeds (1F + 1N + 1R)",
      "Starter System": "Electric Self Start + Pull Start + Remote Start",
      "Braking System": "Front & Rear Hydraulic Disc Brakes",
      "Suspension": "Airbag Hydraulic Suspension",
      "Tyres": "25x8-12 (Front) / 25x10-12 (Rear) with Aluminum Rims",
      "Drive Train": "Chain Drive",
      "Fuel Capacity": "7.8 L",
      "Seat Height": "890 mm",
      "Wheel Base": "1210 mm",
      "Step to Step Height": "480 mm",
      "Weight": "Net: 198 kg / Gross: 232 kg",
      "Max Speed": "80 km/h",
      "Max Load Capacity": "200 kg",
      "Available Colors": "Red, Yellow, Orange, Blue",
      "Warranty": "6 Months"
    },
    features: [
      "200cc Oil-Cooled Engine with Dual Exhaust",
      "Front Mounted Electric Utility Winch",
      "Passenger Backrest & Integrated Cargo Rack",
      "Airbag-assisted Hydraulic Suspension",
      "Rear-Mounted Full-Size Spare Wheel",
      "Digital Speedometer & 4 Spotlight Array",
      "Remote Start/Stop Command & Pull Start Backup"
    ],
    colors: ["Red", "Yellow", "Orange", "Blue"],
    inStock: true,
    category: "ATV"
  },
  {
    id: "bike-30",
    name: "500CC BEAST ATV",
    shortDescription: "Ultimate 500cc 4x4 Beast ATV with liquid-cooled engine, shaft drive, selectable 2WD/4WD, and heavy-duty front winch.",
    fullDescription: "The 500cc Beast ATV is the pinnacle of off-road utility and trail domination. Driven by a Gaokin 500cc single-cylinder 4-stroke liquid-cooled electronic fuel injection engine delivering 29 kW of power and 44 Nm of torque, it features selectable 2WD/4WD shaft drive transmission (F-N-R). Equipped with high-performance independent double disc front brakes and single disc rear brakes, dual spring-over-shock absorbers, a heavy-duty front electric winch, a premium passenger backrest, and large SunF off-road tires, this 4x4 machine is designed to conquer any terrain with absolute authority.",
    images: [
      "./public/products/500cc-beast-atv-p2.png",
      "./public/products/500cc-beast-atv-p4.png",
      "./public/products/500cc-beast-atv-p5.png",
      "./public/products/500cc-beast-atv-p6.png",
      "./public/products/500cc-beast-atv-p7.png",
      "./public/products/500cc-beast-atv-p8.png",
      "./public/products/500cc-beast-atv-p9.png",
      "./public/products/500cc-beast-atv-p1.png",
      "./public/products/500cc-beast-atv-p3.png"
    ],
    specifications: {
      "Engine Type": "Gaokin 500cc, Single Cylinder, 4-Stroke, Water-Cooled, EFI",
      "Max Power": "29 kW @ 6000 r/min",
      "Max Torque": "44 N.m @ 6750 r/min",
      "Transmission": "Automatic F-N-R (Selectable 2WD / 4WD)",
      "Starter System": "Electric E-Start",
      "Braking System": "Front Double Disc Brakes / Rear Single Disc Brake",
      "Drive Train": "Shaft Drive",
      "Fuel Capacity": "34 L (Main: 18L / Auxiliary: 16L)",
      "Seat Height": "900 mm",
      "Ground Clearance": "280 mm",
      "Tyres": "SunF F 25x8-12 / R 25x10-12 Off-Road with Aluminum Rims",
      "Dimensions": "Vehicle: 200 x 118 x 122 cm / Carton: 220 x 129 x 90 cm",
      "Max Speed": "80 km/h",
      "Warranty": "6 Months"
    },
    features: [
      "Gaokin 500cc Water-Cooled EFI Engine",
      "Selectable 4WD / 2WD Shaft Drive System",
      "Heavy-Duty Front Utility Winch",
      "Dual Tank System (34L Total Capacity)",
      "Independent Front & Rear Disc Brakes",
      "Premium SunF Off-Road Tires on Aluminum Rims",
      "Comfortable Passenger Backrest & Integrated Cargo Grids"
    ],
    colors: ["Grey"],
    inStock: true,
    category: "ATV"
  },
  {
    id: "bike-25",
    name: "135CC SUPER PHANTOM ATV",
    shortDescription: "Premium 135cc Super Phantom ATV with outer cage, aluminum wheels, backrest, handguards, digital speedometer, remote, and LED lights.",
    fullDescription: "The 135cc Super Phantom ATV is a heavy-duty, fully loaded off-road utility quad. Boasting a robust 135cc 4-stroke single cylinder air-cooled engine with automatic transmission (3 speeds: 1F+1N+1R), it is built for extreme trail adventure and durability. Features include a structural outer roll cage, custom aluminum wheels, a comfortable passenger backrest, handguards, rearview mirrors, a digital speedometer, remote control, and high-power LED lights with extra spotlights.",
    images: [
      "./public/products/super-phantom-atv-p1.png",
      "./public/products/super-phantom-atv-p2.png",
      "./public/products/super-phantom-atv-p3.png",
      "./public/products/super-phantom-atv-p4.png",
      "./public/products/super-phantom-atv-p5.png",
      "./public/products/super-phantom-atv-p6.png",
      "./public/products/super-phantom-atv-p7.png"
    ],
    specifications: {
      "Engine Type": "135cc, Single Cylinder, 4-Stroke, Air-Cooled",
      "Max Power": "5.8 kW @ 5000 r/min",
      "Transmission": "3 Speeds (1F + 1N + 1R)",
      "Starter System": "Electric Start",
      "Braking System": "Front Drum Brake & Rear Hydraulic Disc Brake",
      "Suspension": "All Hydraulic Absorbers",
      "Tyres": "19x7-8 (Front) / 18x9.5-8 (Rear) with Aluminum Hubs",
      "Drive Train": "Chain Drive",
      "Fuel Capacity": "4.5 L",
      "Seat Height": "800 mm",
      "Wheel Base": "1180 mm",
      "Ground Clearance": "280 mm",
      "Weight": "Net: 135 kg / Gross: 158 kg",
      "Max Speed": "45 km/h",
      "Max Load Capacity": "150 kg",
      "Available Colors": "Blue, Black, White, Red, Green Camo, Yellow",
      "Warranty": "6 Months"
    },
    features: [
      "135cc Automatic Engine with Reverse",
      "Structural Outer Safety Roll Cage",
      "Custom Aluminum Accent Wheels",
      "Comfortable Passenger Backrest & Handguards",
      "Digital Speedometer & Review Mirrors",
      "High-Power LED Headlights & Spotlights",
      "Remote Kill Switch Control"
    ],
    colors: ["Blue", "Black", "White", "Red", "Green Camo", "Yellow"],
    inStock: true,
    category: "ATV"
  },
  {
    id: "bike-26",
    name: "150CC MINI JEEP",
    shortDescription: "Rugged 150cc 4-stroke petrol Mini Jeep with key start, manual 3-forward + 1-reverse transmission, and spring damping suspension.",
    fullDescription: "The 150cc Mini Jeep is a miniature off-road powerhouse styled after classic military vehicles. Powered by a Shineray brand 150cc 4-stroke air-cooled engine, it features a manual transmission (3 Forward + 1 Reverse) for full control, a key start, and a chain drive. Equipped with front and rear spring damping suspension, responsive foot brakes, a massive 9L fuel tank, and 18x7-8 tyres, it delivers an authentic, heavy-duty adventure ride.",
    images: [
      "./public/products/mini-jeep-p1.png",
      "./public/products/mini-jeep-p2.png",
      "./public/products/mini-jeep-p3.png",
      "./public/products/mini-jeep-p4.png",
      "./public/products/mini-jeep-p5.png",
      "./public/products/mini-jeep-p6.png",
      "./public/products/mini-jeep-p7.png",
      "./public/products/mini-jeep-p8.png",
      "./public/products/mini-jeep-p9.png"
    ],
    specifications: {
      "Engine Type": "Shineray Brand 150cc, Single Cylinder, 4-Stroke, Air-Cooled",
      "Compression Ratio": "10.5:1",
      "Ignition": "C.D.I",
      "Transmission": "Manual 3 Speeds Forward + 1 Speed Reverse",
      "Starter System": "Electric Key Start",
      "Braking System": "Foot Brake (Disc)",
      "Suspension": "Spring Damping",
      "Tyres": "18x7-8 Off-Road Tyres",
      "Drive Train": "Chain Drive",
      "Fuel Capacity": "9 L",
      "Seat Height": "570 mm",
      "Wheel Base": "1240 mm",
      "Ground Clearance": "100 mm",
      "Weight": "Net: 170 kg / Gross: 230 kg",
      "Max Speed": "65 km/h",
      "Warranty": "6 Months"
    },
    features: [
      "Shineray Brand 150cc 4-Stroke Engine",
      "Manual Gearbox (3 Forward + 1 Reverse)",
      "Classic U.S. Army Military Jeep Styling",
      "Electric Key Start Ignition",
      "Extra Large 9L Fuel Tank Capacity",
      "Rear Mounted Full-Size Spare Wheel & Utility Jerry Can",
      "Front Windshield Guard Frame"
    ],
    colors: ["Military Green"],
    inStock: true,
    category: "ATV"
  },
  {
    id: "bike-27",
    name: "SUPER MOTOCROSS",
    shortDescription: "High-performance 125cc four-stroke petrol Super Motocross bike with 4-speed manual gearbox, disc brakes, and adjustable rear shock.",
    fullDescription: "The 125cc Super Motocross is built for track racing and off-road trail riding. Driven by a 125cc 4-stroke single cylinder air-cooled engine producing 6.5 kW of power, it features a 4-speed manual gearbox for precise power delivery. Outfitted with common front forks and an adjustable rear shock, all-round mechanical disc brakes, and large 17\" front / 14\" rear knobby tyres, it is built to dominate dirt tracks with agility and power.",
    images: [
      "./public/products/super-motocross-p1.png",
      "./public/products/super-motocross-p2.png",
      "./public/products/super-motocross-p3.png",
      "./public/products/super-motocross-p4.png",
      "./public/products/super-motocross-p5.png",
      "./public/products/super-motocross-p6.png"
    ],
    specifications: {
      "Engine Type": "125cc, Single Cylinder, 4-Stroke, Air-Cooled",
      "Max Power": "6.5 kW @ 7500 r/min",
      "Max Torque": "8.0 N.m @ 5000 r/min",
      "Transmission": "4-Speed Manual Gear",
      "Starter System": "Electric Start + Kick Start",
      "Braking System": "Front & Rear Disc Brakes",
      "Suspension": "Common Front Fork & Adjustable Rear Shock",
      "Tyres": "17\" (Front) / 14\" (Rear) Knobby Tyres",
      "Drive Train": "Chain Drive",
      "Fuel Capacity": "4 L",
      "Seat Height": "880 mm",
      "Wheel Base": "1180 mm",
      "Ground Clearance": "260 mm",
      "Weight": "Net: 52 kg / Gross: 67 kg",
      "Max Speed": "80 km/h",
      "Max Load Capacity": "150 kg",
      "Available Colors": "Blue, Black, Red, Orange, Yellow",
      "Warranty": "6 Months"
    },
    features: [
      "125cc 4-Stroke Air-Cooled Engine",
      "4-Speed Manual Gearbox for High Control",
      "Dual Electric Self-Start & Kick-Start",
      "All Disc Brakes (Front & Rear)",
      "Adjustable Rear Monoshock Suspension",
      "Monster Energy Inspired Sports Graphics"
    ],
    colors: ["Blue", "Black", "Red", "Orange", "Yellow"],
    inStock: true,
    category: "Dirt Bikes"
  },
  {
    id: "bike-22",
    name: "DIRT PLUS",
    shortDescription: "High-performance 50cc two-stroke petrol Dirt Plus bike with automatic transmission, self start, pull start, and all disc brakes.",
    fullDescription: "The 50cc Dirt Plus is a top-tier off-road machine designed for riders seeking the ultimate trail adventure. Built with a 49cc 2-stroke single cylinder air-cooled engine, automatic transmission, easy pull start + electric start, and robust front/rear disc brakes, it offers a secure and thrilling riding experience on any terrain.",
    images: [
      "./public/products/dirt-plus-p1.png",
      "./public/products/dirt-plus-p2.png",
      "./public/products/dirt-plus-p3.png",
      "./public/products/dirt-plus-p4.png",
      "./public/products/dirt-plus-p5.png",
      "./public/products/dirt-plus-p6.png"
    ],
    specifications: {
      "Engine Type": "49cc, Single Cylinder, 2-Stroke, Air-Cooled",
      "Max Power": "2 kW @ 700 r/min",
      "Transmission": "Automatic",
      "Starter System": "Easy Alloy Pull Start + Electric Start",
      "Braking System": "Front & Rear Disc Brakes",
      "Suspension": "Front Fork & Rear Spring Absorber",
      "Tyres": "110/50-6.5 (Front) / 90/65-6.5 (Rear)",
      "Drive Train": "Chain Drive",
      "Fuel Capacity": "1.5 L",
      "Seat Height": "470 mm",
      "Wheel Base": "750 mm",
      "Ground Clearance": "80 mm",
      "Weight": "Net: 18 kg / Gross: 24 kg",
      "Max Speed": "40 km/h",
      "Max Load Capacity": "85 kg",
      "Available Colors": "Yellow, Orange, Green, Blue, Red",
      "Warranty": "6 Months"
    },
    features: [
      "50cc 2-Stroke Single Cylinder Engine",
      "Dual Electric Self-Start & Pull-Start",
      "Automatic Transmission for Easy Riding",
      "Front and Rear Mechanical Disc Brakes",
      "Spring Shock Absorbers",
      "High-Grip Off-Road Tyres"
    ],
    colors: ["Yellow", "Orange", "Green", "Blue", "Red"],
    inStock: true,
    category: "Dirt Bikes"
  },
  {
    id: "bike-23",
    name: "125CC MONKEY BIKE",
    shortDescription: "Classic 125cc four-stroke petrol Monkey Bike with semi-automatic 4-speed gearbox, self start, kick start, and dual disc brakes.",
    fullDescription: "The 125cc Monkey Bike brings retro styling and modern performance to off-road riding. Powered by a reliable 4-stroke petrol engine mated to a semi-automatic 4-speed gearbox, it features both electric self-start and kick-start options. Responsive front and rear disc brakes, robust suspension, and compact knobby tyres make it incredibly agile and fun to ride.",
    images: [
      "./public/products/monkey-bike-p1.png",
      "./public/products/monkey-bike-p2.png",
      "./public/products/monkey-bike-p3.png",
      "./public/products/monkey-bike-p4.png",
      "./public/products/monkey-bike-p5.png"
    ],
    specifications: {
      "Engine Type": "125cc, Single Cylinder, 4-Stroke, Air-Cooled",
      "Transmission": "Semi-Automatic 4-Speed",
      "Starter System": "Electric Self Start + Kick Start",
      "Braking System": "Front & Rear Disc Brakes",
      "Suspension": "Dual Front Telescopic Forks & Rear Dual Shock Absorbers",
      "Tyres": "Wide Off-Road Knobby Tyres",
      "Drive Train": "Chain Drive",
      "Fuel Capacity": "3.5 L",
      "Seat Height": "650 mm",
      "Max Speed": "65 km/h",
      "Max Load Capacity": "100 kg",
      "Available Colors": "White, Black, Red",
      "Warranty": "6 Months"
    },
    features: [
      "125cc 4-Stroke High-Torque Engine",
      "Semi-Automatic 4-Gear Transmission",
      "Convenient Electric Self-Start & Kick-Start",
      "All-Disc Braking System for Maximum Safety",
      "Retro Classic Styling with Chrome Accents",
      "Compact & Highly Maneuverable Frame"
    ],
    colors: ["White", "Black", "Red"],
    inStock: true,
    category: "Dirt Bikes"
  },
  {
    id: "bike-24",
    name: "MOTOCROSS PRO",
    shortDescription: "Professional 125cc four-stroke petrol Motocross Pro bike with 4-speed manual gearbox, inverted front forks, and dual hydraulic disc brakes.",
    fullDescription: "The 125cc Motocross Pro is built for serious off-road riding and track performance. Boasting a high-output 125cc 4-stroke single cylinder engine with a 4-speed manual gearbox, it delivers professional-grade power and response. Features front inverted forks, built-in airbag rear shock absorption, and front/rear hydraulic disc brakes for unparalleled handling, safety, and comfort on the most demanding dirt tracks.",
    images: [
      "./public/products/motocross-pro-p1.png",
      "./public/products/motocross-pro-p2.png",
      "./public/products/motocross-pro-p3.png",
      "./public/products/motocross-pro-p4.png"
    ],
    specifications: {
      "Engine Type": "125cc, Single Cylinder, 4-Stroke, Air-Cooled",
      "Transmission": "4-Speed Manual Gear",
      "Starter System": "Electric Start + Kick Start",
      "Braking System": "Front & Rear Hydraulic Disc Brakes",
      "Suspension": "Front Inverted Shock Absorber & Rear Built-in Airbag Shock Absorption",
      "Tyres": "70/100-17 (Front) / 90/100-14 (Rear)",
      "Drive Train": "Chain Drive",
      "Exhaust": "Aluminum Anti-Scald Exhaust Pipe",
      "Wheel Base": "1180 mm",
      "Ground Clearance": "260 mm",
      "Seat Height": "880 mm",
      "Max Speed": "75 km/h",
      "Max Load Capacity": "110 kg",
      "Available Colors": "White/Blue/Yellow, Orange/White/Blue",
      "Warranty": "6 Months"
    },
    features: [
      "High-Performance 125cc 4-Stroke Engine",
      "4-Speed Manual Gearbox for Full Control",
      "Inverted Front Forks & Airbag Rear Suspension",
      "Front and Rear Hydraulic Disc Brakes",
      "Aggressive Motocross Styling with Premium Graphics",
      "Large 17\" Front and 14\" Rear Wheels"
    ],
    colors: ["White/Blue/Yellow", "Orange/White/Blue"],
    inStock: true,
    category: "Dirt Bikes"
  },

  {
    id: "bike-19",
    name: "MINI NEO ATV",
    shortDescription: "Vibrant 50cc Mini Neo ATV with a 2-stroke petrol engine, automatic transmission, and all disc brakes.",
    fullDescription: "The 50cc Mini Neo ATV is the perfect junior machine for young riders. Sporting a reliable 49cc 2-stroke single cylinder air-cooled engine and a fully automatic transmission, it is extremely easy and fun to handle. Front and rear disc brakes and spring absorbers ensure a secure and stable ride.",
    images: [
      "./public/products/media__1783403320328_page_1.png",
      "./public/products/media__1783403320328_page_2.png",
      "./public/products/media__1783403320328_page_3.png",
      "./public/products/media__1783403320328_page_4.png",
      "./public/products/media__1783403320328_page_5.png",
      "./public/products/media__1783403320328_page_6.png",
      "./public/products/media__1783403320328_page_7.png"
    ],
    specifications: {
      "Engine Type": "49cc, Single Cylinder, 2-Stroke, Air-Cooled",
      "Transmission": "Automatic",
      "Starter System": "Self Start + Pull Start",
      "Braking System": "Front & Rear Disc Brakes",
      "Suspension": "Front & Rear Dual Spring Absorbers",
      "Tyres": "4.10-6 (Front) / 13x5.00-6 (Rear)",
      "Drive Train": "Chain Drive",
      "Fuel Capacity": "1 L",
      "Seat Height": "530 mm",
      "Max Speed": "45 km/h",
      "Max Load Capacity": "110 kg",
      "Available Colors": "Orange, Black, Blue, Green, Red",
      "Warranty": "6 Months"
    },
    features: [
      "Junior Rider Dimensions",
      "Easy Automatic Transmission",
      "Electric Key Start & Pull Start",
      "Front and Rear Cargo Racks",
      "Dual Disc Brakes",
      "Safety Lanyard Kill Switch"
    ],
    colors: ["Orange", "Black", "Blue", "Green", "Red"],
    inStock: true,
    category: "ATV"
  },
  {
    id: "bike-6",
    name: "MINI NEOPLUS",
    shortDescription: "Premium 50cc Mini Neoplus ATV with a 2-stroke petrol engine, automatic transmission, and all disc brakes.",
    fullDescription: "The 50cc Mini Neoplus ATV is designed for young riders who want a premium and stylish off-road vehicle. With its aggressive utility racks, self-start + pull start system, speed limiter, and remote shutoff kill switch, it offers safety, comfort, and thrilling performance.",
    images: [
      "./public/products/media__1783403320412_page_1.png",
      "./public/products/media__1783403320412_page_2.png",
      "./public/products/media__1783403320412_page_3.png",
      "./public/products/media__1783403320412_page_4.png",
      "./public/products/media__1783403320412_page_5.png",
      "./public/products/media__1783403320412_page_6.png",
      "./public/products/media__1783403320412_page_7.png",
      "./public/products/media__1783403320412_page_8.png",
      "./public/products/media__1783403320412_page_9.png",
      "./public/products/media__1783403320412_page_10.png"
    ],
    specifications: {
      "Engine Type": "50cc, Single Cylinder, 2-Stroke, Air-Cooled",
      "Transmission": "Automatic",
      "Starter System": "Self Start + Pull Start",
      "Braking System": "Front & Rear Disc Brakes",
      "Suspension": "Front & Rear Spring Absorbers",
      "Tyres": "All-Terrain Off-Road Tyres",
      "Drive Train": "Chain Drive",
      "Fuel Capacity": "4 L",
      "Seat Height": "550 mm",
      "Max Speed": "45 km/h",
      "Max Load Capacity": "80 kg",
      "Available Colors": "Orange, Black, Blue, Green, Red",
      "Warranty": "6 Months"
    },
    features: [
      "50cc Engine for Young Riders",
      "Automatic Transmission",
      "All Disc Brakes",
      "Speed Limiter",
      "Low Seat Height",
      "Multiple Vibrant Colors",
      "Electric Start",
      "Remote Control Kill Switch"
    ],
    colors: ["Orange", "Black", "Blue", "Green", "Red"],
    inStock: true,
    category: "ATV"
  },
  {
    id: "bike-12",
    name: "135cc PHANTOM ATV",
    shortDescription: "Robust 135cc Phantom ATV with 3-speed automatic transmission, hydraulic brakes, digital speedometer, backrest, handguard, remote, and LED lights.",
    fullDescription: "The 135cc Phantom ATV is a heavy-duty off-road machine built for durability and power. Featuring a 3-speed automatic transmission (1 Forward + 1 Neutral + 1 Reverse), hydraulic absorbers, and custom colourful wheel edge hubs, it is equipped with a digital speedometer, backrest, handguards, review mirrors, and extra spotlights.",
    images: [
      "./public/products/super-phantom-atv-p1.png",
      "./public/products/super-phantom-atv-p3.png",
      "./public/products/super-phantom-atv-p4.png",
      "./public/products/super-phantom-atv-p5.png",
      "./public/products/super-phantom-atv-p6.png",
      "./public/products/super-phantom-atv-p7.png"
    ],
    specifications: {
      "Engine Type": "135cc, Single Cylinder, 4-Stroke, Air-Cooled",
      "Transmission": "3 Speeds (1F + 1N + 1R)",
      "Starter System": "Electric Self Start",
      "Braking System": "Front Drum Brake & Rear Hydraulic Disc Brake",
      "Suspension": "All Hydraulic Absorbers",
      "Tyres": "19X7-8 (Front) / 18X9.5-8 (Rear) with Colourful Edges",
      "Drive Train": "Chain Drive",
      "Fuel Capacity": "4.5 L",
      "Seat Height": "800 mm",
      "Max Speed": "45 km/h",
      "Max Load Capacity": "150 kg",
      "Available Colors": "Green Camo, White, Blue, Yellow, Red, Black",
      "Warranty": "6 Months"
    },
    features: [
      "Backrest and Handguards",
      "Digital Speedometer",
      "Review Mirrors",
      "Remote Control Shutoff",
      "LED Light and Extra Spotlights",
      "4-Hole Hub Wheel Accent Rims"
    ],
    colors: ["Green Camo", "White", "Blue", "Yellow", "Red", "Black"],
    inStock: true,
    category: "ATV"
  },
  {
    id: "bike-21",
    name: "MINI MOUZER ATV",
    shortDescription: "Vibrant 50cc Mini Mouzer ATV with a 2-stroke petrol engine, automatic transmission, and all disc brakes.",
    fullDescription: "The 50cc Mini Mouzer ATV is designed for kids and teens who want an aggressive off-road look. Outfitted with automatic transmission, self start + pull start, and dual spring absorbers, it is extremely easy and safe to handle.",
    images: [
      "./public/products/50cc-mini-mouzer-atv-p1.png",
      "./public/products/50cc-mini-mouzer-atv-p3.png",
      "./public/products/50cc-mini-mouzer-atv-p4.png",
      "./public/products/50cc-mini-mouzer-atv-p5.png"
    ],
    specifications: {
      "Engine Type": "49cc, Single Cylinder, 2-Stroke, Air-Cooled",
      "Transmission": "Automatic",
      "Starter System": "Pull Start + Self Start",
      "Braking System": "Front & Rear Disc Brakes",
      "Suspension": "Dual Front & Single Rear Spring Absorber",
      "Tyres": "4.10-6 (Front) / 13x5.00-6 (Rear)",
      "Drive Train": "Chain Drive",
      "Fuel Capacity": "1 L",
      "Seat Height": "530 mm",
      "Wheel Base": "600 mm",
      "Ground Clearance": "110 mm",
      "Max Speed": "45 km/h",
      "Max Load Capacity": "110 kg",
      "Available Colors": "Black, Red, Blue, White",
      "Warranty": "6 Months"
    },
    features: [
      "50cc 2-Stroke Petrol Engine",
      "Self Start + Pull Start",
      "All Disc Brakes",
      "Dual Spring Absorbers",
      "Front & Rear Cargo Racks",
      "Safety Lanyard Kill Switch"
    ],
    colors: ["Black", "Red", "Blue", "White"],
    inStock: true,
    category: "ATV"
  },
  {
    id: "bike-8",
    name: "DIRT BIKE",
    shortDescription: "Vibrant 50cc two-stroke petrol Dirt Bike with automatic transmission, self start, pull start, and dual disc brakes.",
    fullDescription: "The 50cc Dirt Bike is a high-performance, lightweight machine designed for trail riders. Featuring a reliable 2-stroke automatic engine, the convenience of both electric self-start and manual pull-start, and responsive front and rear disc brakes, it provides a stable and exhilarating riding experience.",
    images: [
      "./public/products/50cc-dirt-bike-p1.png",
      "./public/products/50cc-dirt-bike-p2.png",
      "./public/products/50cc-dirt-bike-p3.png",
      "./public/products/50cc-dirt-bike-p4.png",
      "./public/products/50cc-dirt-bike-p5.png",
      "./public/products/50cc-dirt-bike-p6.png",
      "./public/products/50cc-dirt-bike-p7.png"
    ],
    specifications: {
      "Engine Type": "50cc, Single Cylinder, 2-Stroke, Air-Cooled",
      "Transmission": "2 Stroke Automatic",
      "Starter System": "Self Start + Pull Start",
      "Braking System": "All Disc Brakes",
      "Suspension": "Front Telescopic Fork & Rear Shock",
      "Tyres": "Off-Road Knobby Tyres",
      "Drive Train": "Chain Drive",
      "Fuel Capacity": "2 L",
      "Seat Height": "600 mm",
      "Max Speed": "45 km/h",
      "Max Load Capacity": "80 kg",
      "Available Colors": "Black/White, Green, Orange, Red, White, Yellow, Blue",
      "Warranty": "6 Months"
    },
    features: [
      "50cc 2-Stroke Petrol Engine",
      "2-Stroke Automatic Transmission",
      "Self Start + Pull Start",
      "Front & Rear Disc Brakes",
      "High-Grip Knobby Tires"
    ],
    colors: ["Black/White", "Green", "Orange", "Red", "White", "Yellow", "Blue"],
    inStock: true,
    category: "Dirt Bikes"
  },
  {
    id: "bike-9",
    name: "PIT BIKE",
    shortDescription: "Powerful 125cc four-stroke petrol Pit Bike with automatic transmission, electric self-start, and dual disc brakes.",
    fullDescription: "The 125cc Pit Bike delivers the perfect combination of size and power. Sporting a 125cc 4-stroke petrol engine, fully automatic transmission, electric self-start, and high-performance wave disc brakes, this bike is built for riders looking to master dirt tracks and rocky trails.",
    images: [
      "./public/products/125cc-pit-bike-p1.png",
      "./public/products/125cc-pit-bike-p2.png",
      "./public/products/125cc-pit-bike-p3.png",
      "./public/products/125cc-pit-bike-p4.png",
      "./public/products/125cc-pit-bike-p5.png",
      "./public/products/125cc-pit-bike-p6.png",
      "./public/products/125cc-pit-bike-p7.png"
    ],
    specifications: {
      "Engine Type": "125cc, Single Cylinder, 4-Stroke, Air-Cooled",
      "Transmission": "Automatic Transmission",
      "Starter System": "Self Start",
      "Braking System": "All Disc Brakes",
      "Suspension": "Front Inverted Forks & Heavy Duty Rear Shock",
      "Tyres": "Off-Road Knobby Tyres",
      "Drive Train": "Chain Drive",
      "Fuel Capacity": "4.5 L",
      "Seat Height": "750 mm",
      "Max Speed": "70 km/h",
      "Max Load Capacity": "100 kg",
      "Available Colors": "Red/Blue/Yellow Graphics",
      "Warranty": "6 Months"
    },
    features: [
      "125cc Four-Stroke Petrol Engine",
      "Automatic Transmission",
      "Electric Self Start",
      "Front & Rear Wave Disc Brakes",
      "High-Grip Off-Road Tires"
    ],
    colors: ["Red/Blue/Yellow Graphics"],
    inStock: true,
    category: "Dirt Bikes"
  },
  {
    id: "bike-1",
    name: "BMW Foldable Fat Bicycle",
    shortDescription: "Premium 26-inch BMW foldable fat tyre bicycle — portable, sturdy, and built for urban roads and trail adventures.",
    fullDescription: "The BMW Foldable Fat Bicycle combines the ease of a folding frame with the heavy-duty capabilities of fat tyres. Perfect for commuting and off-road exploration, its 26-inch wheels with 4-inch wide tyres absorb bumps and provide excellent traction on gravel, sand, and city streets.",
    images: [
      "./public/products/26-inches-foldable-fat-bicycle-p1.png",
      "./public/products/26-inches-foldable-fat-bicycle-p2.png",
      "./public/products/26-inches-foldable-fat-bicycle-p3.png",
      "./public/products/26-inches-foldable-fat-bicycle-p4.png",
      "./public/products/26-inches-foldable-fat-bicycle-p5.png",
      "./public/products/26-inches-foldable-fat-bicycle-p6.png"
    ],
    specifications: {
      "Wheel Size": "26\" Fat Tyre",
      "Frame Material": "Foldable Steel Frame",
      "Braking System": "Front & Rear Disc Brakes",
      "Gearbox": "Single Speed",
      "Kerb Weight": "16 kg",
      "Folded Dimensions": "75 x 60 x 35 cm",
      "Max Load Capacity": "110 kg",
      "Tyres Type": "26\" x 4.0\" All-Terrain Fat",
      "Warranty": "6 Months"
    },
    features: [
      "Quick Fold Mechanism",
      "Fat Tyres for All Terrain",
      "Front & Rear Disc Brakes",
      "Lightweight Folding Frame",
      "Adjustable Seat Height",
      "Sturdy Kickstand"
    ],
    colors: ["Red/White", "Black/White", "Yellow/White", "Blue/White", "Orange/White"],
    inStock: true,
    category: "Bicycles"
  },
  {
    id: "bike-2",
    name: "BMW Foldable Bicycle",
    shortDescription: "BMW-inspired 26-inch foldable bicycle with 21-speed Shimano drivetrain — style meets everyday practicality.",
    fullDescription: "The 26 Inches BMW Foldable Bicycle brings iconic BMW design language to the cycling world. With its sleek frame, premium paint finish, and intelligent folding mechanism, it stands out as a fashion-forward yet highly functional ride. The 26-inch wheels provide a comfortable ride height for adults, while the compact fold makes storage and transport effortless.",
    images: [
      "./public/products/26-inches-bmw-foldable-bicyle-p1.png",
      "./public/products/26-inches-bmw-foldable-bicyle-p2.png",
      "./public/products/26-inches-bmw-foldable-bicyle-p3.png",
      "./public/products/26-inches-bmw-foldable-bicyle-p4.png",
      "./public/products/26-inches-bmw-foldable-bicyle-p5.png",
      "./public/products/26-inches-bmw-foldable-bicyle-p6.png",
      "./public/products/26-inches-bmw-foldable-bicyle-p7.png",
      "./public/products/26-inches-bmw-foldable-bicyle-p8.png",
      "./public/products/26-inches-bmw-foldable-bicyle-p9.png"
    ],
    specifications: {
      "Wheel Size": "26\"",
      "Frame Material": "Foldable Alloy Frame",
      "Braking System": "Front & Rear Disc Brakes",
      "Gearbox": "21-Speed Shimano Drivetrain",
      "Kerb Weight": "14 kg",
      "Folded Dimensions": "70 x 55 x 30 cm",
      "Max Load Capacity": "100 kg",
      "Design Theme": "BMW Sport Inspired",
      "Warranty": "6 Months"
    },
    features: [
      "BMW-Inspired Design",
      "Quick Fold Mechanism",
      "21-Speed Shimano Gears",
      "Premium Disc Brakes",
      "Lightweight Alloy Frame",
      "Adjustable Handlebar & Seat"
    ],
    colors: ["Red", "Blue", "Gold", "Orange"],
    inStock: true,
    category: "Bicycles"
  },
  {
    id: "bike-3",
    name: "26 Inches Fat Tyre Jaguar Model Bicycle",
    shortDescription: "Premium 26-inch fat tyre bicycle designed for maximum grip and off-road adventure.",
    fullDescription: "The 26 Inches Fat Tyre Jaguar Model Bicycle is built for riders who want to tackle extreme terrains with confidence. Sporting massive 26\" x 4.0\" off-road tyres, a heavy-duty steel frame, and responsive front and rear disc brakes, it absorbs trail vibrations and dominates mud, sand, and gravel.",
    images: [
      "./public/products/26-inches-fat-tyre-jaguar-model-bicycle-p1.png",
      "./public/products/26-inches-fat-tyre-jaguar-model-bicycle-p2.png",
      "./public/products/26-inches-fat-tyre-jaguar-model-bicycle-p3.png",
      "./public/products/26-inches-fat-tyre-jaguar-model-bicycle-p4.png",
      "./public/products/26-inches-fat-tyre-jaguar-model-bicycle-p5.png",
      "./public/products/26-inches-fat-tyre-jaguar-model-bicycle-p6.png",
      "./public/products/26-inches-fat-tyre-jaguar-model-bicycle-p7.png",
      "./public/products/26-inches-fat-tyre-jaguar-model-bicycle-p8.png",
      "./public/products/26-inches-fat-tyre-jaguar-model-bicycle-p9.png"
    ],
    specifications: {
      "Wheel Size": "26\" Fat Tyre",
      "Frame Material": "High-Tensile Steel Frame",
      "Braking System": "Front & Rear Disc Brakes",
      "Gearbox": "21-Speed Gearing System",
      "Kerb Weight": "18 kg",
      "Tyres Type": "26\" x 4.0\" All-Terrain Fat",
      "Max Load Capacity": "120 kg",
      "Warranty": "6 Months"
    },
    features: [
      "Heavy Duty 4.0-Inch Fat Tyres",
      "Front Suspension Shock Fork",
      "Dual Mechanical Disc Brakes",
      "Sporty Jaguar Frame Design",
      "Comfort Saddle with Quick Release"
    ],
    colors: ["Orange", "Blue", "Green", "Black", "White", "Yellow", "Red", "Silver"],
    inStock: true,
    category: "Bicycles"
  },
  {
    id: "bike-4",
    name: "26 Inches Fat Tyre Foldable Magwheel Bicycle",
    shortDescription: "Premium folding bicycle with stylish 3-spoke mag wheels and full suspension comfort.",
    fullDescription: "The 26 Inches Fat Tyre Foldable Magwheel Bicycle delivers an unmatched combination of luxury styling and engineering. Featuring iconic 3-spoke alloy mag wheels, a dual-suspension frame, and a folding mechanism, it is the ultimate cruiser for commuters and urban adventurers.",
    images: [
      "./public/products/26-inches-foldable-magwheel-fat-bicycle-p1.png",
      "./public/products/26-inches-foldable-magwheel-fat-bicycle-p2.png",
      "./public/products/26-inches-foldable-magwheel-fat-bicycle-p3.png",
      "./public/products/26-inches-foldable-magwheel-fat-bicycle-p4.png",
      "./public/products/26-inches-foldable-magwheel-fat-bicycle-p5.png",
      "./public/products/26-inches-foldable-magwheel-fat-bicycle-p6.png",
      "./public/products/26-inches-foldable-magwheel-fat-bicycle-p7.png",
      "./public/products/26-inches-foldable-magwheel-fat-bicycle-p8.png"
    ],
    specifications: {
      "Wheel Size": "26\" Mag Wheel",
      "Frame Material": "Foldable Dual-Suspension Alloy Frame",
      "Braking System": "Front & Rear Hydraulic Disc Brakes",
      "Gearbox": "21-Speed Shimano Derailleurs",
      "Kerb Weight": "15 kg",
      "Folded Dimensions": "72 x 58 x 32 cm",
      "Max Load Capacity": "110 kg",
      "Warranty": "6 Months"
    },
    features: [
      "3-Spoke Aerodynamic Mag Wheels",
      "Folding Dual-Suspension Frame",
      "21-Speed Shimano Gearing System",
      "Front & Rear Disc Brakes",
      "Magwheel Styling"
    ],
    colors: ["Red", "Light Blue", "White", "Black"],
    inStock: true,
    category: "Bicycles"
  },
  {
    id: "bike-3",
    name: "500cc ATV",
    shortDescription: "Powerful 500cc all-terrain vehicle — built for serious off-road domination and adventure.",
    fullDescription: "The 500cc ATV is a beast of an all-terrain vehicle designed for serious off-road enthusiasts who demand maximum power and capability. Its massive 500cc engine delivers exciting performance across all terrains, while the aggressive styling, robust dual A-arm suspension, and 4x4 selectable drive ensure you conquer any landscape with absolute authority.",
    images: [
      "./public/products/500cc-atv-p1.png",
      "./public/products/500cc-atv-p2.png",
      "./public/products/500cc-atv-p3.png",
      "./public/products/500cc-atv-p4.png",
      "./public/products/500cc-atv-p5.png",
      "./public/products/500cc-atv-p6.png"
    ],
    specifications: {
      "Engine Type": "500cc, 4-Stroke, Single Cylinder, Air-Cooled",
      "Transmission": "4x4WD Automatic (Reverse, Neutral, Drive, Low Gear)",
      "Starter System": "Electric Self Start",
      "Braking System": "Front & Rear Disc Brakes",
      "Suspension": "Double A X Swing Arm (Front & Rear)",
      "Tyres": "25 x 4-12 (Front) / 25 x 10-12 (Rear)",
      "Drive Train": "Selectable 4WD/2WD Selectable",
      "Fuel Capacity": "12 L",
      "Seat Height": "950 mm",
      "Max Speed": "80 km/h",
      "Max Load Capacity": "500 kg",
      "Max Torque": "38 Nm @ 5500 RPM",
      "Warranty": "6 Months"
    },
    features: [
      "500cc 4-Stroke Powerhouse Engine",
      "Selectable 4x4 / 2WD Drive System",
      "Automatic CVT with Low/High Gears",
      "Double A X Swing Arm Suspension",
      "Front & Rear Utility Grids",
      "Full Road Side Mirrors & Indicators"
    ],
    colors: ["Red", "Camo"],
    inStock: true,
    category: "ATV"
  },
  {
    id: "bike-4",
    name: "300cc Panther ATV",
    shortDescription: "Versatile 300cc Panther ATV — the perfect balance of power, agility, and off-road performance.",
    fullDescription: "The 300cc Panther ATV strikes the perfect balance between raw power and nimble handling, making it the most versatile all-terrain vehicle in our lineup. Its 300cc engine provides ample power for climbing steep inclines and powering through tough terrain, while the lightweight chassis ensures sharp handling and easy maneuverability.",
    images: [
      "./public/products/300cc-panther-atv-p1.png",
      "./public/products/300cc-panther-atv-p2.png",
      "./public/products/300cc-panther-atv-p3.png",
      "./public/products/300cc-panther-atv-p4.png",
      "./public/products/300cc-panther-atv-p5.png",
      "./public/products/300cc-panther-atv-p6.png",
      "./public/products/300cc-panther-atv-p7.png"
    ],
    specifications: {
      "Engine Type": "300cc, 4-Stroke, Single Cylinder",
      "Transmission": "Automatic with Reverse",
      "Drive System": "2WD / 4WD Selectable",
      "Braking System": "Front & Rear Mechanical Disc",
      "Fuel Tank Capacity": "12 L",
      "Kerb Weight": "250 kg",
      "Max Load Capacity": "180 kg",
      "Ground Clearance": "220 mm",
      "Warranty": "6 Months"
    },
    features: [
      "300cc Engine",
      "Panther Styling",
      "2WD/4WD Selectable",
      "Automatic Transmission",
      "Disc Brakes All Round"
    ],
    colors: ["Red", "Gold", "Green"],
    inStock: true,
    category: "ATV"
  },
  {
    id: "bike-5",
    name: "200cc SPARK ATV",
    shortDescription: "Robust 200cc Spark ATV with winch, passenger backrest, outer protector cage, and double silencer.",
    fullDescription: "The 200cc Spark ATV is a fully loaded beginner to intermediate adventure quad. Boasting a robust 200cc single cylinder 4-stroke engine, electric start with remote command, automatic 3-speed transmission with reverse, front electric winch, outer protection cage, comfortable passenger backrest, and eye-catching striplights with integrated USB charging port.",
    images: [
      "./public/products/200cc-spark-atv-p1.png",
      "./public/products/200cc-spark-atv-p2.png",
      "./public/products/200cc-spark-atv-p3.png",
      "./public/products/200cc-spark-atv-p4.png",
      "./public/products/200cc-spark-atv-p5.png",
      "./public/products/200cc-spark-atv-p6.png"
    ],
    specifications: {
      "Engine Type": "200cc, Single Cylinder, 4-Stroke",
      "Transmission": "3 Speeds (1F + 1N + 1R)",
      "Starter System": "Electric Self Start & Remote Start",
      "Braking System": "Front & Rear Hydraulic Disc Brakes",
      "Absorber (F/R)": "Hydraulic Suspension",
      "Tyres": "23*7-12 (Front) / 22*12-12 (Rear) Iron Rim",
      "Drive Train": "Chain Drive",
      "Fuel Capacity": "6.5 L",
      "Seat Height": "860 mm",
      "Wheelbase": "1120 mm",
      "Max Speed": "60 km/h",
      "Max Load Capacity": "200 kg",
      "Available Colors": "Orange, Green, Red",
      "Warranty": "6 Months"
    },
    features: [
      "Winch and Backrest Included",
      "Outer Cage Protection",
      "Double Silencer Design",
      "LED Strip Lights & USB Charging Port",
      "Remote Key Fob Start/Stop",
      "All Hydraulic Braking"
    ],
    colors: ["Orange", "Green", "Red"],
    inStock: true,
    category: "ATV"
  },
  {
    id: "bike-10",
    name: "250cc SUPER HUNK ATV",
    shortDescription: "Heavy-duty 250cc Super Hunk ATV equipped with a front electric winch, passenger backrest, outer cage, and rear-mounted extra tyre.",
    fullDescription: "The 250cc Super Hunk ATV is a high-performance, heavy-duty utility quad. Outfitted with an oil-cooled 250cc single cylinder 4-stroke engine, electric start + manual pull start backup, 3-speed automatic transmission with reverse, front electric winch, robust structural outer cage, passenger backrest, and a rear-mounted full-size spare tyre.",
    images: [
      "./public/products/250cc-super-hunk-atv-p1.png",
      "./public/products/250cc-super-hunk-atv-p2.png",
      "./public/products/250cc-super-hunk-atv-p4.png"
    ],
    specifications: {
      "Engine Type": "250cc, Single Cylinder, 4-Stroke, Oil-Cooled",
      "Transmission": "3 Speeds (1F + 1N + 1R)",
      "Starter System": "Electric Self Start & Pull Start",
      "Braking System": "Front & Rear Hydraulic Disc Brakes",
      "Suspension": "Hydraulic Suspension",
      "Tyres": "25X8-10 (Front) / 25X10-10 (Rear) Aluminum Rim",
      "Drive Train": "Chain Drive",
      "Fuel Capacity": "8.5 L",
      "Seat Height": "900 mm",
      "Wheel Base": "1210 mm",
      "Max Speed": "80 km/h",
      "Max Load Capacity": "200 kg",
      "Available Colors": "Yellow, Camo Green, Black",
      "Warranty": "6 Months"
    },
    features: [
      "Front Electric Winch",
      "Passenger Backrest & Cargo Rack",
      "Structural Outer Roll Cage",
      "Rear-Mounted Full Spare Tyre",
      "High-Power LED Spotlights",
      "All Hydraulic Disc Brakes"
    ],
    colors: ["Yellow", "Camo Green", "Black"],
    inStock: true,
    category: "ATV"
  },
  {
    id: "bike-11",
    name: "20 Inches Foldable Bicycle",
    shortDescription: "Ultra-compact 20-inch foldable carbon steel bicycle with 7-speed Shimano gear system.",
    fullDescription: "The 20 Inches Foldable Bicycle is the perfect commuter companion. Extremely lightweight and strong, it features a 7-speed Shimano transmission, double v-brakes, and high-portability fold dimensions that fit inside any car boot or office cubicle.",
    images: [
      "./public/products/20-inches-foldable-bicycle-p1.png",
      "./public/products/20-inches-foldable-bicycle-p2.png",
      "./public/products/20-inches-foldable-bicycle-p3.png",
      "./public/products/20-inches-foldable-bicycle-p4.png",
      "./public/products/20-inches-foldable-bicycle-p5.png",
      "./public/products/20-inches-foldable-bicycle-p6.png",
      "./public/products/20-inches-foldable-bicycle-p7.png",
      "./public/products/20-inches-foldable-bicycle-p8.png",
      "./public/products/20-inches-foldable-bicycle-p9.png",
      "./public/products/20-inches-foldable-bicycle-p10.png"
    ],
    specifications: {
      "Wheel Size": "20 Inches",
      "Frame Material": "Foldable Carbon Steel",
      "Braking System": "Front & Rear Alloy V-Brakes",
      "Gearbox": "7-Speed Shimano Gear System",
      "Kerb Weight": "12 kg",
      "Folded Dimensions": "65 x 50 x 30 cm",
      "Max Load Capacity": "95 kg",
      "Warranty": "6 Months"
    },
    features: [
      "Ultra-Compact Folding Frame",
      "7-Speed Shimano Gears",
      "Lightweight 12 kg",
      "Adjustable Saddle & Handlebar",
      "Rear Utility Carrier & Fenders"
    ],
    colors: ["White", "Black", "Yellow", "Blue", "Green", "Red", "Orange"],
    inStock: true,
    category: "Bicycles"
  },
  {
    id: "bike-13",
    name: "20 Inches Foldable Fat Bicycle",
    shortDescription: "20-inch foldable fat tyre bike — conquer urban streets, sand, and gravel with ease.",
    fullDescription: "The 20 Inches Foldable Fat Bicycle pairs the portability of a folding bike with the absolute traction of 4-inch wide tyres. This bicycle gives you the confidence to ride through mud, sand, snow, or loose gravel while folding down into a compact footprint when your ride is over.",
    images: [
      "./public/products/20-inches-foldable-fat-bicycle-p1.png",
      "./public/products/20-inches-foldable-fat-bicycle-p2.png",
      "./public/products/20-inches-foldable-fat-bicycle-p3.png",
      "./public/products/20-inches-foldable-fat-bicycle-p4.png",
      "./public/products/20-inches-foldable-fat-bicycle-p5.png"
    ],
    specifications: {
      "Wheel Size": "20\" Fat Tyre",
      "Frame Material": "High-Tensile Steel Foldable",
      "Braking System": "Front & Rear Mechanical Disc Brakes",
      "Gearbox": "7-Speed Shimano Gear System",
      "Kerb Weight": "14.5 kg",
      "Folded Dimensions": "70 x 55 x 35 cm",
      "Max Load Capacity": "100 kg",
      "Tyres Size": "20\" x 4.0\" Knobby Fat Tyres",
      "Warranty": "6 Months"
    },
    features: [
      "Quick Fold Mechanism",
      "4.0\" Wide Fat Tyres for All Terrains",
      "7-Speed Shimano Gears",
      "Mechanical Disc Brakes",
      "Sleek Folding Mechanism"
    ],
    colors: ["Black", "Orange", "White", "Blue", "Red", "Yellow"],
    inStock: true,
    category: "Bicycles"
  },
  {
    id: "bike-15",
    name: "6.5 Inches Hoverboard",
    shortDescription: "Sleek 6.5-inch self-balancing hoverboard with built-in Bluetooth speakers and LED arch lights.",
    fullDescription: "The 6.5 Inches Hoverboard is packed with modern features, featuring a self-balancing gyroscope system that makes it highly intuitive for beginners. Powered by dual 250W motors, it cruises smoothly on flat terrain. It includes integrated Bluetooth speakers, vibrant LED arch lighting on wheels, and a UL2272 safety-certified lithium battery.",
    images: [
      "./public/products/6.5-inches-havour-board-p1.png",
      "./public/products/6.5-inches-havour-board-p2.png",
      "./public/products/6.5-inches-havour-board-p3.png",
      "./public/products/6.5-inches-havour-board-p4.png",
      "./public/products/6.5-inches-havour-board-p5.png",
      "./public/products/6.5-inches-havour-board-p6.png"
    ],
    specifications: {
      "Wheel Diameter": "6.5 Inches Solid Rubber",
      "Battery System": "36V Lithium-ion UL2272 Certified",
      "Motor Configuration": "Dual 250W Brushless Hub Motors",
      "Max Riding Speed": "12 km/h",
      "Travel Range": "10-12 km per charge",
      "Charging Time": "Approx. 2 Hours",
      "Max Load Capacity": "80 kg",
      "Gyroscopic Sensor": "Built-in Self-Balancing System",
      "Warranty": "6 Months"
    },
    features: [
      "High-Tech Self-Balancing System",
      "Vibrant LED Arch Lights on Wheels",
      "Built-in Bluetooth Speaker",
      "Non-slip Rubber Footpads",
      "UL2272 Safety Certified Battery"
    ],
    colors: ["Blue Flame", "Graffiti B&W", "Blue Camo", "Galaxy Blue", "Black Marble", "Green Camo"],
    inStock: true,
    category: "Hoverboards & Drifters"
  },
  {
    id: "bike-16",
    name: "8 Inches Hoverboard",
    shortDescription: "Rugged 8-inch off-road styled self-balancing hoverboard with wide stable tyres.",
    fullDescription: "The 8 Inches Hoverboard is designed for riders looking for extra stability. With its larger 8-inch solid rubber tyres and aggressive shell design, it handles cracks, bumps, and light gravel paths with ease. Includes built-in Bluetooth speakers, running LED path lights, and self-balancing gyroscopic sensors.",
    images: [
      "./public/products/8-inches-havour-board-p1.png",
      "./public/products/8-inches-havour-board-p2.png",
      "./public/products/8-inches-havour-board-p3.png",
      "./public/products/8-inches-havour-board-p4.png",
      "./public/products/8-inches-havour-board-p5.png"
    ],
    specifications: {
      "Wheel Diameter": "8 Inches Solid Rubber",
      "Battery System": "36V Lithium-ion UL2272 Certified",
      "Motor Configuration": "Dual 300W Brushless Hub Motors",
      "Max Riding Speed": "15 km/h",
      "Travel Range": "12-15 km per charge",
      "Charging Time": "Approx. 2.5 Hours",
      "Max Load Capacity": "100 kg",
      "Gyroscopic Sensor": "Built-in Self-Balancing System",
      "Warranty": "6 Months"
    },
    features: [
      "Large 8-inch Wheels for Stable Ride",
      "Off-Road Styled Shell",
      "Built-in Bluetooth Speakers",
      "Dynamic Running LED Lights",
      "Rugged Non-slip Pedals"
    ],
    colors: ["Red Flame", "Blue Camo", "Graffiti Black"],
    inStock: true,
    category: "Hoverboards & Drifters"
  },
  {
    id: "bike-17",
    name: "36 Volts Drifter Electric Trike",
    shortDescription: "36V rechargeable electric drifting trike — execute thrilling 360° spins with ease.",
    fullDescription: "Unleash extreme fun with the 36 Volts Drifter Electric Trike. Powered by a 250W hub motor and a long-lasting lithium battery, this drift machine allows children and teens to zoom, spin, and slide. Dual inclined rear casters enable 360-degree drifting action, while integrated LED lights and built-in Bluetooth speakers add high-tech style to every spin.",
    images: [
      "./public/products/36-volts-drifter-p1.png",
      "./public/products/36-volts-drifter-p2.png",
      "./public/products/36-volts-drifter-p3.png",
      "./public/products/36-volts-drifter-p4.png",
      "./public/products/36-volts-drifter-p5.png",
      "./public/products/36-volts-drifter-p6.png"
    ],
    specifications: {
      "Battery System": "36V Lithium-ion Rechargeable",
      "Motor Power": "250W Brushless Front Hub Motor",
      "Frame Construction": "Heavy-Duty Welded Steel",
      "Braking": "Front Hand-Operated Caliper Brake",
      "Continuous Run Time": "Up to 45 minutes per charge",
      "Max Speed": "15 km/h",
      "Weight Capacity": "65 kg",
      "Rear Wheels": "Dual Inclined Casters for Drifting",
      "Warranty": "6 Months"
    },
    features: [
      "360-Degree Spinning & Drifting",
      "Pneumatic Front Tyre",
      "Dual Inclined Rear Caster Wheels",
      "3-Speed Throttle Control",
      "Vibrant LED Safety Lights",
      "Bluetooth Speakers built-in"
    ],
    colors: ["Blue Camo", "Red Flame", "Green Black", "Purple Galaxy"],
    inStock: true,
    category: "Hoverboards & Drifters"
  }
];

const heroImages = [
  "./public/products/super-phantom-atv-p1.png",
  "./public/products/media__1783403320412_page_1.png",
  "./public/products/media__1783403320328_page_1.png"
];

const categories = [
  "All",
  "ATV",
  "Dirt Bikes",
  "Bicycles",
  "Hoverboards & Drifters"
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { bikesData, heroImages, categories };
}
