export const commentsData = [
  {
    name: "Emily Johnson",
    text: "Beautiful shot! Where was this taken?",
    replies: [
      {
        name: "Alex Davis",
        text: "Thanks, Emily! It was taken in the mountains during my vacation.",
        replies: [
          {
            name: "Emily Johnson",
            text: "Wow, that sounds amazing! I've always wanted to visit the mountains.",
            replies: [],
          },
          {
            name: "Chris Thompson",
            text: "I love mountain views! This one is breathtaking.",
            replies: [],
          },
        ],
      },
      {
        name: "Sophie Miller",
        text: "I agree, Alex! The scenery is stunning.",
        replies: [],
      },
    ],
  },
  {
    name: "Michael Rodriguez",
    text: "Awesome video! What camera did you use for this?",
    replies: [
      {
        name: "Alex Davis",
        text: "Thanks, Michael! I used a Sony A7III for this video.",
        replies: [
          {
            name: "Michael Rodriguez",
            text: "Great choice! I've been thinking about getting that camera.",
            replies: [
              {
                name: "Alex Davis",
                text: "Highly recommend it! It's versatile and produces excellent quality.",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        name: "Emma Thompson",
        text: "The colors in your video are so vibrant! How did you edit it?",
        replies: [
          {
            name: "Alex Davis",
            text: "Thanks, Emma! I used Adobe Premiere Pro for editing and color grading.",
            replies: [],
          },
        ],
      },
    ],
  },
  // Add more comments and replies as needed...
];
