class Objet{
    constructor(nom, description, nombreUtilisationMax){
      this.nom = nom;
      this.description = description;
      this.nombreUtilisation = 0;
      this.nombreUtilisationMax = nombreUtilisationMax;
    }
    
    getNom(){
    return this.nom;
    }
    
    setNom(nouvelleValeur){
    this.nom = nouvelleValeur;
    }
    
    getDescription(){
    return this.description;
    }
    
    setDescription(nouvelleValeur){
    this.description = nouvelleValeur;
    }
    
    getNombreUtilisation(){
    return this.nombreUtilisation;
    }
    
    setNombreUtilisation(nouvelleValeur){
    this.nombreUtilisation = nouvelleValeur;
    }
    
    getNombreUtilisationMax(){
    return this.nombreUtilisationMax;
    }
    
    setNombreUtilisationMax(nouvelleValeur){
    this.nombreUtilisationMax = nouvelleValeur;
    }
    
    utiliserObjet(){
    this.nombreUtilisation = this.nombreUtilisation + 1;
    if (this.nombreUtilisation == this.nombreUtilisationMax) {
        return true;
    }
    return false;
    }
  }
  
  class Personnage {
    constructor(nom, prenom) {
      this.nom = nom;
      this.prenom = prenom;
      this.agillité = 0;
      this.force = 0;
      this.inteligence = 0;
      this.inventaire[0] = new Objet("Pain et fromages", "De quoi se nourrir pour un repas");
      this.inventaire[1] = new Objet("Chapeau", "L'indispensable à cette époque");
    }
  
      getNom() {
        return this.nom;
    }
    
    setNom(nouvelleValeur){
        this.nom = nouvelleValeur;
    }
    
    setAgilité(nouvelleValeur){
      this.agilité = nouvelleValeur;
    }
  
    getAgilité(){
      return this.agilité;
    }
  
    gainAgilité(){
        this.agilité=this.agilité + 1
    }

    setForce(nouvelleValeur) {
      this.force = nouvelleValeur;
    }
    getForce(){
      return this.force;
    }
  
    gainForce(){
        this.force=this.force + 1
    }

    setIntelligence(nouvelleValeur){
      this.intelligence = nouvelleValeur;
    }
  
    getIntelligence(){
      return this.intelligence;
    }

    gainIntelligence(){
        this.intelligence=this.inteligence + 1
    }
    
    presenceObjet(nom){
        for(i=0; i < inventaire.length(); i++ ) {
      if (inventaire[i].getNom() == nom) {
          return true
      }
      }
      return false
    }
    
    getObjet(nom) {
    for(i=0; i < inventaire.length(); i++ ) {
      if (inventaire[i].getNom() == nom) {
          return inventaire[i];
      }
      }
      return {};
    }
    
    deleteObjet(nom) {
        index = inventaire.indexOf(getObjet(nom));
      if (myIndex !== -1) {
      inventaire.splice(myIndex, 1);
  }
    }
    
    utiliserObjet(nom) {
        if (getObjet(nom).utiliserObjet() == true) {
          deleteObjet(nom);
      }
    }
  }