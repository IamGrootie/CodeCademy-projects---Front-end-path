// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)]
}

// Returns a random single stand of DNA containing 15 bases 
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
  }
  return newStrand
}

// pAequorFactory takes two arguments. A number of the specimen and a dna object of 15bases

const pAequorFactory = (specimenNum, dna) => {
  return {
      specimenNum,
      dna,
      // Mutate method is responsible for randomly pick a base the DNA object bases and replace it with a different one. Then return the mutated DNA 
      mutate() { 
          const randomInx = Math.floor(Math.random() * this.dna.length); //Generates a number between 0 and 15
          let currentBase = this.dna[randomInx]; // Stores the current base
          let generatedBase = returnRandBase(); // Generates a random base

          // check if currentBase is equal to A, T, C, or G
          const bases = ['A', 'T', 'C', 'G'];
          for (let i = 0; i < bases.length; i++) {
              if (currentBase === bases[i]) { 
                  continue;
              } else {
                  this.dna.splice(randomInx, 1, generatedBase) // replaces the current base with a random base
              }
          }
          console.log(`It was changed the index ${randomInx} from ${currentBase} to ${generatedBase}`) //returns the index that was changed
          return `Resulted in the mutated DNA: ${this.dna}` // returns the mutated DNA strand
      },
      // Compare DNA Method compares two DNA specimens and returns the percentage of familiarity between them
      compareDNA(pAequor) { 
          let similarities = 0;
          for (let i = 0; i < pAequor.length; i++) {
              while (this.dna[i] === pAequor[i]) {
                  similarities++; //Increments the similarities variable each time it finds an equal base between the specimens
                  break;
              }
          }
          console.log(`The specimen ${this.specimenNum} DNA: ${this.dna}`);  //Prints the DNA of the #1 specimen
          console.log(`The specimen ${idCounter} DNA: ${pAequor}`); //Prints the DNA of the #2 specimen
          return `specimen ${this.specimenNum} and specimen ${idCounter} have ${Math.floor((similarities * 100) / 15)}% in common` // returns the percentage of similarities
      },
      // Will Likely Survive method determines if there is a chance of survival if the DNA is made up at least of 60% of 'C' and 'G' bases
      willLikelySurvive() { // determines if the pAequor will survive
          let survivalChance = 0;
          for (let i = 0; i < this.dna.length; i++) {
              if (this.dna[i] === 'G' || this.dna[i] === 'C') {
                  survivalChance++; //Increments the chances of survival each time it finds a base 'C' or 'D' in the dna object
              }
          }
          if (survivalChance > 8) {
              return 'Likelyhood of survival: HIGH!';
          } else {
              return 'Likelyhood of survival: LOW!';
          };

      }

  }
}

// Create 30 DNA Strands with High that can survive their natural environment (had a HIGH likelyhood of survival)

const survivingSpecimen = [];
let idCounter = 1;

while (survivingSpecimen.length < 30) {
  let newOrg = pAequorFactory(idCounter, mockUpStrand());
  if (newOrg.willLikelySurvive()) {
      survivingSpecimen.push(newOrg);
  }
  idCounter++;
}

// -------- Test Section -------- //

const pAequorOne = pAequorFactory(30, mockUpStrand()); // creates a new pAequor object to run the tests

//console.log(pAequorOne.mutate());  // This should return the mutated DNA and the change that was made
//console.log(pAequorOne.compareDNA(pAequorOne.dna));  // compares the DNA strands of two pAequors
//console.log(pAequorOne.willLikelySurvive()); // This shoul print if the chance of survival is high or low
//console.log(survivingSpecimen) // Prints the 30 instances of DNA strands with HIGH likelyhood of survival 