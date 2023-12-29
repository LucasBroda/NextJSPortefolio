<p align="center"> Mémoire </p>

## En quoi NextJS permet de réaliser des sites internets éco conçues

### Les routes

#### Les routes sont gérées de manière très simple avec NextJS, en effet, au lieu de devoir créer un fichier contenant toutes les routes de notre projet, ici, nous avons juste à créer un répertoire avec un nom précis, et le contenu présent dans ce répertoire sera directement accessible en faisant -> "http://mon_url/nom_répertoire".


### Gestion du style (suggestion de la part de NextJS d'utiliser Tailwind) (https://nextjs.org/learn/dashboard-app/css-styling)

#### Lorsque l'on effectue le tuto proposé par NextJS, on nous propose l'utilisation d'un framework CSS s'appellant TailwindCSS.
#### Ce framework nous permet d'effectuer du CSS dit "inline" (dans la balise), ainsi, nous pouvons faire du CSS localement dans le fichier, les commandes sont logiques et la documentation est très bonne, de plus, Tailwind nous propose des commandes qui permettent de gérer le côté responsive du site, nous n'avons donc pas besoin d'effectué des changements pour chaque taille d'écran dans notre fichier CSS, ici, ce côté est géré automatiquement.
#### Enfin, Tailwind n'importe que les éléments qui sont utilisés au sein de notre projet, évitant ainsi de surcharger notre projet


### Gestion des fonts (https://nextjs.org/learn/dashboard-app/optimizing-fonts-images)

#### Next.js optimise automatiquement les polices dans l'application lorsque vous utilisez le module next/font. Il télécharge les fichiers de polices au moment de la construction et les héberge avec vos autres ressources statiques. Cela signifie que lorsqu'un utilisateur visite votre application, il n'y a pas de requêtes réseau supplémentaires pour les polices, ce qui aurait un impact sur les performances.

### Gestion des images

#### NextJS propose également un composant "Image" propre au framework, celle-ci gère automatiquement la taille de l'image en fonction de la taille de l'écran sur lequel elle est affichée, le "Lazy loading" est également intégré par défaut au composant. Le composant empêche également la modification automatique de la mise en page lors du chargement des images.


## Les éléments que j'ai utilisé dans mon projet

#### Personnellement, j'ai utilisé le composant "Image" pour la gestion des différentes images présentes dans mon site, ainsi que le framework Tailwind qui est assez facile à prendre en main de part les commandes instinctives, mais également grâce à la bonne documentation qui est fourni.
#### À la base, lorsque j'ai effectué la première version de mon projet, j'utilisais également le système de route fourni par NextJS, mais par la suite j'ai préféré me rabattre sur un site en mode "One Page"