var nameList = [
  "Aarav",
  "Aanya",
  "Aaradhya",
  "Advait",
  "Akshay",
  "Amrita",
  "Arjun",
  "Ashwin",
  "Bhavya",
  "Deepika",
  "Dev",
  "Dhruv",
  "Esha",
  "Gaurav",
  "Ishika",
  "Kabir",
  "Kavya",
  "Manish",
  "Meera",
  "Neha",
  "Nikhil",
  "Prisha",
  "Rohan",
  "Sanya",
  "Shiv",
  "Swara",
  "Varun",
  "Vidya",
  "Yash",
  "Zara",
  "Amit",
  "Anaya",
  "Ishan",
  "Juhi",
  "Kunal",
  "Leela",
  "Mayank",
  "Naina",
  "Om",
  "Pooja",
  "Raj",
  "Riya",
  "Samir",
  "Tanvi",
  "Uday",
  "Vaishnavi",
  "Vikram",
  "Zoya",
  "Abhinav",
  "Aisha",
  "Aniket",
  "Anjali",
  "Brijesh",
  "Chaya",
  "Dinesh",
  "Divya",
  "Eklavya",
  "Farida",
  "Ganesh",
  "Gita",
  "Harsh",
  "Indira",
  "Jatin",
  "Jaya",
  "Kiran",
  "Kirti",
  "Laksh",
  "Lata",
  "Mukul",
  "Nisha",
  "Ojas",
  "Pari",
  "Rajat",
  "Rukmini",
  "Sanjay",
  "Sarika",
  "Tejas",
  "Trisha",
  "Utkarsh",
  "Uma",
  "Veer",
  "Vidushi",
  "Yogesh",
  "Yamini",
  "Zorawar",
];

export function generateRandomName() {
  return nameList[Math.floor(Math.random() * nameList.length)];
}

var commentList = [
  "Great video! Thanks for sharing.",
  "Awesome content, keep it up!",
  "This is so helpful. I learned a lot!",
  "I love your channel!",
  "Can you make a video on [topic]?",
  "You're doing a fantastic job!",
  " Subscribed!",
  " exactly what I was looking for.",
  "Your videos make my day!",
  "Wow, you explained that really well.",
  "Please do more videos",
  "I shared this with my friends",
  "You're my favorite YouTuber!",
  "I appreciate the effort ",
  "Keep the good work going!",
  "I laughed so hard at this part!",
  "Thanks for the informative content.",
  "You're an inspiration to me.",
  "Can't wait for your next video!",
  "This deserves more likes!",
  "You're doing a great",
  "I've learned a lot!",
  "Your energy is contagious. Love it!",
  "Please do a collaborations",
  "You make learning fun!",
  "I'm binge-watching your videos",
  "You have a new fan in me!",
  "Nice Video",
  "India India",
  "",
];

export function generateRandomComment() {
  return commentList[Math.floor(Math.random() * commentList.length)];
}