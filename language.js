// Select DOM elements
const buttonB = document.querySelector("#buttonB");
const menuItems = document.querySelectorAll(".khana ul li");
const menuTitles = document.querySelectorAll(".khana h3");

const languageStrings = {
  en: {
    switchLanguage: "Translate to Assamese",
    menu: [
      "MOMO & ROLLS",
      "CHOW MEIN & PULAO",
      "MAGGIE & OMLETTE",
      "Paratha And Roti",
      "Special item",
    ],
    items: {
      "Veg Momos": "Veg Momos",
      "Chicken Momos": "Chicken Momos",
      "Veg Roll": "Veg Roll",
      "Egg Roll": "Egg Roll",
      "Paneer Roll": "Paneer Roll",
      "Chicken Roll": "Chicken Roll",
      "Veg Chow Mein": "Veg Chow Mein",
      "Chicken Chow Mein": "Chicken Chow Mein",
      "Veg Pulao": "Veg Pulao",
      "Chicken Pulao": "Chicken Pulao",
      "Veg Fried Rice": "Veg Fried Rice",
      "Egg Fried Rice": "Egg Fried Rice",
      "Chicken Fried Rice": "Chicken Fried Rice",
      "Plain Maggie": "Plain Maggie",
      "Egg Maggie": "Egg Maggie",
      Omlette: "Omlette",
      "Special Omlette": "Special Omlette",
      Puri: "Puri",
      Roti: "Roti",
      "Plain Paratha": "Plain Paratha",
      "Aloo Paratha": "Aloo Paratha",
      "Chole Bhature": "Chole Bhature",
      "Roti+Dry Fry": "Roti+Dry Fry",
      "Chicken Dry Fry": "Chicken Dry Fry",
      "Dahi Singra": "Dahi Singra",
    },
  },
  as: {
    switchLanguage: "Switch to English",
    menu: [
      "মোমো & ৰোল",
      "চাউ মীন & পুলাও",
      "মেগি & অমলেট",
      "পরাঠা আৰু ৰুটি",
      "বিশেষ আইটেম",
    ],
    items: {
      "Veg Momos": "ভেগ মোমো",
      "Chicken Momos": "চিকেন মোমো",
      "Veg Roll": "ভেগ ৰোল",
      "Egg Roll": "এগ ৰোল",
      "Paneer Roll": "পনীৰ ৰোল",
      "Chicken Roll": "চিকেন ৰোল",
      "Veg Chow Mein": "ভেগ চাউ মীন",
      "Chicken Chow Mein": "চিকেন চাউ মীন",
      "Veg Pulao": "ভেগ পুলাও",
      "Chicken Pulao": "চিকেন পুলাও",
      "Veg Fried Rice": "ভেগ ফ্ৰাইড ৰাইচ",
      "Egg Fried Rice": "এগ ফ্ৰাইড ৰাইচ",
      "Chicken Fried Rice": "চিকেন ফ্ৰাইড ৰাইচ",
      "Plain Maggie": "প্লেইন মেগি",
      "Egg Maggie": "এগ মেগি",
      Omlette: "অমলেট",
      "Special Omlette": "বিশেষ অমলেট",
      Puri: "পুৰী",
      Roti: "ৰুটি",
      "Plain Paratha": "প্লেইন পৰাঠা",
      "Aloo Paratha": "আলু পৰাঠা",
      "Chole Bhature": "চোলি ভাটুৰে",
      "Roti+Dry Fry": "ৰুটি+ড্ৰাই ফ্ৰাই",
      "Chicken Dry Fry": "চিকেন ড্ৰাই ফ্ৰাই",
      "Dahi Singra": "দহি সিংগ্ৰা",
    },
  },
};

let currentLanguage = "en";

function updateLanguage() {

  buttonB.textContent = languageStrings[currentLanguage].switchLanguage;


  menuTitles.forEach((title, index) => {
    if (languageStrings[currentLanguage].menu[index]) {
      title.textContent = languageStrings[currentLanguage].menu[index];
    }
  });


  menuItems.forEach((item) => {
    const itemName = item.childNodes[0].nodeValue.trim(); 
    const translatedName = languageStrings[currentLanguage].items[itemName];
    if (translatedName) {
      item.childNodes[0].nodeValue = translatedName + " "; 
    }
  });
}

function switchLanguage() {
  currentLanguage = currentLanguage === "en" ? "as" : "en";
  updateLanguage();
}

// Attach the event listener
buttonB.addEventListener("click", switchLanguage);

// Initialize with default language
updateLanguage();
