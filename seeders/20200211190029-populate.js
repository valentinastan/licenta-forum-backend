'use strict';
const bcrypt = require('bcryptjs');

const models = require('../models/index')
const Post = models.Post

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Posts', [{
      //userId: 1,
      title: "Extreme weather",
      text:"In the past few months in the morning the temperatures were below the norm and during the afternoon the temperatures went above the norm with the sun being extra powerful. The garden plants' leaves started to change color. What can I do regarding this?",
      // likes: 0,
      // dislikes: 2,
    },
    {
      title: "Tiny spots",
      text:"I planted 3000 peppers. You can find tiny spots on their leaves. What can be the cause? ",
    },
    {
      title: "Pink spots",
      text:"My tomatoes and cucumbers have sunken spots on their pods. When the weather is wet the spots can even become pink. What is this?",
    },
    {
      title: "HELP!!",
      text:"I can see dark water-soaked spots on the leaves of my plants! When the weather is dry enough I can see holes in the leaves!! HELPPP, i don't want my plants to dieeeee, they are to younggg, they had such plans for the future, wanted to make so many babies!!",
    },
    {
      title: "Wilt plants",
      text:"I had a serious problem in my home harder. I had planted cabbage, broccoli and cauliflower. The plants would just start to wilt during the heat of the day.",
    },
    {
      title: 'White to purple "downy" growth',
      text:'My plants recently had Downy Mildew, you can check this by looking at the undersides of the leaves along the stems. If you see a white to purple "downy" growth then they have it. I heard that you have to prune plants in order to treat this, is it true?',
    },
    {
      title: "Brown and black spots",
      text:"Recently my plants developed brown and black spots on the leaves. They rings started to grow, some even look like a target. ",
    },
    {
      title: "White fungal",
      text:"The growing season had been going on for quite a while and my plants started to have water-soaked spots on the lower leaves and a white fungal some sort of growth on the undersides. What can it be?",
    },
    {
      title: "Mottled green and yellow foliage or veins",
      text:"I have a few tomatoes and beans planted. They started developing some sort of mottled green and yellow foliage or veins. Some leaves started to curl and wrinkle. What can I do ?",
    },
    {
      title: "White grayish growth",
      text:"My brother has some plants and I saw a white grayish powdery growth, usually on the upper surface . Some of the plants in his garden turned brown.",
    },
    {
      title: "Reddish-brown spots on leaves",
      text:"I can see reddish-brown spots on leaves and stems on my beans and carrots. Corn looks fine though.",
    },
    {
      title: "Odd diseases might affect my plants",
      text:"Wilt, Fusarium and Verticillium affect a wide range of vegetables and I think mine have it too. What can I do?",
    },
    {
      title: "COVID-19 pandemic",
      text:"I wonder how the COVID-19 pandemic will affect the world food economy. I think the global food security is at risk if measures are not taken fast to keep the global food supply chains alive and mitigate the pandemic's impatc across the food system.",
    },
    {
      title: "Extreme weather",
      text:"In Bacau, in March, every single day the wind blew with incredible speed. Everything I've just planted was flattened down or destroyed. Can I somehow recover my crop? How can I help my plants?",
    },
    {
      title: "Thinner and yellow vegetables",
      text:"I have a little problem. I've noticed, not so long ago, that the leaves of my recently planted vegetables started growing thinner and yellow. I water then properly. Does anyone know what the cause might be and what I could do to stop it?",
    }], {}).then(() => {
      return Post.findAll().then((posts) => {
        console.log('HI THESE ARE THE POSTS', posts)
        return queryInterface.bulkInsert('Comments', [{
        // userId: 2,
        postId: posts[0].id,
        text: "It happened to me too.",
        // likes: 2,
        // dislikes: 0,
      },
      {
        postId: posts[0].id,
        text: "Try to add some vitamins to the plants when you water them.",
      },
      {
        postId: posts[0].id,
        text: "Can you try adding some nitrogen. You can see what quantities on the label.",
      },
      {
        postId: posts[0].id,
        text: "It's your fault for sure, you didn't water them on time.",
      },
      {
        postId: posts[1].id,
        text: "You can check the acidity of the soil.",
      },
      {
        postId: posts[1].id,
        text: "A cause can be the oscillating temperatures.",
      },
      {
        postId: posts[1].id,
        text: "When you water them, did you try adding some vitamins. Or to spraying them with substances that protect them against pests.",
      },
      {
        postId: posts[2].id,
        text: "It's called Anthracnose, google it!",
      },
      {
        postId: posts[2].id,
        text: "You should apply liquid copper or neem sprays before and during the infection periods.",
      },
      {
        postId: posts[2].id,
        text: "Yes, start to apply them just as the leaf buds break in early spring. ",
      },
      {
        postId: posts[2].id,
        text: "Your crop is done for this year!",
      },
      {
        postId: posts[3].id,
        text: "I have no idea.",
      },
      {
        postId: posts[3].id,
        text: "I have the same problem.",
      },
      {
        postId: posts[3].id,
        text: "Did you guys find a solution?",
      },
      {
        postId: posts[3].id,
        text: "O yeah , 1 year ago now I don't remember!",
      },
      {
        postId: posts[3].id,
        text: "Hey OP, do you still have the issue?",
      },
      {
        postId: posts[3].id,
        text: "NO, PLANTS DIED! I later found out they had Bacterial Leaf Spots.",
      },
      {
        postId: posts[3].id,
        text: "What did you do?",
      },
      {
        postId: posts[3].id,
        text: "There is no cure currently. You need to apply copper or sulfur based fungicides every week at first sign of disease to prevent the spread. Destroy the heavily infected plants.",
      },
      {
        postId: posts[4].id,
        text: "Were the roots distorted or swollen in any way?",
      },
      {
        postId: posts[4].id,
        text: "Yes, they were!",
      },
      {
        postId: posts[4].id,
        text: "Oh then it sounds like club root, You can't use fungicides or pesticides, it won't help. The micro-organism that causes this lives in the soil, try rotating with disease-resistant varieties, otherwise nothing can help you.",
      },
      {
        postId: posts[4].id,
        text: "Thank you are really great, I love you!",
      },
      {
        postId: posts[4].id,
        text: "I love you too! Give me your number!",
      },
      {
        postId: posts[5].id,
        text: "Yes! You also have to water in the early morning so the plants can be dry during the day. Apply copper fungicides every 7-10 days until you harvest.",
      },
      {
        postId: posts[5].id,
        text: "Don't forget to dispose of severely infected plants, they can't be saved.",
      },
      {
        postId: posts[5].id,
        text: "Neither can your soul!",
      },
      {
        postId: posts[6].id,
        text: "I don't know.",
      },
      {
        postId: posts[5].id,
        text: "Sounds like your plants will start dying.",
      },
      {
        postId: posts[6].id,
        text: "It's Early Blight for sure. The leaves can actually die from die. You have to use a copper-based fungicide early, two weeks before the disease or at least when weather forecasts predict a long period of wet weather.",
      },
      {
        postId: posts[6].id,
        text: "The guy above is right.",
      },
      {
        postId: posts[7].id,
        text: "Aaaa, this is clearly Late Blight. Your plants will rot and die in wet weather.",
      },
      {
        postId: posts[7].id,
        text: "If it is Late Blight then apply copper sprays every 7 days or less, following heavy rain or when the amount of disease is increasing rapidly.",
      },
      {
        postId: posts[8].id,
        text: "First you must determine what they have.",
      },
      {
        postId: posts[8].id,
        text: "I guess it's mosaic virus. You can't do anything about it just remove the infected plants so others don't get infected. ",
      },
      {
        postId: posts[9].id,
        text: "Sounds like your brother has Powdery Mildew on this plants. You need to prune or stake the plants to improve air circulation. You can also apply GreenCure or sulfur fungicides weekly to prevent infection. If a plant is heavily infected you should remove it.",
      },
      {
        postId: posts[9].id,
        text: "This guy is right!",
      },
      {
        postId: posts[9].id,
        text: "Weren't they just dusty ? ",
      },
      {
        postId: posts[10].id,
        text: "This is rust! You can prevent it with good air circulation around crops. Remove the plants that have been infected or they will infect your other plants too. ",
      },
      {
        postId: posts[10].id,
        text: "You should dust plants with sulfur power, early in the season, to prevent infection or to keep mild problems from spreading.",
      },
      {
        postId: posts[11].id,
        text: "Are you sure? What makes you think this? You can try to use soil solarization before planting but other than that... there's not much you can do",
      },
      {
        postId: posts[11].id,
        text: "Yes .. they started wilting and some parts started to go yellow.",
      },
      {
        postId: posts[11].id,
        text: "Then you might be right. Crop rotation does not help ... there is nothing else you can actively do.",
      },
      {
        postId: posts[12].id,
        text: "To be honest I am not scared of food running short anytime soon. Prices on the other hand will go up for sure. As the production output is going down, the prices will go up.",
      },
      {
        postId: posts[12].id,
        text: "The workers will suffer also as they won't have a steady income anymore. This pandemic is the worst.",
      },
      {
        postId: posts[12].id,
        text: "Hope we will all get to normal and everyone is safe!",
      },
      {
        postId: posts[12].id,
        text: "I am sure the governments will support us, there is no other way, we are losing way to much profit.",
      },
      {
        postId: posts[13].id,
        text: "That's exactly what happened to me in Ialomita, about 10km from Slobozia! The wind managed to damage my and my nightbour's greenhouses. The damage is great. As far as the plants are concerned there is no alternative. I guess some of them will still grow but will produce less.",
      },
      {
        postId: posts[13].id,
        text: "Exactly, all the country has suffered from strong winds. I have yet to plant my crop, but the wind destroyed 3 greenhouses. Give nutrients to the plants and God's mercy.",
      },
      {
        postId: posts[14].id,
        text: "It happened exactly the same to me. A neighbour told me to give them vitamins, however I have no idea what and I don't want to risk it.",
      },
      {
        postId: posts[14].id,
        text: "This sounds like lack of nitrogen in the soil. Because of this your plants might not even grow properly.",
      },
      {
        postId: posts[14].id,
        text: "Lack of nitrogen most likely. You will find this problem in soils that are sandy, lack organic matter, or acidic. Excess humidity can determine poor activity from bacteria that could decompose organic matter and raise the nitrogen levels.",
      },
      {
        postId: posts[14].id,
        text: "Nitrogen is an essential elements that greatly influences the production of vegetables. In the case of lack of nitrogen, plants do not grow, and the leaves can present disease like simptoms, exactly what you are describing.",
      },
    ], {})})
      // .then(() => {
      //   return queryInterface.bulkInsert('Notifications', [{
      //     userId: 2,
      //     postId: 1,
      //     seen: false,
      //   }], {})
      //})
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Posts', null, {});
  }
};