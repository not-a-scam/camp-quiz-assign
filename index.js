// To be filled with actual quiz links

const links = new Array(
    "https://forms.gle/pqWqvXiYRanTA71HA", 
    "https://forms.gle/jwzAibY3PLkHpy389",
    "https://forms.gle/2tUZAtJU7hmxSEav7", 
    "https://forms.gle/YSh2MSG4tpRpVSbU7", 
    "https://forms.gle/abjKEsuFjU2rcnAJ7"
)

function redirectRand(){
    let x = Math.floor(Math.random() * links.length);
    window.location.replace(links[x]);
}
