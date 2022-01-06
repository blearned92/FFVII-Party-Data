let ffvii = {
    party: {
      Cloud: { 
        firstName: 'Cloud', 
        lastName: 'Strife',
        age: 21,
        dob: 'August 19',
        birthPlace: 'Nibelheim',
        bloodType: 'AB +',
        height: '5\'7\"',
        job: 'Mercenary',
        weapon: 'Buster Sword', 
        catchPhrase() { console.log('Whatever...') },
        limitBreak() {console.log('Cloud used Braver')}
      },
      Tifa: { 
        firstName: 'Tifa', 
        lastName: 'Lockhart',
        age: 20,
        dob: 'May 3',
        birthPlace: 'Nibelheim',
        bloodType: 'B',
        height: '5\'4\"',
        job: 'Bar Hostess',
        weapon: 'Gloves', 
        catchPhrase() { console.log('Just promise me one thing...') },
        limitBreak() {console.log('Tifa used Dolphin Kick')}
      },
      Barret: { 
        firstName: 'Barret', 
        lastName: 'Wallace',
        age: 35,
        dob: 'December 15',
        birthPlace: 'Corel Village',
        bloodType: 'O',
        height: '5\'4\"',
        job: 'AVALANCE Leader',
        weapon: 'Gun Arm', 
        catchPhrase() { console.log('They\'re suckin\' the planet dry!') },
        limitBreak() {console.log('Barret used Big Shot')}
      }
    },
    locations: {
        Midgar: ['Sector 7 Slums', 'Sector 5 Slums', 'Wall Market', 'Shinra Tower'],
        Nibelheim: ["Cloud\'s House", "Tifa\'s House", "Shinra Mansion", "Mt. Nibel"],
        Golden_Saucer: ["Ropeway Station", "Battle Square", "Chocobo Square", "Speed Square", "Event Square", "Wonder Square"],
        Cosmo_Canyon: ["Planetarium", "Seto\'s Wall", "Gate of the Naught"]
    }
  }; 

const callParty = () => {
    let count = 1;
    for (i in ffvii.party){
        console.log(`Party Member ${count}: ${i}`);
        count += 1;
    }
};



callParty();
const cloudName = ffvii.party.Cloud.firstName
const cloudHome = ffvii.party.Cloud.birthPlace
const midgarLocations = ffvii.locations.Midgar
const nibelheimLocations = ffvii.locations.Nibelheim
const goldenSaucerLocations = ffvii.locations.Golden_Saucer
const cosmoCanyonLocations = ffvii.locations.Cosmo_Canyon
console.log("=========CatchPhrases and Limit Breaks=========")
ffvii.party.Cloud.limitBreak()
ffvii.party.Cloud.catchPhrase()
ffvii.party.Barret.catchPhrase()
ffvii.party.Tifa.catchPhrase()
console.log("=========Using Stored Data of all Types=========")
console.log(`${cloudName} is from ${cloudHome}.`)
console.log(midgarLocations)
console.log(midgarLocations[3])
console.log(nibelheimLocations)
console.log(nibelheimLocations[3])