const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");

const breakfastOptions = [
  {
    name: "Side",
    type: "radio",
    choices: [
      { name: "Home Fries", price: 0 },
      { name: "Hash Browns", price: 0 },
      { name: "Cottage Cheese", price: 0 },
    ],
  },
  {
    name: "Toast",
    type: "radio",
    choices: [
      { name: "Sourdough", price: 0 },
      { name: "Wheat", price: 0 },
      { name: "Rye", price: 0 },
      { name: "White", price: 0 },
      { name: "English Muffin", price: 0 },
    ],
  },
  {
    name: "Add-Ons",
    type: "radio",
    choices: [
      { name: "Homemade Muffin", price: 1.29 },
      { name: "Egg Whites", price: 1.29 },
    ],
  },
];

const omelettes = [
    {
        name: "CHEESE OMELETTE",
        price: 9.79,
        description: "A delicious omelet filled with melted cheese.",
        options: breakfastOptions,
      },
      {
        name: "BACON & CHEESE OMELETTE",
        price: 12.89,
        description: "A hearty omelet with crispy bacon and melted cheese.",
        options: breakfastOptions,
      },
    {
        name: "HAM & CHEESE",
        price: 12.99,
        description: "A classic omelet filled with savory ham and melty cheese.",
        options: breakfastOptions,
      },
      {
        name: "SAUSAGE & CHEESE",
        price: 12.89,
        description: "A hearty omelet with juicy sausage and melty cheese.",
        options: breakfastOptions,
      },
      {
        name: "CHILI & CHEESE",
        price: 12.49,
        description: "A spicy omelet with flavorful chili and melty cheese.",
        options: breakfastOptions,
      },
      {
        name: "SPINACH BACON & CHEESE",
        price: 13.79,
        description: "A healthy omelet with fresh spinach, crispy bacon, and melty cheese.",
        options: breakfastOptions,
      },
      {
        name: "MUSHROOMS & SWISS",
        price: 13.99,
        description: "A flavorful omelet with sauteed mushrooms and melty Swiss cheese.",
        options: breakfastOptions,
      },
      {
        name: "ORTEGA, BACON, & CHEESE",
        price: 13.29,
        description: "A zesty omelet with Ortega chilies, crispy bacon, and melty cheese.",
        options: breakfastOptions,
      },
      {
        name: "GREEK TO ME",
        price: 13.79,
        description: "A delightful omelet filled with fresh spinach, juicy tomatoes, crumbly feta cheese, and flavorful olives.",
        options: breakfastOptions,
      },
      {
        name: "VEGGIE OMELETTE",
        price: 13.99,
        description: "A colorful and healthy omelet packed with bell peppers, carrots, zucchini, onions, tomato, creamy avocado, and melty cheese.",
        options: breakfastOptions,
      },
      {
        name: "REDONDO",
        price: 14.89,
        description: "A hearty omelet featuring savory ham, sauteed onions and bell peppers, topped with melty cheese and creamy avocado.",
        options: breakfastOptions,
      },
      {
        name: "UNFORGIVEN",
        price: 13.89,
        description: "A classic omelet with juicy ham, sauteed onions and bell peppers, along with fresh tomatoes and melty cheese.",
        options: breakfastOptions,
      },
      {
        name: "TOMBO-COMBO",
        price: 15.49,
        description: "A meat-lover's dream omelet with crispy bacon, savory ham, and juicy sausage, all topped with melty cheese and creamy avocado.",
        options: breakfastOptions,
      },
      {
        name: "INTERNATIONAL",
        price: 15.79,
        description: "A global adventure in an omelet - featuring ham, sausage, bacon, mushrooms, fresh tomatoes, and melty cheese.",
        options: breakfastOptions,
      },
      {
        name: "ACAPULCO",
        price: 14.79,
        description: "A taste of Mexico in an omelet with spicy chorizo, melty jack cheese, and a refreshing  guacamole topping.",
        options: breakfastOptions,
      },
      {
        name: "CALIFORNIA DREAMIN'",
        price: 15.29,
        description: "A West Coast-inspired omelet with zesty Ortega chilies, crispy bacon, melty jack cheese, and a cool guacamole topping.",
        options: breakfastOptions,
      },
      {
        name: "MANHATTAN",
        price: 14.99,
        description: "A New York classic omelet with crispy bacon, fresh tomatoes, topped with melty cheese, creamy guacamole, and a dollop of sour cream.",
        options: breakfastOptions,
      },
      {
        name: "DENVER",
        price: 13.29,
        description: "A simple and satisfying omelet with savory ham, colorful bell peppers, and sauteed onions.",
        options: breakfastOptions,
      },
      {
        name: "YOU ARE MY SUNSHINE",
        price: 13.29,
        description: "A healthy and light omelet made with fluffy egg whites, fresh spinach, juicy tomatoes, and zucchini.",
        options: breakfastOptions,
      },
];

