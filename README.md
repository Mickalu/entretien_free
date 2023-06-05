# entretien_free

## Explication du projet

Le projet est en deux parties :
  - un back en Django
  - un front en React

Ces deux parties communiquent via DRF

## Lancement du projet

Le projet est sur Docker donc il vous suffit de vous trouver dans le dossier ___ENTRETIEN_FREE___ où se trouve le fichier ___docker-compose.yml___ et de lancer les commandes :

```
docker-compose build
```

```
docker-compose up
```
Vous retrouverez le front de l'application à l'adresse
```
http://localhost:3001/
```

## Utilisation

Des utilisateurs sont déjà créés dans la base de donnée. Notamment un utilisateur avec comme paramêtre :

Username :
```
Admin
```

Mot de passe :
````
Admin
`````
Mais libre à vous de créer un nouvel utilisateur en cliquant sur le bouton ___Sign up___ et en remplissant le formulaire ensuite.
