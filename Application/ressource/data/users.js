var users = new Map();
users.set("1",{name : "La Bibliothécaire", firstname : "Jean-Denise", dateofbirth : "22/03/1975",
 address1 : "1 rue des Exemples", adress2 : "" ,postalcode : "75000", city : "Paris", 
 email : "jeandenise-labibibliothécaire@exemple.com", mobilenumber : "", homenumber : "01 00 00 00 00", 
 username : "jean-denise.labibliothécaire", password : "motdepasse1", status : new Map([ [adherent,"false"], 
 [bibliothecaire , "true"], [gestionnaire , "false"], [responsable , "false"], 
 [admin , "false"], [abonnementajour , "false"]]), listofbook : []});

users.set("2",{name : "Simplevisiteur", firstname : "Lucienne", dateofbirth : "25/12/1946",
 address1 : "2 rue des Exemples", adress2 : "appartement 2" ,postalcode : "75000", city : "Paris", 
 email : "lucienne-simplevisiteur@exemple.com", mobilenumber : "", homenumber : "01 01 00 00 00", 
 username : "lucienne.simplevisiteur", password : "motdepasse2", status : new Map([ [adherent,"false"], 
 [bibliothecaire , "false"], [gestionnaire , "false"], [responsable , "false"], 
 [admin , "false"], [abonnementajour , "false"]]), listofbook : []});

users.set("3",{name : "Adherentpasajour", firstname : "Maxime", dateofbirth : "22/03/2000",
 address1 : "3 rue des Exemples", adress2 : "" ,postalcode : "75000", city : "Paris", 
 email : "maxime-adherenpasajour@exemple.com", mobilenumber : "06 00 00 00 01", homenumber : "", 
 username : "maxime.adherenpasajour", status : new Map([ [adherent,"true"], 
 [bibliothecaire , "false"], [gestionnaire , "false"], [responsable , "false"], 
 [admin , "false"], [abonnementajour , "false"]]), listofbook : ["1","2"]});

users.set("4",{name : "Adherentajour", firstname : "Alex", dateofbirth : "01/01/1984",
 address1 : "4 rue des Exemples", adress2 : "" ,postalcode : "75000", city : "Paris", 
 email : "alex-adherentajour@exemple.com", mobilenumber : "06 00 40 00 00", homenumber : "01 04 00 00 00", 
 username : "alex.adherentajour", status : new Map([ [adherent,"true"], 
 [bibliothecaire , "false"], [gestionnaire , "false"], [responsable , "false"], 
 [admin , "false"], [abonnementajour , "true"]]), listofbook : ["23","24","25"] });

users.set("5",{name : "Legestionnaire", firstname : "Pierre-Claude", dateofbirth : "25/04/1974",
 address1 : "5 rue des Exemples", adress2 : "" ,postalcode : "75000", city : "Paris", 
 email : "pierre-claude@exemple.com", mobilenumber : "06 05 00 25 00", homenumber : "01 05 25 04 74", 
 username : "pierre-claude", status : new Map([ [adherent,"false"], 
 [bibliothecaire , "false"], [gestionnaire , "true"], [responsable , "false"], 
 [admin , "false"], [abonnementajour , "false"]]), listofbook : []});

 users.set("6",{name : "Laresponsable", firstname : "Anne-Marie", dateofbirth : "06/06/1987",
 address1 : "6 rue des Exemples", adress2 : "" ,postalcode : "75000", city : "Paris", 
 email : "annemarie-laresponsable@exemple.com", mobilenumber : "06 05 00 25 00", homenumber : "01 06 06 06 87", 
 username : "annemarie.laresponsable", status : new Map([ [adherent,"false"], 
 [bibliothecaire , "false"], [gestionnaire , "false"], [responsable , "true"], 
 [admin , "false"], [abonnementajour , "false"]]), listofbook : []}); 

 users.set("7",{name : "Ladmin", firstname : "Jack", dateofbirth : "07/07/1977",
 address1 : "7 rue des Exemples", adress2 : "" ,postalcode : "75000", city : "Paris", 
 email : "jack-ladmin@exemple.com", mobilenumber : "06 07 00 25 00", homenumber : "01 07 07 19 77", 
 username : "jack.ladmin", status : new Map([ [adherent,"false"], 
 [bibliothecaire , "false"], [gestionnaire , "false"], [responsable , "false"], 
 [admin , "true"], [abonnementajour , "false"]]), listofbook : []});

 users.set("8",{name : "Superman", firstname : "Clark", dateofbirth : "25/12/1930",
 address1 : "8 rue des Exemples", adress2 : "" ,postalcode : "75000", city : "Paris", 
 email : "clark.superman@exemple.com", mobilenumber : "06 08 00 25 00", homenumber : "01 25 12 19 30", 
 username : "clark.superman", status : new Map([ [adherent,"true"], 
 [bibliothecaire , "true"], [gestionnaire , "true"], [responsable , "true"], 
 [admin , "true"], [abonnementajour , "true"]]), listofbook : []});

 
 
 





