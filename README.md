# ItunesApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.7.

## Technical decisions on the project

1. I created the project in Angular and built in github environment with two branches. 
    * Master: Which refers to the production environment.
    * Develop: Which refers to the development environment.
        * If two developers had participated in the project we would create a branch for each task to subsequently perform the pull request
        
 2. I create the ion-searchbar folder and: 
    * I give global reference styles to remove margins, paddings and apply   rem.
    * I create the component `ng generate component ion-navbar`.
    * I create the style.
    
  3. I create the card-songs folder and: 
    * I create the component `ng generate component card-song`. 
    * I create the style.

  4. I created the song model with the structure of the item on which I will ask for information, through the API, of each of the items in the list of objects.

  5. I create the service itunes-service and create also song-list `ng generate component song-list` component who recieves an array of objects. 
     * From each object we will access the information that in the card-song component such as trackName or collectionName.

  6. I create the service favourite-service and all the logic to add and delete song in counter and change the hearth appareance when user click this.
