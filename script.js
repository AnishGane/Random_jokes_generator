// Array of jokes (you can replace it with jokes fetched from an API)
const jokes = [
  "Why don't scientists trust atoms? Because they make up everything!",
  "Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them!",
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "I told my wife she should embrace her mistakes... she gave me a hug.",
  "Why did the bicycle fall over? Because it was two-tired!",
  "What do you call fake spaghetti? An impasta!",
  "Why don't skeletons fight each other? They don't have the guts!",
  "I used to play piano by ear, but now I use my hands.",
  "Why was the math book sad? Because it had too many problems!",
  "Why don't skeletons go to scary movies? They don't have the stomach for it!",
  "Parallel lines have so much in common. It's a shame they'll never meet.",
  "I'm reading a book on anti-gravity. It's impossible to put down!",
  "Did you hear about the fire at the circus? It was in tents!",
  "What did the janitor say when he jumped out of the closet? 'Supplies!'",
  "Why don't scientists trust stairs? Because they're always up to something!",
  "Why don't skeletons fight each other? They don't have the guts!",
  "Parallel lines have so much in common. It's a shame they'll never meet.",
  "I'm reading a book on anti-gravity. It's impossible to put down!",
  "Did you hear about the fire at the circus? It was in tents!",
  'What did the janitor say when he jumped out of the closet? "Supplies!"',
  "Why don't scientists trust stairs? Because they're always up to something!",
  "Why don't eggs tell jokes? Because they might crack up!",
  `I told my computer I needed a break. Now it won't stop sending me "Ctrl-Alt-Delete."`,
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "I told my wife she should embrace her mistakes... she gave me a hug.",
  "What do you call a factory that makes okay products? A satisfactory!",
  "Why was the math book sad? Because it had too many problems!",
  "Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them!",
  "I used to play piano by ear, but now I use my hands.",
  "What did one hat say to the other hat? You stay here, I'll go on ahead!",
];

function getNewJoke() {
  // Get a random joke index
  const randomIndex = Math.floor(Math.random() * jokes.length);

  // Get the container element
  const jokeContainer = document.getElementsByClassName(
    "joke-container")[0].firstElementChild.innerHTML = `<p>" ${jokes[randomIndex]} "</p>`;
}
