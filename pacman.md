# Organisation du projet

Le projet contient deux dossiers principaux : 
- Le dossier **/public** contient les fichiers statiques, dont notamment *index.html*, et *bundle.js* qui est le code minifié généré par Webpack.
- Le dossier **/src** contient *index.js*, notre fichier JavaScript principal (le point d'entrée de notre application), ainsi que plusieurs "modules" (ou petits composants) JavaScript.

J'ai fait le choix d'organiser les différents modules JavaScript de la manière suivante:
- Le dossier **/constants** contient tous les "paramètres" du jeu (c'est à dire des différentes variables prédéfinies):
    - *characterConstants.js* : les variables qui concernent les personnages (Pacman et fantômes).
    - *foodConstants.js* : les variables qui concernent la nourriture.
    - *settingConstants.js* : les variables qui concernent les éléments de décors du jeu (surfaces, obstacles).
- Le dossier **/classes** contient les classes Javascripts utilisées pour définir les personnages:
    - *Character.js* : la classe général qui définit les propriétés et méthodes des personnages.
    - *PacMan.js* et *Ghost.js* : les classes qui définissent respectivement les personnages de Pacman et du fantôme. Toutes deux héritent des propriétés et méthodes de la classe Character.
- Le dossier **/functions** contient 
    - 

# Why did I choose the Module Bundler Webpack ?

Webpack is a build and bundling tool which runs on Node.js.
It gives us the possibility to split our JavaScript code in several "components" (or modules), and thus provides a way to better organise our code. Webpack enables us to bundle all our javascript modules, which depend on each other, into a single one.

Webpack is a powerful tool which has many features. It is (maybe) a little too complexe for a small application like this one, since we don't need all the functionnalities provided by Webpack. I chose this bundler mainly because I had already used it on other projects, and already knew how it worked. Since I did not know how long it would take me to do the task and wanted to be sure to finish within deadlines, I felt that Webpack was a good choice.