const eggs = [
    {
        name: "COUNTRY BREAKFAST",
        price: "13.49",
        description: "A classic country breakfast to start your day. Two eggs cooked to your liking, your choice of three bacon strips, three sausage links, or ham. Served with potatoes, biscuits, and a side of creamy gravy.",
        
    },
    {
        name: "HUEVOS RANCHEROS",
        price: 10.69,
        description: "Two eggs cooked to your liking, served on a corn tortilla and topped with flavorful tomatillo sauce, melty jack and cheddar cheese. Served with a side of rice and beans.",
        options: [
          {
            name: "Egg Style",
            type: "radio", 
            choices: [
              { name: "Scrambled", price: 0 }, 
              { name: "Sunny Side Up (yolk runny)", price: 0 },
              { name: "Over Easy (slightly runny yolk)", price: 0 },
              { name: "Over Medium (partially cooked yolk)", price: 0 },
              { name: "Over Hard (fully cooked yolk)", price: 0 },
              { name: "Hard Boiled (solid yolk and white)", price: 0 },
              { name: "Soft Boiled (runny yolk, cooked white)", price: 0 },
            ],
          },
          { name: "Add (3) Bacon Strips", price: 3.99 },
          { name: "Add (3) Sausage Links", price: 3.99 },
        ],
      },
    {
        name: "BUENOS DIAS QUESADILLA",
        price: 13.29,
        description: "A delicious quesadilla filled with scrambled eggs, zesty Ortega chilies, sauteed onions, tomatoes, bell peppers, and melty jack cheese. Topped with creamy avocado and tomatillo sauce.",
      },
    {
        name: "MEXICAN SCRAMBLE",
        price: 12.29,
        description: "A fiesta in a plate! Three eggs scrambled with colorful bell peppers, juicy tomatoes, sauteed onions, and melty jack cheese. Served with your choice of potatoes and toast.",
        options: breakfastOptions,
      },
    {
        name: "CHORIZO SCRAMBLE",
        price: 12.99,
        description: "A flavorful scramble with Mexican chorizo sausage, sauteed onions, chopped tomatoes, and melty jack cheese. Served with your choice of potatoes and toast.",
        options: breakfastOptions,
      },
    {
        name: "EL PASO BURRITO",
        price: 8.99,
        description: "A simple and satisfying breakfast burrito. Three scrambled eggs, melty cheese, and home fries wrapped in a large flour tortilla.",
      },
      {
        name: "FIESTA BURRITO",
        price: 11.29,
        description: "Spice up your morning with a Fiesta Burrito! Same as the El Paso Burrito, but with your choice of bacon, sausage, or ham added to the mix.",
        options: [
          { name: "With Bacon", price: 0 },
          { name: "With Sausage", price: 0 },
          { name: "With Ham", price: 0 },
        ],
      },
    {
        name: "RIO GRANDE BURRITO",
        price: 13.49,
        description: "The ultimate breakfast burrito! Three scrambled eggs, melty cheese, potatoes, bacon, sausage, ham, creamy guacamole, and a dollop of sour cream, all wrapped in a large flour tortilla.",
      },
    {
        name: "OATMEAL",
        price: 5.89,
        description: "A warm and comforting bowl of oatmeal, perfect for a healthy start to your day.",
      },
];

